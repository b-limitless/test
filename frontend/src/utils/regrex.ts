export const  emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const  urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
export const alphanumericRegex = /^[a-zA-Z0-9 ]+$/;
export const wordRegrex = /^[\w\d\+-]{1,}$/
//Password validation (at least 8 characters, at least one uppercase letter, one lowercase letter, and one number):
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const validString = /^[\w\- ]{1,100}$/;
export const validDigit = /^[0-9]{1,100}$/
export const validBoolean = /^(true|false)$/i;
export const validKeyAndSecret = /^[\w\S]{20,100}$/;

