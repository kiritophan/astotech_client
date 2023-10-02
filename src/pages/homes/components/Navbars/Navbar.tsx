import './navbar.scss';
import { useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useRef, useState, useContext } from "react";
import { Carousel } from "antd";
import DropdownLogout from '@components/Dropdowns/DropdownLogout';
import ToggleLanguage from '@/components/ToggleLanguage/ToggleLanguage';
import { useTranslation } from 'react-i18next';
import { RootContext } from '@/App';
import { useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import Cart from '@/components/Cart/Cart';
import Search from '@/components/Search/Search';


export default function Navbar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);



    const [banners, setBanners] = useState([
        {
            id: 1,
            title: t("freeship")
        },
        {
            id: 2,
            title: t("sale")
        },
    ]);

    return (
        <nav>
            <div className='carousel-container'>
                {/* <Carousel
                    autoplay
                    autoplaySpeed={2000}
                    effect={"fade"}
                    dots={false}
                    dotPosition={"bottom"}
                >
                    {banners.map((banner, index) => (
                        <div className="items" key={banner.id + index}>
                            <p className='title'>{banner.title}</p>
                        </div>
                    ))}
                </Carousel> */}
                <div>
                    <ToggleLanguage />
                </div>
            </div>
            <div className='nav-container'>
                <div className='logo' onClick={() => navigate("/")}>
                    <img src="https://storage.googleapis.com/studio-design-assets/projects/nBW2XkKqvG/s-145x25_db176bb4-a6ed-4bc4-9e26-f077c5b98978.svg" alt="" />
                </div>
                <div className='middle-nav'>
                    <span onClick={() => navigate("/allproduct")}>{t("shop")}</span>
                    <span>{t("Subscribe")}</span>
                    <span>{t("ColdBrew")}</span>
                    <span>{t("BrewGuides")}</span>
                    <span>{t("Locations")}</span>
                    <span>{t("Wholesale")}</span>
                </div>
                {/* <div className='right-nav'>
                    <span className='right-nav-icon'><Search /></span>
                    <span className='right-nav-icon'>
                        <DropdownLogout />
                    </span>
                    <span className='right-nav-icon cart-icon'>
                        <span className="material-symbols-outlined" onClick={() => navigate('/cart')}>
                            shopping_cart
                        </span>
                        <span style={{ transform: "translate(3px, -10px)" }}>
                            1
                        </span>
                    </span>


                </div> */}
                <div className='nav__bottom__right'>
                    <Search />
                    <div className='nav__bottom__right__icon'>
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <Cart />
                    <DropdownLogout />
                </div>
            </div>
        </nav>
    )
}
