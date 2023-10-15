import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";

function BudgetPage() {
  const [salaryAmount, setSalaryAmount] = useState(0);
  const [sideGigsAmount, setSideGigsAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0);
  const [housingAmount, setHousingAmount] = useState(0);
  const [transportationAmount, setTransportationAmount] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [debtAmount, setDebtAmount] = useState(0);

  const tableStyle = {
    paddingTop: 50,
  };

  const topRowStyle = {
    fontWeight: "bold",
    lineHeight: "1",
    backgroundColor: "#FDDBC2",
  };

  const cellStyle = {
    lineHeight: "1",
  };

  const bottomRowStyle = {
    fontWeight: "bold",
    lineHeight: "1",
    backgroundColor: "#FDC0D3",
  };

  const incomeTableStyle = {
    border: "1px solid #F3C19D",
    width: 500,
    height: 270,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 30,
  };

  const savingsTableStyle = {
    border: "1px solid #F3C19D",
    width: 500,
    height: 225,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 30,
  };

  const expensesTableStyle = {
    border: "1px solid #F3C19D",
    width: 500,
    height: 445,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 30,
  };

  const titleStyle = {
    fontFamily: "Bigshot",
    fontSize: "40px",
    paddingTop: 30,
  };

  // updates the total income as salary + side gigs
  const updateTotalIncome = () => {
    const totalIncome = salaryAmount + sideGigsAmount;
    setTotalIncomeAmount(isNaN(totalIncome) ? 0 : totalIncome);
  };

  // updates total income whenever salary and side gigs change
  React.useEffect(() => {
    updateTotalIncome();
  }, [salaryAmount, sideGigsAmount]);

  // calculates total savings
  const calculateTotalSavings = () => {
    return totalIncomeAmount - totalExpensesAmount;
  };

  // updates the total expenses
  const updateTotalExpenses = () => {
    const totalExpenses =
      housingAmount + transportationAmount + debtAmount + foodAmount;
    setTotalExpensesAmount(isNaN(totalExpenses) ? 0 : totalExpenses);
  };

  // updates total expenses whenever salary and side gigs change
  React.useEffect(() => {
    updateTotalExpenses();
  }, [housingAmount, transportationAmount, debtAmount, foodAmount]);

  return (
    <div>
      <Typography style={titleStyle}>Budgeting, But Better</Typography>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <TableContainer style={incomeTableStyle} aria-label="incomeTable">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={topRowStyle}>
                    Income
                  </TableCell>
                  <TableCell align="center" style={topRowStyle}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Salary
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    <FormControl fullWidth sx={{ m: 1, width: "30ch" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        size="small"
                        value={salaryAmount}
                        onChange={(e) =>
                          setSalaryAmount(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Side Gigs
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    <FormControl fullWidth sx={{ m: 1, width: "30ch" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        size="small"
                        value={sideGigsAmount}
                        onChange={(e) =>
                          setSideGigsAmount(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" style={bottomRowStyle}>
                    Total Income
                  </TableCell>
                  <TableCell align="center" style={bottomRowStyle}>
                    {totalIncomeAmount}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer style={savingsTableStyle} aria-label="savingsTable">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={topRowStyle}>
                    Savings
                  </TableCell>
                  <TableCell align="center" style={topRowStyle}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Total Income
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    {totalIncomeAmount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Total Expenses
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    {totalExpensesAmount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" style={bottomRowStyle}>
                    Total Savings
                  </TableCell>
                  <TableCell align="center" style={bottomRowStyle}>
                    {calculateTotalSavings()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer style={expensesTableStyle} aria-label="expensesTable">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={topRowStyle}>
                    Expenses
                  </TableCell>
                  <TableCell align="center" style={topRowStyle}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Housing
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    <FormControl fullWidth sx={{ m: 1, width: "30ch" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        size="small"
                        value={housingAmount}
                        onChange={(e) =>
                          setHousingAmount(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Transportation
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    <FormControl fullWidth sx={{ m: 1, width: "30ch" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        size="small"
                        value={transportationAmount}
                        onChange={(e) =>
                          setTransportationAmount(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Food
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    <FormControl fullWidth sx={{ m: 1, width: "30ch" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        size="small"
                        value={foodAmount}
                        onChange={(e) =>
                          setFoodAmount(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={cellStyle}>
                    Debt
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    <FormControl fullWidth sx={{ m: 1, width: "30ch" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        size="small"
                        value={debtAmount}
                        onChange={(e) =>
                          setDebtAmount(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" style={bottomRowStyle}>
                    Total Expenses
                  </TableCell>
                  <TableCell align="center" style={bottomRowStyle}>
                    {totalExpensesAmount}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ flex: 1, border: 0 }}>
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: ["Housing", "Transportation", "Debt", "Food"],
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [
                  housingAmount,
                  transportationAmount,
                  debtAmount,
                  foodAmount,
                ],
                color: "#FEEDE0",
              },
            ]}
            width={500}
            height={300}
          />
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: totalIncomeAmount,
                    label: "Income",
                    color: "#FEEDE0",
                  },
                  {
                    id: 1,
                    value: totalExpensesAmount,
                    label: "Expenses",
                    color: "#FEDFC8",
                  },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;
