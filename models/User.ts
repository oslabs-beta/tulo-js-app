import Adapters from 'next-auth/adapters';

// NextAuth docs on extending models: https://next-auth.js.org/tutorials/typeorm-custom-models
// Issue thread on custom model with TypeScript: https://github.com/nextauthjs/next-auth/issues/861
export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(name: string, email: string, image: string, emailVerified: Date) {
    super(name, email, image, emailVerified);
  }
}

export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    // TODO: add custom properties to user schema
  },
};
