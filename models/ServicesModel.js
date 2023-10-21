const mongoose = require("mongoose");
const Joi = require("joi");


const ServicesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, "Your Title is too short"],
        maxlength: [40, "Your Title is too long"]
    },
    description: {
        type: String,
        required: true,
        minlength: [15, "Your Description is too short"],
        maxlength: [200, "Your Description is too long"]
    },

    image: {
        type: String
    }
}, { timestamps: true });


function ServicesJoi(obj) {
    const schema = Joi.object({
        title:       Joi.string().min(3) .max(40) .required(),
        description: Joi.string().min(15) .max(200) .required(),
    })
    return schema.validate(obj)
}



const ServicesModel = mongoose.model('Services', ServicesSchema);

module.exports = {ServicesModel , ServicesJoi};
