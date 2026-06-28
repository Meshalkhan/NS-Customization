import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignDiagramUSA from '../Assets/Imgs/SignDiagramUSA.png';
import Textfit from '@namhong2001/react-textfit';

function DesignProofPage(props) {
  const history = useNavigate();
  const [email, setemail] = useState('');
  const [mobNumber, setmobNumber] = useState('');

  const SendWhatsAppMessage = (e) => {
    e.preventDefault();
    const num = '923229477543';
    const message = `*Sign*%0a%0a${props.UserInput.replaceAll('\n', '%0a')}%0aColor:${props.Color}%0aFont: ${props.FontFamily}%0aMaterial: ${props.Place}%0a%0a%0a*Dimension*%0a%0aLength: ${props.sizeParams.length}%0aHeight: ${props.sizeParams.height} %0a%0a%0a*BACKBOARD*%0a%0aBackboard color: ${props.AcrylicBkgrnd}%0aCut Around Acrylic: Ready to hang or wall mount.%0a%0a*ContactDetails*%0amobile Num:${mobNumber}%0aEmail:${email} %0a%0aPrice:PKR ${props.Price}`;

    const ua = navigator.userAgent;
    let url = '';
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
      || /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      url = `https://api.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`;
    } else {
      url = `https://web.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`;
    }
    window.open(url);
  };

  useEffect(() => {
    if (props.UserInput === 'Type Here' || !props.UserInput) {
      history('/');
    }
  }, [history, props.UserInput]);

  return (
    <div className="proof-page">
      <header className="proof-header">
        <h1 className="proof-header__title">Design Proof</h1>
        <p className="text-muted mb-0">Review your sign before sending your order via WhatsApp.</p>
      </header>

      <div className="row g-4 mb-4">
        <div className="col-lg-5 mx-auto">
          <div className="proof-preview-box text-center">
            <Textfit className="fs90" mode="multi">
              {props.UserInput && props.UserInput !== 'Type Here'
                ? props.UserInput.split('\n').map((l, i) => (
                  <p
                    className={`bg-transparent design_proof ${props.Color} ${props.ShowShadow ? 'text-white active' : 'text'}`}
                    style={props.mystyle}
                    key={i}
                  >
                    {l}
                  </p>
                ))
                : (
                  <p className={`bg-transparent design_proof ${props.Color} ${props.ShowShadow ? 'text-white active' : 'text'}`} style={props.mystyle}>
                    Type Here
                  </p>
                )}
            </Textfit>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="proof-card">
            <h3>Your sign</h3>
            <ul>
              <li><strong>Text:</strong> {props.UserInput}</li>
              <li><strong>Color:</strong> {props.Color}</li>
              <li><strong>Font:</strong> {props.FontFamily}</li>
              <li>
                {props.Place === 'IP67 Waterproof Technology'
                  ? 'IP67 Waterproof Technology'
                  : 'Material: High-quality LED neon flex — indoor use'}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="proof-card">
            <h3>Dimensions</h3>
            <ul>
              <li>Length: {props.sizeParams.length} ft</li>
              <li>Height: {props.sizeParams.height} ft</li>
              <li>Custom made — size may vary slightly</li>
              <li>Backboard margin ~0.8&quot; around text</li>
              <li>Backboard color: {props.AcrylicBkgrnd}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="proof-card">
            <h3>Backboard</h3>
            <div className="text-center proof-backboard">
              <img src={props.neonbackground} width={220} alt="Selected backboard" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="proof-card">
            <h3>What&apos;s in the box</h3>
            <img src={SignDiagramUSA} width="100%" alt="Package contents diagram" className="rounded-3 mb-3" />
            <p className="mb-2"><strong>Electrical plug:</strong> {props?.Adptr?.label || '—'}</p>
            <p className="text-muted small">Some signs may require multiple power cords if necessary.</p>
            <div className="proof-total mt-3">
              Total: PKR {props.Price?.toLocaleString?.() ?? props.Price}
            </div>
          </div>
        </div>
      </div>

      <div className="proof-actions">
        <h2 className="h5 text-center mb-4">Approve design for production</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="form-check p-3 rounded-3 border">
              <input className="form-check-input" type="radio" name="AcceptConditions" id="acceptYes" />
              <label className="form-check-label" htmlFor="acceptYes">
                <span className="fw-bold tc-pink">Yes</span> — I approve text, size, color, font and backboard. Start production.
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check p-3 rounded-3 border">
              <input className="form-check-input" type="radio" name="AcceptConditions" id="acceptNo" defaultChecked />
              <label className="form-check-label" htmlFor="acceptNo">
                <span className="fw-bold tc-pink">No</span> — I need assistance before production begins.
              </label>
            </div>
          </div>
        </div>

        <form className="row g-3" onSubmit={SendWhatsAppMessage}>
          <div className="col-md-6">
            <label htmlFor="proof-email" className="field-label">Email</label>
            <input
              type="email"
              id="proof-email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="form-control inputText"
              placeholder="name@example.com"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="proof-phone" className="field-label">WhatsApp number</label>
            <input
              type="tel"
              id="proof-phone"
              value={mobNumber}
              onChange={(e) => setmobNumber(e.target.value)}
              className="form-control inputText"
              placeholder="923001234567"
            />
          </div>
          <div className="col-12 d-flex flex-wrap gap-2 justify-content-center mt-2">
            <button type="submit" className="btn-neon-primary" style={{ width: 'auto', minWidth: '200px' }}>
              Send via WhatsApp
            </button>
            <Link to="/" className="btn btn-outline-secondary px-4 py-2 rounded-3">
              Back to studio
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DesignProofPage;
