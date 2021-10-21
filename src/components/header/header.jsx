import React from 'react';
import './header.css';
import ContentHeader from '../content-header/content-header';


const Header = () => {
    return (
        <header className="header">
                <div className="header__background">
                </div>
                <ContentHeader />
        </header>
    );
}
export default Header;