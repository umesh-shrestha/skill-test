const TextPost = require("../models/textpost");

exports.findAllTextPost = async function (request, response, next) {
    try {
        const textposts = await TextPost.find();
        response.status(200).json({ sucess: true, count: textposts.length, data: textposts });
    } catch (error) {
        response.status(400).json({ sucess: false });
    }
};

exports.createTextPost = async function (request, response, next) {
    try {
        const textpost = await TextPost.create(request.body);
        response.status(200).json({ sucess: true, data: textpost });
        response.send(data);
    } catch (error) {
        response.status(400).json({ sucess: false });
    }
};

exports.findTextPostById = async function (request, response, next) {
    try {
        const textpost = await TextPost.findById(request.params.id);
        if (!textpost) {
            return response.status(400).json({ sucess: false });
        }
        response.status(200).json({ status: true, data: textpost });
    } catch (error) {
        response.status(400).json({ sucess: false });
    }
};

exports.updateTextPostById = async function (request, response, next) {
    try {
        const textpost = await TextPost.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true,
        });
        if (!textpost) {
            return response.status(400).json({ success: false });
        }
        response.status(200).json({ success: true, data: textpost });
    } catch (error) {
        response.status(400).json({ success: false });
    }
};

exports.deleteTextPostById = async function (request, response, next) {
    try {
        const textpost = await TextPost.findByIdAndDelete(request.params.id);
        if (!textpost) {
            response.status(400).json({ sucess: false });
        }
        response.status(200).json({ sucess: true });
    } catch (error) {
        response.status(400).json({ status: false });
    }
};
