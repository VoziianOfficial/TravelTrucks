// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.jsx';
import CatalogPage from '../pages/Catalog/CatalogPage.jsx';
import CamperDetailsPage from '../pages/CamperDetailsPage/CamperDetailsPage.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:id' element={<CamperDetailsPage />} />
        </Routes>
    );
};

export default AppRoutes;
