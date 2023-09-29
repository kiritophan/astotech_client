import React, { useEffect, useState } from 'react';
import './content.scss';
// import MultiCarousel from '@/components/MultiCarousel/MultiCarousel';
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Content() {
    const navigate = useNavigate();
    const { t } = useTranslation()

    return (
        <>
            <h2>Our Products</h2>
            <p>
                Technicut are experts in the design and manufacture of high quality, high performance cutting tool solutions for the optimised machining of all aerospace materials.
                <br /> Technicut excels in the design and manufacture of optimised cutting solutions for the complete array of aerospace materials.
                <br />Our continual drive to deliver market leading innovations has led to our development of bespoke material substrates, tooling geometries & coatings to provide optimised production performance in all aerospace applications.
            </p>

            <div className='guide-lading'>
                <div className="brew-guide">
                    <img src="https://www.technicut.co.uk/images/mega-flute.jpg" alt="" />
                    <p>Multi-fluted endmills for machining Titanium and Nickel alloys.</p>
                    <h3>MEGA-FLUTE®</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://www.technicut.co.uk/images/titan-finisher.jpg" alt="" />
                    <p>Titanium finishing endmill.</p>
                    <h3>TITAN FINISHER</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://www.technicut.co.uk/images/titan-xtreme.jpg" alt="" />
                    <p>Ripper endmill for heavy duty titanium roughing.</p>
                    <h3>TITAN X-TREME</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://www.technicut.co.uk/images/blizzard-finisher.jpg" alt="" />
                    <p>Finishing endmill for aluminium machining.</p>
                    <h3>BLIZZARD FINISHER</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://www.technicut.co.uk/images/blizzard-rougher.jpg" alt="" />
                    <p>Roughing endmill for aluminium machining.</p>
                    <h3>BLIZZARD ROUGHER</h3>
                </div>
                <div className="brew-guide">
                    <img src="https://www.technicut.co.uk/images/sabre-drill.jpg" alt="" />
                    <p>Drills for machining all aerospace materials.</p>
                    <h3>SABRE DRILL</h3>
                </div>
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
