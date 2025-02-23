import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateBMI } from "../redux/bmiSlice";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const dispatch = useDispatch();
  const bmi = useSelector((state) => state.bmi.bmi);

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button >Calculate BMI</button>
      {bmi && <h3>Your BMI: {bmi}</h3>}
    </div>
  );
};

export default BMICalculator;
