const initial_state = {
    user_id: '',
    user_name: ''
};

const UserReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return {
                user_id: action.payload.id,
                user_name: action.payload.name
            }
        
        default:
            return state;
    }
}

export default UserReducer;