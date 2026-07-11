function LabelsInput(props) {
  const { children, nameFors, classOps } = props;
  return (
    <label htmlFor={nameFors} className={`font-bold font-Funnel ${classOps}`}>
      {children}
    </label>
  );
}

export default LabelsInput;
