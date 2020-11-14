const express = require("express");
const { route } = require("../../bootcamp/routes/bootcamps");
const router = express.Router();
const {
    findAllTextPost,
    findTextPostById,
    createTextPost,
    updateTextPostById,
    deleteTextPostById,
} = require("../controllers/textpost");

router.route("/").get(findAllTextPost);
router.route("/create-text-post").post(createTextPost);
router.route("/:id").get(findTextPostById).put(updateTextPostById).delete(deleteTextPostById);

module.exports = router;
