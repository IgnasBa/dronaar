import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Modal.css';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    border: 0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: '67.5%',
    top: '10%',
    marginLeft: -400,

  },
}));

export default function SimpleModalEne() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className={classes.paper}>
      <h2 id="simple-modal-title">Energy</h2>
      <p id="simple-modal-description">
      Drones are used to improve energy audits and maximize savings in their performance. So the drone use in the energy sector has evolved dramatically in recent years, and with their application has evolved along with their evolution.
<br></br><br></br>
Here are a few examples of how drones are being used to transform this industry:
     <br></br><br></br> <strong>Right-of-way</strong><br></br>Drones are accelerating inspections and protecting uptime by monitoring Right-of-ways.<br></br><br></br><strong>Pipeline Integrity
</strong><br></br>
Managers are reducing the risk of high-consequence events by using drones to visually inspect pipeline conditions.<br></br><br></br><strong>3D Asset Analysis</strong><br></br>Increase the accuracy of asset inventory and reduce climbs by using drones to extract antennas, plumness, rad center, top height, bottom height, width, height, surface area, azimuth, and down tilt measurements.



</p><button type="button" onClick={handleClose} className="closeBtn">
        Close
      </button>
     
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className="openBtn">
        Learn more
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}