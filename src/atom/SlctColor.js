import ColorSlction from "./ColorSlction";

const SlctColor = ({ oldProps }) => {
    return (
        <>

            <p className="tc-grey fw-bold fs16 text-center">COLOR</p>
            <div className="row flex-wrap " >

                <div className="col-sm-6">
                    <ColorSlction
                        name='Warm White'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'Warm_White'} />
                </div>

                <div className="col-sm-6">
                    <ColorSlction
                        name='White'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'White'} />
                </div>

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Lemon Yellow'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'Lemon_Yellow'} />
                </div> */}

                <div className="col-sm-6">
                    <ColorSlction
                        name='Golden Yellow'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color40'} />
                </div>

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Orange'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color50'} />
                </div>

                <div className="col-sm-6">
                    <ColorSlction
                        name='Light Red'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color60'} />
                </div> */}

                <div className="col-sm-6">
                    <ColorSlction
                        name='Red'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color70'} />
                </div>

                <div className="col-sm-6">
                    <ColorSlction
                        name='Pink'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color80'} />
                </div>

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Cotton Candy'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color90'} />
                </div>

                <div className="col-sm-6">
                    <ColorSlction
                        name='Deep Pink'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color100'} />
                </div> */}

                <div className="col-sm-6">
                    <ColorSlction
                        name='Purple'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color110'} />
                </div>

                <div className="col-sm-6">
                    <ColorSlction
                        name='Deep Blue'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color120'} />
                </div>

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Electric Blue'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color130'} />
                </div> */}

                <div className="col-sm-6">
                    <ColorSlction
                        name='Ice Blue'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color140'} />
                </div>

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Tropical Blue'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color150'} />
                </div> */}

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Mint'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color160'} />
                </div> */}

                <div className="col-sm-6">
                    <ColorSlction
                        name='Green'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color170'} />
                </div>

                {/* <div className="col-sm-6">
                    <ColorSlction
                        name='Deep Green'
                        Color={oldProps.Color}
                        setColor={oldProps.setColor}
                        Code={'color180'} />
                </div> */}

            </div></>
    );
}

export default SlctColor;