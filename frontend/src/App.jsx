import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from './components/Navbar';
import PatientForm from './components/PatientForm';
import PredictionResult from './components/PredictionResult';
import FeatureGuide from './components/FeatureGuide';
import { predictHeartDisease } from './api/predict';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async (patientData) => {
    setLoading(true);
    try {
      const result = await predictHeartDisease(patientData);
      setPrediction(result);
      toast.success('Prediction completed successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to get prediction');
      console.error('Prediction error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="container main-content">
        <div className="header">
          <h1>Heart Disease Risk Assessment</h1>
          <p>
            Enter patient information below to receive an AI-powered prediction of heart disease risk
            based on clinical parameters
          </p>
        </div>

        <FeatureGuide />

        <div className="grid">
          <PatientForm onSubmit={handlePrediction} loading={loading} />
          <PredictionResult result={prediction} />
        </div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default App;