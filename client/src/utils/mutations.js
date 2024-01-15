export const LOGIN_USER =gql`
mutation login($email:String!, $password:String!){
    login(email:$email, password:$password){
    token
    user {
        _id
        username
        email
    }
}
}
`;

export const ADD_USER =gql `
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username:$username, email:$email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

export const SAVE_BOOK =gql `
mutation saveCard($userId:ID!, $cardData: InputCard!){
    saveCard(userId: $userId, cardData:$cardData){
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

`;

export const REMOVE_CARD =gql `
mutation removeCard($userId:ID!, $cardId:String!){
    saveCard(userId: $userId, cardId:$cardId){
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

`;
