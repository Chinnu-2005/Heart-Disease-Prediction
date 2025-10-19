import pandas as pd
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Load dataset
heart_df = pd.read_csv('./data/heart.csv')

x = heart_df.drop('HeartDisease', axis=1)
y = heart_df['HeartDisease']

categorical = ["Sex", "ChestPainType", "RestingECG", "ExerciseAngina", "ST_Slope"]
numeric = [col for col in x.columns if col not in categorical]

# Preprocessing + model pipeline
preprocessor = ColumnTransformer([
    ("num", StandardScaler(), numeric),
    ("cat", OneHotEncoder(drop="first"), categorical)
])

pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LogisticRegression(max_iter=1000))
])

# Train/test split
x_train, x_test, y_train, y_test = train_test_split(
    x, y, test_size=0.2, random_state=42, stratify=y
)

pipeline.fit(x_train, y_train)

# Save model
pickle.dump(pipeline, open("./models/model.pkl", "wb"))
print("Model trained and saved as model.pkl..................")
