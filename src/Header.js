import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import "./Header.css"
import { useDataLayerValue } from './DataLayer';

function Header() {

  const [{user}, dispatch] = useDataLayerValue();     //using context value

  return (
    <div className="header">

<div className="header__left">
        <SearchIcon/>
        <input 
         placeholder="Search for Artists, Songs, Albums etc.."
         type = "text"
         />
         </div>

        <div className="header__right">
             <Avatar src={user?.images[0]?.url} alt = ""/>                 
             <h4> {user?.display_name} </h4> 
        </div>
                                                                                  
    </div>
   
    
  )
}

export default Header