// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import Features from './Component/Features'
import Pricing from './Component/Pricing'
import Footer from './Component/Footer';
import Featured from './Component/Featured';
import FavList from './Component/FavList';
import AddFav from './Component/AddFav';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/features' element={<Features/>}>
        {/* <Route index element={<Featured/>}/> */}
      </Route>
      <Route exact path='/features/:id/:category' element={<Featured/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/addFavFun' element={<AddFav/>}/>
      <Route path='/fav' element={<FavList/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
