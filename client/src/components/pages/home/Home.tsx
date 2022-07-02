import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import * as styled from './Home.styled';
import Wilder from '../../molecules/wilder/Wilder';
import Loader from '../../atoms/loader/Loader';
import Layout from '../../templates/layout/Layout';
import { GET_WILDERS } from '../../../queries/queries';
import { GetWildersType, WilderType } from '../../../types';

const Home = () => {
    const { loading, data } = useQuery<GetWildersType>(GET_WILDERS);

    return (
        <Layout>
            <h2>Liste des wilders</h2>
            {!loading ? (
                <styled.Section
                    className="card-row"
                    role="list"
                    data-testid="wilderList"
                >
                    {data?.wilders ? (
                        data?.wilders.map((wilder: WilderType) => (
                            <Wilder
                                key={wilder?.id}
                                id={wilder?.id}
                                name={wilder?.name}
                                city={wilder?.city}
                                skills={wilder?.skills}
                            />
                        ))
                    ) : (
                        <styled.NoWilders>
                            Aucun wilder pour le moment
                        </styled.NoWilders>
                    )}
                </styled.Section>
            ) : (
                <Loader role="progressbar" data-testid="loader" />
            )}

            <Link
                to="/create"
                className="btn-link"
                style={{ marginTop: '2rem' }}
            >
                Ajouter un wilder
            </Link>
        </Layout>
    );
};

export default Home;
