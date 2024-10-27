'use client';

export default function FinalEVTutorial() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Final Expected Value Tutorial
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Understanding Vig and Sportsbooks</h2>
          <p>
            The sportsbooks you should consider as your “devigging sportsbooks” are those with the lowest vig. The lower the vig, the more confident the sportsbook is in their line. Notable sportsbooks with low vig include <strong>BetOnline</strong>, <strong>Pinnacle</strong>, and <strong>Circa</strong>. These should be your first reference for mainlines.
          </p>
          <p>
            Quick tip: If a sportsbook offers the same odds for both sides of the bet, they consider it a 50/50 proposition. For example, many over/unders and spreads are listed at <strong>-110</strong> for both sides, indicating that the sportsbook believes both outcomes are equally likely.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculating Expected Value (EV)</h2>
          <p>
            To quickly determine the EV of a play, if you see a line of <strong>+104</strong>, the calculation is straightforward: 
            <strong> +104 - 100 = 4 / 2 = 2% EV</strong>. This method works well when the market probabilities appear to be 50/50.
          </p>
          <p>
            With EV opportunities disappearing quickly, it’s vital to recognize which plays are positive EV so you can place your wagers promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Player Props and Sportsbook Accuracy</h2>
          <p>
            For Player Props, sportsbooks like <strong>FanDuel</strong> have proven to be among the most accurate. While they do make mistakes, many other sportsbooks adjust their lines to match FanDuel’s probabilities.
          </p>
          <p>
            Player props have higher variance due to the inconsistency of player performances. As such, we recommend betting on player props only when they have greater than <strong>3% EV</strong>. In contrast, mainline bets should be wagered when they exceed <strong>1.5% EV</strong>.
          </p>
          <p>
            While OddsJam lists odds from various sportsbooks, it’s best to focus on sharp sportsbooks and avoid smaller ones like <strong>Fliff</strong>. For player props, stick to <strong>FanDuel</strong>, <strong>DraftKings</strong>, <strong>BetMGM</strong>, <strong>Caesars</strong>, and <strong>ESPN Bet</strong> as your primary references.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Expected Value in Parlays</h2>
          <p>
            Many casual sports bettors are drawn to parlays for their potential to yield high returns from a small wager. However, sportsbooks benefit greatly from parlays. To calculate the EV of a parlay, you add the expected value of each leg. Generally, each leg has negative EV, so the longer the parlay, the more negative EV it accumulates. 
          </p>
          <p>
            If you stack multiple positive EV legs, the overall parlay can turn positive EV. Nonetheless, increasing expected value also raises variance, so we don’t recommend parlays with more than <strong>3 legs</strong> unless there’s a boost, bonus, or promotion involved. Sticking to <strong>2-3 legs</strong> is advisable, but straight wagers are usually the best approach.
          </p>
          <p>
            Straight wagers are preferred because with EV betting, a larger sample size helps mitigate the risk of losing bets. Thus, there’s no need to combine two +EV legs into a parlay.
          </p>
          <p>
            Remember, these tips apply only to cash wagers, not free or bonus bets. For guidance on free bets, refer back to Lesson 6.
          </p>
        </section>
      </div>
    </div>
  );
}
