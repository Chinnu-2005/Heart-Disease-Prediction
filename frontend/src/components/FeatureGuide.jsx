import { useState } from 'react';
import { motion } from 'framer-motion';

const FeatureGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      name: "Age",
      meaning: "Patient's age in years",
      range: "29–77",
      explanation: "Age is a major risk factor for heart disease — the older the patient, the higher the likelihood of cardiovascular issues."
    },
    {
      name: "Sex",
      meaning: "Biological sex of the patient",
      range: "M = Male, F = Female",
      explanation: "Males generally have a higher early risk for heart disease compared to females."
    },
    {
      name: "ChestPainType",
      meaning: "Type of chest pain experienced",
      range: "TA, ATA, NAP, ASY",
      explanation: "TA (Typical Angina): Pain due to heart-related issue. ATA (Atypical Angina): Pain not typical of angina. NAP (Non-Anginal Pain): Pain unrelated to angina. ASY (Asymptomatic): No chest pain but may still indicate disease."
    },
    {
      name: "RestingBP",
      meaning: "Resting blood pressure (mm Hg)",
      range: "90–200",
      explanation: "Pressure in the arteries when the heart is at rest between beats. Higher values can indicate hypertension, a major heart risk factor."
    },
    {
      name: "Cholesterol",
      meaning: "Serum cholesterol level (mg/dL)",
      range: "100–600",
      explanation: "Measures the amount of fat in the blood. Higher cholesterol levels increase the risk of coronary artery disease."
    },
    {
      name: "FastingBS",
      meaning: "Fasting blood sugar (>120 mg/dL)",
      range: "1 = True, 0 = False",
      explanation: "Indicates whether the fasting blood sugar is above 120 mg/dL. High levels may point to diabetes or insulin resistance, which elevate heart risk."
    },
    {
      name: "RestingECG",
      meaning: "Resting electrocardiogram (ECG) results",
      range: "Normal, ST, LVH",
      explanation: "Normal: Normal ECG. ST: ST-T wave abnormality (possible myocardial ischemia). LVH: Left ventricular hypertrophy (thickening of the heart muscle)."
    },
    {
      name: "MaxHR",
      meaning: "Maximum heart rate achieved during exercise",
      range: "60–202",
      explanation: "Reflects how the heart responds to physical activity. Lower than expected values could indicate reduced cardiovascular fitness or heart issues."
    },
    {
      name: "ExerciseAngina",
      meaning: "Exercise-induced angina",
      range: "Y = Yes, N = No",
      explanation: "Indicates whether chest pain occurred during exercise. A 'Yes' response is a potential red flag for ischemic heart disease."
    },
    {
      name: "Oldpeak",
      meaning: "ST depression induced by exercise (compared to rest)",
      range: "0.0–6.0",
      explanation: "Represents the degree of ST segment depression in ECG readings during exercise. Higher values suggest more severe ischemia or reduced oxygen supply to the heart."
    },
    {
      name: "ST_Slope",
      meaning: "Slope of the peak exercise ST segment",
      range: "Up, Flat, Down",
      explanation: "Up: Normal, healthy response. Flat: Possible sign of ischemia. Down: Strong indication of abnormal cardiac stress or ischemia."
    }
  ];

  return (
    <div className="container" style={{ marginBottom: '2rem' }}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="feature-guide-toggle"
      >
        📚 Understanding Clinical Parameters {isOpen ? '▼' : '▶'}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="feature-guide-content"
        >
          <div className="feature-guide-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="feature-card"
              >
                <div className="feature-header">
                  <h4 className="feature-name">🧩 {feature.name}</h4>
                  <span className="feature-range">{feature.range}</span>
                </div>
                <p className="feature-meaning">🧠 {feature.meaning}</p>
                <p className="feature-explanation">💬 {feature.explanation}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FeatureGuide;