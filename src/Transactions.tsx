import React, { useState } from "react";
import "./App.css";
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { pink } from "@mui/material/colors";

function Transactions() {
  
  let initArray: Array<Record<string, number>> = [{}]
  const [transactions, setTransactions] = useState(initArray)

  const [transactionName, setTransactionName] = useState("")
  const [transactionCost, setTransactionCost] = useState(0)
  const [transactionCat, setTransactionCat] = useState("")

  function createData(name: any, cost: any, category: any) {
    return { name, cost, category };
  }

  const myAsynFunction = async () => {
    const data = createData(transactionName, transactionCost, transactionCat)
    setTransactions(transactions => [...transactions, data]);
}

  return (
    <div className='page' style={{background: 'pink'}}>
         {/* Input */}
        <div> 
            <FormControl fullWidth sx={{ m: 1, width: "30ch", background: 'white', borderRadius: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Transaction Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    type="text"
                    label="Transaction Name"
                    size="small"
                    value={transactionName}
                    onChange={(e) =>
                      setTransactionName(e.target.value)
                    }
                  />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "30ch", background: 'white', borderRadius: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Transaction Category
                  </InputLabel>
                  <OutlinedInput
                    id="adornment-amount"
                    type="text"
                    label="Transaction Category"
                    size="small"
                    value={transactionCat}
                    onChange={(e) =>
                      setTransactionCat(e.target.value)
                    }
                  />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "30ch", background: 'white', borderRadius: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Transaction Cost
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    type="number"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Transaction Cost"
                    size="small"
                    value={transactionCost}
                    onChange={(e) =>
                      setTransactionCost(parseFloat(e.target.value))
                    }
                  />
              </FormControl>
            
        </div>
        {/* Submit button */}
        {/* Table of Monthly Transactions */}
        {/* Reach gioal: a clear button (for new months) */}
        <div>
          <Button variant="contained" color='secondary' sx={{background: '#ff6666', margin: 5}}
            onClick={myAsynFunction}>
            Submit
          </Button>
        </div>
        <div> 
          {/* Gabbys works  table stuff */}
          <TableContainer component={Paper} sx={{width: '80%', alignItems: 'center', alignSelf: 'center', justifySelf: 'center'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="right">Transactions </TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{transaction.name}</TableCell>
              <TableCell align="right">{transaction.cost}</TableCell>
              <TableCell align="right">{transaction.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  );
}

export default Transactions;

