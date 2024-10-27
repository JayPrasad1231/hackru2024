'use client';

export default function FreeBetBasics() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 6: Free-Bet and Bonus Bet Basics – Maximizing Conversions
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Understanding Free Bets</h2>
          <p>
            Free-bets differ from regular bets because you don’t receive back your stake. For instance, placing a $150
            free-bet at -150 odds would return only $100 in profit, not the original $150. Due to this, it’s generally 
            better to use free-bets at higher odds.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conversion Rate Example</h2>
          <p>
            Let’s break down an example. For a -150 free-bet, with an implied probability of 60% (calculated as 150/250 = 60%), 
            we would win $100 60% of the time. Therefore, our conversion rate is calculated as 60/150 = 40%.
          </p>
          <p className="mt-4">
            Generally, aiming for a 70% conversion rate is ideal. To reach this, higher odds can be advantageous. For 
            example, at +200 odds, a $150 free-bet would convert at 66.67%.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Practices: Betting at High Odds</h2>
          <p>
            It’s often recommended to aim for odds of +300 or higher. However, free-bets should ideally remain positive 
            EV. An effective approach includes betting with higher odds or using an odds comparison tool, like the 
            <a href="https://oddsjam.com/betting-calculators/free-bet-conversion" target="_blank" className="text-blue-400 underline">
              Oddsjam Free-Bet Conversion Calculator
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Free-Bet Conversions with Hedging</h2>
          <p>
            To ensure risk-free conversions, place another leg to cover the opposite outcome of the free-bet, similar 
            to an arbitrage strategy. Aim for high odds, ideally +400, and hedge around -400 to reach an 80% conversion.
          </p>
          <p>
            Use the free-bet calculator linked above to help determine the amount for each leg, securing consistent 
            profit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Using Sign-Up Free Bets</h2>
          <p>
            When using sign-up bonuses, aim for odds of +300 or higher by adding parlay legs with positive EV. 
            Compare spreads and totals with Circa to identify profitable legs. If there’s a discrepancy of 1 point 
            or more, add it to the parlay.
          </p>
          <p className="mt-4">
            For example, if FanDuel lists an over/under at 154.5 but Circa lists it at 155.5, take the over 154.5 
            on FanDuel, trusting Circa’s line.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Low-Hold Tools and Hedge Bets</h2>
          <p>
            Consider low-hold tools or hedge bets to facilitate free-bet conversion. The low-hold tool helps locate 
            bets that effectively transfer funds between sportsbooks or convert free-bets to real money.
          </p>
          <p className="mt-4">
            Start with high odds on one leg (+400 or higher) and use the opposite side around -400 for optimal 
            conversion.
          </p>
        </section>
      </div>
    </div>
  );
}
