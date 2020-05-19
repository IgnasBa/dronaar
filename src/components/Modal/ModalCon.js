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
    left: '15%',
    top: '10%',
    

  },
}));

export default function SimpleModalCon() {
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
      <h2 id="simple-modal-title">Construction</h2>
      <p id="simple-modal-description">
      With a 15-minute flight, a drone pilot can gather the same visual data that it might take a surveyor working for a construction company half a day to collect by walking on foot.
<br></br><br></br>
Here are a few ways aerial intelligence is being used to transform the construction industry.
     <br></br><br></br> <strong>Jobsite Reports and Progress Monitoring</strong><br></br>Aerial imagery is being used to track and report daily progress in reducing claims and helps to improve the accuracy of scope, schedule, and cost estimates.<br></br><br></br><strong>Volume Measurement
</strong><br></br>
Calculating cut-fill and liquids volumes to increase the accuracy and authority of of measurable work reports and accelerate surveys, project engineering, and management.<br></br><br></br><strong>Security and Monitoring</strong><br></br>Monitoring job sites with aerial surveys of equipment and materials to protect against loss of material and reduce claims.



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