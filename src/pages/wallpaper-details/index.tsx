import { Link, useParams } from 'react-router-dom';
import { wallpapers } from '../../data/wallpapers';
import styles from './wallpaper-details.module.css';

function WallpaperDetails() {
  const params = useParams();

  const { wallpaperId } = params;

  const selectedWallpaper = wallpapers.find(
    (wallpaper) => wallpaper.id === Number(wallpaperId)
  );

  return (
    <>
      <div className={styles.wallpaperContainer}>
        <h1 className={styles.wallpaperTitle}>{selectedWallpaper?.title}</h1>
        <img
          className={styles.wallpaperImage}
          src={selectedWallpaper?.url}
          alt={selectedWallpaper?.title}
        />
        <a
          className={styles.downloadLink}
          download={`${selectedWallpaper?.id}-wallpaper.jpg`}
          href={selectedWallpaper?.url}
          title={selectedWallpaper?.title}
        >
          Download
        </a>
        <div className={styles.wallpaperAuthor}>
          {`Autor(a): ${selectedWallpaper?.author} `}
        </div>
      </div>
      <div className={styles.footer}>
        <Link to="/wallpapers">Wallpapers</Link>
      </div>
    </>
  );
}

export default WallpaperDetails;
