import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import { Helmet } from 'react-helmet'
import styles from './style.css'
import withStyle from '../../withStyle'

class Home extends Component {
  
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }
  
  getList() {
    const {list} = this.props;
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
  
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            A
          </title>
        </Helmet>
        <div className={styles.test}>
          page A
        </div>
      </Fragment>
    
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));

ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
};

export default ExportHome
