import { CardControls } from './components/card-controls'
import { CardView } from './components/card-view';

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex gap-2">
        <CardControls />
        <CardView />
      </div>
    </div>
  )
}

export default App
