'use client';

export default function OddsAndProbability() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 2: Introduction to Sports Betting – Odds and Probability
        </h1>

        <section className="mb-8">
          <p>
            For each market, sportsbooks put their odds. These odds represent the
            implied probability of the bet hitting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Terminology</h2>
          <p>
            <strong>Stake</strong>: the amount you are wagering on the bet. For
            example, if you bet $10 on the Chiefs moneyline, your stake is $10.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Understanding Positive and Negative Odds</h2>
          <p>
            <strong>Positive odds</strong> indicate an underdog bet with a lower
            probability of hitting. For instance, if you bet on the Lakers at +150
            odds, a $100 stake would yield a profit of $150 if they win. Your
            total return would be $250 (your profit plus the original stake).
          </p>
          <p className="mt-4">
            <strong>Negative odds</strong> signify a favorite bet with a higher
            likelihood of hitting. For example, betting on the Chiefs at -150
            odds means you need to wager $150 to make a $100 profit if they win.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculating Profit</h2>
          <p>
            For positive odds, take the odds, divide by 100, and multiply by your
            stake. Example: Betting $1 at +150 odds yields $1.5 in profit (150 /
            100 = 1.5, then 1.5 * 1 = $1.5).
          </p>
          <p className="mt-4">
            For negative odds, divide your stake by the absolute odds divided by
            100. Example: A $30 bet at -150 odds yields a $20 profit (1.5 as
            calculated, then 30 / 1.5 = $20).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Converting Odds to Implied Probability</h2>
          <p>
            To understand why these odds are structured this way, we can convert
            them to implied probability:
          </p>
          <p className="mt-4">
            <strong>Positive Odds:</strong> Probability = (100) / (ODDS + 100)
          </p>
          <p>Example: For Lakers at +150, probability = 100 / (150 + 100) = 40%</p>
          <p className="mt-4">
            <strong>Negative Odds:</strong> Probability = (ODDS*(-1)) / ((-1)*ODDS + 100)
          </p>
          <p>Example: For Chiefs at -150, probability = 150 / (150 + 100) = 60%</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Does This Matter?</h2>
          <p>
            The higher probability of a favorite winning means a lower payout, as
            it’s more likely to happen. Underdog bets, being less likely to occur,
            offer a greater payout to incentivize betting on them.
          </p>
          <p className="mt-4">
            These basics lead into Expected Value Calculations, which we’ll cover
            in the next lesson.
          </p>
        </section>
      </div>
    </div>
  );
}
