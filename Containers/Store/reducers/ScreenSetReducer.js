const initialState = {
    ShowRutine: false,
    LevelContainer: false,
    UserSignOn: true,
    menuState: false
}

const httpResponseExe = {
    writeStatus: false,
    readStatus: false,
    authStatus: false,
    signInStatus: null
}

const cameraState ={
    imageUri: null,
    imageUriLocation: null
}

const dbState ={
    dataToBd: null,
    dataFromBd: null,
    dataDeleted: null
}

// const counterScreenReducer = (state = initialState, { type, payload }) => {
export const ScreenSetReducer = (state = initialState, action) => {

    console.log('--->',action);
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
                UserSignOn: action.active
            }
        case 'MENU_STATE':
            return{
                ...state,
                menuState: action.status
            }

        default:
            return state
    }
}


export const HttpExeReducer = (state = httpResponseExe, action) => {
    
  switch (action?.type) {
  case 'WRITE_USER_INFO':
    return { 
        ...state, 
        writeStatus: action.status
    }

  case 'READ_USER_INFO':
    return { 
        ...state, 
        readStatus: action.status
    }

  case 'AUTH_USER':
    return { 
        ...state, 
        authStatus: action.status
    }

  case 'SIGN_IN_USER':
    return { 
        ...state, 
        signInStatus: action.status
    }

  default:
    return state
  }
}

export const cameraReducer = (state = cameraState, action) => {

    switch (action?.type) {

    case 'ADD_IMAGE':
        return { 
            ...state,
            imageUri: action?.uri
        }
        
    case 'IMAGE_URL':
        return { 
            ...state,
            imageUriLocation: action?.uriLocation
        }

    default:
        return state
    }
}

export const dbReducer = (state = dbState, action) => {

    switch (action?.type) {

    case 'INSERT_TO_BD':
        return { 
            ...state,
            dataToBd: action?.data
        }
        
    case 'READ_FROM_BD':
        return { 
            ...state,
            dataFromBd: action?.data
        }

    case 'DELETE_DATA_BD':
        return { 
            ...state,
            dataDeleted: action?.data
        }

    default:
        return state
    }
}