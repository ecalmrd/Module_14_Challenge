const router = require('express').Router();
const { User, Comment, Post } = require('../models');

router.get('/', async (req, res) =>{
    try {
        const postData = await Post.findAll({
            include: [User]
        })
        const posts = postData.map((post) => post.get ({plain:true}))
        // res.json(posts)
        res.render("homepage", {posts})
    } catch (err){
res.json(err)
    }
})
module.exports = router