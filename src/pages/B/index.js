import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getBList } from './store/actions';
import styles from './style.css';
import serverAddStyle from '../../serverAddStyle';

class B extends Component {
  componentDidMount() {
    const { getBListProps } = this.props;
    getBListProps();
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>B</title>
        </Helmet>
        <div className={styles.test}>
          <span>page B</span>
          <div>{data}</div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.b.data
});

const mapDispatchToProps = dispatch => ({
  getBListProps() {
    dispatch(getBList());
  }
});

const ExportB = connect(
  mapStateToProps,
  mapDispatchToProps
)(serverAddStyle(B, styles));

ExportB.loadData = store => store.dispatch(getBList());

export default ExportB;
