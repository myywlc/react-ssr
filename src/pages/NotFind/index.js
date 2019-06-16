import React, { Component } from 'react';

class NotFind extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.notFind = true;
    }
  }

  render() {
    return (
      <div>
        not find
      </div>
    );
  }
}

export default NotFind;
