import React from 'react'
import { Textfit } from 'react-textfit'
import AcrylicBackground from '../atom/AcrylicBackground'
import BannerSlider from '../atom/Banner'
import ColorSlction from '../atom/ColorSlction'
import FontSlction from '../atom/FontSlction'
import Options from '../atom/Options'
import PowerAdapt from '../atom/PowerAdapt'
import SelectBackBoard from '../SelectBackBoard'
import videoImg from '../Assets/Imgs/videoimage.jpg'
import OneToFive from '../Assets/Imgs/OneToFive.jpg'
import SignDiagramUSA from '../Assets/Imgs/SignDiagramUSA.png'
import icondesign from '../Assets/Imgs/icondesign.png'
import iconadapter from '../Assets/Imgs/iconadapter.png'
import iconshipping from '../Assets/Imgs/iconshipping.png'
import iconinstall from '../Assets/Imgs/iconinstall.png'
import warranty from '../Assets/Imgs/warranty.jpg'
import iconremote from '../Assets/Imgs/iconremote.png'
import iconpower from '../Assets/Imgs/iconpower.png'
import iconstrong from '../Assets/Imgs/iconstrong.png'
import { Link, useNavigate } from 'react-router-dom'
import Output from '../atom/Output'
import InputText from '../atom/InputText'
import SlctFont from '../atom/SlctFont'
import SlctRemain from '../atom/SlctRemain'
import SlctColor from '../atom/SlctColor'
import Swal from 'sweetalert2'

function HomePage(props) {

    const history = useNavigate()


    const moveLink = (e) => {
        props.UserInput !== 'Type Here' ? history('/design-proof') : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Kindly Insert Data!',
            // footer: '<a href="">Why do I have this issue?</a>'
        })
    }


    return (
        <div className=' pt-5 mx-auto main-bg'>
            <div className='position-fixed bottom_right shadow_ cursorPointer' onClick={moveLink}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40px" height="40px"><path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z" /><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z" /><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z" /><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z" /></svg>
            </div>
            <div className='container row mx-auto'>

                <p className="tc-blue fw-bold fs30 text-center">Create Your Own Custom Neon</p>
                <p className="tc-pink fw-400 fs22 text-center" >Your own creation, handmade from light.</p>

                <div className="row g-3">
                    <div className="col-lg-6 col-xl-4">
                        <div className="Selection_Box py-3">
                            {/* <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                <li className="w-50 selected" onClick={(e) => { props.setSelction('TEXT') }}>
                                    <input
                                        type="radio"
                                        id="SlctTEXT"
                                        name="Selction"
                                        value="TEXT"
                                        defaultChecked={props.Selction == "TEXT"}
                                        onChange={(e) => { props.setSelction('TEXT') }}
                                    />
                                    <label htmlFor="SlctTEXT" className="py-1 fw-bold mb-0">
                                        TEXT
                                    </label>
                                </li>
                                <li className="w-50" onClick={(e) => { props.setSelction('FONT') }}>
                                    <input
                                        type="radio"
                                        id="SlctFONT"
                                        name="Selction"
                                        value="FONT"
                                        defaultChecked={props.Selction == "FONT"}
                                        onChange={(e) => { props.setSelction('FONT') }}
                                    />
                                    <label htmlFor="SlctFONT" className="py-1 fw-bold mb-0">
                                        FONT
                                    </label>
                                </li>
                                <li className="w-50" onClick={(e) => { props.setSelction('COLOR') }}>
                                    <input
                                        type="radio"
                                        id="SlctCOLOR"
                                        name="Selction"
                                        value="COLOR"
                                        defaultChecked={props.Selction == "COLOR"}
                                        onChange={(e) => { props.setSelction('COLOR') }}
                                    />
                                    <label htmlFor="SlctCOLOR" className="py-1 fw-bold mb-0">
                                        COLOR
                                    </label>
                                </li>
                            </ul> */}
                            <div className="row px-3 pb-5">
                                <div className="col-12 ps-1">
                                    <InputText
                                        oldProps={props} />
                                </div>
                                <div className="d-lg-none col-12 mb-5 Output">

                                    <Output
                                        oldProps={props}
                                    />

                                </div>
                                <div className="col-9 pe-1 pt-lg-0" style={{ paddingTop: '10vw' }} >

                                    <SlctFont
                                        oldProps={props} />


                                </div>
                                <div className="col-3 pt-lg-0" style={{ paddingTop: '10vw' }} >
                                    <SlctColor
                                        oldProps={props} />

                                </div>
                            </div>
                            <SlctRemain
                                moveLink={moveLink}
                                oldProps={props} />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-6 col-xl-8 Output">
                        <Output
                            oldProps={props}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='containerImg'>
                    <div className='parallax__container'>
                        <div className='parallax--bg bg1 _bg'></div>
                    </div>
                </div>
                <div className='my-5 container'>
                    <h1 className="tc-pink text-center">Create a Neon Club® sign in 5 easy steps</h1>
                    <div className='mx-auto text-center my-4'>
                        <img className='my-2' src={videoImg} style={{ width: '-webkit-fill-available' }} alt="" />
                        <img className='my-2 container' src={OneToFive} alt="" />
                    </div>
                </div>
                <div className='containerImg'>
                    <div className='parallax__container'>
                        <div className='parallax--bg bg2 _bg'></div>
                    </div>
                </div>
                <div className='my-5 container'>
                    <h1 className="tc-pink text-center">Bring your Imagination to Life</h1>
                    <h3 className="text-center">MAKE YOUR OWN UNIQUE SIGN WITH OUR ONLINE DESIGN TOOL</h3>
                    <div className='row my-4 gx-3 gy-3'>
                        <div className='col-md-6'>
                            <h3 className="w-75 tc-blue">Create Custom Made Neon Signs</h3>
                            <span className="w-75 tc-grey fs-3">LED Neon Sign Maker</span>
                            <p>Create your own neon sign online using our custom neon sign maker! We have created an easy tool to help you create your own custom neon sign and to give you a visual mockup so you can see what it's going to look like before you order.</p>
                        </div>
                        <div className='col-md-6'>
                            <h3 className="w-75 tc-blue">Want an Image or Logo?</h3>
                            <span className="w-75 tc-grey fs-3"></span>
                            <p>We can do that too! We can create virtually anything you need.
                                to go through to a form that will let you upload an image with your logo, company name, tag line or any artwork you would like to turn into a stylish glowing sign.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <h3 className="w-75 tc-blue">Neon Club® Light Design</h3>
                            <span className="w-75 tc-grey fs-3"></span>
                            <p>We specialize in custom LED neon signs, personalized neon signs, neon signs for weddings, business and restaurant neon signs, custom neon sidewalk signs, bar signs, and aesthetic neon artwork for custom home décor. Our custom neon installations light up homes, offices, stores, bars, cafes, shopping malls, weddings, parties and events around the world.</p>
                            <p>Costing less than the price of real glass neon signs, LED neon signs are easily portable, durable, and safe. Best of all, LED neons can be designed in a wide range of colors and fonts, making it easy to design unique, customized and personalized neon signs. Whether you're after a modern or replica vintage neon sign we've got you covered!</p>
                        </div>
                        <div className='col-md-6'>
                            <h3 className="w-75 tc-blue">Neon Sign Design</h3>
                            <span className="w-75 tc-grey fs-3"></span>
                            <p>If you can't find a font you like, don't worry, we can replicate almost any style of font, this includes handwriting, images, and logos.</p>
                            <p>If you are not able to design your ideal custom neon using our neon sign maker online please contact us for a custom quote, including your ideas, requirements and budget. We love to see our neon light signs brought to life so knowing your budget will allow us to tailor our quote to best suit your requirements.</p>
                        </div>
                        <div className='col-md-6'>
                            <h3 className="w-75 tc-blue">How to Make Your Own Neon Sign</h3>
                            <span className="w-75 tc-grey fs-3"></span>
                            <p>No matter what you want it to say or what it's for, you can use our clever online neon sign maker to design your very own LED neon light. In five quick steps you'll be the proud owner of a totally unique piece of aesthetic neon wall art, wedding name sign, neon beer sign or cute neon lamp for your baby's bedroom decor.</p>
                        </div>
                        <div className='col-md-6'>
                            <h3 className="w-75 tc-blue">Neon Sign Maker Online</h3>
                            <span className="w-75 tc-grey fs-3"></span>
                            <p>Create your own neon light using our online neon sign maker. To design your own custom neon word light choose a font, color, and size. Try out as many combinations as you want. You can even view your design on a number of backgrounds to give you a really good idea of how it will look IRL. When you're happy with your custom options just add it to cart. In just a few weeks you'll have a handmade, personalized neon light design. If you can't do what you want with the custom sign tool ask us for a custom quote.</p>
                        </div>
                    </div>
                    <div className='container col-md-10 text-center'>
                        <img src={SignDiagramUSA} style={{ width: 'inherit' }} alt="" />
                    </div>
                </div>
                <div className='containerImg'>
                    <div className='parallax__container'>
                        <div className='parallax--bg bg3 _bg'></div>
                    </div>
                </div>
                <div className='row container mx-auto my-5 gy-4'>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={icondesign} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Customized Neon Signs</h4>
                            <p >All of our neon light signs are custom designed by us, and can be altered to your specifications, size and colors. We can make any neon sign you want, in any fonts and a wide selection of colors. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={iconadapter} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Adapter Included</h4>
                            <p >Your new LED neon comes with a 4.9 ft transparent cord which plugs into a certified adapter (if you need an adapter for another country, ask when checking out). The adapter has an additional 3-6 ft of cable that plugs into the socket.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={iconshipping} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Worldwide Shipping</h4>
                            <p >Standard orders take 3-5 weeks*, including production and shipping. 'Rush' orders take 2-3 weeks*, including production and shipping to addresses in the USA and Canada. Please choose the 'Rush My Order' option at checkout, and let us know the date by which you need your sign to arrive. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={iconinstall} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Easy to Install</h4>
                            <p >Our LED Neon signs are mounted on high quality, clear acrylic backboards, stands or boxes. Backboards feature pre-drilled holes for easy wall mounting, and are ready for mounting, right out of the box.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={warranty} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >24 Months Warranty</h4>
                            <p >We offer the latest LED neon flex technology which is both stronger &amp; lighter than glass neon. All of our signs come with a 24-month manufacturer warranty covering faulty items. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={iconremote} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Remote Control Available</h4>
                            <p >Switch ON/OFF and pick from 10 brightness settings. The LED neon lights can be set to flash with adjustable speeds. (Optional/extra cost on some models)</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={iconpower} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Low Energy, High Brightness</h4>
                            <p >Our LED neon signs are both economical and ecologically friendly. They have low energy consumption and a 100,000+ hours lifespan</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card text-center'>
                            <img src={iconstrong} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Strong And Powerful</h4>
                            <p >Our LED neons signs come in a range of bright, eye-catching colors. The energy-efficient technology ensures a powerful light that lasts for years.</p>
                        </div>
                    </div>
                </div>
                <div className='py-3 faq_bg'>
                    <div className='container text-center my-5'>
                        <h1 className='tc-blue fw-bold my-5'>FAQ</h1>
                        <div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header fw-bold" id="headingOne">
                                        <button className="accordion-button  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How Much Does a Neon Club® Sign Cost?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The price for custom LED neon signs start at Rs 2500 for a sign with two letters. Our handmade LED neon signs, lamps and wall decor are affordable and we are very competitive on price! In addition to great prices, our experienced team also offers unparalleled customer support, from the design stage through to delivery and aftercare.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header fw-bold" id="headingTwo">
                                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Our Design Service
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            We are happy to offer a free design service to our customers, providing one or more designs for your approval, at no extra charge. If you have a change of mind and wish to amend or cancel your order before the sign goes into production we will happily offer a partial or full refund. Once a custom sign order is approved and has gone into production we are no longer able to offer a refund. Please note that a custom sign is automatically approved if "YES" is selected when ordering.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header fw-bold" id="headingThree">
                                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Why Buy a Neon Light Sign from Neon Club®?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            <p>All of our LED neon light signs are handmade from LED neon light tubes that are kid-safe and both economical and ecologically friendly! Some great reasons to choose a custom LED sign from us are:</p>
                                            <ul>
                                                <li>Affordable - We keep our prices as low as possible while offering a high quality product.</li>
                                                <li>24 Months Warranty - All of our indoor and outdoor signs come with a 24-month manufacturer warranty covering faulty items.</li>
                                                <li>Durable - We offer the latest neon flex technology which is stronger and lighter than vintage style glass neon.</li>
                                                <li>Energy Efficient - Our LED neon light signs are both economical and ecologically friendly, with low energy consumption and 100,000+ hours lifespan.</li>
                                                <li>Safe - Our bespoke neon signs are made from LED light tubes that do not get hot and contain no breakable glass.</li>
                                                <li>Easy to Install - All of the Custom Neon light signs come with pre-drilled holes for easy hanging &amp; wall mounting.</li>
                                                <li>Low Maintenance - Custom Neon signs are very hard-wearing and easy to clean.</li>
                                                <li>Lightweight - Our custom designed signs are lightweight and portable, making them perfect as LED neon signs for weddings, events, home or business, or truly unique gift ideas.</li>
                                                <li>Full Control - The remote control has an on/off switch and 10 brightness settings. Your neon light sign can be set to flash with adjustable speeds.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header fw-bold" id="headingfour">
                                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            What Neon Light Colors Can I Choose?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            We have a total of 18 colors to choose from. Eight of these are white when the sign is turned off and colored when the sign is switched on. The remaining ten colors come with a colored tube, so the sign shows its color even when it's turned off.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header fw-bold" id="headingfive">
                                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                            How Big Can My Custom-made Neon Be?
                                        </button>
                                    </h2>
                                    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            <p>Our LED Neon is available in 8/9/10mm thickness, and the minimum letter height is approximately 3-4 inches for simple/non-cursive fonts and 4-5 inches for cursive fonts.</p>
                                            <p>If your custom order is for a sign larger than 7ft 8in by 3ft 11in it will be made on two or more backboards that can be easily arranged together. Doing this keeps the signs safer during shipping and allows us to deliver the best possible price for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header fw-bold" id="headingsix">
                                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                            What are the Backboard Options?
                                        </button>
                                    </h2>
                                    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            <p>Custom Neon signs are mounted on a clear, acrylic backboard. We offer two standard backing options at no extra cost.</p>
                                            <ul>
                                                <li>For script/cursive fonts - we recommend the cut around / contoured acrylic backing.</li>
                                                <li>For simple/block fonts - we recommend the rectangle acrylic backing.</li>
                                            </ul>
                                            <p>We also offer a cut-to-letter acrylic backboard option, as well as acrylic stands and boxes. The cost for these options is shown on the tool. </p>
                                            <p>Backboard options include clear, black, white, colored, mirrored, glitter and more. If you would like a backboard that is not listed above please contact us for a quote.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage