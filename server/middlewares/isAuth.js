import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies

        if(!token){
            return res.status(401).json({message:"user does not have a token"})
        }
        const verifyToken = jwt.verify(token , process.env.JWT_SECRET)
        
        if(!verifyToken){
            return res.status(401).json({message:"user does not have a valid token"})
        }
        req.userId = verifyToken.userId

        next()
   

    } catch (error) {
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            res.clearCookie("token", {
                httpOnly: true,
                secure: false,
                sameSite: "lax"
            })
            return res.status(401).json({message:`isAuth error ${error}`})
        }
        return res.status(500).json({message:`isAuth error ${error}`})
    }
    
}

export default isAuth