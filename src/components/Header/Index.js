import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.css'
import withStyle from '../../withStyle'

class Header extends Component {
  
  render() {
    return <Fragment>
      <div>
        <Link to='/a'>页面 A</Link>
        <br/>
        <Link to='/b'>页面 B</Link>
      </div>
    </Fragment>
  }
  
}

export default withStyle(Header, styles)
