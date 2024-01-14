const express = require('express')
const router = express.Router()
const projectController = require("../controllers/project.controller")




// Project get & post
router.route('/')
    .get(projectController.getProjects)
    .post(projectController.createProject)

// Get project by id
router.route('/:id')
    .get(projectController.getSingleProject)


module.exports = router;