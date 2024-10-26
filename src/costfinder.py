import requests

def costfinder(ingredient_list):

    for ingredient in ingredient_list:

        # search for that ingredient on whole foods
        response = requests.get("https://www.wholefoodsmarket.com/search?text=chicken")
        # response.json()
        print(response)
        pass


    pass

costfinder(["chicken"])