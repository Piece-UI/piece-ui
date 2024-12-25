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
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='md' 
                rounded='0'
                color='accent-60' />
              </div>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='small' 
                color='accent-60' />
              </div>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='large' 
                color='accent-60' />
              </div>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='small' 
                color='accent-60' />
              </div>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='small' 
                color='accent-60' />
              </div>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='small' 
                color='outline-error-100' />
              </div>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='small' 
                rounded='0'
                color='outline-accent-75' />
              </div>
        </FlexBox>
   
  );
}

export default App;
