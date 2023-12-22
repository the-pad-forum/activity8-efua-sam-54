import Image from 'next/image';
import DP from '../images/nana-adjoa (1).png';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.dp} src={DP} width="124" height="124" alt="" />
      <h1>Efua Afoa Sam</h1>
      <p>A Beginner Web Developer at The PAD Forum</p>

      {/* Social links go here */}
      <div className="social-icons">
        <i className="fab-fa-facebook"></i>
        <i className="fab-fa-twitter"></i>
        <i className="linkedin"></i>
        <i className="fab-fa-github"></i>
      </div>
    </header>
  );
};

export default Header;