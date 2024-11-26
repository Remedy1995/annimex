import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../redux/Reducers/WishList";
import { addItems } from "../redux/Reducers/Cart";
import { QuickShop } from "./QuickShop";
import { QuickView } from "./QuickView";

interface ShopProps {
    selectedPage: (a: number) => void,
    totalPages: number,
    shop: Array<
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

export const ShopPagination = ({ shop, totalPages, selectedPage }: ShopProps) => {
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
        const filterSelectedItem = shop.find((data: any) => {
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


    //console.log('this pppp', products[0], totalPages)
    return (

        <><div className="container">
            <div className="collection-style3 row g-1 row-cols-lg-2 row-cols-md-2 row-cols-1">

                {shop.map((val: any, index: number) => {
                    console.log('shop',shop)
                    console.log('index', typeof (index));
                    if (index % 2 === 0) {
                        return (
                            <div className="category-item-shop zoomscal-hov d-flex align-items-stretch justify-content-between flex-row">
                                <div className="f-item fl-1 d-flex align-items-center">
                                    <div className="zoom-scal zoom-scal-nopb rounded-0">
                                        <img className="rounded-0 blur-up lazyloaded" data-src={val.image_url} src={val.image_url} alt="collection" title={val.name} width="365" height="365" /></div>
                                </div>
                                <div className="f-item fl-1 d-flex align-items-center">
                                    <div className="details p-3 text-center w-100">
                                        <h4 className="category-item-shop-title mb-0">{val.name}</h4>
                                        <p className="counts my-2">20 Items</p>
                                        <p className="description">{val.description}</p>
                                        <a href={`shop-category/${val._id}`} className="btn btn-outline-primary btn-sm">Shop  Now</a>
                                    </div>
                                </div>
                            </div>


                        );
                    }
                    else if (index % 2 !== 0) {
                        return (
                            <>
                                <div className="category-item-shop zoomscal-hov d-flex align-items-stretch justify-content-between flex-row">
                                    <div className="f-item fl-1 d-flex align-items-center order-lg-0 order-md-1 order-0">
                                        <div className="details p-3 text-center w-100">
                                            <h4 className="category-item-shop-title mb-0">{val.name}</h4>
                                            <p className="counts my-2">11 Items</p>
                                            <p className="description">{val.description}</p>
                                            <a href={`shop-category/${val._id}`} className="btn btn-outline-primary btn-sm">Shop  Now</a>
                                        </div>
                                    </div>
                                    <div className="f-item fl-1 d-flex align-items-center">
                                        <div className="zoom-scal zoom-scal-nopb rounded-0"><img className="rounded-0 blur-up lazyloaded" data-src={val.image_url} src={val.image_url} alt="collection" title={val.name} width="365" height="365" /></div>
                                    </div>
                                </div></>
                        );
                    }
                })}
            </div>
        </div><nav className="clearfix pagination-bottom">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link" href="#"><i className="icon anm anm-angle-left-l"></i></a></li>
                    {totalPagesArray.map((val, index) => {
                        // console.log('index', index)
                        return <>
                            <li key={index} className='page-item'><a className="page-link" key={index} href="javascript:void(0)" style={{ cursor: 'pointer' }} id={val.toString()} onClick={getPageNumber}>{val}</a></li>


                        </>;

                    })}
                    <li className="page-item"><a className="page-link" href="#"><i className="icon anm anm-angle-right-l"></i></a></li>
                </ul>

            </nav></>

    )
}