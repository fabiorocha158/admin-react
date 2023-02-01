import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import dayjs from 'dayjs';

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const [startDate, setStartDate] = useState(new Date());

    var updateLocale = require('dayjs/plugin/updateLocale')

    dayjs.extend(updateLocale)

    dayjs.updateLocale('en', {
      months: [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ],
      calendar: {
        lastDay: '[Yesterday at] LT',
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        lastWeek: '[last] dddd [at] LT',
        nextWeek: 'dddd [at] LT',
        sameElse: 'L'
      }
    })

    return (
    <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
            {({
                values, 
                errors, 
                touched, 
                handleBlur, 
                handleChange, 
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx = {{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="filled"
                            type="Date"
                            label="Starting Month"
                            onBlur={handleBlur}
                            onChange={handleChange}                    
                            value={
                                dayjs(values.startDate)
                                .format("YYYY-MM-DD")
                            }
                            name="startDate"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={!!touched.startDate && !!errors.startDate}
                            helperText={touched.startDate && errors.startDate}
                            sx = {{ gridColumn: "span 4"}}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx = {{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx = {{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx = {{ gridColumn: "span 4"}}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx = {{ gridColumn: "span 4"}}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx = {{ gridColumn: "span 4"}}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx = {{ gridColumn: "span 4"}}
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
    );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    startDate: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("invalid email").required("Required"),
    contact: yup.string().matches(phoneRegExp, "invalid phone").required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
}); 


const initialValues = {
    startDate : "2017-05-24",
    firstName : "",
    lastName : "",
    email : "",
    contact : "",
    address1 : "",
    address2 : "",
};



export default Form;