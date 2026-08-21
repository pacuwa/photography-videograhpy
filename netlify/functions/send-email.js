const sgMail = require('@sendgrid/mail')

exports.handler = async (event) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const data = JSON.parse(event.body || '{}')
    const botField = data['bot-field'] || ''

    // Simple spam check
    if (botField && botField.trim() !== '') {
      return { statusCode: 400, body: 'Spam detected' }
    }

    const { name, email, shootType, message } = data

    if (!email || !message) {
      return { statusCode: 400, body: 'Missing required fields' }
    }

    const msg = {
      to: process.env.EMAIL_TO || 'info.alrine@gmail.com',
      from: process.env.EMAIL_FROM || 'no-reply@photography.local',
      subject: `New booking/feedback from ${name || email}`,
      text: `Name: ${name || '-'}\nEmail: ${email}\nShoot type: ${shootType || '-'}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name || '-'}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Shoot type:</strong> ${shootType || '-'}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    }

    await sgMail.send(msg)
    return { statusCode: 200, body: 'ok' }
  } catch (err) {
    console.error('SendGrid error', err)
    return { statusCode: 500, body: 'Server error' }
  }
}
