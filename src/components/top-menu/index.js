import React, { useEffect } from 'react';
import './style.css';
import { menuItems } from "../../utils/data";

export default function TopNavigation({ onChangePage }) {
    const [activeMenu, setActiveMenu] = React.useState(menuItems[0]);
    useEffect(() => {
        document.title = `Slide News | ${activeMenu}`;
    }, [activeMenu]);

    const menuClick = (menuItem) => {
        setActiveMenu(menuItem);
        onChangePage(menuItem === 'top stories' ? null : menuItem);
    }


    const menu = menuItems.map(menuItem =>
        <li className={activeMenu === menuItem ? 'active' : null} key={menuItem}>
            <button onClick={() => menuClick(menuItem)}>{menuItem}</button>
        </li>
    );

    return (
        <div className="m-container">
            <ul children={menu}/>
        </div>
    )
}