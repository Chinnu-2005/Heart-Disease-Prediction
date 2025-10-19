# Heart Disease Prediction Frontend

A modern React frontend for heart disease prediction using AI/ML models.

## Features

- 🎨 Modern, responsive UI with custom CSS
- 🚀 Smooth animations with Framer Motion
- 📱 Mobile-friendly design
- 🔔 Toast notifications for user feedback
- 📊 Interactive prediction results with probability visualization
- ❤️ Animated heart icon and pulse effects

## Tech Stack

- **React 18** with Vite
- **Custom CSS** for styling
- **Framer Motion** for animations
- **Axios** for API calls
- **React Hot Toast** for notifications

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## API Integration

The frontend expects a backend API with the following endpoint:

**POST** `/api/v1/predict`

### Request Format:
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

### Response Format:
```json
{
  "prediction": 1,
  "probability": [0.18, 0.82]
}
```

## Project Structure

```
src/
├── api/
│   └── predict.js          # API service for predictions
├── components/
│   ├── Navbar.jsx          # Navigation bar with animated heart
│   ├── PatientForm.jsx     # Patient information form
│   └── PredictionResult.jsx # Results display component
├── App.jsx                 # Main application component
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Form Fields

- **Age**: Patient age (1-120)
- **Sex**: Male/Female
- **Chest Pain Type**: ASY, ATA, NAP, TA
- **Resting BP**: Blood pressure in mm Hg (80-200)
- **Cholesterol**: Cholesterol level in mg/dL (100-600)
- **Fasting Blood Sugar**: ≤120 mg/dL or >120 mg/dL
- **Resting ECG**: Normal, ST, LVH
- **Max Heart Rate**: Maximum heart rate (60-220)
- **Exercise Angina**: Yes/No
- **Oldpeak**: ST depression (0-10)
- **ST Slope**: Up, Flat, Down

## Running the Application

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment

Deploy the `dist` folder to any static hosting service like Netlify, Vercel, or AWS S3.