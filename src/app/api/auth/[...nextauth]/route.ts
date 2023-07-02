import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '655062743092-2nn2fgvr8oonel7492475mrlt076ia3p.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}
const handler=NextAuth(authOptions)

export {handler as GET , handler as POST}