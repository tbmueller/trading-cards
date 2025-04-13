// @ts-expect-error This is the correct syntax for importing this
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { CardControls } from './components/card-controls'
import { Flex } from 'react-flex-lite';

function App() {
  return (
    <Flex hcenter vcenter w="100vw">
      <CardControls />
    </Flex>
  )
}

export default App
