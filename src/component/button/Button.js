import React, { Component } from 'react'
import styles from './button.module.css'
export default class Button extends Component {
    constructor(props){
        super(props)
        this.loadMoreBtn = this.loadMoreBtn.bind(this)
    }
    loadMoreBtn(){
      alert('No more jobs: class component testing')
    }
  render() {
    
    return (
      <div>
        <button className={styles.button} onClick={this.loadMoreBtn}>Load more</button>
      </div>
    )
  }
}
