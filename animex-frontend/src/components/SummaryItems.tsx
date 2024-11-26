import React from "react";
import { updateQuantityInCart } from "../redux/Reducers/Cart";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Reducers/Cart";
import UpdateQuantityCart from "./UpdateQuantityCart";


interface FilterItemProps {
    filterCartItems: Array<[]>
}

function SummaryItems({ filterCartItems }: FilterItemProps) {
    const dispatch = useDispatch();
    const updateCartQuantity = (id : any,data:any) => {  
        dispatch(updateQuantityInCart({quantity : data ,_id : id}));
   }

   
   const DeleteFromCart = (id: any) => {
    console.log('i removed', id)
    dispatch(removeFromCart({
        _id : id
      }));
}

    return (
        <form action="#" method="post" className="cart-table table-bottom-brd">
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
                            <td className="cart-delete text-center small-hide"><a style={{ cursor: 'pointer', padding: '10px' }} onClick={() => DeleteFromCart(data?._id)} className="cart-remove remove-icon position-static" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove to Cart"><i className="icon anm anm-times-r"
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
                                    <UpdateQuantityCart updateCartQuantity={(e) => updateCartQuantity(data._id, e.target.value)} quantity={data.quantity} />
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
        </form>
    )
}

export default SummaryItems;