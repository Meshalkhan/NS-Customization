import SelectBackBoard from "../SelectBackBoard";
import AcrylicBackground from "./AcrylicBackground";
import Options from "./Options";
import PowerAdapt from "./PowerAdapt";
import { Link } from 'react-router-dom'

const SlctRemain = ({ oldProps, moveLink }) => {
    return (
        <>
            <div className=" px-3 pb-5">
                {/* {oldProps.Selction === 'TEXT' && <> */}

                {/* </>} */}
                {/* {oldProps.Selction === 'FONT' && <> */}
                {/* </>
                                } */}

                {/* {oldProps.Selction === 'COLOR' && <> */}
                {/* </>} */}

                <Options
                    sizeParams={oldProps.sizeParams}
                    settingDetails={oldProps.settingDetails}
                />

                <div className="row py-3 m-auto">
                    <div className="col-sm-6 p-2">

                        <div className={`h-100 align-items-center d-flex justify-content-center p-2 cursorPointer size_box ${oldProps.Place == 'Indoor' && 'active'} `} onClick={() => { oldProps.setPlace('Indoor') }}>
                            <div>
                                <p className="text-center fw-bold fs14 text-black mb-0">Indoor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 p-2">

                        <div className={`h-100 align-items-center d-flex justify-content-center p-2 cursorPointer size_box ${oldProps.Place == 'IP67 Waterproof Technology' && 'active'} `} onClick={() => { oldProps.setPlace('IP67 Waterproof Technology') }}>
                            <div>
                                <p className="text-center fw-bold fs14 text-black">IP67 Waterproof Technology*</p>
                            </div>
                        </div>
                    </div>
                    {oldProps.Place == 'IP67 Waterproof Technology' ?
                        <p className="text-grey fs11" >*Neon Club® now offers a range of IP67 Waterproof rated Outdoor Signs. These can be made in the same range of colors as our indoor signs, and offer an ideal solution for outdoor use. See Photos</p>
                        :
                        <p className="text-grey fs11" >Indoor Signs are not suitable for use outdoors or anywhere they might get wet. Inappropriate use will void the warranty.</p>
                    }
                </div>

                <PowerAdapt
                    Adptr={oldProps.Adptr}
                    setAdptr={oldProps.setAdptr}
                />

                <AcrylicBackground
                    AcrylicBkgrnd={oldProps.AcrylicBkgrnd}
                    setAcrylicBkgrnd={oldProps.setAcrylicBkgrnd}
                />

                <SelectBackBoard
                    sizeParams={oldProps.sizeParams}
                    setsizeParams={oldProps.setsizeParams}
                    neonbackground1={oldProps.neonbackground1}
                    neonbackground2={oldProps.neonbackground2}
                    neonbackground3={oldProps.neonbackground3}
                    neonbackground4={oldProps.neonbackground4}
                    neonbackground5={oldProps.neonbackground5}
                    neonbackground={oldProps.neonbackground}
                    setneonbackground={oldProps.setneonbackground}
                    Price={oldProps.Price}
                />
                {/* <Link to={oldProps.UserInput !== 'Type Here' ? '/design-proof' : '/'} > */}
                <button onClick={moveLink} className='py-3 mt-3 addtocart'>ADD TO CART</button>
                {/* </Link> */}
            </div>
        </>
    );
}

export default SlctRemain;