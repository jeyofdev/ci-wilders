import * as styled from './Button.styled';
import { ButtonType } from '../../../types';

const Button = ({ children, themeColor, margin, onClick }: ButtonType) => (
    <styled.Button themeColor={themeColor} margin={margin} onClick={onClick}>
        {children}
    </styled.Button>
);

export default Button;
