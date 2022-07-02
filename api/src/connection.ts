import { createConnection } from 'typeorm';
import Skill from './models/Skill';
import Wilder from './models/Wilder';

const getDatabaseConnection = async (
    database: string,
    url: string,
    logging: boolean = false
) => {
    await createConnection({
        type: 'postgres',
        url,
        database,
        entities: [Wilder, Skill],
        synchronize: true,
        logging,
    });
};

export default getDatabaseConnection;
