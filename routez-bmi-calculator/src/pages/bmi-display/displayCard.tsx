import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { CustomButton } from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import '../bmi-display/bmi-display.css'; 

const DisplayBMI = () => {
  const [bmi, setBmi] = useState("22");
  const [bmiText, setBmiText] = useState("Over");
  const textColor = bmiText === "Avarage" ? "bmi-text-green" : "bmi-text-red";
  const navigate = useNavigate()
  useEffect(() => {

    const apiUrl = '';
    fetch(apiUrl)
      .then(response => {

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBmi(data.bmi);
        setBmiText(data.bmi);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [])

  return (
    <>
      <div className="container">
      <h2 className="header">Your BMI</h2>
      <div className="container-card">
        <Card className="card" style={{backgroundColor:"#292D36"}}>
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
          size="medium"
          onClick={() => { navigate("/") }}
        />
      </div>
    </div>
    </>
  );
}
export default DisplayBMI