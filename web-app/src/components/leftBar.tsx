import React, { useState } from 'react';
import {
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Box,
   Typography,
   useMediaQuery
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { leftSideBarRoutes } from '../constants/constants';
import LogoIcon from '../assets/wedLogo.png';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 272;

interface Props {
   closeSideBar?: () => void;
   width?: string | number;
   isLaptop: boolean;
}

function LeftBar(props: Props) {
   const theme = useTheme();
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [clickedIndex, setClickedIndex] = useState<number | null>(null);
   const { pathname } = useLocation();
   const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('md'));


   const logOut = () => {
      hideSideBar();
   };

   const hideSideBar = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
      if (isExtraSmallScreen) props.closeSideBar && props.closeSideBar();
   };

   return (
      <Drawer
         sx={{
            width: drawerWidth,
            textAlign: 'center',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
               width: props?.width,
               boxSizing: 'border-box',
               background: theme.palette.grey[300],
            },
         }}
         variant="permanent"
         anchor="left"
      >
         <List>
            {props.isLaptop ? (
               <Box
                  sx={{
                     marginTop: '38px',
                     marginBottom: '40px',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <Grid container>
                     <Grid xs={12}>
                        <img
                           src={LogoIcon}
                           width={200}
                           loading="lazy"
                           style={{ cursor: 'pointer' }}
                        />
                     </Grid>
                  </Grid>
               </Box>
            ) : (
               <Box
                  sx={{
                     marginTop: '74px',
                     marginBottom: '40px',
                     display: 'flex',
                     alignItems: 'center',
                     pl: '10px',
                     pr: '10px',
                  }}
               >
                  <img
                     src={LogoIcon}
                     loading="lazy"
                     style={{ cursor: 'pointer' }}
                     width="100%"
                     height="100%"
                  />
               </Box>
            )}

            {leftSideBarRoutes.map((item, index) => {
               const pathNameValue = pathname;

               return (
                  <>
                     <ListItem
                        key={item.title}
                        disablePadding
                        sx={{
                           height: 80,
                           bgcolor:
                              pathNameValue === item.href
                                 ? 'primary.main'
                                 : 'transparent',
                           color:
                              pathNameValue === item.href
                                 ? 'white'
                                 : 'customColors.purple_stone',
                        }}
                        onClick={() => setClickedIndex(index)}
                     >
                        <ListItemButton
                           component={Link}
                           to={item.href}
                           onClick={() =>
                              item.title === 'Sign Out'
                                 ? logOut()
                                 : hideSideBar()
                           }
                           sx={{
                              height: 80,
                              padding: '0 12%',
                              ':hover': {
                                 color:
                                    pathNameValue !== item.href
                                       ? '#35514A'
                                       : 'white',
                                 background:
                                    pathNameValue !== item.href
                                       ? 'white'
                                       : null,
                              },
                              justifyContent: !props.isLaptop
                                 ? 'center'
                                 : 'flex-start',
                           }}
                        >
                           {item.icon}

                           {props.isLaptop && (
                              <ListItemText sx={{ padding: '0px 20px' }}>
                                 <Typography variant="side_bar_14">
                                    {item.title}
                                 </Typography>
                              </ListItemText>
                           )}
                        </ListItemButton>
                     </ListItem>
                  </>
               );
            })}
         </List>
      </Drawer>
   );
}

export default LeftBar;
