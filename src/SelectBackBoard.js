import React from 'react'

function SelectBackBoard(props) {


    return (
        <>
            {console.log(props.neonbackground, '123')}
            <p className="fw-bold fs13 my-2 tc-grey-2">SELECT YOUR BACKBOARD:</p>
            <div className="text-center" style={{
                background: '#f5f5f5', padding: '10px 0',
                borderRadius: '15px',
                margin: '10px',
            }}>
                <img src={props.neonbackground} width={171} />
                <select onChange={(e) => { props.setneonbackground(e.target.value) }} className="form-control form-control-sm my-2"
                    style={{
                        background: '#f5f5f5', padding: '0 10px ',
                    }}>
                    <option value={props.neonbackground1} className='fs-small'>Cut Around Acrylic: Hang/Wall-mount <span className='tc-pink'>FREE</span></option>
                    <option value={props.neonbackground2} className='fs-small'>Rectangle Acrylic: Hang/Wall-mount <span className='tc-pink'>FREE</span></option>
                    <option value={props.neonbackground3} className='fs-small'>Cut To Letter: Hang/Wall-mount <span className='tc-pink'>+$27</span>
                    </option>
                    <option value={props.neonbackground4} className='fs-small'>Acrylic Stand: Free-Standing <span className='tc-pink'>+$27</span></option>
                    <option value={props.neonbackground5} className='fs-small'>Open Box: Wall-mount <span className='tc-pink'>+$82</span></option>
                </select>
            </div>
            <p className="fw-bold fs13 my-2 tc-grey-2">(more options will be available soon for backgrounds)</p>

            <div className='total-section d-inline-flex w-100 p-3'>
                <p className='mb-0 mt-2 fs-14'>Total with selected options:</p>
                <p className='fs22 ms-auto mb-1'>PKR {props.Price}</p>
            </div>
        </>
    )
}

export default SelectBackBoard