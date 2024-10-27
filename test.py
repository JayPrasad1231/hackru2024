import requests
import os

def fetch_sports_odds(sport, regions, markets, api_key):
    # Construct the API URL
    url = "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=" + api_key + "&regions=us&markets=h2h,spreads,totals&oddsFormat=american"

    try:
        # Send GET request
        response = requests.get(url)

        # Raise an error if the request failed
        response.raise_for_status()  # Raises HTTPError for bad responses (4xx and 5xx)

        # Parse the JSON response
        data = response.json()

        # Print the data for inspection
        print("Sports Odds Data:")
        print(data)

        # You can add any further parsing or logic here to process the data as needed
        # For example, printing odds for each event
        if "data" in data:
            for event in data['data']:
                print(f"Sport: {event.get('sport')}, Odds: {event.get('odds')}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    # Set your API key and parameters
    API_KEY = "ca4d81adf431d1d4ca989d47ba43926e"
    sport = "soccer"  # Example sport
    regions = "uk"    # Example region
    markets = "h2h"   # Example market

    # Call the function to fetch sports odds
    fetch_sports_odds(sport, regions, markets, API_KEY)
