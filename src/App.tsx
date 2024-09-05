import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {Accordion, AccordionItem} from "@szhsin/react-accordion"
import Accordion from "./components/Accordion";
import Button from './components/Button';
import RSVPPopup from './layout/RSVPPopup';
function App() {

  const [isRSVPOpen, setRSVPOpen] = useState(true);
  const [count, setCount] = useState(0)
  // const [count1, setCount1] = useState(0)
  // const items = [
  //   { title: 'Item 1', content: <div>Content 1</div>, style: { width: '300px', backgroundColor: '#646cff' ,  margin: "0 auto"} },
  //   { title: 'Item 2', content: <div>Content 2</div>, style: { width: '400px', backgroundColor: '#ffe1e1' ,  margin: "0 auto"} },
  //   { title: 'Item 3', content: <div>Content 3</div>, style: { width: '500px', backgroundColor: '#d1d1d1' ,  margin: "0 auto"} },
  // ];
  const handleRSVPClose = () => {
    setRSVPOpen(false); // 팝업을 닫는 상태 업데이트
  };
  return (
    <>
    <RSVPPopup isOpen= {isRSVPOpen} onClose={handleRSVPClose} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Accordion title='heo' key={'hello'}>
        <p className='dox2'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <Button onClick={() =>  setCount((count) => count + 1)} >
            TEST Count {count}
          </Button>
        </Accordion>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          MJ is {count}
        </button>
        <p className='dox'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
