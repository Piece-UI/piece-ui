import './App.css';
import Button from './components/Button/Button';
import styled from '@emotion/styled';
import Card from './components/Card/Card';

const FlexBox = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
`;

const testFn = () =>{alert("Hello")};
function App() {
 
  return (
    <>
      <FlexBox>
        <Card 
          bgCustomColor='burlywood'
          textColor='white'
          cardRound=' 0 30px 0 30px'
          cardHeading='Lorem Ipsum' 
          actions={[
            {icon: 'https://www.svgrepo.com/download/13662/share.svg', onClick: testFn},
            {icon: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/settings-87.png', onClick: testFn},
            {icon: 'https://www.svgrepo.com/show/178323/cross-close.svg', onClick: testFn},
          ]}
          cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' 
          cardBodyTitle='Lorem Ipsum'
          cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
          footerActions={[
            {
              btnText:'Cancel',
              color:'outline-error-100',
              onClick: testFn
            },
            {
              btnText:'Ok',
              color:'accent-60',
              onClick: testFn
            },
            {
              btnText:'Ok',
              color:'accent-70',
              onClick: testFn
            },
            {
              btnText:'Ok',
              color:'accent-80',
              onClick: testFn
            }
          ]}
          >
        </Card>
        <Card 
          bgCustomColor='blanchedalmond'
          textColor='#000'
          cardRound='  30px 0 30px 0'
          cardHeading='Lorem Ipsum' 
          actions={[
            {icon: 'https://www.svgrepo.com/download/13662/share.svg', onClick: testFn},
            {icon: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/settings-87.png', onClick: testFn},
            {icon: 'https://www.svgrepo.com/show/178323/cross-close.svg', onClick: testFn},
          ]}
          cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' 
          cardBodyTitle='Lorem Ipsum'
          cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
          footerActions={[
            {
              btnText:'Cancel',
              color:'outline-error-100',
              onClick: testFn
            },
            {
              btnText:'Ok',
              color:'accent-60',
              onClick: testFn
            },
            {
              btnText:'Ok',
              color:'accent-70',
              onClick: testFn
            },
            {
              btnText:'Ok',
              color:'accent-80',
              onClick: testFn
            }
          ]}
          >
        </Card>
  
    </FlexBox >

        <FlexBox>
              <div>
                <Button 
                label="Piece UI Button"  
                className='btn-primary' 
                btnSize='md' 
                rounded='70px'
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
