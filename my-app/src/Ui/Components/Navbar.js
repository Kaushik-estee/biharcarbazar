import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import logo from '../../img/logo.png';


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div style={{background:'gray'}} className="container">
            <div  className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img style={{width:'50%'}} src={'https://i.ibb.co/FgqSh66/logo.png'} alt="logo" /> 
                    </NavLink>
                </div>

                <div style={{border:'5px solid red',display:'flex',justifyContent:'space-around'}} className="header__middle__menus">
                <div style={{border:'5px solid red',width:'50%'}}><h1 style={{color:'white'}}>Call: XXXXXXXXXX</h1></div>
                <div>
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    
                     

                    <ul  className={boxClass.join(' ')}>
                   
                    {/* <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li> */}
                    <li className="menu-item " >
                        <NavLink style={{color:'white'}} onClick={toggleClass} activeClassName='is-active' to={`/About`}> About 
                        </NavLink> </li>
                    {/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
                        </ul>
                    </li> */}
                    <li  className="menu-item " ><NavLink style={{color:'white'}} onClick={toggleClass}
                     activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>

                    </ul>


                    </nav>  
                    </div>   
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu
