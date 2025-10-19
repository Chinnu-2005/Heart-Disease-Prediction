from flask import Flask,request,jsonify
from flask_cors import CORS
import pickle
import pandas as pd

# /api/*

app=Flask(__name__)
CORS(app,resources={r'/api/*':{"origins":"*"}})

model=pickle.load(open("models/model.pkl","rb"))

@app.route('/api/v1')
def home():
    return {"message":"App is running......."}


@app.route('/api/v1/predict',methods=['POST'])
def predict():
    data=request.get_json(force=True)
    df=pd.DataFrame([data])
    pred=model.predict(df)[0]
    prob=model.predict_proba(df)[0].tolist()
    return jsonify({"prediction":int(pred),"probability":prob})


if __name__=='__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

    