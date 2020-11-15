const TextPost = require("../models/textpost");

exports.findAllTextPost = function (request, response, next) {
    response.send("works");
};

exports.createTextPost = async function (request, response, next) {
    try {
        const textpost = await TextPost.create(request.body);
        response.status(200).json({ sucess: true, data: textpost });
    } catch (error) {
        response.status(400).json({ sucess: false });
        next(error);
    }
};

exports.findTextPostById = function (request, response, next) {
    response.send("findPostById");
};

exports.updateTextPostById = function (request, response, next) {
    response.send("updateTextPostById");
};

exports.deleteTextPostById = function (request, response, next) {
    response.send("deleteTextPostById");
};
