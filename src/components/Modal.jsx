import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";

export default function Modal() {
  const [paymentOption, setPaymentOption] = useState("ME");

  const handlePaymentChange = (event) => {
    setPaymentOption(event.target.value);
  };
  return (
    <div className="modalParent">
      <form>
        <TextField label="You" variant="outlined" />
        <TextField label="Friend" variant="outlined" />
        <TextField label="Amount" variant="outlined" />
        <RadioGroup
          row
          aria-label="payment"
          name="payment"
          value={paymentOption}
          onChange={handlePaymentChange}
        >
          <FormControlLabel
            value="ME"
            control={<Radio />}
            label="ME"
            labelPlacement="end"
          />
          <FormControlLabel
            value="FRIEND"
            control={<Radio />}
            label="FRIEND"
            labelPlacement="end"
          />
        </RadioGroup>
      </form>
    </div>
  );
}
