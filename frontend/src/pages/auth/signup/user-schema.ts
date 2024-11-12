import { validString } from "../../../utils/regrex";
export const userSchema:any = [
  {
    field: "name",
    label: "Full Name",
    type: "text",
    colSpan: 6,
    regex: validString,
    errorMessage: "Invalid version format. Only numbers and dots are allowed.",
  },
  {
    field: "email",
    label: "Email",
    type: "text",
    colSpan: 6,
    regex: validString,
    errorMessage:
      "Invalid base version format. Only numbers and dots are allowed.",
  },

  {
    field: "submit",
    type: "button",
    colSpan: 6,
  },
];
