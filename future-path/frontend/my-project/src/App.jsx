import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Faq from './pages/FaqPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandPage from './pages/LandPage';
import SchoolDetail from './components/SchoolDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/school/:id_sekolah' element={<SchoolDetail />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id_berita' element={<NewsDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;