import pandas as pd
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
from torch.utils.data import DataLoader, Dataset
from cuisine_categorization import parse_data
import ast
import re

def cleanIngredients(ingredientList):

    pass

df = pd.read_csv("recipes_cuisines.csv")

parse_data(df)  # Uncomment this line if you have a specific function to parse data

label_encoder = LabelEncoder()
df['ingredients'] = df['ingredients'].apply(ast.literal_eval)  # Convert string representation of lists to actual lists

df['ingredients'] = df['ingredients'].apply(lambda x: ' '.join(x))  # Join list of ingredients into a single string
df['recipe'] = label_encoder.fit_transform(df['recipe'])
df['dietary_restriction'] = label_encoder.fit_transform(df['dietary_restriction'])
df['cuisine'] = label_encoder.fit_transform(df['cuisine'])

# TF-IDF Vectorization for ingredients
tfidf_vectorizer = TfidfVectorizer()
X = tfidf_vectorizer.fit_transform(df['ingredients']).toarray()  # Ensure 'ingredients' column exists

# Prepare labels (next recipe prediction)
y = df['recipe'].values  # Labels for recipes

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Custom Dataset Class
class RecipeDataset(Dataset):
    def __init__(self, features, labels):
        self.features = features
        self.labels = labels

    def __len__(self):
        return len(self.labels)

    def __getitem__(self, idx):
        return torch.tensor(self.features[idx], dtype=torch.float32), torch.tensor(self.labels[idx], dtype=torch.long)

# Create Dataset and DataLoader
train_dataset = RecipeDataset(X_train, y_train)
test_dataset = RecipeDataset(X_test, y_test)

train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)  # You can adjust the batch size
test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False)

# Define the Neural Network model
class RecipeModel(nn.Module):
    def __init__(self, input_dim, num_classes):
        super(RecipeModel, self).__init__()
        self.fc1 = nn.Linear(input_dim, 64)  # Increased size for better learning
        self.fc2 = nn.Linear(64, num_classes)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# Model instantiation
input_dim = X_train.shape[1]  # Number of features from TF-IDF
num_classes = len(label_encoder.classes_)  # Number of unique recipe names
model = RecipeModel(input_dim, num_classes)

# Define loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training the model
epochs = 10
for epoch in range(epochs):
    model.train()
    for inputs, labels in train_loader:
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
    print(f'Epoch [{epoch+1}/{epochs}], Loss: {loss.item():.4f}')

# Evaluate the model
model.eval()
with torch.no_grad():
    correct = 0
    total = 0
    for inputs, labels in test_loader:
        outputs = model(inputs)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

    print(f'Test Accuracy: {100 * correct / total:.2f}%')

# Example prediction
with torch.no_grad():
    example_input = torch.tensor(X_test[0], dtype=torch.float32).unsqueeze(0)  # Add batch dimension
    output = model(example_input)
    predicted_recipe = label_encoder.inverse_transform([torch.argmax(output).item()])
    print("Predicted Recipe:", predicted_recipe[0])
