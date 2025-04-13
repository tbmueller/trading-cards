import { CardControls } from './components/card-controls'
import { Card } from './components/card';

function App() {
  return (
    <div className="flex justify-center w-screen">
      <div className="flex gap-2">
        <CardControls />
        <Card/>
      </div>
    </div>
  )
}

export default App
