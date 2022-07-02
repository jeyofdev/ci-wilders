import Layout from '../../templates/layout/Layout';
import { GetWilderType, SkillType } from '../../../types';
import Skill from '../../atoms/skill/Skill';
import { Link } from 'react-router-dom';
import * as styled from './Details.styled';
import { useQuery } from '@apollo/client';
import { GET_WILDER_BY_ID } from '../../../queries/queries';
import Loader from '../../atoms/loader/Loader';
import { ToastContainer } from 'react-toastify';

const Details = ({ ...props }) => {
    const { wilderId } = props?.match?.params;

    const { loading, data } = useQuery<GetWilderType>(GET_WILDER_BY_ID, {
        variables: { id: wilderId },
    });

    return (
        <Layout>
            <Link to="/" className="btn-link">
                Revenir à la page d'accueil
            </Link>

            {!loading ? (
                <styled.Section className="card-row">
                    {data?.wilder && (
                        <styled.Article>
                            <styled.Img
                                src="/assets/images/blank-profile-picture-female.png"
                                alt="profile"
                            />

                            <styled.H3>{data?.wilder?.name}</styled.H3>
                            <p>{data?.wilder?.city}</p>

                            {data?.wilder?.skills.length > 0 && (
                                <>
                                    <styled.H4>Wild Skills</styled.H4>

                                    <styled.Ul className="skills">
                                        {data?.wilder?.skills.map(
                                            (skill: SkillType) => {
                                                return (
                                                    <Skill
                                                        key={skill?.id}
                                                        title={skill?.title}
                                                        votes={skill?.votes}
                                                    />
                                                );
                                            }
                                        )}
                                    </styled.Ul>
                                </>
                            )}

                            <div style={{ marginTop: '2rem' }}>
                                <Link
                                    to={`/update/${wilderId}`}
                                    className="btn-card-link btn-success"
                                >
                                    Mettre à jour
                                </Link>
                            </div>
                        </styled.Article>
                    )}
                </styled.Section>
            ) : (
                <Loader />
            )}

            <ToastContainer position="bottom-right" />
        </Layout>
    );
};

export default Details;
