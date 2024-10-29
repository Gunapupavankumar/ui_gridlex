import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Aboutus1 from "../../assets/Aboutus1.jpg"; 
import Aboutus2 from "../../assets/Aboutus2.jpg"; 
import leftarrow from "../../assets/leftarrow.png";
import rightarrow from "../../assets/rightarrow.png";

const images = [Aboutus1, Aboutus2]; 

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
  };

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Typography variant="h5" sx={{ maringTop:"5px",marginBottom:"5px", color:"#021033", fontWeight:"bold", }}>
        About Us
      </Typography>

      <Box
        sx={{
          width: "60%",
          maxWidth: "700px",
          height: "60%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "left",
          border:"18px solid #daed9a",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`About us ${currentIndex + 1}`}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            transition: "opacity 0.5s ease-in-out", 
            opacity: 1, 
          }}
        />
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "1080px",
            background: 'linear-gradient(45deg, transparent 380px, white 0)',
            objectFit: "cover",
            color: "021033", 
            padding: "10px",
            textAlign:"center",
            zIndex: 1, 
          }}
        >

 
          <Box>
          <Typography variant="h5" style={{color:'#021033',fontWeight:'bold',}}>Who we are</Typography>
          
         
          <Typography  variant="h6" style={{fontSize:"16px",fontWeight:'medium', paddingRight:"300px",}}>What we do</Typography>
          <Typography style={{fontSize:"12px", paddingRight:"240px",}}>
          provides in-depth rankings,hospital quality 
          <Box>outcomes, and market analysis data to</Box>
          <Box>help imrpove hospital performance.</Box>
          </Typography>
          </Box>
           <Box>
          <Typography variant="h6" style={{ fontSize:"16px",fontWeight:'medium', paddingRight:"40px",}}>Who we Research</Typography>
          <Typography style={{fontSize:"12px", paddingLeft:"40px",}}>
          <Box> Nursing Homes,Home health  </Box>
          <Box>agencies, hospices, and post-acute </Box>
          <Box>care organizations for CRM,market  </Box>
          <Box>data, and technology solutions. </Box>
            </Typography>
      
        </Box>
        </Box>

      
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0, 
            transform: "translateY(-50%)",
            
          }}
        >
          <img 
            src={leftarrow} 
            alt="Previous" 
            style={{ 
              width: '30px', 
              height: '30px', 
              opacity: 0.7, 
              transition: "opacity 0.3s ease-in-out", 
            } }
          />
        </IconButton>

        
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0, 
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <img 
            src={rightarrow} 
            alt="Next" 
            style={{ 
              width: '30px', 
              height: '30px', 
              opacity: 0.7, 
              transition: "opacity 0.3s ease-in-out", 
            }} 
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default About;
