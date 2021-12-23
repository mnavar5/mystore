import './navBar.css'
import React from 'react';
import Collapsible from 'react-collapsible';
import fav from '../../img/store1.png';



const NavBar = () => {
    return (
        <Collapsible  trigger='MENU' className='collapsible '>
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <i class='logo fab fa-sketch'>
                    <span className='brand'>
                            Store
                            
                        </span>
                    </i>
                </div>
                <div className='sidebar-center'>
                    <ul className="list">
                        <li className="list-item">
                            <i class='list-item-icon fas fa-home'></i>
                            <span className="list-item-text">
                                Dashboard
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon fas fa-search"></i>
                            <span className="list-item-text">
                                Search
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon fas fa-stream"></i>
                            <span className="list-item-text">
                                Insights
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon fas fa-book"></i>
                            <span className="list-item-text">
                                Docs
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon fas fa-users"></i>
                            <span className="list-item-text">
                                Comunnity
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon fas fa-toolbox"></i>
                            <span className="list-item-text">
                                Tools
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon fas fa-shopping-basket"></i>
                            <span className="list-item-text">
                                Market
                            </span>
                        </li>
                        <li className="list-item">
                            <i class="list-item-icon far fa-question-circle"></i>
                            <span className="list-item-text">
                                Resources
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='sidebar-bottom'></div>
            </div>
            </Collapsible>
    )
};

export default NavBar;
