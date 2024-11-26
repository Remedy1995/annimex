import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../redux/Reducers/WishList";
import { addItems } from "../redux/Reducers/Cart";
import { QuickShop } from "./QuickShop";
import { QuickView } from "./QuickView";

interface ProductsProps {
    selectedPage: (a: number) => void,
    totalPages: number,
    products: Array<
        {
            name: string,
            description: string,
            price: number,
            image_url: string,
            _id: string,
            category:
            {
                _id: string,
                name: string
            }

        }
    >
}


interface SingleProductsProps {
    name: any,
    description: any,
    price: any,
    image_url: any,
    _id: any,
    category_id: any,
    category_name: any,
    // quantity: any
}

export const Pagination = ({ products, totalPages, selectedPage }: ProductsProps) => {
    const dispatch = useDispatch();
    const location = useNavigate();
    const [selectedProductArray, setSelectedProductArray] = useState<SingleProductsProps>({
        name: "",
        description: "",
        price: 0,
        image_url: "",
        _id: "",
        category_id: "",
        category_name: "",
        // quantity: ""
    }
    );
    console.log('This is my product', selectedProductArray)
    const addedWishlIst = useSelector((state: any) => state.WishList.wishlist);
    // console.log('this has been added ',addedWishlIst)
    const RedirectForm = (url: any, event: any) => {
        event.preventDefault()
        location(url);

        //console.log('hello')
    }
    const totalPagesArray = [];
    const [selectPageNumber, setSelectPageNumber] = useState(1);
    for (let i = 1; i <= totalPages; i++) {
        totalPagesArray.push(i)
    }

    function getPageNumber(event: any) {
        //  console.log('This is my event', event.target.id)
        // setSelectedPage(event.target.id)
        setSelectPageNumber(event.target.id)
        // return event.target.id;

    }


    useEffect(() => {
        if (selectPageNumber > 1) {
            selectedPage(selectPageNumber)
        }
        else {
            selectedPage(1)
        }
    }, [selectPageNumber])

    const addWishList = (id: any) => {
        const filterSelectedItem = products.find((data) => {
            return data._id === id;
        });
        // console.log('my filtered item',filterSelectedItem)
        // e.preventDefault()
        //  console.log('i have added item to wishlist')
        dispatch(addToWishList({
            _id: filterSelectedItem?._id,
            name: filterSelectedItem?.name,
            description: filterSelectedItem?.description,
            category_id: filterSelectedItem?.category._id,
            category_name: filterSelectedItem?.category.name,
            price: filterSelectedItem?.price,
            // quantity: '30',
            image_url: filterSelectedItem?.image_url

        }))

    }



    const displaySingleItem = (id: any) => {
        const filterSelectedItem = products.find((data) => {
            return data._id === id;
        });
        // console.log('my filtered item',filterSelectedItem)
        setSelectedProductArray({
            _id: filterSelectedItem?._id,
            name: filterSelectedItem?.name,
            description: filterSelectedItem?.description,
            category_id: filterSelectedItem?.category._id,
            category_name: filterSelectedItem?.category.name,
            price: filterSelectedItem?.price,
            // quantity: 1,
            image_url: filterSelectedItem?.image_url
        })
    }


    const addToCart = () => {
        dispatch(addItems({
            _id: selectedProductArray?._id,
            name: selectedProductArray?.name,
            description: selectedProductArray?.description,
            category_id: selectedProductArray?.category_id,
            category_name: selectedProductArray?.category_name,
            price: selectedProductArray?.price,
            // quantity: selectedProductArray?.quantity,
            image_url: selectedProductArray?.image_url
        }))
    }

    //console.log('this pppp', products[0], totalPages)
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">

            <div className="grid-products grid-view-items">

                <div className="row col-row product-options row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                    {
                        products && products.map((data) => {
                            //  console.log('data', data)
                            return (<div className="item col-item" key={data._id}>
                                <div className="product-box">

                                    <div className="product-image">

                                        <a key={data._id} href={'product/' + data._id} className="product-img rounded-0">
                                            <img className="rounded-0 blur-up lazyload" src={data.image_url} alt="Product" title="Product"
                                                //width="625" height="808"
                                                style={{ objectFit: 'contain', width: '100%', height: '250px', objectPosition: 'center' }} /></a>

                                        <div className="product-labels"><span className="lbl on-sale">Sale</span></div>

                                        <div className="saleTime" data-countdown="2025/01/01"></div>

                                        <div className="button-set style1">

                                            <a key={data._id} onClick={() => displaySingleItem(data._id)} className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick Shop"><i className="icon anm anm-cart-l"></i><span className="text">Quick Shop</span></span>
                                            </a>

                                            <a onClick={() => displaySingleItem(data._id)} className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a key={data._id} onClick={() => addWishList(data._id)} className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-left">

                                        <div key={data._id} className="product-vendor">{data.category.name}</div>

                                        <div className="product-name">
                                            {/* <a href={'product/' + data._id}>{data.name}</a> */}
                                            <a key={data._id} className="product-img rounded-0" onClick={RedirectForm.bind(this, '/product/' + data._id)}>{data.name}</a>
                                        </div>

                                        <div className="product-price">
                                            <span key={data._id} className="price old-price">${data.price}</span><span className="price">{data.price}</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">3 Reviews</span>
                                        </div>

                                        <p className="sort-desc hidden">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>

                                        <ul className="variants-clr swatches">
                                            <li className="swatch medium radius"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Navy"><img src="assets/images/products/product1.jpg" alt="img" width="625" height="808" /></span></li>
                                            <li className="swatch medium radius"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Green"><img src="assets/images/products/product1-1.jpg" alt="img" width="625" height="808" /></span></li>
                                            <li className="swatch medium radius"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray"><img src="assets/images/products/product1-2.jpg" alt="img" width="625" height="808" /></span></li>
                                            <li className="swatch medium radius"><span className="swatchLbl" data-bs-toggle="tooltip" data-bs-placement="top" title="Orange"><img src="assets/images/products/product1-3.jpg" alt="img" width="625" height="808" /></span></li>
                                        </ul>

                                        <div className="button-action hidden">
                                            <div className="addtocart-btn">
                                                <form className="addtocart" action="#" method="post">
                                                    <a href="#quickshop-modal" className="btn btn-md quick-shop quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                        <i className="icon anm anm-cart-l me-2"></i><span className="text">Quick Shop</span>
                                                    </a>
                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            )
                        })




                    }
                </div>

                <nav className="clearfix pagination-bottom">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled"><a className="page-link" href="#"><i className="icon anm anm-angle-left-l"></i></a></li>
                        {totalPagesArray.map((val, index) => {
                            // console.log('index', index)
                            return <>
                                <li key={index} className='page-item'><a className="page-link" key={index} href="javascript:void(0)" style={{ cursor: 'pointer' }} id={val.toString()} onClick={getPageNumber} >{val}</a></li>


                            </>

                        })
                        }
                        <li className="page-item"><a className="page-link" href="#"><i className="icon anm anm-angle-right-l"></i></a></li>
                    </ul>

                </nav>





            </div>
            <QuickShop product={[selectedProductArray]} addToCart={addToCart} />
            <QuickView addToCart={addToCart} product={[selectedProductArray]} />
        </div>
    )
}