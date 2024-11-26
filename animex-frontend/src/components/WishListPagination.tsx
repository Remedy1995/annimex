import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../redux/Reducers/WishList";

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


export const WishListPagination = ({ products, totalPages, selectedPage }: ProductsProps) => {

    const location = useNavigate();
    const dispatch = useDispatch();

   const RemoveItem = (id : any) => {
   console.log('This id was clicked',id)
      dispatch(removeFromWishList({
        _id : id
      }));
   }
    const addedWishlIst = useSelector((state: any) => state.WishList.wishlist);
    console.log('this has been added ', addedWishlIst)
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
        console.log('This is my event', event.target.id)
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



    console.log('this pppp', products[0], totalPages)
    return (

        <div className="container">

            <div className="toolbar toolbar-wrapper shop-toolbar">
                <div className="row align-items-center">
                    <div className="col-4 col-sm-2 col-md-4 col-lg-4 text-left filters-toolbar-item d-flex order-1 order-sm-0">
                        <button type="button" name="add" className="btn btn-secondary"><span>All Add to cart</span></button>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center product-count order-0 order-md-1 mb-3 mb-sm-0">
                        <span className="toolbar-product-count">Showing: 5 products</span>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-4 text-right filters-toolbar-item d-flex justify-content-end order-2 order-sm-2">
                        <div className="filters-item d-flex align-items-center">
                            <label htmlFor="ShowBy" className="mb-0 me-2 text-nowrap d-none d-sm-inline-flex">Show:</label>
                            <select name="ShowBy" id="ShowBy" className="filters-toolbar-show">
                                <option value="title-ascending" selected={true}>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                        </div>
                        <div className="filters-item d-flex align-items-center ms-2 ms-lg-3">
                            <label htmlFor="SortBy" className="mb-0 me-2 text-nowrap d-none">Sort by:</label>
                            <select name="SortBy" id="SortBy" className="filters-toolbar-sort">
                                <option value="featured" selected={true}>Featured</option>
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
            </div>
            <div className="grid-products grid-view-items">
                <div className="row col-row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">

                    {
                        products && products.map((data: any) => {

                            return <div className="item col-item">
                                <div className="product-box position-relative">
                                    <button type="button" className="btn remove-icon close-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="icon anm anm-times-r" onClick={()=>RemoveItem(data?._id)}></i></button>

                                    <div className="product-image">

                                        <a href="product-layout1.html" className="product-img rounded-0">

                                            <img className="primary rounded-0 blur-up lazyload" data-src={data.image_url} src={data.image_url} alt="Product" title="Product" width="625" height="808" />

                                            <img className="hover rounded-0 blur-up lazyload" data-src={data.image_url} src={data.image_url} alt="Product" title="Product" width="625" height="808" />

                                        </a>

                                        <div className="product-labels"><span className="lbl on-sale">Sold out</span></div>

                                        <div className="button-set style2">

                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>

                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>

                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>

                                        </div>

                                    </div>

                                    <div className="product-details text-center">

                                        <div className="product-name">
                                            <a href="product-layout1.html">{data.name}</a>
                                        </div>

                                        <div className="product-price">
                                            <span className="price">${data.price}</span>
                                        </div>

                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i>
                                            <span className="caption hidden ms-1">15 Reviews</span>
                                        </div>

                                        <div className="button-action mt-3">
                                            <div className="addtocart-btn">
                                                <form className="addtocart" action="#" method="post">
                                                    <a href="#addtocart-modal" className="btn btn-md add-to-cart-modal soldOutBtn disabled" data-bs-toggle="modal" data-bs-target="#addtocart_modal">
                                                        <span className="text">Out Of stock</span>
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        })
                    }



                </div>
                <nav className="clearfix pagination-bottom">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled"><a className="page-link" href="#"><i className="icon anm anm-angle-left-l"></i></a></li>
                        {totalPagesArray.map((val, index) => {
                            console.log('index', index)
                            return <>
                                <li key={index} className='page-item'><a className="page-link" key={index} href="javascript:void(0)" style={{ cursor: 'pointer' }} id={val.toString()} onClick={getPageNumber} >{val}</a></li>


                            </>

                        })
                        }
                        <li className="page-item"><a className="page-link" href="#"><i className="icon anm anm-angle-right-l"></i></a></li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}