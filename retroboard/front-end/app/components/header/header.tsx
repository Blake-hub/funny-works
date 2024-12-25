// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
'use client'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';

import './style.css'
import { useState } from 'react';
export default function Header() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="header-bar">
      {/* <div><ArrowBackIosNewOutlinedIcon color='success' />This is a header bar.<ArrowForwardIosOutlinedIcon /></div> */}
      <div className='header-bar-content'>
        <IconButton aria-label="expand" onClick={() => setToggle(!toggle)} >
          {toggle?<ArrowForwardIosOutlinedIcon />: <ArrowBackIosNewOutlinedIcon color='success' />}
        </IconButton>
        <div>Welcome!</div>
      </div>
    </div>
  )
}