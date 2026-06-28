const InputText = ({ oldProps }) => {
  return (
    <div className="mb-3">
      <label htmlFor="sign-text" className="field-label">
        Sign text
      </label>
      <textarea
        id="sign-text"
        className={`inputText w-100 ${oldProps.isArabic ? 'ArabicDir' : ''}`}
        placeholder="Enter your text — press Enter for a new line"
        name="UserInput"
        value={oldProps.UserInput === 'Type Here' ? '' : oldProps.UserInput}
        onChange={(e) => {
          const val = e.target.value || 'Type Here';
          oldProps.setUserInput(val);
        }}
        rows={3}
      />
    </div>
  );
};

export default InputText;
