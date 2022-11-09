import { StyledButton } from "./styled";
import { toast } from "../../utils/toastService";

function Button({ backgroundColor }) {
  const handleClick = () => {
    toast.success("Success toast");
  };

  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor}>
      Press me
    </StyledButton>
  );
}

export default Button;
