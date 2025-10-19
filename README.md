# ❤️ Heart Disease Prediction System

> An AI-powered web application for predicting heart disease risk using machine learning and clinical parameters.

![Heart Disease Predictor](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Python](https://img.shields.io/badge/Python-3.9+-blue)
![React](https://img.shields.io/badge/React-18+-61DAFB)
![Flask](https://img.shields.io/badge/Flask-2.0+-000000)

## 🌟 Overview

The Heart Disease Prediction System is a full-stack web application that leverages machine learning to assess heart disease risk based on clinical parameters. The system provides healthcare professionals and individuals with an AI-powered tool for early risk assessment.

### ✨ Key Features

- 🤖 **AI-Powered Predictions** - Machine learning model trained on clinical data
- 🎨 **Modern UI/UX** - Responsive design with smooth animations
- 📊 **Risk Visualization** - Interactive probability charts and recommendations
- 🔒 **CORS Enabled** - Secure cross-origin resource sharing
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- ⚡ **Real-time Results** - Instant predictions with loading states
- 🔔 **User Feedback** - Toast notifications for better UX

## 🏗️ Architecture

```
Heart Disease Prediction System
├── 🖥️  Frontend (React + Vite)
│   ├── Modern UI with custom CSS
│   ├── Form validation & animations
│   └── API integration with error handling
│
├── 🔧 Backend (Flask API)
│   ├── RESTful API endpoints
│   ├── ML model integration
│   └── CORS configuration
│
└── 🤖 Machine Learning
    ├── Trained model (model.pkl)
    ├── Feature preprocessing
    └── Probability predictions
```

## 📋 Clinical Parameters

The system analyzes 11 key clinical parameters:

| Parameter | Description | Range/Options |
|-----------|-------------|---------------|
| **Age** | Patient age | 1-120 years |
| **Sex** | Gender | Male/Female |
| **Chest Pain Type** | Type of chest pain | ASY, ATA, NAP, TA |
| **Resting BP** | Blood pressure at rest | 80-200 mm Hg |
| **Cholesterol** | Serum cholesterol | 100-600 mg/dL |
| **Fasting BS** | Fasting blood sugar | ≤120 or >120 mg/dL |
| **Resting ECG** | Electrocardiogram results | Normal, ST, LVH |
| **Max HR** | Maximum heart rate | 60-220 bpm |
| **Exercise Angina** | Exercise-induced angina | Yes/No |
| **Oldpeak** | ST depression | 0-10 |
| **ST Slope** | Slope of peak exercise ST | Up, Flat, Down |

## 🚀 Quick Start

### Prerequisites

- **Python 3.9+**
- **Node.js 16+**
- **npm or yarn**

### 1. Clone Repository

```bash
git clone <repository-url>
cd ML\ Project
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## 📁 Project Structure

```
ML Project/
├── 📂 backend/
│   ├── 📂 data/
│   │   └── heart.csv              # Training dataset
│   ├── 📂 models/
│   │   └── model.pkl              # Trained ML model
│   ├── app.py                     # Flask API server
│   ├── train_model.py             # Model training script
│   ├── requirements.txt           # Python dependencies
│   ├── render.yaml               # Render deployment config
│   ├── runtime.txt               # Python version
│   └── test_api.py               # API testing script
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 api/
│   │   │   └── predict.js         # API service
│   │   ├── 📂 components/
│   │   │   ├── Navbar.jsx         # Navigation component
│   │   │   ├── PatientForm.jsx    # Input form
│   │   │   └── PredictionResult.jsx # Results display
│   │   ├── App.jsx                # Main application
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # Entry point
│   ├── package.json              # Dependencies
│   └── .env                      # Environment variables
│
└── README.md                     # Project documentation
```

## 🔌 API Documentation

### Base URL
- **Local**: `http://localhost:5000`
- **Production**: `https://your-app.onrender.com`

### Endpoints

#### Health Check
```http
GET /api/v1
```

**Response:**
```json
{
  "message": "App is running......."
}
```

#### Predict Heart Disease
```http
POST /api/v1/predict
```

**Request Body:**
```json
{
  "Age": 52,
  "Sex": "M",
  "ChestPainType": "ASY",
  "RestingBP": 140,
  "Cholesterol": 239,
  "FastingBS": 0,
  "RestingECG": "ST",
  "MaxHR": 160,
  "ExerciseAngina": "Y",
  "Oldpeak": 1.2,
  "ST_Slope": "Flat"
}
```

**Response:**
```json
{
  "prediction": 1,
  "probability": [0.18, 0.82]
}
```

- `prediction`: 0 (No Heart Disease) or 1 (Heart Disease)
- `probability`: [No Disease Probability, Disease Probability]

## 🚀 Deployment

### Backend (Render)

1. **Push to GitHub**
2. **Connect to Render**
3. **Configure Settings:**
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`

### Frontend (Netlify/Vercel)

1. **Build Project:**
   ```bash
   npm run build
   ```

2. **Deploy `dist` folder**

3. **Set Environment Variables:**
   ```env
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

## 🧪 Testing

### Backend Testing
```bash
cd backend
python test_api.py
```

### Frontend Testing
```bash
cd frontend
npm run dev
# Open browser and test form submission
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Flask** - Web framework
- **Pandas** - Data manipulation
- **Scikit-learn** - Machine learning
- **Flask-CORS** - Cross-origin requests
- **Gunicorn** - WSGI server

### Deployment
- **Render** - Backend hosting
- **Netlify/Vercel** - Frontend hosting
- **GitHub** - Version control

## 📊 Model Performance

The machine learning model is trained on clinical heart disease data with the following features:
- **Algorithm**: Classification model (details in train_model.py)
- **Input Features**: 11 clinical parameters
- **Output**: Binary classification (0/1) with probability scores
- **Preprocessing**: Feature scaling and encoding

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for educational and research purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.

## 📞 Support

For support and questions:
- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 📖 Documentation: [Project Wiki](https://github.com/your-repo/wiki)

---

<div align="center">
  <p>Made with ❤️ for better healthcare</p>
  <p>
    <a href="#top">Back to Top</a>
  </p>
</div>