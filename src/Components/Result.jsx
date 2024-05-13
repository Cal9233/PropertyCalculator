import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const calculateMonthlyPayment = ({
  homeValue,
  downPayment,
  interestRate,
  loanAmount,
  tenureYears,
  propertyTax = 0,
  homeOwnerInsurance = 0,
  pmi = 0,
  hoaFees = 0,
  utilities = 0,
  inspectionCosts = 0,
  attorneyCharges = 0,
  appraisalFees = 0,
}) => {
  // Convert annual interest rate to monthly interest rate
  const monthlyInterestRate = interestRate / 12 / 100;

  // Convert tenure from years to months
  const numberOfPayments = tenureYears * 12;

  // Calculate the loan amount
  const loanAmountValue = loanAmount ? loanAmount : homeValue - downPayment;

  // Calculate monthly payment using the formula
  const monthlyPayment =
    (loanAmountValue * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  // Calculate total payment over the life of the loan
  const totalPayment = monthlyPayment * numberOfPayments;

  const totalInterestGenerated = totalPayment - loanAmountValue;

  // Add optional costs to monthly payment
  const totalMonthlyPayment =
    monthlyPayment +
    propertyTax +
    homeOwnerInsurance +
    pmi +
    hoaFees +
    utilities +
    inspectionCosts +
    attorneyCharges +
    appraisalFees;

  // console.log({
  //   totalMonthlyPayment,
  //   totalInterestGenerated,
  //   homeValue,
  //   propertyTax,
  // });

  return {
    totalMonthlyPayment: parseInt(totalMonthlyPayment)?.toFixed(2),
    totalInterestGenerated,
    homeValue,
    propertyTax,
    homeOwnerInsurance,
  };
};

const Result = ({ data }) => {
  const {
    homeValue,
    propertyTax,
    homeOwnerInsurance,
    totalMonthlyPayment,
    totalInterestGenerated,
  } = calculateMonthlyPayment(data);

  const pieChartData = {
    labels: ["Principle", "Interest", "Property tax", "Homeowner's insurance"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [
          homeValue,
          totalInterestGenerated,
          propertyTax,
          homeOwnerInsurance,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log({ totalMonthlyPayment });

  return (
    <Stack gap={3}>
      {totalMonthlyPayment && totalMonthlyPayment !== "NaN" ? (
        <>
          <Typography textAlign="center" variant="h5">
            Monthly Payment: $ {totalMonthlyPayment || 0}
          </Typography>
          <Stack direction="row" justifyContent="center">
            <div style={{ width: 500, height: 500 }}>
              <Pie data={pieChartData} />
            </div>
          </Stack>
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default Result;
