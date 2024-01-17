import express from "express";
import 
    {
    getPosts,
    getPostId,
    createPost,
    updatePost,
    deletePost
    } from "../controllers/UserController.js"

const router = express.Router();

router.get('/article/', getPosts);
router.get('/article/:id', getPostId);
router.post('/article/', createPost);
router.patch('/article/:id', updatePost);
router.delete('/article/:id', deletePost);

export default router;
