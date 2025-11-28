import React from 'react';

import styles from './Auth.module.css';
import logo from '@assets/img/logo-light.png';

import { BadgeCheck, ChromeIcon } from 'lucide-react';

const Auth: React.FC = () => {
  
  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Увійдіть в систему</h1>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Логін або email"
            className={styles.input}
            autoComplete="username"
            disabled={true}
          />
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
            autoComplete="current-password"
            disabled={true}
          />
          <button type="button" className={styles.logInBtn} aria-disabled="true" tabIndex={-1}>
            <BadgeCheck style={{ marginRight: 8 }} /> Увійти
          </button>
          <p className={styles.text}>або</p>
          <button type="submit" className={`${styles.logInBtn} ${styles.googleBtn}`}>
            <ChromeIcon style={{ marginRight: 8 }} /> Увійти через Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;