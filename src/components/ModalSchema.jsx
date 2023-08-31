import * as Yup from "yup";

const ModalSchema = Yup.object({
  me: Yup.string().required("Required"),
  friend: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  whoPays: Yup.string().required("Required"),
});

export default ModalSchema;
