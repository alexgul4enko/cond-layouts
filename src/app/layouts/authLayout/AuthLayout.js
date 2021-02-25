import PropTypes from 'prop-types'
import { Link } from '@cranium/router'
import styles from './auth-layout.module.scss'
import logo from '@img/logo_login.png'
import React from 'react'

AuthLayout.propTypes = {
  children: PropTypes.node,
}

AuthLayout.defaultProps = {
  children: null,
}

export default function AuthLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="root"><img src={logo} alt="logo" className={styles.logo}/></Link>
      </header>
      <div className={styles.main}>
        {children}
      </div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
