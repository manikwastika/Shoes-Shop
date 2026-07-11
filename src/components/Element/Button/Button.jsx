function Buttons(props) {
  const { type, children } = props;
  return (
    <button
      type={type}
      className="w-full py-2 rounded-xl bg-black text-white font-Manrope font-bold hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Buttons;
