
import { axiosInstance } from "../Interceptor";
export class Service {

    baseUrl = 'http://localhost:3001';
    token = localStorage.getItem("token");

    allShops = async (selectedPage: number, perPage: any) => {
        const response = fetch(`${this.baseUrl}/shop/shop?page=${selectedPage}&perPage=${perPage}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            }
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }


    createCustomer = async (customerInfo: any) => {
        const response = fetch(`${this.baseUrl}/auth/register-customer`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerInfo)
        });

        if (!(await response).ok) {
            // throw new Error('Sorry an error occured')
            return (await response).json();
        }

        const data = await (await response).json();
        return data;
    }



    loginCustomer = async (loginInfo: any) => {
        const response = fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });

        if (!(await response).ok) {
            // throw new Error('Sorry an error occured')
            return (await response).json();
        }

        const data = await (await response).json();
        return data;
    }
    //authenticated routes
    getCustomerInfo = async () => {
        try {
            const response = await axiosInstance().get("/auth/customer-info");
            if (response.status === 200) {
                return response.data;
            }
        }
        catch (error) {
            return error;
        }
    }

    ShopsAndCategory = async (shopId: any, perPage: any) => {
        const response = fetch(`${this.baseUrl}/shop/product-and-categories?shopId=${shopId}&perPage=${perPage}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            }
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }


    allProducts = async (selectedPage: number, perPage: any) => {
        const response = fetch(`${this.baseUrl}/products/product?page=${selectedPage}&perPage=${perPage}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            }
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }




    getRelatedProducts = async (selectedPage: number, selectedId: any, formData: any) => {
        console.log('This is the id i chose', selectedId, formData)
        const response = fetch(`${this.baseUrl}/products/related-product/${selectedId}?page=${selectedPage}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }


    getMultipleSuggestedProducts = async (selectedPage: number, formData: any) => {
        console.log('This is the id i chose', formData)
        const response = fetch(`${this.baseUrl}/products/suggested-multiple-product?page=${selectedPage}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }

    getSuggestedProducts = async (selectedPage: number, selectedId: any, formData: any) => {
        console.log('This is the id i chose', selectedId, formData)
        const response = fetch(`${this.baseUrl}/products/suggested-product/${selectedId}?page=${selectedPage}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }


    getProductsBasedOnCategory = async (category: any, selectedPage: number, shop: any) => {
        console.log('get the shop', shop)
        const response = fetch(`${this.baseUrl}/products/category-based-product?category=${category}&page=${selectedPage}&shop=${shop}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }


    getAllProductCategories = async () => {
        const response = fetch(`${this.baseUrl}/category/category`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE5ZDYwZTdhODhmYzk5NWNiNWExMjUiLCJpYXQiOjE3MTMwMzU4MjMsImV4cCI6MTcxMzA1MzgyM30.0z72esjcD1mtk-G69z2GJL2rq0ypJ2jPrFDfitbrTFM`,
                'Content-Type': 'application/json'
            },
        });

        if (!(await response).ok) {
            throw new Error('Sorry an error occured')
        }

        const data = await (await response).json();
        return data;
    }


    getSingleProduct = async (id: any) => {
        try {
            const response = await fetch(`${this.baseUrl}/products/product/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer 333333333',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Sorry an error occured');
            }

            const data = await response.json();
            return data;
        }
        catch (error) {
            return error;
        }
    }


    PlaceOrder = async (order: any) => {
        const response = await axiosInstance().post("/orders/orders", order);
        console.log('my response', response)
        return response.data;
    }

    getOrderInformation =async (transaction_id : any)=> {
        
        try {
            const response =await axiosInstance().get(`orders/get-order-info?transaction_id=${transaction_id}`);
            return response.data;
        }
        catch(error){
            return error;
        }
    }

}



