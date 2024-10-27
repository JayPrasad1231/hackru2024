'use client';

export default function BetSizingEV() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 7: Bankroll Management
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Much Should You Bet?</h2>
          <p>
            Determining how much to bet in EV betting is a crucial question that varies based on your bankroll. The general rule is that the larger your bankroll, the more you can wager. This is why we use the concept of <strong>units</strong>, representing 1% of your bankroll, to standardize bet sizing across different bankrolls. For example, with a $100 bankroll, your unit size would be $1.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Consideration for Odds</h2>
          <p>
            The odds of the event also impact bet sizing. Higher odds indicate a lower probability of winning, so it’s wise to place smaller bets on high-odds events to manage potential losses. If the bet wins, the payout will still be substantial due to the high odds.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Using the Kelly Criterion</h2>
          <p>
            The <strong>Kelly Criterion</strong> is a popular method for managing your bankroll in EV betting. This strategy uses a Kelly multiplier, where a value of 0 represents no risk, and values above 1 indicate a higher risk tolerance. My recommendations are:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>For mainlines (moneylines, spreads, totals): use a <strong>0.25 Kelly multiplier</strong></li>
            <li>For player props: use a <strong>0.125 Kelly multiplier</strong> due to their higher variance</li>
          </ul>
          <p className="mt-4">
            These multipliers are commonly used within the industry, helping you place bets that align well with your bankroll and risk tolerance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Importance of Betting Within Your Bankroll</h2>
          <p>
            Betting within your bankroll is essential for managing variance in sports betting. By placing numerous well-sized bets, you increase the likelihood of averaging out toward the expected return over time. Consistent, optimal bet sizing is a key part of this approach.
          </p>
        </section>
      </div>
    </div>
  );
}
