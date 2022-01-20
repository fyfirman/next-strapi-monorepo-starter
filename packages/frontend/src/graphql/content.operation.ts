import { gql } from "@apollo/client";

export const CONTENTS = gql`
  query Contents {
    contents {
      data {
        id
        attributes {
          key
          value
        }
      }
    }
  }
`;
