import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from 'components/utils/theme';

export const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ToastContainer />
    </main>
  );
};

export default Layout;
