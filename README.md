![Project Banner](https://drive.google.com/uc?export=view&id=1dvZ6G0MqPCj0Y4z-pLHL88Fvot5NEcWz)

# Project Setup

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository_url>
```

### 2. Navigate to the Project Directory
```bash
cd <project_directory_name>
```

### 3. Install Virtualenv (if not already installed)
```bash
pip install virtualenv
```

### 4. Create a Virtual Environment
```bash
virtualenv envname
```

### 5. Activate the Virtual Environment
```bash
# On Windows
envname\Scripts\activate

# On macOS / Linux
source envname/bin/activate
```

### 6. Install the Requirements
```bash
pip install -r requirements.txt
```

### 7. Navigate to the Backend (Django) Directory
```bash
cd backend-django
```

### 8. Run the Django Backend Server
```bash
python manage.py runserver
```
✅ The backend server will start at: http://127.0.0.1:8000/

### 9. Open a New Terminal and Navigate to the Frontend (React) Directory
```bash
cd frontend-react
```

### 10. Install Frontend Packages
```bash
npm install
```

### 11. Run the Frontend Development Server
```bash
npm run dev
```
✅ The frontend server will start at: http://localhost:5173/ (default Vite port)

---

🎯 Your full-stack project should now be running successfully with both the Django backend and React frontend!
