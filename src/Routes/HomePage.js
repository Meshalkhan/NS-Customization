import React from 'react'
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
import { useNavigate } from 'react-router-dom'
import Output from '../atom/Output'
import InputText from '../atom/InputText'
import SlctFont from '../atom/SlctFont'
import SlctRemain from '../atom/SlctRemain'
import SlctColor from '../atom/SlctColor'
import WhatsAppFab from '../components/ui/WhatsAppFab'
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
        <div className="main-bg">
            <WhatsAppFab onClick={moveLink} />

            <header className="page-hero">
                <span className="page-hero__eyebrow">LED neon configurator</span>
                <h1 className="page-hero__title">Create your custom neon sign</h1>
                <p className="page-hero__subtitle">
                    Type your text, pick a font and color, then preview your sign in real time before ordering.
                </p>
            </header>

            <section className="studio">
                <div className="studio__grid">
                    <div className="studio-panel">
                        <div className="studio-panel__header">
                            <h2 className="studio-panel__title">Customize</h2>
                            <span className="studio-panel__badge">PKR {props.Price?.toLocaleString?.() ?? props.Price}</span>
                        </div>
                        <div className="studio-panel__body Selection_Box">
                            <div className="row g-3">
                                <div className="col-12">
                                    <InputText oldProps={props} />
                                </div>
                                <div className="d-lg-none col-12 Output">
                                    <div className="preview-stage">
                                        <Output oldProps={props} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <SlctFont oldProps={props} />
                                </div>
                                <div className="col-3">
                                    <SlctColor oldProps={props} />
                                </div>
                            </div>
                            <SlctRemain moveLink={moveLink} oldProps={props} />
                        </div>
                    </div>

                    <div className="d-none d-lg-block Output">
                        <div className="preview-stage">
                            <Output oldProps={props} />
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-5'>
                <div className='containerImg'>
                    <div className='parallax__container'>
                        <div className='parallax--bg bg1 _bg'></div>
                    </div>
                </div>
                <div className='section-block' id="features">
                    <h2 className="section-block__title section-block__title--pink">Create a Neon Club® sign in 5 easy steps</h2>
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
                <div className='section-block'>
                    <h2 className="section-block__title section-block__title--pink">Bring your imagination to life</h2>
                    <h3 className="text-center text-muted mb-4">Make your own unique sign with our online design tool</h3>
                    <div className='row my-4 gx-3 gy-3 section-prose'>
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
                <div className='section-block row mx-auto g-4' id="features-grid">
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={icondesign} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Customized Neon Signs</h4>
                            <p >All of our neon light signs are custom designed by us, and can be altered to your specifications, size and colors. We can make any neon sign you want, in any fonts and a wide selection of colors. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={iconadapter} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Adapter Included</h4>
                            <p >Your new LED neon comes with a 4.9 ft transparent cord which plugs into a certified adapter (if you need an adapter for another country, ask when checking out). The adapter has an additional 3-6 ft of cable that plugs into the socket.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={iconshipping} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Worldwide Shipping</h4>
                            <p >Standard orders take 3-5 weeks*, including production and shipping. 'Rush' orders take 2-3 weeks*, including production and shipping to addresses in the USA and Canada. Please choose the 'Rush My Order' option at checkout, and let us know the date by which you need your sign to arrive. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={iconinstall} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Easy to Install</h4>
                            <p >Our LED Neon signs are mounted on high quality, clear acrylic backboards, stands or boxes. Backboards feature pre-drilled holes for easy wall mounting, and are ready for mounting, right out of the box.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={warranty} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >24 Months Warranty</h4>
                            <p >We offer the latest LED neon flex technology which is both stronger &amp; lighter than glass neon. All of our signs come with a 24-month manufacturer warranty covering faulty items. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={iconremote} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Remote Control Available</h4>
                            <p >Switch ON/OFF and pick from 10 brightness settings. The LED neon lights can be set to flash with adjustable speeds. (Optional/extra cost on some models)</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={iconpower} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Low Energy, High Brightness</h4>
                            <p >Our LED neon signs are both economical and ecologically friendly. They have low energy consumption and a 100,000+ hours lifespan</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='feature-card text-center'>
                            <img src={iconstrong} className="mb-2 w-50 mx-auto" alt="" />
                            <h4 >Strong And Powerful</h4>
                            <p >Our LED neons signs come in a range of bright, eye-catching colors. The energy-efficient technology ensures a powerful light that lasts for years.</p>
                        </div>
                    </div>
                </div>
                <div className='py-3 faq_bg' id="faq">
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