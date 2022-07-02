import Layout from '../../templates/layout/Layout';
import { Link } from 'react-router-dom';
import Form from '../../molecules/form/Form';

const Create = () => {
    return (
        <Layout>
            <h2>Créer un wilder</h2>
            <Link to="/" className="btn-link" style={{ margin: '1rem 0 ' }}>
                Revenir à la page d'accueil
            </Link>

            <Form method="post" />
        </Layout>
    );
};

export default Create;
