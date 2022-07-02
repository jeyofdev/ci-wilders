import { FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as styled from './Form.styled';
import { CreateWilderFormType } from '../../../types';
import Input from '../../atoms/input/Input';
import { notifyError, notifySuccess } from '../../../utils/toasts';
import { CREATE_WILDER, UPDATE_WILDER } from '../../../queries/mutations';
import { useMutation } from '@apollo/client';
import { GET_WILDERS } from '../../../queries/queries';
import { useHistory } from 'react-router-dom';

const Form = ({ method, wilder }: CreateWilderFormType) => {
    const history = useHistory();
    const [name, setName] = useState(wilder?.name);
    const [city, setCity] = useState(wilder?.city);

    const [createWilder] = useMutation(CREATE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder "${name}" has been created`);
            setName('');
            setCity('');
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const [updateWilder] = useMutation(UPDATE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder "${name}" has been updated`);
            history.push(`/details/${wilder?.id}`);
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (method === 'post') {
                createWilder({ variables: { city, name } });
            }
            if (method === 'put') {
                updateWilder({ variables: { id: wilder?.id, city, name } });
            }
        } catch (error) {}
    };

    return (
        <styled.Container>
            <form onSubmit={onSubmit}>
                <Input
                    label="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.currentTarget.value);
                    }}
                />

                <Input
                    label="city"
                    name="city"
                    value={city}
                    onChange={(e) => {
                        setCity(e.currentTarget.value);
                    }}
                />

                {name && city && (
                    <div>
                        <styled.Submit type="submit" />
                    </div>
                )}
            </form>
            <ToastContainer position="bottom-right" />
        </styled.Container>
    );
};

Form.defaultProps = {
    wilder: {
        name: '',
        city: '',
    },
};

Form.propTypes = {
    onSuccess: PropTypes.func,
    method: PropTypes.string.isRequired,
    wilder: PropTypes.any,
};

export default Form;
