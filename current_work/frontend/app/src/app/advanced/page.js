'use client';

export default function Lesson10BoostsAndPromotions() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 10: Boosts, Promotions, and Advanced Devigging
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Understanding Sportsbook Boosts</h2>
          <p>
            Many sportsbooks offer boosts, but not all of them are beneficial. It’s crucial to know how to devig these boosts to determine if they are genuinely positive EV. In our sports betting Discord, we provide fair values for many of these boosts.
          </p>
          <p>
            The <strong>Crazy Ninja Mike Devigger</strong> offers numerous options to devig various scenarios, including same game parlays, mutually exclusive events, and conditions related to OR.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Promotions to Consider</h2>
          <p>
            Along with boosts, many sportsbooks also offer promotions, such as profit boosts. In these promotions, the odds of a bet are increased, resulting in a higher payout. These profit boosts are almost certainly positive EV, and if you can't find a positive EV leg to use, we recommend choosing a random over/under or spread. Since totals and spreads usually hover around a negative 2.5% EV, adding a profit boost will shift this into positive territory.
          </p>
          <p>
            Profit boosts can range from small increments of around 20% to as high as 100%. However, 100% profit boosts are rare and usually offered when you sign up to encourage you to stay. Remember, you cannot use profit boosts in conjunction with free bets; they require a cash wager to apply. 
          </p>
          <p>
            For instance, consider a team moneyline at -200, which implies a 66% chance of winning. A 100% profit boost would raise these odds to +100, providing a higher likelihood of success while still yielding a positive EV play. We recommend taking full advantage of profit boosts of 50% or higher due to their rarity, maximizing your bankroll-building potential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No-Sweat Parlays</h2>
          <p>
            Another beneficial promotion is the “no-sweat parlay.” While many of these require you to place a same game parlay—which tends to be negative EV—receiving a bonus bet for placing the wager provides good insurance. As covered in previous lessons, you can safely convert 70% of a bonus bet into cash, ensuring that, at worst, you’ll win 70% of your stake back.
          </p>
          <p>
            When constructing a parlay for these promotions, use the same approach as you would for a normal cash wager. Check your odds screener for positive EV plays, and if those aren't available, look for slightly negative plays. If those are unavailable, randomly select from spreads and totals to build your same game parlay. It’s important to remember that the specific legs of the parlay don’t need to be positive EV, given the promotion’s favorable conditions.
          </p>
          <p>
            Note: Some sportsbooks impose stipulations on individual legs of the parlay, requiring them to be at odds of -400 or better. Ensure you review the requirements before placing your wager.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            Promotions and boosts are excellent strategies for building your bankroll. Sportsbooks like <strong>FanDuel</strong> and <strong>DraftKings</strong> offer promotions and boosts daily, so be sure to take full advantage!
          </p>
        </section>
      </div>
    </div>
  );
}
