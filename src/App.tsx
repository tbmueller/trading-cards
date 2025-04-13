// @ts-expect-error This is the correct syntax for importing this
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { CardControls } from './components/card-controls'

function App() {
  return (
      <CardControls />
  )
}

export default App
