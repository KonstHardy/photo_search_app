import React, { useState } from 'react';

import styles from './ScrollButton.module.css';

import { IconArrowUp } from '../icons/IconArrowUp';

export function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={styles.root}
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
      type="button"
    >
      <IconArrowUp />
    </button>
  );
}
