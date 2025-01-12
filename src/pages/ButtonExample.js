import Button from "../components/Button/Button";



const ButtonExample = ({ FlexBox }) => {
    const testfn = () => { alert("Hello") };

    return (
        <FlexBox>
            <div>
                <Button
                    iconAfter={<i className="fa-solid fa-bell"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    badgeColor="red"
                    color='accent--65'
                    disabled={false}
                    isNotifyDot={true}
                    badgeSize='small'
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    iconAfter={<i className="fa-solid fa-bell"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    badgeColor="orange"
                    color='accent--65'
                    disabled={false}
                    isNotifyNum={true}
                    notifyCount='98'
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    badgeColor="#000000"
                    color='accent--65'
                    disabled={false}
                    isNotifyNum={true}
                    notifyCount='100'
                    badgeSize='md'
                    onClick={testfn} />
                    
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    color='accent--65'
                    disabled={false}
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    color='accent--65'
                    disabled={false}
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    color='accent--65'
                    disabled={false}
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    color='accent--65'
                    disabled={false}
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    color='accent--65'
                    disabled={false}
                    onClick={testfn} />
            </div>
            <div>
                <Button
                    label='Piece Button UI'
                    imgIconBefore={<img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' width='20' height='20'
                        className='avatar' alt="avatar" />}
                    iconBefore={<i className="fa-solid fa-user"></i>}
                    iconAfter={<i className="fa-solid fa-chevron-right"></i>}
                    className='btn-primary'
                    btnSize='large'
                    rounded='8px'
                    color='accent--65'
                    disabled={false}
                    onClick={testfn} />
            </div>
        </FlexBox>
    )
}

export default ButtonExample;