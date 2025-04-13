import { useState } from 'react';
import { CardControls } from './components/card-controls'
import { TradingCard } from './components/trading-card';
import { NameContext } from './contexts/name';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex gap-2">
        <NameContext value={{ name, setName }}>
          <CardControls />
          <TradingCard />
        </NameContext>
      </div>
    </div>
  )
}

export default App
