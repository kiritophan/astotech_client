import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./search.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreType } from '@/stores';
import { useSelector } from 'react-redux';
import api from '@/services/apis';

type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

interface OffCanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined;
}

interface Product {
    product_options: any;
    id: string;
    name: string;
    avatar: string;
    price: number;
    des: string;
    categoryId: string;
    productPictures: {
        id: string;
        path: string;
    }[]
}

function OffCanvasExample({ name, placement }: OffCanvasExampleProps) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [searchStatus, setSearchStatus] = useState(false);
    const [searchData, setSearchData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    // const [searchValue, setSearchValue] = useState('');

    function handleDeleteInputField() {
        (document.querySelector(".inputSearch") as HTMLInputElement).value = "";
        setSearchData([]);
    }

    // const categoryStore = useSelector((store: StoreType) => store.categoryStore);

    let timeOut: any;
    function search(e: any) {
        setLoading(true);
        // console.log("search", e.target.value);
        clearTimeout(timeOut);
        if (e.target.value == "") {
            setSearchData([])
            setLoading(false)
            return;
        };
        timeOut = setTimeout(async () => {
            setSearchStatus(true)
            try {
                if (searchStatus) {
                    return
                }
                let result = await api.productApi.search(e.target.value);
                if (result.status == 200) {
                    setTimeout(() => {
                        setSearchStatus(false);
                        // console.log("res", result.data.data);
                        setSearchData(result.data.data);
                        setLoading(false);

                    }, 1500)

                } else {
                    setSearchStatus(false);
                    setLoading(false)
                }
            } catch (err) {
                console.log("loi call api search");
            }
        }, 600)
    }
    console.log("searchdata", searchData);


    return (
        <>
            <button onClick={handleShow}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header closeButton className='Search__top'>
                    <Offcanvas.Title >
                        <input className='inputSearch' type="text"
                            onChange={(e: any) => {
                                // setSearchValue(e.target.value)
                                search(e)
                            }} placeholder='what do you need ?' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='search_content'>
                    <div>Something Search</div>
                    <div className='search_results'>
                        {loading ? <div className="d-flex justify-content-center loading-wrapper">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : searchData?.map((product: any, index) => (
                            <div className='search_results_product' key={Math.random() * Date.now()}>
                                <img src={product.options[0].pictures[0].icon} alt="" onClick={() => {
                                    navigate(`/product-detail/${product.id}`)
                                    handleClose()
                                }} />

                                <h5 className='search__results__product__name'>{product.name}</h5>
                                <p>${product.price}</p>
                            </div>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Search() {
    return (
        <>
            <OffCanvasExample placement="top" name="top" />
        </>
    );
}

export default Search;
