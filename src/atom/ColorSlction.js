const ColorSlction = (props) => {
    return (
        <>
            <div className="cursorPointer" onClick={() => props.setColor(props.Code)}>
                <p className={`bgSlct m-auto ${props.Code} ${props.Color === props.Code && 'active'}`}>
                    O
                </p>
                <p className="text-black fw-600 fs10 text-center">{props.name}</p>
            </div>
        </>
    );
}

export default ColorSlction;