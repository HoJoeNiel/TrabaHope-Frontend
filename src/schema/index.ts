import * as yup from "yup";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const newApplicantAccountSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email.").required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(PASSWORD_REGEX, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Required"),
  phoneNumber: yup.string().required("Required"),
});

export const newCompanyAccountSchema = yup.object().shape({
  companyName: yup.string().required("Required"),
  industry: yup.string().required("Required"),
  companyWebsite: yup.string().required("Required"),
  companyEmail: yup
    .string()
    .email("Please enter a valid email.")
    .required("Required"),
  phoneNumber: yup.string().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(PASSWORD_REGEX, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Required"),
});
