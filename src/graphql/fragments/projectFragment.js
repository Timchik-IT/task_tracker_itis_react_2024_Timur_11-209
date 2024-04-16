import { gql } from "@apollo/client";

export default gql`
  fragment ProjectInfo on Project {
    description
    id
    name
    tasks {
      description
      id
      name
    }
  }
`;
