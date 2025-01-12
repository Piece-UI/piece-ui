import './App.css';
import styled from '@emotion/styled';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonExample from './pages/ButtonExample';
import CardExample from './pages/CardExample';
import BadgeExample from './pages/BadgeExample';


const FlexBox = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
  row-gap:10px;
  .avatar{
    border-radius: 100%;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar FlexBox={FlexBox}></Navbar>
        <br />
        <Routes>
          <Route path='/' element={<ButtonExample FlexBox={FlexBox}></ButtonExample>}></Route>
          <Route path='/buttonExampale' element={<ButtonExample FlexBox={FlexBox}></ButtonExample>}></Route>
          <Route path='/cardsEaxample' element={<CardExample FlexBox={FlexBox}></CardExample>}></Route>
          <Route path='/badgeExample' element={<BadgeExample ></BadgeExample>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
