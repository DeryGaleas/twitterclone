import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    afterAuth(){
        console.log("MiddleWare Activated")
    }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};