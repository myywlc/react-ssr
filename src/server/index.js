import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import { render } from './utils'
import { getServerStore } from '../store'
import routes from '../Routes'

const app = express();

app.use(express.static('public'));

app.use('/api', proxy('http://localhost:8080', {
  proxyReqPathResolver: function (req) {
    console.log(req.url);
    return '/ssr/api' + req.url;
  }
}));

app.get('*', function (req, res) {

  const store = getServerStore(req);
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      });
      promises.push(promise)
    }
  });

  Promise.all(promises).then(() => {
    const context = {css: []};
    const html = render(store, routes, req, context);
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.notFind) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  }).catch(() => {
    res.send('sorry, request error')
  })

});

app.listen(3000);

