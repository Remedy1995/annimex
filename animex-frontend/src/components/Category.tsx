import React from 'react';

interface Categories {
    categories: Array<
        {
            name: string,
            _id: any,
            image_url : string,
            productCount : any
        }
    >
}
export const Category = ({ categories }: Categories) => {
    return (
        <div className="collection-slider-6items gp10 slick-arrow-dots sub-collection section pt-0">
            {categories && categories.map((data) => {
                console.log('jhjhk', categories)
                return <div className="category-item zoomscal-hov">
                    <a href={`category-based-product/${data.name}`} className="category-link clr-none">
                        <div className="zoom-scal zoom-scal-nopb rounded-0" >
                            <img className="rounded-0 blur-up lazyload" data-src={data.image_url} src={data.image_url} alt={data.name} title={data.name}  style={{objectFit:'cover',width : '100%',height:'250px',objectPosition:'center'}}/>
                        </div>
                        <div className="details text-center">
                            <h4 className="category-title mb-0">{data.name}</h4>
                            <p className="counts">{data.productCount}</p>
                        </div>
                    </a>
                </div>
            })

            }



        </div>

    )
}