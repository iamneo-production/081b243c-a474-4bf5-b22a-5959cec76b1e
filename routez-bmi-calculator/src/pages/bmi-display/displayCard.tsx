import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { CustomButton } from '../../components/button/button';
import { useLocation, useNavigate } from 'react-router-dom';
import './bmi-display.css';

const DisplayBMI = () => {
  const { state } = useLocation()
  const [bmi, setBmi] = useState("22");
  const [bmiText, setBmiText] = useState("Over");
  const textColor = bmiText === "Avarage" ? "bmi-text-green" : "bmi-text-red";
  const navigate = useNavigate()

  useEffect(() => {
    console.log(state)
    setBmi(state.bmiValue);
    setBmiText(state.categories);
  }, [state])

  return (
    <>
      <div className="container">
        <h2 className="header">Your BMI</h2>
        <div className="container-card">
          <Card className="card" style={{ backgroundColor: "#292D36" }}>
            <CardContent>
              <Typography className="bmi-number" color="#FFF">
                <h1>{bmi}</h1>
              </Typography>
              <Typography className={textColor}>
                {bmiText}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="button-container  full-width">
          <CustomButton
            name="< Go Back"
            size="small"
            onClick={() => { navigate("/") }}
          />
        </div>
      </div>
    </>
  );
}
export default DisplayBMI