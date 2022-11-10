import { toast } from "../../utils/toastService";
import { StyledButton } from "./styled";

function Button({ backgroundColor }) {
  const handleClick = () => {
    toast.success("Success toast example");
  };

  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor}>
      Press me
    </StyledButton>
  );
}

export default Button;
