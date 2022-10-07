import User from '../models/User.js';
import { handleError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

//

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: 'atuzierex0@gmail.com',
    pass: 'rroekeylxsylmzqc',
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
    const mail = {
      from: 'atuzierex0@gmail.com',
      to: user.email,
      subject: 'i no too like puff puff',
      html: `<h2>${user.firstname}</h2>, Thanks for registering
      <h4>Please verify your email to continue</h4>
      <a herf="https://${req.headers.host}/user/verify-email?token=${user.emailToken}">verify your email</a>`,
    };

    transporter.sendMail(mail, (err) => {
      if (err) {
        // next(handleError(404, 'Email does not exist.'));
        res.send(err);
      } else {
        res.status(200).json(savedUser);
      }
    });
    const savedUser = await user.save();
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
