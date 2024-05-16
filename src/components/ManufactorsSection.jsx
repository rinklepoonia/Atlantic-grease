import React from 'react'
import ManufactorImg from '../assets/images/png/manufactor-img.png'

function ManufactorsSection() {
    return (
        <div className='py_184_125 position-relative'>
            <div className='manufactore_grident pos_grident_manufactor position-absolute d-sm-block d-none'></div>
            <div className='custom_container'>
                <div className='d-flex justify-content-xl-end justify-content-center'>
                    <h2 className='ff_pop fw-800 text_52xl lh_lg_52 lh_sm_45 lh_36 color_white max_w_745 text-uppercase'>Pioneers of <span className='ff_pop style_italic fw-normal red_bg_img bg_no_repeat bg_contain'> Lubricants </span>
                        & Grease Manufacturing</h2>
                </div>
                <div className="row just">
                    <div className="col-xl-5 d-flex justify_content_center">
                        <img className='position-relative w_100 max_w_700 top_-13' src={ManufactorImg} alt="ManufactorImg" />
                    </div>
                    <div className="col-xl-7 white_bg mt-5 py_lg_68 py_sm_30 py_10 h_417">
                        <div className='d-flex justify-content-center'>
                            <p className='ff_dm fw-normal text_24_2md lh_36 max_w_556 color_black z-1 mb-lg-5 mb-md-3 mb-1'>Atlantic Grease & Lubricants is one of the leading manufacturers in the <span className='ff_dm fw-bold'>automotive industry</span> providing high-performance products certified by renowned European and American automobile industries.</p>
                        </div>
                        <div className='justify_content_center d-flex'><button className='ff_chivo fw-900 text_16xs lh_24 color_white ml_127 max_w_184 text-uppercase comn_btn text-nowrap position-relative z-1'>read our story</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManufactorsSection