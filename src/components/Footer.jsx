import React from 'react'
import carFooter from '../assets/images/png/footer-img.png'
function Footer() {
    return (
        <div id='blogs' className='pb_lg_262 pb_35 mt_-100 mt_-20'>
            <div className='custom_container max_w_1140'>
                <h6 className='ff_pop fw-800 text_52xl lh_62 text-uppercase color_white text-center mb_lg_83 mb_sm_50 mb_30'>explore our <span className='fw-normal style_italic bg_red d-inline-block transform_skew p-2 parallelogram'>blogs</span></h6>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5 d-flex justify_center">
                        <div className='Footer_card max_w_364 w-100'>
                            <div className='position-relative'>
                                <img className='max_w_364 w-100' src={carFooter} alt="carFooter" />
                                <button className='ff_dm fw-normal text_14xxs lh_21 color_white footerBtn footerBtn_pos position-absolute'>10-March-2024</button>
                            </div>
                            <p className='ff_dm fw-medium text_18md lh_23 color_white max_w_364 mt-3 mb_24'>Industrial Lubricant Oils Ensure Smooth Machine Operation By Minimizing Friction And Wear.</p>
                            <button className='ff_chivo fw-900 text_16xs lh_24 color_white text-uppercase comn_btn text-nowrap '>read more</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-md-0 mb-5 d-flex justify_center">
                        <div className='Footer_card max_w_364 w-100'>
                            <div className='position-relative'>
                                <img className='max_w_364 w-100' src={carFooter} alt="carFooter" />
                                <button className='ff_dm fw-normal text_14xxs lh_21 color_white footerBtn footerBtn_pos position-absolute'>10-March-2024</button>
                            </div>
                            <p className='ff_dm fw-medium text_18md lh_23 color_white max_w_364 mt-3 mb_24'>Industrial Lubricant Oils Ensure Smooth Machine Operation By Minimizing Friction And Wear.</p>
                            <button className='ff_chivo fw-900 text_16xs lh_24 color_white text-uppercase comn_btn text-nowrap '>read more</button>
                        </div>
                    </div>
                    <div className="col-lg-4  d-flex justify_center">
                        <div className='Footer_card max_w_364 w-100'>
                            <div className='position-relative'>
                                <img className='max_w_364 w-100' src={carFooter} alt="carFooter" />
                                <button className='ff_dm fw-normal text_14xxs lh_21 color_white footerBtn footerBtn_pos position-absolute'>10-March-2024</button>
                            </div>
                            <p className='ff_dm fw-medium text_18md lh_23 color_white max_w_364 mt-3 mb_24'>Industrial Lubricant Oils Ensure Smooth Machine Operation By Minimizing Friction And Wear.</p>
                            <button className='ff_chivo fw-900 text_16xs lh_24 color_white text-uppercase comn_btn text-nowrap '>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer