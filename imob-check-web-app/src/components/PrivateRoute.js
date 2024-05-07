import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Verifica se o token está armazenado no localStorage para determinar se o usuário está logado
  const isLoggedIn = localStorage.getItem('token');

  return isLoggedIn ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
