import jwt from 'jsonwebtoken'
import { User } from '../moduls/user_modul.js';

export const generate_accessToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken

        const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`);

        const user = await User.findById({ _id: info.id })

        if (refreshToken !== user.refreshToken) {
            return res.status(401).json({
                message: "refresh token is not valid."
            })
        }

        const accessToken = jwt.sign({id: user._id, email: user.email}, `${process.env.JWT_ACCESS_SCREATE}`);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 10 * 60 * 1000
        })

        req.user = info;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "refresh token is not valid."
        })
    }
}