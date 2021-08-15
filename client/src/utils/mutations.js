import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        type
        firstName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $type: String!
    $ageType: String!
    $careType: String!
    $timeType: String!
    $zipCode: String!
    $experienceYears: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      type: $type
      ageType: $ageType
      careType: $careType
      timeType: $timeType
      zipCode: $zipCode
      experienceYears: $experienceYears
    ) {
      token
      user {
        _id
        type
      }
    }
  }
`;

export const SEND_JOB_REQUEST = gql`
  mutation sendJobRequest($carerId: String!) {
    sendJobRequest(carerId: $carerId) {
      _id
    }
  }
`;