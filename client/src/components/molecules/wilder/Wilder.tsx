import { useState } from 'react';
import Skill from '../../atoms/skill/Skill';
import { SkillType, WilderType } from '../../../types';
import Button from '../../atoms/button/Button';
import Modal from '../../organisms/modal/Modal';
import Dialog from '../dialog/Dialog';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as styled from './Wilder.styled';
import { useMutation } from '@apollo/client';
import { DELETE_WILDER } from '../../../queries/mutations';
import { notifyError, notifySuccess } from '../../../utils/toasts';
import { GET_WILDERS } from '../../../queries/queries';

const Wilder = ({ id, name, city, skills }: WilderType) => {
    const [modalForDeleteIsShow, setModalForDeleteIsShow] = useState(false);

    const [deleteWilder] = useMutation(DELETE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder ${name} has been deleted`);
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const handleDelete = () => {
        try {
            deleteWilder({ variables: { id } });
            showOrHideModal();
        } catch (error) {}
    };

    const showOrHideModal = () => {
        setModalForDeleteIsShow(!modalForDeleteIsShow);
    };

    return (
        <styled.Article>
            <styled.Img
                src="/assets/images/blank-profile-picture-female.png"
                alt="Jane Doe Profile"
            />

            <styled.H3>{name}</styled.H3>
            <styled.Paragraph>{city}</styled.Paragraph>
            <styled.H4>Wild Skills</styled.H4>

            <styled.Ul className="skills">
                {skills?.map((skill: SkillType) => {
                    return (
                        <Skill
                            key={skill?.id}
                            title={skill?.title}
                            votes={skill?.votes}
                        />
                    );
                })}
            </styled.Ul>

            <Button
                themeColor="danger"
                margin="0.5rem"
                onClick={showOrHideModal}
            >
                Supprimer
            </Button>

            <Link to={`/details/${id}`} className="btn-card-link btn-info">
                Details
            </Link>

            {modalForDeleteIsShow && (
                <Modal onClose={showOrHideModal}>
                    <Dialog
                        content={`Êtes vous sûr de vouloir supprimer le wilder '${name}'?`}
                        onCancel={showOrHideModal}
                        onConfirmation={handleDelete}
                    />
                </Modal>
            )}
            <ToastContainer position="bottom-right" />
        </styled.Article>
    );
};

export default Wilder;
