type UserStateObj = {
  _id: null | string;
  name: null | string;
  image: null | string;
  authorized_origins: null | string[];
};

// TODO: update payload types
type ActionProp = {
  type: string;
  payload: {
    _id?: null | string;
    name?: null | string;
    image?: null | string;
    authorized_origins?: null | string[];
  };
};

const initialState: UserStateObj = {
  _id: null,
  name: null,
  image: null,
  authorized_origins: null,
};

const userReducer = (state = initialState, action: ActionProp) => {
  switch (action.type) {
    case 'UPDATE_USER_SESSION':
      console.log('action.payload: ', action.payload);
      const { name, image } = action.payload;
      return { ...state, name, image };
    default:
      return state;
  }
};

export default userReducer;
