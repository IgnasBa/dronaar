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

export default function SimpleModalInsu() {
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
      <h2 id="simple-modal-title">INSURANCE</h2>
      <p id="simple-modal-description">
      Insurance is among the industries already deploying and expanding the potential of commercial drones, eyeing two strategic objectives: better risk management through improved data collection, and reduced operational costs through improved efficiency and effectiveness related to claims.
<br></br><br></br>
Several applications include:
     <br></br><br></br> <strong>Roof Inspection</strong><br></br>Obtaining detailed aerial imagery and measurements of roofs to accelerate inspections and improve quality assurance.<br></br><br></br><strong>Crop and Field Damage
</strong><br></br>
Applying quantitative measures to fire, hail, water, and wind damage to reduce assessment time, accelerate claims management, and reduce bias and fraud.<br></br><br></br><strong>2D Mapping</strong><br></br>Using drones to produce high-resolution aerial imagery of property before and after a damaging event.



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