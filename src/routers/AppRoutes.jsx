//src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage.jsx';
import CatalogPage from '../pages/Catalog/CatalogPage.jsx';
import CamperDetailsPage from '../pages/CamperDetails/CamperDetailsPage.jsx';


const AppRoutes = () => {
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />}></Route>
        <Route path='/catalog/:id' element={<CamperDetailsPage />}></Route>
    </Routes>

};

export default AppRoutes;