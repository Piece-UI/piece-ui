import Button from "../components/Button/Button";



const ButtonExample = ({FlexBox}) => {
    return (
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
    )
}

export default ButtonExample;