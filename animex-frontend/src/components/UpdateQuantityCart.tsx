import React from "react";


interface UpdateQuantityProps {
    updateCartQuantity: (data: any) => void,
    quantity: any
}

function UpdateQuantityCart({ updateCartQuantity, quantity }: UpdateQuantityProps) {
    return (
        <div className="qtyField">
            {/* <a className="qtyBtn minus" onClick={reduceQuantity} ><i className="icon anm anm-minus-r"></i></a> */}
            <input className="cart-qty-input qty" type="text" name="updates[]" placeholder="Input Qty" value={quantity} pattern="[0-9]*" onChange={updateCartQuantity} defaultValue={1} />
            {/* <a className="qtyBtn plus" onClick={increaseQuantity}><i className="icon anm anm-plus-r"></i></a> */}
        </div>
    )
}

export default UpdateQuantityCart;