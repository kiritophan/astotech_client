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
