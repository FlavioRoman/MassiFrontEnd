import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .required("Nombre de usuario obligatorio")
    .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
    .max(20, "El nombre de usuario debe tener como máximo 20 caracteres"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un dígito"
    ),
});

// Initial form values
export const initialValues = {
  username: "",
  password: "",
};
