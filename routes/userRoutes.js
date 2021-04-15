import express from 'express';
const router = express.Router();


import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser } from "../controller/userController.js";
import { protect, admin } from '../middleware/authMiddleware.js'



router.route('/login')
      .post(authUser);

router.route('/')
      .post(registerUser)
      .get(protect, admin, getUsers);

router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile);
      
router.route('/:id')
      .delete(protect, admin, deleteUser);




export default router