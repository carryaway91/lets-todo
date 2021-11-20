import { NavLink } from 'react-router-dom'
import { Item, activeLink } from './navItemStyles'

const NavItem = props => {
    return (
        <Item>
            <NavLink to={props.to} activeStyle={activeLink}>{ props.children }</NavLink>
        </Item>
    )
}

export default NavItem