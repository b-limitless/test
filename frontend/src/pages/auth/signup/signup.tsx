import { Box, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSchema } from "./user-schema";
import DynamicForm from "../../../common/DynamicForm";
import "./signup.scss";
import { request } from "../../../utils/request";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import ErrorText from "../../../components/Help/ErrorText";

const createUser = async (formData: any) => {
  try {
    // Submit the form to service
    await request({
      url: "http://localhost:3000/users/signup",
      method: "post",
      body: formData,
    });
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response.data; // Pass the error response data to be accessible in useMutation
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};


export default function Create() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>({
    email: "",
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({
    email: "",
    name: "",
    password: "",
  });

  const {
    mutate: createUserMutation,
    data,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      navigate("/dashboard");
      // Perform any other success actions here
    },
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    createUserMutation(formData);
  };

  const validateForm = () => {
    const newErrors: any = {};
    userSchema.forEach((field: any) => {
      const value = formData[field.field];

      // Check if regex exists and validate value with regex
      if (field.regex && !field.regex.test(value)) {
        newErrors[field.field] = field.errorMessage || "Invalid value";
      }

      // Check for required fields if specified
      if (field.required && !value) {
        newErrors[field.field] = `${field.label} is required`;
      }
    });

    return newErrors as any;
  };

  const onSubmit = () => {
    // Validate the form data before submitting
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If there are no validation errors, proceed with submission
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit();
    }
  };

  useEffect(() => {
    // When form is submitted then simply
    // if (createReleseData?.status) {
    //   navigate('/dashboard');
    // }
  }, []);

  console.log("error", error, isError);

  return (
    <>
      <div className="form_container">
      
        <div>
        {isError && (
          <ErrorText 
          style={{padding: '1rem 0 1rem 0', textAlign:'center'}}
          text={error?.message || "Something went wrong"} />
        )}

        <div className="form">
          <DynamicForm
            formSchema={userSchema}
            setFormData={setFormData}
            formData={formData}
            handleSubmit={onSubmit}
            validateForm={validateForm}
            errors={errors}
            saving={isPending}
          />
        </div>

        </div>
       
      </div>
    </>
  );
}
