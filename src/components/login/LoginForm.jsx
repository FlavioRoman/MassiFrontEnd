import Logo02 from "../../assets/Logo_2.png";
import SendIcon from "@mui/icons-material/Send";
import { Link, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Logo,
  Title,
  Message,
  Section,
  Welcome,
  Content,
  Ilustration,
} from "./styleLogin";
import { initialValues, validationSchema } from "./utils/validationForm";

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values); // Replace with your own logic for form submission
  };

  return (
    <Section>
      <Ilustration className="login-image" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Content>
            <Logo src={Logo02} alt="logo.png" />
            <Welcome>
              <Title>Bienvenido</Title>
              <Message>Inicia sesión a tu cuenta</Message>
            </Welcome>
            <Field
              type="text"
              as={TextField}
              name="username"
              variant="outlined"
              sx={{ width: "100%" }}
              label="Nombre De Usuario"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
            <Field
              type="password"
              as={TextField}
              name="password"
              label="Contraseña"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
            <Link
              href="#"
              underline="none"
              sx={{ color: "#E25139", margin: "20px auto" }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <Button
              type="submit"
              color="error"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                width: "100%",
                background: "#E25139",
                marginBottom: "30px",
              }}
            >
              INGRESAR
            </Button>
            <p style={{ color: "#575D64" }}>
              ¿Tu empresa aún no tiene cuenta?{" "}
              <Link href="#" underline="none" sx={{ color: "#E25139" }}>
                Elige un plan
              </Link>{" "}
            </p>
          </Content>
        </Form>
      </Formik>
    </Section>
  );
};

export default LoginForm;
