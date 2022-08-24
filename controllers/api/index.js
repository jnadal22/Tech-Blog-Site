const router = require('express').Router();
const BlogRoutes = require('./blogRoutes');
const UserRoutes = require('./userRoutes');

router.use('/blog', BlogRoutes);

router.use('/user', UserRoutes)


module.exports = router;