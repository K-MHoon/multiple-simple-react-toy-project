import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/imageShop.module.css';

const MainHeader = () => {
  return (
    <div className={styles.align_right}>
      <Link to="/signin">로그인</Link>
    </div>
  );
};

export default MainHeader;
