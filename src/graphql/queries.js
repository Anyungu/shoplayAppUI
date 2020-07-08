


import { gql } from 'apollo-boost';

export const get_email = (email) => gql`
    {
    getOneUser(email: "lol") {
        ... on UserQueryFound {
        code
        data {
            email
            votes
            verified
        }
        message 
        }
        ... on UserQueryNotFound {
        code
        message
        }
    }
    }
  `
