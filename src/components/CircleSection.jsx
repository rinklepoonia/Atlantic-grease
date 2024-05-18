import React from 'react'
import Wimg from '../assets/images/svg/w.svg'
import miniImg from '../assets/images/svg/mini-footer.svg'
import CatImg from '../assets/images/svg/cat-footer.svg'
import NinjaWeapn from '../assets/images/svg/ninja-weopn-footer.svg'

function CircleSection() {
    return (
        <div id='about' className='circle_bg_img bg_no_repeat circle_bg_cover bg_pos_center position-relative h_lg_1344 h_950 h_788'>
            <div className='d-lg-block d-none'>
                <div className='position-absolute posi_circle_1'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={Wimg} alt="Wimg" />
                    </div>
                </div>
                <div className='position-absolute posi_circle_2'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={Wimg} alt="Wimg" />
                    </div>
                </div>
                <div className='position-absolute posi_circle_3'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={miniImg} alt="miniImg" />
                    </div>
                </div>
                <div className='position-absolute posi_circle_4'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={CatImg} alt="CatImg" />
                    </div>
                </div>
                <div className='position-absolute posi_circle_5weapn'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={NinjaWeapn} alt="NinjaWeapn" />
                    </div>
                </div>
                <div className='position-absolute posi_circle_6mini'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={miniImg} alt="miniImg" />
                    </div>
                </div>
                <div className='position-absolute posi_circle_7wimg'>
                    <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                        <img src={Wimg} alt="Wimg" />
                    </div>
                </div>
            </div>
            <div className='d-lg-none d-block'>
                <div className='custom_container max_w_1140 transform_translate'>
                    <div className="row">
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={Wimg} alt="Wimg" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={miniImg} alt="miniImg" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={Wimg} alt="Wimg" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={CatImg} alt="CatImg" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={NinjaWeapn} alt="NinjaWeapn" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={Wimg} alt="Wimg" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-6 d-flex justify-content-center mb-4">
                            <div className='IconBox d-flex justify-content-center align-items-center circle_borderRadius'>
                                <img src={miniImg} alt="miniImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tranform_text'>
                <div className='d-flex justify-content-center'>
                    <h5 className='max_w_264 ff_pop fw-800 text_52xl lh_62 color_white max_w_578 text-center mb_lg_75 mb_30 text-uppercase'>Our <span href="" className='bttn ff_pop fw-normal style_italic ff_pop fw-800 text_52xl lh_62 color_white transform_skew d-inline-block px-2'><span>Numbers</span></span> Say About Us</h5>
                </div>
                <div className="max_w_1140 custom_container">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <p className='ff_pop fw-800 text_80xxxl lh_lg_96 lh_sm_50 lh_21 color_white mb-0 text-center number_hover'>20k+</p>
                            <p className='ff_dm fw-medium text_16xs lh_24 color_white opacity_80 text-center'>Happy customers</p>
                        </div>
                        <div className="col-lg-3 col-6">
                            <p className='ff_pop fw-800 text_80xxxl lh_lg_96 lh_sm_50 lh_21 color_white mb-0 text-center number_hover'>35%</p>
                            <p className='ff_dm fw-medium text_16xs lh_24 color_white opacity_80 text-center'>Export Volume</p>
                        </div>
                        <div className="col-lg-3 col-6">
                            <p className='ff_pop fw-800 text_80xxxl lh_lg_96 lh_sm_50 lh_21 color_white mb-0 text-center number_hover'>20%</p>
                            <p className='ff_dm fw-medium text_16xs lh_24 color_white opacity_80 text-center'>Market Share</p>
                        </div>
                        <div className="col-lg-3 col-6">
                            <p className='ff_pop fw-800 text_80xxxl lh_lg_96 lh_sm_50 lh_21 color_white mb-0 text-center number_hover'>65+</p>
                            <p className='ff_dm fw-medium text_16xs lh_24 color_white opacity_80 text-center'>Country</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='circleSection_grident position-absolute position_grident_circle d-sm-block d-none'></div>
        </div>
    )
}

export default CircleSection