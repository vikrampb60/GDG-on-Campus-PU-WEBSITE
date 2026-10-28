import CursorGlow from '../components/CursorGlow.jsx'
import SiteBackdrop from '../components/SiteBackdrop.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
export default function MainLayout({ children }) {
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gblue focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
    <SiteBackdrop /><CursorGlow /><ScrollProgress /><Navbar />
    <main id="main">{children}</main>
    <Footer />
  </>)
}
