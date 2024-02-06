import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXTAUTH_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "mail@bunyaminerdal.com",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "mail@bunyaminerdal.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};

export const  sendContactEmail = async (
  name: string,
  email: string,
  context: string,
  subject: string
) => {
  await resend.emails.send({
    from: 'mail@bunyaminerdal.com',
    to: process.env.CONTACT_EMAIL??'',
    subject: `Contact Email - ${subject}`,
    html: `<p>Contact Email from, ${name} , ${email}</p><p><p><span>${context}</span></p></p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/verify-email?token=${token}`;

  await resend.emails.send({
    from: "mail@bunyaminerdal.com",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
