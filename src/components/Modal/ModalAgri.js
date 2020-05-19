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

export default function SimpleModalAgri() {
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
      <h2 id="simple-modal-title">Agriculture</h2>
      <p id="simple-modal-description">
      The agricultural industry seems to have embraced drone technology with open arms, using these advanced tools to transform modern farming.
<br></br><br></br>
Take a look at a few ways drone technology is advancing the agriculture industry:
     <br></br><br></br> <strong>Plant Counting and Yield Prediction</strong><br></br>Farmers can improve the accuracy of yield forecasts and accelerate scouting, collecting and analyzing data by using drones to generate plant counts and forecast yield based on surveys of row-based plants.<br></br><br></br><strong>Field Water Pooling
</strong><br></br>
Drones can also help identify standing water in pre-emergent fields, determine flood damage, and monitor permanent water features to improve the accuracy of insurance claims and yield forecasting.<br></br><br></br><strong>Stockpile Monitoring</strong><br></br>To improve the accuracy of materials management, farmers are using drones to monitor stockpile volume of feed, fertilizer, and other agriculture products.



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