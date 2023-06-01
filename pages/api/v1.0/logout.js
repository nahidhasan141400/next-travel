import cookie from "cookie";

export default async function handler(req, res) {

        res.setHeader("Set-Cookie",cookie.serialize("sort",'nahid',{
            maxAge:  100,
            sameSite: "strict",
            path: "/"
        }));
        res.send({ msg: "logout" });
    
 
}
