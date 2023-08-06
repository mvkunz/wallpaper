import { Link } from 'react-router-dom';
import { wallpapers } from '../../data/wallpapers';
import styles from './wallpapers.module.css';

function Wallpapers() {
  return (
    <>
      <h1>Wallpapers</h1>
      <div className={styles.wallpapersListContainer}>
        {wallpapers.map((wallpaper) => (
          <div className={styles.cardContainer} key={wallpaper.id}>
            <div className={styles.cardTitle}>
              <p className={styles.cardTitle}>{wallpaper.title}</p>
            </div>
            <img
              className={styles.cardImage}
              src={wallpaper.url}
              alt={wallpaper.title}
            />
            <Link
              className={styles.cardButtonRight}
              to={`/wallpaper-details/${wallpaper.id}`}
            >
              Detalhes
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}

export default Wallpapers;

// COM USESTATE E USEEFFECT:
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// // import { wallpapers } from '../../data/wallpapers';
// import styles from './wallpapers.module.css';
// // import { fetchWallpapers } from '../../services/unsplashAPI';

// function Wallpapers() {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getWallpapers = async () => {
//       try {
//         setLoading(true);
//         const wallpaperssResponse = await fetchWallpapers();
//         setWallpapers(wallpaperssResponse);
//         setLoading(false);
//       } catch(error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };
//     getWallpapers();
//   }, []);

//   return (
//     <>
//       <h1>Wallpapers</h1>
//       <div className={styles.wallpapersListContainer}>
//         {wallpapers.map((wallpaper) => (
//           <div className={styles.cardContainer} key={wallpaper.id}>
//             <div className={styles.cardTitle}>
//               <p className={styles.cardTitle}>{wallpaper.title}</p>
//             </div>
//             <img
//               className={styles.cardImage}
//               src={wallpaper.url}
//               alt={wallpaper.title}
//             />
//             <Link
//               className={styles.cardButtonRight}
//               to={`/wallpaper-details/${wallpaper.id}`}
//             >
//               Detalhes
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className={styles.footer}>
//         <Link to="/">Voltar</Link>
//       </div>
//     </>
//   );
// }

// export default Wallpapers;
