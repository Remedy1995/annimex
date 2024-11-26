import React from "react";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";
import { OrderInfoHooks } from "../Hooks/Hooks";


export const OrderSuccess = () => {


    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery().get("transaction_id");
    console.log('my searched query is ', query)
    const { order } = OrderInfoHooks(query);
    console.log('my orders', order)
   
    const subTotal = order?.userInfo[0].items.map((val: any) => val).flatMap((data: any) => data).reduce((a: any, b: any) => a + b.price * b.quantity, 0);
    //const 
    return (<div>
        <Header />
        <div id="page-content">

            <div className="page-header text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                            <div className="page-title"><h1>Order success</h1></div>

                            <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="main-title"><i className="icon anm anm-angle-right-l"></i>Order success</span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="success-text checkout-card text-center mb-4 mb-md-5">
                    <i className="icon anm anm-shield-check"></i>
                    <h2>Thank you for your order!</h2>
                    <p className="mb-1">{order.message.split("<br/>")[0]}</p>
                    <p className="mb-1">{order.message.split("<br/>")[1]}</p>
                    <p className="text-order badge bg-success mt-3">Transaction ID: {order?.userInfo[0]?.transaction_id}</p>
                </div>
                <div className="row checkout-form">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="block order-summary">
                            <div className="block-content">
                                <h3 className="title mb-3">Order Summary</h3>
                                <div className="table-responsive-sm table-bottom-brd order-table">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-start">Image</th>
                                                <th className="text-start proName">Product</th>
                                                <th className="text-center">Qty</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                order?.userInfo[0].items.map((val: any, index: any) => {
                                                    console.log('my inner', val)
                                                    return val.length > 0 && val?.map((item: any) => {
                                                        return <tr>
                                                            <td className="text-start"><img className="rounded-0 blur-up lazyload" data-src={item?.image_url} src={item?.image_url} alt="product" title="product" 
                                                             style={{ objectFit: 'contain', width: '100%', height: '90px', objectPosition: 'center' }} /></td>
                                                            <td className="text-start proName">
                                                                <div className="list-view-item-title">
                                                                    {item?.name}
                                                                </div>
                                                                <div className="cart-meta-text">
                                                                    Color: Black<br />Size: Small
                                                                </div>
                                                            </td>
                                                            <td className="text-center">{item?.quantity}</td>
                                                            <td className="text-center">GH {item.price}</td>
                                                            <td className="text-center"><strong>{
                                                                item?.quantity * item.price}</strong></td>
                                                        </tr>
                                                    }

                                                    )

                                                })

                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="cart-info mt-4 mb-4 mb-lg-0">
                            <div className="cart-order-detail cart-col">
                                <div className="row g-0 border-bottom pb-2">
                                    <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Subtotal</strong></span>
                                    <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">GHC {subTotal.toFixed(2)}</span></span>
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
                                    <span className="col-6 col-sm-6 cart-subtotal-title fs-5 cart-subtotal text-end text-primary"><b className="money">GHC {order?.userInfo[0]?.total.toFixed(2)}</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="block">
                            <div className="block-content">
                                <div className="row g-0">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="shipping-details mb-4 mb-sm-0">
                                            <h3 className="title mb-3">Shipping Address</h3>
                                            <p>{order?.userInfo[0]?.shippingAddress?.streetAddress1},</p>
                                            <p>{order?.userInfo[0]?.shippingAddress?.country},</p>
                                            <p>{order?.userInfo[0]?.shippingAddress?.state}</p>
                                            <p>{order?.userInfo[0]?.shippingAddress?.postalCode}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="billing-details">
                                            <h3 className="title mb-3">Billing Address</h3>
                                            <p>{order?.userInfo[0]?.billingAddress?.streetAddress1},</p>
                                            <p>{order?.userInfo[0]?.billingAddress?.country},</p>
                                            <p>{order?.userInfo[0]?.billingAddress?.state}</p>
                                            <p>{order?.userInfo[0]?.billingAddress?.postalCode}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block mt-4">
                            <div className="block-content">
                                <div className="row g-0">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="shipping-details mb-4 mb-sm-0">
                                            <h3 className="title mb-3">Shipping Method</h3>
                                            <p>Flat Rate - Fixeds</p>
                                            <p>Delivery Date: N/A</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="billing-details">
                                            <h3 className="title mb-3">Payment Method</h3>
                                            <p>Check / Money order</p>
                                            <p>Cash on delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block mt-4">
                            <div className="block-content">
                                <div className="row g-0">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="shipping-details mb-4 mb-sm-0">
                                            <h3 className="title mb-3">Order details</h3>
                                            <p>Order ID: {order?.userInfo[0]?.transaction_id}</p>
                                            <p>Order Date: October 14, 2023</p>
                                            <p>Order Total: {order?.userInfo[0]?.total.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="billing-details">
                                            <h3 className="title mb-3">Expected date of delivery</h3>
                                            <p>Your order is on the way</p>
                                            <p className="h5 my-2">October 18, 2023</p>
                                            <p><a href="#" className="btn-link">Track order</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex-wrap w-100 mt-4 text-center">
                            <a href="index.html" className="d-inline-flex align-items-center btn btn-outline-primary me-2 mb-2 me-sm-3"><i className="me-2 icon an an-angle-left-r"></i>Continue Shopping</a>
                            <button type="button" className="d-inline-flex align-items-center btn me-2 mb-2 me-sm-3"><i className="me-2 icon an an-print"></i>Print Order</button>
                            <button type="button" className="d-inline-flex align-items-center btn me-2 mb-2 me-sm-3"><i className="me-2 icon an an-sync-ar"></i>Re-Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>
        <Cart />
    </div>)
}