import React, { Component } from 'react'
import styles from './navbar.module.css';
import {ReactComponent as Icon} from '../../icons/menu.svg'

class NavBar extends Component {
    
  render() {
    return (
      <div className={styles.navbar_container}>
        
        <h3 className={styles.logo}>devjobs</h3>
        <nav>
        <h3 className={styles.menu}><Icon /></h3>
        </nav>
      </div>
    )
  }
}

export default NavBar
