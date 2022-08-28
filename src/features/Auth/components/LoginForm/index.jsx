import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import InputField from "components/form-control/InputField";
import PasswordField from "components/form-control/PasswordFiled";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup
    .object({
      identifier: yup
        .string()
        .required("Please enter your email !")
        .email("Please enter a valid email !"),

      password: yup
        .string()
        .required("Please enter your password !")
        .min(6, "Please enter at least 6 characters !"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
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
            Sign in
          </Typography>

          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="identifier" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, mb: 1 }}
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default LoginForm;
