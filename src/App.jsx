import Home from './pages/Home';
import CanvasModel from './canvas/index';
import Customize from './pages/Customize'
function App() {
  return (
    <main className='app transition-all ease-in-out'>
      <Home/>
      <CanvasModel/>
      <Customize/>
    </main>
  )
}

export default App
