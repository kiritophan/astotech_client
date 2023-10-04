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
            <h2>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</h2>
            <p>
                Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB.adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to supportcreators. Improve their game. Their lives. And change the world.

                <br /> adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.
                <br />adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages.
            </p>
            <div className="row isotope-grid">
                {products?.map((item: any) => (
                    <div className='guide-lading col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women'>
                        <div className="brew-guide">
                            <img src={item.options[0].pictures[0].icon} alt="" onClick={() => navigate(`/product-detail/${item.id}`)} />
                            {/* <p> {item.options[0].price} </p> */}
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {/* {products?.map((item: any) => (
                <div className="card row isotope-grid" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={item.options[0].pictures[0].icon} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          {item.name}
                        </a>
                    </div>
                </div>
            ))} */}

        </>
    )
}
