import './Nav.css'
import { NavLink } from 'react-router-dom'
import Header from '../../Header/Header'
import { useEffect, useState } from 'react'

const Nav = () => {
    const [show, setShow] = useState(false)
    const scrollNav = () => {
        if (window.scrollY > 600) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollNav)
        return () => {
            window.removeEventListener('scroll', scrollNav)
        }
    }, [])

    return (
        <nav className={show ? ' nav nav_scroll' : 'nav'}>

            <div>
                <img src="/logo1.gif" width="40px" />
            </div>

            <Header />

            <ul>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/About'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Offer'>
                        Offer
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Contact'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Blog'>
                        Blog
                    </NavLink>
                </li>
            </ul>

        </nav >

    )
}

export default Nav;