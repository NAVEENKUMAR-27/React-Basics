import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

export const Basic_Fomik = () => (
    <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />

                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <button type="submit">Submit</button>



                <div className='App'>
                    <div>
                        <Formik
                            initialValues={{
                                toggle: false,
                                checked: [],
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {({ values }) => (
                                <Form>
        
                                    <label>
                                        <Field type="checkbox" name="toggle" />
                                        {`${values.toggle}`}
                                    </label>

                                    <div id="checkbox-group">Checked</div>
                                    <div role="group" aria-labelledby="checkbox-group">
                                        <label>
                                            <Field type="checkbox" name="checked" value="One" />
                                            One
                                        </label> <br/>
                                        <label>
                                            <Field type="checkbox" name="checked" value="Two" />
                                            Two
                                        </label><br/>
                                        <label>
                                            <Field type="checkbox" name="checked" value="Three" />
                                            Three
                                        </label><br/>
                                        <label>
                                            <Field type="checkbox" name="checked" value="Tamilnadu" />
                                            Tamilnadu
                                        </label><br/>
                                        <label>
                                            <Field type="checkbox" name="checked" value="Karnataka" />
                                            Karnataka
                                        </label><br/>
                                        <label>
                                            <Field type="checkbox" name="checked" value=" Maharastra" />
                                            Maharastra
                                        </label><br/>
                                    </div>

                                    <button type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>


                </div>
            </Form>
        </Formik>
    </div>
);