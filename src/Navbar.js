import React from 'react'
import logo from '../src/Assets/Imgs/NeonClub.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* <div className='d-block d-lg-none'>
                    <img src={logo} width='100' alt="LOGO" />
                </div> */}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className='mx-auto ms-lg-0 d-inline-flex'>
                    <img src={logo} width='100' alt="LOGO" className="mx-auto d-block" style={{ borderRadius: '25px' }} />
                    <p className="tc-blue fw-bold fs30 align-self-center mb-0 ms-3 ms-md-4">NeonClub.pk</p>
                </div>
                {/* <div className="collapse navbar-collapse" id="navbarText">
                    <div className="d-md-flex justify-content-between">
                        <div className="px-3">
                            <p className="fs22 fw-bold text-black mb-0" href="#">HOME</p>
                        </div>
                        <div className="px-3">
                            <p className="fs22 fw-bold text-black mb-0" aria-current="page" href="#">DESIGN YOUR OWN SIGN</p>
                        </div>
                        <div className="px-3">
                            <p className="fs22 fw-bold text-black mb-0" href="#">UPLOAD AN IMAGE</p>
                        </div>
                        <div className='d-none d-lg-block mx-3'>
                            <img src={logo} width='100' alt="LOGO" />
                        </div>
                        <div className="px-3">
                            <p className="fs22 fw-bold text-black mb-0" href="#">BUSINESS LOGOS</p>
                        </div>
                        <div className="px-3">
                            <p className="fs22 fw-bold text-black mb-0" href="#">OUTDOOR SIGNS</p>
                        </div>
                        <div className="px-3">
                            <p className="fs22 fw-bold text-black mb-0" href="#">SHOP</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar