import { useNavigate } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <div className='footer-top'>
                <div className="footer-left">
                    <p>Smart Camp Co., Ltd.</p>
                    <span>〒108-0073</span>
                    <span>3-13-16 Mita, Minato-ku, Tokyo</span>
                    <span>Mita 43MT Building 13th and 14th floors (Reception 13th floor)</span>
                </div>
                <div className="footer-middle">
                    <div className='footer-box'>
                        <p>ABOUT US</p>
                        <span>Software Development</span>
                        <span>Web Development</span>
                        <span>Mobile App Development</span>
                        <span>Managed Services</span>
                        <span>Quality Assurance & Testing</span>
                    </div>
                    <div className='footer-box'>
                        <p>INDUSTRIES</p>
                        <span>Retail & eCommerce</span>
                        <span>Finance (BFSI)</span>
                        <span>Media & Entertainment</span>
                        <span>Automotive</span>
                        <span>Public Sector</span>
                    </div>
                    <div className='footer-box'>
                        <p>RESOURCE CENTER</p>
                        <span>Customer Stories</span>
                        <span>Customer testimonials</span>
                        <span>Ebook</span>
                        <span>Blog</span>
                        <span>Newsroom</span>
                    </div>
                </div>
                {/* <div className="footer-right">
                    <p>GET SECRET NOTES</p>
                    <input type="text" placeholder='Enter your email' />
                </div> */}
            </div>
            <div className="footer-bottom">
                <p>
                    Copyright © 2023 Rikkeisoft Corporation. All rights reserved.
                </p>
                <div className='social-media-icon'>
                    <a href='https://www.facebook.com/JapanLifeVietNamWife'><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/vietnam_wife/'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.instagram.com/vietnam_wife/'><i className="fa-brands fa-twitter"></i></a>
                    <a href='https://www.instagram.com/vietnam_wife/'><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </footer >
    )
}
