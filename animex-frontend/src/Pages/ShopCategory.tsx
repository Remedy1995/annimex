import React from "react";
import { Cart } from "../components/Cart";
import { QuickShop } from "../components/QuickShop";
import { QuickView } from "../components/QuickView";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { ProductAndCategoriesHooks } from "../Hooks/Hooks";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";

export const ShopCategory = () => {
    const [perPage, setPage] = useState(10);
    const { shopId } = useParams();
    const navigate = useNavigate();
  
    const RedirectPage = (url: any, event: any) => {
        event.preventDefault();
        navigate(url)
        console.log('hello world')
    }
    console.log('This is the selected Shop', shopId)
    const { shops, totalPages } = ProductAndCategoriesHooks(shopId, perPage);
    const shopInformation = shops?.find((data: any) => data);
    console.log('my dedicated', shopInformation && shopInformation['shop']['name'])
    const getShopCategories = shops.map((val: any) => val?.category);
    console.log('the categories of this shop', getShopCategories)
    let nameOfCategories = getShopCategories.map((item: any) => item.name);
    return (
        <><Header />
            <div id="page-content">
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>Sub Collection Style2</h1></div>

                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="title"><i className="icon anm anm-angle-right-l"></i>Shop</span><span className="main-title"><i className="icon anm anm-angle-right-l"></i>Sub Collection Style2</span></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="row sub-collection-style1">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-4 mb-lg-0">
                            <div className="content-banner-wrap position-relative">
                                <div className="content-image image-box">
                                    {/* <a className="rounded-0" href="shop-grid-view.html">
                                         <img className="rounded-0 blur-up w-100 lazyload" data-src="./assets/images/banners/sub-collection-banner1.jpg" src="./assets/images/banners/sub-collection-banner1.jpg" alt="sub-collection-banner1" width="371" height="646" />
                                        </a>  */}
                                </div>
                                <div className="content-text">
                                    <span className="collection-sub mb-1 d-block text-muted">New in</span>
                                    <h2 className="collection-title"><a href="shop-grid-view.html">{shopInformation && shopInformation['shop']['name']} Collection</a></h2>
                                    <div className="d-flex-wrap mb-3">
                                        <label className="mb-2 w-100 d-block">Hurry up! Sales End In </label>
                                        <div className="product-countdown d-flex justify-content-center w-100" data-countdown="2026/10/01"></div>
                                    </div>

                                    <p className="collection-des">{shopInformation && shopInformation['shop']['description']}.</p>
                                    <a href="shop-grid-view.html" className="btn explore-btn">View Collection</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="collection-style2 row col-row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-2">

                                {getShopCategories.map((val: any, index) => {
                                    console.log('my categories shop',val)
                                    if (nameOfCategories.indexOf(val.name) === index) {
                                        return <div className="category-item-shop col-item zoomscal-hov">
                                            <a onClick={RedirectPage.bind(this, `/category-based-product/${val.name}?shop=${shopInformation && shopInformation['shop']['name']}`)} className="category-link clr-none">
                                                <div className="zoom-scal zoom-scal-nopb rounded-0">
                                                    <img className="rounded-0 blur-up lazyload" data-src={val.image_url} src={val.image_url} alt="collection"
                                                        title={val.name}
                                                        style={{ objectFit: 'contain', width: '100%', height: '300px', objectPosition: 'center' }} /></div>
                                                <div className="details text-center rounded-0">
                                                    <h4 className="category-title mb-1">{val.name}</h4>
                                                    <div className="foffer mb-3 text-white">{val.productCount}</div>
                                                </div>
                                            </a>
                                        </div>
                                    }
                                })
                                }

                            </div>
                        </div>
                    </div>


                    <div className="sub-collectio-products product-four-loadmore section pb-0">
                        <div className="section-header">
                            <h2>Best Seller Products</h2>
                            <p>Our most popular products based on sales. Updated daily.</p>
                        </div>


                        <div className="grid-products grid-view-items">
                            <div className="row col-row product-options row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0"><img className="rounded-0 blur-up lazyload" src="./assets/images/products/product1.jpg" alt="Product" title="Product" width="625" height="808" /></a>

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Navy"><img src="./assets/images/products/product1.jpg" alt="img" width="625" height="808" /></span></li>
                                                <li className="swatch small rounded"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"><img src="./assets/images/products/product1-1.jpg" alt="img" width="625" height="808" /></span></li>
                                                <li className="swatch small rounded"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray"><img src="./assets/images/products/product1-2.jpg" alt="img" width="625" height="808" /></span></li>
                                                <li className="swatch small rounded"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Orange"><img src="./assets/images/products/product1-3.jpg" alt="img" width="625" height="808" /></span></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product2.jpg" src="./assets/images/products/product2.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product2-1.jpg" src="./assets/images/products/product2-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="blue" /></li>
                                                <li className="swatch small rounded"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon" /></li>
                                                <li className="swatch small rounded"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="pink" /></li>
                                                <li className="swatch small rounded"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="green" /></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product3.jpg" src="./assets/images/products/product3.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product3-1.jpg" src="./assets/images/products/product3-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded red"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="red"></span></li>
                                                <li className="swatch small rounded orange"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="orange"></span></li>
                                                <li className="swatch small rounded yellow"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="yellow"></span></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="https://annimexweb.com/items/hema/./assets/images/products/product3-1.jpg" src="https://annimexweb.com/items/hema/./assets/images/products/product3-1.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product4-1.jpg" src="./assets/images/products/product4-1.jpg" alt="Product" title="Product" width="625" height="808" />

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


                                            <div className="product-availability rounded-5">
                                                <div className="lh-1 d-flex justify-content-between">
                                                    <div className="text-sold">Sold:<strong className="text-primary ms-1">34</strong></div>
                                                    <div className="text-available">Available:<strong className="text-primary ms-1">16</strong></div>
                                                </div>
                                                <div className="progress"><div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div></div>
                                            </div>

                                        </div>

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded black"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="black" /></li>
                                                <li className="swatch small rounded navy"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="navy" /></li>
                                                <li className="swatch small rounded darkgreen"><img src="./assets/images/products/swatches/blue-red.jpg" width="70" height="70" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="darkgreen" /></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product5.jpg" src="./assets/images/products/product5.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product5-1.jpg" src="./assets/images/products/product5-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded black"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span></li>
                                                <li className="swatch small rounded maroon"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon"></span></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product6.jpg" src="./assets/images/products/product6.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product6-1.jpg" src="./assets/images/products/product6-1.jpg" alt="Product" title="Product" width="625" height="808" />

                                            </a>

                                            <div className="product-labels"><span className="lbl on-sale">Sold out</span></div>

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded gray"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="gray"></span></li>
                                                <li className="swatch small rounded red"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="red"></span></li>
                                                <li className="swatch small rounded orange"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="orange"></span></li>
                                                <li className="swatch small rounded yellow"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="yellow"></span></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product7.jpg" src="./assets/images/products/product7.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product7-1.jpg" src="./assets/images/products/product7-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded black"><img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="black" /></li>
                                                <li className="swatch small rounded maroon"><img src="./assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="maroon" /></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product8.jpg" src="./assets/images/products/product8.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product8-1.jpg" src="./assets/images/products/product8-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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


                                            <ul className="variants-clr swatches">
                                                <li className="swatch small rounded black"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="black"></span></li>
                                                <li className="swatch small rounded navy"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="navy"></span></li>
                                                <li className="swatch small rounded darkgreen"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="darkgreen"></span></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product9.jpg" src="./assets/images/products/product9.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product9-1.jpg" src="./assets/images/products/product9-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product10.jpg" src="./assets/images/products/product10.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product10-1.jpg" src="./assets/images/products/product10-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

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
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product11.jpg" src="./assets/images/products/product11.jpg" alt="Product" title="Product" width="625" height="808" />


                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product11-1.jpg" src="./assets/images/products/product11-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

                                            <div className="product-name">
                                                <a href="product-layout1.html">Sleeve Round T-Shirt</a>
                                            </div>

                                            <div className="product-price">
                                                <span className="price">$154.00</span>
                                            </div>

                                            <div className="product-review">
                                                <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i>
                                                <span className="caption hidden ms-1">19 Reviews</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="item col-item">
                                    <div className="product-box">

                                        <div className="product-image">

                                            <a href="product-layout1.html" className="product-img rounded-0">

                                                <img className="primary rounded-0 blur-up lazyload" data-src="./assets/images/products/product12.jpg" src="./assets/images/products/product12.jpg" alt="Product" title="Product" width="625" height="808" />

                                                <img className="hover rounded-0 blur-up lazyload" data-src="./assets/images/products/product12-1.jpg" src="./assets/images/products/product12-1.jpg" alt="Product" title="Product" width="625" height="808" />

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

                                        <div className="product-details text-center">

                                            <div className="product-name">
                                                <a href="product-layout1.html">Backpack Laptop Bag</a>
                                            </div>

                                            <div className="product-price">
                                                <span className="price">$121.00</span>
                                            </div>

                                            <div className="product-review">
                                                <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                                                <span className="caption hidden ms-1">6 Reviews</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="infinitpaginOuter text-center mt-5">
                            <div className="infiniteload"><a href="#" className="btn btn-xl loadMore4">Load More</a></div>
                        </div>

                    </div>

                </div>

            </div><Footer /><div id="site-scroll"><i className="icon anm anm-arw-up"></i></div><Cart /><QuickShop addToCart={function (id: any): void {
                throw new Error("Function not implemented.");
            }} product={[]} /><div className="addtocart-modal modal fade" id="addtocart_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form method="post" action="#" id="product-form-addtocart" className="product-form align-items-center">
                                <h3 className="title mb-3 text-success text-center">Added to cart Successfully!</h3>
                                <div className="row d-flex-center text-center">
                                    <div className="col-md-6">

                                        <a className="product-image" href="product-layout1.html"><img className="rounded-0 blur-up lazyload" data-src="./assets/images/products/addtocart-modal.jpg" src="./assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="800" /></a>

                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">

                                        <div className="product-details">
                                            <a className="product-title" href="product-layout1.html">Cuff Beanie Cap</a>
                                            <p className="product-clr my-2 text-muted">Black / XL</p>
                                        </div>
                                        <div className="addcart-total rounded-5">
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
            </div>
            <QuickView addToCart={function (id: any): void {
                throw new Error("Function not implemented.");
            }} product={[]} />
        </>

    )
}