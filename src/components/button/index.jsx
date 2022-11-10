import { toast } from "../../utils/toastService";

import { StyledButton } from "./styled";

function Button({ backgroundColor }) {
  const handleClick = () => {
    toast.info("Info toast example");
  };

  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor}>
      Press me
    </StyledButton>
  );
}

export default Button;
