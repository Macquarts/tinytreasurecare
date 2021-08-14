import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $type: String!) {
    addUser(username: $username, email: $email, password: $password, type: $type) {
      token
      user {
        _id
        username
      }
    }
  }
`;