import { Box, Grid, Typography } from "@mui/material";
import lauren from "./images/lauren-headshot.jpg";
import nicole from "./images/nicole-headshot.jpeg";
import gabby from "./images/gabby-headshot.jpeg";
import shree from "./images/shree-headshot.jpeg";

function AboutPage() {
  const headingStyle = {
    fontFamily: "Bigshot",
    fontSize: "40px",
    paddingTop: 50,
  };

  const nameStyle = {
    fontFamily: "Times New Roman, sans-serif",
    fontSize: "18px",
    paddingTop: 10,
    fontWeight: "bold",
  };

  const descriptionStyle = {
    fontFamily: "Times New Roman, sans-serif",
    fontSize: "18px",
    paddingTop: 30,
    marginLeft: "20%",
    width: "60%",
  };

  return (
    <div className="About">
      <Typography style={headingStyle}>About the Team</Typography>
      <Box
        sx={{
          paddingTop: 7,
        }}
      >
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item>
            <img
              src={lauren}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Lauren Phan</Typography>
          </Grid>
          <Grid item>
            <img
              src={nicole}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Nicole Buckley</Typography>
          </Grid>
          <Grid item>
            <img
              src={gabby}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Gabby Hylton</Typography>
          </Grid>
          <Grid item>
            <img
              src={shree}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Shree Singhal</Typography>
          </Grid>
        </Grid>
        <Typography style={descriptionStyle}>
          We are a dedicated group of Northeastern Students driving positive
          change in the field of financial literacy for women. As broke college
          students in a male dominated industry, we're determined to create
          innovative solutions and resources that empower women to take control
          of their financial futures and thrive.
        </Typography>
      </Box>
    </div>
  );
}

export default AboutPage;
