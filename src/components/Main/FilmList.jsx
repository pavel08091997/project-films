import React from 'react'
import FilmCard from './FilmCard'
import styles from './FilmList.module.css'

const FilmList = () => {
  return (
    <div className={styles.list}>
      <FilmCard/>
      <FilmCard/>
      <FilmCard/>
      <FilmCard/>
      <FilmCard/>
    </div>
  )
}

export default FilmList
