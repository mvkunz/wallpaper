// import { UnsplashResponse, Wallpaper } from '../types';

// export const fetchWallpapers = async (page = 1): Promise<Wallpaper[]> => {
//   const response = await fetch(
//     `https://api.unsplash.com/search/photos?query=wallpapers&page=${page}&per_page=4`,
//   );

//   const data = await response.json();
//   const unsplashResults = data.results;

//   return unsplashResults.map((unsplashResult: UnsplashResponse) => {
//     const wallpaper: Wallpaper = {
//       id: unsplashResult.id,
//       title: unsplashResult.description,
//       url: unsplashResult.urls.regular,
//       author: unsplashResult.user.name,
//     }
//     return wallpaper;
//   });
// };