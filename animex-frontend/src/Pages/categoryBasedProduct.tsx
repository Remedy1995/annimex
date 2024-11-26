import React, { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination";
import { Service } from "../Services/Services";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";

interface Categories {
    name: string,
    _id: any
}

export const CategoryBasedProduct = () => {

    const { category } = useParams();
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      
        const query = useQuery();
        const shop = query.get('shop');
        console.log('shop',shop)
    console.log('selected category is', category)
    const apiService = new Service();
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [categories, setCategories] = useState<Array<Categories>>([{
        name: '',
        _id: ''
    }]);

    function GetSelectedId(e: any) {
        console.log('my selected', e)
        setSelectedPage(e)
    }
    console.log('i ahve', selectedPage)
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await apiService.getProductsBasedOnCategory(category, selectedPage,shop);
                console.log('This is my respo', response)
                setProducts(response.data)
                setTotalPages(response.totalpages)
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getProducts();

        async function getAllProductCategories() {
            try {
                const response = await apiService.getAllProductCategories();
                console.log('This is my respo', response)
                setCategories(response.data)
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getAllProductCategories();

    }, [selectedPage, perPage])


    console.log('my total Pages', Array.prototype.concat(totalPages, products))
    return (


        <><Header />
            <div id="page-content">
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>{category}</h1></div>

                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="title"><i className="icon anm anm-angle-right-l"></i>Shop</span><span className="main-title"><i className="icon anm anm-angle-right-l"></i>Shop Grid View</span></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="collection-slider-6items gp10 slick-arrow-dots sub-collection section pt-0">


                        {/* {categories && categories.map((data) => {
        console.log('jhjhk', categories)
        return <div className="category-item zoomscal-hov">
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb rounded-0">
                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/collection/sub-collection9.jpg" src="assets/images/collection/sub-collection9.jpg" alt="Jeans" title="Jeans" width="365" height="365" />
                </div>
                <div className="details text-center">
                    <h4 className="category-title mb-0">{data.name}</h4>
                    <p className="counts">28 Items</p>
                </div>
            </a>
        </div>
    })

    } */}



                    </div>

                    {/* <div className="toolbar toolbar-wrapper shop-toolbar">
        <div className="row align-items-center">
            <div className="col-4 col-sm-2 col-md-4 col-lg-4 text-left filters-toolbar-item d-flex order-1 order-sm-0">
                <button type="button" className="btn btn-filter text icon anm anm-sliders-hr d-inline-flex me-2 me-lg-3"> Filter</button>
                <div className="filters-item d-flex align-items-center">
                    <label className="mb-0 me-2 d-none d-lg-inline-block">View as:</label>
                    <div className="grid-options view-mode d-flex">
                        <a className="icon-mode mode-list d-block" data-col="1"></a>
                        <a className="icon-mode mode-grid grid-2 d-block" data-col="2"></a>
                        <a className="icon-mode mode-grid grid-3 d-md-block" data-col="3"></a>
                        <a className="icon-mode mode-grid grid-4 d-lg-block" data-col="4"></a>
                        <a className="icon-mode mode-grid grid-5 d-xl-block active" data-col="5"></a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center product-count order-0 order-md-1 mb-3 mb-sm-0">
                <span className="toolbar-product-count">Showing: 15 products</span>
            </div>
            <div className="col-8 col-sm-6 col-md-4 col-lg-4 text-right filters-toolbar-item d-flex justify-content-end order-2 order-sm-2">
                <div className="filters-item d-flex align-items-center">
                    <label htmlFor="ShowBy" className="mb-0 me-2 text-nowrap d-none d-sm-inline-flex">Show:</label>
                    <select name="ShowBy" id="ShowBy" className="filters-toolbar-show">
                        <option value="title-ascending" selected>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                </div>
                <div className="filters-item d-flex align-items-center ms-2 ms-lg-3">
                    <label htmlFor="SortBy" className="mb-0 me-2 text-nowrap d-none">Sort by:</label>
                    <select name="SortBy" id="SortBy" className="filters-toolbar-sort">
                        <option value="featured" selected>Featured</option>
                        <option value="best-selling">Best selling</option>
                        <option value="title-ascending">Alphabetically, A-Z</option>
                        <option value="title-descending">Alphabetically, Z-A</option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>
                        <option value="created-ascending">Date, old to new</option>
                        <option value="created-descending">Date, new to old</option>
                    </select>
                </div>
            </div>
        </div>
    </div> */}


                    <div className="row">
                        {/*
    <div className="col-12 col-sm-12 col-md-12 col-lg-3 sidebar sidebar-bg filterbar">
        <div className="closeFilter"><i className="icon anm anm-times-r"></i></div>
        <div className="sidebar-tags clearfix">

            <div className="sidebar-widget filterBox filter-widget">
                <div className="widget-title"><h2>Filter By</h2></div>
                <div className="widget-content filterby filterDD">
                    <ul className="items tags-list d-flex-wrap">
                        <li className="item"><a href="#;" className="rounded-5"><span className="filter-value">Women</span><i className="icon anm anm-times-r"></i></a></li>
                        <li className="item"><a href="#;" className="rounded-5"><span className="filter-value">Blue</span><i className="icon anm anm-times-r"></i></a></li>
                        <li className="item"><a href="#;" className="rounded-5"><span className="filter-value">XL</span><i className="icon anm anm-times-r"></i></a></li>
                    </ul>
                    <a href="#;" className="btn btn-sm brd-link">Clear All</a>
                </div>
            </div>

            <div className="sidebar-widget clearfix categories filterBox filter-widget">
                <div className="widget-title"><h2>Categories</h2></div>
                <div className="widget-content filterDD">
                    <ul className="sidebar-categories scrollspy morelist clearfix">
                        <li className="lvl1 sub-level more-item"><a href="#;" className="site-nav">Clothing</a>
                            <ul className="sublinks">
                                <li className="lvl2 sub-level sub-sub-level"><a href="#;" className="site-nav">Men</a>
                                    <ul className="sublinks">
                                        <li className="lvl3"><a href="#" className="site-nav">Shirt <span className="count">(25)</span></a></li>
                                        <li className="lvl3"><a href="#" className="site-nav">Jeans <span className="count">(6)</span></a></li>
                                        <li className="lvl3"><a href="#" className="site-nav">Shoes <span className="count">(9)</span></a></li>
                                    </ul>
                                </li>
                                <li className="lvl2"><a href="#" className="site-nav">Women <span className="count">(14)</span></a></li>
                                <li className="lvl2"><a href="#" className="site-nav">Child <span className="count">(26)</span></a></li>
                            </ul>
                        </li>
                        <li className="lvl1 sub-level more-item"><a href="#;" className="site-nav">Jewellery</a>
                            <ul className="sublinks">
                                <li className="lvl2"><a href="#" className="site-nav">Ring <span className="count">(12)</span></a></li>
                                <li className="lvl2"><a href="#" className="site-nav">Neckalses <span className="count">(15)</span></a></li>
                                <li className="lvl2"><a href="#" className="site-nav">Eaarings <span className="count">(18)</span></a></li>
                            </ul>
                        </li>
                        <li className="lvl1 more-item"><a href="#" className="site-nav">Accessories <span className="count">(14)</span></a></li>
                        <li className="lvl1 more-item"><a href="#" className="site-nav">Shoes <span className="count">(18)</span></a></li>
                        <li className="lvl1 more-item"><a href="#" className="site-nav">Electronic <span className="count">(22)</span></a></li>
                        <li className="lvl1 more-item"><a href="#" className="site-nav">Cosmetics <span className="count">(27)</span></a></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget filterBox filter-widget">
                <div className="widget-title"><h2>Price</h2></div>
                <form className="widget-content price-filter filterDD" action="#" method="post">
                    <div id="slider-range" className="mt-2"></div>
                    <div className="row">
                        <div className="col-6"><input id="amount" type="text" /></div>
                        <div className="col-6 text-right"><button className="btn btn-sm">filter</button></div>
                    </div>
                </form>
            </div>

            <div className="sidebar-widget filterBox filter-widget">
                <div className="widget-title"><h2>Color</h2></div>
                <div className="widget-content filter-color filterDD">
                    <ul className="swacth-list swatches d-flex-center clearfix pt-0">
                        <li className="swatch large radius available active"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                        <li className="swatch large radius available"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Black" /></li>
                        <li className="swatch large radius available"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink" /></li>
                        <li className="swatch large radius available"><img src="assets/images/products/swatches/blue-red.jpg" alt="image" width="70" height="70" data-bs-toggle="tooltip" data-bs-placement="top" title="Red" /></li>
                        <li className="swatch large radius available black"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Black"></span></li>
                        <li className="swatch large radius available red"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Red"></span></li>
                        <li className="swatch large radius available blue"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue"></span></li>
                        <li className="swatch large radius available pink"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink"></span></li>
                        <li className="swatch large radius available gray"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray"></span></li>
                        <li className="swatch large radius available green"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"></span></li>
                        <li className="swatch large radius available orange"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Orange"></span></li>
                        <li className="swatch large radius soldout yellow"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow"></span></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget filterBox filter-widget">
                <div className="widget-title"><h2>Size</h2></div>
                <div className="widget-content filter-size filterDD">
                    <ul className="swacth-list size-swatches d-flex-center clearfix">
                        <li className="swatch large radius soldout"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="X">X</span></li>
                        <li className="swatch large radius available active"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XLL">XLL</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="XXL">XXL</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="25">25</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="35">35</span></li>
                        <li className="swatch large radius available"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="40">40</span></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget filterBox filter-widget product-type">
                <div className="widget-title"><h2>Product type</h2></div>
                <div className="widget-content filterDD">
                    <ul className="clearfix">
                        <li><input type="checkbox" value="fashion" id="fashion" /><label htmlFor="fashion"><span></span>Fashion</label></li>
                        <li><input type="checkbox" value="electronic" id="electronic" /><label htmlFor="electronic"><span></span>Electronic</label></li>
                        <li><input type="checkbox" value="shoes" id="shoes" /><label htmlFor="shoes"><span></span>Shoes</label></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget filterBox filter-widget brand-filter">
                <div className="widget-title"><h2>Brands</h2></div>
                <div className="widget-content filterDD">
                    <ul className="clearfix">
                        <li><input type="checkbox" value="avone" id="avone" /><label htmlFor="avone"><span></span>Avone</label></li>
                        <li><input type="checkbox" value="diva" id="diva" /><label htmlFor="diva"><span></span>Diva</label></li>
                        <li><input type="checkbox" value="optimal" id="optimal" /><label htmlFor="optimal"><span></span>Optimal</label></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget filterBox filter-widget availability">
                <div className="widget-title"><h2>Availability</h2></div>
                <div className="widget-content filterDD">
                    <ul className="clearfix">
                        <li><input type="checkbox" value="instock" id="instock" /><label htmlFor="instock"><span></span>In stock</label></li>
                        <li><input type="checkbox" value="outofstock" id="outofstock" /><label htmlFor="outofstock"><span></span>Out of stock</label></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget filterBox filter-widget product-tag">
                <div className="widget-title"><h2>Product Tags</h2></div>
                <div className="widget-content filterDD">
                    <ul className="tags-list product-tags d-flex-wrap clearfix">
                        <li className="item active"><a className="rounded-5" href="#">Women</a></li>
                        <li className="item"><a className="rounded-5" href="#">Shoes</a></li>
                        <li className="item"><a className="rounded-5" href="#">Beauty</a></li>
                        <li className="item"><a className="rounded-5" href="#">Accessories</a></li>
                        <li className="item"><a className="rounded-5" href="#">$100 - $400</a></li>
                        <li className="item"><a className="rounded-5" href="#">Above $800</a></li>
                        <li className="item"><a className="rounded-5" href="#">Black</a></li>
                        <li className="item"><a className="rounded-5" href="#">Blue</a></li>
                        <li className="item"><a className="rounded-5" href="#">Red</a></li>
                        <li className="item"><a className="rounded-5" href="#">M</a></li>
                        <li className="item"><a className="rounded-5" href="#">XS</a></li>
                    </ul>
                    <span className="btn btn-sm brd-link btnview">View all</span>
                </div>
            </div>

        </div>
    </div> */}

                        {/* This area */}
                        <Pagination products={products} totalPages={totalPages} selectedPage={(e) => GetSelectedId(e)} />
                    </div>
                </div>

            </div><Footer /><div id="site-scroll"><i className="icon anm anm-arw-up"></i></div><Cart /><div className="quickshop-modal modal fade" id="quickshop_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form method="post" action="#" id="product-form-quickshop" className="product-form align-items-center">

                                <div className="row g-0 item mb-3">
                                    <a className="col-4 product-image" href="product-layout1.html"><img className="rounded-0 blur-up lazyload" data-src="assets/images/products/addtocart-modal.jpg" src="assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="800" /></a>
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
                                    <button type="submit" name="sold" className="btn btn-secondary product-sold-out d-none" disabled={true}>Sold out</button>
                                    <button type="submit" name="buy" className="btn btn-secondary proceed-to-checkout">Buy it now</button>
                                </div>

                                <div className="text-center mt-3"><a className="text-link" href="product-layout1.html">View More Details</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div><div className="addtocart-modal modal fade" id="addtocart_modal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form method="post" action="#" id="product-form-addtocart" className="product-form align-items-center">
                                <h3 className="title mb-3 text-success text-center">Added to cart Successfully!</h3>
                                <div className="row d-flex-center text-center">
                                    <div className="col-md-6">

                                        <a className="product-image" href="product-layout1.html"><img className="rounded-0 blur-up lazyload" data-src="assets/images/products/addtocart-modal.jpg" src="assets/images/products/addtocart-modal.jpg" alt="Product" title="Product" width="625" height="808" /></a>

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
                                                <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2.jpg" src="assets/images/products/product2.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="1">
                                                <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-1.jpg" src="assets/images/products/product2-1.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="2">
                                                <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-2.jpg" src="assets/images/products/product2-2.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="3">
                                                <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-3.jpg" src="assets/images/products/product2-3.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="4">
                                                <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-4.jpg" src="assets/images/products/product2-4.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                            <div className="item carousel-item" data-bs-slide-number="5">
                                                <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-5.jpg" src="assets/images/products/product2-5.jpg" alt="product" title="Product" width="625" height="808" />
                                            </div>
                                        </div>

                                        <div className="model-thumbnail-img">

                                            <div className="carousel-indicators list-inline">
                                                <div className="list-inline-item active" id="carousel-selector-0" data-bs-slide-to="0" data-bs-target="#quickView">
                                                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2.jpg" src="assets/images/products/product2.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-1" data-bs-slide-to="1" data-bs-target="#quickView">
                                                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-1.jpg" src="assets/images/products/product2-1.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-2" data-bs-slide-to="2" data-bs-target="#quickView">
                                                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-2.jpg" src="assets/images/products/product2-2.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-3" data-bs-slide-to="3" data-bs-target="#quickView">
                                                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-3.jpg" src="assets/images/products/product2-3.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-4" data-bs-slide-to="4" data-bs-target="#quickView">
                                                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-4.jpg" src="assets/images/products/product2-4.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                                <div className="list-inline-item" id="carousel-selector-5" data-bs-slide-to="5" data-bs-target="#quickView">
                                                    <img className="rounded-0 blur-up lazyload" data-src="assets/images/products/product2-5.jpg" src="assets/images/products/product2-5.jpg" alt="product" title="Product" width="625" height="808" />
                                                </div>
                                            </div>

                                            <a className="carousel-control-prev carousel-arrow rounded-1" href="#quickView" data-bs-target="#quickView" data-bs-slide="prev"><i className="icon anm anm-angle-left-r"></i></a>
                                            <a className="carousel-control-next carousel-arrow rounded-1" href="#quickView" data-bs-target="#quickView" data-bs-slide="next"><i className="icon anm anm-angle-right-r"></i></a>

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
                                                    <button type="submit" name="sold" className="btn btn-secondary product-sold-out w-100 d-none" disabled={true}><span>Sold out</span></button>
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
            </div>
            <script src="assets/js/plugins.js"></script><script src="assets/js/main.js"></script></>


    )
}