import Footer from '../atom/Footer';
import Navbar from '../Navbar';
import { SystemStatusBar } from '../components/system/SystemStatusBar';

export function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-layout__main">{children}</main>
      <SystemStatusBar />
      <Footer />
    </div>
  );
}
