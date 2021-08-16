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
    $skillsandqualifications: String!
    $timeType: String!
    $postCode: String!
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
      skillsandqualifications: $skillsandqualifications
      timeType: $timeType
      postCode: $postCode
      experienceYears: $experienceYears
    ) {
      token
      user {
        _id
        type
        firstName
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

export const UPDATE_JOB_REQUEST = gql`
  mutation updateJobRequest($jobId: String!, $jobStatus: String!) {
    updateJobRequest(jobId: $jobId, jobStatus: $jobStatus) {
      _id
      jobStatus
    }
  }
`;