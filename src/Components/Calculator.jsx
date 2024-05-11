import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Result from "./Result";
import SliderSelect from "./SliderSelect";
import TenureSelect from "./TenureSelect";
import MoreFilter from "./MoreFilter";
import { useAppContext } from "../Context/AppProvider";

const Calculator = () => {
  const { selectedProperty } = useAppContext();

  const [data, setData] = useState({
    homeValue: 0,
    downPayment: 0,
    loanAmount: 0,
    loanTerm: 5,
    interestRate: 5,
  });

  useEffect(() => {
    if (selectedProperty) {
      setData({
        ...data,
        homeValue: selectedProperty?.price,
        downPayment: selectedProperty?.price * 0.2,
        loanAmount: selectedProperty?.price * 0.8,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProperty?.zpid]);

  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={6} style={{ height: "fit-content" }}>
            <div style={{ marginTop: "10px" }}>
              <SliderSelect data={data} setData={setData} />
            </div>
            <div style={{ marginTop: "10px" }}>
              <TenureSelect data={data} setData={setData} />
            </div>
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              onClick={() => {
                setData({ ...data });
              }}
            >
              Calculate
            </Button>
            <div style={{ marginTop: "10px" }}>
              <MoreFilter data={data} setData={setData} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ height: "fit-content" }}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Calculator;
