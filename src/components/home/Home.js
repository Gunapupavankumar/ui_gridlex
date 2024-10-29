import React, { useEffect, useState } from "react";
import {Box, Typography,Button} from "@mui/material";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg"; 

const banners = [Banner1, Banner2]; 

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banners[currentBanner]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 500,
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          transition: "background-image 1s ease-in-out", 
        }}
      >
        <Box
          sx={{
            marginTop:{xs:"100px",sm:"100px"},
            width: { xs: "100%", sm: "70%", md: "50%" },
            textAlign: "left",
            padding: 3,
          }}
        >
          <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'light',color:"#021033" }} gutterBottom>
        Quick Solutions for all Needs
      </Typography>
      <Typography variant="h3" color="textSecondary" style={{ fontWeight: 'bold', color:"#021033", }}>
        Your <span style={{ color:"#3ebbfa", }}>Succes</span>s is <Box>our <span style={{ fontSize: "70px",fontWeight: 'bold',color:"#021033", }}>Motto</span></Box>
      </Typography>

      <Button
      variant="contained"
      sx={{
        backgroundColor: '#021033',
        color: 'white',
        marginBottom:{xs:"10px"},
      }}
    >
      Sign Up
    </Button>
        </Box>
       
      </Box>
    </Box>
  );
};

export default Home;
