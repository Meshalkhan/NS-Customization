import React, { useEffect, useState } from 'react'
import SignDiagramUSA from '../Assets/Imgs/SignDiagramUSA.png'
import Textfit from 'react-textfit'
import { useNavigate } from "react-router-dom";




function DesignProofPage(props) {
  const history = useNavigate();
  const [email, setemail] = useState('')
  const [mobNumber, setmobNumber] = useState('')


  const SendWhatsAppMessage = () => {
    let num = "923229477543"
    // let num = "923314250294"
    let message = `*Sign*%0a%0a${props.UserInput.replaceAll('\n', '%0a')}%0aColor:${props.Color}%0aFont: ${props.FontFamily}%0aMaterial: ${props.Place}%0a%0a%0a*Dimension*%0a%0aLength: ${props.sizeParams.length}%0aHeight: ${props.sizeParams.height} %0a%0a%0a*BACKBOARD*%0a%0aBackboard color: ${props.AcrylicBkgrnd}%0aCut Around Acrylic: Ready to hang or wall mount.%0a%0a*ContactDetails*%0amobile Num:${mobNumber}%0aEmail:${email} %0a%0aPrice:PKR ${props.Price}`

    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    let url = ""
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      // return "tablet";
      // alert('tab')

      url = ` https://api.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      // alert('MObile')
      // return "mobile";
      url = ` https://api.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`
    }
    // return "desktop";
    else {
      // alert('Desktop')

      url = ` https://web.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`
    }
    console.log(props.UserInput)
    window.open(url)
  }

  useEffect(() => {
    if (props.UserInput == 'Type Here') {
      history('/')
    }
  }, [])

  console.log(email, '1111');
  console.log(mobNumber, '1111');

  return (

    <div >
      <div className='text-center my-3'>
        <h1 className='fw-bold tc-pink'>D E S I G N <span className='ms-3'> </span> P R O O F</h1>
        <h3 className=''>PLEASE CHECK AND CONFIRM YOUR DESIGN</h3>
        <div className='col-md-4 mx-auto py-3'>
          <div className='divSize'>
            <Textfit className='fs90' mode="multi">
              {props.UserInput ? props.UserInput.split("\n").map((l, i) =>
                <p className={`bg-transparent design_proof ${props.Color} ${props.ShowShadow ? 'text-white active' : 'text'}`} style={props.mystyle} key={i}>{l}</p>
              ) :
                <p className={`bg-transparent design_proof ${props.Color} ${props.ShowShadow ? 'text-white active' : 'text'}`} style={props.mystyle} >Type Here</p>}
            </Textfit>
          </div>
        </div>
      </div>
      <div className='container row mx-auto my-5 g-3'>
        <div className='col-md-6'>
          <div className=''>
            <h3 className='text-center tc-blue'>YOUR SIGN</h3>
            <ul >
              <li>{props.UserInput}</li>
              <li>{props.Color}</li>
              <li>{props.FontFamily}</li>
              {props.Place == 'IP67 Waterproof Technology' ?
                <li>IP67 Waterproof Technology</li>
                :
                <li>Material: High-quality LED neon flex - Indoor use</li>
              }
            </ul>
          </div>
          <div className='my-3'>
            <h3 className="text-center tc-blue my-3">DIMENSIONS</h3>
            <ul>
              <li>Length:{props.sizeParams.length}ft</li>
              <li>Height:{props.sizeParams.height}ft</li>
              <li>*The sign will be custom made and size may vary slightly.</li>
              <li>The backboard adds a margin of about 0.8" around the text.</li>
              <li>Backboard color: {props.AcrylicBkgrnd}</li>
            </ul>
          </div>
          <div className='my-3'>
            <h3 className="text-center tc-blue my-3">BACKBOARD</h3>
            <div className="text-center" style={{
              background: '#f5f5f5', padding: '10px 0',
              borderRadius: '15px',
              margin: '10px',
            }}>
              <img src={props.neonbackground} width={220} />

            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className='text-center tc-blue'>WHAT'S IN THE BOX?</h3>
          <img src={SignDiagramUSA} width='100%' />
          <div className='my-4 w-75'>
            <p>Electrical Plug: {props?.Adptr?.label}</p>
            <p>Some signs may require multiple power cords, which will be provided if necessary.</p>
            <div className="form-check">
              <input className="form-check-input fs-5" type="radio" name="mountingType" id="mountingType1" />
              <label className="form-check-label fs-5 fw-600 d-inline-flex" for="mountingType1">
                Wall Mounting Kit
                <div>
                  <select className="form-control form-control-sm  px-3 mx-3 ">
                    <option>Silver $15</option>
                    <option>Gold $17</option>
                    <option>Black $17</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input fs-5" type="radio" name="mountingType" id="mountingType2" checked />
              <label className="form-check-label fs-5 fw-600" for="mountingType2">
                Sign Hanging Kit
              </label>
            </div>
            <div className="">
              <p className="text-black fw-bold fs22 mt-5">Total with selected options: PKR {props.Price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container row mx-auto mb-5'>
        <h1 className='tc-pink fw bold text-center'>I approve the design for production</h1>
        <h2 className='tc-blue fw bold text-center'>(You can add comments/requests when checking out)</h2>
        <div className='row my-3 g-3'>
          <div className='col-md-6'>
            <div className="form-check">
              <input className="form-check-input fs-5" type="radio" name="AcceptConditions" id="AcceptConditions3" />
              <label className="form-check-label fs-5 fw-600" for="AcceptConditions3">
                <p className='mb-0'><span className='fw-bold tc-pink'>YES</span> I have checked and approve my text, size, color, font and backboard options. </p>
                <p>	Production turnaround time can start now. Make my sign!</p>
              </label>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-check">
              <input className="form-check-input fs-5" type="radio" name="AcceptConditions" id="AcceptConditions3" checked />
              <label className="form-check-label fs-5 fw-600" for="AcceptConditions3">
                <p>
                  <span className='fw-bold tc-pink'>NO </span>
                  I need further assistance. The turnaround time will not start yet.  Custom Neon will email you to finalize details (please check junk folder). If we don't hear back within 14 days, we will start manufacturing your order so you receive it in a timely manner.
                </p>
              </label>
            </div>
          </div>
        </div>
        <form className='container row'>
          <div className="form-group col-md-6">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com" />
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlInput">Whatsapp Number</label>
            <input
              type="number"
              value={mobNumber}
              onChange={(e) => setmobNumber(e.target.value)}
              className="form-control"
              id="exampleFormControlInput" placeholder="123123123" />
          </div>
          <div className='text-center'>
            <button type='submit' className='py-1 w-25 addtocart mt-3' onClick={SendWhatsAppMessage}>Send WhatsApp</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default DesignProofPage
