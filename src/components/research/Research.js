import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import circle from "../../assets/circle.svg";

const Research = () => {
  const [progress, setProgress] = useState(93);  
  const [progress1, setProgress1] = useState(94); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(93)
      setProgress1(94)
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    
      }}
    >
      <Typography variant="h5" sx={{ marginBottom:{xs:"20px",sm:"50px"}, color:"#021033", fontWeight:"bold", }}>
      Research Progress
      </Typography>

      <Box sx={{ display: "flex",flexDirection:{xs:"column",sm:"row"}, gap:{sm:"160px",xs:"20px",}  }}>
        
    
        <Box position="relative" display="inline-flex">
          <img
            src={circle}
            alt="Circle Background"
            style={{
              width: "180px",
              height: "180px",
              opacity: 0.9,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography variant="h3" color="primary">
              <CountUp start={0} end={progress} duration={2.5} />%
            </Typography>
          </Box>
        </Box>

       
        <Box position="relative" display="inline-flex">
          <img
            src={circle}
            alt="Circle Background"
            style={{
              width: "180px",
              height: "180px",
              opacity: 0.9,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography variant="h3" color="primary">
              <CountUp start={0} end={progress1} duration={2.5} />%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Research;
