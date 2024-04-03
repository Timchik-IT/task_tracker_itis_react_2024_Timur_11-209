import React from "react";
import { StyledButton } from './styled';

const Button = ({ onClick, lable, color, disabled }) => {
    return(
        <StyledButton onClick={onClick} disabled={disabled} color={color}>
            {lable}
        </StyledButton>
    );
};

export default Button;
