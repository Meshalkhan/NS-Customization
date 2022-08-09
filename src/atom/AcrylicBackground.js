import acrylic from '../Assets/Imgs/acrylic.png'
import white from '../Assets/Imgs/white.png'
import silver from '../Assets/Imgs/silver.png'
import black from '../Assets/Imgs/black.png'
import gold from '../Assets/Imgs/gold.png'


const AcrylicBackground = (props) => {
    return (
        <>
            <p className="fw-600 fs13 tc-grey-2">Choose a backboard color</p>
            <div className="d-flex  justify-content-between acrylic">
                <img className={props.AcrylicBkgrnd == 'acrylic' && 'active'} onClick={() => props.setAcrylicBkgrnd('acrylic')} src={acrylic} alt="" />
                <img className={props.AcrylicBkgrnd == 'white' && 'active'} onClick={() => props.setAcrylicBkgrnd('white')} src={white} alt="" />
                <img className={props.AcrylicBkgrnd == 'silver' && 'active'} onClick={() => props.setAcrylicBkgrnd('silver')} src={silver} alt="" />
                <img className={props.AcrylicBkgrnd == 'black' && 'active'} onClick={() => props.setAcrylicBkgrnd('black')} src={black} alt="" />
                <img className={props.AcrylicBkgrnd == 'gold' && 'active'} onClick={() => props.setAcrylicBkgrnd('gold')} src={gold} alt="" />
            </div>

        </>
    );
}

export default AcrylicBackground;