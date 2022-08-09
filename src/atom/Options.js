import OptionEach from "./OptionEach";

const Options = (props) => {
    return (
        <>
            <div className="row py-3 g-2">
                <p className="fw-600 fs18 tc-grey-2 ">Select your Options</p>
                <div className="col-sm-6">
                    <OptionEach
                        size="Small"
                        price="2500"
                        length="1"
                        height="1"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>

                <div className="col-sm-6">
                    <OptionEach
                        size="Medium"
                        price="4000"
                        length="1"
                        height="2"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>

                <div className="col-sm-6">
                    <OptionEach
                        size="Large"
                        price="6000"
                        length="1"
                        height="3"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="X Large"
                        price="8000"
                        length="1"
                        height="4"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="XX Large"
                        price="8000"
                        length="2"
                        height="2"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="Supersized"
                        price="12000"
                        length="2"
                        height="3"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="X Supersized"
                        price="16000"
                        length="2"
                        height="4"
                        sizeParams={props.sizeParams}
                        settingDetails={props.settingDetails}
                    />
                </div>
                <p className="text-grey fs11" >*Each sign is handcrafted, and sizes shown will be accurate within 1 or 2 inches.</p>
            </div>
        </>
    );
}

export default Options;