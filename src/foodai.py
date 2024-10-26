import pandas as pd
import re

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

def parse_dietary(data):

    df = pd.read_csv(data)

    dairy_pattern = r"\b(milk|cream|yogurt|buttermilk|sour cream|cottage cheese|ricotta cheese|cream cheese|cheddar cheese|swiss cheese|mozzarella cheese|parmesan cheese|feta cheese|brie cheese|blue cheese|gouda cheese|provolone cheese|monterey jack cheese|goat cheese|queso fresco|mascarpone cheese|string cheese|processed cheese|cheese spread|ice cream|frozen yogurt|milk powder|condensed milk|evaporated milk|kefir|whey protein|dairy-based protein powder)\b"
    meat_pattern = r"\b(beef|steak|ribeye|sirloin|t-bone|roast|chuck|brisket|beef ribs|corned beef|beef jerky|lamb chops|leg of lamb|ground lamb|lamb shank|pork chops|pork loin|ground pork|ham|bacon|sausage|bratwurst|chorizo|whole chicken|chicken breast|chicken thighs|chicken wings|ground chicken|whole turkey|turkey breast|ground turkey|turkey legs|whole duck|duck breast|duck legs|duck confit|whole goose|goose breast|goose legs|venison|bison|elk|rabbit|pheasant|quail|squirrel|wild boar|salmon|tuna|cod|halibut|mackerel|trout|shrimp|crab|lobster|clams|oysters|scallops|squid|octopus|italian sausage|breakfast sausage|salami|pepperoni|prosciutto|capicola|mortadella|smoked turkey|pastrami|jerky|kangaroo|ostrich|alligator|camel|python|iguana)\b"

    result_vector = []

    for index, row in df.iterrows():

        ingredients = row['ingredients']
        vegan = True

        result = re.findall(meat_pattern, ingredients)
        if result: 
            result_vector.append("meat")
            continue

        result = re.findall(dairy_pattern, ingredients)  

        if result:
            vegan = False 

        if vegan:
            result_vector.append("vegan")

        else:
            result_vector.append("veg")

    df['cuisine_type'] = result_vector

    df.to_csv("first_10000_cuisinetype.csv", index=False)

    print(df.head(10))

parse_dietary("first_10000.csv")


