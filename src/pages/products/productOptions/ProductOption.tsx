import React, { useEffect, useState } from 'react';
import './product.scss';
import api from '@/services/apis';
import { useNavigate, useParams } from 'react-router-dom';




export default function ProductOption() {

    const { id } = useParams();

    console.log("id", id);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.productApi.findAll()
            .then(res => {
                if (res.status == 200) {
                    console.log("res", res.data.data)
                    setProducts(res.data.data)
                }
            })
    }, [])

    useEffect(() => {
        api.categoryApi.findAll()
            .then(res => {
                if (res.status == 200) {
                    console.log("rescate", res)
                    setCategories(res.data.data)
                }
            })
    }, [])
    console.log("products", products)
    return (
        <div>
            <div className="bg0 m-t-23 p-b-140">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button
                                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                                data-filter="*"
                                onClick={() => navigate('/allproduct')}
                            >
                                All Products
                            </button>
                            {categories.map((item: any) => (
                                <button
                                    className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                                    data-filter=".women"
                                    onClick={() => navigate(`/category/${item.id}`)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        <div className="dis-none panel-search w-full p-t-10 p-b-15">
                            <div className="bor8 dis-flex p-l-15">
                                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                    <i className="zmdi zmdi-search" />
                                </button>
                                <input
                                    className="mtext-107 cl2 size-114 plh2 p-r-15"
                                    type="text"
                                    name="search-product"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row isotope-grid">
                        {products?.map((item: any) => (<div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">

                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src={item.options[0].pictures[0].icon} alt="IMG-PRODUCT" />
                                    <a
                                        onClick={() => navigate(`/product-detail/${item.id}`)}
                                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Quick View
                                    </a>
                                </div>
                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a
                                            href="product-detail.html"
                                            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                        >
                                            {item.name}

                                        </a>
                                        <span className="stext-105 cl3">{item.options[0].price}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        ))}

                    </div>

                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a
                            href="#"
                            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                            Load More
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}


