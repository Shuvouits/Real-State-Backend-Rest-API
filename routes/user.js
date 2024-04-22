const express = require('express')
const{signup, signin, google, updateUser, deleteUser, signOut, listingRouter, getUserListing, deleteListing, editListing, getListing, getUser, filterListing} = require('../controllers/user.js')
const {authUser} = require('../middleware/auth.js')
const router = express.Router();

router.post('/api/signup', signup);
router.post('/api/signin', signin);
router.post('/api/auth/google', google)

router.post('/api/update/:id', authUser, updateUser);
router.delete('/api/delete/:id', authUser, deleteUser);
router.get('/api/signout', authUser, signOut);
router.post('/api/listing', authUser, listingRouter);
router.get('/api/listing/:id', authUser, getUserListing);
router.get('/api/delete/:id', authUser, deleteListing);
router.post('/api/update-listing/:id', authUser, editListing);
router.get('/api/get-listing/:id', getListing);
router.get('/api/user/:id',  getUser);
router.get('/api/filter-list/get', filterListing);
module.exports = router;