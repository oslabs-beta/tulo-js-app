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

type OriginProp =
  | {
      authorized_origin: string;
    }
  | undefined;

const editAuthorizedOrigin = (origin: OriginProp) => ({
  type: types.EDIT_AUTHORIZED_ORIGIN,
  payload: origin,
});

export { updateUserSession, editAuthorizedOrigin };
