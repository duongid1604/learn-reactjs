import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = register(values);
      // const resultAction = await dispatch(action);
      // const user = unwrapResult(resultAction);
      await dispatch(action).unwrap(); // Personal idea following docs

      // close dialog
      const { closeDialog } = props;

      closeDialog && closeDialog();

      // handle toast register successfully
      enqueueSnackbar("Register successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
