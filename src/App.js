import './App.css';
import Button from './components/Button/Button';
import styled from '@emotion/styled';

const FlexBox = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
`;


function App() {
  return (
    <FlexBox>
          <div>
              <Button label="Piece UI Button" className='btn-primary' btnSize='small' rounded='8px' color='accent-60' />
          </div>
    </FlexBox>
  );
}

export default App;
