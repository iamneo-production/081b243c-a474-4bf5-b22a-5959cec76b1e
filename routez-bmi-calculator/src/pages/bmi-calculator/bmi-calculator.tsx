import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/button/button";
import { ValueSelector } from "../../components/value-selector/value-selector";

import "./bmi-calculator.css";

export const BMICalculator = () => {

  const navigate = useNavigate()
  const [height, setHeight] = useState<number>(50);
  const [weight, setWeight] = useState<number>(20);

  const heightOnChange = (value: number) => setHeight(value);
  const weightOnChange = (value: number) => setWeight(value);
  const handleCalculation = () => {
    const requestBody: any = {
      height: height,
      weight: weight,
    };
    fetch(
      "https://8081-cecdbbbebcbbcebefefededfecafbdcdebecae.premiumproject.examly.io/api/calculate",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((resp) => resp.json())
      .then((resp) =>navigate('/bmi', {state: resp}))
      .catch((err) => console.error(err));
      console.log()
  };

  return (
    <div className="wrapper">
      <h2 className="header">{"Male"}</h2>
      <ValueSelector
        description="Your Height (cm):"
        value={height}
        valueOnChange={heightOnChange}
      />
      <ValueSelector
        description="Your Weight (kg):"
        value={weight}
        valueOnChange={weightOnChange}
      />
      <CustomButton
        variant="contained"
        name="CALCULATE"
        size="large"
        className="calculate-button"
        onClick={handleCalculation}
      />
    </div>
  );
};
