//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const fromEmail = process.env.FROM_EMAIL
const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req, res) {

    const  body  =  await req.json();
    const {email, subject, message} = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react:( <>
      <hi>{subject}</hi>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
      </>),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ req });
  }
}
