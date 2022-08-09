
import { Textfit } from 'react-textfit'
import BannerSlider from './Banner'


const Output = ({ oldProps }) => {
    return (
        <>
            <div className="position-absolute mt-2 ms-0 ms-md-3 ms-lg-5">
                <div className="switch">
                    <input type="checkbox" name="toggle" defaultChecked={oldProps.ShowShadow} onChange={(e) => { oldProps.setShowShadow(e.target.checked) }} />
                    <label for="toggle">
                        <i className="bulb">
                            <span className="bulb-center"></span>
                            <span className="filament-1"></span>
                            <span className="filament-2"></span>
                            <span className="reflections">
                                <span></span>
                            </span>
                            <span className="sparks">
                                <i className="spark1"></i>
                                <i className="spark2"></i>
                                <i className="spark3"></i>
                                <i className="spark4"></i>
                            </span>
                        </i>
                    </label>
                </div>
            </div>
            <div className='w-100 ViewPort_div position-relative'>
                <div className="container text-center h-100" style={oldProps.BackGroundWall} >
                    <Textfit className='viewContainer mx-auto' mode="multi" style={{ marginTop: '14%' }} >
                        {oldProps.UserInput ? oldProps.UserInput.split("\n").map((l, i) =>
                            <p className={`bg-transparent mb- responsiveText ${oldProps.isArabic ? 'ArabicDir' : null} ${oldProps.Color} ${oldProps.ShowShadow ? 'text-white active' : 'text'}`} style={oldProps.mystyle} key={i}>{l}</p>
                        ) :
                            <p className={`bg-transparent mb- responsiveText ${oldProps.isArabic ? 'ArabicDir' : null} ${oldProps.Color} ${oldProps.ShowShadow ? 'text-white active' : 'text'}`} style={oldProps.mystyle} >Type Here</p>}
                    </Textfit>

                </div>
                <BannerSlider setImage={oldProps.setImage} />
            </div>
        </>
    );
}

export default Output;