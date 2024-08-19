import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, Tooltip } from '@mui/material';
import sleepyIcon from '../images/sleepy.png';
import wakeyIcon from '../images/wakey.png';
import happydoggo from '../images/happydoggo.png';
import './HeaderIcon.css';

export function HeaderIcon() {
  const [currentIcon, setCurrentIcon] = useState(sleepyIcon);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) =>
        prevIcon === sleepyIcon ? wakeyIcon : sleepyIcon
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Tooltip title="Click to witness happy doggo" arrow>
        <img
          className="headerIcon"
          src={currentIcon}
          alt="chiweenie"
          onClick={handleClick}
        />
      </Tooltip>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogContent className="happyDoggoDialog" ref={dialogRef}>
          <img src={happydoggo} alt="Happy Doggo" className="happyDoggoImage" />
        </DialogContent>
      </Dialog>
    </>
  );
}
