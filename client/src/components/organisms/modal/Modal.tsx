import { useEffect } from 'react';
// import FocusTrap from 'focus-trap-react';
import { ModalType } from '../../../types';
import * as styled from './Modal.styled';

const Modal = ({ children, onClose }: ModalType) => {
    useEffect(() => {
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', escape, false);
        document.body.style.overflow = 'hidden'; // disable scroll

        return () => {
            document.removeEventListener('keydown', escape, false);
            document.body.style.overflow = 'unset'; // enable scroll
        };
    }, [onClose]);

    return (
        <styled.Overlay
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* <FocusTrap
                focusTrapOptions={{
                    initialFocus: false,
                    clickOutsideDeactivates: true,
                }}
            > */}
            <styled.Content aria-modal>{children}</styled.Content>
            {/* </FocusTrap> */}
        </styled.Overlay>
    );
};

export default Modal;
