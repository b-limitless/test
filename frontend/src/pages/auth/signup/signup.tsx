import { Box, FormHelperText } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSchema } from './user-schema';
import DynamicForm from '../../../common/DynamicForm';
import './signup.scss';

export default function Create() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>({
    email: '',
    name: '',
    password: ''
  });
  const [errors, setErrors] = useState<any>({
    email: '',
    name: '',
    password: ''
  });


  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Submit the form to service
      console.log('submitting the form')
    } catch (err) {
      console.log('Error while creating release', err);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    userSchema.forEach((field: any) => {
      const value = formData[field.field];

      // Check if regex exists and validate value with regex
      if (field.regex && !field.regex.test(value)) {
        newErrors[field.field] = field.errorMessage || 'Invalid value';
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

  

  return (
    <>
      <div className="form_container">
        {/* {error?.data?.message && (
        <FormHelperText sx={{ color: 'red', p: 1 }}>
          {error?.data?.message.toString()}
        </FormHelperText>
      )} */}

        <div className="form">
          <DynamicForm
            formSchema={userSchema}
            setFormData={setFormData}
            formData={formData}
            handleSubmit={onSubmit}
            validateForm={validateForm}
            errors={errors}
            saving={false}
          />
        </div>




      </div>

    </>
  );
}
