import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/utils/mongodbAdapter";

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, {
        providers: [
            // Providers.GitHub({
            //     clientId: process.env.GITHUB_CLIENT_ID,
            //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
            // }),

            EmailProvider({
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: parseInt(process.env.EMAIL_SERVER_PORT),
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
            }),
        ],
        // debug: process.env.NODE_ENV === "development",
        debug: true,
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        // database: process.env.DATABASE_URL,
        adapter: MongoDBAdapter(clientPromise),
        callbacks: {
            async redirect({ url, baseUrl }) {
                return "/";
            },
        },
        pages: {
            // signIn: "/auth/signin",
            signIn: "/login",
            signOut: "/auth/signout",
            error: "/auth/error", // Error code passed in query string as ?error=
            verifyRequest: "/login/verify", // (used for check email message)
            newUser: null, // If set, new users will be directed here on first sign in
        },
    });