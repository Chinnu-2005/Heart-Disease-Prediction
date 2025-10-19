import { useState } from 'react';
import { motion } from 'framer-motion';

const PatientForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    Age: '',
    Sex: 'M',
    ChestPainType: 'ASY',
    RestingBP: '',
    Cholesterol: '',
    FastingBS: '0',
    RestingECG: 'Normal',
    MaxHR: '',
    ExerciseAngina: 'N',
    Oldpeak: '',
    ST_Slope: 'Up'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert numeric fields
    const processedData = {
      ...formData,
      Age: parseInt(formData.Age),
      RestingBP: parseInt(formData.RestingBP),
      Cholesterol: parseInt(formData.Cholesterol),
      FastingBS: parseInt(formData.FastingBS),
      MaxHR: parseInt(formData.MaxHR),
      Oldpeak: parseFloat(formData.Oldpeak)
    };
    
    onSubmit(processedData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="card-header">
        <div className="step-number step-1">1</div>
        <h2 className="card-title">Patient Information</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              required
              min="1"
              max="120"
              className="form-input"
              placeholder="50"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Sex</label>
            <select
              name="Sex"
              value={formData.Sex}
              onChange={handleChange}
              className="form-select"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Chest Pain Type</label>
            <select
              name="ChestPainType"
              value={formData.ChestPainType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="ASY">Asymptomatic</option>
              <option value="ATA">Atypical Angina</option>
              <option value="NAP">Non-Anginal Pain</option>
              <option value="TA">Typical Angina</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Resting BP (mm Hg)</label>
            <input
              type="number"
              name="RestingBP"
              value={formData.RestingBP}
              onChange={handleChange}
              required
              min="80"
              max="200"
              className="form-input"
              placeholder="120"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cholesterol (mg/dL)</label>
            <input
              type="number"
              name="Cholesterol"
              value={formData.Cholesterol}
              onChange={handleChange}
              required
              min="100"
              max="600"
              className="form-input"
              placeholder="200"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Fasting Blood Sugar</label>
            <select
              name="FastingBS"
              value={formData.FastingBS}
              onChange={handleChange}
              className="form-select"
            >
              <option value="0">≤ 120 mg/dL</option>
              <option value="1">&gt; 120 mg/dL</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Resting ECG</label>
            <select
              name="RestingECG"
              value={formData.RestingECG}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Normal">Normal</option>
              <option value="ST">ST-T Wave Abnormality</option>
              <option value="LVH">Left Ventricular Hypertrophy</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Max Heart Rate</label>
            <input
              type="number"
              name="MaxHR"
              value={formData.MaxHR}
              onChange={handleChange}
              required
              min="60"
              max="220"
              className="form-input"
              placeholder="150"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Exercise Angina</label>
            <select
              name="ExerciseAngina"
              value={formData.ExerciseAngina}
              onChange={handleChange}
              className="form-select"
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Oldpeak</label>
            <input
              type="number"
              name="Oldpeak"
              value={formData.Oldpeak}
              onChange={handleChange}
              required
              step="0.1"
              min="0"
              max="10"
              className="form-input"
              placeholder="0"
            />
          </div>

          <div className="form-group">
            <label className="form-label">ST Slope</label>
            <select
              name="ST_Slope"
              value={formData.ST_Slope}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Up">Up</option>
              <option value="Flat">Flat</option>
              <option value="Down">Down</option>
            </select>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="submit-btn"
        >
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <span>Analyzing...</span>
            </div>
          ) : (
            'Predict Heart Disease Risk'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default PatientForm;