import User from '../models/User.js';
import { handleError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

const serviceID = 'VA4dad51595399e49d2c0faf72be535488';
const accountSID = 'ACce89c60ee42315c20e97d347bb5564f9';
const authToken = 'e8e1d0bf701f32f9eeefecbfe3e24504';

const client = twilio(accountSID, authToken);

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
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) return next(handleError(404, 'User already exist.'));

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hash,
      emailToken: crypto.randomBytes(64).toString('hex'),
    });

    const mail = {
      from: ' "Verify your email" <atuzierex@gmail.com>',
      to: user.email,
      subject: 'Leapsail Email verification',
      html: `<h2>${user.firstname}, Thanks for registering</h2>
      <h4>Please verify your email to continue</h4>
      <a href="https://lps-ng-app.herokuapp.com/api/auth/verify-email?token=${user.emailToken}">Verify your Email</a>`,
    };

    await user.save();

    transporter.sendMail(mail, (err, info, next) => {
      if (err) {
        res.send(err);
        return next(handleError(404, 'Email does not exist.'));
      } else {
        res.status(200).json(info);
      }
    });
  } catch (error) {
    next(error);
  }
};

//employees.map((employee)=> employee.id === event.current.id ? employee)

export const verifyEmail = async (req, res, next) => {
  try {
    const token = req.query.token;
    const user = await User.findOne({ emailToken: token });

    if (!user) {
      res.redirect('https://leapsail-web.netlify.app/register');
      return next(handleError(404, 'User does not exist.'));
    } else {
      user.verified = true;
      user.emailToken = null;

      await user.save();
      res.redirect('https://leapsail-web.netlify.app/login');
    }
  } catch (error) {
    next(error);
  }
};

export const sendOTP = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(handleError(404, 'User does not exist.'));
  try {
    res.send('work');
    // res.send(user);
    // client.verify.v2
    //   .services(serviceID)
    //   .verifications.create({ to: '+234' + user.phoneNumber, channel: 'sms' })
    //   .then((verification) => {
    //     console.log(verification.status);
    //     return res.status(200).json(verification);
    //   })
    //   .catch((error) => {
    //     return res.status(400).json(error);
    //   });
  } catch (error) {
    next(error);
  }
};

export const verifyMobile = async (req, res, next) => {
  try {
    const code = req.body.otp;

    const user = await User.findById(req.params.id);
    if (!user) return next(handleError(404, 'User does not exist.'));

    client.verify.v2
      .services(serviceID)
      .verificationChecks.create({
        to: '+234' + user.phoneNumber,
        code,
      })
      .then((verification_check) => {
        console.log(verification_check.status);
        return res.status(200).json(verification_check.status);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } catch (error) {}
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(handleError(404, 'User does not exist.'));

    if (!user.verified) return next(handleError(404, 'This email is Invalid.'));

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
