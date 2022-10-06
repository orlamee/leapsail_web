import User from '../models/User.js';
import { handleError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'atuzierex0@gmail.com',
    pass: 'habinuchi',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const user = new User({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    password: hash,
    emailToken: crypto.randomBytes(64).toString('hex'),
  });

  try {
    const savedUser = await user.save();

    const mail = {
      from: 'atuzierex0@gmail.com',
      to: savedUser.email,
      subject: 'i no too like puff puff',
      html: `<h2>${savedUser.firstname}</h2>`,
      text: 'no reason me , i like puff puff small',
    };

    transporter.sendMail(mail, (err) => {
      if (err) {
        // next(handleError(404, 'Email does not exist.'));
        res.send(err);
      } else {
        res.status(200).json(savedUser);
      }
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(handleError(404, 'User does not exist.'));

    const confirmPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!confirmPassword) return next(handleError(400, 'Password incorrect.'));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...others } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const products = await User.find();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
