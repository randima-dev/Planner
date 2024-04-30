import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';

export const leftSideBarRoutes = [
   // {
   //    href: '/home',
   //    title: 'HOME',
   //    icon: <HomeIcon />,
   // },
   {
      href: '/home/hotels',
      title: 'Hotels',
      icon: <RestaurantTwoToneIcon />,
   },
   {
      href: '/home/photography',
      title: 'Photography',
      icon: <CameraAltOutlinedIcon />,
   },
   {
      href: '/home/jewellery',
      title: 'Jewellery',
      icon: <DiamondOutlinedIcon />,
   },
   {
      href: '/home/saloons',
      title: 'Saloons',
      icon: <ContentCutOutlinedIcon />,
   },
];
