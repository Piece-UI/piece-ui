import './App.css';
import Button from './components/Button/Button';
import styled from '@emotion/styled';
import Card from './components/cardComponent/Card';

const FlexBox = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
`;


function App() {
  return (
    <>
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
          color='accent-65' />
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
          color='accent-80' />
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
          color='accent-100' />
      </FlexBox>

      <br></br>
      <FlexBox>
        <Card 
        bgCustomecolor='red'
        cardHeading='Lorem Ipsum' 
        cardShareimg='https://www.svgrepo.com/download/13662/share.svg' 
        cardSettingimg='https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/settings-87.png' 
        cardCloseimg='https://www.svgrepo.com/show/178323/cross-close.svg' 
        cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' 
        cardBodyTitle='Lorem Ipsum'
        cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
        >

        </Card>
        
  
    </FlexBox >

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
    </>

   
  );
}

export default App;
