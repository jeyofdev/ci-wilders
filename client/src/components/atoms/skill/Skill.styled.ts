import styled from 'styled-components';

export const Votes = styled.span<{ children: number }>`
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${({ children }) =>
        children > 9 ? 'rgba(0, 100, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
    color: #fff;
    border-radius: 9999px;
    height: 20px;
    width: 20px;
`;
