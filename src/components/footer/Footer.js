import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Grid
} from "@mui/material";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { Link } from "react-scroll";

function Footer() {
  
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(true); 
  };


  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ background: "#3ebbfa", height: {sm:"300px",xs:"400px"} }}>
       <Grid container spacing={2} alignItems="center">
       <Grid item xs={10} sm={10}>
      <Typography style={{fontWeight:"bold",fontSize:"18px",padding:"10px"}}color={"white"} align={"center"}>
        GET in Touch
      </Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
     
        <Link to='home'>
        <ArrowUpwardIcon sx={{ color: "white" }}/>
      </Link>
      </Grid>
      </Grid>
       <form onSubmit={handleSubmit}>
        <Grid container spacing={2}  alignItems="center" padding={"20px"}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                style: { color: "white" }, 
              }}
              
             
            />
          </Grid>

         
          <Grid item xs={12} sm={3} >
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                style: { color: "white" }, 
              }}
              
             
            />
          </Grid>

          
          <Grid item xs={12} sm={3}>
            <TextField
              label="Message"
              name="message"
              required
              multiline
              rows={1}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              
              InputLabelProps={{
                style: { color: "white" }, 
              }}
              
             
            />
          </Grid>

         
          <Grid item xs={12} sm={3}>
            <Button style={{width: "120px",color:"white",background:"#021033"}} type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

     
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>Submitted Details</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
            <strong>Email:</strong> {formData.email}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {formData.phone}
          </Typography>
          <Typography variant="body1">
            <strong>Message:</strong> {formData.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Footer;

