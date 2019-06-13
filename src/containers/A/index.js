import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import styles from './style.css'
import withStyle from '../../withStyle'

class A extends Component {
  
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

export default withStyle(A, styles)
