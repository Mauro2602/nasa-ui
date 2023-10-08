import React from 'react';
import styles from '../styles.module.css';
import { NavBar } from '../../components';

export const VideoDetail = ({ title = '', description = '', video = '' }) => {
    return (
      <div className={styles.detail}>
        <NavBar title={'Detalle video'} />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <iframe width={'100%'} height={'250'} src={video} title={'YouTube video player'} frameBorder={'0'} allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'} allowFullScreen></iframe>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };