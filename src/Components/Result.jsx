// import React from "react";
// import { Stack, Typography } from "@mui/material";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Result = ({ data }) => {
//   const { homeValue, loanAmount, loanTerm, interestRate } = data;
//   const totalLoanMonths = loanTerm * 12;
//   const interestPerMonth = interestRate / 100 / 12;
//   const monthlyPayment =
//     (loanAmount *
//       interestPerMonth *
//       (1 + interestPerMonth) ** totalLoanMonths) /
//     ((1 + interestPerMonth) ** totalLoanMonths - 1);

//   const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

//   const pieChartData = {
//     labels: ["Principle", "Interest"],
//     datasets: [
//       {
//         label: "Ratio of Principle and Interest",
//         data: [homeValue, totalInterestGenerated],
//         backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
//         borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//   <Stack gap={3}>
//     <Typography textAlign="center" variant="h5">
//       Monthly Payment: $ {monthlyPayment.toFixed(2)}
//     </Typography>
//     <Stack direction="row" justifyContent="center">
//       <div>
//         <Pie data={pieChartData} />
//       </div>
//     </Stack>
//   </Stack>
// );
// };

// export default Result;

import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate, propertyTax, homeOwnerInsurance, pmi, hoa, utilities, inspectionFee, attorneyFee, appraisalFee } = data;
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  // Convert propertyTax and homeOwnerInsurance to numbers, or default to 0 if they are empty strings
  const propertyTaxValue = propertyTax ? parseFloat(propertyTax) : 0;
  const homeOwnerInsuranceValue = homeOwnerInsurance ? parseFloat(homeOwnerInsurance) : 0;
  const pmiValue = pmi ? parseFloat(pmi) : 0;
  const hoaValue = hoa ? parseFloat(hoa) : 0;
  const utilitiesValue = utilities ? parseFloat(utilities) : 0;
  const inspectionFeeValue = inspectionFee ? parseFloat(inspectionFee) : 0;
  const attorneyFeeValue = attorneyFee ? parseFloat(attorneyFee) : 0;
  const appraisalFeeValue = appraisalFee ? parseFloat(appraisalFee) : 0;

  const totalLoanAmount = loanAmount + propertyTaxValue + homeOwnerInsuranceValue + pmiValue + hoaValue + utilitiesValue + inspectionFeeValue + attorneyFeeValue + appraisalFeeValue;

  const monthlyPayment =
    (totalLoanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - totalLoanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest", "Property tax", "Homeowner's insurance"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated, propertyTaxValue, homeOwnerInsuranceValue],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: $ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div style={{width: 500, height: 500}}>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;