import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("file"); // File object

    // Check if nodemailer environment variables are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || "ganeshmangla2003@gmail.com";

    if (!emailUser || !emailPass) {
      console.error("Nodemailer configuration error: EMAIL_USER and EMAIL_PASS environment variables are not defined.");
      return NextResponse.json(
        { 
          success: false, 
          error: "Server email configuration is missing. Please configure EMAIL_USER and EMAIL_PASS in your environment." 
        }, 
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass, // Gmail App Password
      },
    });

    // Prepare attachments array
    const attachments = [];
    if (file && file.size > 0 && typeof file.arrayBuffer === "function") {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Email Options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `Portfolio Message from ${firstName} ${lastName}`,
      html: `
        <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #111827; min-height: 100%;">
          <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            
            <!-- Content Header -->
            <div style="padding: 30px 40px 20px 40px; border-bottom: 1px solid #f3f4f6;">
              <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0;">
                New Contact Form Submission
              </h2>
            </div>
            
            <!-- Content Body -->
            <div style="padding: 30px 40px 40px 40px;">
              <p style="margin-top: 0; margin-bottom: 24px; font-size: 14px; color: #4b5563; line-height: 1.5;">
                You have received a new message through the contact form on your portfolio website. Details are provided below:
              </p>

              <!-- Sender Details -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500; width: 25%;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a>
                  </td>
                </tr>
                ${file && file.size > 0 ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;">Attachment</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">
                    <span style="background-color: #f3f4f6; padding: 4px 8px; border-radius: 4px; border: 1px solid #e5e7eb; font-size: 12px; display: inline-block;">📎 ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </td>
                </tr>
                ` : ""}
              </table>

              <!-- Message Block -->
              <div style="margin-bottom: 10px;">
                <h3 style="font-size: 13px; font-weight: 600; color: #4b5563; text-transform: uppercase; margin-bottom: 10px; margin-top: 0; letter-spacing: 0.5px;">Message</h3>
                <div style="background-color: #f9fafb; border-left: 4px solid #9ca3af; padding: 18px; border-radius: 6px; font-size: 14px; color: #1f2937; line-height: 1.6; white-space: pre-wrap; font-style: italic;">
                  ${message}
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 20px 40px; border-top: 1px solid #f3f4f6; text-align: center; font-size: 12px; color: #9ca3af;">
              <p style="margin: 0;">
                Sent via the portfolio website contact system.
              </p>
              <p style="margin: 4px 0 0 0;">
                &copy; ${new Date().getFullYear()} ${site.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
      attachments,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer endpoint error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred while sending the email. " + error.message },
      { status: 500 }
    );
  }
}
