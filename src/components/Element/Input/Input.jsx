function InputsForm(props) {
  const { type, names, nameID, placeholders } = props;
  return (
    <input
      type={type}
      name={names}
      id={nameID}
      className="w-full py-2.5 bg-white mt-1 rounded-xl px-3 shadow-sm border border-gray-200"
      placeholder={placeholders}
    />
  );
}

export default InputsForm;
