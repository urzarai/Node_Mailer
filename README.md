# NodeMailer Mini Project

## 📧 Overview

This Node.js application demonstrates how to send emails using the Nodemailer library. It's a straightforward implementation suitable for learning purposes or as a foundation for more complex email-sending functionalities.

## 🛠️ Features

- Send emails through a simple web interface.
- Utilizes Nodemailer for email transport.
- Basic frontend form for user input.

## 📂 Project Structure

```
Node_Mailer/
├── node_modules/
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

- `public/index.html`: Contains the frontend form for user input.
- `server.js`: Sets up the Express server and handles form submissions.
- `package.json`: Lists project dependencies.

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.
- An email account (e.g., Gmail) for sending emails.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/urzarai/Node_Mailer.git
   cd Node_Mailer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add your email credentials:

   ```env
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

   *Note: If using Gmail, ensure that "Less secure app access" is enabled or use an App Password if you have 2-Step Verification enabled.*

4. **Start the server:**

   ```bash
   node server.js
   ```

5. **Access the application:**

   Open your browser and navigate to `http://localhost:3000` to use the email form.

## 📝 Usage

1. Open the application in your browser.
2. Fill in the recipient's email address, subject, and message.
3. Click the "Send" button to dispatch the email.

## 📬 Email Configuration

The application uses Nodemailer with SMTP transport. Ensure that your email provider's SMTP settings are correctly configured in the `.env` file.

For Gmail:

- SMTP Host: `smtp.gmail.com`
- Port: `587`
- Secure: `false`

## ⚠️ Important Notes

- Always keep your email credentials secure. Do not expose them in public repositories.
- For production use, consider implementing additional security measures and input validations.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
