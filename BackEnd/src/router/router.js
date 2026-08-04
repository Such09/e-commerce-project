import { Router } from "express";
import { 
    createFirst, 
    firstCon, 
    secondCon, 
    thirdCon 
} from "../controller/homePage_controller.js";
import { 
    shoseCon, 
    watchCon, 
    beltCon, 
    bookCon, 
    men_shirtCon, 
    perfumeCon 
} from "../controller/container_1_controller.js";
import { 
    mobileCon, 
    laptopCon, 
    tabletCon 
} from "../controller/container_2_controller.js"
import { kurtiCon } from "../controller/container_3_controller.js";
import { 
    createUser, 
    loginUser, 
    logoutUser 
} from "../controller/auth_user.js";
import { 
    belt_product, 
    book_product, 
    perfume_product, 
    shirt_product, 
    shoe_product, 
    watch_product 
} from "../controller/container_1_show_product.js";
import { 
    laptopProduct, 
    mobileProduct, 
    tabletProduct 
} from "../controller/container_2_show_product.js";
import { kurtiProduct } from "../controller/container_3_show_product.js";
import { searchData } from "../controller/searching_product_controller.js";
import { isLogin } from "../middleware/isLogin.js";
import { profile } from "../controller/user_info/profile.js";
import { upload } from "../middleware/multer.js";
import { updatePic } from "../controller/user_info/updatePic.js";

const router = Router();

// Home page router
router.post('/first', createFirst)
router.get('/firstcon', firstCon)
router.get('/second_con', secondCon)
router.get('/third_con', thirdCon)

// First container
router.get('/shoes', shoseCon)
router.get('/watch', watchCon)
router.get('/belt', beltCon)
router.get('/book', bookCon)
router.get('/shirt', men_shirtCon)
router.get('/perfume', perfumeCon)

// Second container
router.get('/mobile', mobileCon)
router.get('/laptop', laptopCon)
router.get('/tablet', tabletCon)

// Third container
router.get('/kurti', kurtiCon)

// user data
router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)

// Specific product
// container-1
router.get('/shoes/:id', shoe_product)
router.get('/belt/:id',  belt_product)
router.get('/watch/:id', watch_product)
router.get('/book/:id', book_product)
router.get('/perfume/:id',  perfume_product)
router.get('/shirt/:id', shirt_product)

// container-2
router.get('/mobile/:id', mobileProduct)
router.get('/laptop/:id', laptopProduct)
router.get('/tablet/:id', tabletProduct)

// container-3
router.get('/kurti/:id', kurtiProduct)

// Searching droducts...
router.get('/product', searchData)

// Sensetive information and user details
router.get('/profile', isLogin, profile)

// Update Profile Picture
router.put('/updatepic', upload.single("img"), updatePic)

export {router}