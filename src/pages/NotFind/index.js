import React, { Component } from 'react';

class NotFind extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.notFind = true;
    }
  }

  render() {
    const { staticContext } = this.props;
    return (
      <div>
        not find
        {staticContext}
      </div>
    );
  }
}

export default NotFind;
