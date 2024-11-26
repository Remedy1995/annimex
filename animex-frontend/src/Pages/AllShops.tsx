import { useState } from 'react';
import { Cart } from '../components/Cart';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ShopPagination } from '../components/ShopPagination';
import { AllShopsHooks } from '../Hooks/Hooks';


export const AllShops = () => {
    const [selectedPage, setSelectedPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    
    function GetSelectedId(e: any) {
        console.log('my selected', e)
        setSelectedPage(e)
    }
    const { shops, totalPages } = AllShopsHooks(selectedPage, perPage);
     console.log('my shops,',shops)
    return (
        <div>

            <Header />
            <div id="page-content">

                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>Collections Style3</h1></div>

                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="title"><i className="icon anm anm-angle-right-l"></i>Shop</span><span className="main-title"><i className="icon anm anm-angle-right-l"></i>Collections Style3</span></div>

                            </div>
                        </div>
                    </div>
                </div>
                <ShopPagination shop={shops} totalPages={totalPages} selectedPage={(e) => GetSelectedId(e)} />
            </div>
            <Footer />
            <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>
            <Cart />

        </div>

    )
}