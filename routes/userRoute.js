import express from 'express';
const router = express.Router();


import { authUser, getUserProfile } from "../controller/userController.js";



router.route('/login').post(authUser);
router.route('/profile').get(getUserProfile);



export default router