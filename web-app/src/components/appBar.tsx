import React from 'react'
import { Avatar, Badge, Box, Divider, FormControl, IconButton, MenuItem, Select, Toolbar} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 272;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    background: theme.palette.common.white,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

interface  Props {
    sideBarScreen: boolean;
    handleDrawerOpen: () => void;
    open: boolean;
    smallScreen: boolean;
}

export default function AppBarComponent({sideBarScreen, handleDrawerOpen, open, smallScreen}: Props) {
  const navigate = useNavigate();

  const changeRoute = (path: string) => {
    navigate(`/home/${path}`);
  };
    
  return (
    <AppBar
    position="fixed"
    open={open}
    sx={sideBarScreen ? { zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1, boxShadow: "none" } : { boxShadow: "none" }}
  >
    <Toolbar
      sx={{ display: "flex", justifyContent: sideBarScreen ? "space-between" : "flex-end" }}
    >
      {sideBarScreen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon color="primary" />
        </IconButton>
      )}
      <Box sx={{ display: "flex" }} gap={3}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{ borderRadius: "8px", boxShadow: "0px 4px 16px 0px rgba(22, 22, 22, 0.10)", background: "#F9F9F9" }}
        //onClick={handleClick}
        >
          <Badge color="secondary" variant="dot">
            <NotificationsIcon sx={{ color: "customColors.purple_stone" }} />
          </Badge>
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", borderRadius: "8px", boxShadow: "0px 4px 16px 0px rgba(22, 22, 22, 0.10)", background: "#F9F9F9", p:"0px 8px" }}>
          <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-standard"
              defaultValue={10}
              disableUnderline
            //onChange={handleChange}
            >
              <MenuItem value={10}>John Doe</MenuItem>
              <MenuItem value={20} onClick={()=>changeRoute("profile")}>My Profile</MenuItem>
              <MenuItem value={30} disabled>Sign out</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Toolbar>
    <Divider
      orientation="horizontal"
      flexItem
      sx={smallScreen ? {borderColor:"#9BA6B166"} : sideBarScreen ?
        { ml: open ? "24px" : "87px", mr: "24px", borderColor:"#9BA6B166" } :
        { ml: "296px", mr: "24px", borderColor:"#9BA6B166" }}
    />
  </AppBar>
  )
}
