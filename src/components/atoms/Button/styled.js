import styled, { css } from 'styled-components';

export const StyledButton = styled.button(
  ({ color }) => css`
    color: ${color};
    border: 1px solid ${color};
    border-radius: 0.25rem;

    font-weight: bold;
    padding: 0.5rem 1rem;

    &:hover {
        box-shadow: 0 0 0 2px white, 0 0 0 4px ${color};
    }
  `,
);
