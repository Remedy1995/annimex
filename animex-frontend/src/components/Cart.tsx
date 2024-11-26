import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { removeFromCart, updateQuantityInCart } from "../redux/Reducers/Cart";
import UpdateQuantityCart from '../components/UpdateQuantityCart';




export const Cart = () => {

    const dispatch = useDispatch();
    const location = useNavigate();
    const allAddedCart = useSelector((state: any) => state.Cart.cart);
    const getCartIds = allAddedCart.map((data: any) => data._id);
    console.log('all get ids', getCartIds)
    const trackInput = useRef(1);
    console.log('kkk', trackInput.current)

    const updateCartQuantity = (id: any, data: any) => {
        console.log('id',id,'data',data)
        dispatch(updateQuantityInCart({ quantity: data, _id: id }));
    }

    const filterCartItems = allAddedCart.filter((data: any, index: any) => {
        if (getCartIds.indexOf(data._id) === index) {
            return data;
        }
    })

    console.log('This is my filtered Items', filterCartItems)

    let totalPrice = 0;
    const calculateTotalPrice = filterCartItems.reduce((a: any, b: any) => {
         totalPrice += b.price * b.quantity;
        return totalPrice;
    }, 0)


    const viewCart = () => {
        // const backdrops = document.querySelectorAll(".offcanvas-backdrop");
        // const bodyArea = document.getElementsByTagName("body")[0] as HTMLElement | null;

        // if (bodyArea) {
        //     bodyArea.style.overflow = 'visible';
        // }
        // if (backdrops) {
        //     backdrops.forEach(backdrop => {
        //         (backdrop as HTMLElement).style.opacity = "0";
        //     });

        // }
        location('/view-cart')
    }



    const viewCheckout = () => {
        // const backdrops = document.querySelectorAll(".offcanvas-backdrop");
        // const bodyArea = document.getElementsByTagName("body")[0] as HTMLElement | null;

        // if (bodyArea) {
        //     bodyArea.style.overflow = 'visible';
        // }
        // if (backdrops) {
        //     backdrops.forEach(backdrop => {
        //         (backdrop as HTMLElement).style.opacity = "0";
        //     });

        // }
        //register attempt checkout     
        localStorage.setItem("attempt_checkout","yes")
        location('/check-out-list')
    }



    const removeItem = (id: any) => {
        console.log('deleted', id)

        dispatch((removeFromCart({ _id: id })))
    }

    const increaseQuantity = () => {

    }
    //console.log('this has been added  to cart', allAddedCart)
    return (
        <div id="minicart-drawer" className="minicart-right-drawer offcanvas offcanvas-end" tabIndex={-1}>

            {
                filterCartItems?.length === 0 ?
                    (<div id="cartEmpty" className="cartEmpty d-flex-justify-center flex-column text-center p-3 text-muted">
                        <div className="minicart-header d-flex-center justify-content-between w-100">
                            <h4 className="fs-6">Your cart ({filterCartItems?.length} Items)</h4>
                            <button className="close-cart border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="left" title="Close"></i>
                            </button>
                        </div>
                        <div className="cartEmpty-content mt-4">
                            <i className="icon anm anm-cart-l fs-1 text-muted"></i>
                            <p className="my-3">No Products in the Cart</p>
                            <a href="index.html" className="btn btn-primary cart-btn">Continue shopping</a>
                        </div>
                    </div>)
                    : null
            }

            {filterCartItems?.length > 0 && (
                <div id="cart-drawer" className="block block-cart">
                    <div className="minicart-header">
                        <button className="close-cart border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="left" title="Close"></i>
                        </button>
                        <h4 className="fs-6">Your cart ({filterCartItems.length} Items)</h4>
                    </div>
                    <div className="minicart-content">
                        <ul className="m-0 clearfix">

                            {filterCartItems.map((data: any) => {
                                return (<li className="item d-flex justify-content-center align-items-center">
                                    <a className="product-image rounded-3" href="product-layout1.html">
                                        <img className="blur-up lazyload" data-src={data.image_url} src={data.image_url} alt="product" title="Product" width="120" height="170" />
                                    </a>
                                    <div className="product-details">
                                        <a className="product-title" href="product-layout1.html">{data.name}</a>
                                        <div className="variant-cart my-2">Black / XL</div>
                                        <div className="priceRow">
                                            <div className="product-price">
                                                <span className="price">${data.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="qtyDetail text-center">
                                        <UpdateQuantityCart updateCartQuantity={(e) => updateCartQuantity(data._id, e.target.value)} quantity={data.quantity} />
                                        <a className="edit-i remove">
                                            <i className="icon anm anm-pencil-ar" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"></i>
                                        </a>
                                        <a onClick={(e) => removeItem(data._id)} className="remove">
                                            <i className="icon anm anm-times-r" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"></i>
                                        </a>
                                    </div>
                                </li>
                                )
                            })
                            }
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
                                <span className="item product-price">GHc {calculateTotalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="agree-check customCheckbox">
                            <input id="prTearm" name="tearm" type="checkbox" value="tearm" required />
                            <label htmlFor="prTearm">I agree with the </label>
                            <a href="#" className="ms-1 text-link">Terms &amp;conditions</a>
                        </div>
                        <div className="minicart-action d-flex mt-3">
                            <a className="proceed-to-checkout btn btn-primary w-50 me-1" onClick={viewCheckout}>Check Out</a>
                            <a onClick={viewCart} className="cart-btn btn btn-secondary w-50 ms-1">View Cart</a>
                        </div>
                    </div>
                </div>
            )
            }
        </div>

    )
}