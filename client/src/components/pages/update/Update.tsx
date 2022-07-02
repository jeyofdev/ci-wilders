import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Loader from '../../atoms/loader/Loader';
import Form from '../../molecules/form/Form';
import Layout from '../../templates/layout/Layout';
import { GET_WILDER_BY_ID } from '../../../queries/queries';
import { GetWilderType } from '../../../types';

const Update = ({ ...props }) => {
    const { wilderId } = props.match.params;

    const { loading, data } = useQuery<GetWilderType>(GET_WILDER_BY_ID, {
        variables: { id: wilderId },
    });

    return (
        <Layout>
            {!loading ? (
                <>
                    <Link
                        to={`/details/${wilderId}`}
                        className="btn-link"
                        style={{ margin: '1rem 0 2rem' }}
                    >
                        Revenir à la page du wilder {data?.wilder?.name}
                    </Link>

                    <h2>Mise à jour du wilder {data?.wilder?.name}</h2>

                    {data?.wilder && (
                        <Form method="put" wilder={data?.wilder} />
                    )}
                </>
            ) : (
                <Loader />
            )}
        </Layout>
    );
};

export default Update;
