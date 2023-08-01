import { Link } from 'react-router-dom';
import styles from './home.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homeTile}>Wallpaper App</h1>
      <p className={styles.homeDescription}>
        Explore nossa coleção incrível de wallpapers
      </p>
      <Link to="/wallpapers">Explorar Wallpapers</Link>
    </div>
  );
}

export default HomePage;
