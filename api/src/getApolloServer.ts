import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import WilderResolver from './resolvers/WilderResolver';

const getApolloServer = async () => {
    const schema = await buildSchema({ resolvers: [WilderResolver] });
    const server = new ApolloServer({ schema });
    return server;
};

export default getApolloServer;
