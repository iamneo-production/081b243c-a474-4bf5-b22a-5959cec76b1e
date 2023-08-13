import React, { useState } from "react";
import { CustomButton } from "../../components/button/button";
import {ValueSelector} from "../../components/value-selector/value-selector";

import "./bmi-calculator.css";

export const BMICalculator = () => {
    const [height, setHeight] = useState<number>(50);
    const [weight, setWeight] = useState<number>(20);

    const heightOnChange = (value: number) => setHeight(value);
    const weightOnChange = (value: number) => setWeight(value);
    const handleCalculation = () => {
        const BMI = weight / ((height/100) ^ 2);
        console.log(BMI);
    }

  return (
    <div className="wrapper">
      <h2 className="header">{"Male"}</h2>
      <ValueSelector description="Your Height (cm):" value={height} valueOnChange={heightOnChange}/>
      <ValueSelector description="Your Weight (kg):" value={weight} valueOnChange={weightOnChange}/>
      <CustomButton variant="contained" name="CALCULATE" size="large" className="calculate-button" onClick={handleCalculation}/>
    </div>
  );
};
