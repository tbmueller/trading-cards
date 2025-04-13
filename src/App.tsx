import { CardControls } from './components/card-controls'
import { Card } from './components/trading-card';

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex gap-2">
        <CardControls />
        <Card/>
      </div>
    </div>
  )
}

export default App
