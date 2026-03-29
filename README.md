# Task Management Web App              Deployement link:  task-mangement-app-x.netlify.app

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python (Flask)
- Database: MySQL

## Features
- Create, Read, Update, Delete tasks
- REST API
- Persistent storage

## Setup
1. Create MySQL database using schema.sql
2. Install backend dependencies
3. Run Flask server
4. Open frontend/index.html in browser
=======
✅ Task_Management_web_app

A full-stack Task Management Web Application that allows users to create, view, update, and delete tasks with real-time status updates.
Built using Python (Flask), MySQL, and HTML/CSS/JavaScript, following REST API principles.

📌 Description

Task_Management_web_app helps users efficiently manage tasks by organizing them into statuses such as Pending, In-Progress, and Completed.
The application includes a modern frontend UI and a backend powered by Flask with MySQL for persistent storage.

🚀 Features

Create new tasks with title, description, and status

View all tasks dynamically

Update task status in real time

Delete tasks

RESTful API backend

MySQL database integration

Clean and responsive UI

🛠️ Tech Stack
Frontend

HTML5

CSS3

JavaScript (Vanilla)

Backend

Python 3.10+

Flask

Flask-SQLAlchemy

Flask-CORS

PyMySQL

Database

MySQL 8.0

📁 Project Structure
Task_Management_web_app/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── models.py
│   ├── routes.py
│   ├── test_mysql.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

⚙️ Prerequisites

Make sure you have installed:

Python 3.10 or later

MySQL Server 8.0

MySQL Command Line Client

pip (Python package manager)

🗄️ Database Setup
1️⃣ Open MySQL Command Line Client
CREATE DATABASE task_manager;
USE task_manager;

🔧 Backend Setup
2️⃣ Navigate to backend folder
cd Task_Management_web_app/backend

3️⃣ Create and activate virtual environment (optional)
python -m venv venv
venv\Scripts\activate

4️⃣ Install dependencies
pip install -r requirements.txt

5️⃣ Configure database connection

Edit backend/config.py:

SQLALCHEMY_DATABASE_URI = "mysql+pymysql://username:password@localhost/task_manager"
SQLALCHEMY_TRACK_MODIFICATIONS = False


Replace:

username → your MySQL username

password → your MySQL password

6️⃣ Test MySQL connection
python test_mysql.py


Expected output:

✅ MySQL 8.0 connected successfully

7️⃣ Run backend server
python app.py


Backend will start at:

http://127.0.0.1:5000

🌐 Frontend Setup
8️⃣ Navigate to frontend folder
cd ../frontend

9️⃣ Run frontend
Option 1 (Recommended)

Open index.html using Live Server in VS Code

Option 2

Open index.html directly in your browser

🔄 API Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Add a new task
PUT	/tasks/<id>/status	Update task status
DELETE	/tasks/<id>	Delete a task
🧪 Task Status Values

Pending

In-Progress

Completed

🧠 How Status Update Works

Frontend dropdown triggers a PUT API

Backend updates status in MySQL

UI refreshes automatically

📌 Notes

Backend must be running before frontend

MySQL service must be active

Do not use spaces in status values (use In-Progress)

👨‍💻 Author

Syed Sadain
Full Stack Python Developer
AI & LLM Deployment Enthusiast

📄 License

This project is created for learning, demonstration, and internship evaluation purposes.



