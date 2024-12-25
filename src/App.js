import './App.css';
import Button from './components/Button/Button';
import styled from '@emotion/styled';

const FlexBox = styled.div`
  display:flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;


function App() {
  return (
        <FlexBox>
            <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-60' />
              <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-65'/>
              <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-75' /> 
            <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-80'/>
            <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-85' />
            <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-90' />
            
            <Button 
              label="Click Me"  
              className='btn-primary' 
              btnSize='large' 
              imgIconBefore='https://www.svgrepo.com/show/13688/settings.svg' 
              color='accent-100'/>
        </FlexBox>
   
  );
}

export default App;
