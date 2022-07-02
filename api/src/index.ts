import dotenv from 'dotenv';
import 'reflect-metadata';
import getDatabaseConnection from './connection';
import getApolloServer from './getApolloServer';

dotenv.config();

const runServer = async () => {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL must be set in environment');
    }

    await getDatabaseConnection('./sqlite.db', process.env.DATABASE_URL, true);

    // eslint-disable-next-line no-console
    console.log('Connected to database');

    // await WilderModel.init();

    const server = await getApolloServer();

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
};

runServer();
