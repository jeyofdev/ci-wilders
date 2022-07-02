import styled from 'styled-components';
import { DANGER, SUCCESS } from '../../../styles/constants.styles';

export const Button = styled.button<{ themeColor: string; margin: string }>`
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.4rem;
    border: none;
    background-color: ${({ themeColor }) =>
        themeColor === 'success' ? SUCCESS : DANGER};
    color: white;
    margin: ${({ margin }) => margin};
    margin-left: 0;

    cursor: pointer;
`;
