import mongoose from 'mongoose';

type UserStateObj = {
  _id: null | mongoose.Schema.Types.ObjectId;
  name: null | string;
  image: null | string;
  email: null | string;
  authorized_origins: null | string[];
};

// TODO: update payload types
type ActionProp = {
  type: string;
  payload: {
    _id?: null | mongoose.Schema.Types.ObjectId;
    name?: null | string;
    image?: null | string;
    email?: null | string;
    authorized_origins?: null | string[];
  };
};

const initialState: UserStateObj = {
  _id: null,
  name: null,
  image: null,
  email: null,
  authorized_origins: null,
};

const userReducer = (state = initialState, action: ActionProp) => {
  switch (action.type) {
    case 'UPDATE_USER_SESSION':
      const { name, image, email, _id } = action.payload;
      return { ...state, name, image, email, _id };
    default:
      return state;
  }
};

export default userReducer;
