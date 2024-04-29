import React, {useState} from 'react'
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Result from "./Result";
import SliderSelect from "./SliderSelect";
import TenureSelect from "./TenureSelect";

const Calculator = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  })
  return (
    <div>
      <Container maxWidth="xl" sx={{marginTop:4}}>
          <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData}/>
              <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
              <Result data={data}/>
          </Grid>
          </Grid>
      </Container>
  </div>
  )
}

export default Calculator