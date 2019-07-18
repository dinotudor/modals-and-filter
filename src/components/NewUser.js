/* import {  DisplayFormikState } from "./helper";
import Home from './Home'

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";


const NewUser = () => (
    <h1>Basic Formik Demo</h1>

    <Formik
      initialValues={{ email: "", name: "", }}
      onSubmit={(values, { setSubmitting }) => {
        handleSumbition(newUser)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="name"
              placeholder="Type your name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

  </div>
);

export default NewUser
 */
