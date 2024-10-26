import pandas as pd

def food_ai(preferences, **kwargs):



    pass

def take_data(csv):

    df = pd.read_csv(csv)

    df_smaller = df.tail(10000)

    df_smaller.to_csv("tail_10000.csv", index=False)

take_data("src/full_dataset.csv")