import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>HomePage</Link></li>
                        <li><Link to='/random'>RandomPage</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;