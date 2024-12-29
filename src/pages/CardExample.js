import Card from "../components/Card/Card";

const CardExample = ({FlexBox}) => {
    const testFn = ()=>{
        alert('Hi Button')
    }
    return (
        <FlexBox>
            <Card
                // bgCustomColor='burlywood'
                // textColor='white'
                bgColor='alert-60'
                cardRound=' 0 30px 0 30px'
                cardHeading='Lorem Ipsum'
                actions={[
                    { icon: 'https://www.svgrepo.com/download/13662/share.svg', onClick: testFn },
                    { icon: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/settings-87.png', onClick: testFn },
                    { icon: 'https://www.svgrepo.com/show/178323/cross-close.svg', onClick: testFn },
                ]}
                cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                cardBodyTitle='Lorem Ipsum'
                cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
                footerActions={[
                    {
                        btnText: 'Cancel',
                        color: 'outline-error-100',
                        onClick: testFn
                    },
                    {
                        btnText: 'Ok',
                        color: 'accent-60',
                        onClick: testFn
                    },
                    {
                        btnText: 'Ok',
                        color: 'accent-70',
                        onClick: testFn
                    },
                    {
                        btnText: 'Ok',
                        color: 'accent-80',
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
                    { icon: 'https://www.svgrepo.com/download/13662/share.svg', onClick: testFn },
                    { icon: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/settings-87.png', onClick: testFn },
                    { icon: 'https://www.svgrepo.com/show/178323/cross-close.svg', onClick: testFn },
                ]}
                cadrImg='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                cardBodyTitle='Lorem Ipsum'
                cardText="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the when an unknown"
                footerActions={[
                    {
                        btnText: 'Cancel',
                        color: 'outline-error-100',
                        onClick: testFn
                    },
                    {
                        btnText: 'Submit',
                        color: 'accent-60',
                        onClick: testFn
                    },
                    {
                        btnText: 'Ok',
                        color: 'accent-70',
                        onClick: testFn
                    },
                    {
                        btnText: 'Yes',
                        color: 'accent-80',
                        onClick: testFn
                    }
                ]}
            >
            </Card>
        </FlexBox>
    )
}

export default CardExample