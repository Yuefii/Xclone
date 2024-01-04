import { NextApiRequest } from "next"
import { getSession } from "next-auth/react"
import prisma from "./prisma"

export const servAtuh = async (req: NextApiRequest) => {
    const session = await getSession({ req })

    if (!session?.user?.email) {
        throw new Error("user not sign in")
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if (!currentUser) {
        throw new Error("user not sign in")
    }

    return { currentUser }
}