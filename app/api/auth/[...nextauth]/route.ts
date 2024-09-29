import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Sign In',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log("Authorize: Username and Password received", username, password);

        // Return user object with userId
        return {
          id: "user1",
          name: "User Name",
          userId: "12345",
          email: "randomEmail@example.com"
        };
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.userId = user.userId;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.sub;
        session.user.userId = token.userId;
      }
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      console.log("url",url, url.startsWith(baseUrl) ? url : `${baseUrl}/chat`)
      return `${baseUrl}/chat`;
    },
  },
});

export { authOptions as GET, authOptions as POST };
