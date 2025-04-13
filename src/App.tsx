// @ts-expect-error This is the correct syntax for importing this
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import "tailwindcss";
import { CardControls } from './components/card-controls'
import { Card } from './components/card';

function App() {
  return (
    <>
      <CardControls />
      <Card/>
    </>
  )
}

export default App
