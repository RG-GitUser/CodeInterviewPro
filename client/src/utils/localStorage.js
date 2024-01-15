//retrieves the saved card is from localstoryage
export const getSavedCardIds = () => {
    const savedCardIds = localStorage.getItem('saved_cards')
    ?JSON.parse(localStorage.getItem('saved_cards'))
    : [];

    return savedCardIds;
};
//saves a list of card Ids to localstorage
export const saveCardIds = (CardIdArr) => {
    if (CardIdArr.length) {
        localStorage.setItem('saved_cards',JSON.stringify(CardIdArr));
    } else {
        localStorage.removeItem('saved_cards');
    }
};

export const removeCardId = (cardId) => {
    const savedCardIds = localStorage.getItem('saved_cards')
    ? JSON.parse(localStorage.getItem('saved_cards'))
    :null;
    if (!savedCardIds) {
        return false;
    }
    const updatedsavedCardIds = savedCardIds?.filter((savedCardId) => savedCardId != cardId);
    localStorage.setItem('saved_cards', JSON.stringify(updatedsavedCardIds));
    return true;
};