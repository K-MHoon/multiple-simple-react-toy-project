import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/imageShop.module.css';

const HomeHeader = () => {
  return (
    <div className={styles.align_center}>
      <Link to="/">홈</Link>
    </div>
  );
};

export default HomeHeader;
