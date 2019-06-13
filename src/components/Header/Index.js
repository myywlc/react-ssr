import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store/'
import styles from './index.css'
import withStyle from '../../withStyle'

class Header extends Component {
  
  render() {
    return <Fragment>
      <div className={styles.test}>
        <Link to='/a'>页面 A</Link>
        <br/>
        <Link to='/b'>页面 B</Link>
      </div>
    </Fragment>
  }
  
}

const mapState = (state) => ({
  login: state.header.login
});

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(mapState, mapDispatch)(withStyle(Header, styles));

