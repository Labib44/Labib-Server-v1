const { getProjectService, createProjectService, getSingleProjectService,  } = require("../services/project.service")


// Post projects
exports.createProject = async (req, res, next) => {

    try {
        const result = await createProjectService(req.body)

        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        })
    }
}


// Get all projects  ---------------------------------------------------------
exports.getProjects = async (req, res, next) => {
    try {
        const products = await getProjectService()
        res.status(200).json({
            status: "Success",
            data: products
        })

    } catch (error) {
        res.status(400).json({
            status: "Field",
            message: "Can't get the data",
            error: error.message
        })
    }
}

// Get project by id
exports.getSingleProject = async (req, res) => {
    try {
        const projectId = req.params.id
        
        const project = await getSingleProjectService(projectId)
        res.status(200).json({
            status: "Success",
            data: project
            
        })

    } catch (error) {
        res.status(400).json({
            status: "Field",
            message: "Can't get the data ",
            error: error.message
        })
    }
}

