import { emailRegex, passwordRegex, validString } from "utils/regrex";
export const userSchema:any = [
  {
    field: "name",
    label: "Full Name",
    type: "text",
    colSpan: 12,
    regex: validString,
    errorMessage: "Please provide valid full name.",
  },
  {
    field: "email",
    label: "Email",
    type: "text",
    colSpan: 12,
    regex: emailRegex,
    errorMessage:
      "Please provide valid email address.",
  },

  {
    field: "password",
    label: "Password",
    type: "password",
    colSpan: 12,
    regex: passwordRegex,
    errorMessage:
      "Password must be at least 8 characters and include a letter, a number, and a special character.",
  },

  {
    field: "submit",
    type: "button",
    colSpan: 12,
  },
];
