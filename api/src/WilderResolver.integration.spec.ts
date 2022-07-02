import { ApolloServer } from 'apollo-server';
import { getConnection } from 'typeorm';
import getApolloServer from './getApolloServer';
import getDatabaseConnection from './connection';
import Wilder from './models/Wilder';

describe('server', () => {
    let server: ApolloServer;

    beforeAll(async () => {
        server = await getApolloServer();

        if (!process.env.DATABASE_TEST_URL) {
            throw new Error('DATABASE_TEST_URL must be set in environment');
        }

        return getDatabaseConnection(
            './sqlite.db',
            process.env.DATABASE_TEST_URL
        );
    });

    beforeEach(async () => {
        const entities = getConnection().entityMetadatas;

        // purge database test
        for (const entity of entities) {
            const repository = getConnection().getRepository(entity.name);
            // await repository.clear();
            await repository.query(
                `TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE`
            );
        }
    });

    afterAll(async () => getConnection().close());

    describe('Query wilders', () => {
        const GET_WILDERS = `
            query wilders {
                wilders {
                    id
                    name
                    city
                    skills {
                        title
                        votes
                    }
                }
            }
        `;

        describe('when there are no wilders in database', () => {
            it('returns empty array', async () => {
                const result = await server.executeOperation({
                    query: GET_WILDERS,
                });

                expect(result.errors).toBeUndefined();
                expect(result?.data?.wilders).toStrictEqual([]);
            });
        });

        describe('when there are wilders in database', () => {
            it('returns all wilders in databases', async () => {
                // wilder A
                const wilderA = new Wilder();
                wilderA.name = 'john';
                wilderA.city = 'Paris';
                await wilderA.save();

                // wilder B
                const wilderB = new Wilder();
                wilderB.name = 'john';
                wilderB.city = 'Paris';
                await wilderB.save();

                const result = await server.executeOperation({
                    query: GET_WILDERS,
                });

                expect(result.errors).toBeUndefined();
                expect(result.data?.wilders).toMatchInlineSnapshot(`
                    Array [
                      Object {
                        "city": "Paris",
                        "id": "1",
                        "name": "john",
                        "skills": Array [],
                      },
                      Object {
                        "city": "Paris",
                        "id": "2",
                        "name": "john",
                        "skills": Array [],
                      },
                    ]
                `);
            });
        });
    });

    describe('mutation wilders', () => {
        const CREATE_WILDER = `
        mutation Mutation($name: String!, $city: String!) {
            createWilder(name: $name, city: $city) {
                id
                name
                city
                skills {
                    id
                    title
                    votes
                }
            }
        }`;

        it('Creates and returns wilder', async () => {
            const result = await server.executeOperation({
                query: CREATE_WILDER,
                variables: {
                    name: 'jean',
                    city: 'Bordeaux',
                },
            });

            expect(await Wilder.findOne({ name: 'jean' })).toHaveProperty(
                'city',
                'Bordeaux'
            );

            expect(await Wilder.findOne({ name: 'jean' }))
                .toMatchInlineSnapshot(`
                Wilder {
                  "city": "Bordeaux",
                  "id": 1,
                  "name": "jean",
                  "skills": undefined,
                }
            `);
            expect(result.errors).toBeUndefined();
            expect(result.data?.createWilder).toMatchInlineSnapshot(`
                Object {
                  "city": "Bordeaux",
                  "id": "1",
                  "name": "jean",
                  "skills": Array [],
                }
            `);
        });
    });
});
