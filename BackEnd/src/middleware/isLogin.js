import jwt from "jsonwebtoken"
import { generate_accessToken } from "./generate_AccessToken.js";

export const isLogin = async(req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken

        const info = jwt.verify(accessToken, `${process.env.JWT_ACCESS_SCREATE}`);

        req.user = info;

        next();
    } catch (error) {
        generate_accessToken(req, res, next)
    }
}