import React from 'react';
import './homeLayout.scss';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';
import MultiCarousel from '@/components/MultiCarousel/MultiCarousel';

export default function HomeLayout() {
    const { t } = useTranslation()
    return (
        <>
            <div className='main-banner'>
                <div className='left-banner'>
                    <h1><b>Small
                        Company,
                        <br />
                        Big
                        Business.</b><br /></h1>
                    <p>When running a big business, the number or size of people, goods, and money doesn't matter.
                        I want to prove that even a small team can make the world a better place and move society.
                        Our vision is "Small Company, Big Business."</p>
                </div>
                <div className='right-banner'>
                    <img src="https://www.muji.com/vn/img/panel/WebBannerPC_VNWomenDay.jpg" alt="" />
                </div>
            </div>
            {/* <div className='guide-lading'>
                <div className="brew-guide">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fpic-01.avif?alt=media&token=5698d7d7-0581-4059-a91f-d45741214bfc" alt="" />
                    <h3>AeroPress</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fpic-02.avif?alt=media&token=47785f3b-d358-4fd7-8fb1-a88cda4f23e6" alt="" />
                    <h3>Bee House</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fpic-03.avif?alt=media&token=ca851d0d-3c1d-49a4-ba2c-944ab75144ab" alt="" />
                    <h3>Chemex</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fpic-04.avif?alt=media&token=b942da77-458f-422a-a272-c19128ba6613" alt="" />
                    <h3>Hario V60</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fpic-05.avif?alt=media&token=e3e5b88b-bd22-4a9e-99d7-1ae09393ace5" alt="" />
                    <h3>Kalita Wave</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Fbanner%2Fpic-06.avif?alt=media&token=91496b96-4b4a-4de8-bc60-47102582076c" alt="" />
                    <h3>Vaxcuum Pot</h3>
                </div>
            </div> */}
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
            <div>
                <MultiCarousel />
            </div>
        </>
    )
}
