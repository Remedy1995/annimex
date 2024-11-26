import React, { useEffect, useState } from "react";
import { Service } from "../Services/Services";
import { authenticatedUser } from "../redux/Reducers/Users";
import { useDispatch, UseDispatch } from "react-redux";
const apiService = new Service();

export function ProductCategoriesHooks() {
    interface Categories {
        name: string,
        _id: any,
        productCount: any,
        image_url: string
    }
    const [categories, setCategories] = useState<Array<Categories>>([{ name: '', _id: '', productCount: 0, image_url: '' }]);

    useEffect(() => {
        async function getAllProductCategories() {
            try {
                const response = await apiService.getAllProductCategories();
                // console.log('This is my respo', response)
                setCategories(response.data)
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }

        getAllProductCategories();

    }, [])

    return { categories };
}



export function AllShopsHooks(selectedPage: any, perPage: any) {
    const [shops, setShops] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function getShops() {
            try {
                const response = await apiService.allShops(selectedPage, perPage);
                //  console.log('This is my respo', response)
                setShops(response.data)
                setTotalPages(response.totalpages)
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getShops();



    }, [selectedPage, perPage])


    return { shops, totalPages };
}


export function CustomerInfoHooks() {

    const [customer, setCustomerInfo] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getCustomer() {
            try {
                const response = await apiService.getCustomerInfo();
                //  console.log('This is my respo', response)
                setCustomerInfo(response?.message)
            }
            catch (error: any) {
                console.log('This is my error', error?.message)
            }
        }
        getCustomer();



    }, [])
    //push authenticated user
    //dispatch(authenticatedUser(customer));
    return { customer };
}





export function OrderInfoHooks(query: any) {

    const [order, setOrderInfo] = useState<{
        message: string,
        userInfo: Array<{
            transaction_id: string,
            total: number,
            createdAt: Date,
            billingAddress: {
                streetAddress1: string,
                postalCode: string,
                country: string,
                state: string
            },
            shippingAddress: {
                streetAddress1: string,
                postalCode: string,
                country: string,
                state: string
            },
            items: Array<{
                category: string,
                created_At: Date,
                description: string,
                image_url: string,
                name: String,
                price: number,
                quantity: number,
                shop: string
            }>
        }>
    }>({
        message: '',
        userInfo: [{
            transaction_id: '',
            total: 0,
            createdAt: new Date(),
            billingAddress: {
                streetAddress1: '',
                postalCode: '',
                country: '',
                state: ''
            },
            shippingAddress: {
                streetAddress1: '',
                postalCode: '',
                country: '',
                state: ''
            },
            items: [
                {
                    category: '',
                    created_At: new Date(),
                    description: '',
                    image_url: '',
                    name: '',
                    price: 0,
                    quantity: 0,
                    shop: ''
                }

            ]
        }],


    });
    useEffect(() => {
        async function getOrderInfo() {
            try {
                const response = await apiService.getOrderInformation(query);
                console.log('This is my respo', response)
                setOrderInfo({
                    message: response?.message,
                    userInfo: [
                        {
                            transaction_id: response?.data[0]?.transaction_id,
                            total: response?.data[0]?.total,
                            createdAt: response?.data[0]?.createdAt,
                            billingAddress: {
                                streetAddress1: response?.data[0]?.billingAddress?.streetAddress1,
                                postalCode: response?.data[0]?.billingAddress?.postalCode,
                                country: response?.data[0]?.billingAddress?.country,
                                state: response?.data[0]?.billingAddress?.state
                            },
                            shippingAddress: {
                                streetAddress1: response?.data[0]?.shippingAddress?.streetAddress1,
                                postalCode: response?.data[0]?.shippingAddress?.postalCode,
                                country: response?.data[0]?.shippingAddress?.country,
                                state: response?.data[0]?.shippingAddress?.state
                            },
                            items: [
                                response?.data[0]?.items?.map((data: any,index :any) => {
                                    
                                    return {
                                        category: data?.product?.category,
                                        created_At: data?.product?.createdAt,
                                        description: data?.product?.description,
                                        image_url: data?.product?.image_url,
                                        name: data?.product?.name,
                                        price: data?.product?.price,
                                        quantity: response?.data[0].items[index].quantity,
                                        shop: data?.product?.shop
                                    }

                                })
                            ]
                        }
                    ]
                })
            }
            catch (error: any) {
                console.log('This is my error', error?.message)
            }
        }
        getOrderInfo();



    }, [])
    //push authenticated user
    //dispatch(authenticatedUser(customer));
    return { order };
}



export function ProductAndCategoriesHooks(id: any, perPage: any) {
    const [shops, setShops] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function getProductAndCategories() {
            try {
                const response = await apiService.ShopsAndCategory(id, perPage);
                //  console.log('This is my respo', response)
                setShops(response)
                setTotalPages(response.totalpages)

            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getProductAndCategories();
        console.log('This is my respo', shops)


    }, [id, perPage])


    return { shops, totalPages };
}

export function AllProductsHooks(selectedPage: any, perPage: any) {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await apiService.allProducts(selectedPage, perPage);
                //  console.log('This is my respo', response)
                setProducts(response.data)
                setTotalPages(response.totalpages)
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getProducts();



    }, [selectedPage, perPage])


    return { products, totalPages };
}






export function GetSingleProductHooks(id: any, selectedPage: any, perPage: any) {
    interface SingleProductProps {
        _id: string,
        name: string,
        description: string,
        price: number,
        image_url: string,
        quantity: number,
        category: string

    }
    const [singleProduct, setSingleProduct] = useState<SingleProductProps>({
        _id: '',
        name: '',
        description: '',
        price: 0,
        image_url: '',
        quantity: 0,
        category: ''

    });
    useEffect(() => {

        const fetchSingleProduct = async () => {
            try {
                const response = await apiService.getSingleProduct(id);
                setSingleProduct(response)
            }
            catch (error) {
                return error;
            }
        }

        fetchSingleProduct();

    }, [selectedPage, perPage])


    return { singleProduct }
}





export function SuggestedProductHooks(selectedPage: any, id: any, categoryObject: any, singleProduct: any) {

    const [suggestedProduct, setSuggestedProduct] = useState([]);
    const [suggestedTotalPages, setSuggestedTotalPages] = useState(0)
    useEffect(() => {

        async function getSuggestedProducts() {
            try {
                console.log('mycat obj', categoryObject)
                if (categoryObject.category) {
                    const response = await apiService.getSuggestedProducts(selectedPage, id, categoryObject);
                    //  console.log('This is my respo', response)
                    setSuggestedProduct(response.data)
                    setSuggestedTotalPages(response.totalpages)
                }
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getSuggestedProducts();

    }, [singleProduct])

    return { suggestedProduct, suggestedTotalPages };
}




export function RelatedProductsHooks(selectedPage: any, id: any, categoryObject: any, singleProduct: any) {

    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function getRelatedProducts() {
            try {

                console.log('mycat obj', categoryObject)
                if (categoryObject.category) {
                    const response = await apiService.getRelatedProducts(selectedPage, id, categoryObject);
                    //     console.log('This is my respo', response)
                    setProducts(response.data)
                    setTotalPages(response.totalpages)
                }
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getRelatedProducts();

    }, [singleProduct])

    return { products, totalPages };
}





export function MultipleSuggestedProductsHooks(selectedPage: any, formData: any) {
    console.log('pushed selected', selectedPage)
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function getRelatedProducts() {
            try {

                console.log('mycat obj', formData)
                if (formData) {
                    const response = await apiService.getMultipleSuggestedProducts(selectedPage, formData);
                    //   console.log('This is my respo', response)
                    setProducts(response.data)
                    setTotalPages(response.totalpages)
                }
            }
            catch (error: any) {
                console.log('This is my error', error.message)
            }
        }
        getRelatedProducts();

    }, [selectedPage])

    return { products, totalPages };
}
