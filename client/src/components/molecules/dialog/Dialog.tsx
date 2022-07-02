import { DialogType } from '../../../types';
import { Button } from '../../atoms/button/Button.styled';
import * as styled from './Dialog.styled';

const Dialog = ({ content, onCancel, onConfirmation }: DialogType) => {
    return (
        <div role="dialog">
            <styled.Title>{content}</styled.Title>
            <styled.BtnsGroup>
                <Button themeColor="danger" margin="0rem" onClick={onCancel}>
                    Annuler
                </Button>
                <Button
                    themeColor="success"
                    margin="0rem"
                    onClick={onConfirmation}
                    style={{ marginLeft: '1rem' }}
                >
                    Confirmer la suppression
                </Button>
            </styled.BtnsGroup>
        </div>
    );
};

export default Dialog;
