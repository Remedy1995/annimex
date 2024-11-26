import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '../components/Pagination';
import UpdateQuantityCart from '../components/UpdateQuantityCart';
import { Service } from '../Services/Services';
import { Footer } from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,updateQuantityInCart } from '../redux/Reducers/Cart';
import SummaryItems from '../components/SummaryItems';
import { GetSingleProductHooks, SuggestedProductHooks, RelatedProductsHooks, MultipleSuggestedProductsHooks } from '../Hooks/Hooks';
import { Cart } from '../components/Cart';
import { Header } from '../components/Header';
import { useRef } from 'react';

export const ViewCart = () => {
    const trackInput = useRef(1);
    let [itemQuantity, setItemQuantity] = useState({
        quantity: 1
    })

    const dispatch = useDispatch();
    console.log(itemQuantity)
    const increaseQuantity = (e: any) => {
        e.preventDefault();
    
    }
    const reduceQuantity = (e: any) => {
        e.preventDefault();
        //setQuantity((item: any) => ({ ...item, quantity: item - 1 }))

    }

    const updateCartQuantity = (id : any,data:any) => {  
        dispatch(updateQuantityInCart({quantity : data ,_id : id}));
   }

    const DeleteFromCart = (id: any) => {
        console.log('i removed', id)
        dispatch(removeFromCart({
            _id : id
          }));
    }


    const allAddedCart = useSelector((state: any) => state.Cart.cart);

    console.log('final push array',allAddedCart)
    const getCartIds = allAddedCart.map((data: any) => data._id);
    //console.log('all get ids', getCartIds)

    const filterCartItems = allAddedCart.filter((data: any, index: any) => {
        if (getCartIds.indexOf(data._id) === index) {
            return data;
        }
    })


    const getCategoryOfItems = filterCartItems.map((data: any) => data.category_name);
    console.log('This is the category names of all items', getCategoryOfItems)
    const { id } = useParams();

    const [selectedPage, setSelectedPage] = useState(1);
    const [perPage, setPerPage] = useState(null);


    const backdrop = document.querySelector("div.offcanvas-backdrop.fade.show") as HTMLElement | null;
    if (backdrop) {
        backdrop.style.opacity = ".";
    }

    let cartObject = {
        category: getCategoryOfItems,
        id: getCartIds
    }
    const { products, totalPages } = MultipleSuggestedProductsHooks(selectedPage, cartObject);
    console.log('my new products', products)

    function GetSelectedId(e: any) {
        console.log('my selected', e)
        setSelectedPage(e)
    }
    console.log('my suggested products', products, totalPages)


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
        <>
            <Header />
            <div id="page-content">
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>Your Shopping Cart Style1</h1></div>

                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="main-title"><i className="icon anm anm-angle-right-l"></i>Your Shopping Cart Style1</span></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 main-col">
                            <div className="alert alert-success py-2 alert-dismissible fade show cart-alert" role="alert">
                                <i className="align-middle icon anm anm-truck icon-large me-2"></i><strong className="text-uppercase">Congratulations!</strong> You've got free shipping!
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>

                            {/* <form action="#" method="post" className="cart-table table-bottom-brd">
                                <table className="table align-middle">
                                    <thead className="cart-row cart-header small-hide position-relative">
                                        <tr>
                                            <th className="action">&nbsp;</th>
                                            <th colSpan={2} className="text-start">Product</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {filterCartItems && filterCartItems.map((data: any) => {
                                            return <tr className="cart-row cart-flex position-relative">
                                                <td className="cart-delete text-center small-hide"><a style={{cursor :'pointer',padding :'10px'}} onClick={() => DeleteFromCart(data?._id)} className="cart-remove remove-icon position-static" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove to Cart"><i className="icon anm anm-times-r"
                                                ></i></a></td>
                                                <td className="cart-image cart-flex-item">
                                                    <a href="product-layout1.html"><img className="cart-image rounded-0 blur-up lazyload" data-src={data.image_url} src={data.image_url} alt="Sunset Sleep Scarf Top" width="120" height="170" /></a>
                                                </td>
                                                <td className="cart-meta small-text-left cart-flex-item">
                                                    <div className="list-view-item-title">
                                                        <a href="product-layout1.html">{data.name}</a>
                                                    </div>
                                                    <div className="cart-meta-text">
                                                        Color: Black<br />Size: Small<br />Qty: 2
                                                    </div>
                                                    <div className="cart-price d-md-none">
                                                        <span className="money fw-500">{data.price}</span>
                                                    </div>
                                                </td>
                                                <td className="cart-price cart-flex-item text-center small-hide">
                                                    <span className="money">{data.price}</span>
                                                </td>
                                                <td className="cart-update-wrapper cart-flex-item text-end text-md-center">
                                                    <div className="cart-qty d-flex justify-content-end justify-content-md-center">
                                                          <UpdateQuantityCart updateCartQuantity={(e)=>updateCartQuantity(data._id,e.target.value)} quantity={data.quantity}   />                                               
                                                    </div>
                                                    <a href="#" title="Remove" className="removeMb d-md-none d-inline-block text-decoration-underline mt-2 me-3">Remove</a>
                                                </td>
                                                <td className="cart-price cart-flex-item text-center small-hide">
                                                    <span className="money fw-500">{data.price}</span>
                                                </td>
                                            </tr>
                                        })

                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-start"><a href="#" className="btn btn-outline-secondary btn-sm cart-continue"><i className="icon anm anm-angle-left-r me-2 d-none"></i> Continue shopping</a></td>
                                            <td colSpan={3} className="text-end">
                                                <button type="submit" name="clear" className="btn btn-outline-secondary btn-sm small-hide"><i className="icon anm anm-times-r me-2 d-none"></i> Clear Shoping Cart</button>
                                                <button type="submit" name="update" className="btn btn-secondary btn-sm cart-continue ms-2"><i className="icon anm anm-sync-ar me-2 d-none"></i> Update Cart</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </form> */}
                            <SummaryItems  filterCartItems={filterCartItems} />
                            <div className="row my-4 pt-3">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-12 cart-col">
                                    <div className="cart-note mb-4">
                                        <h5>Add a note to your order</h5>
                                        <label htmlFor="cart-note">Notes about your order, e.g. special notes for delivery.</label>
                                        <textarea name="note" id="cart-note" className="form-control cart-note-input" rows={3} required></textarea>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-12 cart-col">
                                    <div className="cart-discount">
                                        <h5>Discount Codes</h5>
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="address_zip">Enter your coupon code if you have one.</label>
                                                <div className="input-group0">
                                                    <input className="form-control" type="text" name="coupon" required />
                                                    <input type="submit" className="btn text-nowrap mt-3" value="Apply Coupon" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-12 cart-col">
                                    <div id="shipping-calculator" className="mt-4 mt-lg-0">
                                        <h5>Get shipping estimates</h5>
                                        <form className="estimate-form row row-cols-lg-3 row-cols-md-3 row-cols-1" action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="address_country">Country</label>
                                                <select id="address_country" name="address[country]" data-default="United States">
                                                    <option value="0" label="Select a country ... ">Select a country...</option>
                                                    <optgroup id="country-optgroup-Africa" label="Africa">
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
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="address_province">State</label>
                                                <select id="address_province" name="address[province]" data-default="">
                                                    <option value="0" label="Select a state..." selected={true}>Select a state...</option>
                                                    <option value="AL">Alabama</option>
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
                                                    <option value="WY">Wyoming</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="address_zip">Postal/Zip Code</label>
                                                <input type="text" id="address_zip" name="address[zip]" />
                                            </div>
                                            <div className="actionRow">
                                                <input type="button" className="btn btn-secondary get-rates" value="Calculate shipping" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 cart-footer">
                            <div className="cart-info sidebar-sticky">
                                <div className="cart-order-detail cart-col">
                                    <div className="row g-0 border-bottom pb-2">
                                        <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Subtotal</strong></span>
                                        <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">$226.00</span></span>
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
                                        <span className="col-6 col-sm-6 cart-subtotal-title fs-5 cart-subtotal text-end text-primary"><b className="money">$311.00</b></span>
                                    </div>

                                    <p className="cart-shipping mt-3">Shipping &amp; taxes calculated at checkout</p>
                                    <p className="cart-shipping fst-normal freeShipclaim"><i className="me-2 align-middle icon anm anm-truck-l"></i><b>FREE SHIPPING</b> ELIGIBLE</p>
                                    <div className="customCheckbox cart-tearm">
                                        <input type="checkbox" value="allen-vela" id="cart-tearm" />
                                        <label htmlFor="cart-tearm">I agree with the terms and conditions</label>
                                    </div>
                                    <a href="checkout-style1.html" id="cartCheckout" className="btn btn-lg my-4 checkout w-100">Proceed To Checkout</a>
                                    <div className="paymnet-img text-center"><img src="assets/images/icons/safepayment.png" alt="Payment" width="299" height="28" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <section className="section product-slider pb-0">
                    <div className="container">
                        <div className="section-header">
                            <h2>You may also like</h2>
                        </div>

                        {/* <div className="product-slider-4items gp10 arwOut5 grid-products">
                            <div className="item col-item">
                                <div className="product-box">

                                    <div className="product-image">

                                        <a href="product-layout1.html" className="product-img rounded-0"><img className="rounded-0 blur-up lazyload" src="assets/images/products/product1.jpg" alt="Product" title="Product" width="625" height="808" /></a>

                                        <div className="product-labels"><span className="lbl on-sale">Sale</span></div>

                                        <div className="button-set style1">

                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick Shop"><i className="icon anm anm-cart-l"></i><span className="text">Quick Shop</span></span>
                                            </a>

                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-left">

                                        <div className="product-name">
                                            <a href="product-layout1.html">Oxford Cuban Shirt</a>
                                        </div>

                                        <div className="product-price">
                                            <span className="price old-price">$114.00</span><span className="price">$99.00</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">3 Reviews</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="item col-item">
                                <div className="product-box">

                                    <div className="product-image">

                                        <a href="product-layout1.html" className="product-img rounded-0">

                                            <img className="primary rounded-0 blur-up lazyload" data-src="assets/images/products/product2.jpg" src="assets/images/products/product2.jpg" alt="Product" title="Product" width="625" height="808" />

                                            <img className="hover rounded-0 blur-up lazyload" data-src="assets/images/products/product2-1.jpg" src="assets/images/products/product2-1.jpg" alt="Product" title="Product" width="625" height="808" />

                                        </a>

                                        <div className="button-set style1">

                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Select Options"><i className="icon anm anm-cart-l"></i><span className="text">Select Options</span></span>
                                            </a>

                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-left">

                                        <div className="product-name">
                                            <a href="product-layout1.html">Cuff Beanie Cap</a>
                                        </div>

                                        <div className="product-price">
                                            <span className="price">$128.00</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">8 Reviews</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="item col-item">
                                <div className="product-box">

                                    <div className="product-image">

                                        <a href="product-layout1.html" className="product-img rounded-0">

                                            <img className="primary rounded-0 blur-up lazyload" data-src="assets/images/products/product3.jpg" src="assets/images/products/product3.jpg" alt="Product" title="Product" width="625" height="808" />

                                            <img className="hover rounded-0 blur-up lazyload" data-src="assets/images/products/product3-1.jpg" src="assets/images/products/product3-1.jpg" alt="Product" title="Product" width="625" height="808" />

                                        </a>

                                        <div className="product-labels"><span className="lbl pr-label3">Trending</span></div>

                                        <div className="button-set style1">

                                            <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart"><i className="icon anm anm-cart-l"></i><span className="text">Add to Cart</span></span>
                                            </a>

                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-left">

                                        <div className="product-name">
                                            <a href="product-layout1.html">Flannel Collar Shirt</a>
                                        </div>

                                        <div className="product-price">
                                            <span className="price">$99.00</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">10 Reviews</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="item col-item">
                                <div className="product-box">

                                    <div className="product-image">

                                        <a href="product-layout1.html" className="product-img rounded-0">

                                            <img className="primary rounded-0 blur-up lazyload" data-src="assets/images/products/product4.jpg" src="assets/images/products/product4.jpg" alt="Product" title="Product" width="625" height="808" />

                                            <img className="hover rounded-0 blur-up lazyload" data-src="assets/images/products/product4-1.jpg" src="assets/images/products/product4-1.jpg" alt="Product" title="Product" width="625" height="808" />

                                        </a>

                                        <div className="product-labels"><span className="lbl on-sale">50% Off</span></div>

                                        <div className="button-set style1">

                                            <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart"><i className="icon anm anm-cart-l"></i><span className="text">Add to Cart</span></span>
                                            </a>

                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-left">

                                        <div className="product-name">
                                            <a href="product-layout1.html">Cotton Hooded Hoodie</a>
                                        </div>

                                        <div className="product-price">
                                            <span className="price old-price">$198.00</span><span className="price">$99.00</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">0 Reviews</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="item col-item">
                                <div className="product-box">

                                    <div className="product-image">

                                        <a href="product-layout1.html" className="product-img rounded-0">

                                            <img className="primary rounded-0 blur-up lazyload" data-src="assets/images/products/product5.jpg" src="assets/images/products/product5.jpg" alt="Product" title="Product" width="625" height="808" />

                                            <img className="hover rounded-0 blur-up lazyload" data-src="assets/images/products/product5-1.jpg" src="assets/images/products/product5-1.jpg" alt="Product" title="Product" width="625" height="808" />

                                        </a>

                                        <div className="product-labels"><span className="lbl pr-label2">Hot</span></div>

                                        <div className="button-set style1">

                                            <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart"><i className="icon anm anm-cart-l"></i><span className="text">Add to Cart</span></span>
                                            </a>

                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-left">

                                        <div className="product-name">
                                            <a href="product-layout1.html">Denim Women Shorts</a>
                                        </div>

                                        <div className="product-price">
                                            <span className="price">$39.00</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">3 Reviews</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div> */}


                        <Pagination products={products} totalPages={totalPages} selectedPage={(e) => GetSelectedId(e)} />
                    </div>
                </section>
            </div>
            <Footer />
            <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>
            <Cart />
            <div className="quickshop-modal modal fade" id="quickshop_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form method="post" action="#" id="product-form-quickshop" className="product-form align-items-center">

                                <div className="row g-0 item mb-3">
                                    <a className="col-4 product-image" href="product-layout1.html"><img className="blur-up lazyload" data-src="assets/images/products/addtocart-modal.jpg" src="assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="800" /></a>
                                    <div className="col-8 product-details">
                                        <div className="product-variant ps-3">
                                            <a className="product-title" href="product-layout1.html">Weave Hoodie Sweatshirt</a>
                                            <div className="priceRow mt-2 mb-3">
                                                <div className="product-price m-0"><span className="old-price">$114.00</span><span className="price">$99.00</span></div>
                                            </div>
                                            <div className="qtyField">
                                                <a className="qtyBtn minus" href="#;"><i className="icon anm anm-minus-r"></i></a>
                                                <input type="text" name="quantity" value="1" className="qty" />
                                                <a className="qtyBtn plus" href="#;"><i className="icon anm anm-plus-r"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="variants-clr swatches-image clearfix mb-3 swatch-0 option1" data-option-index="0">
                                    <label className="label d-flex justify-content-center">Color:<span className="slVariant ms-1 fw-bold">Black</span></label>
                                    <ul className="swatches d-flex-justify-center pt-1 clearfix">
                                        <li className="swatch large radius available active"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                                        <li className="swatch large radius available"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Black" /></li>
                                        <li className="swatch large radius available"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink" /></li>
                                        <li className="swatch large radius available green"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"></span></li>
                                        <li className="swatch large radius soldout yellow"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow"></span></li>
                                    </ul>
                                </div>

                                <div className="variants-size swatches-size clearfix mb-4 swatch-1 option2" data-option-index="1">
                                    <label className="label d-flex justify-content-center">Size:<span className="slVariant ms-1 fw-bold">S</span></label>
                                    <ul className="size-swatches d-flex-justify-center pt-1 clearfix">
                                        <li className="swatch large radius soldout"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</span></li>
                                        <li className="swatch large radius available active"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</span></li>
                                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</span></li>
                                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</span></li>
                                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</span></li>
                                    </ul>
                                </div>

                                <div className="product-form-submit d-flex-justify-center">
                                    <button type="submit" name="add" className="btn product-cart-submit me-2"><span>Add to cart</span></button>
                                    <button type="submit" name="sold" className="btn btn-secondary product-sold-out d-none" disabled>Sold out</button>
                                    <button type="submit" name="buy" className="btn btn-secondary proceed-to-checkout">Buy it now</button>
                                </div>

                                <div className="text-center mt-3"><a className="text-link" href="product-layout1.html">View More Details</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addtocart-modal modal fade" id="addtocart_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form method="post" action="#" id="product-form-addtocart" className="product-form align-items-center">
                                <h3 className="title mb-3 text-success text-center">Added to cart Successfully!</h3>
                                <div className="row d-flex-center text-center">
                                    <div className="col-md-6">

                                        <a className="product-image" href="product-layout1.html"><img className="blur-up lazyload" data-src="assets/images/products/addtocart-modal.jpg" src="assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="800" /></a>

                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">

                                        <div className="product-details">
                                            <a className="product-title" href="product-layout1.html">Cuff Beanie Cap</a>
                                            <p className="product-clr my-2 text-muted">Black / XL</p>
                                        </div>
                                        <div className="addcart-total">
                                            <p className="product-items mb-2">There are <strong>1</strong> items in your cart</p>
                                            <p className="d-flex-justify-center">Total: <span className="price">$198.00</span></p>
                                        </div>

                                        <div className="product-form-submit d-flex-justify-center">
                                            <a href="#" className="btn btn-outline-primary product-continue w-100">Continue Shopping</a>
                                            <a href="cart-style1.html" className="btn btn-secondary product-viewcart w-100 my-2 my-md-3">View Cart</a>
                                            <a href="checkout-style1.html" className="btn btn-primary product-checkout w-100">Proceed to checkout</a>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div><div className="quickview-modal modal fade" id="quickview_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-3 mb-md-0">

                                    <div id="quickView" className="carousel slide">

                                        <div className="carousel-inner">
                                            <div className="item carousel-item active" data-bs-slide-number="0">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product2.jpg" src="assets/images/products/product2.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="1">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product2-1.jpg" src="assets/images/products/product2-1.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="2">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product2-2.jpg" src="assets/images/products/product2-2.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="3">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product2-3.jpg" src="assets/images/products/product2-3.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="4">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product2-4.jpg" src="assets/images/products/product2-4.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="5">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product2-5.jpg" src="assets/images/products/product2-5.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                        </div>

                                        <div className="model-thumbnail-img">

                                            <div className="carousel-indicators list-inline">
                                                <div className="list-inline-item active" id="carousel-selector-0" data-bs-slide-to="0" data-bs-target="#quickView">
                                                    <img className="blur-up lazyload" data-src="assets/images/products/product2.jpg" src="assets/images/products/product2.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-1" data-bs-slide-to="1" data-bs-target="#quickView">
                                                    <img className="blur-up lazyload" data-src="assets/images/products/product2-1.jpg" src="assets/images/products/product2-1.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-2" data-bs-slide-to="2" data-bs-target="#quickView">
                                                    <img className="blur-up lazyload" data-src="assets/images/products/product2-2.jpg" src="assets/images/products/product2-2.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-3" data-bs-slide-to="3" data-bs-target="#quickView">
                                                    <img className="blur-up lazyload" data-src="assets/images/products/product2-3.jpg" src="assets/images/products/product2-3.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-4" data-bs-slide-to="4" data-bs-target="#quickView">
                                                    <img className="blur-up lazyload" data-src="assets/images/products/product2-4.jpg" src="assets/images/products/product2-4.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-5" data-bs-slide-to="5" data-bs-target="#quickView">
                                                    <img className="blur-up lazyload" data-src="assets/images/products/product2-5.jpg" src="assets/images/products/product2-5.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                            </div>

                                            <a className="carousel-control-prev carousel-arrow" href="#quickView" data-bs-target="#quickView" data-bs-slide="prev"><i className="icon anm anm-angle-left-r"></i></a>
                                            <a className="carousel-control-next carousel-arrow" href="#quickView" data-bs-target="#quickView" data-bs-slide="next"><i className="icon anm anm-angle-right-r"></i></a>

                                        </div>

                                    </div>

                                    <div className="text-center mt-3"><a href="product-layout1.html" className="text-link">View More Details</a></div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="product-arrow d-flex justify-content-between">
                                        <h2 className="product-title">Product Quick View Popup</h2>
                                    </div>
                                    <div className="product-review d-flex mt-0 mb-2">
                                        <div className="rating"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i></div>
                                        <div className="reviews ms-2"><a href="#">6 Reviews</a></div>
                                    </div>
                                    <div className="product-info">
                                        <p className="product-vendor">Vendor:<span className="text"><a href="#">HVL</a></span></p>
                                        <p className="product-sku">SKU:<span className="text">RF104</span></p>
                                    </div>
                                    <div className="pro-stockLbl my-2">
                                        <span className="d-flex-center stockLbl instock d-none"><span> In stock</span></span>
                                        <span className="d-flex-center stockLbl preorder d-none"><span> Pre-order Now</span></span>
                                        <span className="d-flex-center stockLbl outstock d-none"><span>Sold out</span></span>
                                    </div>
                                    <div className="product-price d-flex-center my-3">
                                        <span className="price old-price">$135.00</span><span className="price">$129.00</span>
                                    </div>
                                    <div className="sort-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                                    <form method="post" action="#" id="product_form--option" className="product-form">
                                        <div className="product-options d-flex-wrap">
                                            <div className="product-item swatches-image w-100 mb-3 swatch-0 option1" data-option-index="0">
                                                <label className="label d-flex align-items-center">Color:<span className="slVariant ms-1 fw-bold">Blue</span></label>
                                                <ul className="variants-clr swatches d-flex-center pt-1 clearfix">
                                                    <li className="swatch large radius available blue"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue"></span></li>
                                                    <li className="swatch large radius available black"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Black"></span></li>
                                                    <li className="swatch large radius available pink"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink"></span></li>
                                                    <li className="swatch large radius available green"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"></span></li>
                                                    <li className="swatch large radius soldout yellow"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow"></span></li>
                                                </ul>
                                            </div>
                                            <div className="product-item swatches-size w-100 mb-3 swatch-1 option2" data-option-index="1">
                                                <label className="label d-flex align-items-center">Size:<span className="slVariant ms-1 fw-bold">S</span></label>
                                                <ul className="variants-size size-swatches d-flex-center pt-1 clearfix">
                                                    <li className="swatch large radius soldout"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</span></li>
                                                    <li className="swatch large radius available active"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</span></li>
                                                    <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</span></li>
                                                    <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</span></li>
                                                    <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</span></li>
                                                </ul>
                                            </div>
                                            <div className="product-action d-flex-wrap w-100 pt-1 mb-3 clearfix">
                                                <div className="quantity">
                                                    <div className="qtyField">
                                                        <a className="qtyBtn minus" href="#;"><i className="icon anm anm-minus-r" aria-hidden="true"></i></a>
                                                        <input type="text" name="quantity" value="1" className="product-form__input qty" />
                                                        <a className="qtyBtn plus" href="#;"><i className="icon anm anm-plus-l" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                                <div className="addtocart ms-3 fl-1">
                                                    <button type="submit" name="add" className="btn product-cart-submit w-100"><span>Add to cart</span></button>
                                                    <button type="submit" name="sold" className="btn btn-secondary product-sold-out w-100 d-none" disabled><span>Sold out</span></button>
                                                    <button type="submit" name="buy" className="btn btn-secondary proceed-to-checkout w-100 d-none"><span>Buy it now</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="wishlist-btn d-flex-center">
                                        <a className="add-wishlist d-flex-center me-3" href="wishlist-style1.html" title="Add to Wishlist"><i className="icon anm anm-heart-l me-1"></i> <span>Add to Wishlist</span></a>
                                        <a className="add-compare d-flex-center" href="compare-style1.html" title="Add to Compare"><i className="icon anm anm-random-r me-2"></i> <span>Add to Compare</span></a>
                                    </div>

                                    <div className="social-sharing share-icon d-flex-center mx-0 mt-3">
                                        <span className="sharing-lbl">Share :</span>
                                        <a href="#" className="d-flex-center btn btn-link btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook"><i className="icon anm anm-facebook-f"></i><span className="share-title d-none">Facebook</span></a>
                                        <a href="#" className="d-flex-center btn btn-link btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Tweet on Twitter"><i className="icon anm anm-twitter"></i><span className="share-title d-none">Tweet</span></a>
                                        <a href="#" className="d-flex-center btn btn-link btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest"><i className="icon anm anm-pinterest-p"></i> <span className="share-title d-none">Pin it</span></a>
                                        <a href="#" className="d-flex-center btn btn-link btn--share share-linkedin" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Instagram"><i className="icon anm anm-linkedin-in"></i><span className="share-title d-none">Instagram</span></a>
                                        <a href="#" className="d-flex-center btn btn-link btn--share share-whatsapp" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on WhatsApp"><i className="icon anm anm-envelope-l"></i><span className="share-title d-none">WhatsApp</span></a>
                                        <a href="#" className="d-flex-center btn btn-link btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email"><i className="icon anm anm-whatsapp"></i><span className="share-title d-none">Email</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="sizechart-modal modal fade" id="sizechart_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div id="sizechart" className="sizechart-wrap">
                                <h4 className="mb-2">Size Guide</h4>
                                <p className="mb-4">This is a standardised guide to give you an idea of what size you will need, however some brands may vary from these conversions.</p>
                                <div className="size-chart-tbl table-responsive px-1">
                                    <table className="table-bordered align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>XXS - XS</th>
                                                <th>XS - S</th>
                                                <th>S - M</th>
                                                <th>M - L</th>
                                                <th>L - XL</th>
                                                <th>XL - XXL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>UK</th>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>10</td>
                                                <td>12</td>
                                                <td>14</td>
                                                <td>16</td>
                                            </tr>
                                            <tr>
                                                <th>US</th>
                                                <td>2</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>10</td>
                                                <td>12</td>
                                            </tr>
                                            <tr>
                                                <th>Italy (IT)</th>
                                                <td>38</td>
                                                <td>40</td>
                                                <td>42</td>
                                                <td>44</td>
                                                <td>46</td>
                                                <td>48</td>
                                            </tr>
                                            <tr>
                                                <th>France (FR/EU)</th>
                                                <td>34</td>
                                                <td>36</td>
                                                <td>38</td>
                                                <td>40</td>
                                                <td>42</td>
                                                <td>44</td>
                                            </tr>
                                            <tr>
                                                <th>Denmark</th>
                                                <td>32</td>
                                                <td>34</td>
                                                <td>36</td>
                                                <td>38</td>
                                                <td>40</td>
                                                <td>42</td>
                                            </tr>
                                            <tr>
                                                <th>Russia</th>
                                                <td>40</td>
                                                <td>42</td>
                                                <td>44</td>
                                                <td>46</td>
                                                <td>48</td>
                                                <td>50</td>
                                            </tr>
                                            <tr>
                                                <th>Germany</th>
                                                <td>32</td>
                                                <td>34</td>
                                                <td>36</td>
                                                <td>38</td>
                                                <td>40</td>
                                                <td>42</td>
                                            </tr>
                                            <tr>
                                                <th>Japan</th>
                                                <td>5</td>
                                                <td>7</td>
                                                <td>9</td>
                                                <td>11</td>
                                                <td>13</td>
                                                <td>15</td>
                                            </tr>
                                            <tr>
                                                <th>Australia</th>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>10</td>
                                                <td>12</td>
                                                <td>14</td>
                                                <td>16</td>
                                            </tr>
                                            <tr>
                                                <th>Korea</th>
                                                <td>33</td>
                                                <td>44</td>
                                                <td>55</td>
                                                <td>66</td>
                                                <td>77</td>
                                                <td>88</td>
                                            </tr>
                                            <tr>
                                                <th>China</th>
                                                <td>160/84</td>
                                                <td>165/86</td>
                                                <td>170/88</td>
                                                <td>175/90</td>
                                                <td>180/92</td>
                                                <td>185/94</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="shippingInfo-modal modal fade" id="shippingInfo_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div id="ShippingInfo" className="shippingInfo-wrap">
                                <h4 className="pb-1">Delivery</h4>
                                <ul className="checkmark-info mb-3">
                                    <li>Dispatch: Within 24 Hours</li>
                                    <li>1 Year Brand Warranty</li>
                                    <li>Free shipping across all products on a minimum purchase of $50</li>
                                    <li>International delivery time - 7-10 business days</li>
                                    <li>Cash on delivery might be available</li>
                                    <li>Easy 30 days returns and exchanges</li>
                                    <li>All orders shipped with UPS Express</li>
                                    <li>All orders are shipped with a UPS tracking number</li>
                                </ul>
                                <h4 className="pt-1">Returns</h4>
                                <p>If you do not like the product you can return it within 15 days - no questions asked. This excludes bodysuits, swimwear and clearance sale items. We have an easy and hassle free return policy. Please look at our Delivery & Returns section for further information.</p>
                                <h4 className="pt-1">Help</h4>
                                <ul className="list-info">
                                    <li>Give us a shout if you have any other questions and/or concerns.</li>
                                    <li className="my-1"><strong>Email:</strong> <a href="mailto:contact@example.com"><span className="email">contact@example.com</span></a></li>
                                    <li><strong>Phone:</strong> <a href="tel:401234567890">(+40) 123 456 7890</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="productInquiry-modal modal fade" id="productInquiry_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div id="productInquiry" className="productInquiry-wrap">
                                <div className="page-title"><h3 className="mb-3">Product Inquiry Popup</h3></div>
                                <form method="post" action="#" id="productInquiry_form" className="productInquiry-form form-vertical">
                                    <div className="form-row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="text" id="ContactFormName" name="contact[name]" placeholder="Name" value="" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" id="ContactFormEmail" name="contact[email]" placeholder="Email" value="" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="tel" id="ContactFormPhone" name="contact[phone]" pattern="[0-9\-]*" placeholder="Phone Number" value="" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="text" id="ContactFormSubject" name="contact[subject]" placeholder="Subject" value="" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea rows={4} id="ContactFormMessage" name="contact[body]" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <input type="submit" className="btn btn-lg w-100" value="Send Message" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="productVideo-modal modal fade" id="productVideo_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="ratio ratio-16x9 productVideo-wrap">
                                <iframe src="//www.youtube.com/embed/93A2jOW5Mog?rel=0" title="YouTube video" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="stickyCart">
                <div className="container">
                    <form method="post" action="#" id="stickycart-form" className="d-flex-center justify-content-center">
                        <div className="product-featured-img"><img className="blur-up lazyload" data-src="assets/images/products/product1-120x170.jpg" src="assets/images/products/product1-120x170.jpg" alt="product" width="120" height="170" /></div>
                        <div className="sticky-title ms-2 ps-1 pe-5">Oxford Cuban Shirt</div>
                        <div className="stickyOptions position-relative">
                            <div className="selectedOpt">Red / S - <span className="money">$130.00</span></div>
                            <ul>
                                <li className="vrOpt" data-val="31677941252156" data-no="0">Red / S - $130.00</li>
                                <li className="vrOpt" data-val="31677941383228" data-no="1">Red / M - $130.00</li>
                                <li className="vrOpt" data-val="31677941514300" data-no="2">Green / L - $130.00</li>
                                <li className="vrOpt" data-val="31677941678140" data-no="3">Green / XL - $130.00</li>
                                <li className="vrOpt" data-val="31677941284924" data-no="4">Pink / S - $104.00</li>
                                <li className="vrOpt" data-val="31677941415996" data-no="5">Pink / M - $130.00</li>
                                <li className="vrOpt" data-val="31677941579836" data-no="6">Peach / L - $130.00</li>
                                <li className="vrOpt" data-val="31677941710908" data-no="7">Peach / XL - $130.00</li>
                                <li className="soldout">White / S - Sold out</li>
                                <li className="vrOpt" data-val="31677941481532" data-no="9">White / M - $130.00</li>
                                <li className="vrOpt" data-val="31677941612604" data-no="10">Blue / L - $130.00</li>
                                <li className="vrOpt" data-val="31677941776444" data-no="11">Blue / XL - $130.00</li>
                            </ul>
                        </div>
                        <select name="id" id="variantOptions1" className="product-form__variants selectbox no-js d-none ms-3">
                            <option >Red / S</option>
                            <option value="31677941383228">Red / S</option>
                            <option value="31677941514300">Red / M</option>
                            <option value="31677941678140">Green / XL</option>
                            <option value="31677941284924">Pink / S</option>
                            <option value="31677941415996">Pink / M</option>
                            <option value="31677941579836">Peach / L</option>
                            <option value="31677941710908">Peach / XL</option>
                            <option disabled>White / S - Sold out</option>
                            <option value="31677941481532">White / M</option>
                            <option value="31677941612604">Blue / L</option>
                            <option value="31677941776444">Blue / XL</option>
                        </select>

                        <div className="qtyField mx-2">
                            <a className="qtyBtn minus" href="#;"><i className="icon anm anm-minus-r"></i></a>
                            <input type="text" name="quantity" value="1" className="product-form-input qty" />
                            <a className="qtyBtn plus" href="#;"><i className="icon anm anm-plus-r"></i></a>
                        </div>
                        <button type="submit" name="add" className="btn btn-secondary product-form-cart-submit">
                            <span>Add to cart</span>
                        </button>
                    </form>
                </div>
            </div><div className="pswp" tabIndex={-1} role="dialog">
                <div className="pswp__bg"></div>
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                    </div>
                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter"></div>
                            <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <button className="pswp__button pswp__button--share" title="Share"></button>
                            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div>
                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                        <div className="pswp__caption"><div className="pswp__caption__center"></div></div>
                    </div>
                </div>

            </div>
        </>

    )

}
