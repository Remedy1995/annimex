
import React from "react";

interface Props {
    homeName: String
}

const Home = ({ homeName }: Props) => {
    return (
        <div className="page-wrapper">
        <div className="topbar-slider clearfix">
            <div className="container-fluid">
                <div className="marquee-text">
                    <div className="top-info-bar d-flex">
                        <div className="flex-item center">
                            <a href="#">
                                <span>
                                    <i className="anm anm-worldwide"></i>
                                    BUY ONLINE PICK UP IN STORE
                                </span>
                                <span>
                                    <i className="anm anm-truck-l"></i>
                                    FREE WORLDWIDE SHIPPING ON ALL ORDERS ABOVE $100
                                </span>
                                <span>
                                    <i className="anm anm-redo-ar"></i>
                                    EXTENDED RETURN UNTIL 30 DAYS
                                </span>
                            </a>
                        </div>
                        <div className="flex-item center">
                            <a href="#">
                                <span>
                                    <i className="anm anm-worldwide"></i>
                                    BUY ONLINE PICK UP IN STORE
                                </span>
                                <span>
                                    <i className="anm anm-truck-l"></i>
                                    FREE WORLDWIDE SHIPPING ON ALL ORDERS ABOVE $100
                                </span>
                                <span>
                                    <i className="anm anm-redo-ar"></i>
                                    EXTENDED RETURN UNTIL 30 DAYS
                                </span>
                            </a>
                        </div>
                        <div className="flex-item center">
                            <a href="#">
                                <span>
                                    <i className="anm anm-worldwide"></i>
                                    BUY ONLINE PICK UP IN STORE
                                </span>
                                <span>
                                    <i className="anm anm-truck-l"></i>
                                    FREE WORLDWIDE SHIPPING ON ALL ORDERS ABOVE $100
                                </span>
                                <span>
                                    <i className="anm anm-redo-ar"></i>
                                    EXTENDED RETURN UNTIL 30 DAYS
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="top-header">
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
                                            <img src="./assets/images/flag/english.png" alt="english" width="24" height="24"/>
                                        </div>
                                        <span>English</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="select-ul">
                                <li>
                                    <div className="option english">
                                        <div className="icon">
                                            <img src="./assets/images/flag/english.png" alt="english" width="24" height="24"/>
                                        </div>
                                        <span>English</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option arabic">
                                        <div className="icon">
                                            <img src="./assets/images/flag/arabic.png" alt="arabic" width="24" height="24"/>
                                        </div>
                                        <span>Arabic</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option english">
                                        <div className="icon">
                                            <img src="./assets/images/flag/french.png" alt="french" width="24" height="24"/>
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
                                            <img src="./assets/images/flag/usd.png" alt="usd" width="24" height="24"/>
                                        </div>
                                        <span>USD</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="select-ul">
                                <li>
                                    <div className="option USD">
                                        <div className="icon">
                                            <img src="./assets/images/flag/usd.png" alt="usd" width="24" height="24"/>
                                        </div>
                                        <span>USD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option EUR">
                                        <div className="icon">
                                            <img src="./assets/images/flag/eur.png" alt="eur" width="24" height="24"/>
                                        </div>
                                        <span>EUR</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="option GBP">
                                        <div className="icon">
                                            <img src="./assets/images/flag/gbp.png" alt="gbp" width="24" height="24"/>
                                        </div>
                                        <span>GBP</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <header className="header d-flex align-items-center header-1 header-fixed">
            <div className="container">
                <div className="row">
                    <div className="logo col-5 col-sm-3 col-md-3 col-lg-2 align-self-center">
                        <a className="logoImg" href="index.html">
                            <img src="./assets/images/logo.png" alt="Hema Multipurpose Html Template" title="Hema Multipurpose Html Template" width="149" height="39"/>
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
                                                        <img className="blur-up lazyload" data-src="./assets/images/megamenu/banner-menu.jpg" src="./assets/images/megamenu/banner-menu.jpg" alt="banner" width="600" height="440"/>
                                                    </a>
                                                    <div className="banner-content">
                                                        <h4>Hot deals</h4>
                                                        <h3>
                                                            Don't miss <br/>Trending
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
                                                                    <img className="blur-up lazyload" data-src="./assets/images/megamenu/product1.jpg" src="./assets/images/megamenu/product1.jpg" alt="product" title="Product" width="625" height="808"/>
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
                                                                    <img className="blur-up lazyload" data-src="./assets/images/megamenu/product2.jpg" src="./assets/images/megamenu/product2.jpg" alt="product" title="Product" width="625" height="808"/>
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
                                                                    <img className="blur-up lazyload" data-src="./assets/images/megamenu/product3.jpg" src="./assets/images/megamenu/product3.jpg" alt="product" title="Product" width="625" height="808"/>
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
                                                    <input type="text" className="input-text border-start-0 border-end-0" placeholder="Search for products..." value=""/>
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
                                                                    <img className="blur-up lazyload" data-src="./assets/images/products/product1-120x170.jpg" src="./assets/images/products/product1-120x170.jpg" alt="image" title="product" width="120" height="170"/>
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
                                                                    <img className="blur-up lazyload" data-src="./assets/images/products/product2-120x170.jpg" src="./assets/images/products/product2-120x170.jpg" alt="image" title="product" width="120" height="170"/>
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
                                                                    <img className="blur-up lazyload" data-src="./assets/images/products/product3-120x170.jpg" src="./assets/images/products/product3-120x170.jpg" alt="image" title="product" width="120" height="170"/>
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
                            <a href="wishlist-style1.html">
                                <i className="hdr-icon icon anm anm-heart-l"></i>
                                <span className="wishlist-count">0</span>
                            </a>
                        </div>
                      
                        <div className="header-cart iconset" title="Cart">
                            <a href="#;" className="header-cart btn-minicart clr-none" data-bs-toggle="offcanvas" data-bs-target="#minicart-drawer">
                                <i className="hdr-icon icon anm anm-cart-l"></i>
                                <span className="cart-count">2</span>
                            </a>
                        </div>
                     
                        <button type="button" className="iconset pe-0 menu-icon js-mobile-nav-toggle mobile-nav--open d-lg-none" title="Menu">
                            <i className="hdr-icon icon anm anm-times-l"></i>
                            <i className="hdr-icon icon anm anm-bars-r"></i>
                        </button>
                       
                    </div>
                  
                </div>
            </div>
        </header>
    
        <div className="mobile-nav-wrapper" role="navigation">
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
        </div>
       
        <div id="page-content" className="mb-0">
   
        <section className="slideshow slideshow-wrapper">
                    <div className="home-slideshow slick-arrow-dots">
                        <div className="slide">
                            <div className="slideshow-wrap">
                                <picture>
                                    <source media="(max-width:767px)" srcSet="assets/images/slideshow/demo1-banner1-mbl.jpg" width="1150" height="800"/>
                                    <img className="blur-up lazyload" src="assets/images/slideshow/demo1-banner1.jpg" alt="slideshow" title="" width="1920" height="795"/>
                                </picture>
                                <div className="container">
                                    <div className="slideshow-content slideshow-overlay middle-left">
                                        <div className="slideshow-content-in">
                                            <div className="wrap-caption animation style1">
                                                <p className="ss-small-title">Elegant design</p>
                                                <h2 className="ss-mega-title">
                                                    Making someone feel <br/>pretty is an art
                                                </h2>
                                                <p className="ss-sub-title xs-hide">Perfectly designed to ensures ultimate comfort and style</p>
                                                <div className="ss-btnWrap">
                                                    <a className="btn btn-primary" href="shop-grid-view.html">Shop Women</a>
                                                    <a className="btn btn-secondary" href="shop-grid-view.html">Shop Men</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slideshow-wrap">
                                <picture>
                                    <source media="(max-width:767px)" srcSet="assets/images/slideshow/demo1-banner2-mbl.jpg" width="1150" height="800"/>
                                    <img className="blur-up lazyload" src="assets/images/slideshow/demo1-banner2.jpg" alt="slideshow" title="" width="1920" height="795"/>
                                </picture>
                                <div className="container">
                                    <div className="slideshow-content slideshow-overlay middle-right">
                                        <div className="slideshow-content-in">
                                            <div className="wrap-caption animation style1">
                                                <h2 className="ss-mega-title">
                                                    Spread Positive <br/>Energy With Hema
                                                </h2>
                                                <p className="ss-sub-title xs-hide">The must-have closet essential women wardrobe for the year</p>
                                                <div className="ss-btnWrap d-flex-justify-start">
                                                    <a className="btn btn-primary" href="shop-grid-view.html">Explore Now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slideshow-wrap">
                                <picture>
                                    <source media="(max-width:767px)" srcSet="assets/images/slideshow/demo1-banner3-mbl.jpg" width="1150" height="800"/>
                                    <img className="blur-up lazyload" src="assets/images/slideshow/demo1-banner3.jpg" alt="slideshow" title="" width="1920" height="795"/>
                                </picture>
                                <div className="container">
                                    <div className="slideshow-content slideshow-overlay middle-right">
                                        <div className="slideshow-content-in">
                                            <div className="wrap-caption animation style1">
                                                <h2 className="ss-mega-title">
                                                    Design Your Next <br/>Favourite Wear
                                                </h2>
                                                <p className="ss-sub-title xs-hide">The outfit that blend elegance and style for your casual wear</p>
                                                <div className="ss-btnWrap">
                                                    <a className="btn btn-primary" href="shop-grid-view.html">Shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
            <section className="section service-section pb-0">
                <div className="container">
                    <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">
                        <div className="service-wrap col-item">
                            <div className="service-icon mb-3">
                                <i className="icon anm anm-phone-call-l"></i>
                            </div>
                            <div className="service-content">
                                <h3 className="title mb-2">Call us any time</h3>
                                <span className="text-muted">Contact us 24/7 hours a day</span>
                            </div>
                        </div>
                        <div className="service-wrap col-item">
                            <div className="service-icon mb-3">
                                <i className="icon anm anm-truck-l"></i>
                            </div>
                            <div className="service-content">
                                <h3 className="title mb-2">Pickup At Any Store</h3>
                                <span className="text-muted">Free shipping on orders over $65</span>
                            </div>
                        </div>
                        <div className="service-wrap col-item">
                            <div className="service-icon mb-3">
                                <i className="icon anm anm-credit-card-l"></i>
                            </div>
                            <div className="service-content">
                                <h3 className="title mb-2">Secured Payment</h3>
                                <span className="text-muted">We accept all major credit cards</span>
                            </div>
                        </div>
                        <div className="service-wrap col-item">
                            <div className="service-icon mb-3">
                                <i className="icon anm anm-redo-l"></i>
                            </div>
                            <div className="service-content">
                                <h3 className="title mb-2">Free Returns</h3>
                                <span className="text-muted">30-days free return policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className="section collection-banners pb-0">
                <div className="container">
                    <div className="collection-banner-grid">
                        <div className="row sp-row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 collection-banner-item">
                                <div className="collection-item sp-col">
                                    <a href="shop-left-sidebar.html" className="zoom-scal">
                                        <div className="img">
                                            <img className="blur-up lazyload" data-src="./assets/images/collection/demo1-ct-img1.jpg" src="./assets/images/collection/demo1-ct-img1.jpg" alt="Women Wear" title="Women Wear" width="645" height="723"/>
                                        </div>
                                        <div className="details middle-right">
                                            <div className="inner">
                                                <p className="mb-2">Trending Now</p>
                                                <h3 className="title">Women Wear</h3>
                                                <span className="btn btn-outline-secondary btn-md">Shop Now</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 collection-banner-item">
                                <div className="collection-item sp-col">
                                    <a href="shop-left-sidebar.html" className="zoom-scal">
                                        <div className="img">
                                            <img className="blur-up lazyload" data-src="./assets/images/collection/demo1-ct-img2.jpg" src="./assets/images/collection/demo1-ct-img2.jpg" alt="Mens Wear" title="Mens Wear" width="645" height="344"/>
                                        </div>
                                        <div className="details middle-left">
                                            <div className="inner">
                                                <h3 className="title mb-2">Mens Wear</h3>
                                                <p className="mb-3">Tailor-made with passion</p>
                                                <span className="btn btn-outline-secondary btn-md">Shop Now</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="collection-item sp-col">
                                    <a href="shop-left-sidebar.html" className="zoom-scal">
                                        <div className="img">
                                            <img className="blur-up lazyload" data-src="./assets/images/collection/demo1-ct-img3.jpg" src="./assets/images/collection/demo1-ct-img3.jpg" alt="Kids Wear" title="Kids Wear" width="645" height="349"/>
                                        </div>
                                        <div className="details middle-right">
                                            <div className="inner">
                                                <p className="mb-2">Buy one get one free</p>
                                                <h3 className="title">Kids Wear</h3>
                                                <span className="btn btn-outline-secondary btn-md">Shop Now</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className="section collection-slider pb-0">
                <div className="container">
                    <div className="section-header">
                        <p className="mb-2 mt-0">Shop by category</p>
                        <h2>Popular Collections</h2>
                    </div>
                    <div className="collection-slider-5items gp15 arwOut5 hov-arrow">
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection1.jpg" src="./assets/images/collection/sub-collection1.jpg" alt="Men's Jakets" title="Men's Jakets" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">Men's Jakets</h4>
                                    <p className="counts">20 Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection3.jpg" src="./assets/images/collection/sub-collection3.jpg" alt="Tops" title="Tops" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">Tops</h4>
                                    <p className="counts">13 Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection5.jpg" src="./assets/images/collection/sub-collection5.jpg" alt="T-Shirts" title="T-Shirts" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">T-Shirts</h4>
                                    <p className="counts">18 Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection6.jpg" src="./assets/images/collection/sub-collection6.jpg" alt="Shoes" title="Shoes" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">Shoes</h4>
                                    <p className="counts">11 Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection9.jpg" src="./assets/images/collection/sub-collection9.jpg" alt="Shorts" title="Shorts" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">Shorts</h4>
                                    <p className="counts">28 Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection2.jpg" src="./assets/images/collection/sub-collection2.jpg" alt="Sunglasses" title="Sunglasses" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">Sunglasses</h4>
                                    <p className="counts">24 Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="category-item zoomscal-hov">
                            <a href="shop-left-sidebar.html" className="category-link clr-none">
                                <div className="zoom-scal zoom-scal-nopb rounded-3">
                                    <img className="blur-up lazyload" data-src="./assets/images/collection/sub-collection4.jpg" src="./assets/images/collection/sub-collection4.jpg" alt="Girls Top" title="Girls Top" width="365" height="365"/>
                                </div>
                                <div className="details mt-3 text-center">
                                    <h4 className="category-title mb-0">Girls Top</h4>
                                    <p className="counts">26 Products</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
            <section className="section product-slider tab-slider-product">
                <div className="container">
                    <div className="section-header d-none">
                        <h2>Special Offers</h2>
                        <p>Browse the huge variety of our best seller</p>
                    </div>
                    <div className="tabs-listing">
                        <ul className="nav nav-tabs style1 justify-content-center" id="productTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link head-font active" id="bestsellers-tab" data-bs-toggle="tab" data-bs-target="#bestsellers" type="button" role="tab" aria-controls="bestsellers" aria-selected="true">Bestseller</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link head-font" id="newarrivals-tab" data-bs-toggle="tab" data-bs-target="#newarrivals" type="button" role="tab" aria-controls="newarrivals" aria-selected="false">New Arrivals</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link head-font" id="toprated-tab" data-bs-toggle="tab" data-bs-target="#toprated" type="button" role="tab" aria-controls="toprated" aria-selected="false">Top Rated</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="productTabsContent">
                            <div className="tab-pane show active" id="bestsellers" role="tabpanel" aria-labelledby="bestsellers-tab">
                              
                                <div className="grid-products grid-view-items">
                                    <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                                        <div className="item col-item">
                                            <div className="product-box">
                                            
                                                <div className="product-image">
                                                
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                        <img className="blur-up lazyload" src="./assets/images/products/product1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                    </a>
                                                   
                                                    <div className="product-labels">
                                                        <span className="lbl on-sale">Sale</span>
                                                    </div>
                                                
                                                    <div className="saleTime" data-countdown="2025/01/01"></div>
                                             
                                                    <div className="button-set style1">
                                                     0

                                                        <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick Shop">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Quick Shop</span>
                                                            </span>
                                                        </a>
                                                    
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Oxford Cuban Shirt</a>
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
                                                 
                                              
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Navy">
                                                                <img src="./assets/images/products/product1.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green">
                                                                <img src="./assets/images/products/product1-1.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray">
                                                                <img src="./assets/images/products/product1-2.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Orange">
                                                                <img src="./assets/images/products/product1-3.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="blur-up lazyload" data-src="./assets/images/products/product2.jpg" src="./assets/images/products/product2.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                    
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Select Options">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Select Options</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Cuff Beanie Cap</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$128.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <span className="caption hidden ms-1">8 Reviews</span>
                                                    </div>
                                                 
                                             
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Navy">
                                                                <img src="./assets/images/products/product2.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green">
                                                                <img src="./assets/images/products/product2-1.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray">
                                                                <img src="./assets/images/products/product2-2.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Orange">
                                                                <img src="./assets/images/products/product2-3.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow">
                                                                <img src="./assets/images/products/product2-4.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                        <li className="swatch medium radius">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue">
                                                                <img src="./assets/images/products/product2-5.jpg" alt="product" width="625" height="808"/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product3.jpg" src="./assets/images/products/product3.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product3-1.jpg" src="./assets/images/products/product3-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label3">New</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                   
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                  
                                                    </div>
                                               
                                                </div>
                                               
                                                <div className="product-details">
                                                   
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Flannel Collar Shirt</a>
                                                    </div>
                                              
                                                    <div className="product-price">
                                                        <span className="price">$99.00</span>
                                                    </div>
                                                    
                                                  
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">10 Reviews</span>
                                                    </div>
                                          
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius red">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="red"></span>
                                                        </li>
                                                        <li className="swatch medium radius orange">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="orange"></span>
                                                        </li>
                                                        <li className="swatch medium radius yellow">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="yellow"></span>
                                                        </li>
                                                    </ul>
                                                   
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                            
                                                <div className="product-image">
                                                   
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product4.jpg" src="./assets/images/products/product4.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                  
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product4-1.jpg" src="./assets/images/products/product4-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl on-sale">50% Off</span>
                                                    </div>
                                              
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                       
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                  
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                       
                                                    </div>
                                                  
                                                    <div className="product-availability rounded-5">
                                                        <div className="lh-1 d-flex justify-content-between">
                                                            <div className="text-sold">
                                                                Sold:<strong className="text-primary ms-1">34</strong>
                                                            </div>
                                                            <div className="text-available">
                                                                Available:<strong className="text-primary ms-1">16</strong>
                                                            </div>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                             
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Cotton Hooded Hoodie</a>
                                                    </div>
                                                
                                                    <div className="product-price">
                                                        <span className="price old-price">$198.00</span>
                                                        <span className="price">$99.00</span>
                                                    </div>
                                                  
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">0 Reviews</span>
                                                    </div>
                                                 
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="black"/>
                                                        </li>
                                                        <li className="swatch medium radius navy">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="navy"/>
                                                        </li>
                                                        <li className="swatch medium radius darkgreen">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="darkgreen"/>
                                                        </li>
                                                    </ul>
                                        
                                                </div>
                                              
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                            
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product5.jpg" src="./assets/images/products/product5.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product5-1.jpg" src="./assets/images/products/product5-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label2">Hot</span>
                                                    </div>
                                                    
                                                    <div className="button-set style1">
                                                    
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                       
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                       
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                      
                                                    </div>
                                                  
                                                </div>
                                           
                                                <div className="product-details">
                                                 
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Hooded Neck Hoodies</a>
                                                    </div>
                                                  
                                                    <div className="product-price">
                                                        <span className="price">$39.00</span>
                                                    </div>
                                                  
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">3 Reviews</span>
                                                    </div>
                                                 
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span>
                                                        </li>
                                                        <li className="swatch medium radius maroon">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon"></span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                        
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                           
                                                <div className="product-image">
                                                 
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                      
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product6.jpg" src="./assets/images/products/product6.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                       
                                                  
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product6-1.jpg" src="./assets/images/products/product6-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                          
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl on-sale">Sold out</span>
                                                    </div>
                                             
                                                    <div className="button-set style1">
                                                   
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                       
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                      
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                     
                                               
                                                </div>
                                            
                                                <div className="product-details">
                                                 
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Foldable Duffel Bag</a>
                                                    </div>
                                                  
                                                    <div className="product-price">
                                                        <span className="price">$299.00</span>
                                                    </div>
                                                
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">15 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius gray">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="gray"></span>
                                                        </li>
                                                        <li className="swatch medium radius red">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="red"></span>
                                                        </li>
                                                        <li className="swatch medium radius orange">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="orange"></span>
                                                        </li>
                                                        <li className="swatch medium radius yellow">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="yellow"></span>
                                                        </li>
                                                    </ul>
                                                 
                                                </div>
                                             
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                   
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product7.jpg" src="./assets/images/products/product7.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product7-1.jpg" src="./assets/images/products/product7-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label1">Best seller</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                   
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">High-Waisted Pant</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$139.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">11 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="black"/>
                                                        </li>
                                                        <li className="swatch medium radius maroon">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon"/>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product8.jpg" src="./assets/images/products/product8.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product8-1.jpg" src="./assets/images/products/product8-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Narror Neck Tie</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$134.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">0 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span>
                                                        </li>
                                                        <li className="swatch medium radius navy">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="navy"></span>
                                                        </li>
                                                        <li className="swatch medium radius darkgreen">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="darkgreen"></span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-collection text-center mt-4 mt-md-5">
                                        <a href="shop-left-sidebar.html" className="btn btn-secondary btn-lg">View Collection</a>
                                    </div>
                                </div>
                           
                            </div>
                            <div className="tab-pane" id="newarrivals" role="tabpanel" aria-labelledby="newarrivals-tab">
                         
                                <div className="grid-products grid-view-items">
                                    <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product8.jpg" src="./assets/images/products/product8.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product8-1.jpg" src="./assets/images/products/product8-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Narror Neck Tie</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$134.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">0 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span>
                                                        </li>
                                                        <li className="swatch medium radius navy">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="navy"></span>
                                                        </li>
                                                        <li className="swatch medium radius darkgreen">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="darkgreen"></span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product9.jpg" src="./assets/images/products/product9.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product9-1.jpg" src="./assets/images/products/product9-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label4">Popular</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Men's Cheater Jacket</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$99.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">19 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product10.jpg" src="./assets/images/products/product10.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product10-1.jpg" src="./assets/images/products/product10-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Casual Mustard Shirt</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$167.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <span className="caption hidden ms-1">7 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product11.jpg" src="./assets/images/products/product11.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product11-1.jpg" src="./assets/images/products/product11-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Sleeve Round T-Shirt</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$154.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">19 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product12.jpg" src="./assets/images/products/product12.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product12-1.jpg" src="./assets/images/products/product12-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Backpack Laptop Bag</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$121.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">6 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product13.jpg" src="./assets/images/products/product13.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product13-1.jpg" src="./assets/images/products/product13-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Cotton Casual Tshirt</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$167.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">13 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product14.jpg" src="./assets/images/products/product14.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product14-1.jpg" src="./assets/images/products/product14-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Ankle Casual Pants</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$125.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">20 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product15.jpg" src="./assets/images/products/product15.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product15-1.jpg" src="./assets/images/products/product15-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Straight Fit Trousers</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$122.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">11 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-collection text-center mt-4 mt-md-5">
                                        <a href="shop-left-sidebar.html" className="btn btn-secondary btn-lg">View Collection</a>
                                    </div>
                                </div>
                           
                            </div>
                            <div className="tab-pane" id="toprated" role="tabpanel" aria-labelledby="toprated-tab">
                         
                                <div className="grid-products grid-view-items">
                                    <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product5.jpg" src="./assets/images/products/product5.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product5-1.jpg" src="./assets/images/products/product5-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label2">Hot</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Hooded Neck Hoodies</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$39.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">3 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span>
                                                        </li>
                                                        <li className="swatch medium radius maroon">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon"></span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product6.jpg" src="./assets/images/products/product6.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product6-1.jpg" src="./assets/images/products/product6-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl on-sale">Sold out</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Foldable Duffel Bag</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$299.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">15 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius gray">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="gray"></span>
                                                        </li>
                                                        <li className="swatch medium radius red">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="red"></span>
                                                        </li>
                                                        <li className="swatch medium radius orange">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="orange"></span>
                                                        </li>
                                                        <li className="swatch medium radius yellow">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="yellow"></span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product7.jpg" src="./assets/images/products/product7.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                       
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product7-1.jpg" src="./assets/images/products/product7-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                             
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label1">Best seller</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">High-Waisted Pant</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$139.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">11 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="black"/>
                                                        </li>
                                                        <li className="swatch medium radius maroon">
                                                            <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon"/>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product8.jpg" src="./assets/images/products/product8.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product8-1.jpg" src="./assets/images/products/product8-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Narror Neck Tie</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$134.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">0 Reviews</span>
                                                    </div>
                                                  
                                                    <ul className="variants-clr swatches">
                                                        <li className="swatch medium radius black">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span>
                                                        </li>
                                                        <li className="swatch medium radius navy">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="navy"></span>
                                                        </li>
                                                        <li className="swatch medium radius darkgreen">
                                                            <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="darkgreen"></span>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product9.jpg" src="./assets/images/products/product9.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product9-1.jpg" src="./assets/images/products/product9-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                  
                                                    <div className="product-labels">
                                                        <span className="lbl pr-label4">Popular</span>
                                                    </div>
                                                  
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Men's Cheater Jacket</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$99.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">19 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product10.jpg" src="./assets/images/products/product10.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product10-1.jpg" src="./assets/images/products/product10-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Casual Mustard Shirt</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$167.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <span className="caption hidden ms-1">7 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product11.jpg" src="./assets/images/products/product11.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product11-1.jpg" src="./assets/images/products/product11-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Sleeve Round T-Shirt</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$154.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">19 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                        <div className="item col-item">
                                            <div className="product-box">
                                              
                                                <div className="product-image">
                                                  
                                                    <a href="product-layout1.html" className="product-img rounded-3">
                                                
                                                        <img className="primary blur-up lazyload" data-src="./assets/images/products/product12.jpg" src="./assets/images/products/product12.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                      
                                                        <img className="hover blur-up lazyload" data-src="./assets/images/products/product12-1.jpg" src="./assets/images/products/product12-1.jpg" alt="Product" title="Product" width="625" height="808"/>
                                                 
                                                    </a>
                                                   
                                                    <div className="button-set style1">
                                                      
                                                        <a href="#addtocart-modal" className="btn-icon addtocart add-to-cart-modal" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart">
                                                                <i className="icon anm anm-cart-l"></i>
                                                                <span className="text">Add to Cart</span>
                                                            </span>
                                                        </a>
                                                  
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                                                <i className="icon anm anm-search-plus-l"></i>
                                                                <span className="text">Quick View</span>
                                                            </span>
                                                        </a>
                                                     
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist">
                                                            <i className="icon anm anm-heart-l"></i>
                                                            <span className="text">Add To Wishlist</span>
                                                        </a>
                                                     
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                                                            <i className="icon anm anm-random-r"></i>
                                                            <span className="text">Add to Compare</span>
                                                        </a>
                                                    
                                                    </div>
                                               
                                                </div>
                                         
                                                <div className="product-details">
                                                  
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">Backpack Laptop Bag</a>
                                                    </div>
                                               
                                                    <div className="product-price">
                                                        <span className="price">$121.00</span>
                                                    </div>
                                               
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption hidden ms-1">6 Reviews</span>
                                                    </div>
                                                 
                                                </div>
                                         
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-collection text-center mt-4 mt-md-5">
                                        <a href="shop-left-sidebar.html" className="btn btn-secondary btn-lg">View Collection</a>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
           
           
            </div>
            
            </section>
       
            <div className="section parallax-banner-style1 py-0">
                <div className="hero hero-large hero-overlay bg-size">
                    <img className="bg-img" src="./assets/images/parallax/demo1-sale-banner.jpg" alt="Clearance Sale - Flat 50% Off" width="1920" height="645"/>
                    <div className="hero-inner d-flex-justify-center">
                        <div className="container">
                            <div className="wrap-text center text-white">
                                <h1 className="hero-title text-white">Clearance Sale - Flat 50% Off</h1>
                                <p className="hero-subtitle h3 text-white">Sale will end soon in</p>
                              
                                <div className="hero-saleTime d-flex-center text-center justify-content-center" data-countdown="2028/10/01"></div>
                             
                                <p className="hero-details">Hema Multipurpose Template that will give you and your customers a smooth shopping experience which can be used for various kinds of stores such as fashion.</p>
                                <a href="shop-left-sidebar.html" className="hero-btn btn btn-light">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <section className="section testimonial-slider style1">
                <div className="container">
                    <div className="section-header">
                        <p className="mb-2 mt-0">Happy Customer</p>
                        <h2>Loved By Our Customers</h2>
                    </div>
                    <div className="testimonial-wraper">
                     
                        <div className="testimonial-slider-3items gp15 slick-arrow-dots arwOut5">
                            <div className="testimonial-slide">
                                <div className="testimonial-content text-center">
                                    <div className="quote-icon mb-3 mb-lg-4">
                                        <img className="blur-up lazyload mx-auto" data-src="./assets/images/icons/demo1-quote-icon.png" src="./assets/images/icons/demo1-quote-icon.png" alt="icon" width="40" height="40"/>
                                    </div>
                                    <div className="content">
                                        <div className="text mb-2">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 1500s.</p>
                                        </div>
                                        <div className="product-review my-3">
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">24 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="auhimg d-flex-justify-center text-left">
                                        <div className="image">
                                            <img className="rounded-circle blur-up lazyload" data-src="./assets/images/users/testimonial1-65x.jpg" src="./assets/images/users/testimonial1-65x.jpg" alt="John Doe" width="65" height="65"/>
                                        </div>
                                        <div className="auhtext ms-3">
                                            <h5 className="authour mb-1">John Doe</h5>
                                            <p className="text-muted">Founder &amp;CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content text-center">
                                    <div className="quote-icon mb-3 mb-lg-4">
                                        <img className="blur-up lazyload mx-auto" data-src="./assets/images/icons/demo1-quote-icon.png" src="./assets/images/icons/demo1-quote-icon.png" alt="icon" width="40" height="40"/>
                                    </div>
                                    <div className="content">
                                        <div className="text mb-2">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 1500s.</p>
                                        </div>
                                        <div className="product-review my-3">
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">15 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="auhimg d-flex-justify-center text-left">
                                        <div className="image">
                                            <img className="rounded-circle blur-up lazyload" data-src="./assets/images/users/testimonial2-65x.jpg" src="./assets/images/users/testimonial2-65x.jpg" alt="Jessica Doe" width="65" height="65"/>
                                        </div>
                                        <div className="auhtext ms-3">
                                            <h5 className="authour mb-1">Jessica Doe</h5>
                                            <p className="text-muted">Marketing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content text-center">
                                    <div className="quote-icon mb-3 mb-lg-4">
                                        <img className="blur-up lazyload mx-auto" data-src="./assets/images/icons/demo1-quote-icon.png" src="./assets/images/icons/demo1-quote-icon.png" alt="icon" width="40" height="40"/>
                                    </div>
                                    <div className="content">
                                        <div className="text mb-2">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 1500s.</p>
                                        </div>
                                        <div className="product-review my-3">
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star-o"></i>
                                            <i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">17 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="auhimg d-flex-justify-center text-left">
                                        <div className="image">
                                            <img className="rounded-circle blur-up lazyload" data-src="./assets/images/users/testimonial3-65x.jpg" src="./assets/images/users/testimonial3-65x.jpg" alt="Rick Edward" width="65" height="65"/>
                                        </div>
                                        <div className="auhtext ms-3">
                                            <h5 className="authour mb-1">Rick Edward</h5>
                                            <p className="text-muted">Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide rounded-3">
                                <div className="testimonial-content text-center">
                                    <div className="quote-icon mb-3 mb-lg-4">
                                        <img className="blur-up lazyload mx-auto" data-src="./assets/images/icons/demo1-quote-icon.png" src="./assets/images/icons/demo1-quote-icon.png" alt="icon" width="40" height="40"/>
                                    </div>
                                    <div className="content">
                                        <div className="text mb-2">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 1500s.</p>
                                        </div>
                                        <div className="product-review my-3">
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star"></i>
                                            <i className="icon anm anm-star-o"></i>
                                            <i className="icon anm anm-star-o"></i>
                                            <i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">29 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="auhimg d-flex-justify-center text-left">
                                        <div className="image">
                                            <img className="rounded-circle blur-up lazyload" data-src="./assets/images/users/testimonial4-65x.jpg" src="./assets/images/users/testimonial4-65x.jpg" alt="Happy Buyer" width="65" height="65"/>
                                        </div>
                                        <div className="auhtext ms-3">
                                            <h5 className="authour mb-1">Happy Buyer</h5>
                                            <p className="text-muted">Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </section>
         
            <section className="section home-blog-post">
                <div className="container">
                    <div className="section-header">
                        <p className="mb-2 mt-0">Latest post</p>
                        <h2>Most Recent News</h2>
                    </div>
                    <div className="blog-slider-3items gp15 arwOut5 hov-arrow">
                        <div className="blog-item">
                            <div className="blog-article zoomscal-hov">
                                <div className="blog-img">
                                    <a className="featured-image zoom-scal" href="blog-details.html">
                                        <img className="blur-up lazyload" data-src="./assets/images/blog/post-img1.jpg" src="./assets/images/blog/post-img1.jpg" alt="New shop collection our shop" width="740" height="410"/>
                                    </a>
                                    <div className="date">
                                        <span className="dt">25</span>
                                        <span className="mt">
                                            Apr<br/>
                                            <b>2023</b>
                                        </span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <h2 className="h3 mb-3">
                                        <a href="blog-details.html">New shop collection our shop</a>
                                    </h2>
                                    <p className="content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    <a href="blog-details.html" className="btn btn-secondary btn-sm">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-article zoomscal-hov">
                                <div className="blog-img">
                                    <a className="featured-image zoom-scal" href="blog-details.html">
                                        <img className="blur-up lazyload" data-src="./assets/images/blog/post-img2.jpg" src="./assets/images/blog/post-img2.jpg" alt="Gift ideas for everyone" width="740" height="410"/>
                                    </a>
                                    <div className="date">
                                        <span className="dt">31</span>
                                        <span className="mt">
                                            Mar<br/>
                                            <b>2023</b>
                                        </span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <h2 className="h3 mb-3">
                                        <a href="blog-details.html">Gift ideas for everyone</a>
                                    </h2>
                                    <p className="content">There are many variations of passages of Lorem Ipsum available, but the majority suffered.</p>
                                    <a href="blog-details.html" className="btn btn-secondary btn-sm">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-article zoomscal-hov">
                                <div className="blog-img">
                                    <a className="featured-image zoom-scal" href="blog-details.html">
                                        <img className="blur-up lazyload" data-src="./assets/images/blog/post-img3.jpg" src="./assets/images/blog/post-img3.jpg" alt="Sales with best collection" width="740" height="410"/>
                                    </a>
                                    <div className="date">
                                        <span className="dt">30</span>
                                        <span className="mt">
                                            Jan<br/>
                                            <b>2023</b>
                                        </span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <h2 className="h3 mb-3">
                                        <a href="blog-details.html">Sales with best collection</a>
                                    </h2>
                                    <p className="content">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                    <a href="blog-details.html" className="btn btn-secondary btn-sm">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>
      
        <div className="footer">
            <div className="newsletterbg clearfix">
                <div className="container">
                    <form action="#" method="post" className="footer-newsletter">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 mb-md-0">
                                <label className="h3 mb-1 clr-none">Sign Up Our Newsletter & Get 10% OFF</label>
                                <p>Sign up to stay in the loop. Receive updates, access to exclusive deals, and more.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="email" className="form-control input-group-field newsletter-input" name="email" value="" placeholder="Enter your email address..." required/>
                                    <button type="submit" className="input-group-btn btn btn-secondary newsletter-submit" name="commit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-top clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Informations</h4>
                            <ul>
                                <li>
                                    <a href="my-account.html">My Account</a>
                                </li>
                                <li>
                                    <a href="aboutus-style1.html">About us</a>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms &amp;condition</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Quick Shop</h4>
                            <ul>
                                <li>
                                    <a href="#">Bags &amp;Accessories</a>
                                </li>
                                <li>
                                    <a href="#">Tools &amp;Parts</a>
                                </li>
                                <li>
                                    <a href="#">Vegetables</a>
                                </li>
                                <li>
                                    <a href="#">Jewelry</a>
                                </li>
                                <li>
                                    <a href="#">Cosmetics</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Customer Services</h4>
                            <ul>
                                <li>
                                    <a href="#">Request Personal Data</a>
                                </li>
                                <li>
                                    <a href="faqs-style1.html">FAQ's</a>
                                </li>
                                <li>
                                    <a href="contact-style1.html">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Orders and Returns</a>
                                </li>
                                <li>
                                    <a href="#">Support Center</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-contact">
                            <h4 className="h4">Contact Us</h4>
                            <p className="address d-flex">
                                <i className="icon anm anm-map-marker-al pt-1"></i>
                                55 Gallaxy Enque, 2568 steet, 23568 NY
                            </p>
                            <p className="phone d-flex align-items-center">
                                <i className="icon anm anm-phone-l"></i>
                                <b className="me-1 d-none">Phone:</b>
                                <a href="tel:401234567890">(+40) 123 456 7890</a>
                            </p>
                            <p className="email d-flex align-items-center">
                                <i className="icon anm anm-envelope-l"></i>
                                <b className="me-1 d-none">Email:</b>
                                <a href="mailto:info@example.com">info@example.com</a>
                            </p>
                            <ul className="list-inline social-icons mt-3">
                                <li className="list-inline-item">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook">
                                        <i className="icon anm anm-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
                                        <i className="icon anm anm-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest">
                                        <i className="icon anm anm-pinterest-p"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Linkedin">
                                        <i className="icon anm anm-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
                                        <i className="icon anm anm-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube">
                                        <i className="icon anm anm-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom clearfix">
                <div className="container">
                    <div className="d-flex-center flex-column justify-content-md-between flex-md-row-reverse">
                        <ul className="payment-icons d-flex-center mb-2 mb-md-0">
                            <li>
                                <i className="icon anm anm-cc-visa"></i>
                            </li>
                            <li>
                                <i className="icon anm anm-cc-mastercard"></i>
                            </li>
                            <li>
                                <i className="icon anm anm-cc-amex"></i>
                            </li>
                            <li>
                                <i className="icon anm anm-cc-paypal"></i>
                            </li>
                            <li>
                                <i className="icon anm anm-cc-discover"></i>
                            </li>
                            <li>
                                <i className="icon anm anm-cc-stripe"></i>
                            </li>
                            <li>
                                <i className="icon anm anm-cc-jcb"></i>
                            </li>
                        </ul>
                        <div className="copytext">&copy;2024 Hema. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="menubar-mobile d-flex align-items-center justify-content-between d-lg-none">
            <div className="menubar-shop menubar-item">
                <a href="shop-grid-view.html">
                    <i className="menubar-icon anm anm-th-large-l"></i>
                    <span className="menubar-label">Shop</span>
                </a>
            </div>
            <div className="menubar-account menubar-item">
                <a href="my-account.html">
                    <i className="menubar-icon icon anm anm-user-al"></i>
                    <span className="menubar-label">Account</span>
                </a>
            </div>
            <div className="menubar-search menubar-item">
                <a href="index.html">
                    <span className="menubar-icon anm anm-home-l"></span>
                    <span className="menubar-label">Home</span>
                </a>
            </div>
            <div className="menubar-wish menubar-item">
                <a href="wishlist-style1.html">
                    <span className="span-count position-relative text-center">
                        <i className="menubar-icon icon anm anm-heart-l"></i>
                        <span className="wishlist-count counter menubar-count">0</span>
                    </span>
                    <span className="menubar-label">Wishlist</span>
                </a>
            </div>
            <div className="menubar-cart menubar-item">
                <a href="#;" className="btn-minicart" data-bs-toggle="offcanvas" data-bs-target="#minicart-drawer">
                    <span className="span-count position-relative text-center">
                        <i className="menubar-icon icon anm anm-cart-l"></i>
                        <span className="cart-count counter menubar-count">2</span>
                    </span>
                    <span className="menubar-label">Cart</span>
                </a>
            </div>
        </div>
       
        <div id="site-scroll">
            <i className="icon anm anm-arw-up"></i>
        </div>
   
        <div id="minicart-drawer" className="minicart-right-drawer offcanvas offcanvas-end" tabIndex={-1}>
          
            <div id="cartEmpty" className="cartEmpty d-flex-justify-center flex-column text-center p-3 text-muted d-none">
                <div className="minicart-header d-flex-center justify-content-between w-100">
                    <h4 className="fs-6">Your cart (0 Items)</h4>
                    <button className="close-cart border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="left" title="Close"></i>
                    </button>
                </div>
                <div className="cartEmpty-content mt-4">
                    <i className="icon anm anm-cart-l fs-1 text-muted"></i>
                    <p className="my-3">No Products in the Cart</p>
                    <a href="index.html" className="btn btn-primary cart-btn">Continue shopping</a>
                </div>
            </div>
           
            <div id="cart-drawer" className="block block-cart">
                <div className="minicart-header">
                    <button className="close-cart border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="left" title="Close"></i>
                    </button>
                    <h4 className="fs-6">Your cart (2 Items)</h4>
                </div>
                <div className="minicart-content">
                    <ul className="m-0 clearfix">
                        <li className="item d-flex justify-content-center align-items-center">
                            <a className="product-image rounded-3" href="product-layout1.html">
                                <img className="blur-up lazyload" data-src="./assets/images/products/cart-product-img1.jpg" src="./assets/images/products/cart-product-img1.jpg" alt="product" title="Product" width="120" height="170"/>
                            </a>
                            <div className="product-details">
                                <a className="product-title" href="product-layout1.html">Women Sandals</a>
                                <div className="variant-cart my-2">Black / XL</div>
                                <div className="priceRow">
                                    <div className="product-price">
                                        <span className="price">$54.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="qtyDetail text-center">
                                <div className="qtyField">
                                    <a className="qtyBtn minus" href="#;">
                                        <i className="icon anm anm-minus-r"></i>
                                    </a>
                                    <input type="text" name="quantity" value="1" className="qty"/>
                                    <a className="qtyBtn plus" href="#;">
                                        <i className="icon anm anm-plus-r"></i>
                                    </a>
                                </div>
                                <a href="#" className="edit-i remove">
                                    <i className="icon anm anm-pencil-ar" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"></i>
                                </a>
                                <a href="#" className="remove">
                                    <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"></i>
                                </a>
                            </div>
                        </li>
                        <li className="item d-flex justify-content-center align-items-center">
                            <a className="product-image rounded-3" href="product-layout1.html">
                                <img className="blur-up lazyload" data-src="./assets/images/products/cart-product-img2.jpg" src="./assets/images/products/cart-product-img2.jpg" alt="product" title="Product" width="120" height="170"/>
                            </a>
                            <div className="product-details">
                                <a className="product-title" href="product-layout1.html">Sleeve Round T-Shirt</a>
                                <div className="variant-cart my-2">Yellow / M</div>
                                <div className="priceRow">
                                    <div className="product-price">
                                        <span className="price old-price">$114.00</span>
                                        <span className="price">$99.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="qtyDetail text-center">
                                <div className="qtyField">
                                    <a className="qtyBtn minus" href="#;">
                                        <i className="icon anm anm-minus-r"></i>
                                    </a>
                                    <input type="text" name="quantity" value="1" className="qty"/>
                                    <a className="qtyBtn plus" href="#;">
                                        <i className="icon anm anm-plus-r"></i>
                                    </a>
                                </div>
                                <a href="#" className="edit-i remove">
                                    <i className="icon anm anm-pencil-ar" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"></i>
                                </a>
                                <a href="#" className="remove">
                                    <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="minicart-bottom">
                    <div className="shipinfo">
                        <div className="progress mb-2">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                        </div>
                        <div className="freeShipMsg">
                            <i className="icon anm anm-truck-l fs-6 me-2 align-middle"></i>
                            Only <span className="money" data-currency-usd="$199.00" data-currency="USD">$199.00</span>
                            away from <b>Free Shipping</b>
                        </div>
                        <div className="freeShipMsg d-none">
                            <i className="icon anm anm-truck-l fs-6 me-2 align-middle"></i>
                            Congrats! You are eligible for <b>Free Shipping</b>
                        </div>
                    </div>
                    <div className="subtotal clearfix my-3">
                        <div className="totalInfo clearfix mb-1 d-none">
                            <span>Shipping:</span>
                            <span className="item product-price">$10.00</span>
                        </div>
                        <div className="totalInfo clearfix mb-1 d-none">
                            <span>Tax:</span>
                            <span className="item product-price">$0.00</span>
                        </div>
                        <div className="totalInfo clearfix">
                            <span>Total:</span>
                            <span className="item product-price">$163.00</span>
                        </div>
                    </div>
                    <div className="agree-check customCheckbox">
                        <input id="prTearm" name="tearm" type="checkbox" value="tearm" required/>
                        <label htmlFor="prTearm">I agree with the </label>
                        <a href="#" className="ms-1 text-link">Terms &amp;conditions</a>
                    </div>
                    <div className="minicart-action d-flex mt-3">
                        <a href="checkout-style1.html" className="proceed-to-checkout btn btn-primary w-50 me-1">Check Out</a>
                        <a href="cart-style1.html" className="cart-btn btn btn-secondary w-50 ms-1">View Cart</a>
                    </div>
                </div>
            </div>
        
        </div>
       
        <div className="quickshop-modal modal fade" id="quickshop_modal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <form method="post" action="#" id="product-form-quickshop" className="product-form align-items-center">
                       
                            <div className="row g-0 item mb-3">
                                <a className="col-4 product-image" href="product-layout1.html">
                                    <img className="blur-up lazyload" data-src="./assets/images/products/addtocart-modal.jpg" src="./assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="800"/>
                                </a>
                                <div className="col-8 product-details">
                                    <div className="product-variant ps-3">
                                        <a className="product-title" href="product-layout1.html">Weave Hoodie Sweatshirt</a>
                                        <div className="priceRow mt-2 mb-3">
                                            <div className="product-price m-0">
                                                <span className="old-price">$114.00</span>
                                                <span className="price">$99.00</span>
                                            </div>
                                        </div>
                                        <div className="qtyField">
                                            <a className="qtyBtn minus" href="#;">
                                                <i className="icon anm anm-minus-r"></i>
                                            </a>
                                            <input type="text" name="quantity" value="1" className="qty"/>
                                            <a className="qtyBtn plus" href="#;">
                                                <i className="icon anm anm-plus-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="variants-clr swatches-image clearfix mb-3 swatch-0 option1" data-option-index="0">
                                <label className="label d-flex justify-content-center">
                                    Color:<span className="slVariant ms-1 fw-bold">Black</span>
                                </label>
                                <ul className="swatches d-flex-justify-center pt-1 clearfix">
                                    <li className="swatch large radius available active">
                                        <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue"/>
                                    </li>
                                    <li className="swatch large radius available">
                                        <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Black"/>
                                    </li>
                                    <li className="swatch large radius available">
                                        <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink"/>
                                    </li>
                                    <li className="swatch large radius available green">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"></span>
                                    </li>
                                    <li className="swatch large radius soldout yellow">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow"></span>
                                    </li>
                                </ul>
                            </div>
                       
                            <div className="variants-size swatches-size clearfix mb-4 swatch-1 option2" data-option-index="1">
                                <label className="label d-flex justify-content-center">
                                    Size:<span className="slVariant ms-1 fw-bold">S</span>
                                </label>
                                <ul className="size-swatches d-flex-justify-center pt-1 clearfix">
                                    <li className="swatch large radius soldout">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</span>
                                    </li>
                                    <li className="swatch large radius available active">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</span>
                                    </li>
                                    <li className="swatch large radius available">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</span>
                                    </li>
                                    <li className="swatch large radius available">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</span>
                                    </li>
                                    <li className="swatch large radius available">
                                        <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</span>
                                    </li>
                                </ul>
                            </div>
                         
                            <div className="product-form-submit d-flex-justify-center">
                                <button type="submit" name="add" className="btn product-cart-submit me-2">
                                    <span>Add to cart</span>
                                </button>
                                <button type="submit" name="sold" className="btn btn-secondary product-sold-out d-none" disabled={true}>Sold out</button>
                                <button type="submit" name="buy" className="btn btn-secondary proceed-to-checkout">Buy it now</button>
                            </div>
                        
                            <div className="text-center mt-3">
                                <a className="text-link" href="product-layout1.html">View More Details</a>
                            </div>
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
                                 
                                    <a className="product-image" href="product-layout1.html">
                                        <img className="blur-up lazyload" data-src="./assets/images/products/addtocart-modal.jpg" src="./assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="800"/>
                                    </a>
                                  
                                </div>
                                <div className="col-md-6 mt-3 mt-md-0">
                                 
                                    <div className="product-details">
                                        <a className="product-title" href="product-layout1.html">Cuff Beanie Cap</a>
                                        <p className="product-clr my-2 text-muted">Black / XL</p>
                                    </div>
                                    <div className="addcart-total rounded-5">
                                        <p className="product-items mb-2">
                                            There are <strong>1</strong>
                                            items in your cart
                                        </p>
                                        <p className="d-flex-justify-center">
                                            Total: <span className="price">$198.00</span>
                                        </p>
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
        </div>
     
        <div className="quickview-modal modal fade" id="quickview_modal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-3 mb-md-0">
                          
                                <div id="quickView" className="carousel slide">
                               
                                    <div className="carousel-inner">
                                        <div className="item carousel-item active" data-bs-slide-number="0">
                                            <img className="blur-up lazyload" data-src="./assets/images/products/product2.jpg" src="./assets/images/products/product2.jpg" alt="product" title="Product" width="625" height="808"/>
                                        </div>
                                        <div className="item carousel-item" data-bs-slide-number="1">
                                            <img className="blur-up lazyload" data-src="./assets/images/products/product2-1.jpg" src="./assets/images/products/product2-1.jpg" alt="product" title="Product" width="625" height="808"/>
                                        </div>
                                        <div className="item carousel-item" data-bs-slide-number="2">
                                            <img className="blur-up lazyload" data-src="./assets/images/products/product2-2.jpg" src="./assets/images/products/product2-2.jpg" alt="product" title="Product" width="625" height="808"/>
                                        </div>
                                        <div className="item carousel-item" data-bs-slide-number="3">
                                            <img className="blur-up lazyload" data-src="./assets/images/products/product2-3.jpg" src="./assets/images/products/product2-3.jpg" alt="product" title="Product" width="625" height="808"/>
                                        </div>
                                        <div className="item carousel-item" data-bs-slide-number="4">
                                            <img className="blur-up lazyload" data-src="./assets/images/products/product2-4.jpg" src="./assets/images/products/product2-4.jpg" alt="product" title="Product" width="625" height="808"/>
                                        </div>
                                        <div className="item carousel-item" data-bs-slide-number="5">
                                            <img className="blur-up lazyload" data-src="./assets/images/products/product2-5.jpg" src="./assets/images/products/product2-5.jpg" alt="product" title="Product" width="625" height="808"/>
                                        </div>
                                    </div>
                                  
                                    <div className="model-thumbnail-img">
                                     
                                        <div className="carousel-indicators list-inline">
                                            <div className="list-inline-item active" id="carousel-selector-0" data-bs-slide-to="0" data-bs-target="#quickView">
                                                <img className="blur-up lazyload" data-src="./assets/images/products/product2.jpg" src="./assets/images/products/product2.jpg" alt="product" title="Product" width="625" height="808"/>
                                            </div>
                                            <div className="list-inline-item" id="carousel-selector-1" data-bs-slide-to="1" data-bs-target="#quickView">
                                                <img className="blur-up lazyload" data-src="./assets/images/products/product2-1.jpg" src="./assets/images/products/product2-1.jpg" alt="product" title="Product" width="625" height="808"/>
                                            </div>
                                            <div className="list-inline-item" id="carousel-selector-2" data-bs-slide-to="2" data-bs-target="#quickView">
                                                <img className="blur-up lazyload" data-src="./assets/images/products/product2-2.jpg" src="./assets/images/products/product2-2.jpg" alt="product" title="Product" width="625" height="808"/>
                                            </div>
                                            <div className="list-inline-item" id="carousel-selector-3" data-bs-slide-to="3" data-bs-target="#quickView">
                                                <img className="blur-up lazyload" data-src="./assets/images/products/product2-3.jpg" src="./assets/images/products/product2-3.jpg" alt="product" title="Product" width="625" height="808"/>
                                            </div>
                                            <div className="list-inline-item" id="carousel-selector-4" data-bs-slide-to="4" data-bs-target="#quickView">
                                                <img className="blur-up lazyload" data-src="./assets/images/products/product2-4.jpg" src="./assets/images/products/product2-4.jpg" alt="product" title="Product" width="625" height="808"/>
                                            </div>
                                            <div className="list-inline-item" id="carousel-selector-5" data-bs-slide-to="5" data-bs-target="#quickView">
                                                <img className="blur-up lazyload" data-src="./assets/images/products/product2-5.jpg" src="./assets/images/products/product2-5.jpg" alt="product" title="Product" width="625" height="808"/>
                                            </div>
                                        </div>
                                    
                                        <a className="carousel-control-prev carousel-arrow rounded-1" href="#quickView" data-bs-target="#quickView" data-bs-slide="prev">
                                            <i className="icon anm anm-angle-left-r"></i>
                                        </a>
                                        <a className="carousel-control-next carousel-arrow rounded-1" href="#quickView" data-bs-target="#quickView" data-bs-slide="next">
                                            <i className="icon anm anm-angle-right-r"></i>
                                        </a>
                             
                                    </div>
                               
                                </div>
                             
                                <div className="text-center mt-3">
                                    <a href="product-layout1.html" className="text-link">View More Details</a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="product-arrow d-flex justify-content-between">
                                    <h2 className="product-title">Product Quick View Popup</h2>
                                </div>
                                <div className="product-review d-flex mt-0 mb-2">
                                    <div className="rating">
                                        <i className="icon anm anm-star"></i>
                                        <i className="icon anm anm-star"></i>
                                        <i className="icon anm anm-star"></i>
                                        <i className="icon anm anm-star"></i>
                                        <i className="icon anm anm-star-o"></i>
                                    </div>
                                    <div className="reviews ms-2">
                                        <a href="#">6 Reviews</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <p className="product-vendor">
                                        Vendor:
                                        <span className="text">
                                            <a href="#">Sparx</a>
                                        </span>
                                    </p>
                                    <p className="product-type">
                                        Product Type:<span className="text">Caps</span>
                                    </p>
                                    <p className="product-sku">
                                        SKU:<span className="text">RF104456</span>
                                    </p>
                                </div>
                                <div className="pro-stockLbl my-2">
                                    <span className="d-flex-center stockLbl instock d-none">
                                        <i className="icon anm anm-check-cil"></i>
                                        <span>In stock</span>
                                    </span>
                                    <span className="d-flex-center stockLbl preorder d-none">
                                        <i className="icon anm anm-clock-r"></i>
                                        <span>Pre-order Now</span>
                                    </span>
                                    <span className="d-flex-center stockLbl outstock d-none">
                                        <i className="icon anm anm-times-cil"></i>
                                        <span>Sold out</span>
                                    </span>
                                    <span className="d-flex-center stockLbl lowstock" data-qty="15">
                                        <i className="icon anm anm-exclamation-cir"></i>
                                        <span>
                                            Order now, Only  <span className="items">10</span>
                                            left!
                                        </span>
                                    </span>
                                </div>
                                <div className="product-price d-flex-center my-3">
                                    <span className="price old-price">$135.00</span>
                                    <span className="price">$99.00</span>
                                </div>
                                <div className="sort-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                                <form method="post" action="#" id="product_form--option" className="product-form">
                                    <div className="product-options d-flex-wrap">
                                        <div className="product-item swatches-image w-100 mb-3 swatch-0 option1" data-option-index="0">
                                            <label className="label d-flex align-items-center">
                                                Color:<span className="slVariant ms-1 fw-bold">Blue</span>
                                            </label>
                                            <ul className="variants-clr swatches d-flex-center pt-1 clearfix">
                                                <li className="swatch large radius available active">
                                                    <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue"/>
                                                </li>
                                                <li className="swatch large radius available">
                                                    <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Black"/>
                                                </li>
                                                <li className="swatch large radius available">
                                                    <img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink"/>
                                                </li>
                                                <li className="swatch large radius available green">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"></span>
                                                </li>
                                                <li className="swatch large radius soldout yellow">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow"></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-item swatches-size w-100 mb-3 swatch-1 option2" data-option-index="1">
                                            <label className="label d-flex align-items-center">
                                                Size:<span className="slVariant ms-1 fw-bold">S</span>
                                            </label>
                                            <ul className="variants-size size-swatches d-flex-center pt-1 clearfix">
                                                <li className="swatch large radius soldout">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</span>
                                                </li>
                                                <li className="swatch large radius available active">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</span>
                                                </li>
                                                <li className="swatch large radius available">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</span>
                                                </li>
                                                <li className="swatch large radius available">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</span>
                                                </li>
                                                <li className="swatch large radius available">
                                                    <span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-action d-flex-wrap w-100 pt-1 mb-3 clearfix">
                                            <div className="quantity">
                                                <div className="qtyField rounded">
                                                    <a className="qtyBtn minus" href="#;">
                                                        <i className="icon anm anm-minus-r" aria-hidden="true"></i>
                                                    </a>
                                                    <input type="text" name="quantity" value="1" className="product-form__input qty"/>
                                                    <a className="qtyBtn plus" href="#;">
                                                        <i className="icon anm anm-plus-l" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="addtocart ms-3 fl-1">
                                                <button type="submit" name="add" className="btn product-cart-submit w-100">
                                                    <span>Add to cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="wishlist-btn d-flex-center">
                                    <a className="add-wishlist d-flex-center me-3" href="wishlist-style1.html" title="Add to Wishlist">
                                        <i className="icon anm anm-heart-l me-1"></i>
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a className="add-compare d-flex-center" href="compare-style1.html" title="Add to Compare">
                                        <i className="icon anm anm-random-r me-2"></i>
                                        <span>Add to Compare</span>
                                    </a>
                                </div>
                              
                                <div className="social-sharing share-icon d-flex-center mx-0 mt-3">
                                    <span className="sharing-lbl">Share :</span>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook">
                                        <i className="icon anm anm-facebook-f"></i>
                                        <span className="share-title d-none">Facebook</span>
                                    </a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Tweet on Twitter">
                                        <i className="icon anm anm-twitter"></i>
                                        <span className="share-title d-none">Tweet</span>
                                    </a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest">
                                        <i className="icon anm anm-pinterest-p"></i>
                                        <span className="share-title d-none">Pin it</span>
                                    </a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-linkedin" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Instagram">
                                        <i className="icon anm anm-linkedin-in"></i>
                                        <span className="share-title d-none">Instagram</span>
                                    </a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-whatsapp" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on WhatsApp">
                                        <i className="icon anm anm-envelope-l"></i>
                                        <span className="share-title d-none">WhatsApp</span>
                                    </a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email">
                                        <i className="icon anm anm-whatsapp"></i>
                                        <span className="share-title d-none">Email</span>
                                    </a>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-notification mobile-hide" id="dismiss">
            <span className="close" aria-hidden="true">
                <i className="icon anm anm-times-r"></i>
            </span>
            <div className="media d-flex align-items-center">
                <a href="product-layout1.html" className="mediaImg">
                    <img className="w-100 h-100 blur-up lazyload" src="./assets/images/products/product2-120x170.jpg" data-src="./assets/images/products/product2-120x170.jpg" alt="Cuff Beanie Cap" width="120" height="170"/>
                </a>
                <div className="media-body ms-3">
                    <p className="smtlt mb-0">Someone purchsed a</p>
                    <h5 className="pname">
                        <a href="product-layout1.html">Cuff Beanie Cap</a>
                    </h5>
                    <p className="detail">12 Minutes ago from New York, USA</p>
                </div>
            </div>
        </div>
        
        <div className="newsletter-modal style3 modal fade" id="newsletter_modal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-body p-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="newsletter-wrap d-flex flex-column">
                            <div className="newsltr-img d-none d-sm-none d-md-block">
                                <img className="rounded-bottom-0 blur-up lazyload" data-src="./assets/images/newsletter/newsletter-s6.webp" src="./assets/images/newsletter/newsletter-s6.webp" alt="Join Our Newsletter Get 20% OFF First Order" title="Join Our Newsletter Get 20% OFF First Order" width="582" height="202"/>
                            </div>
                            <div className="newsltr-text text-center">
                                <div className="wraptext mw-100">
                                    <h2 className="title text-transform-none">
                                        Join Our Newsletter <br/>Get 20% OFF First Order
                                    </h2>
                                    <p className="text">Stay Informed! Monthly Tips, Tracks and Discount.</p>
                                    <form action="#" method="post" className="mcNewsletter mb-3">
                                        <div className="input-group">
                                            <input type="email" className="form-control input-group-field newsletter-input" name="email" value="" placeholder="Enter your email address..." required/>
                                            <button type="submit" className="input-group-btn btn btn-secondary newsletter-submit" name="commit">Subscribe</button>
                                        </div>
                                    </form>
                                    <ul className="list-inline social-icons d-inline-flex justify-content-center mb-3 w-100">
                                        <li className="list-inline-item">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook">
                                                <i className="icon anm anm-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
                                                <i className="icon anm anm-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest">
                                                <i className="icon anm anm-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Linkedin">
                                                <i className="icon anm anm-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
                                                <i className="icon anm anm-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube">
                                                <i className="icon anm anm-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="customCheckbox checkboxlink clearfix justify-content-center">
                                        <input id="dontshow" name="newsPopup" type="checkbox"/>
                                        <label htmlFor="dontshow" className="mb-0">Don't show this popup again</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
       
     </div>
    
    )
}

export { Home };