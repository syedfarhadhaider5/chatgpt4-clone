import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '572381995622-dbgptmgce0vtqa5pto61k87fqiv5rdna.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}
const handler=NextAuth(authOptions)

export {handler as GET , handler as POST}