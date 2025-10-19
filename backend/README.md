# Heart Disease Prediction API

Flask API for heart disease prediction using machine learning.

## Deployment on Render

### Prerequisites
- GitHub account
- Render account

### Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: heart-disease-api
     - **Environment**: Python 3
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `gunicorn app:app`

3. **Environment Variables** (if needed):
   - No additional environment variables required

### API Endpoints

- **GET** `/api/v1` - Health check
- **POST** `/api/v1/predict` - Heart disease prediction

### Request Format
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

### Response Format
```json
{
  "prediction": 1,
  "probability": [0.18, 0.82]
}
```

### Local Development
```bash
pip install -r requirements.txt
python app.py
```

API will be available at `http://localhost:5000`