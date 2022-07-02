import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    padding: 0.5rem 0;
    text-transform: capitalize;
`;

export const Input = styled.input`
    box-sizing: content-box;
    display: block;
    padding: 0.75rem;
    width: calc(100% - (2 * 0.5rem));
    border-radius: 5px;
    border: 1.5px solid rgba(231, 76, 60, 0.5);
`;
