import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };