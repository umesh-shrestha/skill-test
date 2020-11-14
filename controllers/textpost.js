exports.findAllTextPost = function (request, response, next) {
    response.send("works");
};

exports.createTextPost = function (request, response, next) {
    response.send("createTextPost");
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
