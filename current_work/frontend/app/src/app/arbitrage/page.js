'use client';

export default function ExpectedValueBasics() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 3: Expected Value Basics – Implied Probability and EV
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Expected Value?</h2>
          <p>
            Expected Value (EV) represents the average outcome over a large sample
            of events. For example, an EV of 10% means that over many trials, you
            would expect to make a 10% return on your initial wager on average.
          </p>
          <p className="mt-4">
            <strong>Note:</strong> EV is not a guarantee; it reflects a long-term
            expectation. To achieve results close to EV, you need a sufficiently
            large number of bets to allow the average return to approach the
            expected value.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example of Expected Value</h2>
          <p>
            Consider a coin toss. If it lands on heads, you win $150; if it lands
            on tails, you lose $100. We know that over many tosses, heads and
            tails should appear roughly equally (each with a probability of 50%).
          </p>
          <p className="mt-4">
            To calculate the EV, let’s break down the potential outcomes:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>50% of the time, you win $150 → <code>0.5 * 150 = $75</code></li>
            <li>50% of the time, you lose $100 → <code>0.5 * -100 = -$50</code></li>
          </ul>
          <p>
            Summing these, we get <code>75 + (-50) = $25</code>. This means that
            with each coin flip, you expect to make an average of $25.
          </p>
          <p className="mt-4">
            Remember, this is the <strong>expected</strong> value, not the
            guaranteed outcome per flip; you’ll either win $150 or lose $100.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Applying Expected Value to Sports Betting</h2>
          <p>
            From the previous lesson, we know that events with a lower probability
            offer higher payouts. In sports betting, EV becomes critical because
            it tells us when a bet might be profitable in the long term.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">When Should You Bet?</h2>
          <p>
            If the implied probability (from the odds) is less than the actual
            probability of an event happening, this is a good betting opportunity.
            You are essentially getting a higher payout than the true likelihood of
            the event would suggest.
          </p>
          <p className="mt-4">
            Let’s revisit the coin example. If the odds offered are +150 (meaning
            a $100 bet would yield a $150 profit), we calculate the implied
            probability as follows:
          </p>
          <p className="mt-4">
            Implied Probability = <code>100 / (150 + 100) = 40%</code>
          </p>
          <p>
            But, since we know the actual probability of a coin landing on heads
            is 50%, we’re getting a higher payout than the true probability
            implies!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Challenge with Sports Betting</h2>
          <p>
            In sports betting, it’s hard to know the true probability of an event.
            Estimating this probability accurately is essential for maximizing EV
            plays. We’ll discuss more on this topic in the next lesson, which
            covers vig and juice.
          </p>
        </section>
      </div>
    </div>
  );
}
