import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UpdateQuantityCart from '../components/UpdateQuantityCart';
import { updateQuantityInCart } from "../redux/Reducers/Cart";
import { addToWishList } from "../redux/Reducers/WishList";
import { addItems } from "../redux/Reducers/Cart";
import { removeFromCart } from "../redux/Reducers/Cart";

interface QuickShopProps {

    addToCart: (id: any) => void,
    product: Array<{
        name: any,
        description: any,
        price: any,
        image_url: any,
        _id: any,
       // quantity: any
        // category:
        // {
        //     _id: string,
        //     name: string
        // }
    }
    >
}



export const QuickShop = ({ product, addToCart }: QuickShopProps) => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
  

    const updateCartQuantity = (id: any, data: any) => {
        console.log('heeee', id, data)
        dispatch(updateQuantityInCart({ quantity: data, _id: id }));
    }

    const ViewItem = (id: any) => {
        navigation(`product/${id}`, { replace: true })
    }

    
    const RemoveItemsFromCart = (id: any) => {
        dispatch((removeFromCart({ _id: id })))
    }
    const allAddedCart = useSelector((state: any) => state.Cart.cart);
    console.log('my added',allAddedCart)
    const selectedProduct = product.map((data: any) => data._id);
    const checkAlreadyAddedItem = allAddedCart.filter((data: any) => data._id === selectedProduct[0]);
    console.log('This product has been added', checkAlreadyAddedItem)
    return (<div>
        <div className="quickshop-modal modal fade" id="quickshop_modal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div id="product-form-quickshop" className="product-form align-items-center">

                            <div className="row g-0 item mb-3">
                                <a className="col-4 product-image" href="product-layout1.html"><img className="rounded-0 blur-up lazyload" data-src={product[0]?.image_url} src={product[0]?.image_url} alt="Product" title={product[0]?.name} width="625" height="800" /></a>
                                <div className="col-8 product-details">
                                    <div className="product-variant ps-3">

                                        <a className="product-title" href="product-layout1.html">{product[0]?.name}</a>
                                        <div className="priceRow mt-2 mb-3">
                                            <div className="product-price m-0"><span className="old-price">$114.00</span><span className="price">{product[0]?.price}</span></div>
                                        </div>
                                        <UpdateQuantityCart updateCartQuantity={(e) => updateCartQuantity(product[0]?._id, e.target.value)} quantity={allAddedCart[0]?.quantity} />
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

                            <div className="d-flex justify-content-center">
                                <button type="submit" name="add" className="btn product-cart-submit me-2" onClick={addToCart} disabled={checkAlreadyAddedItem?.length > 0 ? true : false}><span> {checkAlreadyAddedItem?.length < 1 ? "Add to cart " : "Added to Cart"}</span></button>
                                <button type="submit" name="sold" className="btn btn-secondary product-sold-out d-none" disabled={true}>Sold out</button>
                                {checkAlreadyAddedItem?.length > 0 && <a className="btn btn-secondary proceed-to-checkout" onClick={() => RemoveItemsFromCart(product[0]?._id)}>Remove From cart </a>}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}