
# 💊 Medizon – Your Online Medicine Store

**Medizon** is a full-stack e-commerce web application tailored for purchasing medicines online. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a seamless user experience with features like user authentication, cart management, and special promotional routes.

---

## 🚀 Features

- **User Authentication**: Secure login and signup functionalities.
- **Product Catalog**: Browse a wide range of medicines.
- **Shopping Cart**: Add, view, and manage products in your cart.
- **Special Offers**: Access exclusive deals through dedicated routes.
- **Responsive Design**: Optimized for various devices and screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Hooks, Context API

---

## 📂 Project Structure

```
medizon/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rupeshkumar18123/medizon.git
   cd medizon
   ```

2. **Install dependencies**:

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:

     ```bash
     cd ../frontend
     npm install
     ```

3. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add your configuration:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**:

   - Start the backend server:

     ```bash
     cd backend
     npm start
     ```

   - Start the frontend development server:

     ```bash
     cd ../frontend
     npm start
     ```

   The application should now be running at `http://localhost:3000`.

---


## 📬 Contact

For any inquiries or feedback, feel free to reach out:

- **GitHub**: [Rupesh Kumar](https://github.com/rupeshkumar18123)

