import { gql } from '@apollo/client';

export const GET_CARERS = gql`
  query getCarers {
    getCarers {
      _id
      firstName
      lastName
      email
      careType
      ageType
      timeType
      experienceYears
    }
  }
`;

export const GET_SENT_REQUESTS = gql`
  query getSentRequests {
    getSentRequests {
      _id
      parentId
      carerId {
        _id
        firstName
        lastName
        email
        careType
        ageType
        timeType
        experienceYears
      }
    }
  }
`;

export const GET_RECEIVED_REQUESTS = gql`
  query getRecievedRequests {
    getRecievedRequests {
      _id
      carerId
      parentId {
        _id
        firstName
        lastName
        email
        careType
        ageType
        timeType
        experienceYears
      }
    }
  }
`;