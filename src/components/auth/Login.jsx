import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Redirect, BrowserRouter as Router} from 'react-router-dom';
import { login } from "../../redux/actions/auth";

const Login = () => {

    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => ({...state.auth}));
    const { message } = useSelector(state => ({...state.message}));

    const dispatch = useDispatch();

    const initialValues = {
        username: "",
        password: ""
    };

    const handleLogin = (values) => {
        setLoading(true);
        dispatch(login(values));
      };
    
      if (isLoggedIn) {
          return <Router>
                        <Redirect to="/dashboard" />
                </Router>
      }

    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required!"),
      
        password: Yup.string()
          .required("Password is required!")
          .min(4, "Password is too short - should be 4 chars minimum"),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
            >
            {() => {
                
                return (
                <div className="container">
                    <div className="form">
                        <h3>Login to continue</h3>
                        <Form>
                            <div className="form-column">
                                <div className="form-group col-md-2">
                                    <label htmlFor="username">Username</label>
                                    <Field
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="form-control"
                                    />
                                    <ErrorMessage 
                                        name="username" 
                                        component="span" 
                                        className="alert alert-danger" role="alert"
                                    />
                                </div>
                            </div>

                            <div className="form-column">
                                <div className="form-group col-md-2">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="span"
                                        className="alert alert-danger" role="alert"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                            
                            {message && (
                                <div className="form-group col-md-2">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
                );
            }}
        </Formik>
    )
}

export default Login
