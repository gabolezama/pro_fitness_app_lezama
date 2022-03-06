const initialState = {
    ShowRutine: false,
    LevelContainer: false,
    UserForm: true
}

// const counterScreenReducer = (state = initialState, { type, payload }) => {
const ScreenSetReducer = (state = initialState, action) => {

    switch (action?.type) {

        case 'SHOW_RUTINE':
            return {
                ...state,
                ShowRutine: action.active
            }

        case 'LEVEL_CONTAINER':
            return {
                ...state,
                LevelContainer: action.active
            }

        case 'USER_FORM':
            return {
                ...state,
                UserForm: action.active
            }

        default:
            return state
    }
}

export default ScreenSetReducer