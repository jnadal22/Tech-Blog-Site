const router = require('express').Router();
const res = require('express/lib/response');
const { restore } = require('../../models/blog');
// const { Blog } = require('../../models');
const blog = require('../../models/blog');



router.post('/',withAuth, async (req,res) => {
    try {
        const newBlog = await blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }

});

router.get('/', async (req,res) => {
    try{
        const blogData = await blog.findAll({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', async (req,res) => {
    try{
        const blogData = await blog.destroy({
           where:{ ...req.body, 
            user_id: req.session.user_id,
           },
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
       
});


module.exports = router;