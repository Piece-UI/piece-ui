import Card from "../components/Card/Card";

const CardExample = ({ FlexBox }) => {
    const testFn = () => {
        alert('Hi Button')
    }
    return (
        <FlexBox>
            <Card
                border='1px solid black'
                // bgCustomColor='burlywood'
                // textColor='white'
                bgColor='alert-60'
                cardRound='5px'
                cardHeading='Lorem Ipsum'
                actions={[
                    { image: <img src="https://www.svgrepo.com/download/13662/share.svg" onClick={testFn} width={20} height={20} alt="img" /> },
                    { icon: <i className="fa-solid fa-user"></i> },
                ]}
                cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                cardBodyTitle='Lorem Ipsum'
                cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
                footerActions={[
                    {
                        btnText: 'Cancel',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconBefore: <i className="fa-solid fa-user"></i>
                    },
                    {
                        btnText: 'Ok',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconAfter: <i className="fa-solid fa-user"></i>
                    },
                    {
                        btnText: 'Ok',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconBefore: <i className="fa-solid fa-user"></i>
                    },
                    {
                        btnText: 'Ok',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconAfter: <i className="fa-solid fa-user"></i>
                    }
                ]}
            >
            </Card>
            <Card
                // bgCustomColor='blanchedalmond'
                border='1px solid black'
                textColor='#000'
                cardRound='5px'
                cardHeading='Lorem Ipsum'
                actions={[
                    { image: <img src="https://www.svgrepo.com/download/13662/share.svg" onClick={testFn} width={20} height={20} alt="img" />, className:"" },
                    { icon: <i className="fa-solid fa-user"></i> , className:"avtar__icon" },
                    { image: <img src="https://www.svgrepo.com/show/178323/cross-close.svg" onClick={testFn} width={20} height={20} alt="img" /> }
                ]}
                cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                cardBodyTitle='Lorem Ipsum'
                cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
                footerActions={[
                    {
                        btnText: 'Cancel',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconBefore: <i className="fa-solid fa-user"></i>
                    },
                    {
                        btnText: 'Ok',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconBefore: <i className="fa-solid fa-user"></i>
                    },
                    {
                        btnText: 'Ok',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconBefore: <i className="fa-solid fa-user"></i>
                    },
                    {
                        btnText: 'Ok',
                        className: 'btn-primary',
                        color: 'accent--65',
                        onClick: testFn,
                        iconBefore: <i className="fa-solid fa-user"></i>
                    }
                ]}
            >
            </Card>
        </FlexBox>
    )
}

export default CardExample