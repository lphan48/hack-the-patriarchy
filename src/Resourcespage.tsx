import { Box, Grid, Typography } from "@mui/material";
import budgeting from "./images/budgeting.jpeg";
import credit from "./images/credit.jpeg";
import investing from "./images/investing.jpeg";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
function ResourcesPage() {
  const headingStyle = {
    fontFamily: "Bigshot",
    fontSize: "40px",
    paddingTop: 50,
  };

  const nameStyle = {
    fontFamily: "Times New Roman, sans-serif",
    fontSize: "25px",
    paddingTop: 10,
    fontWeight: "bold",
  };

  const descriptionStyle = {
    fontFamily: "Times New Roman, sans-serif",
    fontSize: "23px",
    paddingTop: 10,
    marginLeft: "20%",
    width: "60%",
  };

  const linkStyle = {
    fontFamily: "Verdana",
    fontSize: "15px",
    paddingTop: 10,
    width: "60%",
    color: "maroon",
  };

  const gridItemStyle = {
    backgroundColor: "#FFE8F3",
  };

  const [text, setTextt] = useState("");
  return (
    <div className="About" style={{ paddingBottom: 50 }}>
      <Typography style={headingStyle}>Her Money, Her Rules 💅</Typography>
      <Typography style={descriptionStyle}>
        An introduction to all things personal finance
      </Typography>
      <Box
        sx={{
          paddingTop: 7,
        }}
      >
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item>
            <img
              src={budgeting}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Budgeting</Typography>
            <a
              href="https://www.ramseysolutions.com/budgeting/how-to-make-a-budget"
              target="_blank"
              style={linkStyle}
            >
              How To Make A Budget <br />
            </a>
            <a
              href="https://www.investopedia.com/terms/b/budget.asp"
              target="_blank"
              style={linkStyle}
            >
              10 Budgeting Mistakes Holding You Back <br />
            </a>
            <a
              href="https://www.discover.com/online-banking/banking-topics/5-budgeting-basics/"
              target="_blank"
              style={linkStyle}
            >
              5 Essential Budgeting Basics <br />
            </a>
            <a
              href="https://www.futurelearn.com/info/courses/financial-analysis-business-performance-planning-budgeting-forecasting-sc/0/steps/192466"
              target="_blank"
              style={linkStyle}
            >
              7 Approaches To Budgeting, Explained <br />
            </a>
            <a
              href="https://www.experian.com/blogs/ask-experian/budget-mistakes-to-avoid/"
              target="_blank"
              style={linkStyle}
            >
              Common Budgeting Mistakes To Avoid <br />
            </a>
          </Grid>
          <Grid item>
            <img
              src={credit}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Building Credit</Typography>
            <a
              href="https://wallethub.com/edu/cs/how-to-build-credit/20579"
              target="_blank"
              style={linkStyle}
            >
              How To Build Credit In 8 Steps <br />
            </a>
            <a
              href="https://www.fool.com/the-ascent/credit-cards/how-credit-cards-work-beginners-guide/"
              target="_blank"
              style={linkStyle}
            >
              How Do Credit Cards Work? <br />
            </a>
            <a
              href="https://www.nerdwallet.com/article/credit-cards/things-to-know-first-credit-card"
              target="_blank"
              style={linkStyle}
            >
              11 Things To Know Before Opening Your First Credit Card <br />
            </a>
            <a
              href="https://www.nerdwallet.com/compare/credit-cards"
              target="_blank"
              style={linkStyle}
            >
              Side By Side Credit Card Comparison <br />
            </a>
          </Grid>
          <Grid item>
            <img
              src={investing}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
                border: "5px solid pink",
              }}
            />
            <Typography style={nameStyle}>Investing</Typography>
            <a
              href="https://hbr.org/2021/08/how-to-make-smart-investments-a-beginners-guide"
              target="_blank"
              style={linkStyle}
            >
              A Beginner's Guide To Investing <br />
            </a>
            <a
              href="https://www.bankrate.com/investing/best-investments-for-beginners/"
              target="_blank"
              style={linkStyle}
            >
              Best Investments For Beginners <br />
            </a>
            <a
              href="https://money.usnews.com/investing/articles/best-investing-books-for-beginners"
              target="_blank"
              style={linkStyle}
            >
              Introductory Investing Books <br />
            </a>
            <a
              href="https://www.investopedia.com/articles/stocks/07/beat_the_mistakes.asp"
              target="_blank"
              style={linkStyle}
            >
              Avoid These Investing Mistakes <br />
            </a>
            <a
              href="https://smartasset.com/investing/types-of-investment"
              target="_blank"
              style={linkStyle}
            >
              Different Investments And How They Work <br />
            </a>
          </Grid>
        </Grid>
      </Box>
      <h4> </h4>
      <footer style={descriptionStyle}>
        Any Questions? Ask Away! <br />
      </footer>
      <TextField
        hiddenLabel
        id="inputTextbox"
        variant="filled"
        size="small"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 600,
        }}
        value={text}
        onChange={(e) => {
          setTextt(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") setTextt("");
        }}
      />
    </div>
  );
}

export default ResourcesPage;
