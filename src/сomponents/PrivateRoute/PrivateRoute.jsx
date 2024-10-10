import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // або використай контекст для управління станом користувача
import { selectAuthenticated } from '../../redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectAuthenticated); // Перевіряємо, чи авторизований користувач

  // Якщо не авторизований, перенаправляємо на сторінку входу
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Якщо авторизований, відображаємо дочірні компоненти
  return children;
};

