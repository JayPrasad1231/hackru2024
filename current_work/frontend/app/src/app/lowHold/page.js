'use client';

export default function EVBasicsPartTwo() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 4: Basics of EV Part 2 – Vig, Juice, and Finding an Event’s Probability
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Vig?</h2>
          <p>
            Vig, also called juice, market width, or hold, represents the premium that sportsbooks add to bets. 
            This extra amount ensures they profit regardless of the outcome. For example, if you see a line at -110/-110 
            for both over and under, you can calculate the market width as follows:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>-110 + 100 = -10 for the over</li>
            <li>-110 + 100 = -10 for the under</li>
          </ul>
          <p>
            Adding these values gives us -20, which is the market width and shows the sportsbook's premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculating Implied Probability with Vig</h2>
          <p>
            To find the implied probability for a bet with negative odds, we use the formula:
          </p>
          <p className="bg-stone-700 p-4 rounded my-4">
            Implied Probability (Negative Odds) = <code>(ODDS * -1) / (ODDS * -1 + 100)</code>
          </p>
          <p>
            For example, for odds of -110, we calculate:
          </p>
          <p className="bg-stone-700 p-4 rounded my-4">
            <code>110 / (100 + 210) = 52.4%</code>
          </p>
          <p>
            Both over and under bets at -110 each have an implied probability of 52.4%, giving a total of 104.8%.
            This extra 4.8% represents the vig, or the sportsbook’s profit margin.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why De-vigging is Important</h2>
          <p>
            Since the implied probability exceeds 100%, we know it does not represent the true probability of the event.
            To find this "true" probability, we must remove the vig, a process called "de-vigging."
          </p>
          <p className="mt-4">
            De-vigging helps determine the fair value, which in this case is approximately 50%. This fair value 
            probability is lower than the implied probability because the sportsbook adds a premium.
          </p>
          <p className="mt-4">
            <strong>Note:</strong> Different de-vigging methods (Multiplicative, Additive, Power, and Shin) may yield 
            slightly different fair probabilities, but they typically remain close.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Using Multiple Sportsbooks to Find True Probabilities</h2>
          <p>
            Sportsbooks possess advanced data models and information, so it’s useful to reference multiple sportsbooks 
            to approximate a fair probability. Comparing odds across various sportsbooks can help identify the true 
            fair odds for an event.
          </p>
          <p className="mt-4">
            If, for example, one sportsbook offers both the over and under at -110, we calculate the fair value 
            of this bet to be +100. So, if another sportsbook offers the over at +101 or higher, this would be a 
            positive EV bet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">“Odds Shopping” for the Best EV</h2>
          <p>
            To maximize EV, it’s recommended to “odds-shop” across multiple sportsbooks to secure the best odds.
            Using a variety of sportsbooks increases the likelihood of finding positive EV bets, ensuring you get 
            the best possible return on your wagers.
          </p>
          <p className="mt-4">
            <strong>Tip:</strong> Having multiple sportsbook accounts makes it easier to find favorable odds and 
            improve your chances of placing profitable bets.
          </p>
          <p className="mt-4">
            <strong>Tip:</strong> You can try oddshopping on our home page!!
          </p>
        </section>
      </div>
    </div>
  );
}
