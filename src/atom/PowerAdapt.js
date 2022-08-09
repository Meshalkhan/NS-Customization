import Select from 'react-select'
const PowerAdapt = (props) => {

    const options = [
        { value: 'EUROPE 230V', label: 'EUROPE 230V' },
        { value: 'USA / CANADA 120V', label: 'USA / CANADA 120V' },
        { value: 'AUSTRALIA / NZ 230V', label: 'AUSTRALIA / NZ 230V' },
        { value: 'JAPAN 100V', label: 'JAPAN 100V' },
        { value: 'OTHER: Ask at Checkout', label: 'OTHER: Ask at Checkout' },
    ];
    return (
        <div className="row">
            <p className="fw-600 fs16 tc-grey-2 mb-0 col-md-5" >Power Adapter</p>
            <div className="col-md-7">

                <Select
                    value={props.Adptr}
                    onChange={(e) => { props.setAdptr(e) }}
                    options={options}
                    placeholder="Select Power Adapter"
                />

            </div>

        </div>
    );
}

export default PowerAdapt;