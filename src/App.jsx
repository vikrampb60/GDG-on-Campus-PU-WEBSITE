import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './layouts/MainLayout.jsx'
import BotIntro from './components/BotIntro.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import EventDetails from './pages/EventDetails.jsx'
import Team from './pages/Team.jsx'
import Community from './pages/Community.jsx'
import Contact from './pages/Contact.jsx'
import Join from './pages/Join.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const location = useLocation()
  const [stage, setStage] = useState('intro')
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  const toBot = () => setStage(s => s === 'intro' ? 'bot' : s)
  const done = () => setStage('site')
  return (<>
    <AnimatePresence>{stage === 'intro' && <LoadingScreen key="intro" onDone={toBot} />}{stage === 'bot' && <BotIntro key="bot" onDone={done} />}</AnimatePresence>
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  </>)
}
