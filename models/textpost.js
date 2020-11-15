const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const TextPostSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please add post title."],
            trim: true,
            maxlength: [200, "Title can not be more than 200 characters"],
        },
        slug: String,
        author: {
            type: String,
            required: [true, "Please add author name."],
        },
        description: {
            type: String,
            required: [true, "Please add a description."],
            maxlength: [500, "Description can not be more than 500 characters."],
        },
    },
    { timestamps: true }
);

TextPostSchema.pre("save", function (next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});
module.exports = mongoose.model("TextPost", TextPostSchema);
