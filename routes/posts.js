const express = require("express");
const { update } = require("../models/post");
const router = express.Router();
const Post = require("../models/post");

//GET all Posts
router.get("/", async (req, res) => {
    // res.send("We are on posts");
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT a Post
router.post("/", (req, res) => {
    // console.log(req.body);
    const post = new Post( {
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => { 
            res.json(data);
        })
        .catch(err => { 
            res.json({ message: error });
        });
});

//GET specific Post
router.get("/:postId", async (req, res) => {
    const post = await Post.findById(req.params.postId);
    res.json(post);
});

//DELETE specific Post
router.delete("/:postId", async (req, res) => {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
});

//UPDATE specific Post
router.patch("/:postId", async (req, res) => {
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set : { title: req.body.title }}
        );
    res.json(updatedPost);
})

router.get("/specific", (req, res) => {
    res.send("we are on specific");
});

module.exports = router;