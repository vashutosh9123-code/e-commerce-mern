# Forever E-Commerce - Full Stack MERN Application

A premium, modern E-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). This project features a fully functional frontend store, a robust admin dashboard, and a secure backend API with payment integrations.

## 🚀 Features

- **Store Frontend**: Sleek, responsive design for browsing and purchasing products.
- **Admin Dashboard**: Manage products, orders, and view analytics.
- **Authentication**: Secure user and admin login using JSON Web Tokens (JWT).
- **Payment Integration**: Supports both **Stripe** and **Razorpay** for seamless transactions.
- **Image Management**: Integrated with **Cloudinary** for high-performance image hosting.
- **Cart System**: Fully functional shopping cart with persistently stored data.
- **Order Tracking**: Users can place and track their orders.
- **Modern Tech Stack**: Built with React 19 and Tailwind CSS 4 for a cutting-edge UI.

---

## 🛠️ Tech Stack

### Frontend & Admin
- **React 19** (Vite)
- **Tailwind CSS 4**
- **React Router Dom 7**
- **Axios** (API Requests)
- **React Hot Toast** (Notifications)

### Backend
- **Node.js** & **Express**
- **MongoDB** (via Mongoose)
- **JWT** (Authentication)
- **Multer** (File Handling)
- **Cloudinary** (Cloud Storage)
- **Payment Gateways**: Stripe & Razorpay

---

## 📂 Project Structure

```text
├── admin/          # React Admin Dashboard
├── backend/        # Node.js Express API
├── frontend/       # React Customer-facing Store
└── README.md       # Project Documentation
```

---

## ⚙️ Installation

### 1. Clone the Project
```bash
git clone https://github.com/vashutosh9123-code/e-commerce-mern.git
cd e-commerce-mern
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add your credentials:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
```
Run the server:
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin Setup
```bash
cd ../admin
npm install
npm run dev
```

---

## 🤝 Contribution

Feel free to fork this project and submit pull requests for any features or bug fixes.

## 📜 License

This project is licensed under the ISC License.
