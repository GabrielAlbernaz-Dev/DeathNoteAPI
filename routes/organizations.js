const express = require('express');
const router = express.Router();
const {getOrganizations,getOrganization,insertOrganization,editOrganization,deleteOrganization} = require('../controllers/organizationController');

// Validate
const {tokenValidate} = require('../middlewares/authMiddleware');

/* Read All Organizations */
router.get('/',tokenValidate, getOrganizations);

/* Read specific Organization */
router.get('/:id',tokenValidate, getOrganization);

/* Create a Organizations */
router.post('/',tokenValidate, insertOrganization);

/* Edit a Organization */
router.patch('/:id',tokenValidate, editOrganization);

/* Delete a Organization */
router.delete('/:id',tokenValidate, deleteOrganization);

module.exports = router;
    