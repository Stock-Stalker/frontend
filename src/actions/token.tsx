export const setToken = (token: string) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    };
};

export const deleteToken = () => {
    return {
        type: 'DELETE_TOKEN'
    };
};
