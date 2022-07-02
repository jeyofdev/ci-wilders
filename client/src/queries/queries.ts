import { gql } from '@apollo/client';

export const GET_WILDERS = gql`
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

export const GET_WILDER_BY_ID = gql`
    query wilderById($id: ID!) {
        wilder(id: $id) {
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
