import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import customTheme from "./theme";
import LeftBar from "./components/leftBar";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import MuiDrawer from "@mui/material/Drawer";
import AppRoutes from "./routes";
import AppBarComponent from "./components/appBar";

const drawerWidth = 272;
const lapScreen = 1537;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "64px",
  [theme.breakpoints.up("md")]: {
    width: "64px",
  },
  [theme.breakpoints.down("md")]: {
    width: "0px",
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function App() {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const sideBarScreen = useMediaQuery(theme.breakpoints.down(lapScreen));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ display: "flex" }}
      >
        <AppBarComponent
          sideBarScreen={sideBarScreen}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          smallScreen={smallScreen}
        />
        {sideBarScreen ? (
          <Box sx={{ display: "flex", width: "100%" }}>
            <CssBaseline />

            <Drawer variant="permanent" open={open}>
              <DrawerHeader
                sx={{
                  zIndex: (theme: { zIndex: { drawer: number } }) =>
                    theme.zIndex.drawer + 1,
                }}
              >
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <LeftBar isLaptop={open} closeSideBar={handleDrawerClose} />
            </Drawer>
            <Box component="main" sx={{ p: "0px", width: "100%" }}>
              <DrawerHeader />
              <Box
                sx={{
                  minHeight: "100vh",
                  width: "100%",
                  paddingLeft: isExtraSmallScreen ? "15px" : 4,
                  paddingRight: isExtraSmallScreen ? "15px" : 4,
                  height: "100%",
                  paddingTop: 4,
                }}
              >
                <AppRoutes />
              </Box>
            </Box>
          </Box>
        ) : (
          <>
            <LeftBar isLaptop={true} width={drawerWidth} />
            <Box
              sx={{
                minHeight: "100vh",
                width: "100%",
                mt: "64px",
                marginLeft: 4,
                marginRight: 4,
                height: "100%",
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <AppRoutes />
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
