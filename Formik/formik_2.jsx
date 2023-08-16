import React from 'react';
import { Field, Form, Formik } from 'formik';

const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
};

export const Basic_new = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            
                <Form>
                    <Field type="email" name="email" placeholder="Email" />
                    <Field as="select" name="color">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>

                    <Field name="lastName">
                        {({
                            field, 
                            form: { touched, errors }, 
                            meta,
                        }) => (
                            <div>
                                <input type="text" placeholder="Email" {...field} />
                                {meta.touched && meta.error && (
                                    <div className="error">{meta.error}</div>
                                )}
                            </div>
                        )}
                    </Field>
                    <Field name="lastName" placeholder="Doe" component={MyInput} />
                    <button type="submit">Submit</button>
                </Form>
        
        </Formik>
    </div>
);
