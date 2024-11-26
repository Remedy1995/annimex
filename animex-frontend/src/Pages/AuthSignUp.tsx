import React, { useState } from "react";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StringContainsNumber, ValidateSpecialCharacters, validateEmail } from "../Validators/Validators";
import { Service } from "../Services/Services";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "./AuthLogin";

export const AuthSignUp = () => {
    const navigate = useNavigate();
    const apiService = new Service();
    let [formData, setFormData] = useState<{
        firstname: string | '',
        lastname: string | '',
        username: string | '',
        email: string | '',
        password: string | '',
        Message: string | '',
        statusCode : number,
        confirm_password: string | '',
        accept_terms: boolean | undefined,
        isTouched: boolean | undefined,
        hasError: boolean | undefined,
        isTouched1: boolean | undefined,
        hasError1: boolean | undefined,
        isTouched2: boolean | undefined,
        hasError2: boolean | undefined,
        isTouched3: boolean | undefined,
        hasError3: boolean | undefined,
        isTouched4: boolean | undefined,
        hasError4: boolean | undefined,
        isTouched5: boolean | undefined,
        hasError5: boolean | undefined,
        submitting: boolean | undefined
    }>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        statusCode : 400,
        Message: '',
        accept_terms: false,
        isTouched: false,
        hasError: false,
        isTouched1: false,
        hasError1: false,
        isTouched2: false,
        hasError2: false,
        isTouched3: false,
        hasError3: false,
        isTouched4: false,
        hasError4: false,
        isTouched5: false,
        hasError5: false,
        submitting: false
    });


    const FirstNamehandler = (e: { target: { value: string; }; }) => {
        const FirstName = e.target.value.trim();
        let hasError = false
        let isTouched = false;

        if (FirstName.length < 3) {
            hasError = true;
            isTouched = true;
        }

        else if (FirstName.length > 50) {
            hasError = true;
            isTouched = true;
        }
        else if (ValidateSpecialCharacters(FirstName) || StringContainsNumber(FirstName)) {
            hasError = true;
            isTouched = true;
        }
        else {
            hasError = false;
            isTouched = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            firstname: e.target.value,
            hasError,
            isTouched
        }))
    }



    const UserNamehandler = (e: { target: { value: string; }; }) => {
        const username = e.target.value.trim();
        let hasError2 = false
        let isTouched2 = false;
        if (username.length < 3) {
            hasError2 = true;
            isTouched2 = true;
        }

        else if (username.length > 50) {
            hasError2 = true;
            isTouched2 = true;
        }
        else {
            hasError2 = false;
            isTouched2 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            username: e.target.value,
            hasError2,
            isTouched2
        }))
    }



    const AcceptTermshandler = (e: { target: { checked: boolean }; }) => {
        const acceptTerms = e.target.checked;
        let accept_terms = false;
        if (acceptTerms) {
            accept_terms = true;
        }
        else {
            accept_terms = false;
        }
        setFormData(currentValue => ({
            ...currentValue,
            accept_terms
        }))
    }

    const Passwordhandler = (e: { target: { value: string; }; }) => {
        const password = e.target.value.trim();
        let hasError4 = false
        let isTouched4 = false;

        if (password.length < 3) {
            hasError4 = true;
            isTouched4 = true;
        }

        else if (password.length > 50) {
            hasError4 = true;
            isTouched4 = true;
        }
        else {
            hasError4 = false;
            isTouched4 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            password: e.target.value,
            hasError4,
            isTouched4
        }))
    }

    const ConfirmPasswordhandler = (e: { target: { value: string; }; }) => {
        const password = e.target.value.trim();
        let hasError5 = false
        let isTouched5 = false;
        if (password.length < 3) {
            hasError5 = true;
            isTouched5 = true;
        }

        else if (password.length > 50) {
            hasError5 = true;
            isTouched5 = true;
        }
        else {
            hasError5 = false;
            isTouched5 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            confirm_password: e.target.value,
            hasError5,
            isTouched5
        }))
    }

    const LastNamehandler = (e: { target: { value: string; }; }) => {
        const lastName = e.target.value.trim();
        let hasError1 = false
        let isTouched1 = false;
        if (lastName.length < 3) {
            hasError1 = true;
            isTouched1 = true;
        }

        else if (lastName.length > 50) {
            hasError1 = true;
            isTouched1 = true;
        }
        if (ValidateSpecialCharacters(lastName) || StringContainsNumber(lastName)) {
            hasError1 = true;
            isTouched1 = true;
        }
        else {
            hasError1 = false;
            isTouched1 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            lastname: e.target.value,
            hasError1,
            isTouched1
        }))
    }



    const Emailhandler = (e: { target: { value: string; }; }) => {
        const email = e.target.value.trim();
        let hasError3 = false
        let isTouched3 = false;
        if (email.length < 3) {
            hasError3 = true;
            isTouched3 = true;
        }

        else if (email.length > 50) {
            hasError3 = true;
            isTouched3 = true;
        }
        if (!validateEmail(email)) {
            hasError3 = true;
            isTouched3 = true;
        }
        else {
            hasError3 = false;
            isTouched3 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            email: e.target.value,
            hasError3,
            isTouched3
        }))
    }

    console.log('my form data', formData)

    const submitForm = async (e: any) => {
        e.preventDefault();

        setFormData((currentValue) => ({
            ...currentValue,
            submitting: true
        }))

        const customerData = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password
        }
        try {
            const response = await apiService.createCustomer(customerData);
            if (response.statusCode === 201) {
                setFormData((currentValue) => ({
                    ...currentValue,
                    submitting: false,
                    Message: response.message + ' Login to Continue',
                    statusCode : response.statusCode,
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                }))

                //navigate('auth-login')
            }
            if (response.statusCode === 400) {
                setFormData((currentValue) => ({
                    ...currentValue,
                    submitting: false,
                    Message: response.message
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
                    Message: 'Sorry An error occured please try again later'
                }))
            }
        }
        console.log('hello world')
    }


    if (formData.statusCode === 201) {
        return <AuthLogin message={formData.Message} />
    }

    return (<div>
        <Header />
        <div id="page-content">
            <div className="page-header text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                            <div className="page-title"><h1>Create an Account</h1></div>
                            <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="title"><i className="icon anm anm-angle-right-l"></i>My Account</span><span className="main-title fw-bold"><i className="icon anm anm-angle-right-l"></i>Create an Account</span></div>
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
                                    <h2 className="text-center fs-4 mb-4">Sign Up Here</h2>
                                    {!formData.submitting && formData.Message && <h6 className="text-center text-dark fs-5 mb-4 p-2"
                                    >{formData.Message}</h6>}
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label htmlFor="CustomerUsername" className="">First name <span className="required">*</span></label>
                                            <input type="text" className={formData.firstname && formData.hasError && formData.isTouched ? "form-control p-2 is-invalid" : formData.firstname && !formData.hasError && formData.isTouched ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.firstname} onChange={FirstNamehandler}
                                                placeholder="Enter First Name" />
                                            <div className="invalid-feedback">
                                                Please provide a valid firstname
                                            </div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="CustomerUsername" className="">Last Name <span className="required">*</span></label>
                                            <input type="text" className={formData.lastname && formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-invalid" : formData.lastname && !formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer03" value={formData.lastname} onChange={LastNamehandler}
                                                placeholder="Enter Last Name" />
                                            <div className="invalid-feedback">
                                                Please provide a valid lastname
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="CustomerUsername" className="d-none">Username <span className="required">*</span></label>
                                            <input type="text" className={formData.username && formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-invalid" : formData.username && !formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer04" value={formData.username} onChange={UserNamehandler}
                                                placeholder="Enter User Name" />
                                            <div className="invalid-feedback">
                                                Please provide a valid username
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="CustomerEmail" className="d-none">Email <span className="required">*</span></label>
                                            <input type="text" className={formData.email && formData.hasError3 && formData.isTouched3 ? "form-control p-2 is-invalid" : formData.email && !formData.hasError3 && formData.isTouched3 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer05" value={formData.email} onChange={Emailhandler}
                                                placeholder="Enter Email" />
                                            <div className="invalid-feedback">
                                                Please provide a valid email
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="CustomerPassword" className="d-none">Password <span className="required">*</span></label>
                                            <input type="password" className={formData.password && formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-invalid" : formData.password && !formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer06" value={formData.password} onChange={Passwordhandler}
                                                placeholder="Enter Password" />
                                            <div className="invalid-feedback">
                                                Please provide a valid Password
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="CustomerConfirmPassword" className="d-none">Confirm Password <span className="required">*</span></label>
                                            <input type="password" className={formData.confirm_password && formData.hasError5 && formData.isTouched5 ? "form-control p-2 is-invalid" : formData.confirm_password && !formData.hasError5 && formData.isTouched5 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer07" value={formData.confirm_password} onChange={ConfirmPasswordhandler}
                                                placeholder="Enter Confirm Password" />
                                            <div className="invalid-feedback">
                                                Please provide a valid confirm password
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <div className="login-remember-forgot d-flex justify-content-between align-items-center">
                                                <div className="agree-check customCheckbox">
                                                    <input id="agree" name="agree" type="checkbox" value="agree" required onChange={AcceptTermshandler} />
                                                    <label htmlFor="agree"> I agree to terms & Policy.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-12 mb-0">
                                            <input type="submit" className="btn btn-primary btn-lg w-100" value={formData.submitting ? "Loading" : "Register"}
                                                disabled={formData.hasError || formData.hasError1 || formData.hasError2 || formData.hasError3 ||
                                                    formData.hasError4 || formData.hasError5 ||
                                                    !formData.firstname || !formData.lastname || !formData.username ||
                                                    !formData.email || !formData.password || !formData.confirm_password || !formData.accept_terms ||
                                                    formData.password !== formData.confirm_password || formData.submitting
                                                } />
                                        </div>
                                    </div>

                                    <div className="login-divide"><span className="login-divide-text">OR</span></div>

                                    <p className="text-center fs-6 text-muted mb-3">Or Sign up with</p>
                                    <div className="login-social d-flex-justify-center">
                                        <a className="social-link facebook rounded-5 d-flex-justify-center" href="#"><i className="icon anm anm-facebook-f me-2"></i> Facebook</a>
                                        <a className="social-link google rounded-5 d-flex-justify-center" href="#"><i className="icon anm anm-google-plus-g me-2"></i> Google</a>
                                        <a className="social-link twitter rounded-5 d-flex-justify-center" href="#"><i className="icon anm anm-twitter me-2"></i> Twitter</a>
                                    </div>

                                    <div className="login-signup-text mt-4 mb-2 fs-6 text-center text-muted">Already have an account? <a href="login.html" className="btn-link">Login now</a></div>
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

