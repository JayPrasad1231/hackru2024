from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score
import numpy as np
import re
import ast
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

def model(names, ingredients, cuisines):
    # Combine names and ingredients for model input
    combined_input = [f"{name} {ingredient}" for name, ingredient in zip(names, ingredients)]

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(combined_input, cuisines, test_size=0.2, random_state=42)

    # Create a pipeline with Random Forest classifier
    pipeline = make_pipeline(TfidfVectorizer(lowercase=True), RandomForestClassifier())

    # Hyperparameter tuning (optional)
    param_grid = {
        'randomforestclassifier__n_estimators': [50, 100, 200],
        'randomforestclassifier__max_depth': [None, 10, 20, 30]
    }
    grid_search = GridSearchCV(pipeline, param_grid, cv=5)
    grid_search.fit(X_train, y_train)

    # Train model
    # model = grid_search.best_estimator_
    # pipeline.fit(X_train, y_train)

    # Predict cuisine for test data
    y_pred = grid_search.predict(X_test)

    # Compute accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {accuracy:.2f}")

df = pd.read_csv("recipes_cuisines.csv")

def parse_data(df):

    df = df

    ingredients_features = []

    for index, row in df.iterrows():

        ingredients = row['ingredients']

        input_list = ast.literal_eval(ingredients)

        pattern = r'^\s*\d+[\s/]*\d*\s*(?:[Cc]up|[Tt]bsp|[Tt]sp|[Oo]z|[Ll]iters|[Mm]l|[Gg]|[Kk]g|[Ss]lice|[Pp]inch|[Ff]l.?\s*[Oo]z|[Ss]table|[Ss]t.)\.?\s*'

        # Use regex to remove measurements from each line
        cleaned_text = [re.sub(pattern, '', item).strip() for item in input_list]
        ingredients_features.append(cleaned_text)

    df['ingredients'] = ingredients_features

parse_data(df)

# Run the model function
print(df.head())
model(df['recipe'], df['ingredients'], df['cuisine'])

# def get_random_sample(file):

