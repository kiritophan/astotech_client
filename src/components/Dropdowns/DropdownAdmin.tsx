import React from 'react';
import './dropdown.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function DropdownLogout() {
    const navigate = useNavigate();
    const handleLogout = () => {
        if (window.confirm("Bạn có muốn đăng xuất không?")) {
            localStorage.removeItem("token");
            navigate("/login");
        }
    };
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle account-btn"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fa-solid fa-user"></i>
                <span className='icon_title'>Hello&ensp;<span className='userName'></span></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item">
                        Admin
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={() => {
                        handleLogout()
                    }}>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}
