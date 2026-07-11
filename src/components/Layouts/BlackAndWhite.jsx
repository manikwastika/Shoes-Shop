function BnWBackgournd(props) {
  const { children } = props;
  return (
    <div className="w-full h-screen bg-gray-100 bg-[url(/img/Bg.jpg)] bg-top-left bg-no-repeat bg-cover">
      {children}
    </div>
  );
}

export default BnWBackgournd;
