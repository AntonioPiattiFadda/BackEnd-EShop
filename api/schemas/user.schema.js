const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);
const imgLogo = Joi.string().uri();
const pricePerHundredMeters = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
  imgLogo: imgLogo.required(),
  pricePerHundredMeters: pricePerHundredMeters.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
  imgLogo: imgLogo,
  pricePerHundredMeters: pricePerHundredMeters,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
