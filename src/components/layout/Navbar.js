import React, { useState } from 'react';
import {
  useNavigate 
} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapIcon from '@mui/icons-material/Map';
import TimelineIcon from '@mui/icons-material/Timeline';


export default function SearchAppBar() {

  let navigate = useNavigate()

  const [openDrawer, setOpenDrawer] = useState(false);

  const navigateTo = (dest) => {
    navigate(dest)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component="div"
            align='left'
            sx={{ flexGrow: 1 }}
          >
            Talui KU
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          onKeyDown={() => setOpenDrawer(false)}
        >
          <List>

              <ListItem button key='map' onClick={() => {navigateTo('/')}}>
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText primary='Map' />
              </ListItem>

              <Divider />

              <ListItem button key='graph' onClick={() => {navigateTo('/graph')}}>
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary='Data visualizer' />
              </ListItem>

          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
