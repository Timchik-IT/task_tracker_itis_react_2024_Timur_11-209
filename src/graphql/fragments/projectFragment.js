import { gql } from "@apollo/client";

export default gql`
    fragment ProjectInfo on Project {
        id
        name
        description
    }
`