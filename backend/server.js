import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/enquiry", async (req, res) => {
  const { name, phone, email, serviceType, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vdelhiambulanceservices@gmail.com",
        pass: "xrag mkxz tkrj tyoe",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "vdelhiambulanceservices@gmail.com",
      subject: "New Ambulance Enquiry",
      text: `
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Service: ${serviceType}
          Message: ${message}
          `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");

  app.get("/", (req, res) => {
    res.send("Delhi Ambulance Backend Running");
  });

});
