import styled from 'styled-components';

import { Container } from '../../templates/layout/Layout.styled';

export const StatusMessage = styled.span<{ success: boolean }>`
    color: ${({ success }) => (success ? 'green' : 'red')};
`;

export const Submit = styled.input`
    padding: 0.5rem;
    margin-top: 1rem;
    background-color: #f76c6c;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;

export { Container };
