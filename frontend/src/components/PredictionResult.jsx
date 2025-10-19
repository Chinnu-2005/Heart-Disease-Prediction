import { motion } from 'framer-motion';

const PredictionResult = ({ result }) => {
  if (!result) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <div className="card-header">
          <div className="step-number step-2">2</div>
          <h2 className="card-title">Prediction Results</h2>
        </div>
        
        <div className="result-placeholder">
          <div className="result-icon">
            <svg width="48" height="48" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <p>Submit patient data to see prediction</p>
        </div>
      </motion.div>
    );
  }

  const hasHeartDisease = result.prediction === 1;
  const probability = result.probability ? (hasHeartDisease ? result.probability[1] : result.probability[0]) : 0;
  const percentageRisk = Math.round(probability * 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="card-header">
        <div className="step-number step-2">2</div>
        <h2 className="card-title">Prediction Results</h2>
      </div>

      <div className="result-content">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`result-card ${hasHeartDisease ? 'result-positive' : 'result-negative'}`}
        >
          <div className="result-emoji">
            {hasHeartDisease ? '⚠️' : '✅'}
          </div>
          <h3 className="result-title">
            Heart Disease: {hasHeartDisease ? 'Yes' : 'No'}
          </h3>
          <p className="result-subtitle">
            {hasHeartDisease 
              ? 'High risk detected - Please consult a cardiologist' 
              : 'Low risk - Continue healthy lifestyle'
            }
          </p>
        </motion.div>

        <div className="probability-section">
          <div className="probability-header">
            <span className="probability-label">Risk Probability</span>
            <span className={`probability-value ${hasHeartDisease ? 'probability-positive' : 'probability-negative'}`}>
              {percentageRisk}%
            </span>
          </div>
          
          <div className="progress-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentageRisk}%` }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className={`progress-fill ${hasHeartDisease ? 'progress-positive' : 'progress-negative'}`}
            />
          </div>
        </div>

        <div className="recommendation">
          <h4>📋 Recommendation</h4>
          <p>
            {hasHeartDisease 
              ? 'This prediction indicates elevated risk. Please schedule an appointment with a healthcare professional for proper evaluation and treatment planning.'
              : 'Great news! The model suggests low risk. Continue maintaining a healthy lifestyle with regular exercise and balanced nutrition.'
            }
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.reload()}
          className="new-prediction-btn"
        >
          New Prediction
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PredictionResult;