import React, { useState } from "react";
import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { validateEmail } from "../Validators/Validators";
import { Service } from "../Services/Services";
import { useNavigate } from "react-router-dom";
interface AuthProps {
    message: string
}
export const AuthLogin = ({ message }: AuthProps) => {
    const navigate = useNavigate();
    const apiService = new Service();
    const [formData, setFormData] = useState<{
        email: string | '',
        password: string | '',
        notification: string | '',
        submitting: boolean | false,
        hasError: boolean | false,
        isTouched: boolean | false,
        hasError1: boolean | false,
        isTouched1: boolean | false
    }>({
        email: '',
        password: '',
        notification: '',
        submitting: false,
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false
    });



    const Emailhandler = (e: { target: { value: string; }; }) => {
        const email = e.target.value.trim();
        let hasError = false;
        let isTouched = false;
        if (email.length < 3) {
            hasError = true;
            isTouched = true;
        }

        else if (email.length > 50) {
            hasError = true;
            isTouched = true;
        }
        if (!validateEmail(email)) {
            hasError = true;
            isTouched = true;
        }
        else {
            hasError = false;
            isTouched = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            email: e.target.value,
            hasError,
            isTouched
        }))
    }

    const Passwordhandler = (e: { target: { value: string; }; }) => {
        const password = e.target.value.trim();
        let hasError1 = false
        let isTouched1 = false;

        if (password.length < 3) {
            hasError1 = true;
            isTouched1 = true;
        }

        else if (password.length > 50) {
            hasError1 = true;
            isTouched1 = true;
        }
        else {
            hasError1 = false;
            isTouched1 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            password: e.target.value,
            hasError1,
            isTouched1
        }))
    }


    const submitForm = async (e: any) => {
        e.preventDefault();

        setFormData((currentValue) => ({
            ...currentValue,
            submitting: true
        }))

        const customerLogin = {
            email: formData.email,
            password: formData.password
        }
        try {
            const response = await apiService.loginCustomer(customerLogin);
            console.log('logged data',response)
            if (response.statusCode === 200) {
                console.log('response', response)
                setFormData((currentValue) => ({
                    ...currentValue,
                    submitting: false,
                    notification: response.message,
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                }))
                localStorage.setItem('token', response.data)
                const attemptedCheckout = localStorage.getItem("attempt_checkout");
                if (response.statusCode === 200 && attemptedCheckout === "yes") {
                    console.log('man logged')
                    navigate("/check-out-list",{replace : true});
                   
                }
            }
            if (response.statusCode === 400) {
                console.log('response', response)
                setFormData((currentValue) => ({
                    ...currentValue,
                    submitting: false,
                    notification: response.message
                }))
            }
            console.log('my data', response)
        }
        catch (error: any) {
            console.log('error', error.message)
            if (error) {
                setFormData((currentValue) => ({
                    ...currentValue,
                    submitting: false,
                    notification: 'Sorry An error occured please try again later'
                }))
            }
        }
        console.log('hello world')
    }
    return (<div>
        <Header />
        <div id="page-content">
            <div className="page-header text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                            <div className="page-title"><h1>Login</h1></div>
                            <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="title"><i className="icon anm anm-angle-right-l"></i>My Account</span><span className="main-title fw-bold"><i className="icon anm anm-angle-right-l"></i>Login</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="login-register pt-2">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <div className="inner h-100">
                                <form onSubmit={submitForm} className="customer-form">
                                    <h2 className="text-center fs-4 mb-3">Registered Customers</h2>
                                    {message && <h6 className="text-center fs-4 mb-4 p-2"
                                    >{message}</h6>}

                                    {!message && formData.notification && <h6 className="text-center fs-5 mb-4 p-2"
                                    >{formData.notification}</h6>}
                                    <p className="text-center mb-4">If you have an account with us, please log in.</p>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="CustomerEmail" className="d-none">Email <span className="required">*</span></label>
                                            <input type="text" className={formData.email && formData.hasError && formData.isTouched ? "form-control p-2 is-invalid" : formData.email && !formData.hasError && formData.isTouched ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer05" value={formData.email} onChange={Emailhandler}
                                                placeholder="Enter Email" />
                                            <div className="invalid-feedback">
                                                Please provide a valid email
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="CustomerPassword" className="d-none">Password <span className="required">*</span></label>
                                            <input type="password" className={formData.password && formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-invalid" : formData.password && !formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer06" value={formData.password} onChange={Passwordhandler}
                                                placeholder="Enter Password" />
                                            <div className="invalid-feedback">
                                                Please provide a valid Password
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <div className="login-remember-forgot d-flex justify-content-between align-items-center">
                                                <div className="remember-check customCheckbox">
                                                    <input id="remember" name="remember" type="checkbox" value="remember" required />
                                                    <label htmlFor="remember"> Remember me</label>
                                                </div>
                                                <a href="forgot-password.html">Forgot your password?</a>
                                            </div>
                                        </div>
                                        <div className="form-group col-12 mb-0">
                                            <input type="submit" className="btn btn-primary btn-lg w-100" value={formData.submitting ? "Signing In" : "Sign In"}
                                                disabled={formData.hasError || formData.hasError1 ||
                                                    !formData.email || !formData.password ||
                                                    !formData.password || formData.submitting
                                                } />
                                        </div>
                                    </div>

                                    <div className="login-divide"><span className="login-divide-text">OR</span></div>

                                    <p className="text-center fs-6 text-muted mb-3">Sign in with social account</p>
                                    <div className="login-social d-flex-justify-center">
                                        <a className="social-link facebook rounded-5 d-flex-justify-center" href="#"><i className="icon anm anm-facebook-f me-2"></i> Facebook</a>
                                        <a className="social-link google rounded-5 d-flex-justify-center" href="#"><i className="icon anm anm-google-plus-g me-2"></i> Google</a>
                                        <a className="social-link twitter rounded-5 d-flex-justify-center" href="#"><i className="icon anm anm-twitter me-2"></i> Twitter</a>
                                    </div>

                                    <div className="login-signup-text mt-4 mb-2 fs-6 text-center text-muted">Don,t have an account? <a href="register.html" className="btn-link">Sign up now</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>

        <Cart />

    </div>
    )
}