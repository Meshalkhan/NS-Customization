import FontSlction from "./FontSlction";

const SlctFont = ({ oldProps }) => {
    return (
        <>
            <div className="d-inline-flex w-100">
                <div class="form-check form-switch">
                    <input class="form-check-input" onChange={oldProps.onArabic} type="checkbox" id="mySwitch" name="darkmode" value="yes" />
                    {oldProps.isArabic ?
                        <label class="form-check-label fs14 fw-bold tc-pink" for="mySwitch">العربية</label>
                        :
                        <label class="form-check-label fs14 fw-bold tc-pink" for="mySwitch">English</label>
                    }
                </div>
                <p className="tc-grey fw-bold mx-auto fs16 text-center">FONT</p>
            </div>


            <div className="row w-100 mx-auto g-2 FontsCollection">
                {oldProps.isArabic ?
                    oldProps.FontListArabic.map(each => (

                        <FontSlction
                            FontFamily={oldProps.FontFamily}
                            name={each}
                            setFontFamily={oldProps.setFontFamily} />
                    ))
                    :
                    oldProps.FontList.map(each => (

                        <FontSlction
                            FontFamily={oldProps.FontFamily}
                            name={each}
                            setFontFamily={oldProps.setFontFamily} />
                    ))
                }
            </div>
        </>
    );
}

export default SlctFont;