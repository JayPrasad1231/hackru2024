import pickle

def define_dictionary():
    ingredient_set = set()
    new_items = ["salt", "pepper", "water", "olive oil", "balsamic vinegar", "garlic", 
                         "dill pickle spears", "milk", "eggs", "dill weed", "breadcrumbs", "vegetable oil", "ranch dressing",
                         "olive oil", "garlic", "fava beans", "artichoke hearts", "fresh thyme", "salt", "pepper", "lemon juice", "tomato",
                         "sweet potatoes", "sugar", "milk", "egg", "cinnamon", "nutmeg", "pancake mix", "pecans", "cranberries",
                         "spinach", "egg", "grilled chicken", "carrot", "mushrooms", "cranberries", "feta cheese", "almonds",
                         "chicken broth", "grits", "cheddar cheese", "monterey jack cheese", "whipping cream", "hot sauce", "black pepper", "cayenne pepper", "Worcestershire sauce", "eggs",
                         "cheddar cheese", "crabmeat", "bell pepper", "bacon", "mayonnaise", "avocados", "english muffins", "sour cream", "salt", "pepper",
                         "whole wheat bread", "butter", "kalamata olives", "spinach leaves", "sun-dried tomatoes", "parmesan cheese", "mushroom", "sweet pepper", "pepper", "red pepper flakes",
                         "butter", "white bread", "cherry tomatoes", "Parmesan cheese",
                         "shallot", "red-wine vinegar", "mustard", "salt", "olive oil", "confit duck gizzards", "morels", "mesclun greens",
                         "nicoise olive", "tomatoes", "olive oil", "garlic", "basil", "parsley", "capers", "crushed red pepper flakes", "spaghetti",
                         "whipping cream", "half and half", "fennel bulb", "fennel seeds", "potatoes", "gouda",
                         "Ground Beef", "Dry Stuffing Mix", "Eggs", "Water",
                         "ground sausage", "beef", "stewing beef", "beef broth", "beef bouillon cubes", "chili powder", "Tabasco sauce", "tomato puree", "diced tomatoes", "Tabasco sauce", "cumin", "chili powder", "onion powder", "paprika", "salt", "pepper", "onions", "bell peppers", "scallion", "cilantro", "beans", "jalapeno", "monterey jack cheese", "sour cream",
                         "feta cheese", "mayonnaise", "sour cream", "garlic", "red wine vinegar", "dill", "mint", "Worcestershire sauce", "black pepper", "milk",
                         "New Mexico chile pods", "chiles de arbol", "water", "pork", "onions", "garlic", "chicken broth", "oregano", "cumin", "salt",
                         "olive oil", "onion", "garlic", "salt", "pepper", "long grain rice", "chicken", "lemon", "shrimp", "swiss chard", "dill",
                         "chicken", "oil", "garlic paste", "salt", "tomato paste", "water", "black olives", "corn", "cream", "cheese", "pork ribs", "pepper", "chicken stock", "garlic", "olive oil", "cauliflower", "butter", "ground meat", "breadcrumbs", "egg", "onion", "green pepper", "white pepper", "marjoram", "thyme", "ketchup", "parmesan cheese", "evaporated milk", "tomatoes", "mustard", "honey", "dill",
                         "ground turkey", "egg", "breadcrumbs", "garlic", "ginger", "onion", "curry powder", "lemon juice", "coriander", "salt", "pepper", "oil", "curry sauce", "fillet steaks", "spinach", "red onion", "chopped tomatoes", "celery", "orange pepper", "olives", "capers", "oregano", "balsamic vinegar", "dried morels", "water", "chicken stock", "butter", "arborio rice", "white wine", "Parmesan cheese", "black beans", "corn", "chicken breasts", "taco seasoning", "zucchini", "parmesan cheese", "butter", "flour", "salt", "cream", "egg yolks", "ground lamb", "parsley", "rice", "egg whites", "mint", "grape leaves", "chicken broth", "cornstarch", "lemon juice", "Italian sausage", "rigatoni pasta", "heavy whipping cream", "basil", "Velveeta cheese", "dried Italian dressing", "instant rice", "cream of chicken soup", "cream cheese", "water", "olive oil", "pepper", "garlic powder", "lemon", "flour", "dry white wine", "chicken broth", "onion", "flour", "porcini mushrooms", "hot water", "fenugreek leaves", "cayenne pepper", "whipping cream", "canola oil", "portabella mushrooms", "asafetida powder", "mango powder", "garam masala",
                         "bitter melon", "shio-kombu", "bonito flakes", "soy sauce", "salt", "frozen mixed vegetables", "cream of mushroom soup", "vegetable stock", "stuffing mix", "italian seasoning", "quails", "goose-liver mousse", "salad oil", "bacon", "carrot", "celery", "onion", "bay leaf", "thyme", "Port wine", "veal demi-glace", "butter", "leek leaves", "eggs", "water", "oil", "bow tie pasta", "cream of chicken soup", "green onion", "tomatoes", "oregano", "basil", "minced garlic", "olive oil", "bay leaves", "lemon", "calamari", "green olives", "celery", "roasted red-bell-pepper", "kosher salt", "dried oregano", "peperoncino flakes", "extra-virgin olive oil", "limes", "brown sugar", "star anise", "red pepper flakes", "soy sauce", "chicken breast halves", "long-grain white rice", "yellow onion", "garlic", "serrano chili", "diced tomatoes", "vegetable stock", "vegetable oil", "paprika", "cayenne pepper", "salt", "cumin", "andouille sausages", "kidney bean", "sausages", "frozen puff pastry", "cheese", "barbecue sauce", "tomato sauce", "egg", "milk", "sugar", "white bread", "fresh pineapple", "fresh pears", "seedless red grapes", "banana", "red apples", "coleslaw dressing", "anise seed", "orange zest", "polenta", "olive oil", "chicken breast halves", "red peppers", "onion", "dry vermouth", "capers", "chicken thighs", "black pepper", "garlic powder", "daikon radish", "sliced scallions", "ponzu", "chilli powder", "sudachi", "asparagus", "cherry tomatoes", "feta cheese", "rice vermicelli", "Italian dressing", "red peppers", "red curry paste", "chicken broth", "water", "baby bok choy", "coconut milk", "shrimp",
                         "ground sausage", "beef", "cheddar cheese", "onion", "eggs", "tobasco sauce", "flour", "green chiles", "seasoning salt", "pork shoulder", "garlic", "Recado Rojo", "orange juice", "lemon juice", "salsa", "potatoes", "bacon", "celery", "green onions", "minced garlic", "yogurt", "mayonnaise", "salt", "pepper", "cheese", "buns", "oranges", "limes", "chicken", "vegetable oil", "shallots", "wine", "broth", "olive oil", "butter", "ribs", "ketchup", "water", "sugar", "vinegar", "paprika", "chili powder", "onions", "ducks", "minced onion", "green pepper", "Ramen Noodle Soup", "cream soup", "milk", "cooked chicken", "broccoli", "tomatoes", "lamb", "black pepper", "pitted prunes", "carrots", "pine nuts", "dough", "mozzarella", "bacon", "mushrooms", "ranch dressing", "Brussels sprouts", "nutmeg", "walnuts", "cranberries", "beef roast", "dressing", "potatoes", "green olives", "lentils", "carrot", "red bell pepper", "cilantro", "parsley", "lemon juice", "romaine lettuce", "cabbage", "ground pork", "chicken broth", "tomato paste", "dill", "scallions", "rice", "beets", "cream cheese", "thyme",
                         "Squid legs", "Eggs", "Katakuriko", "sesame oil", "green onions", "Salt", "Okonomiyaki sauce", "Mayonnaise", "Olive oil", "Parmesan cheese", "Garlic", "Sun-dried tomatoes", "Dijon mustard", "Lemon juice", "Red pepper flakes", "Black pepper", "Egg yolk", "Water", "Romaine lettuce", "Croutons", "Grilled chicken", "Roasting chicken", "Butter", "Apple cider", "Butternut squash", "Onion", "Garlic", "Brown sugar", "Chicken broth", "Whole wheat orzo", "Parmesan", "Pecorino Romano", "Sage", "Mushrooms", "Ground beef", "Pasta sauce", "Italian seasoning", "Garlic powder", "Mozzarella cheese", "Crescent rolls", "Rice", "Shrimp", "Soy sauce", "pepper", "sweet corn", "black beans", "onion", "lime", "avocados", "tomato", "sugar", "cilantro", "onions", "olive oil", "butter", "asparagus", "chives", "prosciutto", "goat cheese", "galette rounds", "milk", "egg yolks", "egg", "flour", "mushrooms", "cooking spray", "wonton wrappers", "Parmesan cheese", "parsley", "lamb chops", "bay leaf", "red pepper", "oregano", "water", "green beans", "crushed tomatoes", "vermicelli", "basmati rice", "chicken stock", "cabbage", "ground beef", "flour", "bread loaf", "egg", "corn oil", "curry paste", "chicken breasts", "sugar", "soy sauce", "Bechamel sauce", "broccoli", "peanuts", "pizza dough", "pizza sauce", "zucchini", "spinach", "onions", "garlic", "green bell pepper", "basil", "oregano", "mushrooms", "black olives", "artichoke hearts", "tomatoes", "coriander seeds", "leg of lamb", "olive oil", "honey", "garlic", "lemon zest", "red wine vinegar", "tomatoes", "cilantro", "skewers", "olive oil", "shallot", "red wine vinegar", "arugula", "baguette", "shallot oil", "fresh herbs", "Parmigiano-Reggiano", "dried pozole", "garlic", "Kosher salt", "black pepper", "pork shoulder", "onion", "bay leaves", "cloves", "tomatillos", "chayote squash", "zucchini", "corn", "cilantro", "hot green chile", "oregano", "avocados", "poblano chile", "lime wedges",
                         "tomato juice", "can tomato soup", "can chicken gumbo soup", "water", "onion", "potatoes", "celery", "parsley", "Worcestershire sauce", "garlic", "bay leaf", "can shrimp", "can chopped clams", "fresh green beans", "kosher salt", "cherry tomatoes", "fresh mozzarella", "fresh basil", "grated Parmigiano-Reggiano", "dry bread crumbs", "butter", "extra-virgin olive oil", "shallow baking dish", "new potatoes", "olive oil", "salt", "black pepper", "egg", "lemons", "chopped garlic", "Creole mustard", "chopped green onions", "bacon", "chopped red onions", "hard-boiled eggs", "parsley", "dill", "toasted sesame oil", "low-sodium soy sauce", "peanut butter", "lemon juice", "brown sugar", "minced fresh ginger", "minced garlic", "chile-garlic sauce", "whole-grain linguine", "thinly sliced celery", "chopped celery leaves", "finely chopped roasted peanuts", "fresh corn kernels", "carrot", "russet potato", "onion", "fresh spinach leaves", "all-purpose flour", "frozen peas", "finely chopped fresh cilantro", "jalapeno chili", "ground cumin", "large egg", "vegetable oil", "plain yogurt", "Major Grey chutney", "millet", "water", "onions", "potatoes", "carrots", "celery", "mushrooms", "bay leaves", "basil", "thyme", "chili powder", "paprika", "coriander", "cumin", "garlic powder", "salt", "pepper", "couscous", "eggs", "mozzarella", "cheddar cheese", "unsalted butter", "queso fresco", "cilantro", "chicken breast", "chickpeas", "baby spinach", "bacon", "enchilada sauce", "lime", "tortillas", "shredded Mexican blend cheese", "onion salt", "habaneros", "pasta", "mushrooms", "butter", "sage", "spring onions", "ground beef", "chili powder", "can tomato soup", "salad greens", "tortilla chips", "chopped tomatoes", "green onions", "shredded cheddar cheese", "chopped olives", "pickling salt", "Morton's tender quick", "liquid smoke",
                         "brown sugar", "chicken", "chicken drumsticks"]



v = set()