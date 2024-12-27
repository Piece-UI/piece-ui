import './App.css';
import Button from './components/Button/Button';
import styled from '@emotion/styled';

const FlexBox = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
  .avatar{
    border-radius: 100%;
  }
`;


function App() {
  return (
    <FlexBox>
          <div>
              <Button 
                label="Piece UI Button" 
                imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20' 
                className='avatar'/>}   
                iconAfter={<i class="fa-solid fa-chevron-right"></i>} 
                className='btn-primary' 
                btnSize='large' 
                rounded='8px' 
                color='accent--65' />
          </div>
    </FlexBox>
  );
}

export default App;
