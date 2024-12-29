import './App.css';
import styled from '@emotion/styled';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonExample from './pages/ButtonExample';
import CardExample from './pages/CardExample';


const FlexBox = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
`;

function App() {
  // const testFn = () => { alert("Hello") };

  return (
    <>
      <BrowserRouter>
        <Navbar FlexBox={FlexBox}></Navbar>

        <Routes>
          <Route path='/buttonExampale' element={<ButtonExample FlexBox={FlexBox}></ButtonExample>}></Route>
          <Route path='/cardsEaxample' element={<CardExample FlexBox={FlexBox}></CardExample>}></Route>
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
