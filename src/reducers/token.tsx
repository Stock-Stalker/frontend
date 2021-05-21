export default (state: any = null, action: any) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.payload
        case 'DELETE_TOKEN':
            return null
    }
    return state
}
