import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getBList } from './store/actions';
import { Helmet } from 'react-helmet'

import styles from './style.css'
import withStyle from '../../withStyle'

class B extends Component {
  
  componentDidMount() {
      this.props.getBList();
  }
  
  render() {
    return <Fragment>
      <Helmet>
        <title>
          B
        </title>
      </Helmet>
      <div className={styles.test}>
        page B
        <div>
          {this.props.data}
        </div>
      </div>
    </Fragment>
  }
}

const mapStateToProps = state => ({
  data: state.b.data,
});

const mapDispatchToProps = dispatch => ({
  getBList() {
    dispatch(getBList());
  }
});

const ExportB = connect(mapStateToProps, mapDispatchToProps)(withStyle(B, styles));

ExportB.loadData = (store) => {
  return store.dispatch(getBList())
};

export default ExportB
