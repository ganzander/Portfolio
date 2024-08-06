const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export async function POST(req) {
  const { name, email, phone_no, message } = await req.json();

  const mailOptions = {
    from: process.env.EMAIL,
    to: "ganeshmangla2003@gmail.com",
    subject: "Portfolio",
    text: `${name} tried to contact you via your portfolio.
    His/Her details are:
      Email: ${email} 
      Phone Number: ${phone_no} 
      Message: ${message} 
    `,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
      return Response.json({ Success: false });
    }
  });
  return Response.json({ Success: true });
}
