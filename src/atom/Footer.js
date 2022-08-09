import React from 'react'
import facebookLogo from '../Assets/Imgs/facebook-logo.png'
import instagramLogo from '../Assets/Imgs/instagram-logo.png'

function Footer() {
    return (
        <footer className='footer-middle my-auto d-flex flex-container'>
            <div className='row container mx-auto gy-1'>
                <div className='col-6 col-md-4 text-white'>
                    About us
                </div>
                <div className='col-6 col-md-4 text-white'>
                    FAQ
                </div>
                <div className='col-6 col-md-4 text-white'>
                    Contact info
                </div>
                <div className='col-6 col-md-4 text-white'>
                    Contact us
                </div>
                <div className='col-6 col-md-4 text-white'>
                    Privacy
                </div>
                <div className='col-6 col-md-4 text-white'>
                    info@neonclub.com
                </div>
                <div className='col-6 col-md-4 text-white'>
                    Advanced search
                </div>
                <div className='col-6 col-md-4 text-white'>
                    Returns Policy
                </div>
                <div className='col-6 col-md-4 text-white'>
                    <div className='d-inline-flex'>
                        <img src={facebookLogo} alt="" />
                        <img src={instagramLogo} alt="" className='ms-2' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer