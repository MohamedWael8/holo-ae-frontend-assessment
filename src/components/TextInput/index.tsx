import { StyledTextInput } from "./styles";

type TextInputProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({ placeholder, onChange }) => (
  <StyledTextInput type="text" placeholder={placeholder} onChange={onChange} />
);

export default TextInput;
