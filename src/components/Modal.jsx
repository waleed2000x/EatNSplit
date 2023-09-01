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
  hePaid: 0,
  youPaid: 0,
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
        <TextField
          label="You Paid"
          variant="outlined"
          name="youPaid"
          value={values.youPaid}
          onChange={handleChange}
        />
        <TextField
          label="He Paid"
          variant="outlined"
          name="hePaid"
          value={values.hePaid}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}

/*
const [array, setArray] = useState([
  {
    name:'Waleed',
    age : 23,
    pay : 2000000,
  },
  {
    name:'Ammar',
    age : 33,
    pay : 5000000,
  },
])

const handleDelete = (identifier) => {
    const updatedArray = array.filter((item)=> item !== identifier)
    setArray(updatedArray)
}

array.map((item)=>{
  return(
    <p>item.name</p>
    <p>item.age</p>
    <p>item.pay</p>
    <button onClick={()=> handleDelete(item)}> X </button>
    )
  })
*/
