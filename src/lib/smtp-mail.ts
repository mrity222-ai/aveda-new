import nodemailer from 'nodemailer';

interface SendInquiryEmailParams {
  formType?: string;
  name: string;
  email?: string;
  phone: string;
  company?: string;
  service?: string;
  message?: string;
  businessLocation?: string;
  website?: string;
}

/**
 * Utility to send inquiry emails to info@avedatechnologies.com via SMTP
 */
export async function sendInquiryEmail(data: SendInquiryEmailParams): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'info@avedatechnologies.com';
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '';
    const recipientEmail = process.env.INQUIRY_RECEIVER_EMAIL || 'info@avedatechnologies.com';

    // If SMTP_PASS is missing in dev, log warning but don't crash
    if (!smtpPass) {
      console.warn('[SMTP Utility] SMTP_PASS env variable not set. Email logging fallback active.');
      console.log('Inquiry details:', data);
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const formTitle = data.formType || 'New Project Inquiry';
    const subject = `📩 [Aveda Tech] ${formTitle} from ${data.name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0B0F19; color: #ffffff; border-radius: 12px; border: 1px solid #1E293B;">
        <div style="text-align: center; border-bottom: 2px solid #EF4444; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #EF4444; margin: 0; font-size: 24px;">AVEDA TECHNOLOGIES</h2>
          <p style="color: #94A3B8; margin: 5px 0 0 0; font-size: 13px;">${formTitle} Received</p>
        </div>

        <div style="background-color: #1E293B; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #F8FAFC; margin-top: 0; font-size: 16px; border-bottom: 1px solid #334155; padding-bottom: 8px;">Contact Information</h3>
          
          <table style="width: 100%; border-collapse: collapse; color: #E2E8F0; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #94A3B8; width: 140px;"><strong>Full Name:</strong></td>
              <td style="padding: 6px 0; font-weight: bold;">${data.name}</td>
            </tr>
            ${data.email ? `
            <tr>
              <td style="padding: 6px 0; color: #94A3B8;"><strong>Email Address:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #38BDF8; text-decoration: none;">${data.email}</a></td>
            </tr>` : ''}
            <tr>
              <td style="padding: 6px 0; color: #94A3B8;"><strong>Phone Number:</strong></td>
              <td style="padding: 6px 0;"><a href="tel:${data.phone}" style="color: #38BDF8; text-decoration: none;">${data.phone}</a></td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 6px 0; color: #94A3B8;"><strong>Company Name:</strong></td>
              <td style="padding: 6px 0;">${data.company}</td>
            </tr>` : ''}
            ${data.service ? `
            <tr>
              <td style="padding: 6px 0; color: #94A3B8;"><strong>Service Required:</strong></td>
              <td style="padding: 6px 0; color: #EF4444; font-weight: bold;">${data.service}</td>
            </tr>` : ''}
            ${data.businessLocation ? `
            <tr>
              <td style="padding: 6px 0; color: #94A3B8;"><strong>Location:</strong></td>
              <td style="padding: 6px 0;">${data.businessLocation}</td>
            </tr>` : ''}
            ${data.website ? `
            <tr>
              <td style="padding: 6px 0; color: #94A3B8;"><strong>Website:</strong></td>
              <td style="padding: 6px 0;"><a href="${data.website}" target="_blank" style="color: #38BDF8; text-decoration: none;">${data.website}</a></td>
            </tr>` : ''}
          </table>
        </div>

        ${data.message ? `
        <div style="background-color: #1E293B; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #F8FAFC; margin-top: 0; font-size: 16px; border-bottom: 1px solid #334155; padding-bottom: 8px;">Project Scope & Message</h3>
          <p style="color: #CBD5E1; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>` : ''}

        <div style="text-align: center; color: #64748B; font-size: 12px; margin-top: 20px; border-top: 1px solid #1E293B; padding-top: 15px;">
          <p style="margin: 0;">This email was sent automatically from <strong>avedatechnologies.com</strong></p>
          <p style="margin: 4px 0 0 0;">Target Inbox: <strong>${recipientEmail}</strong></p>
        </div>
      </div>
    `;

    if (smtpPass) {
      const info = await transporter.sendMail({
        from: `"Aveda Tech Inquiries" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: data.email || smtpUser,
        subject: subject,
        html: htmlContent,
      });

      console.log(`[SMTP Mail] Email sent successfully to ${recipientEmail}. Message ID: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    }

    return { success: true };
  } catch (error: any) {
    console.error('[SMTP Mail Error]:', error);
    return { success: false, error: error?.message || 'Failed to send email' };
  }
}
