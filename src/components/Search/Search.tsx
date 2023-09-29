// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./search.scss"
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { StoreType } from '@/stores';
// import { useSelector } from 'react-redux';


// // Define a union type for the allowed placement values
// type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

// interface OffCanvasExampleProps {
//     name: string;
//     placement: OffcanvasPlacement | undefined; // Use the defined union type
// }


// function OffCanvasExample({ name, placement }: OffCanvasExampleProps) {
//     const [show, setShow] = useState(false);
//     const navigate = useNavigate();

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [searchStatus, setSearchStatus] = useState(false);



//     return (
//         <>
//             <button onClick={handleShow}>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//             </button>
//             <Offcanvas show={show} onHide={handleClose} placement={placement}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title className='search_top'>
//                         <div className='search_input'>
//                             <i style={{ padding: "0 15px 0 0" }} className="fa-solid fa-magnifying-glass"></i>
//                             <input className='inputSearch' type="text" placeholder='what do you need ?' />
//                         </div> </Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body className='search_body'>
//                     <div className='search_categories'>
//                         <h4>List Categories</h4>
//                         category: any, index: number <p key={Math.random() * Date.now()} onClick={() => {

//                             handleClose()
//                         }}></p>
//                     </div>
//                     <div className='container_search'>

//                         <div className='search_item' >
//                             <img alt="" onClick={() => {

//                                 handleClose()
//                             }} />
//                             <div className='name_item_search'></div>
//                         </div>

//                     </div>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }

// function Search() {
//     return (
//         <>
//             <OffCanvasExample placement="top" name="top" />
//         </>
//     );
// }

// export default Search;



import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./search.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreType } from '@/stores';
import { useSelector } from 'react-redux';


type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

interface OffCanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined;
}


function OffCanvasExample({ name, placement }: OffCanvasExampleProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><input className='inputSearch' type="text" placeholder='what do you need ?' /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
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
