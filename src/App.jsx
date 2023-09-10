import Home from './pages/Home';
import Canvas from './canvas/index';
import Customize from './pages/Customize'
function App() {
  return (
    <main className='app transition-all ease-in-out'>
      <Home/>
      <Canvas/>
      <Customize/>
    </main>
  )
}

export default App
