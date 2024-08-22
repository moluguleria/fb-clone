import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useStateValue } from "./StateProvider";


function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='sidebar'>

        <SidebarRow  src  ={user.photoURL} title={user.displayName}/>
        <SidebarRow Icon ={LocalHospitalIcon} title ="COVID-19 Information Center "/>
        <SidebarRow Icon ={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon ={PeopleIcon} title="Friends"/>
        <SidebarRow Icon ={ChatIcon} title="Messenger"/>
        <SidebarRow Icon ={StorefrontIcon} title="MarketPlace"/>
        <SidebarRow Icon ={VideoLibraryIcon} title="Vedios"/>
        <SidebarRow Icon ={ExpandMoreOutlinedIcon} title="MarketPlace"/>
      
    </div>
  )
}

export default Sidebar;