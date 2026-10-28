import PageTransition from '../components/PageTransition.jsx'
import Button from '../components/Button.jsx'
export default function NotFound() {
  return (<PageTransition title="Page not found"><section className="wrap grid min-h-[80vh] place-content-center text-center">
    <p className="display h-hero text-black/10">404</p><h1 className="display h-sec -mt-6">That page doesn't exist.</h1><p className="mt-3 text-mute">Check the address, or head back home.</p>
    <div className="mt-6"><Button to="/">Back to home</Button></div></section></PageTransition>)
}
