import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '../components/Pagination';
import UpdateQuantityCart from '../components/UpdateQuantityCart';
import { Service } from '../Services/Services';
import { Footer } from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../redux/Reducers/Cart';
import { GetSingleProductHooks, SuggestedProductHooks, RelatedProductsHooks } from '../Hooks/Hooks';
import { Cart } from '../components/Cart';
import { Header } from '../components/Header';

export const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [selectedPage, setSelectedPage] = useState(1);
    const [perPage, setPerPage] = useState(null);

    const { singleProduct } = GetSingleProductHooks(id, selectedPage, perPage);
    var category: any = Object.values(singleProduct).length > 0 ? Object.values(singleProduct?.category).map((cat, index) => index === 1 ? cat : null).filter((val) => val !== null).at(0) : '';

    const addToCart = (e: any) => {
        e.preventDefault()
        console.log('i have added item to cart')
        dispatch(addItems({
            _id: singleProduct._id,
            name: singleProduct.name,
            description: singleProduct.description,
            category_id: '',
            category_name: Object.values(singleProduct.category)[1],
            price: singleProduct.price,
            quantity: 1,
            image_url: singleProduct.image_url

        }))

    }

    console.log('this is thecateee', category)

    let categoryObject = {
        category: category
    };
    const { suggestedProduct, suggestedTotalPages } = SuggestedProductHooks(selectedPage, id, categoryObject, singleProduct);
    const { products, totalPages } = RelatedProductsHooks(selectedPage, id, categoryObject, singleProduct);
    function GetSelectedId(e: any) {
        console.log('my selected', e)
        setSelectedPage(e)
    }

    const allUsers = useSelector((state: any) => state.Allusers.registerUsers);
    //console.log('mine all users prodddd', allUsers)

    const allAddedCart = useSelector((state: any) => state.Cart.cart);
    console.log('this has been added ', allAddedCart)
    return (

        <>
            <Header />
            <div id="page-content">

                <div className="page-header text-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">

                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="main-title fw-bold"><i className="icon anm anm-angle-right-l"></i>{singleProduct.name}</span></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="product-single">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 product-layout-img mb-4 mb-md-0">

                                <div className="product-details-img product-horizontal-style">

                                    <div className="zoompro-wrap">

                                        <div className="zoompro-span"><img id="zoompro" className="zoompro" src={singleProduct.image_url} data-zoom-image={singleProduct.image_url} alt="product" width="625" height="808" /></div>

                                        <div className="product-labels"><span className="lbl pr-label1">New</span><span className="lbl on-sale">Sale</span></div>

                                        <div className="product-buttons">
                                            <a href="#productVideo-modal" className="btn btn-primary popup-video" data-bs-toggle="modal" data-bs-target="#productVideo_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Watch Video"><i className="icon anm anm-video-r"></i></span>
                                            </a>
                                            <a href="#;" className="btn btn-primary prlightbox" data-bs-toggle="tooltip" data-bs-placement="top" title="Zoom Image"><i className="icon anm anm-expand-l-arrows"></i></a>
                                        </div>

                                    </div>

                                    <div className="product-thumb product-horizontal-thumb mt-3">
                                        <div id="gallery" className="product-thumb-horizontal">
                                            <a data-image={singleProduct.image_url} data-zoom-image={singleProduct.image_url} className="slick-slide slick-cloned active">
                                                <img className="blur-up lazyload" data-src={singleProduct.image_url} src={singleProduct.image_url} alt="product" width="625" height="808" />
                                            </a>
                                            <a data-image="assets/images/products/product1-1.jpg" data-zoom-image="assets/images/products/product1-1.jpg" className="slick-slide slick-cloned">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product1-1.jpg" src="assets/images/products/product1-1.jpg" alt="product" width="625" height="808" />
                                            </a>
                                            <a data-image="assets/images/products/product1-2.jpg" data-zoom-image="assets/images/products/product1-2.jpg" className="slick-slide slick-cloned">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product1-2.jpg" src="assets/images/products/product1-2.jpg" alt="product" width="625" height="808" />
                                            </a>
                                            <a data-image="assets/images/products/product1-3.jpg" data-zoom-image="assets/images/products/product1-3.jpg" className="slick-slide slick-cloned">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product1-3.jpg" src="assets/images/products/product1-3.jpg" alt="product" width="625" height="808" />
                                            </a>
                                            <a data-image="assets/images/products/product1-4.jpg" data-zoom-image="assets/images/products/product1-4.jpg" className="slick-slide slick-cloned">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product1-4.jpg" src="assets/images/products/product1-4.jpg" alt="product" width="625" height="808" />
                                            </a>
                                            <a data-image="assets/images/products/product1-5.jpg" data-zoom-image="assets/images/products/product1-5.jpg" className="slick-slide slick-cloned">
                                                <img className="blur-up lazyload" data-src="assets/images/products/product1-5.jpg" src="assets/images/products/product1-5.jpg" alt="product" width="625" height="808" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="lightboximages">
                                        <a href={singleProduct.image_url} data-size="1000x1280"></a>
                                        <a href="assets/images/products/product1-1.jpg" data-size="1000x1280"></a>
                                        <a href="assets/images/products/product1-2.jpg" data-size="1000x1280"></a>
                                        <a href="assets/images/products/product1-3.jpg" data-size="1000x1280"></a>
                                        <a href="assets/images/products/product1-4.jpg" data-size="1000x1280"></a>
                                        <a href="assets/images/products/product1-5.jpg" data-size="1000x1280"></a>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 product-layout-info">

                                <div className="product-single-meta">
                                    <h2 className="product-main-title">{singleProduct.name}</h2>

                                    <div className="product-review d-flex-center mb-3">
                                        <div className="reviewStar d-flex-center"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><span className="caption ms-2">24 Reviews</span></div>
                                        <a className="reviewLink d-flex-center" href="#reviews">Write a Review</a>
                                    </div>

                                    <div className="product-info">
                                        <p className="product-stock d-flex">Availability:
                                            <span className="pro-stockLbl ps-0">
                                                <span className="d-flex-center stockLbl instock text-uppercase">In stock</span>
                                            </span>
                                        </p>
                                        <p className="product-vendor">Vendor:<span className="text"><a href="#">HVL</a></span></p>
                                        <p className="product-type">Product Type:<span className="text">{category}</span></p>
                                        <p className="product-sku">SKU:<span className="text">RF104</span></p>
                                    </div>

                                    <div className="product-price d-flex-center my-3">
                                        <span className="price old-price">$135.00</span><span className="price">${singleProduct?.price?.toFixed(2)}</span>
                                    </div>

                                    <hr />

                                    <div className="sort-description">{singleProduct.description}</div>

                                    <hr />

                                    <h3 className="text-uppercase mb-0">Hurry up! Sales Ends In</h3>
                                    <div className="product-countdown d-flex-center text-center my-3" data-countdown={2028 / 12 / 12}></div>

                                </div>

                                {/* <form method="post" action="#" className="product-form product-form-border hidedropdown"> */}

                                <div className="product-swatches-option">

                                    <div className="product-item swatches-image w-100 mb-4 swatch-0 option1" data-option-index="0">
                                        <label className="label d-flex align-items-center">Color:<span className="slVariant ms-1 fw-bold">Blue</span></label>
                                        <ul className="variants-clr swatches d-flex-center pt-1 clearfix">
                                            <li className="swatch x-large available active"><img src={singleProduct.image_url} alt="image" width="80" height="80" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                                            <li className="swatch x-large available"><img src={singleProduct.image_url} alt="image" width="80" height="80" data-bs-toggle="tooltip" data-bs-placement="top" title="Black" /></li>
                                            <li className="swatch x-large available purple"><img src={singleProduct.image_url} alt="image" width="80" height="80" data-bs-toggle="tooltip" data-bs-placement="top" title="Purple" /></li>
                                            <li className="swatch x-large available green"><img src={singleProduct.image_url} alt="image" width="80" height="80" data-bs-toggle="tooltip" data-bs-placement="top" title="Green" /></li>
                                            <li className="swatch x-large soldout yellow"><img src={singleProduct.image_url} alt="image" width="80" height="80" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow" /></li>
                                        </ul>
                                    </div>

                                    <div className="product-item swatches-size w-100 mb-4 swatch-1 option2" data-option-index="1">
                                        <label className="label d-flex align-items-center">Size:<span className="slVariant ms-1 fw-bold">S</span> <a href="#sizechart-modal" className="text-link sizelink text-muted size-chart-modal" data-bs-toggle="modal" data-bs-target="#sizechart_modal">Size Guide</a></label>
                                        <ul className="variants-size size-swatches d-flex-center pt-1 clearfix">
                                            <li className="swatch x-large soldout"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</span></li>
                                            <li className="swatch x-large available active"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</span></li>
                                            <li className="swatch x-large available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</span></li>
                                            <li className="swatch x-large available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</span></li>
                                            <li className="swatch x-large available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</span></li>
                                        </ul>
                                    </div>

                                </div>



                                <div className="product-action w-100 d-flex-wrap my-3 my-md-4">

                                    {/* <div className="product-form-quantity d-flex-center">
                                        <div className="qtyField">
                                            <a className="qtyBtn minus" href="#;"><i className="icon anm anm-minus-r"></i></a>
                                            <input type="text" name="quantity" value="1" className="product-form-input qty" />
                                            <a className="qtyBtn plus" href="#;"><i className="icon anm anm-plus-r"></i></a>
                                        </div>
                                    </div> */}

                                    <div className="product-form-submit addcart fl-1 ms-3">
                                        <button name="add" className="btn btn-secondary product-form-cart-submit" onClick={addToCart}>
                                            <span>Addcc to cart</span>
                                        </button>
                                        <button type="submit" name="add" className="btn btn-secondary product-form-sold-out d-none" disabled>
                                            <span>Out of stock</span>
                                        </button>
                                        <button type="submit" name="add" className="btn btn-secondary product-form-pre-order d-none">
                                            <span>Pre-order Now</span>
                                        </button>
                                    </div>

                                    <div className="product-form-submit buyit fl-1 ms-3">
                                        <button type="submit" className="btn btn-primary proceed-to-checkout"><span>Buy it now</span></button>
                                    </div>

                                </div>

                                <p className="infolinks d-flex-center justify-content-between">
                                    <a className="text-link wishlist" href="wishlist-style1.html"><i className="icon anm anm-heart-l me-2"></i> <span>Add to Wishlist</span></a>
                                    <a className="text-link compare" href="compare-style1.html"><i className="icon anm anm-sync-ar me-2"></i> <span>Add to Compare</span></a>
                                    <a href="#shippingInfo-modal" className="text-link shippingInfo" data-bs-toggle="modal" data-bs-target="#shippingInfo_modal"><i className="icon anm anm-paper-l-plane me-2"></i> <span>Delivery &amp; Returns</span></a>
                                    <a href="#productInquiry-modal" className="text-link emaillink me-0" data-bs-toggle="modal" data-bs-target="#productInquiry_modal"><i className="icon anm anm-question-cil me-2"></i> <span>Enquiry</span></a>
                                </p>

                                {/* </form> */}

                                <div className="userViewMsg featureText" data-user="20" data-time="11000"><i className="icon anm anm-eye-r"></i><b className="uersView">21</b> People are Looking for this Product</div>
                                <div className="shippingMsg featureText"><i className="icon anm anm-clock-r"></i>Estimated Delivery Between <b id="fromDate">Wed, May 1</b> and <b id="toDate">Tue, May 7</b>.</div>
                                <div className="freeShipMsg featureText" data-price="199"><i className="icon anm anm-truck-r"></i>Spent <b className="freeShip"><span className="money" data-currency-usd="$199.00" data-currency="USD">$199.00</span></b> More for Free shipping</div>

                                <div className="social-sharing d-flex-center mt-2 lh-lg">
                                    <span className="sharing-lbl fw-600">Share :</span>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-facebook"><i className="icon anm anm-facebook-f"></i><span className="share-title">Facebook</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-twitter"><i className="icon anm anm-twitter"></i><span className="share-title">Tweet</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-pinterest"><i className="icon anm anm-pinterest-p"></i> <span className="share-title">Pin it</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-linkedin"><i className="icon anm anm-linkedin-in"></i><span className="share-title">Linkedin</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-email"><i className="icon anm anm-envelope-l"></i><span className="share-title">Email</span></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <a href="product-layout7.html" className="product-nav prev-pro clr-none d-flex-center justify-content-between" title="Previous Product">
                        <span className="details">
                            <span className="name">Oxford Cuban Shirt</span>
                            <span className="price">$99.00</span>
                        </span>
                        <span className="img"><img src={singleProduct.image_url} alt="product" width="120" height="170" /></span>
                    </a>
                    <a href="product-layout2.html" className="product-nav next-pro clr-none d-flex-center justify-content-between" title="Next Product">
                        <span className="img"><img src={singleProduct.image_url} alt="product" width="120" height="170" /></span>
                        <span className="details">
                            <span className="name">Cuff Beanie Cap</span>
                            <span className="price">$128</span>
                        </span>
                    </a>

                    <div className="tabs-listing section pb-0">
                        <ul className="product-tabs style2 list-unstyled d-flex-wrap d-flex-justify-center d-none d-md-flex">
                            <li rel="description" className="active"><a className="tablink">Description</a></li>
                            <li rel="additionalInformation"><a className="tablink">Additional Information</a></li>
                            <li rel="size-chart"><a className="tablink">Size Chart</a></li>
                            <li rel="shipping-return"><a className="tablink">Shipping &amp; Return</a></li>
                            <li rel="reviews"><a className="tablink">Reviews</a></li>
                        </ul>

                        <div className="tab-container">

                            <h3 className="tabs-ac-style d-md-none active" rel="description">Description</h3>
                            <div id="description" className="tab-content">
                                <div className="product-description">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                            <h4 className="mb-3">Features</h4>
                                            <ul className="checkmark-info">
                                                <li>High quality fabric, very comfortable to touch and wear.</li>
                                                <li>This cardigan sweater is cute for no reason,perfect for travel and casual.</li>
                                                <li>It can tie in front-is forgiving to you belly or tie behind.</li>
                                                <li>Light weight and perfect for layering.</li>
                                            </ul>
                                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <img data-src="assets/images/content/product-detail-img.jpg" src="assets/images/content/product-detail-img.jpg" alt="image" width="600" height="600" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="tabs-ac-style d-md-none" rel="additionalInformation">Additional Information</h3>
                            <div id="additionalInformation" className="tab-content">
                                <div className="product-description">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 mb-md-0">
                                            <div className="table-responsive">
                                                <table className="table table-bordered align-middle table-part mb-0">
                                                    <tr>
                                                        <th>Color</th>
                                                        <td>Black, White, Blue, Red, Gray</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Product Dimensions</th>
                                                        <td>15 x 15 x 3 cm; 250 Grams</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Date First Available</th>
                                                        <td>14 May 2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Manufacturer</th>
                                                        <td>Fashion and Retail Limited</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Department</th>
                                                        <td>Men Shirt</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="tabs-ac-style d-md-none" rel="size-chart">Size Chart</h3>
                            <div id="size-chart" className="tab-content">
                                <h4 className="mb-2">Ready to Wear Clothing</h4>
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
                                            <tr>
                                                <th>Jeans</th>
                                                <td>24-25</td>
                                                <td>26-27</td>
                                                <td>27-28</td>
                                                <td>29-30</td>
                                                <td>31-32</td>
                                                <td>32-33</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            &amp;
                            <h3 className="tabs-ac-style d-md-none" rel="shipping-return">Shipping &amp; Return</h3>
                            <div id="shipping-return" className="tab-content">
                                <h4>Shipping &amp; Return</h4>
                                <ul className="checkmark-info">
                                    <li>Dispatch: Within 24 Hours</li>
                                    <li>1 Year Brand Warranty</li>
                                    <li>Free shipping across all products on a minimum purchase of $50.</li>
                                    <li>International delivery time - 7-10 business days</li>
                                    <li>Cash on delivery might be available</li>
                                    <li>Easy 30 days returns and exchanges</li>
                                </ul>
                                <h4>Free and Easy Returns</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <h4>Special Financing</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                            </div>
                            &amp;

                            <h3 className="tabs-ac-style d-md-none" rel="reviews">Review</h3>
                            <div id="reviews" className="tab-content">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                                        <div className="ratings-main">
                                            <div className="avg-rating d-flex-center mb-3">
                                                <h4 className="avg-mark">5.0</h4>
                                                <div className="avg-content ms-3">
                                                    <p className="text-rating">Average Rating</p>
                                                    <div className="ratings-full product-review">
                                                        <a className="reviewLink d-flex-center" href="#reviews"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><span className="caption ms-2">24 Ratings</span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ratings-list">
                                                <div className="ratings-container d-flex align-items-center mt-1">
                                                    <div className="ratings-full product-review m-0">
                                                        <a className="reviewLink d-flex align-items-center" href="#reviews"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i></a>
                                                    </div>
                                                    <div className="progress"><div className="progress-bar" role="progressbar" aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} style={{ width: '99%;' }}></div></div>
                                                    <div className="progress-value">99%</div>
                                                </div>
                                                <div className="ratings-container d-flex align-items-center mt-1">
                                                    <div className="ratings-full product-review m-0">
                                                        <a className="reviewLink d-flex align-items-center" href="#reviews"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i></a>
                                                    </div>
                                                    <div className="progress"><div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%;' }}></div></div>
                                                    <div className="progress-value">75%</div>
                                                </div>
                                                <div className="ratings-container d-flex align-items-center mt-1">
                                                    <div className="ratings-full product-review m-0">
                                                        <a className="reviewLink d-flex align-items-center" href="#reviews"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i></a>
                                                    </div>
                                                    <div className="progress"><div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}></div></div>
                                                    <div className="progress-value">50%</div>
                                                </div>
                                                <div className="ratings-container d-flex align-items-center mt-1">
                                                    <div className="ratings-full product-review m-0">
                                                        <a className="reviewLink d-flex align-items-center" href="#reviews"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i></a>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{ width: '25%;' }}></div></div>
                                                    <div className="progress-value">25%</div>
                                                </div>
                                                <div className="ratings-container d-flex align-items-center mt-1">
                                                    <div className="ratings-full product-review m-0">
                                                        <a className="reviewLink d-flex align-items-center" href="#reviews"><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i></a>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} style={{ width: '5%' }}></div></div>
                                                    <div className="progress-value">05%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="spr-reviews">
                                            <h3 className="spr-form-title">Customer Reviews</h3>
                                            <div className="review-inner">
                                                <div className="spr-review d-flex w-100">
                                                    <div className="spr-review-profile flex-shrink-0">
                                                        <img className="blur-up lazyload" data-src="assets/images/users/user-img1.jpg" src="assets/images/users/user-img1.jpg" alt="" width="200" height="200" />
                                                    </div>
                                                    <div className="spr-review-content flex-grow-1">
                                                        <div className="d-flex justify-content-between flex-column mb-2">
                                                            <div className="title-review d-flex align-items-center justify-content-between">
                                                                <h5 className="spr-review-header-title text-transform-none mb-0">Eleanor Pena</h5>
                                                                <span className="product-review spr-starratings m-0"><span className="reviewLink"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i></span></span>
                                                            </div>
                                                        </div>
                                                        <b className="head-font">Good and High quality</b>
                                                        <p className="spr-review-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                                    </div>
                                                </div>
                                                <div className="spr-review d-flex w-100">
                                                    <div className="spr-review-profile flex-shrink-0">
                                                        <img className="blur-up lazyload" data-src="assets/images/users/testimonial1.jpg" src="assets/images/users/testimonial1.jpg" alt="" width="200" height="200" />
                                                    </div>
                                                    <div className="spr-review-content flex-grow-1">
                                                        <div className="d-flex justify-content-between flex-column mb-2">
                                                            <div className="title-review d-flex align-items-center justify-content-between">
                                                                <h5 className="spr-review-header-title text-transform-none mb-0">Courtney Henry</h5>
                                                                <span className="product-review spr-starratings m-0"><span className="reviewLink"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i></span></span>
                                                            </div>
                                                        </div>
                                                        <b className="head-font">Feature Availability</b>
                                                        <p className="spr-review-body">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                                        <form method="post" action="#" className="product-review-form new-review-form">
                                            <h3 className="spr-form-title">Write a Review</h3>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <fieldset className="row spr-form-contact">
                                                <div className="col-sm-6 spr-form-contact-name form-group">
                                                    <label className="spr-form-label" htmlFor="nickname">Name <span className="required">*</span></label>
                                                    <input className="spr-form-input spr-form-input-text" id="nickname" type="text" name="name" required />
                                                </div>
                                                <div className="col-sm-6 spr-form-contact-email form-group">
                                                    <label className="spr-form-label" htmlFor="email">Email <span className="required">*</span></label>
                                                    <input className="spr-form-input spr-form-input-email " id="email" type="email" name="email" required />
                                                </div>
                                                <div className="col-sm-6 spr-form-review-title form-group">
                                                    <label className="spr-form-label" htmlFor="review">Review Title </label>
                                                    <input className="spr-form-input spr-form-input-text " id="review" type="text" name="review" />
                                                </div>
                                                <div className="col-sm-6 spr-form-review-rating form-group">
                                                    <label className="spr-form-label">Rating</label>
                                                    <div className="product-review pt-1">
                                                        <div className="review-rating">
                                                            <a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 spr-form-review-body form-group">
                                                    <label className="spr-form-label" htmlFor="message">Body of Review <span className="spr-form-review-body-charactersremaining">(1500) characters remaining</span></label>
                                                    <div className="spr-form-input">
                                                        <textarea className="spr-form-input spr-form-input-textarea" id="message" name="message" rows={3}></textarea>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="spr-form-actions clearfix">
                                                <input type="submit" className="btn btn-primary spr-button spr-button-primary" value="Submit Review" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <section className="section product-slider pb-0">
                    <div className="container">
                        <div className="section-header">
                            <p className="mb-1 mt-0">Discover Similar</p>
                            <h2>Related Products</h2>
                        </div>

                        <Pagination products={products} totalPages={totalPages} selectedPage={(e) => GetSelectedId(e)} />


                        {/* <div className="product-slider-4items gp10 arwOut5 grid-products">
        <div className="item col-item">
            <div className="product-box">

                <div className="product-image">

                    <a href="product-layout1.html" className="product-img"><img className="blur-up lazyload" src={singleProduct.image_url} alt="Product" title="Product" width="625" height="808" /></a>

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

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product2.jpg" src="assets/images/products/product2.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product2-1.jpg" src="assets/images/products/product2-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product3.jpg" src="assets/images/products/product3.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product3-1.jpg" src="assets/images/products/product3-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product4.jpg" src="assets/images/products/product4.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product4-1.jpg" src="assets/images/products/product4-1.jpg" alt="Product" title="Product" width="625" height="808" />

                    </a>

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

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product5.jpg" src="assets/images/products/product5.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product5-1.jpg" src="assets/images/products/product5-1.jpg" alt="Product" title="Product" width="625" height="808" />

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
                        <a href="product-layout1.html">Hooded Neck Hoodies</a>
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

                    </div>
                </section>

                <section className="section product-slider pb-0">
                    <div className="container">
                        <div className="section-header">
                            <p className="mb-1 mt-0">Browse Bestseller</p>
                            <h2>You may also like</h2>
                        </div>



                        <Pagination products={suggestedProduct} totalPages={suggestedTotalPages} selectedPage={(e) => GetSelectedId(e)} />
                        {/* <div className="product-slider-4items gp10 arwOut5 grid-products">
        <div className="item col-item">
            <div className="product-box">

                <div className="product-image">

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product6.jpg" src="assets/images/products/product6.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product6-1.jpg" src="assets/images/products/product6-1.jpg" alt="Product" title="Product" width="625" height="808" />

                    </a>

                    <div className="product-labels"><span className="lbl on-sale">Sold out</span></div>

                    <div className="button-set style1">

                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal soldOutBtn disabled" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Out Of stock"><i className="icon anm anm-cart-l"></i><span className="text">Add to Cart</span></span>
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
                        <a href="product-layout1.html">Foldable Duffel Bag</a>
                    </div>

                    <div className="product-price">
                        <span className="price">$299.00</span>
                    </div>

                    <div className="product-review">
                        <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                        <span className="caption hidden ms-1">15 Reviews</span>
                    </div>

                </div>

            </div>
        </div>
        <div className="item col-item">
            <div className="product-box">

                <div className="product-image">

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product7.jpg" src="assets/images/products/product7.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product7-1.jpg" src="assets/images/products/product7-1.jpg" alt="Product" title="Product" width="625" height="808" />

                    </a>

                    <div className="product-labels"><span className="lbl pr-label1">Best seller</span></div>

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
                        <a href="product-layout1.html">High-Waisted Pant</a>
                    </div>

                    <div className="product-price">
                        <span className="price">$139.00</span>
                    </div>

                    <div className="product-review">
                        <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                        <span className="caption hidden ms-1">11 Reviews</span>
                    </div>

                </div>

            </div>
        </div>
        <div className="item col-item">
            <div className="product-box">

                <div className="product-image">

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product8.jpg" src="assets/images/products/product8.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product8-1.jpg" src="assets/images/products/product8-1.jpg" alt="Product" title="Product" width="625" height="808" />

                    </a>

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
                        <a href="product-layout1.html">Narror Neck Tie</a>
                    </div>

                    <div className="product-price">
                        <span className="price">$134.00</span>
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

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product9.jpg" src="assets/images/products/product9.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product9-1.jpg" src="assets/images/products/product9-1.jpg" alt="Product" title="Product" width="625" height="808" />

                    </a>

                    <div className="product-labels"><span className="lbl pr-label4">Popular</span></div>

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
                        <a href="product-layout1.html">Men's Cheater Jacket</a>
                    </div>

                    <div className="product-price">
                        <span className="price">$99.00</span>
                    </div>

                    <div className="product-review">
                        <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                        <span className="caption hidden ms-1">19 Reviews</span>
                    </div>

                </div>

            </div>
        </div>
        <div className="item col-item">
            <div className="product-box">

                <div className="product-image">

                    <a href="product-layout1.html" className="product-img">

                        <img className="primary blur-up lazyload" data-src="assets/images/products/product10.jpg" src="assets/images/products/product10.jpg" alt="Product" title="Product" width="625" height="808" />

                        <img className="hover blur-up lazyload" data-src="assets/images/products/product10-1.jpg" src="assets/images/products/product10-1.jpg" alt="Product" title="Product" width="625" height="808" />

                    </a>

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
                        <a href="product-layout1.html">Casual Mustard Shirt</a>
                    </div>

                    <div className="product-price">
                        <span className="price">$167.00</span>
                    </div>

                    <div className="product-review">
                        <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                        <span className="caption hidden ms-1">7 Reviews</span>
                    </div>

                </div>

            </div>
        </div>
    </div> */}

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
                            <option selected defaultValue="31677941252156">Red / S</option>
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
