import { gql } from '@apollo/client';

export const CREATE_WILDER = gql`
    mutation createWilder($name: String!, $city: String!) {
        createWilder(name: $name, city: $city) {
            id
        }
    }
`;

export const UPDATE_WILDER = gql`
    mutation updateWilder($id: ID!, $name: String, $city: String) {
        updateWilder(id: $id, name: $name, city: $city) {
            id
            name
            city
            skills {
                title
                id
            }
        }
    }
`;

export const DELETE_WILDER = gql`
    mutation deleteWilder($id: ID!) {
        deleteWilder(id: $id) {
            id
            name
            city
            skills {
                id
                title
                votes
            }
        }
    }
`;
