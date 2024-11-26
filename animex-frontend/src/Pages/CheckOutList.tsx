import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Service } from "../Services/Services";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import SummaryItems from "../components/SummaryItems";
import { CustomerInfoHooks } from "../Hooks/Hooks";
import { UseDispatch } from "react-redux";
import { authenticatedUser } from "../redux/Reducers/Users";
import { useNavigate } from "react-router-dom";
import { CheckoutValidator } from "../Validators/FormValidators";





interface CheckOut {
    firstname: '',
    lastname: '',
    billingAddress: {
        streetAddress1: string,
        city: string,
        state: string,
        postalCode: string,
        country: string,
        saveBillingDetailsToAccount: boolean
    },
    shippingAddress: {
        streetAddress1: string,
        city: string,
        state: string,
        postalCode: string,
        country: string,
        saveShippingDetailsToAccount: boolean
    }
}

export const CheckOutList = () => {
    const { formData, setFormData,
        ShippingAddressHandler,
        ShippingCityHandler, ShippingCountryHandler, ShippingStateHandler,
        ShippingZipHandler,
        BillingAddressHandler, BillingCityHandler, BillingCountryHandler, BillingStateHandler, BillingZipHandler
    } = CheckoutValidator();



   

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customer } = CustomerInfoHooks();
    console.log('my customer', customer)
    useEffect(() => { dispatch(authenticatedUser({ ...customer })) }, [customer])
    console.log('my form Data', formData)
    const allAddedCart = useSelector((state: any) => state.Cart.cart);
    const authenticated = useSelector((state: any) => state.Allusers.authenticated);

    console.log('my authenticated info', authenticated)

    useEffect(()=> {
     setFormData((current)=>({
        ...current,
        shippingAddress : authenticated[1]?.firstname
     }))
    },[authenticated])
    console.log('final push array', allAddedCart)
    const getCartIds = allAddedCart.map((data: any) => data._id);
    //console.log('all get ids', getCartIds)

    const filterCartItems = allAddedCart.filter((data: any, index: any) => {
        if (getCartIds.indexOf(data._id) === index) {
            return data;
        }
    })
    console.log('my filtered Items', filterCartItems)
    let totalPrice = 0;
    const calculateTotalPrice = filterCartItems.reduce((a: any, b: any, index: any, array: any) => {
        totalPrice += b.price * b.quantity;
        return totalPrice;
    }, 0)

    const { category } = useParams();

    console.log('selected category is', category)
    const apiService = new Service();
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [shippingaddress, setShippingAddress] = useState("");
    const [shippingcity, setShippingCity] = useState("");
    const [shippingstate, setShippingState] = useState("");
    const [shippingzip, setShippingZip] = useState("");
    const [shippingcountry, setShippingCountry] = useState("");
    const [saveShippingDetailsToAccount, setShippingDetailsToAccount] = useState(false);
    const [billingaddress, setBillingAddress] = useState("");
    const [billingcity, setBillingCity] = useState("");
    const [billingstate, setBillingState] = useState("");
    const [billingzip, setBillingZip] = useState("");
    const [billingcountry, setBillingCountry] = useState("");
    const [orderedStocks, setOrderedStocks] = useState([])
    const [saveBillingDetailsToAccount, setBillingDetailsToAccount] = useState(false);
    let [checkOutData, setCheckOutData] = useState<Array<CheckOut>>([{
        firstname: '',
        lastname: '',
        billingAddress: {
            streetAddress1: '',
            city: "",
            state: "",
            postalCode: "",
            country: "",
            saveBillingDetailsToAccount: false
        },
        shippingAddress: {
            streetAddress1: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
            saveShippingDetailsToAccount: false
        }
    }]);

    const getOrderedItems = filterCartItems.map((data: any) => {
        return {
            product: data._id,
            quantity: data.quantity
        }
    });

    console.log('my ordered ', getOrderedItems)
    const FirstNameHandler = (e: { target: { value: any } }) => {

        setFirstName(e.target.value)
    }

    const LastNameHandler = (e: { target: { value: any } }) => {
        setlastName(e.target.value)
    }

    // const ShippingAddressHandler = (e: { target: { value: any } }) => {
    //     setShippingAddress(e.target.value)

    // }

    // const ShippingStateHandler = (e: { target: { value: any } }) => {
    //     setShippingState(e.target.value)
    // }

    // const ShippingCityHandler = (e: { target: { value: any } }) => {
    //     setShippingCity(e.target.value)

    // }

    // const ShippingZipHandler = (e: { target: { value: any } }) => {
    //     setShippingZip(e.target.value)
    // }

    // const ShippingCountryHandler = (e: { target: { value: any } }) => {
    //     setShippingCountry(e.target.value)
    // }

    const ShippingDetailsToAccountHandler = (e: { target: { value: any, checked: boolean } }) => {
        console.log('hhhh', e.target.value, e.target.checked)
        setShippingDetailsToAccount(e.target.checked)
    }


    // const BillingAddressHandler = (e: { target: { value: any } }) => {
    //     setBillingAddress(e.target.value)

    // }

    // const BillingStateHandler = (e: { target: { value: any } }) => {
    //     setBillingState(e.target.value)
    // }

    // const BillingCityHandler = (e: { target: { value: any } }) => {
    //     setBillingCity(e.target.value)

    // }

    // const BillingZipHandler = (e: { target: { value: any } }) => {
    //     setBillingZip(e.target.value)
    // }

    // const BillingCountryHandler = (e: { target: { value: any } }) => {
    //     setBillingCountry(e.target.value)
    // }

    const BillingDetailsToAccountHandler = (e: { target: { value: any, checked: boolean } }) => {
        console.log('hhhh', e.target.value, e.target.checked)
        setBillingDetailsToAccount(e.target.checked)
    }


    const PlaceOrder = async () => {
        try {
            const response = await apiService.PlaceOrder([checkOutData, { items: getOrderedItems }]);
            console.log('my resp', response)
            if (response?.status) {
                console.log('res', response)
                const transaction_id = response?.data;
                navigate(`/order-success?transaction_id=${transaction_id}`, { replace: true })
            }
        }
        catch (error) {
            console.log('my error', error)
        }
    }

    useEffect(() => {
        setCheckOutData((data) => ({
            ...data,
            billingAddress: {
                streetAddress1: billingaddress,
                city: billingcity,
                state: billingstate,
                postalCode: billingzip,
                country: billingcountry,
                saveBillingDetailsToAccount: saveBillingDetailsToAccount
            },
            shippingAddress: {
                streetAddress1: shippingaddress,
                city: shippingcity,
                state: shippingstate,
                postalCode: shippingzip,
                country: shippingcountry,
                saveShippingDetailsToAccount: saveShippingDetailsToAccount
            },

        }))



    }, [shippingaddress, shippingcity, shippingstate, shippingzip, shippingcountry, saveShippingDetailsToAccount, billingaddress,
        billingcity, billingstate, billingzip, billingcountry, saveBillingDetailsToAccount
    ])

    console.log('my ordered list', [checkOutData, { items: getOrderedItems }]);
    console.log('This is me', checkOutData, shippingaddress)
    document.body.addEventListener("click", function () {
        const backdrops = document.querySelectorAll(".offcanvas-backdrop");
        const bodyArea = document.getElementsByTagName("body")[0] as HTMLElement | null;

        if (bodyArea) {
            bodyArea.style.overflowY = 'visible';
        }
        if (backdrops) {
            backdrops.forEach(backdrop => {
                (backdrop as HTMLElement).style.display = "none";
            });
        }
    })




    return (



        <><Header />

            <div id="page-content">
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>One Page Checkout Style1</h1></div>
                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="main-title"><i className="icon anm anm-angle-right-l"></i>One Page Checkout Style1</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form className="checkout-form" method="post" action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="block mb-3 shipping-address mb-4">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Shipping Address</h3>
                                        <p><a href="login.html"><u>Login</u></a> or <a href="register.html"><u>Register</u></a> for faster payment.</p>
                                        <fieldset>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="firstname" className="form-label">First Name <span className="required">*</span></label>
                                                    <input name="firstname" value={authenticated && authenticated[1]?.firstname} id="firstname" type="text" required={true} className="form-control"
                                                        onChange={FirstNameHandler} />
                                                </div>
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="lastname" className="form-label">Last Name <span className="required">*</span></label>
                                                    <input name="lastname" value={authenticated && authenticated[1]?.lastname} id="lastname" type="text" required={true} className="form-control"
                                                        onChange={LastNameHandler} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12">
                                                    <label htmlFor="address-1" className="form-label">Address <span className="required">*</span></label>
                                                    {/* <input name="address_1" value={shippingaddress} id="address-1" type="text" required={true} placeholder="Street address" className="form-control"
                                                        onChange={ShippingAddressHandler} /> */}

                                                    <input type="text" className={formData.shippingAddress && formData.hasError && formData.isTouched ? "form-control p-2 is-invalid" : formData.shippingAddress && !formData.hasError && formData.isTouched ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer05" value={formData.shippingAddress} onChange={ShippingAddressHandler}
                                                        placeholder="Enter Shipping Address" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid shipping Address
                                                    </div>
                                                </div>
                                                {/* <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12">
                                                    <input name="address_2" value="" id="address-2" type="text" required={true} placeholder="Apartment, suite, unit etc. (optional)" className="form-control" />
                                                </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="postcode" className="form-label">Postcode / ZIP <span className="required">*</span></label>
                                                    {/* <input name="postcode" value={shippingzip} id="postcode" type="text" className="form-control" onChange={ShippingZipHandler} /> */}

                                                    <input type="text" className={formData.shippingZip && formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-invalid" : formData.shippingZip && !formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer05" value={formData.shippingZip} onChange={ShippingZipHandler}
                                                        placeholder="Enter Shipping Zip" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid shipping Zip
                                                    </div>
                                                </div>
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="address_country1" className="form-label">Country <span className="required">*</span></label>
                                                    <select name="address[country]" value={formData.shippingCountry} className={formData.shippingCountry && formData.hasError3 && formData.isTouched3 ? "form-control p-2 is-invalid" : formData.shippingCountry && !formData.hasError3 && formData.isTouched3 ? "form-control p-2 is-valid" : "form-control p-2"}
                                                        onChange={ShippingCountryHandler} id="validationServer05">
                                                        <option value="0" label="Select a country">Select a country</option>
                                                        <option value="Ghana" >Ghana</option>
                                                        <div className="invalid-feedback">
                                                            Please provide a valid shipping Country
                                                        </div>
                                                        {/* <optgroup id="country-optgroup-Africa" label="Africa">
                                                            <option value="DZ" label="Algeria">Algeria</option>
                                                            <option value="AO" label="Angola">Angola</option>
                                                            <option value="BJ" label="Benin">Benin</option>
                                                            <option value="BW" label="Botswana">Botswana</option>
                                                            <option value="BF" label="Burkina Faso">Burkina Faso</option>
                                                            <option value="BI" label="Burundi">Burundi</option>
                                                            <option value="CM" label="Cameroon">Cameroon</option>
                                                            <option value="CV" label="Cape Verde">Cape Verde</option>
                                                            <option value="CF" label="Central African Republic">Central African Republic</option>
                                                            <option value="TD" label="Chad">Chad</option>
                                                            <option value="KM" label="Comoros">Comoros</option>
                                                            <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
                                                            <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
                                                            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
                                                            <option value="DJ" label="Djibouti">Djibouti</option>
                                                            <option value="EG" label="Egypt">Egypt</option>
                                                            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="ER" label="Eritrea">Eritrea</option>
                                                            <option value="ET" label="Ethiopia">Ethiopia</option>
                                                            <option value="GA" label="Gabon">Gabon</option>
                                                            <option value="GM" label="Gambia">Gambia</option>
                                                            <option value="GH" label="Ghana">Ghana</option>
                                                            <option value="GN" label="Guinea">Guinea</option>
                                                            <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="KE" label="Kenya">Kenya</option>
                                                            <option value="LS" label="Lesotho">Lesotho</option>
                                                            <option value="LR" label="Liberia">Liberia</option>
                                                            <option value="LY" label="Libya">Libya</option>
                                                            <option value="MG" label="Madagascar">Madagascar</option>
                                                            <option value="MW" label="Malawi">Malawi</option>
                                                            <option value="ML" label="Mali">Mali</option>
                                                            <option value="MR" label="Mauritania">Mauritania</option>
                                                            <option value="MU" label="Mauritius">Mauritius</option>
                                                            <option value="YT" label="Mayotte">Mayotte</option>
                                                            <option value="MA" label="Morocco">Morocco</option>
                                                            <option value="MZ" label="Mozambique">Mozambique</option>
                                                            <option value="NA" label="Namibia">Namibia</option>
                                                            <option value="NE" label="Niger">Niger</option>
                                                            <option value="NG" label="Nigeria">Nigeria</option>
                                                            <option value="RW" label="Rwanda">Rwanda</option>
                                                            <option value="RE" label="Réunion">Réunion</option>
                                                            <option value="SH" label="Saint Helena">Saint Helena</option>
                                                            <option value="SN" label="Senegal">Senegal</option>
                                                            <option value="SC" label="Seychelles">Seychelles</option>
                                                            <option value="SL" label="Sierra Leone">Sierra Leone</option>
                                                            <option value="SO" label="Somalia">Somalia</option>
                                                            <option value="ZA" label="South Africa">South Africa</option>
                                                            <option value="SD" label="Sudan">Sudan</option>
                                                            <option value="SZ" label="Swaziland">Swaziland</option>
                                                            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                                            <option value="TZ" label="Tanzania">Tanzania</option>
                                                            <option value="TG" label="Togo">Togo</option>
                                                            <option value="TN" label="Tunisia">Tunisia</option>
                                                            <option value="UG" label="Uganda">Uganda</option>
                                                            <option value="EH" label="Western Sahara">Western Sahara</option>
                                                            <option value="ZM" label="Zambia">Zambia</option>
                                                            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Americas" label="Americas">
                                                            <option value="AI" label="Anguilla">Anguilla</option>
                                                            <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="AR" label="Argentina">Argentina</option>
                                                            <option value="AW" label="Aruba">Aruba</option>
                                                            <option value="BS" label="Bahamas">Bahamas</option>
                                                            <option value="BB" label="Barbados">Barbados</option>
                                                            <option value="BZ" label="Belize">Belize</option>
                                                            <option value="BM" label="Bermuda">Bermuda</option>
                                                            <option value="BO" label="Bolivia">Bolivia</option>
                                                            <option value="BR" label="Brazil">Brazil</option>
                                                            <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
                                                            <option value="CA" label="Canada">Canada</option>
                                                            <option value="KY" label="Cayman Islands">Cayman Islands</option>
                                                            <option value="CL" label="Chile">Chile</option>
                                                            <option value="CO" label="Colombia">Colombia</option>
                                                            <option value="CR" label="Costa Rica">Costa Rica</option>
                                                            <option value="CU" label="Cuba">Cuba</option>
                                                            <option value="DM" label="Dominica">Dominica</option>
                                                            <option value="DO" label="Dominican Republic">Dominican Republic</option>
                                                            <option value="EC" label="Ecuador">Ecuador</option>
                                                            <option value="SV" label="El Salvador">El Salvador</option>
                                                            <option value="FK" label="Falkland Islands">Falkland Islands</option>
                                                            <option value="GF" label="French Guiana">French Guiana</option>
                                                            <option value="GL" label="Greenland">Greenland</option>
                                                            <option value="GD" label="Grenada">Grenada</option>
                                                            <option value="GP" label="Guadeloupe">Guadeloupe</option>
                                                            <option value="GT" label="Guatemala">Guatemala</option>
                                                            <option value="GY" label="Guyana">Guyana</option>
                                                            <option value="HT" label="Haiti">Haiti</option>
                                                            <option value="HN" label="Honduras">Honduras</option>
                                                            <option value="JM" label="Jamaica">Jamaica</option>
                                                            <option value="MQ" label="Martinique">Martinique</option>
                                                            <option value="MX" label="Mexico">Mexico</option>
                                                            <option value="MS" label="Montserrat">Montserrat</option>
                                                            <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
                                                            <option value="NI" label="Nicaragua">Nicaragua</option>
                                                            <option value="PA" label="Panama">Panama</option>
                                                            <option value="PY" label="Paraguay">Paraguay</option>
                                                            <option value="PE" label="Peru">Peru</option>
                                                            <option value="PR" label="Puerto Rico">Puerto Rico</option>
                                                            <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
                                                            <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                            <option value="LC" label="Saint Lucia">Saint Lucia</option>
                                                            <option value="MF" label="Saint Martin">Saint Martin</option>
                                                            <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                            <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                            <option value="SR" label="Suriname">Suriname</option>
                                                            <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                            <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                                            <option value="US" label="United States">United States</option>
                                                            <option value="UY" label="Uruguay">Uruguay</option>
                                                            <option value="VE" label="Venezuela">Venezuela</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-As" label="Asia">
                                                            <option value="AF" label="Afghanistan">Afghanistan</option>
                                                            <option value="AM" label="Armenia">Armenia</option>
                                                            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
                                                            <option value="BH" label="Bahrain">Bahrain</option>
                                                            <option value="BD" label="Bangladesh">Bangladesh</option>
                                                            <option value="BT" label="Bhutan">Bhutan</option>
                                                            <option value="BN" label="Brunei">Brunei</option>
                                                            <option value="KH" label="Cambodia">Cambodia</option>
                                                            <option value="CN" label="China">China</option>
                                                            <option value="GE" label="Georgia">Georgia</option>
                                                            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
                                                            <option value="IN" label="India">India</option>
                                                            <option value="ID" label="Indonesia">Indonesia</option>
                                                            <option value="IR" label="Iran">Iran</option>
                                                            <option value="IQ" label="Iraq">Iraq</option>
                                                            <option value="IL" label="Israel">Israel</option>
                                                            <option value="JP" label="Japan">Japan</option>
                                                            <option value="JO" label="Jordan">Jordan</option>
                                                            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
                                                            <option value="KW" label="Kuwait">Kuwait</option>
                                                            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="LA" label="Laos">Laos</option>
                                                            <option value="LB" label="Lebanon">Lebanon</option>
                                                            <option value="MO" label="Macau SAR China">Macau SAR China</option>
                                                            <option value="MY" label="Malaysia">Malaysia</option>
                                                            <option value="MV" label="Maldives">Maldives</option>
                                                            <option value="MN" label="Mongolia">Mongolia</option>
                                                            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
                                                            <option value="NP" label="Nepal">Nepal</option>
                                                            <option value="NT" label="Neutral Zone">Neutral Zone</option>
                                                            <option value="KP" label="North Korea">North Korea</option>
                                                            <option value="OM" label="Oman">Oman</option>
                                                            <option value="PK" label="Pakistan">Pakistan</option>
                                                            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
                                                            <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
                                                            <option value="PH" label="Philippines">Philippines</option>
                                                            <option value="QA" label="Qatar">Qatar</option>
                                                            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="SG" label="Singapore">Singapore</option>
                                                            <option value="KR" label="South Korea">South Korea</option>
                                                            <option value="LK" label="Sri Lanka">Sri Lanka</option>
                                                            <option value="SY" label="Syria">Syria</option>
                                                            <option value="TW" label="Taiwan">Taiwan</option>
                                                            <option value="TJ" label="Tajikistan">Tajikistan</option>
                                                            <option value="TH" label="Thailand">Thailand</option>
                                                            <option value="TL" label="Timor-Leste">Timor-Leste</option>
                                                            <option value="TR" label="Turkey">Turkey</option>
                                                            <option value="TM" label="Turkmenistan">Turkmenistan</option>
                                                            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
                                                            <option value="VN" label="Vietnam">Vietnam</option>
                                                            <option value="YE" label="Yemen">Yemen</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Eu" label="Europe">
                                                            <option value="AL" label="Albania">Albania</option>
                                                            <option value="AD" label="Andorra">Andorra</option>
                                                            <option value="AT" label="Austria">Austria</option>
                                                            <option value="BY" label="Belarus">Belarus</option>
                                                            <option value="BE" label="Belgium">Belgium</option>
                                                            <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                            <option value="BG" label="Bulgaria">Bulgaria</option>
                                                            <option value="HR" label="Croatia">Croatia</option>
                                                            <option value="CY" label="Cyprus">Cyprus</option>
                                                            <option value="CZ" label="Czech Republic">Czech Republic</option>
                                                            <option value="DK" label="Denmark">Denmark</option>
                                                            <option value="DD" label="East Germany">East Germany</option>
                                                            <option value="EE" label="Estonia">Estonia</option>
                                                            <option value="FO" label="Faroe Islands">Faroe Islands</option>
                                                            <option value="FI" label="Finland">Finland</option>
                                                            <option value="FR" label="France">France</option>
                                                            <option value="DE" label="Germany">Germany</option>
                                                            <option value="GI" label="Gibraltar">Gibraltar</option>
                                                            <option value="GR" label="Greece">Greece</option>
                                                            <option value="GG" label="Guernsey">Guernsey</option>
                                                            <option value="HU" label="Hungary">Hungary</option>
                                                            <option value="IS" label="Iceland">Iceland</option>
                                                            <option value="IE" label="Ireland">Ireland</option>
                                                            <option value="IM" label="Isle of Man">Isle of Man</option>
                                                            <option value="IT" label="Italy">Italy</option>
                                                            <option value="JE" label="Jersey">Jersey</option>
                                                            <option value="LV" label="Latvia">Latvia</option>
                                                            <option value="LI" label="Liechtenstein">Liechtenstein</option>
                                                            <option value="LT" label="Lithuania">Lithuania</option>
                                                            <option value="LU" label="Luxembourg">Luxembourg</option>
                                                            <option value="MK" label="Macedonia">Macedonia</option>
                                                            <option value="MT" label="Malta">Malta</option>
                                                            <option value="FX" label="Metropolitan France">Metropolitan France</option>
                                                            <option value="MD" label="Moldova">Moldova</option>
                                                            <option value="MC" label="Monaco">Monaco</option>
                                                            <option value="ME" label="Montenegro">Montenegro</option>
                                                            <option value="NL" label="Netherlands">Netherlands</option>
                                                            <option value="NO" label="Norway">Norway</option>
                                                            <option value="PL" label="Poland">Poland</option>
                                                            <option value="PT" label="Portugal">Portugal</option>
                                                            <option value="RO" label="Romania">Romania</option>
                                                            <option value="RU" label="Russia">Russia</option>
                                                            <option value="SM" label="San Marino">San Marino</option>
                                                            <option value="RS" label="Serbia">Serbia</option>
                                                            <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
                                                            <option value="SK" label="Slovakia">Slovakia</option>
                                                            <option value="SI" label="Slovenia">Slovenia</option>
                                                            <option value="ES" label="Spain">Spain</option>
                                                            <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                            <option value="SE" label="Sweden">Sweden</option>
                                                            <option value="CH" label="Switzerland">Switzerland</option>
                                                            <option value="UA" label="Ukraine">Ukraine</option>
                                                            <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                                                            <option value="GB" label="United Kingdom">United Kingdom</option>
                                                            <option value="VA" label="Vatican City">Vatican City</option>
                                                            <option value="AX" label="Åland Islands">Åland Islands</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Oceania" label="Oceania">
                                                            <option value="AS" label="American Samoa">American Samoa</option>
                                                            <option value="AQ" label="Antarctica">Antarctica</option>
                                                            <option value="AU" label="Australia">Australia</option>
                                                            <option value="BV" label="Bouvet Island">Bouvet Island</option>
                                                            <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                            <option value="CX" label="Christmas Island">Christmas Island</option>
                                                            <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                                                            <option value="CK" label="Cook Islands">Cook Islands</option>
                                                            <option value="FJ" label="Fiji">Fiji</option>
                                                            <option value="PF" label="French Polynesia">French Polynesia</option>
                                                            <option value="TF" label="French Southern Territories">French Southern Territories</option>
                                                            <option value="GU" label="Guam">Guam</option>
                                                            <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                                            <option value="KI" label="Kiribati">Kiribati</option>
                                                            <option value="MH" label="Marshall Islands">Marshall Islands</option>
                                                            <option value="FM" label="Micronesia">Micronesia</option>
                                                            <option value="NR" label="Nauru">Nauru</option>
                                                            <option value="NC" label="New Caledonia">New Caledonia</option>
                                                            <option value="NZ" label="New Zealand">New Zealand</option>
                                                            <option value="NU" label="Niue">Niue</option>
                                                            <option value="NF" label="Norfolk Island">Norfolk Island</option>
                                                            <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
                                                            <option value="PW" label="Palau">Palau</option>
                                                            <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
                                                            <option value="WS" label="Samoa">Samoa</option>
                                                            <option value="SB" label="Solomon Islands">Solomon Islands</option>
                                                            <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                                            <option value="TK" label="Tokelau">Tokelau</option>
                                                            <option value="TO" label="Tonga">Tonga</option>
                                                            <option value="TV" label="Tuvalu">Tuvalu</option>
                                                            <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
                                                            <option value="VU" label="Vanuatu">Vanuatu</option>
                                                            <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
                                                        </optgroup> */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="address_State" className="form-label">State <span className="required">*</span></label>
                                                    <select name="address[State]" value={formData.shippingState} id="validationServer05"
                                                        className={formData.shippingCountry && formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-invalid" : formData.shippingCountry && !formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-valid" : "form-control p-2"}
                                                        onChange={ShippingStateHandler} >
                                                        <option value="0" label="Select a state">Select a state</option>
                                                        <option value="Ghana">Ghana</option>
                                                        {/* <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option> */}
                                                    </select>
                                                </div>
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="address_province" className="form-label">Town / City <span className="required">*</span></label>
                                                    <select id="address_province" name="address[province]" value={formData.shippingCity} className={formData.shippingCity && formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-invalid" : formData.shippingCity && !formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-valid" : "form-control p-2"}
                                                        onChange={ShippingCityHandler}>
                                                        <option value="0" label="Select a city">Select a city</option>
                                                        <option value="Accra">Accra</option>
                                                        {/* <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WY">Wyoming</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12 col-lg-12 mb-0">
                                                    <div className="checkout-tearm customCheckbox">
                                                        <input id="checkout_tearm" name="tearm" type="checkbox" value="checkout tearm" onChange={ShippingDetailsToAccountHandler} />
                                                        <label htmlFor="checkout_tearm"> Save address to my account</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="block mb-3 billing-address mb-4">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Billing Address</h3>
                                        <fieldset>
                                            <div className="row">
                                                <div className="form-group col-md-12 col-lg-12">
                                                    <div className="checkout-tearm customCheckbox">
                                                        <input id="add_tearm" name="tearm" type="checkbox" value="checkout tearm" />
                                                        <label htmlFor="add_tearm"> The same as shipping address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12">
                                                    <label htmlFor="address-11" className="form-label">Address <span className="required">*</span></label>
                                                    {/* <input name="address_11" value={billingaddress} id="address-11" type="text" required={true} placeholder="Street address" className="form-control"
                                                        onChange={BillingAddressHandler} /> */}

                                                    <input type="text" className={formData.billingAddress && formData.hasError5 && formData.isTouched5 ? "form-control p-2 is-invalid" : formData.billingAddress && !formData.hasError5 && formData.isTouched5 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer05" value={formData.billingAddress} onChange={BillingAddressHandler}
                                                        placeholder="Enter Shipping Address" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid billing Address
                                                    </div>
                                                </div>
                                                {/* <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12">
                                                    <input name="address_12" value="" id="address-12" type="text" required={true} placeholder="Apartment, suite, unit etc. (optional)" className="form-control" />
                                                </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="postcode2" className="form-label">Postcode / ZIP <span className="required">*</span></label>
                                                    {/* <input name="postcode2" value={billingzip} id="postcode2" type="text" className="form-control" onChange={BillingZipHandler} /> */}

                                                    <input type="text" className={formData.billingZip && formData.hasError7 && formData.isTouched7 ? "form-control p-2 is-invalid" : formData.billingZip && !formData.hasError7 && formData.isTouched7 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer05" value={formData.billingZip} onChange={BillingZipHandler}
                                                        placeholder="Enter Shipping Zip" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid Billing Zip
                                                    </div>
                                                </div>
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <label htmlFor="address_country2" className="form-label">Country <span className="required">*</span></label>
                                                    <select id="address_country2" name="address[country1]" value={formData.billingCountry} className={formData.billingCountry && formData.hasError8 && formData.isTouched8 ? "form-control p-2 is-invalid" : formData.billingCountry && !formData.hasError8 && formData.isTouched8 ? "form-control p-2 is-valid" : "form-control p-2"}
                                                        onChange={BillingCountryHandler}>
                                                        <option value="0" label="Select a country">Select a country</option>
                                                        <option value="Ghana" label="Algeria">Ghana</option>
                                                        {/* <optgroup id="country-optgroup-Af" label="Africa">
                                                            <option value="DZ" label="Algeria">Algeria</option>
                                                            <option value="AO" label="Angola">Angola</option>
                                                            <option value="BJ" label="Benin">Benin</option>
                                                            <option value="BW" label="Botswana">Botswana</option>
                                                            <option value="BF" label="Burkina Faso">Burkina Faso</option>
                                                            <option value="BI" label="Burundi">Burundi</option>
                                                            <option value="CM" label="Cameroon">Cameroon</option>
                                                            <option value="CV" label="Cape Verde">Cape Verde</option>
                                                            <option value="CF" label="Central African Republic">Central African Republic</option>
                                                            <option value="TD" label="Chad">Chad</option>
                                                            <option value="KM" label="Comoros">Comoros</option>
                                                            <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
                                                            <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
                                                            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
                                                            <option value="DJ" label="Djibouti">Djibouti</option>
                                                            <option value="EG" label="Egypt">Egypt</option>
                                                            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="ER" label="Eritrea">Eritrea</option>
                                                            <option value="ET" label="Ethiopia">Ethiopia</option>
                                                            <option value="GA" label="Gabon">Gabon</option>
                                                            <option value="GM" label="Gambia">Gambia</option>
                                                            <option value="GH" label="Ghana">Ghana</option>
                                                            <option value="GN" label="Guinea">Guinea</option>
                                                            <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="KE" label="Kenya">Kenya</option>
                                                            <option value="LS" label="Lesotho">Lesotho</option>
                                                            <option value="LR" label="Liberia">Liberia</option>
                                                            <option value="LY" label="Libya">Libya</option>
                                                            <option value="MG" label="Madagascar">Madagascar</option>
                                                            <option value="MW" label="Malawi">Malawi</option>
                                                            <option value="ML" label="Mali">Mali</option>
                                                            <option value="MR" label="Mauritania">Mauritania</option>
                                                            <option value="MU" label="Mauritius">Mauritius</option>
                                                            <option value="YT" label="Mayotte">Mayotte</option>
                                                            <option value="MA" label="Morocco">Morocco</option>
                                                            <option value="MZ" label="Mozambique">Mozambique</option>
                                                            <option value="NA" label="Namibia">Namibia</option>
                                                            <option value="NE" label="Niger">Niger</option>
                                                            <option value="NG" label="Nigeria">Nigeria</option>
                                                            <option value="RW" label="Rwanda">Rwanda</option>
                                                            <option value="RE" label="Réunion">Réunion</option>
                                                            <option value="SH" label="Saint Helena">Saint Helena</option>
                                                            <option value="SN" label="Senegal">Senegal</option>
                                                            <option value="SC" label="Seychelles">Seychelles</option>
                                                            <option value="SL" label="Sierra Leone">Sierra Leone</option>
                                                            <option value="SO" label="Somalia">Somalia</option>
                                                            <option value="ZA" label="South Africa">South Africa</option>
                                                            <option value="SD" label="Sudan">Sudan</option>
                                                            <option value="SZ" label="Swaziland">Swaziland</option>
                                                            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                                            <option value="TZ" label="Tanzania">Tanzania</option>
                                                            <option value="TG" label="Togo">Togo</option>
                                                            <option value="TN" label="Tunisia">Tunisia</option>
                                                            <option value="UG" label="Uganda">Uganda</option>
                                                            <option value="EH" label="Western Sahara">Western Sahara</option>
                                                            <option value="ZM" label="Zambia">Zambia</option>
                                                            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Am" label="Americas">
                                                            <option value="AI" label="Anguilla">Anguilla</option>
                                                            <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="AR" label="Argentina">Argentina</option>
                                                            <option value="AW" label="Aruba">Aruba</option>
                                                            <option value="BS" label="Bahamas">Bahamas</option>
                                                            <option value="BB" label="Barbados">Barbados</option>
                                                            <option value="BZ" label="Belize">Belize</option>
                                                            <option value="BM" label="Bermuda">Bermuda</option>
                                                            <option value="BO" label="Bolivia">Bolivia</option>
                                                            <option value="BR" label="Brazil">Brazil</option>
                                                            <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
                                                            <option value="CA" label="Canada">Canada</option>
                                                            <option value="KY" label="Cayman Islands">Cayman Islands</option>
                                                            <option value="CL" label="Chile">Chile</option>
                                                            <option value="CO" label="Colombia">Colombia</option>
                                                            <option value="CR" label="Costa Rica">Costa Rica</option>
                                                            <option value="CU" label="Cuba">Cuba</option>
                                                            <option value="DM" label="Dominica">Dominica</option>
                                                            <option value="DO" label="Dominican Republic">Dominican Republic</option>
                                                            <option value="EC" label="Ecuador">Ecuador</option>
                                                            <option value="SV" label="El Salvador">El Salvador</option>
                                                            <option value="FK" label="Falkland Islands">Falkland Islands</option>
                                                            <option value="GF" label="French Guiana">French Guiana</option>
                                                            <option value="GL" label="Greenland">Greenland</option>
                                                            <option value="GD" label="Grenada">Grenada</option>
                                                            <option value="GP" label="Guadeloupe">Guadeloupe</option>
                                                            <option value="GT" label="Guatemala">Guatemala</option>
                                                            <option value="GY" label="Guyana">Guyana</option>
                                                            <option value="HT" label="Haiti">Haiti</option>
                                                            <option value="HN" label="Honduras">Honduras</option>
                                                            <option value="JM" label="Jamaica">Jamaica</option>
                                                            <option value="MQ" label="Martinique">Martinique</option>
                                                            <option value="MX" label="Mexico">Mexico</option>
                                                            <option value="MS" label="Montserrat">Montserrat</option>
                                                            <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
                                                            <option value="NI" label="Nicaragua">Nicaragua</option>
                                                            <option value="PA" label="Panama">Panama</option>
                                                            <option value="PY" label="Paraguay">Paraguay</option>
                                                            <option value="PE" label="Peru">Peru</option>
                                                            <option value="PR" label="Puerto Rico">Puerto Rico</option>
                                                            <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
                                                            <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                            <option value="LC" label="Saint Lucia">Saint Lucia</option>
                                                            <option value="MF" label="Saint Martin">Saint Martin</option>
                                                            <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                            <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                            <option value="SR" label="Suriname">Suriname</option>
                                                            <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                            <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                                            <option value="US" label="United States">United States</option>
                                                            <option value="UY" label="Uruguay">Uruguay</option>
                                                            <option value="VE" label="Venezuela">Venezuela</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Asia" label="Asia">
                                                            <option value="AF" label="Afghanistan">Afghanistan</option>
                                                            <option value="AM" label="Armenia">Armenia</option>
                                                            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
                                                            <option value="BH" label="Bahrain">Bahrain</option>
                                                            <option value="BD" label="Bangladesh">Bangladesh</option>
                                                            <option value="BT" label="Bhutan">Bhutan</option>
                                                            <option value="BN" label="Brunei">Brunei</option>
                                                            <option value="KH" label="Cambodia">Cambodia</option>
                                                            <option value="CN" label="China">China</option>
                                                            <option value="GE" label="Georgia">Georgia</option>
                                                            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
                                                            <option value="IN" label="India">India</option>
                                                            <option value="ID" label="Indonesia">Indonesia</option>
                                                            <option value="IR" label="Iran">Iran</option>
                                                            <option value="IQ" label="Iraq">Iraq</option>
                                                            <option value="IL" label="Israel">Israel</option>
                                                            <option value="JP" label="Japan">Japan</option>
                                                            <option value="JO" label="Jordan">Jordan</option>
                                                            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
                                                            <option value="KW" label="Kuwait">Kuwait</option>
                                                            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="LA" label="Laos">Laos</option>
                                                            <option value="LB" label="Lebanon">Lebanon</option>
                                                            <option value="MO" label="Macau SAR China">Macau SAR China</option>
                                                            <option value="MY" label="Malaysia">Malaysia</option>
                                                            <option value="MV" label="Maldives">Maldives</option>
                                                            <option value="MN" label="Mongolia">Mongolia</option>
                                                            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
                                                            <option value="NP" label="Nepal">Nepal</option>
                                                            <option value="NT" label="Neutral Zone">Neutral Zone</option>
                                                            <option value="KP" label="North Korea">North Korea</option>
                                                            <option value="OM" label="Oman">Oman</option>
                                                            <option value="PK" label="Pakistan">Pakistan</option>
                                                            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
                                                            <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
                                                            <option value="PH" label="Philippines">Philippines</option>
                                                            <option value="QA" label="Qatar">Qatar</option>
                                                            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="SG" label="Singapore">Singapore</option>
                                                            <option value="KR" label="South Korea">South Korea</option>
                                                            <option value="LK" label="Sri Lanka">Sri Lanka</option>
                                                            <option value="SY" label="Syria">Syria</option>
                                                            <option value="TW" label="Taiwan">Taiwan</option>
                                                            <option value="TJ" label="Tajikistan">Tajikistan</option>
                                                            <option value="TH" label="Thailand">Thailand</option>
                                                            <option value="TL" label="Timor-Leste">Timor-Leste</option>
                                                            <option value="TR" label="Turkey">Turkey</option>
                                                            <option value="TM" label="Turkmenistan">Turkmenistan</option>
                                                            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
                                                            <option value="VN" label="Vietnam">Vietnam</option>
                                                            <option value="YE" label="Yemen">Yemen</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Europe" label="Europe">
                                                            <option value="AL" label="Albania">Albania</option>
                                                            <option value="AD" label="Andorra">Andorra</option>
                                                            <option value="AT" label="Austria">Austria</option>
                                                            <option value="BY" label="Belarus">Belarus</option>
                                                            <option value="BE" label="Belgium">Belgium</option>
                                                            <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                            <option value="BG" label="Bulgaria">Bulgaria</option>
                                                            <option value="HR" label="Croatia">Croatia</option>
                                                            <option value="CY" label="Cyprus">Cyprus</option>
                                                            <option value="CZ" label="Czech Republic">Czech Republic</option>
                                                            <option value="DK" label="Denmark">Denmark</option>
                                                            <option value="DD" label="East Germany">East Germany</option>
                                                            <option value="EE" label="Estonia">Estonia</option>
                                                            <option value="FO" label="Faroe Islands">Faroe Islands</option>
                                                            <option value="FI" label="Finland">Finland</option>
                                                            <option value="FR" label="France">France</option>
                                                            <option value="DE" label="Germany">Germany</option>
                                                            <option value="GI" label="Gibraltar">Gibraltar</option>
                                                            <option value="GR" label="Greece">Greece</option>
                                                            <option value="GG" label="Guernsey">Guernsey</option>
                                                            <option value="HU" label="Hungary">Hungary</option>
                                                            <option value="IS" label="Iceland">Iceland</option>
                                                            <option value="IE" label="Ireland">Ireland</option>
                                                            <option value="IM" label="Isle of Man">Isle of Man</option>
                                                            <option value="IT" label="Italy">Italy</option>
                                                            <option value="JE" label="Jersey">Jersey</option>
                                                            <option value="LV" label="Latvia">Latvia</option>
                                                            <option value="LI" label="Liechtenstein">Liechtenstein</option>
                                                            <option value="LT" label="Lithuania">Lithuania</option>
                                                            <option value="LU" label="Luxembourg">Luxembourg</option>
                                                            <option value="MK" label="Macedonia">Macedonia</option>
                                                            <option value="MT" label="Malta">Malta</option>
                                                            <option value="FX" label="Metropolitan France">Metropolitan France</option>
                                                            <option value="MD" label="Moldova">Moldova</option>
                                                            <option value="MC" label="Monaco">Monaco</option>
                                                            <option value="ME" label="Montenegro">Montenegro</option>
                                                            <option value="NL" label="Netherlands">Netherlands</option>
                                                            <option value="NO" label="Norway">Norway</option>
                                                            <option value="PL" label="Poland">Poland</option>
                                                            <option value="PT" label="Portugal">Portugal</option>
                                                            <option value="RO" label="Romania">Romania</option>
                                                            <option value="RU" label="Russia">Russia</option>
                                                            <option value="SM" label="San Marino">San Marino</option>
                                                            <option value="RS" label="Serbia">Serbia</option>
                                                            <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
                                                            <option value="SK" label="Slovakia">Slovakia</option>
                                                            <option value="SI" label="Slovenia">Slovenia</option>
                                                            <option value="ES" label="Spain">Spain</option>
                                                            <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                            <option value="SE" label="Sweden">Sweden</option>
                                                            <option value="CH" label="Switzerland">Switzerland</option>
                                                            <option value="UA" label="Ukraine">Ukraine</option>
                                                            <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                                                            <option value="GB" label="United Kingdom">United Kingdom</option>
                                                            <option value="VA" label="Vatican City">Vatican City</option>
                                                            <option value="AX" label="Åland Islands">Åland Islands</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Oc" label="Oceania">
                                                            <option value="AS" label="American Samoa">American Samoa</option>
                                                            <option value="AQ" label="Antarctica">Antarctica</option>
                                                            <option value="AU" label="Australia">Australia</option>
                                                            <option value="BV" label="Bouvet Island">Bouvet Island</option>
                                                            <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                            <option value="CX" label="Christmas Island">Christmas Island</option>
                                                            <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                                                            <option value="CK" label="Cook Islands">Cook Islands</option>
                                                            <option value="FJ" label="Fiji">Fiji</option>
                                                            <option value="PF" label="French Polynesia">French Polynesia</option>
                                                            <option value="TF" label="French Southern Territories">French Southern Territories</option>
                                                            <option value="GU" label="Guam">Guam</option>
                                                            <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                                            <option value="KI" label="Kiribati">Kiribati</option>
                                                            <option value="MH" label="Marshall Islands">Marshall Islands</option>
                                                            <option value="FM" label="Micronesia">Micronesia</option>
                                                            <option value="NR" label="Nauru">Nauru</option>
                                                            <option value="NC" label="New Caledonia">New Caledonia</option>
                                                            <option value="NZ" label="New Zealand">New Zealand</option>
                                                            <option value="NU" label="Niue">Niue</option>
                                                            <option value="NF" label="Norfolk Island">Norfolk Island</option>
                                                            <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
                                                            <option value="PW" label="Palau">Palau</option>
                                                            <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
                                                            <option value="WS" label="Samoa">Samoa</option>
                                                            <option value="SB" label="Solomon Islands">Solomon Islands</option>
                                                            <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                                            <option value="TK" label="Tokelau">Tokelau</option>
                                                            <option value="TO" label="Tonga">Tonga</option>
                                                            <option value="TV" label="Tuvalu">Tuvalu</option>
                                                            <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
                                                            <option value="VU" label="Vanuatu">Vanuatu</option>
                                                            <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
                                                        </optgroup> */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6 mb-sm-0">
                                                    <label htmlFor="address_State1" className="form-label">State <span className="required">*</span></label>
                                                    <select id="address_State1" name="address[State]" value={formData.billingState}   className={formData.billingState && formData.hasError9 && formData.isTouched9 ? "form-control p-2 is-invalid" : formData.billingState && !formData.hasError9 && formData.isTouched9 ? "form-control p-2 is-valid" : "form-control p-2"}
                                                     onChange={BillingStateHandler} >
                                                        <option value="0" label="Select a state" >Select a state</option>
                                                        <option value="GH">Ghana</option>
                                                        {/* <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option> */}
                                                    </select>
                                                </div>
                                                <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6 mb-0">
                                                    <label htmlFor="address_province2" className="form-label">Town / City <span className="required">*</span></label>
                                                    <select id="address_province2" name="address[province]" value={formData.billingCity} 
                                                     className={formData.billingCity && formData.hasError6 && formData.isTouched6 ? "form-control p-2 is-invalid" : formData.billingCity&& !formData.hasError6 && formData.isTouched6 ? "form-control p-2 is-valid" : "form-control p-2"}
                                                        onChange={BillingCityHandler}>
                                                        <option value="0" label="Select a city" >Select a city</option>
                                                        <option value="Accra">Accra</option>
                                                        {/* <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WY">Wyoming</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="block mb-3 delivery-methods mb-4">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Delivery Methods</h3>
                                        <div className="delivery-methods-content">
                                            <div className="customRadio clearfix">
                                                <input id="formcheckoutRadio1" value="" name="radio1" type="radio" className="radio" checked={true} />
                                                <label htmlFor="formcheckoutRadio1" className="mb-0">Standard Delivery $2.99 (3-5 days)</label>
                                            </div>
                                            <div className="customRadio clearfix">
                                                <input id="formcheckoutRadio2" value="" name="radio1" type="radio" className="radio" />
                                                <label htmlFor="formcheckoutRadio2" className="mb-0">Express Delivery $10.99 (1-2 days)</label>
                                            </div>
                                            <div className="customRadio clearfix mb-0">
                                                <input id="formcheckoutRadio3" value="" name="radio1" type="radio" className="radio" />
                                                <label htmlFor="formcheckoutRadio3" className="mb-0">Same-Day $20.00 (Evening Delivery)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block mb-3 payment-methods mb-4">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Payment Methods</h3>
                                        <div className="payment-accordion">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item card mb-2">
                                                    <div className="card-header" id="headingOne">
                                                        <button className="card-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Direct Bank Transfer</button>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card mb-2">
                                                    <div className="card-header" id="headingTwo">
                                                        <button className="card-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cheque Payment</button>
                                                    </div>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card mb-2">
                                                    <div className="card-header" id="headingThree">
                                                        <button className="card-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">PayPal</button>
                                                    </div>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Pay via PayPal you can pay with your credit card if you don't have a PayPal account.</p>
                                                            <div className="input-group mb-0 d-flex">
                                                                <input type="text" className="form-control" placeholder="paypal@example.com" required={true} />
                                                                <button className="btn btn-primary" type="submit">Pay 99.00 USD</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card mb-0">
                                                    <div className="card-header" id="headingFour">
                                                        <button className="card-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Payment Information</button>
                                                    </div>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <fieldset>
                                                                <div className="row">
                                                                    <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <label htmlFor="input-cardname">Name on Card <span className="required">*</span></label>
                                                                        <input name="cardname" value="" placeholder="" id="input-cardname" className="form-control" type="text" pattern="[0-9\-]*" />
                                                                    </div>
                                                                    <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <label>Credit Card Type <span className="required">*</span></label>
                                                                        <select name="country_id" className="form-control">
                                                                            <option value="">Please Select</option>
                                                                            <option value="1">American Express</option>
                                                                            <option value="2">Visa Card</option>
                                                                            <option value="3">Master Card</option>
                                                                            <option value="4">Discover Card</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="form-group col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <label htmlFor="input-cardno">Credit Card Number  <span className="required">*</span></label>
                                                                        <input name="cardno" value="" placeholder="" id="input-cardno" className="form-control" type="text" pattern="[0-9\-]*" />
                                                                    </div>
                                                                    <div className="form-group col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <label htmlFor="input-cvv">CVV Code <span className="required">*</span></label>
                                                                        <input name="cvv" value="" placeholder="" id="input-cvv" className="form-control" type="text" pattern="[0-9\-]*" />
                                                                    </div>
                                                                    <div className="form-group col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <label>Expiration Date <span className="required">*</span></label>
                                                                        <input type="date" name="exdate" className="form-control" />
                                                                    </div>
                                                                    <div className="form-group col-12 col-sm-4 col-md-4 col-lg-4 mb-0">
                                                                        <button className="btn btn-primary" type="submit">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block mb-3 order-comments mb-4">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Order Comment</h3>
                                        <fieldset>
                                            <div className="row">
                                                <div className="form-group col-md-12 col-lg-12 col-xl-12 mb-0">
                                                    <textarea className="resize-both form-control" rows={4} placeholder="Place your comment here"></textarea>
                                                    <small className="mt-2 d-block">*Savings include promotions, coupons, rueBUCKS, and shipping (if applicable).</small>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="block mb-3 apply-code mb-4">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Apply Promocode</h3>
                                        <div id="coupon" className="coupon-dec">
                                            <p>Got a promo code? Then you're a few randomly combined numbers & letters away from fab savings!</p>
                                            <div className="input-group mb-0 d-flex">
                                                <input id="coupon-code" required={true} type="text" className="form-control" placeholder="Promotion/Discount Code" />
                                                <button className="coupon-btn btn btn-primary" type="submit">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12 col-12 mb-4 mb-md-0">
                                <div className="block order-summary">
                                    <div className="block-content">
                                        <h3 className="title mb-3 text-uppercase">Order Summary</h3>
                                        <div className="table-responsive-sm table-bottom-brd order-table">
                                            {/* <table className="table table-hover align-middle mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="action">&nbsp;</th>
                                                        <th className="text-start">Image</th>
                                                        <th className="text-start proName">Product</th>
                                                        <th className="text-center">Qty</th>
                                                        <th className="text-center">Price</th>
                                                        <th className="text-center">Subtotal</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center cart-delete"><a href="#" className="cart-remove remove-icon position-static" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove to Cart"><i className="icon anm anm-times-r"></i></a></td>
                                                        <td className="text-start"><a href="product-layout1.html" className="thumb"><img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product1-120x170.jpg" src="assets/images/products/product1-120x170.jpg" alt="product" title="product" width="120" height="170" /></a></td>
                                                        <td className="text-start proName">
                                                            <div className="list-view-item-title">
                                                                <a href="product-layout1.html">Oxford Cuban Shirt</a>
                                                            </div>
                                                            <div className="cart-meta-text">
                                                                Color: Black<br />Size: Small
                                                            </div>
                                                        </td>
                                                        <td className="text-center">2</td>
                                                        <td className="text-center">$99.00</td>
                                                        <td className="text-center"><strong>$198.00</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center cart-delete"><a href="#" className="cart-remove remove-icon position-static" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove to Cart"><i className="icon anm anm-times-r"></i></a></td>
                                                        <td className="text-start"><a href="product-layout1.html" className="thumb"><img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-120x170.jpg" src="assets/images/products/product2-120x170.jpg" alt="product" title="product" width="120" height="170" /></a></td>
                                                        <td className="text-start proName">
                                                            <div className="list-view-item-title">
                                                                <a href="product-layout1.html">Cuff Beanie Cap</a>
                                                            </div>
                                                            <div className="cart-meta-text">
                                                                Color: Black<br />Size: Small
                                                            </div>
                                                        </td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-center">$128.00</td>
                                                        <td className="text-center"><strong>$128.00</strong></td>
                                                    </tr>
                                                </tbody>
                                            </table> */}

                                            <SummaryItems filterCartItems={filterCartItems} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 col-12">

                                <div className="cart-info">
                                    <div className="cart-order-detail cart-col">
                                        <div className="row g-0 border-bottom pb-2">
                                            <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Subtotal</strong></span>
                                            <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">GHC {calculateTotalPrice.toFixed(2)}</span></span>
                                        </div>
                                        <div className="row g-0 border-bottom py-2">
                                            <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Coupon Discount</strong></span>
                                            <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">-$25.00</span></span>
                                        </div>
                                        <div className="row g-0 border-bottom py-2">
                                            <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Tax</strong></span>
                                            <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">$10.00</span></span>
                                        </div>
                                        <div className="row g-0 border-bottom py-2">
                                            <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Shipping</strong></span>
                                            <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">Free shipping</span></span>
                                        </div>
                                        <div className="row g-0 pt-2">
                                            <span className="col-6 col-sm-6 cart-subtotal-title fs-6"><strong>Total</strong></span>
                                            <span className="col-6 col-sm-6 cart-subtotal-title fs-5 cart-subtotal text-end text-primary"><b className="money">GHC {calculateTotalPrice.toFixed(2)}</b></span>
                                        </div>

                                        <a onClick={PlaceOrder} className="btn btn-lg my-4 checkout w-100">Place order</a>
                                        <div className="paymnet-img text-center"><img src="https://www.annimexweb.com/items/hema/assets/images/icons/safepayment.png" alt="Payment" width="299" height="28" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>

            </div>
            <Footer />
            <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>
            <Cart />

        </>

    )
}