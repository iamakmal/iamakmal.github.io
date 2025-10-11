import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Typewriter from "typewriter-effect";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import backgroundImg from "../assets/background.jpg";

function Home() {
  return (
    <section id="home">
      <div style={{ backgroundImage: `url("${backgroundImg}")` }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundImage: `${backgroundImg}`,
            backgroundPosition: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" align="center">
            Hello There 👋,
          </Typography>
          <Typography variant="h1" align="center">
            I am Akmal
          </Typography>
          <Typography variant="h3" align="center">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full Stack Developer",
                  "Mobile Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/akmal-alavi/"
              style={{ marginRight: "20px" }}
            >
              <LinkedInIcon style={{ color: "black", fontSize: 40 }} />
            </a>
            <a
              href="https://github.com/iamakmal"
              style={{ marginRight: "20px" }}
            >
              <GitHubIcon style={{ color: "black", fontSize: 40 }} />
            </a>
            <a
              href="https://twitter.com/_iamakmal_"
              style={{ marginRight: "20px" }}
            >
              <TwitterIcon style={{ color: "black", fontSize: 40 }} />
            </a>
          </Box>
        </Box>
      </div>
    </section>
  );
}

export default Home;
