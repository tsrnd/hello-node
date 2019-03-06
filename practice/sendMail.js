var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nguyencongduoc94@gmail.com',
    pass: 'secret'
  }
});

var mailOptions = {
  from: 'nguyencongduoc94@gmail.com',
  to: 'duoc.nguyen@asiantech.vn',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
