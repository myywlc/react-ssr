import React, { Component } from 'react';

export default (DecoratedComponent, styles) => class NewComponent extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.css.push(styles._getCss());
    }
  }

  render() {
    return <DecoratedComponent {...this.props} />;
  }
}
