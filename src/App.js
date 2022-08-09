import { useEffect, useState } from 'react';
import './ColorStyle.css';
import "./fontImport.css"
import './checkbox.css'
import Navbar from './Navbar'
import HomePage from './Routes/HomePage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DesignProofPage from './Routes/DesignProofPage';
import neonbackground1 from './Assets/Imgs/neonbackground1.png'
import neonbackground2 from './Assets/Imgs/neonbackground2.png'
import neonbackground3 from './Assets/Imgs/neonbackground3.png'
import neonbackground4 from './Assets/Imgs/neonbackground4.png'
import neonbackground5 from './Assets/Imgs/neonbackground5.png'
import Footer from './atom/Footer';



function App() {
  const [UserInput, setUserInput] = useState('Type Here')
  const [FontFamily, setFontFamily] = useState('Grayscale-signature')
  const [Color, setColor] = useState('color50')
  const [BackgroundColor, setBackgroundColor] = useState('#000000')
  const [FontSize, setFontSize] = useState('95')
  const [Selction, setSelction] = useState('TEXT')
  const [Image, setImage] = useState('TEXT')
  const [ShowShadow, setShowShadow] = useState(true)
  const [sizeParams, setsizeParams] = useState(
    {
      size: "Small",
      price: "2500",
      length: "1",
      height: "1",
    }
  )
  const [neonbackground, setneonbackground] = useState(neonbackground1)
  const [Place, setPlace] = useState('Indoor')
  const [Adptr, setAdptr] = useState('')
  const [AcrylicBkgrnd, setAcrylicBkgrnd] = useState('')
  const [isArabic, setisArabic] = useState(false)
  const [FontListArabic, setFontListArabic] = useState([
    'Kufi',
    'Sabana',
    'Kahlil',
    'Mustopha',
    'Khodijah',
    'Assyam',
    'Samiruk',
    'magicArabic',
    'felicitationArabi2',
    'rakhisaArabic',
    'tharwatArabic',
    'zanzabarArabic',
  ])

  const [FontList, setFontList] = useState([
    'Alexa',
    'Barcelona',
    'Amsterdam',
    'Venetian',
    'Amanda',
    'Austin',
    'Beachfront',
    'Chelsea',
    'Freehand',
    'Neonscript',
    'Northshore',
    'Photogenic',
    'Royalty',
    'Rocket',
    'Signature',
    'Sorrento',
    'WildScript',
    'Avante',
    'Buttercup',
    'ClassicType',
    'Typewriter',
    'Melbourne',
    'NeoTokyo',
    'Monaco',
    'Bellview',
    'Marquee',
    'Mayfair',
    'NeonGlow',
    'NeonLite',
    'Nevada',
    'Neontrace',
    'Vintage',
    'NewCursive',
  ])

  const [Price, setPrice] = useState(2500)
  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   function openModal() {
  //       setIsOpen(true);
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  // }


  const onArabic = () => {
    setisArabic(!isArabic)
  }

  const neonbackgroundStyle = {
    backgroundImage: neonbackground
  }


  const mystyle = {
    // fontSize: `${FontSize}px`,
    fontFamily: FontFamily,
    boxShadow: 'unset',
    // paddingTop: '50px'
  };
  const BackGroundWall = {
    // backgroundColor: BackgroundColor,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '10px',
    borderRadius: '7%',
  };

  const settingDetails = (a, b, c, d) => {
    setsizeParams({
      size: a,
      price: b,
      length: c,
      height: d
    })
    setPrice(b)
  }

  // window.fitText(document.getElementById("responsiveText"),3);


  return (
    <div className="App">

      <Router>
        <Navbar />

        {/* <Link to={UserInput !== 'Type Here' ? '/design-proof' : '/'} onClick={(e)=>{}}> */}
        {/* </Link> */}
        <Routes>
          <Route path="/" element={<HomePage
            UserInput={UserInput}
            Selction={Selction}
            setSelction={setSelction}
            setUserInput={setUserInput}
            FontList={FontList}
            FontListArabic={FontListArabic}
            isArabic={isArabic}
            onArabic={onArabic}
            FontFamily={FontFamily}
            setFontFamily={setFontFamily}
            setColor={setColor}
            Color={Color}
            Place={Place}
            setPlace={setPlace}
            Adptr={Adptr}
            setAdptr={setAdptr}
            AcrylicBkgrnd={AcrylicBkgrnd}
            setAcrylicBkgrnd={setAcrylicBkgrnd}
            sizeParams={sizeParams}
            ShowShadow={ShowShadow}
            setShowShadow={setShowShadow}
            BackGroundWall={BackGroundWall}
            setImage={setImage}
            mystyle={mystyle}
            settingDetails={settingDetails}
            neonbackground={neonbackground}
            setneonbackground={setneonbackground}
            neonbackground1={neonbackground1}
            neonbackground2={neonbackground2}
            neonbackground3={neonbackground3}
            neonbackground4={neonbackground4}
            neonbackground5={neonbackground5}
            Price={Price}
          />} />
          <Route path="/design-proof" element={<DesignProofPage
            Adptr={Adptr}
            AcrylicBkgrnd={AcrylicBkgrnd}
            sizeParams={sizeParams}
            Color={Color}
            FontFamily={FontFamily}
            UserInput={UserInput}
            ShowShadow={ShowShadow}
            mystyle={mystyle}
            FontSize={FontSize}
            Place={Place}
            neonbackground={neonbackground}
            setneonbackground={setneonbackground}
            Price={Price}
          />} />
        </Routes>
        <Footer />
      </Router >

    </div >
  );
}

export default App;
