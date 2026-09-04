import { asyncHandler } from '../utility/asyncHandler.js';
import apiError from '../utility/apiError.js'
import apiResponse from '../utility/apiResponse.js';
import { User } from '../moduls/user_modul.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    const user = await User.findOne({ email })
    if (user) {
        throw new apiError(409, "user already exist.")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)


    const registerUser = await User.create({
        username,
        email,
        password: hash
    })

    return res.status(201).json(new apiResponse(
        201,
        "User Resistred Successfully."
    ))
})

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new apiError(401, "Please fill app field")
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw new apiError(401, "Something went wrong.")
    }

    const result = await bcrypt.compare(password, user.password)
    if (result) {
        const accessToken = jwt.sign({ id: user._id, email: email }, `${process.env.JWT_ACCESS_SCREATE}`, { expiresIn: `${process.env.ACCESS_TIME}` });
        const refreshToken = jwt.sign({ id: user._id, email: email }, `${process.env.JWT_REFRESH_SCREATE}`, { expiresIn: `${process.env.REFRESH_TIME}` });

        // Set Token in browser
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        });

        // Set Token in database
        user.refreshToken = refreshToken;
        user.save();

        return res.status(200).json(new apiResponse(
            200,
            "Login Successfully."
        ));
    }else{
        throw new apiError(401, "Something went wrong")
    }
})

export const logoutUser = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) throw new apiError(401, "Token is not found.")

    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`)

    const user = await User.findById({ _id: info.id })

    user.refreshToken = "";
    user.save();

    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });

    return res.status(200).json(new apiResponse(
        200,
        "You are Logout successfully."
    ))
})