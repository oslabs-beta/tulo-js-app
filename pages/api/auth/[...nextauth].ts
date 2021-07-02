import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

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
  // provide MongoDB connection string to persist user accounts to db
  database: process.env.MONGO_URI,
  // Docs on additional config options: https://next-auth.js.org/configuration/options
});
