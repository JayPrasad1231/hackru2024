import pandas as pd

def food_ai(preferences, **kwargs):



    pass

# def take_data(csv):

#     df = pd.read_csv(csv)

#     df_smaller = df.tail(10000)

#     df_smaller.to_csv("tail_10000.csv", index=False)

# take_data("src/full_dataset.csv")

def parse_smaller(data):

    df = pd.read_csv(data)

    df_name_ingredients = df[['title', 'ingredients']]

    df_name_ingredients.to_csv("first_two_columns_first_10000.csv", index=False)

parse_smaller("first_10000.csv")

