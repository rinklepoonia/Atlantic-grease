import React from 'react'
import BluefloerImg from '../assets/images/png/approvel-section-img.png'

function ApprovlesSection() {
    return (
        <div id='testimonials' className='position-relative pb_lg_78 pb_10 pt-xl-0 pt-lg-4'>
            <div className='approvals_grident pos_blueGrident d-sm-block d-none'></div>
            <div className='max_w_1140 custom_container'>
                <h3 className='ff_pop fw-800 text_52xl lh_62 color_white text-uppercase mb_lg_53 mb_20'>OEM  <a href=""
                    className='fw-normal ff_pop text_52xl lh_62 color_white style_italic bg_blue d-inline-block transform_skew p-2 btnn2'><span>Approvals</span></a></h3>
            </div>
            <div className='max_w_1536 w-100 custom_container'>
                <div className="row flex-xl-row flex-column-reverse">
                    <div className="col-xl-8 col-12 approve_bg_img bg_no_repeat bg_cover h_417 py_lg_59_53 p_sm_30 p_20">
                        <div className='ml_150 position-relative z-1 d-flex flex-column justify_content_center align_items_center'>
                            <p className='ff_dm fw-normal text_24_2md lh_lg_36 lh_26 max_w_567 mb-lg-3 mb-sm-2 mb-1'>At Atlantic Grease and Lubricants, we have <span className='fw-bold'>secured approvals</span> leading automobile manufacturers. Thus, we demonstrate our commitment to delivering the best possible outcomes to our customers.</p>
                            <p className='ff_dm fw-normal text_24_2md lh_lg_36 lh_26 max_w_567'>Recognising the <span className='fw-bold'>significance of quality</span> to our valued customers, we uphold the utmost standards of excellence in all our endeavors.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-xl-4 col-12 d-flex justify_content_center">
                        <img className='blueImg_pos w_100 max_w_sm _502 max_w_400' src={BluefloerImg} alt="BluefloerImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovlesSection