import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import Models from '../../../models';

export default NextAuth({
  // Docs on adding providers: https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // GitHub docs on scope: https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: 'read:user',
    }),
  ],
  // provide MongoDB connection string
  adapter: Adapters.TypeORM.Adapter(
    // provide MongoDB connection string to persist user accounts to db
    process.env.MONGO_URI || '',
    // second argument used to pass custom models and schemas
    {
      models: {
        ...Adapters.TypeORM.Models,
        User: Models.User,
      },
    }
  ),
  // Docs on additional config options: https://next-auth.js.org/configuration/options
});
