import * as types from './types';

let userInfoFromStorage = null;

userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Отправка формы -> Compare password & Generate token (2x) -> AccessToken (memory app) & RefreshToken (cookie) -> userInfo {} + accessToken 'jwt'

const initialState = {
  accessToken: '',
  userInfo: userInfoFromStorage,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { loading: true };
    case types.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload.userInfo,
        accessToken: action.payload.accessToken,
      };
    case types.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case types.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      return { loading: true };
    case types.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload.userInfo,
        accessToken: action.payload.accessToken,
      };
    case types.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case types.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;
