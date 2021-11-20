import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import RightNav from './rightNav/rightNav'
import { LangContext } from '../../context/langContext'
import { Nav, LogoStyle, LangBtn, LangWrapper } from './mainNavStyles'

const MainNav = () => {
    const { changeLang } = useContext(LangContext)

    return (
        <Nav>
            <div className="main">
                <NavLink to="/" style={LogoStyle}>peter.</NavLink>
                <RightNav />
            </div>
            <LangWrapper>
                <LangBtn onClick={() => changeLang('en')}>EN</LangBtn> 
                <span>|</span> 
                <LangBtn onClick={() => changeLang('svk')}>SVK</LangBtn>
            </LangWrapper>
        </Nav>
    );
};




export default MainNav;
