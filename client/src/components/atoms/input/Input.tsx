import * as styled from './Input.styled';
import { InputType } from '../../../types';

const Input = ({ label, name, value, onChange }: InputType) => {
    return (
        <div>
            <styled.Label>{label}:</styled.Label>
            <styled.Input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
