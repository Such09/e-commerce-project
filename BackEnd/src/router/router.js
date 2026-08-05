import { Router } from "express";
import { 
    createFirst, 
    firstCon, 
    secondCon, 
    thirdCon 
} from "../controller/homePage_controller.js";
import { 
    createUser, 
    loginUser, 
    logoutUser 
} from "../controller/auth_user.js";
import { searchData } from "../controller/searching_product_controller.js";
import { isLogin } from "../middleware/isLogin.js";
import { profile } from "../controller/user_info/profile.js";
import { upload } from "../middleware/multer.js";
import { updatePic } from "../controller/user_info/updatePic.js";
import { productData } from "../controller/products.js";
import { findProduct } from "../controller/product_findWith_id.js";
import { addProductInCart } from "../controller/addProductInCart.js";

const router = Router();

// Home page router
router.post('/first', createFirst)
router.get('/firstcon', firstCon)
router.get('/second_con', secondCon)
router.get('/third_con', thirdCon)

// user data
router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)

// Searching droducts...
router.get('/product', searchData)

// Sensetive information and user details
router.get('/profile', isLogin, profile)

// Update Profile Picture
router.put('/updatepic', upload.single("img"), updatePic)

// Get data of all Products.
router.get('/find_product', productData)

// Get Product with ID
router.get('/product_id/:id', findProduct)

// Add Product in Cart
router.post('/add_cart', addProductInCart)

export {router}