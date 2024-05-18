import React from 'react'
import { Searchsvg } from './Icons'
import LogoImg from '../assets/images/svg/atlantic-logo.svg'

function Nav() {
    return (
        <div className='hero_bg_img min_vh_100 h_773 d-flex flex-column bg_no_repeat bg_cover bg_pos_center'>
            <nav className='nav_bg_colr'>
                <div className='custom_container max_w_1380'>
                    <div className='d-flex align-items-center justify-content-between h_90'>
                        <div className='d-xxl-flex d-none align-items-center justify-content-between gap_55'>
                            <div><a href=""><img src={LogoImg} alt="LogoImg" /></a></div>
                            <ul className='d-flex align-items-center gap_28 mb-0 ps-0 menuList'>
                                <li><a href="#about" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80 nav_links'>About Us</a></li>
                                <li class="dropdown cursor_pointer">
                                    <li onclick="openNav()" class="d-flex align-items-center nav_link">
                                        <li className='mb-0'><a href="" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80 nav_links'>Categories</a></li>
                                        <svg className='icon' width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1479_1536)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M17.2931 8.29308C17.3853 8.19757 17.4957 8.12139 17.6177 8.06898C17.7397 8.01657 17.8709 7.98898 18.0037 7.98783C18.1365 7.98668 18.2681 8.01198 18.391 8.06226C18.5139 8.11254 18.6256 8.18679 18.7195 8.28069C18.8134 8.37458 18.8876 8.48623 18.9379 8.60913C18.9882 8.73202 19.0135 8.8637 19.0123 8.99648C19.0112 9.12926 18.9836 9.26048 18.9312 9.38249C18.8788 9.50449 18.8026 9.61483 18.7071 9.70708L12.7071 15.7071C12.5248 15.8893 12.2793 15.9942 12.0216 15.9998C11.7639 16.0054 11.514 15.9113 11.3241 15.7371L5.32407 10.2371C5.12861 10.0578 5.01237 9.8082 5.00093 9.54321C4.99527 9.41201 5.0155 9.28097 5.06048 9.15758C5.10546 9.03419 5.1743 8.92087 5.26307 8.82408C5.35185 8.7273 5.45881 8.64895 5.57787 8.5935C5.69692 8.53806 5.82573 8.5066 5.95694 8.50094C6.22193 8.4895 6.48061 8.58379 6.67607 8.76308L11.9701 13.6161L17.2931 8.29308Z"
                                                    fill="#848895" />
                                            </g>
                                        </svg>
                                    </li>
                                    <li class="dropdown-content">
                                        <a href="#" class="ff_helevetica fw-normal text-15 lh-24">Link 1</a>
                                        <a href="#" class="ff_helevetica fw-normal text-15 lh-24">Link 2</a>
                                    </li>
                                </li>
                                <li><a href="#services" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80 nav_links'>Services</a></li>
                                <li><a href="#testimonials" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80 nav_links'> Testimonials</a></li>
                                <li><a href="#blogs" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80 nav_links'>Blogs</a></li>
                            </ul>
                        </div>
                        <div className='d-xxl-none d-block'><a href=""><img src={LogoImg} alt="LogoImg" /></a></div>
                        <input type='checkbox' id='menuIcon' hidden />
                        <ul className='d-flex align-items-center gap_28 mb-0 ps-0 menuList d-xxl-none'>
                            <li><a href="#about" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80'>About Us</a></li>
                            <li class="dropdown cursor_pointer">
                                <li onclick="openNav()" class="d-flex align-items-center">
                                    <li className='mb-0'><a href="" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80'>Categories</a></li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1479_1536)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M17.2931 8.29308C17.3853 8.19757 17.4957 8.12139 17.6177 8.06898C17.7397 8.01657 17.8709 7.98898 18.0037 7.98783C18.1365 7.98668 18.2681 8.01198 18.391 8.06226C18.5139 8.11254 18.6256 8.18679 18.7195 8.28069C18.8134 8.37458 18.8876 8.48623 18.9379 8.60913C18.9882 8.73202 19.0135 8.8637 19.0123 8.99648C19.0112 9.12926 18.9836 9.26048 18.9312 9.38249C18.8788 9.50449 18.8026 9.61483 18.7071 9.70708L12.7071 15.7071C12.5248 15.8893 12.2793 15.9942 12.0216 15.9998C11.7639 16.0054 11.514 15.9113 11.3241 15.7371L5.32407 10.2371C5.12861 10.0578 5.01237 9.8082 5.00093 9.54321C4.99527 9.41201 5.0155 9.28097 5.06048 9.15758C5.10546 9.03419 5.1743 8.92087 5.26307 8.82408C5.35185 8.7273 5.45881 8.64895 5.57787 8.5935C5.69692 8.53806 5.82573 8.5066 5.95694 8.50094C6.22193 8.4895 6.48061 8.58379 6.67607 8.76308L11.9701 13.6161L17.2931 8.29308Z"
                                                fill="#848895" />
                                        </g>
                                    </svg>
                                </li>
                                <li class="dropdown-content">
                                    <a href="#" class="ff_helevetica fw-normal text-15 lh-24">Link 1</a>
                                    <a href="#" class="ff_helevetica fw-normal text-15 lh-24">Link 2</a>
                                </li>
                            </li>
                            <li><a href="#services" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80'>Services</a></li>
                            <li><a href="#testimonials" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80'> Testimonials</a></li>
                            <li><a href="#blogs" className='ff_dm fw-normal text_16xs lh_24 color_white opacity_80'>Blogs</a></li>
                            <button className='ff_chivo fw-900 text_16xs lh_24 color_white text-uppercase comn_btn text-nowrap'>Get in touch</button>
                        </ul>
                        <label for='menuIcon' className='d-xxl-none d-flex'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <div className='d-xxl-flex align-items-center gap-4 d-none'>
                            <div className='d-flex align-items-center gap-3 input_modification'>
                                <span>
                                    <Searchsvg />
                                </span>
                                <input type="search" placeholder='Search' className='ff_dm fw-normal text_17sm lh_22 bg-transparent border_none outline_none w-100' />
                            </div>
                            <button className='ff_chivo fw-900 text_16xs lh_24 color_white text-uppercase comn_btn text-nowrap'>Get in touch</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='flex-grow-1 d-flex align-items-end'>
                <div className='max_w_1140 w-100 custom_container'>
                    <div className="row">
                        <div className="col-sm-8">
                            <h1 className='ff_pop fw-800 text_60xxl lh_lg_72 lh_sm_50 lh_40 max_w_924 color_white text-uppercase'>Optimising your
                                Vehicle <span className='fw-normal style_italic'>Performance</span></h1>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-xl-end align-items-end mt-sm-0 mt-2">
                            <button className='ff_chivo fw-900 text_16xs lh_24 color_white text-uppercase comn_btn text-nowrap'>explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav