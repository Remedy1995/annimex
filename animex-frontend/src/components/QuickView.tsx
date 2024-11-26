import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../redux/Reducers/WishList";
import { addItems } from "../redux/Reducers/Cart";
import { removeFromCart } from "../redux/Reducers/Cart";
import { updateQuantityInCart } from "../redux/Reducers/Cart";
import UpdateQuantityCart from '../components/UpdateQuantityCart';
import { removeFromWishList } from "../redux/Reducers/WishList";

interface QuickViewProps {

    addToCart: (id: any) => void,
    product: Array<{
        name: any,
        description: any,
        price: any,
        image_url: any,
        _id: any,
        category_id: any,
        category_name: any
    }
    >
}



export const QuickView = ({ product, addToCart }: QuickViewProps) => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const RemoveWishlist = (id : any) => {
        console.log('This id was clicked',id)
           dispatch(removeFromWishList({
             _id : id
           }));
        }
    const checkAddedWishList = useSelector((state: any) => state.WishList.wishlist);

    const addWishList = (id: any) => {
        dispatch(addToWishList({
            _id: product[0]?._id,
            name: product[0]?.name,
            description: product[0]?.description,
            category_id: product[0]?.category_id,
            category_name: product[0]?.category_name,
            price: product[0]?.price,
            image_url: product[0]?.image_url
        }))

    }


    const updateCartQuantity = (id: any, data: any) => {
        dispatch(updateQuantityInCart({ quantity: data, _id: id }));
    }

    const ViewItem = (id: any) => {
        navigation(`product/${id}`, { replace: true })
    }
    const RemoveItemsFromCart = (id: any) => {
        dispatch((removeFromCart({ _id: id })))
    }
    const allAddedCart = useSelector((state: any) => state.Cart.cart);

    console.log('my added cart', allAddedCart)
    console.log('my product has been added ', product)

    const selectedProduct = product.map((data: any) => data._id);
    const checkAlreadyAddedItem = allAddedCart.filter((data: any) => data._id === selectedProduct[0]);
    console.log('This product has been added', checkAlreadyAddedItem)
    return (<div>
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
                                            <img className="rounded-0 blur-up lazyload" data-src={product[0]?.image_url} src={product[0]?.image_url} alt={product[0]?.name} title={product[0]?.name} width="625" height="808" />
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
                                    <h2 className="product-title">{product[0]?.name}</h2>
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
                                    <span className="price old-price">$135.00</span><span className="price">GHC {product[0]?.price}</span>
                                </div>
                                <div className="sort-description">{product[0]?.description}</div>
                                <div id="product_form--option" className="product-form">
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
                                                <UpdateQuantityCart updateCartQuantity={(e) => updateCartQuantity(product[0]?._id, e.target.value)} quantity={allAddedCart[0]?.quantity} />
                                            </div>
                                            <div className="addtocart ms-5 fl-1">
                                                <button className="btn product-cart-submit w-100" onClick={addToCart}
                                                    disabled={checkAlreadyAddedItem?.length > 0 ? true : false} ><span>{checkAlreadyAddedItem?.length < 1 ? "Add to cart " : "Added to Cart"}</span></button>
                                                <button name="sold" className="btn btn-secondary product-sold-out w-100 d-none" disabled={true}><span>Sold out</span></button>
                                                <button className="btn btn-secondary proceed-to-checkout w-100 d-none"><span>Buy it now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wishlist-btn d-flex-center">
                                    { checkAddedWishList?.length < 1 && <a className="add-wishlist d-flex-center me-3" onClick={addWishList} title="Add to Wishlist"><i className="icon anm anm-heart-l me-1"></i> <span> {checkAddedWishList?.length < 1 ? "Add to Wishlist ":"Added to Wishlist" }</span></a>}
                                   {checkAddedWishList?.length > 0 && <a className="add-wishlist d-flex-center me-3  text-danger"  title="Remove From Wishlist"   onClick={()=>RemoveWishlist(product[0]?._id)}><i className="icon anm anm-heart-l me-1"></i> <span>Remove From WishList</span></a>}
                                   
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
    </div>)
}