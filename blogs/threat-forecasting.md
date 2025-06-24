# System Threat Forecaster 🔐

This repository contains my [**System Threat Forecaster**](https://www.kaggle.com/competitions/System-Threat-Forecaster) machine learning project, developed as part of my diploma coursework. The goal is to predict system threats (e.g., malware or suspicious activity) based on system feature data using **traditional machine learning** and **boosting algorithms**. Go to the link for more details.

## 📌 Project Overview

- **Objective**: Forecast potential system threats based on input features.
- **Approach**:
  - Data cleaning and preprocessing
  - Exploratory Data Analysis (EDA)
  - Feature selection
  - Model building using traditional ML and boosting techniques
  - Hyperparameter tuning
- **Algorithms applied**:
  - Decision Tree
  - Random Forest
  - Logistic Regression
  - K-Nearest Neighbors (KNN)
  - Support Vector Machine (SVM)
  - **XGBoost**
  - **LightGBM**

## 🗂 Dataset

- The dataset contains numerical and categorical system features with a binary target indicating system threat.
- Files:
  - `train.csv` — training data
  - `test.csv` — test data

> *Note: The dataset was used solely for educational and demonstration purposes.*

## ⚙️ Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- scikit-learn
- XGBoost
- LightGBM

## 📈 Results

The models were evaluated on accuracy, precision, recall, and F1-score.  
✅ **Best model**: LightGBM (with hyperparameter tuning)  
✅ **Accuracy on test set**: **63%**  
✅ **Classification report**:

          precision    recall  f1-score   support

       0       0.63      0.59      0.61      9878
       1       0.63      0.67      0.65     10089

    accuracy                       0.63     19967


## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/itznoor998/System-Threat-Forecaster.git
   cd System-Threat-Forecaster
    ```

2. Install dependencies:
    ```bash
    pip install pandas numpy matplotlib seaborn scikit-learn xgboost lightgbm
    ```

3. Open the Jupyter notebook:
    ```bash
    jupyter notebook System_Threat_Forecaster.ipynb
    ```