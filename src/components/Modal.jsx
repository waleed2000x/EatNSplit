/* eslint-disable react/prop-types */
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import ModalSchema from "./ModalSchema";

const iValues = {
  me: "",
  friend: "",
  amount: 0,
  whoPays: "",
};

export default function Modal({ setData, setModal }) {
  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: iValues,
    validationSchema: ModalSchema,
    onSubmit: () => {
      resetForm();
      setData((preVal) => [...preVal, values]);
      setModal(false);
    },
  });

  return (
    <div className="modalParent">
      <form>
        <TextField
          label="You"
          variant="outlined"
          name="me"
          value={values.me}
          onChange={handleChange}
        />
        {errors.me && <div className="error">{errors.me}</div>}
        <TextField
          label="Friend"
          variant="outlined"
          name="friend"
          value={values.friend}
          onChange={handleChange}
        />
        {errors.friend && <div className="error">{errors.friend}</div>}
        <TextField
          label="Amount"
          variant="outlined"
          name="amount"
          value={values.amount}
          onChange={handleChange}
        />
        {errors.amount && <div className="error">{errors.amount}</div>}
        <RadioGroup
          row
          aria-label="payment"
          name="whoPays"
          value={values.whoPayes}
          onChange={handleChange}
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
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}
