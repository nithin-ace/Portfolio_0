import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Create a transporter using your SMTP credentials
    // Note: You must add these to your .env.local file
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password (not your regular password)
      },
    });

    // 2. Setup the email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `[Portfolio System] New Transmission from ${name}`,
      text: `
        SYSTEM_RECEIPT: NEW_CONTACT_FORM_SUBMISSION
        ------------------------------------------
        SENDER_NAME: ${name}
        SENDER_EMAIL: ${email}
        MESSAGE_PAYLOAD:
        
        ${message}
        ------------------------------------------
        END_OF_TRANSMISSION
      `,
      replyTo: email
    };

    // 3. Execute the transmission
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Transmission Successful' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ message: 'Transmission Failed' }, { status: 500 });
  }
}
