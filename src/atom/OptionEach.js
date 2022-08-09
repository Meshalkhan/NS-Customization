const OptionEach = (props) => {
    console.log({ props })
    return (
        <>
            <div className={`d-flex justify-content-between p-2 cursorPointer size_box ${props.sizeParams.size == props.size && 'active'} `} onClick={() => { props.settingDetails(props.size, props.price, props.length, props.height) }}>
                <div>
                    <p className="fw-bold fs14 text-black">{props.size}</p>
                    <p className="fw-bold fs14 text-black mb-0">PKR{props.price}</p>
                </div>
                <div>
                    <p className="fs12 tc-grey-3 text-end" >Length:{props.length}ft</p>
                    <p className="fs12 tc-grey-3 text-end mb-0" >Height:{props.height}ft</p>
                </div>
            </div>
        </>
    );
}

export default OptionEach;