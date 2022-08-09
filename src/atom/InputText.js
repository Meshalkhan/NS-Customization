const InputText = ({ oldProps }) => {
    return (
        <>
            <div className="mt-3">
                <textarea
                    className={`inputText w-100 py-3 ${oldProps.isArabic? 'ArabicDir' : null}`}
                    placeholder='ENTER TEXT HERE &#10;Press Enter/Return for a new line'
                    name='UserInput'
                    onChange={(e) => {
                        if (e.key === "Enter") {
                            oldProps.setUserInput(`${e.target.value}\n`);
                        }
                        oldProps.setUserInput(e.target.value);
                    }} />

            </div>
        </>
    );
}

export default InputText;