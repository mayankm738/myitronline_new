import { Outlet } from 'react-router-dom';

import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

export default function RootLayout() {
return ( <div className="app-shell"> <Navbar />


  <main className="main-content">
    <Outlet />
  </main>

  <Footer />
</div>

);
}
