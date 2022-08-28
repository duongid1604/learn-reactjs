import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Typography
} from "@mui/material";
import InputField from "components/form-control/InputField";
import PasswordField from "components/form-control/PasswordFiled";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Please enter your full name !")
        .test(
          "Should have two words",
          "Please enter at least 2 words",
          (value) => value.split(" ").length >= 2
        ),

      email: yup
        .string()
        .required("Please enter your email !")
        .email("Please enter a valid email !"),

      password: yup
        .string()
        .required("Please enter your password !")
        .min(6, "Please enter at least 6 characters !"),

      retypePassword: yup
        .string()
        .required("Please retype your password !")
        .oneOf([yup.ref("password")], "Password does not match !"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={"h3"} variant="h5">
            Create an account
          </Typography>

          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Grid item xs={12}>
              <InputField name="fullName" label="Full Name" form={form} />
            </Grid>
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            <PasswordField
              name="retypePassword"
              label="Retype Password"
              form={form}
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, mb: 1 }}
            >
              Create an account
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterForm;
