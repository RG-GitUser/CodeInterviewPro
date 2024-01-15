import {gql} from '@apollo/client';
export const GET_ME =gpl`
query getMe($id:ID!){
    getSingleUser(id:$id){
        _id
        username
        email
        savedCards {
            cardId
            question
            answer
            category
        }
    }
}

`