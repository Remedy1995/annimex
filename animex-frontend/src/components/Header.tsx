import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {

    const addedWishlIst = useSelector((state: any) => state.WishList.wishlist);
    const allAddedCart = useSelector((state: any) => state.Cart.cart);
   
    const location = useNavigate();
    const RedirectForm = (url: any, event: any) => {
        event.preventDefault()
        location(url);

        //console.log('hello')
    }
    return (

        <><div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-sm-6 col-md-3 col-lg-4 text-left">
                        <i className="icon anm anm-phone-l me-2"></i>
                        <a href="tel:401234567890">(+40) 123 456 7890</a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-none d-md-block">
                        Free shipping on all orders over $99 <a href="#" className="text-link ms-1">Shop now</a>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-4 text-right d-flex align-items-center justify-content-end">
                        <div className="select-wrap language-picker float-start">
                            <ul className="default-option">
                                <li>
                                    <div className="option english">
                                        <div className="icon">
                                            <img src="./assets/images/flag/english.png" alt="english" width="24" height="24" />
                                        </div>
                                        <span>English</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="select-ul">
                                <li>
                                    <div className="option english">
                                        <div className="icon">
                                            <img src="./assets/images/flag/english.png" alt="english" width="24" height="24" />
                                        </div>
                                        <span>English</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option arabic">
                                        <div className="icon">
                                            <img src="./assets/images/flag/arabic.png" alt="arabic" width="24" height="24" />
                                        </div>
                                        <span>Arabic</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option english">
                                        <div className="icon">
                                            <img src="./assets/images/flag/french.png" alt="french" width="24" height="24" />
                                        </div>
                                        <span>French</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="select-wrap currency-picker float-start">
                            <ul className="default-option">
                                <li>
                                    <div className="option USD">
                                        <div className="icon">
                                            <img src="./assets/images/flag/usd.png" alt="usd" width="24" height="24" />
                                        </div>
                                        <span>USD</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="select-ul">
                                <li>
                                    <div className="option USD">
                                        <div className="icon">
                                            <img src="./assets/images/flag/usd.png" alt="usd" width="24" height="24" />
                                        </div>
                                        <span>USD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option EUR">
                                        <div className="icon">
                                            <img src="./assets/images/flag/eur.png" alt="eur" width="24" height="24" />
                                        </div>
                                        <span>EUR</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option GBP">
                                        <div className="icon">
                                            <img src="./assets/images/flag/gbp.png" alt="gbp" width="24" height="24" />
                                        </div>
                                        <span>GBP</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div><header className="header d-flex align-items-center header-1 header-fixed">
                <div className="container">
                    <div className="row">
                        <div className="logo col-5 col-sm-3 col-md-3 col-lg-2 align-self-center">
                            <a className="logoImg" onClick={RedirectForm.bind(this, '/')}>
                                <img src="./assets/images/logo.png" alt="Hema Multipurpose Html Template" title="Hemann Multipurpose Html Template" width="149" height="39" />
                            </a>
                        </div>

                        <div className="col-1 col-sm-1 col-md-1 col-lg-8 align-self-center d-menu-col">
                            <nav className="navigation" id="AccessibleNav">
                                <ul id="siteNav" className="site-nav medium center">
                                    <li className="lvl1 parent dropdown">
                                        <a href="#">
                                            Home <i className="icon anm anm-angle-down-l"></i>
                                        </a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="index.html" className="site-nav lvl-2">Home 01 - Fashion</a>
                                            </li>
                                            <li>
                                                <a href="index2-footwear.html" className="site-nav lvl-2">Home 02 - Footwear</a>
                                            </li>
                                            <li>
                                                <a href="index3-bags.html" className="site-nav lvl-2">Home 03 - Bags</a>
                                            </li>
                                            <li>
                                                <a href="index4-electronic.html" className="site-nav lvl-2">Home 04 - Electronic</a>
                                            </li>
                                            <li>
                                                <a href="index5-tools-parts.html" className="site-nav lvl-2">Home 05 - Tools &amp;Parts</a>
                                            </li>
                                            <li>
                                                <a href="index6-jewelry.html" className="site-nav lvl-2">Home 06 - Jewelry</a>
                                            </li>
                                            <li>
                                                <a href="index7-organic-food.html" className="site-nav lvl-2">Home 07 - Organic Food</a>
                                            </li>
                                            <li>
                                                <a href="index8-cosmetics.html" className="site-nav lvl-2">Home 08 - Cosmetics</a>
                                            </li>
                                            <li>
                                                <a href="index9-furniture.html" className="site-nav lvl-2">Home 09 - Furniture</a>
                                            </li>
                                            <li>
                                                <a href="index10-sunglasses.html" className="site-nav lvl-2">Home 10 - Sunglasses</a>
                                            </li>
                                            <li>
                                                <a href="index11-medical.html" className="site-nav lvl-2">Home 11 - Medical</a>
                                            </li>
                                            <li>
                                                <a href="index12-christmas.html" className="site-nav lvl-2">Home 12 - Christmas</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="lvl1 parent megamenu">
                                        <a href="#">
                                            Shop <i className="icon anm anm-angle-down-l"></i>
                                        </a>
                                        <div className="megamenu style1">
                                            <ul className="row grid--uniform mmWrapper">
                                                <li className="lvl-1 col-md-3 col-lg-3 w-22">
                                                    <a href="#;" className="site-nav lvl-1 menu-title">Collection Page</a>
                                                    <ul className="subLinks">
                                                        <li className="lvl-2">
                                                            <a href="collection-style1.html" className="site-nav lvl-2">Collection style1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="collection-style2.html" className="site-nav lvl-2">Collection style2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="collection-style3.html" className="site-nav lvl-2">Collection style3</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="collection-style4.html" className="site-nav lvl-2">Collection style4</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="sub-collection-style1.html" className="site-nav lvl-2">Sub Collection style1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="sub-collection-style2.html" className="site-nav lvl-2">Sub Collection style2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="collection-empty.html" className="site-nav lvl-2">Collection Empty</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-search-results.html" className="site-nav lvl-2">Shop Search Results</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-swatches-style.html" className="site-nav lvl-2">Shop Swatches style</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="lvl-1 col-md-3 col-lg-3 w-22">
                                                    <a href="#;" className="site-nav lvl-1 menu-title">Shop Page</a>
                                                    <ul className="subLinks">
                                                        <li className="lvl-2">
                                                            <a href="shop-grid-view.html" className="site-nav lvl-2">Shop Grid View</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-list-view.html" className="site-nav lvl-2">Shop List View</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-left-sidebar.html" className="site-nav lvl-2">Shop Left Sidebar</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-right-sidebar.html" className="site-nav lvl-2">Shop Right Sidebar</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-top-filter.html" className="site-nav lvl-2">Shop Top Filter</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-masonry-grid.html" className="site-nav lvl-2">Shop Masonry Grid</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-with-category.html" className="site-nav lvl-2">Shop With Category</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-grid-view.html" className="site-nav lvl-2">classNameic Pagination</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="shop-right-sidebar.html" className="site-nav lvl-2">Infinite Scrolling</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="lvl-1 col-md-3 col-lg-3 w-22">
                                                    <a href="#;" className="site-nav lvl-1 menu-title">Shop Other Page</a>
                                                    <ul className="subLinks">
                                                        <li className="lvl-2">
                                                            <a href="wishlist-style1.html" className="site-nav lvl-2">Wishlist Style1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="wishlist-style2.html" className="site-nav lvl-2">Wishlist Style2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="compare-style1.html" className="site-nav lvl-2">Compare Style1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="compare-style2.html" className="site-nav lvl-2">Compare Style2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="cart-style1.html" className="site-nav lvl-2">Cart Style1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="cart-style2.html" className="site-nav lvl-2">Cart Style2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="checkout-style1.html" className="site-nav lvl-2">Checkout Style1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="checkout-style2.html" className="site-nav lvl-2">Checkout Style2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="order-success.html" className="site-nav lvl-2">Order Success</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="lvl-1 col-md-3 col-lg-3 w-34 banner-col">
                                                    <div className="banner-wrap">
                                                        <a href="shop-left-sidebar.html">
                                                            <img className="blur-up lazyload" data-src="./assets/images/megamenu/banner-menu.jpg" src="./assets/images/megamenu/banner-menu.jpg" alt="banner" width="600" height="440" />
                                                        </a>
                                                        <div className="banner-content">
                                                            <h4>Hot deals</h4>
                                                            <h3>
                                                                Don't miss <br />Trending
                                                            </h3>
                                                            <div className="banner-save">Save to 50%</div>
                                                            <div className="banner-btn">
                                                                <a href="shop-left-sidebar.html" className="btn">Shop now</a>
                                                            </div>
                                                        </div>
                                                        <div className="banner-discount">
                                                            <h3>
                                                                <span>50%</span>
                                                                Off
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lvl1 parent megamenu">
                                        <a href="#">
                                            Product <i className="icon anm anm-angle-down-l"></i>
                                        </a>
                                        <div className="megamenu style2">
                                            <ul className="row mmWrapper">
                                                <li className="lvl-1 col-md-3 col-lg-3">
                                                    <a href="#;" className="site-nav lvl-1 menu-title">Product Page</a>
                                                    <ul className="subLinks">
                                                        <li className="lvl-2">
                                                            <a href="product-layout1.html" className="site-nav lvl-2">Product Layout1</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout2.html" className="site-nav lvl-2">Product Layout2</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout3.html" className="site-nav lvl-2">Product Layout3</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout4.html" className="site-nav lvl-2">Product Layout4</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout5.html" className="site-nav lvl-2">Product Layout5</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout6.html" className="site-nav lvl-2">Product Layout6</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout7.html" className="site-nav lvl-2">Product Layout7</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-3d-ar-models.html" className="site-nav lvl-2">Product 3D, AR models</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="lvl-1 col-md-3 col-lg-3">
                                                    <a href="#;" className="site-nav lvl-1 menu-title">Product Page Types</a>
                                                    <ul className="subLinks">
                                                        <li className="lvl-2">
                                                            <a href="product-standard.html" className="site-nav lvl-2">Standard Product</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-variable.html" className="site-nav lvl-2">Variable Product</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-grouped.html" className="site-nav lvl-2">Grouped Product</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout4.html" className="site-nav lvl-2">Product Back in stock</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout6.html" className="site-nav lvl-2">Product Accordion</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout7.html" className="site-nav lvl-2">Product Tabs Left</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="product-layout6.html" className="site-nav lvl-2">Product Bundle</a>
                                                        </li>
                                                        <li className="lvl-2">
                                                            <a href="prodcut-360-view.html" className="site-nav lvl-2">Product 360 View</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="lvl-1 col-md-3 col-lg-6 product-col">
                                                    <a href="#;" className="site-nav lvl-1 menu-title">Weekly Bestsellers</a>
                                                    <div className="grid-products weekly-product gp10 mt-1">
                                                        <div className="item">
                                                            <div className="product-wrap position-relative">

                                                                <div className="product-image mb-0">
                                                                    <a href="product-layout1.html" className="product-img">
                                                                        <img className="blur-up lazyload" data-src="./assets/images/megamenu/product1.jpg" src="./assets/images/megamenu/product1.jpg" alt="product" title="Product" width="625" height="808" />
                                                                    </a>
                                                                    <div className="product-labels">
                                                                        <span className="lbl on-sale">Sale</span>
                                                                    </div>
                                                                </div>

                                                                <div className="product-details text-center">
                                                                    <div className="product-name">
                                                                        <a className="fw-normal" href="product-layout1.html">Bodysuit Black</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span className="price old-price">$114.00</span>
                                                                        <span className="price">$99.00</span>
                                                                    </div>
                                                                    <div className="product-review">
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star-o"></i>
                                                                        <span className="caption hidden ms-1">3 Reviews</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="product-wrap position-relative">

                                                                <div className="product-image mb-0">
                                                                    <a href="product-layout1.html" className="product-img">
                                                                        <img className="blur-up lazyload" data-src="./assets/images/megamenu/product2.jpg" src="./assets/images/megamenu/product2.jpg" alt="product" title="Product" width="625" height="808" />
                                                                    </a>
                                                                </div>

                                                                <div className="product-details text-center">
                                                                    <div className="product-name">
                                                                        <a className="fw-normal" href="product-layout1.html">Drawstring Dress</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span className="price">$165.00</span>
                                                                    </div>
                                                                    <div className="product-review">
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <span className="caption hidden ms-1">13 Reviews</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="product-wrap position-relative">

                                                                <div className="product-image mb-0">
                                                                    <a href="product-layout1.html" className="product-img">
                                                                        <img className="blur-up lazyload" data-src="./assets/images/megamenu/product3.jpg" src="./assets/images/megamenu/product3.jpg" alt="product" title="Product" width="625" height="808" />
                                                                    </a>
                                                                </div>

                                                                <div className="product-details text-center">
                                                                    <div className="product-name">
                                                                        <a className="fw-normal" href="product-layout1.html">Realm Solid Backpack</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span className="price">$153.00</span>
                                                                    </div>
                                                                    <div className="product-review">
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star-o"></i>
                                                                        <i className="icon anm anm-star-o"></i>
                                                                        <span className="caption hidden ms-1">17 Reviews</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lvl1 parent dropdown">
                                        <a href="#">
                                            Pages <i className="icon anm anm-angle-down-l"></i>
                                        </a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="aboutus-style1.html" className="site-nav">
                                                    About Us <i className="icon anm anm-angle-right-l"></i>
                                                </a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="aboutus-style1.html" className="site-nav">About Us Style1</a>
                                                    </li>
                                                    <li>
                                                        <a href="aboutus-style2.html" className="site-nav">About Us Style2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact-style1.html" className="site-nav">
                                                    Contact Us <i className="icon anm anm-angle-right-l"></i>
                                                </a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="contact-style1.html" className="site-nav">Contact Us Style1</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-style2.html" className="site-nav">Contact Us Style2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="my-account.html" className="site-nav">
                                                    My Account <i className="icon anm anm-angle-right-l"></i>
                                                </a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="my-account.html" className="site-nav">My Account</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html" className="site-nav">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="register.html" className="site-nav">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="forgot-password.html" className="site-nav">Forgot Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="lookbook-grid.html" className="site-nav">
                                                    Lookbook <i className="icon anm anm-angle-right-l"></i>
                                                </a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="lookbook-grid.html" className="site-nav">Lookbook Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="lookbook-masonry.html" className="site-nav">Lookbook Masonry</a>
                                                    </li>
                                                    <li>
                                                        <a href="lookbook-shop.html" className="site-nav">Lookbook Shop</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="portfolio-page.html" className="site-nav">Portfolio Page</a>
                                            </li>
                                            <li>
                                                <a href="faqs-page.html" className="site-nav">FAQs Page</a>
                                            </li>
                                            <li>
                                                <a href="brands-page.html" className="site-nav">Brands Page</a>
                                            </li>
                                            <li>
                                                <a href="cms-page.html" className="site-nav">CMS Page</a>
                                            </li>
                                            <li>
                                                <a href="elements-icons.html" className="site-nav">Icons</a>
                                            </li>
                                            <li>
                                                <a href="error-404.html" className="site-nav">Error 404</a>
                                            </li>
                                            <li>
                                                <a href="coming-soon.html" className="site-nav">
                                                    Coming soon <span className="lbl nm_label2">New</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="lvl1 parent dropdown">
                                        <a href="#">
                                            Blog <i className="icon anm anm-angle-down-l"></i>
                                        </a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="blog-grid.html" className="site-nav">Grid View</a>
                                            </li>
                                            <li>
                                                <a href="blog-list.html" className="site-nav">List View</a>
                                            </li>
                                            <li>
                                                <a href="blog-grid-sidebar.html" className="site-nav">Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog-list-sidebar.html" className="site-nav">Right Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog-masonry.html" className="site-nav">Masonry Grid</a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html" className="site-nav">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-7 col-sm-9 col-md-9 col-lg-2 align-self-center icons-col text-right">

                            <div className="search-parent iconset">
                                <div className="site-search" title="Search">
                                    <a href="#;" className="search-icon clr-none" data-bs-toggle="offcanvas" data-bs-target="#search-drawer">
                                        <i className="hdr-icon icon anm anm-search-l"></i>
                                    </a>
                                </div>
                                <div className="search-drawer offcanvas offcanvas-top" tabIndex={-1} id="search-drawer">
                                    <div className="container">
                                        <div className="search-header d-flex-center justify-content-between mb-3">
                                            <h3 className="title m-0">What are you looking for?</h3>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="search-body">
                                            <form className="form minisearch" id="header-search" action="#" method="get">

                                                <div className="d-flex searchField">
                                                    <div className="search-category">
                                                        <select className="rgsearch-category rounded-end-0">
                                                            <option value="0">All Categories</option>
                                                            <option value="1">- All</option>
                                                            <option value="2">- Fashion</option>
                                                            <option value="3">- Shoes</option>
                                                            <option value="4">- Electronic</option>
                                                            <option value="5">- Jewelry</option>
                                                            <option value="6">- Vegetables</option>
                                                            <option value="7">- Furniture</option>
                                                            <option value="8">- Accessories</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-box d-flex fl-1">
                                                        <input type="text" className="input-text border-start-0 border-end-0" placeholder="Search for products..." value="" />
                                                        <button type="submit" className="action search d-flex-justify-center btn rounded-start-0">
                                                            <i className="icon anm anm-search-l"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="popular-searches d-flex-justify-center mt-3">
                                                    <span className="title fw-600">Trending Now:</span>
                                                    <div className="d-flex-wrap searches-items">
                                                        <a className="text-link ms-2" href="#">T-Shirt,</a>
                                                        <a className="text-link ms-2" href="#">Shoes,</a>
                                                        <a className="text-link ms-2" href="#">Bags</a>
                                                    </div>
                                                </div>

                                                <div className="search-products">
                                                    <ul className="items g-2 g-md-3 row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
                                                        <li className="item empty w-100 text-center text-muted d-none">You don't have any items in your search.</li>
                                                        <li className="item">
                                                            <div className="mini-list-item d-flex align-items-center w-100 clearfix">
                                                                <div className="mini-image text-center">
                                                                    <a className="item-link" href="product-layout1.html">
                                                                        <img className="blur-up lazyload" data-src="./assets/images/products/product1-120x170.jpg" src="./assets/images/products/product1-120x170.jpg" alt="image" title="product" width="120" height="170" />
                                                                    </a>
                                                                </div>
                                                                <div className="ms-3 details text-left">
                                                                    <div className="product-name">
                                                                        <a className="item-title" href="product-layout1.html">Oxford Cuban Shirt</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span className="old-price">$114.00</span>
                                                                        <span className="price">$99.00</span>
                                                                    </div>
                                                                    <div className="product-review d-flex align-items-center justify-content-start">
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star-o"></i>
                                                                        <i className="icon anm anm-star-o"></i>
                                                                        <span className="caption hidden ms-2">3 reviews</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item">
                                                            <div className="mini-list-item d-flex align-items-center w-100 clearfix">
                                                                <div className="mini-image text-center">
                                                                    <a className="item-link" href="product-layout1.html">
                                                                        <img className="blur-up lazyload" data-src="./assets/images/products/product2-120x170.jpg" src="./assets/images/products/product2-120x170.jpg" alt="image" title="product" width="120" height="170" />
                                                                    </a>
                                                                </div>
                                                                <div className="ms-3 details text-left">
                                                                    <div className="product-name">
                                                                        <a className="item-title" href="product-layout1.html">Cuff Beanie Cap</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span className="price">$128.00</span>
                                                                    </div>
                                                                    <div className="product-review d-flex align-items-center justify-content-start">
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <span className="caption hidden ms-2">9 reviews</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item">
                                                            <div className="mini-list-item d-flex align-items-center w-100 clearfix">
                                                                <div className="mini-image text-center">
                                                                    <a className="item-link" href="product-layout1.html">
                                                                        <img className="blur-up lazyload" data-src="./assets/images/products/product3-120x170.jpg" src="./assets/images/products/product3-120x170.jpg" alt="image" title="product" width="120" height="170" />
                                                                    </a>
                                                                </div>
                                                                <div className="ms-3 details text-left">
                                                                    <div className="product-name">
                                                                        <a className="item-title" href="product-layout1.html">Flannel Collar Shirt</a>
                                                                    </div>
                                                                    <div className="product-price">
                                                                        <span className="price">$99.00</span>
                                                                    </div>
                                                                    <div className="product-review d-flex align-items-center justify-content-start">
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star"></i>
                                                                        <i className="icon anm anm-star-o"></i>
                                                                        <span className="caption hidden ms-2">30 reviews</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="account-parent iconset">
                                <div className="account-link" title="Account">
                                    <i className="hdr-icon icon anm anm-user-al"></i>
                                </div>
                                <div id="accountBox">
                                    <div className="customer-links">
                                        <ul className="m-0">
                                            <li>
                                                <a href="login.html">
                                                    <i className="icon anm anm-sign-in-al"></i>
                                                    Sign In
                                                </a>
                                            </li>
                                            <li>
                                                <a href="register.html">
                                                    <i className="icon anm anm-user-al"></i>
                                                    Register
                                                </a>
                                            </li>
                                            <li>
                                                <a href="my-account.html">
                                                    <i className="icon anm anm-user-cil"></i>
                                                    My Account
                                                </a>
                                            </li>
                                            <li>
                                                <a href="wishlist-style1.html">
                                                    <i className="icon anm anm-heart-l"></i>
                                                    Wishlist
                                                </a>
                                            </li>
                                            <li>
                                                <a href="compare-style1.html">
                                                    <i className="icon anm anm-random-r"></i>
                                                    Compare
                                                </a>
                                            </li>
                                            <li>
                                                <a href="login.html">
                                                    <i className="icon anm anm-sign-out-al"></i>
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="wishlist-link iconset" title="Wishlist">
                                <a onClick={RedirectForm.bind(this, '/wishlist-1')}>
                                    <i className="hdr-icon icon anm anm-heart-l"></i>
                                    <span className="wishlist-count">{addedWishlIst?.length}</span>
                                </a>
                            </div>

                            <div className="header-cart iconset" title="Cart">
                                <a href="#;" className="header-cart btn-minicart clr-none" data-bs-toggle="offcanvas" data-bs-target="#minicart-drawer">
                                    <i className="hdr-icon icon anm anm-cart-l"></i>
                                    <span className="cart-count">{allAddedCart?.length}</span>
                                </a>
                            </div>

                            <button type="button" className="iconset pe-0 menu-icon js-mobile-nav-toggle mobile-nav--open d-lg-none" title="Menu">
                                <i className="hdr-icon icon anm anm-times-l"></i>
                                <i className="hdr-icon icon anm anm-bars-r"></i>
                            </button>

                        </div>

                    </div>
                </div>
            </header><div className="mobile-nav-wrapper" role="navigation">
                <div className="closemobileMenu">
                    Close Menu <i className="icon anm anm-times-l"></i>
                </div>
                <ul id="MobileNav" className="mobile-nav">
                    <li className="lvl1 parent dropdown">
                        <a href="index.html">
                            Home <i className="icon anm anm-angle-down-l"></i>
                        </a>
                        <ul className="lvl-2">
                            <li>
                                <a href="index.html" className="site-nav">Home 01 - Fashion</a>
                            </li>
                            <li>
                                <a href="index2-footwear.html" className="site-nav">Home 02 - Footwear</a>
                            </li>
                            <li>
                                <a href="index3-bags.html" className="site-nav">Home 03 - Bags</a>
                            </li>
                            <li>
                                <a href="index4-electronic.html" className="site-nav">Home 04 - Electronic</a>
                            </li>
                            <li>
                                <a href="index5-tools-parts.html" className="site-nav">Home 05 - Tools &amp;Parts</a>
                            </li>
                            <li>
                                <a href="index6-jewelry.html" className="site-nav">Home 06 - Jewelry</a>
                            </li>
                            <li>
                                <a href="index7-organic-food.html" className="site-nav">Home 07 - Organic Food</a>
                            </li>
                            <li>
                                <a href="index8-cosmetics.html" className="site-nav">Home 08 - Cosmetics</a>
                            </li>
                            <li>
                                <a href="index9-furniture.html" className="site-nav">Home 09 - Furniture</a>
                            </li>
                            <li>
                                <a href="index10-sunglasses.html" className="site-nav">Home 10 - Sunglasses</a>
                            </li>
                            <li>
                                <a href="index11-medical.html" className="site-nav">Home 11 - Medical</a>
                            </li>
                            <li>
                                <a href="index12-christmas.html" className="site-nav last">Home 12 - Christmas</a>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent megamenu">
                        <a href="#">
                            Shop <i className="icon anm anm-angle-down-l"></i>
                        </a>
                        <ul className="lvl-2">
                            <li>
                                <a href="#;" className="site-nav">
                                    Collection Page <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3">
                                    <li>
                                        <a href="collection-style1.html" className="site-nav">Collection style1</a>
                                    </li>
                                    <li>
                                        <a href="collection-style2.html" className="site-nav">Collection style2</a>
                                    </li>
                                    <li>
                                        <a href="collection-style3.html" className="site-nav">Collection style3</a>
                                    </li>
                                    <li>
                                        <a href="collection-style4.html" className="site-nav">Collection style4</a>
                                    </li>
                                    <li>
                                        <a href="sub-collection-style1.html" className="site-nav">Sub Collection style1</a>
                                    </li>
                                    <li>
                                        <a href="sub-collection-style2.html" className="site-nav">Sub Collection style2</a>
                                    </li>
                                    <li>
                                        <a href="collection-empty.html" className="site-nav">Collection Empty</a>
                                    </li>
                                    <li>
                                        <a href="shop-search-results.html" className="site-nav">Shop Search Results</a>
                                    </li>
                                    <li>
                                        <a href="shop-swatches-style.html" className="site-nav last">Shop Swatches style</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#;" className="site-nav">
                                    Shop Page <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3">
                                    <li>
                                        <a href="shop-grid-view.html" className="site-nav">Shop Grid View</a>
                                    </li>
                                    <li>
                                        <a href="shop-list-view.html" className="site-nav">Shop List View</a>
                                    </li>
                                    <li>
                                        <a href="shop-left-sidebar.html" className="site-nav">Shop Left Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html" className="site-nav">Shop Right Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="shop-top-filter.html" className="site-nav">Shop Top Filter</a>
                                    </li>
                                    <li>
                                        <a href="shop-masonry-grid.html" className="site-nav">Shop Masonry Grid</a>
                                    </li>
                                    <li>
                                        <a href="shop-with-category.html" className="site-nav">Shop With Category</a>
                                    </li>
                                    <li>
                                        <a href="shop-grid-view.html" className="site-nav">classNameic Pagination</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html" className="site-nav last">Infinite Scrolling</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#;" className="site-nav">
                                    Shop Other Page <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3">
                                    <li>
                                        <a href="wishlist-style1.html" className="site-nav">Wishlist Style1</a>
                                    </li>
                                    <li>
                                        <a href="wishlist-style2.html" className="site-nav">Wishlist Style2</a>
                                    </li>
                                    <li>
                                        <a href="compare-style1.html" className="site-nav">Compare Style1</a>
                                    </li>
                                    <li>
                                        <a href="compare-style2.html" className="site-nav">Compare Style2</a>
                                    </li>
                                    <li>
                                        <a href="cart-style1.html" className="site-nav">Cart Style1</a>
                                    </li>
                                    <li>
                                        <a href="cart-style2.html" className="site-nav">Cart Style2</a>
                                    </li>
                                    <li>
                                        <a href="checkout-style1.html" className="site-nav">Checkout Style1</a>
                                    </li>
                                    <li>
                                        <a href="checkout-style2.html" className="site-nav">Checkout Style2</a>
                                    </li>
                                    <li>
                                        <a href="order-success.html" className="site-nav last">Order Success</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent megamenu">
                        <a href="product-layout1.html">
                            Product <i className="icon anm anm-angle-down-l"></i>
                        </a>
                        <ul className="lvl-2">
                            <li>
                                <a href="product-layout1.html" className="site-nav">
                                    Product Page <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3">
                                    <li>
                                        <a href="product-layout1.html" className="site-nav">Product Layout1</a>
                                    </li>
                                    <li>
                                        <a href="product-layout2.html" className="site-nav">Product Layout2</a>
                                    </li>
                                    <li>
                                        <a href="product-layout3.html" className="site-nav">Product Layout3</a>
                                    </li>
                                    <li>
                                        <a href="product-layout4.html" className="site-nav">Product Layout4</a>
                                    </li>
                                    <li>
                                        <a href="product-layout5.html" className="site-nav">Product Layout5</a>
                                    </li>
                                    <li>
                                        <a href="product-layout6.html" className="site-nav">Product Layout6</a>
                                    </li>
                                    <li>
                                        <a href="product-layout7.html" className="site-nav">Product Layout7</a>
                                    </li>
                                    <li>
                                        <a href="product-3d-ar-models.html" className="site-nav last">Product 3D, AR models</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="product-standard.html" className="site-nav">
                                    Product Page Types <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3">
                                    <li>
                                        <a href="product-standard.html" className="site-nav">Standard Product</a>
                                    </li>
                                    <li>
                                        <a href="product-variable.html" className="site-nav">Variable Product</a>
                                    </li>
                                    <li>
                                        <a href="product-grouped.html" className="site-nav">Grouped Product</a>
                                    </li>
                                    <li>
                                        <a href="product-layout4.html" className="site-nav">Product Back in stock</a>
                                    </li>
                                    <li>
                                        <a href="product-layout6.html" className="site-nav">Product Accordion</a>
                                    </li>
                                    <li>
                                        <a href="product-layout7.html" className="site-nav">Product Tabs Left</a>
                                    </li>
                                    <li>
                                        <a href="product-layout6.html" className="site-nav">Product Bundle</a>
                                    </li>
                                    <li>
                                        <a href="prodcut-360-view.html" className="site-nav last">Product 360 View</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent dropdown">
                        <a href="#;">
                            Pages <i className="icon anm anm-angle-down-l"></i>
                        </a>
                        <ul className="lvl-2">
                            <li>
                                <a href="aboutus-style1.html" className="site-nav">
                                    About Us <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3 dropdown">
                                    <li>
                                        <a href="aboutus-style1.html" className="site-nav">About Us Style1</a>
                                    </li>
                                    <li>
                                        <a href="aboutus-style2.html" className="site-nav">About Us Style2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact-style1.html" className="site-nav">
                                    Contact Us <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3 dropdown">
                                    <li>
                                        <a href="contact-style1.html" className="site-nav">Contact Us Style1</a>
                                    </li>
                                    <li>
                                        <a href="contact-style2.html" className="site-nav">Contact Us Style2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="my-account.html" className="site-nav">
                                    My Account <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3 dropdown">
                                    <li>
                                        <a href="my-account.html" className="site-nav">My Account</a>
                                    </li>
                                    <li>
                                        <a href="login.html" className="site-nav">Login</a>
                                    </li>
                                    <li>
                                        <a href="register.html" className="site-nav">Register</a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html" className="site-nav">Forgot Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="lookbook-grid.html" className="site-nav">
                                    Lookbook <i className="icon anm anm-angle-down-l"></i>
                                </a>
                                <ul className="lvl-3 dropdown">
                                    <li>
                                        <a href="lookbook-grid.html" className="site-nav">Lookbook Grid</a>
                                    </li>
                                    <li>
                                        <a href="lookbook-masonry.html" className="site-nav">Lookbook Masonry</a>
                                    </li>
                                    <li>
                                        <a href="lookbook-shop.html" className="site-nav">Lookbook Shop</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="portfolio-page.html" className="site-nav">Portfolio Page</a>
                            </li>
                            <li>
                                <a href="faqs-page.html" className="site-nav">FAQs Page</a>
                            </li>
                            <li>
                                <a href="brands-page.html" className="site-nav">Brands Page</a>
                            </li>
                            <li>
                                <a href="cms-page.html" className="site-nav">CMS Page</a>
                            </li>
                            <li>
                                <a href="elements-icons.html" className="site-nav">Icons</a>
                            </li>
                            <li>
                                <a href="error-404.html" className="site-nav">Error 404</a>
                            </li>
                            <li>
                                <a href="coming-soon.html" className="site-nav">
                                    Coming soon <span className="lbl nm_label2">New</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent dropdown">
                        <a href="blog-grid.html">
                            Blog <i className="icon anm anm-angle-down-l"></i>
                        </a>
                        <ul className="lvl-2">
                            <li>
                                <a href="blog-grid.html" className="site-nav">Grid View</a>
                            </li>
                            <li>
                                <a href="blog-list.html" className="site-nav">List View</a>
                            </li>
                            <li>
                                <a href="blog-grid-sidebar.html" className="site-nav">Left Sidebar</a>
                            </li>
                            <li>
                                <a href="blog-list-sidebar.html" className="site-nav">Right Sidebar</a>
                            </li>
                            <li>
                                <a href="blog-masonry.html" className="site-nav">Masonry Grid</a>
                            </li>
                            <li>
                                <a href="blog-details.html" className="site-nav">Blog Details</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobile-menu-bottom">
                        <div className="mobile-links">
                            <ul className="list-inline d-inline-flex flex-column w-100">
                                <li>
                                    <a href="login.html" className="d-flex align-items-center">
                                        <i className="icon anm anm-sign-in-al"></i>
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="register.html" className="d-flex align-items-center">
                                        <i className="icon anm anm-user-al"></i>
                                        Register
                                    </a>
                                </li>
                                <li>
                                    <a href="my-account.html" className="d-flex align-items-center">
                                        <i className="icon anm anm-user-cil"></i>
                                        My Account
                                    </a>
                                </li>
                                <li className="title h5">Need Help?</li>
                                <li>
                                    <a href="tel:401234567890" className="d-flex align-items-center">
                                        <i className="icon anm anm-phone-l"></i>
                                        (+40) 123 456 7890
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@example.com" className="d-flex align-items-center">
                                        <i className="icon anm anm-envelope-l"></i>
                                        info@example.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-follow mt-2">
                            <h5 className="title">Follow Us</h5>
                            <ul className="list-inline social-icons d-inline-flex mt-1">
                                <li className="list-inline-item">
                                    <a href="#" title="Facebook">
                                        <i className="icon anm anm-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" title="Twitter">
                                        <i className="icon anm anm-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" title="Pinterest">
                                        <i className="icon anm anm-pinterest-p"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" title="Linkedin">
                                        <i className="icon anm anm-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" title="Instagram">
                                        <i className="icon anm anm-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" title="Youtube">
                                        <i className="icon anm anm-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div></>
    )
}