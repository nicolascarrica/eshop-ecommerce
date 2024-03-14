import React from 'react'
import styles from './Footer.module.scss'

const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  const githubUrl = 'https://github.com/nicolascarrica'
  return (
    <div className={styles.footer}>
      <div>
        &copy; {year} All Rights Reserved
      </div>
      
      
      <div>
        <a href={githubUrl}>Made with love by Nicolas</a>
      </div>
      
    </div>
  )
}

export default Footer
