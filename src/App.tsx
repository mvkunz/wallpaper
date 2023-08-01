import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Wallpapers from './pages/wallpapers';
import WallpaperDetails from './pages/wallpaper-details';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/wallpapers" element={ <Wallpapers /> } />
      <Route
        path="/wallpaper-details/:wallpaperId"
        element={ <WallpaperDetails /> }
      />
    </Routes>
  );
}

export default App;
