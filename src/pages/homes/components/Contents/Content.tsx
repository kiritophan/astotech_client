import React, { useEffect, useState } from 'react';
import './content.scss';
// import MultiCarousel from '@/components/MultiCarousel/MultiCarousel';
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import api from '@/services/apis';

export default function Content() {
    // const navigate = useNavigate();
    // const { t } = useTranslation()
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
        <>
            <h2>Our Products</h2>
            <p>
                Technicut are experts in the design and manufacture of high quality, high performance cutting tool solutions for the optimised machining of all aerospace materials.
                <br /> Technicut excels in the design and manufacture of optimised cutting solutions for the complete array of aerospace materials.
                <br />Our continual drive to deliver market leading innovations has led to our development of bespoke material substrates, tooling geometries & coatings to provide optimised production performance in all aerospace applications.
            </p>
            <div className="row isotope-grid">
                {products?.map((item: any) => (
                    <div className='guide-lading col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women'>
                        <div className="brew-guide">
                            <img src={item.options[0].pictures[0].icon} alt="" />
                            {/* <p> {item.options[0].price} </p> */}
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className='featured-products-container'>
                <h2>Featured Products</h2>
                <div className='featured-products'>
                    <div className='product'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fproduct-01.webp?alt=media&token=965263a5-09cd-4b70-ba04-8e598fdd092c" alt="" />
                        <div className='product-desc'>
                            <p>16$</p>
                            <div className='product-quantity'>
                                <button>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                                <span>0</span>
                                <button>
                                    <span className="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button className='add-to-cart-button'>Add to cart</button>
                    </div>
                    <div className='product'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fproduct-02.webp?alt=media&token=6fe14414-36fd-4482-a00c-1c725684e498" alt="" />
                        <div className='product-desc'>
                            <p>16$</p>
                            <div className='product-quantity'>
                                <button>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                                <span>0</span>
                                <button>
                                    <span className="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button className='add-to-cart-button'>Add to cart</button>
                    </div>
                    <div className='product'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fproduct-03.webp?alt=media&token=202bb101-5918-42b3-848d-4e0792e727bd" alt="" />
                        <div className='product-desc'>
                            <p>16$</p>
                            <div className='product-quantity'>
                                <button>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                                <span>0</span>
                                <button>
                                    <span className="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button className='add-to-cart-button'>Add to cart</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}
