import InputsForm from "./Input";
import LabelsInput from "./Labels";

function InputForms(props) {
  console.log(props);
  const { children, nameFors, types, placeholders } = props;
  return (
    <div className="px-15">
      <LabelsInput nameFors={nameFors}>{children}</LabelsInput>
      <InputsForm
        type={types}
        names={nameFors}
        nameID={nameFors}
        placeholders={placeholders}
      />
    </div>
  );
}

export default InputForms;
