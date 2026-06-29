import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import WeddingPage from '../pages/WeddingPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<WeddingPage />}
      />
    </Routes>
  );
};

export default AppRoutes;