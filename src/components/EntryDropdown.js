import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';

import stationInfo from'../stations.json';


export default function EntryDropdown({ line, type, talui, setTalui }) {

    const StyledMenu = styled((props) => (
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...props}
      />
    ))(({ theme }) => ({
      '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 
          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: (line === "rick")? theme.palette.text.secondary : line,
            marginRight: theme.spacing(1.5),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChoose = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setNewTalui = (stationName) => {
    let newTalui = talui;
    newTalui[type] = stationName;
    setTalui(newTalui);
  }

  return (
    <div>
      <Button
        id="station-select-button"
        aria-controls="station-select-button"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleChoose}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: line==="yellow"? 'black':'',
          backgroundColor: (line === "rick")? '#808080' : line,
          "&:hover": {
                backgroundColor: (line === "rick")? '#808080' : line,
                transform: "translateY(-4px)",
                transition: '0.2s'
          }
        }}
      >
        {talui[type]}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          {
              stationInfo.stations.map((station, index) => {
                if (station.name === talui.entry) { return null; }
                if (station.line.includes(line)) {
                    return (
                      <MenuItem key={index} onClick={()=>{
                        setNewTalui(station.name)
                        handleClose();
                        }} disableRipple>
                        {<DirectionsBusFilledIcon />}
                        {station.name}
                      </MenuItem>
                    );
                }
                return null;
              })
          }
      </StyledMenu>
    </div>
  );
}
