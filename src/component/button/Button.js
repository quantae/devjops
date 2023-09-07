import React, { Component } from 'react'
import styles from './button.module.css'
export default class Button extends Component {
    constructor(props){
        super(props)
        const onClick = this.props
    }
  render() {
    
    return (
      <div>
        <button className={styles.button}>Load more</button>
      </div>
    )
  }
}
