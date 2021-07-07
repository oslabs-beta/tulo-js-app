import * as types from './actionTypes';

type UserProp =
  | {
      _id: string | null | undefined;
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

const updateUserSession = (user: UserProp) => ({
  type: types.UPDATE_USER_SESSION,
  payload: user,
});

export { updateUserSession };
