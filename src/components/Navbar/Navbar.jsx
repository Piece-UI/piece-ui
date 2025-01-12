import './navbar.css'
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    const navFun = ()=>{
        alert('Thanks for login')
    }
    return(
        <>
            <nav>
                <div className="piece__nav_wrapper">
                    <div className="piece__nav_logo">
                        {/* <img src="" alt="" /> */}
                        <h2>Nav Bar</h2>
                    </div>
                    <ul className="piece__nav__list">
                        <li>
                            <Link to='/buttonExampale' className='piece__nav_item'>Buttons Example</Link>
                        </li>
                        <li>
                            <Link to='cardsEaxample' className='piece__nav_item'>Card Example</Link>
                        </li>
                        <li>
                            <Link to='badgeExample' className='piece__nav_item'>Badge Example</Link>
                        </li>
                        <li>
                            <Link to='navExamples' className='piece__nav_item'>Nav Example</Link>
                        </li>
                        <li>
                            <Link to='/home' className='piece__nav_item'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='piece__nav_item'>About</Link>
                        </li>
                    </ul>
                    <div className="piece__nav_action">
                        <Button label='Login' className='btn-primary' onClick={navFun}></Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar