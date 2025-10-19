import requests
import json

# Test data
test_data = {
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

# Test local API
def test_local():
    url = "http://localhost:5000/api/v1/predict"
    response = requests.post(url, json=test_data)
    print("Local API Response:", response.json())

# Test deployed API (replace with your Render URL)
def test_deployed(render_url):
    url = f"{render_url}/api/v1/predict"
    response = requests.post(url, json=test_data)
    print("Deployed API Response:", response.json())

if __name__ == "__main__":
    print("Testing API...")
    try:
        test_local()
    except:
        print("Local API not running")
    
    # Uncomment and add your Render URL after deployment
    # test_deployed("https://your-app-name.onrender.com")