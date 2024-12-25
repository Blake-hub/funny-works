'use client'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { useRouter } from 'next/navigation'

import './styles.css'
export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();

  const homeurl = '/';
  const blogurl = '/blog';
  const boardurl = '/board';

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    switch(index){
      case 0: router.push(homeurl); break;
      case 1: router.push(blogurl); break;
      case 2: router.push(boardurl); break;
      default: router.push(homeurl);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header"> </div>
      <div className='sidebar-content'> 
        {/* <IconButton color='success' aria-label="home" size='large' component={Link} href={url}>
          Home<HomeOutlinedIcon /> 
        </IconButton> */}
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItemButton>
      </List>
      </div>
      <div className="sidebar-footer"> 
      </div>
    </div>
  )
}