import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate required fields
  if (
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.company ||
    !body.industry ||
    !body.teamSize ||
    !body.challenge ||
    !body.preferredTime
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  try {
    // Configure your email service
    // Using Gmail as example - you can replace with your email service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    const adminEmailContent = `
      <h2>New Discovery Call Request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Company:</strong> ${body.company}</p>
      <p><strong>Industry:</strong> ${body.industry}</p>
      <p><strong>Team Size:</strong> ${body.teamSize}</p>
      <p><strong>Challenge:</strong> ${body.challenge}</p>
      <p><strong>Preferred Time:</strong> ${body.preferredTime}</p>
    `;

    // Email to client
    const clientEmailContent = `
      <h2>Thank You for Your Discovery Call Request!</h2>
      <p>Hi ${body.name},</p>
      <p>We've received your request for a discovery call with ABC Sales Consulting. Our team will review your information and contact you shortly to schedule the perfect time for our conversation.</p>
      <p>In the meantime, if you have any questions, feel free to reach out to us.</p>
      <p>Best regards,<br>The ABC Sales Consulting Team</p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "admin@abcsalesconsulting.net",
      subject: `New Discovery Call Request from ${body.name}`,
      html: adminEmailContent,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: "Discovery Call Request Received - ABC Sales Consulting",
      html: clientEmailContent,
    });

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
    });
  }
});
