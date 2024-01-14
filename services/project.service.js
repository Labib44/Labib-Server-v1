const Project = require("../models/Project")


// Post project service
exports.createProjectService = async (data) => {
    const project = await Project.create(data)
    return project;
}

// Get All project service
exports.getProjectService = async (_id) => {
    const projects = await Project.find({}).sort({_id:-1})
    return projects;
}

// Get project by id
exports.getSingleProjectService = async (projectId) => {
 
    const result = await Project.findById(projectId)
    return result;
}
