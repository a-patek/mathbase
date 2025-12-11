// data/lessons.ts

export const lessons = {
  "what-is-a-proof": {
    topic: "core",
    title: "What is a Proof?",
    subsections: [
      {
        slug: "intro",
        title: "What Mathematicians Mean by Proof",
        reading: `
A mathematical proof is a logically complete argument that shows *why* some statement
must always be true. Seeing five or ten examples is evidence, but a proof explains
the underlying structure that makes the statement inevitable in **all** valid cases.

When mathematicians say "prove it," they are not asking you to convince them with
intuition or pictures alone. They want a chain of statements where each step either
uses a definition, a previously proved fact, or a clearly valid logical rule.
        `,
        practice: [
          "In your own words, explain the difference between being 'convinced' something is true and having a proof.",
          "Give an example of a statement that seems obviously true and explain why a mathematician would still want a proof."
        ],
        tldr:
          "A proof is not just convincing; it is a logically complete argument that works in every valid case, not just in examples.",
      },
      {
        slug: "examples-vs-proofs",
        title: "Examples vs. Proofs — Why They’re Different",
        reading: `
Examples are useful for building intuition: they help you guess which statements
might be true. But examples alone can *never* guarantee a statement is always true.

For a universal statement like "for all integers n, P(n) holds," you could check
a million values of n and still miss a counterexample. A proof, on the other hand,
shows that no counterexample can exist.

A powerful habit in problem solving is:
- Use examples to **guess** the pattern.
- Use proofs to **confirm** the pattern forever.
        `,
        practice: [
          "Think of a statement about integers that you might try to check by plugging in values. Describe why examples alone are not enough.",
          "Invent a false 'pattern' that looks true for the first few cases but eventually fails. Explain how a proof would reveal the failure."
        ],
        tldr:
          "Examples suggest truth; proofs guarantee it. Examples can show a statement is false, but only a proof can show it is always true.",
      },
      {
        slug: "argument-structures",
        title: "Common Structures of Arguments",
        reading: `
Most proofs are not random collections of sentences; they follow common patterns.

Some core structures you will see often:
- **Direct proof:** Assume the hypothesis, then logically derive the conclusion.
- **Contrapositive:** Prove 'if not Q then not P' instead of 'if P then Q'.
- **Proof by contradiction:** Assume the statement is false and derive an impossibility.
- **Case analysis:** Split into cases and prove the statement in each case.

Recognizing these structures turns proofs from mysterious paragraphs into
familiar templates you can apply and adapt.
        `,
        practice: [
          "Write a one-sentence description of direct proof, contrapositive, and contradiction in your own words.",
          "Pick any simple 'if P then Q' statement (for example, 'if n is even then n^2 is even') and identify which proof structures could be used."
        ],
        tldr:
          "Proofs follow standard patterns like direct proof, contrapositive, contradiction, and casework. Learning these templates makes proofs far less intimidating.",
      },
      {
        slug: "reading-proofs-actively",
        title: "How to Read a Proof (Actively)",
        reading: `
Most students read proofs the way they read stories: from top to bottom, passively.
Mathematicians read proofs more like code or a chess game: they constantly pause,
check each step, and ask 'why does this follow?'.

Active proof-reading habits:
- Keep track of assumptions: what are we allowed to use right now?
- At each step, ask: 'Which definition or fact is being applied?'
- Try to reconstruct the next step yourself before reading it.
- After finishing, summarize the key idea of the proof in 1–2 sentences.

Active reading trains your brain to *think in proof mode*, not just to follow text.
        `,
        practice: [
          "Describe one habit you could adopt to read proofs more actively instead of passively.",
          "Think of a time you 'zoned out' reading a solution. What could you have done differently to stay engaged?"
        ],
        tldr:
          "Don’t just let the proof wash over you. Pause, question each step, track assumptions, and try to predict or reconstruct steps yourself.",
      },
      {
        slug: "writing-first-proof",
        title: "How to Write Your First Proof",
        reading: `
Writing your first proofs feels awkward because you are learning a new language:
mathematical English combined with logical structure.

A good way to start:
1. **Restate the goal** in your own words.
2. **List what you know**: assumptions, definitions, previously proved results.
3. Try to connect what you know to what you need, starting from the assumptions.
4. Write in clear sentences, not just algebra. Explain *why* each step is valid.

It's normal if early proofs feel clumsy. Clarity and correctness matter more than style.
Style improves automatically with practice.
        `,
        practice: [
          "Outline (in bullets) the steps you would take before writing a full proof of a simple statement, like 'the sum of two even integers is even'.",
          "Explain why it is important to write sentences and not just chains of symbols when you are learning to prove things."
        ],
        tldr:
          "Start by restating the goal, listing your assumptions, and connecting them step by step. Focus on correctness and clarity; elegance comes later.",
      },
      {
        slug: "beginner-mistakes",
        title: "Common Beginner Mistakes",
        reading: `
Beginners often make the same types of mistakes in proofs. Being aware of them
helps you avoid them much faster.

Some frequent issues:
- **Proving examples instead of the general case.**
- **Assuming what you are trying to prove** ('circling logic').
- **Using unclear pronouns** ('it', 'this', 'that') instead of precise objects.
- **Skipping key steps** with 'clearly' or 'obviously' when they are not obvious.

None of these mean you're 'bad at proofs' — they are just habits you need to unlearn.
        `,
        practice: [
          "Which of these beginner mistakes do you think you are most likely to make, and why?",
          "Take a statement like 'all prime numbers are odd except 2' and explain how someone might accidentally 'assume the conclusion' while trying to prove it."
        ],
        tldr:
          "Beginner mistakes—like assuming the conclusion, only checking examples, or writing vaguely—are normal. Noticing them is the first step to fixing them.",
      },
    ],
  },
  logic: {
  title: "Logic & Quantifiers",
  subsections: [
    {
      title: "Propositions, Statements, and Connectives",
      slug: "propositions-and-connectives",
      reading: `
Logic is the language of proofs. Every proof is really a chain of logical statements.

A **proposition** is a declarative statement that is either *true* or *false*, but not both.
Examples:
- "7 is prime." (true)
- "5 > 10." (false)
- "x > 2" is *not* a proposition unless x is specified.

**Logical connectives** combine statements:
- **¬P** : NOT P
- **P ∧ Q** : P AND Q
- **P ∨ Q** : P OR Q (inclusive)
- **P → Q** : IF P THEN Q
- **P ↔ Q** : P *if and only if* Q

Understanding these connectives is essential because proofs manipulate statements using logical rules.
`,
      practicePrompt: `
Explain in your own words the difference between a statement and a non-statement.
Then classify each item as a proposition or not: 
1. "Every even number greater than 2 is prime." 
2. "x + 3 = 9" 
3. "This sentence is false."
`,
      tldr: `
A proposition is a statement with a definite truth value. Logical connectives allow us to combine them into more complex statements.
`,
    },

    {
      title: "Truth Tables & Logical Equivalence",
      slug: "truth-tables-and-equivalence",
      reading: `
Truth tables let us analyze compound logical statements by listing all possible truth values.

Two statements P and Q are **logically equivalent** if they always have the same truth value.

Key examples:
- **P → Q** is equivalent to **¬P ∨ Q**.
- **P ↔ Q** is equivalent to **(P → Q) ∧ (Q → P)**.
- Double negation: **¬(¬P)** is equivalent to **P**.

Truth tables are a mechanical tool to verify these equivalences.
`,
      practicePrompt: `
Construct a truth table for the expression ¬P ∨ Q.
Is it logically equivalent to P → Q? Explain why or why not.
`,
      tldr: `
Truth tables measure truth under all conditions. Logical equivalence means two statements behave identically in every case.
`,
    },

    {
      title: "Implications & The If and Only If",
      slug: "implications-and-iff",
      reading: `
Students often misunderstand the implication **P → Q**. It does *not* mean P "causes" Q.  
It simply means: if P is true, then Q must also be true.

The only time **P → Q** is false is when P is true and Q is false.

An **if and only if** statement (P ↔ Q) means:
- P implies Q
- Q implies P  
Both must hold.

IFF statements are very common in definitions.
`,
      practicePrompt: `
Give an example of a true implication and explain why it is true.
Then give an example of a statement that is true "if and only if" and explain both directions.
`,
      tldr: `
Implications are only false when the hypothesis is true and the conclusion is false. IFF means two statements imply each other.
`,
    },

    {
      title: "Quantifiers (∀, ∃) and How They Work",
      slug: "quantifiers",
      reading: `
Quantifiers let us make statements about entire sets.

- **Universal quantifier (∀)**: “for all”
- **Existential quantifier (∃)**: “there exists”

Examples:
- ∀n ∈ ℕ, n + 0 = n.
- ∃x ∈ ℝ such that x² = 2.

**Order matters**:
- ∀x ∃y P(x, y) is NOT the same as ∃y ∀x P(x, y).

Quantifiers appear everywhere in proofs, especially in definitions and theorems.
`,
      practicePrompt: `
Rewrite each statement in clear English:
1. ∀x ∈ ℝ, x² ≥ 0  
2. ∃n ∈ ℤ such that n² = 49  
3. ∀ε > 0 ∃δ > 0 such that |x - a| < δ → |f(x) - L| < ε  
(Explain the order of quantifiers.)
`,
      tldr: `
Quantifiers formalize “for all” and “there exists.” Their order changes the meaning of statements dramatically.
`,
    },

    {
      title: "Negation of Complex Statements",
      slug: "negation-of-statements",
      reading: `
Negating quantifiers and compound statements is one of the most important proof skills.

Rules:
- ¬(∀x P(x)) is equivalent to ∃x such that ¬P(x).
- ¬(∃x P(x)) is equivalent to ∀x such that ¬P(x).
- ¬(P → Q) is equivalent to P ∧ ¬Q.
- De Morgan’s laws:
  - ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
  - ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

Negations show up constantly in contradiction proofs.
`,
      practicePrompt: `
Negate the following statements and simplify:
1. ∀x ∈ ℝ, x + 5 > 10  
2. ∃n ∈ ℕ such that n is even and prime  
3. If n is odd, then n² is odd  
Explain your reasoning clearly.
`,
      tldr: `
Negations flip quantifiers and break apart logical structure using equivalence rules like De Morgan’s laws.
`,
    },

    {
      title: "Mistakes Students Make With Quantifiers",
      slug: "quantifier-mistakes",
      reading: `
Common quantifier errors include:

- Mixing up ∀ and ∃ when negating statements.
- Forgetting that ∀x ∃y P(x, y) is NOT the same as ∃y ∀x P(x, y).
- Assuming an existential witness must be unique (it never has to be).
- Treating "for all" as "for all of the examples I've tested."
- Using vague language instead of specifying the object.

Mastering quantifiers requires precision—proofs depend on small details here.
`,
      practicePrompt: `
Give an example of a statement where switching the quantifiers changes the truth value.
Explain why the order matters in your example.
`,
      tldr: `
Most errors come from misunderstanding scope or quantifier order. Always ask: “What depends on what?”
`,
    },

  ],
},
"direct-proofs": {
    topic: "core",
    title: "Direct Proofs",
    subsections: [
      {
        title: "How Direct Proofs Work",
        slug: "how-direct-proofs-work",
        reading: `
A **direct proof** is the most straightforward kind of proof for an implication:

> If P is true, then Q is true.

The structure is:

1. **Assume P** is true. (You literally say: "Let P be ...")
2. Use definitions, known results, and algebra/logic to deduce new facts.
3. Eventually **reach Q** as a conclusion.

The key mindset:

- You are *inside a world* where P is true.
- You are not arguing about whether P is true—you are *using* it as a starting point.
- Every step must be justified by a definition, a known theorem, or a clear logical rule.

Example pattern:

> Prove: If n is an even integer, then n² is even.

- Assume n is even ⇒ n = 2k for some integer k.
- Then n² = (2k)² = 4k² = 2(2k²), which is an even number.
- Therefore, if n is even, n² is even.

This is a direct proof: we assumed the hypothesis and algebraically reached the conclusion.
        `,
        practicePrompt: `
In your own words, describe the three main steps of a direct proof for a statement "If P, then Q".
Then choose a simple example (e.g., "If n is divisible by 4, then n is even") and outline the structure of its direct proof without filling in all the algebra.
        `,
        tldr: `
A direct proof of "If P, then Q" starts by assuming P, logically deduces facts using definitions and known results, and ends by showing Q must follow.
        `,
      },

      {
        title: "Proving Statements About Even/Odd Numbers",
        slug: "even-odd-numbers",
        reading: `
Direct proofs often start with **definitions**. For integers:

- n is **even** ⇔ n = 2k for some integer k.
- n is **odd**  ⇔ n = 2k + 1 for some integer k.

To prove statements about even/odd numbers, you almost always:

1. Translate "even" or "odd" into the 2k / 2k + 1 definition.
2. Do algebra.
3. Rewrite the result back into the form 2( integer ) or 2( integer ) + 1.

Example:

> Prove: The sum of two odd integers is even.

Let a and b be odd integers.  
Then a = 2m + 1 and b = 2n + 1 for some integers m, n.  
So a + b = (2m + 1) + (2n + 1) = 2m + 2n + 2 = 2(m + n + 1).  
Since m + n + 1 is an integer, a + b is even.

The magic is just: *translate → compute → translate back*.
        `,
        practicePrompt: `
Using the definitions of even and odd, prove ONE of the following using a direct proof:
1. The product of two odd integers is odd.  
2. The sum of an even integer and an odd integer is odd.  

Write your proof in full sentences, and make sure you explicitly use the definition "n is even/odd ⇔ n = 2k or 2k + 1".
        `,
        tldr: `
For even/odd proofs, always start from n = 2k or n = 2k + 1, do the algebra, and show the result fits the correct even/odd definition.
        `,
      },

      {
        title: "Proving Divisibility Statements",
        slug: "divisibility",
        reading: `
For integers a and b (with b ≠ 0), we say **"b divides a"** (written b ∣ a) if:

> There exists an integer k such that a = bk.

Direct proofs of divisibility statements always come back to this definition.

Example:

> Prove: If a is divisible by 6, then a is divisible by 3.

Assume 6 ∣ a.  
Then there exists an integer k such that a = 6k.  
But 6k = 3(2k), so a = 3(2k).  
Let m = 2k (an integer), then a = 3m, so 3 ∣ a.

Typical patterns:

- “If m is divisible by 12, then m is divisible by 4.”  
- “If a and b are divisible by d, then a + b is divisible by d.”

You almost always: start with a = dk, do algebra, and show the result equals d × (integer) or some other divisor × (integer).
        `,
        practicePrompt: `
Prove one of the following using a direct proof:
1. If n is divisible by 4, then n is divisible by 2.  
2. If a and b are both divisible by 5, then a + b is divisible by 5.  

Be explicit about where you use the definition "d divides n ⇔ n = dk for some integer k".
        `,
        tldr: `
Divisibility proofs unwrap "d ∣ n" into n = dk, manipulate that equation, and then rewrap it to show divisibility by another integer.
        `,
      },

      {
        title: "Proving Inequalities",
        slug: "inequalities",
        reading: `
Direct proofs with inequalities use basic facts like:

- If a ≤ b and b ≤ c, then a ≤ c.  
- If a ≤ b and c ≥ 0, then ac ≤ bc.  
- Squares of real numbers are nonnegative: x² ≥ 0.

Example:

> Prove: If x ≥ 2, then x² ≥ 4.

Assume x ≥ 2.  
Since x ≥ 2 and x ≥ 2 ⇒ x·x ≥ 2·2 (multiplying by nonnegative numbers preserves order).  
So x² ≥ 4.

Another example:

> Prove: If 0 ≤ x ≤ 1, then x² ≤ x.

We can rewrite x² ≤ x as x² − x ≤ 0 ⇒ x(x − 1) ≤ 0.  
When 0 ≤ x ≤ 1, we have x ≥ 0 and x − 1 ≤ 0, so their product is ≤ 0.

Key ideas:

- Manipulate inequalities using allowed operations.
- Sometimes rewrite the target inequality into a form like (something)² ≥ 0 or product of sign-known factors.
        `,
        practicePrompt: `
Prove ONE of the following using a direct proof:
1. If x ≥ 3, then x² ≥ 9.  
2. If 0 ≤ x ≤ 2, then x² ≤ 4x.  

Clearly indicate which inequality rules you are using (e.g., "multiplying both sides by a nonnegative number").
        `,
        tldr: `
Inequality proofs use algebra plus basic order rules: preserve direction when multiplying by nonnegative numbers, and often rewrite to something obviously ≥ 0 or ≤ 0.
        `,
      },

      {
        title: "Techniques for Structuring a Direct Proof",
        slug: "structuring-direct-proofs",
        reading: `
Strong direct proofs are not just correct—they are **readable**.

Helpful structuring techniques:

1. **State the goal clearly.**  
   "We want to prove: If P, then Q."

2. **Introduce the assumption explicitly.**  
   "Let n be an integer such that P holds."

3. **Work in a logical sequence.**  
   Each line should follow from previous ones using definitions or known results.

4. **Name important objects.**  
   Instead of "it", write "this integer k" or "this real number x".

5. **Close the proof clearly.**  
   End with a sentence like: "Therefore, Q holds, so the statement is proved."

You can think of a direct proof as a mini-story:

- Setup: assumptions and notation.  
- Development: step-by-step reasoning.  
- Resolution: the desired conclusion appears naturally.
        `,
        practicePrompt: `
Take a direct proof you wrote earlier (even/odd, divisibility, or inequalities) and rewrite it focusing only on structure and clarity:

- Add an explicit opening sentence stating the theorem.  
- Make the assumption line very clear ("Let n be ...").  
- Add a final sentence that clearly signals the conclusion.  

Reflect: Did rewriting for structure make the argument easier to follow?
        `,
        tldr: `
Good direct proofs have a clear opening (assumptions), a logically ordered middle, and an explicit closing that states the conclusion has been reached.
        `,
      },

      {
        title: "Direct Proof Practice Problems",
        slug: "direct-proof-practice",
        reading: `
Here are some classic direct-proof style problems. You don't need tricks—just definitions and careful algebra/logic.

Try to prove each of the following:

1. If n is an even integer, then n² + 6 is even.  
2. If a and b are odd integers, then a² + b² is even.  
3. If n is divisible by 3 and 4, then n is divisible by 12.  
4. If x ≥ 1, then x³ ≥ x.  
5. If m and n are integers and m is divisible by n, then m² is divisible by n.

Focus on:

- Translating definitions (even/odd, divisibility).  
- Doing clean algebra.  
- Ending with a statement that directly matches the definition of what you’re trying to prove.
        `,
        practicePrompt: `
Choose TWO of the practice statements in the reading and write full direct proofs for them.

After writing, check:
- Did you clearly state your assumptions at the start?  
- Did you explicitly use the relevant definitions (even, odd, divides, ≥, etc.)?  
- Does the last line of your proof exactly match the statement you were trying to prove?
        `,
        tldr: `
These problems are pure reps: use the same direct-proof patterns (assume, translate definitions, do algebra, translate back, conclude) until the process feels natural.
        `,
      },
    ],
  },
    "counterexamples": {
    topic: "core",
    title: "Counterexamples",
    subsections: [
      {
        title: "What Is a Counterexample?",
        slug: "what-is-a-counterexample",
        reading: `
A **counterexample** is a specific example that shows a universal statement is false.

A universal statement looks like:

> For all x in some set, P(x) is true.

To disprove it, you only need to find **one** x such that P(x) is false.

Example:
- The statement "All prime numbers are odd" is false because 2 is a prime number that is not odd.
- The statement "If a·b = 0, then a = 0" is false because 2·0 = 0 even though 2 ≠ 0.

Counterexamples are powerful because they give insight into *why* a statement fails.
        `,
        practicePrompt: `
Explain in your own words why a single counterexample is enough to disprove a universal statement.
Then provide your own counterexample to the incorrect statement: "If a·b = 0, then both a and b must be 0."
        `,
        tldr: `
A counterexample is a single specific instance that makes a universal statement false.
        `,
      },

      {
        title: "How to Spot a False Conjecture",
        slug: "spotting-false-conjectures",
        reading: `
Many mathematical statements *look* true because they work for the first few examples.  
A false conjecture often has **patterns that break only in edge cases**.

Strategies for spotting false conjectures:

1. **Test boundary values.**  
   Small numbers, negative numbers, 0, or 1 often break patterns.

2. **Test extreme values.**  
   Very large numbers or unusual cases often reveal failures.

3. **Look for hidden assumptions.**  
   Does the conjecture assume positivity? Integrality? Distinct values?

4. **Try a structural contradiction.**  
   Ask: *What would need to happen for this to fail?*

Example false conjecture:
> Every number of the form n² + n + 17 is prime.

It works for many values, but fails at n = 17.

Spotting false conjectures is a skill that improves with pattern recognition.
        `,
        practicePrompt: `
Test the conjecture: "All numbers of the form n² + 3n + 2 are prime."
Find a value of n that gives a composite number, and explain why it is a counterexample.
        `,
        tldr: `
False conjectures often fail at boundary or extreme values—testing these systematically reveals counterexamples quickly.
        `,
      },

      {
        title: "Building “Minimal” Counterexamples",
        slug: "minimal-counterexamples",
        reading: `
A **minimal counterexample** is the smallest or simplest counterexample that breaks a conjecture.

Why they matter:

- They often reveal exactly why the statement fails.
- They show which assumptions are missing.
- They can inspire corrected or refined conjectures.

Example:
> Conjecture: Every odd integer greater than 1 is prime.

Minimal counterexample: 9 (the smallest odd composite greater than 1).

Another example:
> Conjecture: If f'(x) = 0, then f has a maximum at x.

Counterexample: f(x) = x³ has f'(0) = 0 but no maximum.

Minimal counterexamples are especially useful in problem-solving competitions and proof writing.
        `,
        practicePrompt: `
For each false conjecture below, find a counterexample and identify the **smallest** or simplest one:

1. "Every number divisible by 6 is divisible by 12."
2. "Every odd number is of the form 4k + 1."
3. "If n is even, then n/2 is odd."

Explain why your counterexample is minimal.
        `,
        tldr: `
Minimal counterexamples isolate exactly where a statement breaks, revealing structural flaws in the conjecture.
        `,
      },

      {
        title: "Counterexamples in Algebra & Number Theory",
        slug: "algebra-number-theory",
        reading: `
In algebra and number theory, counterexamples often appear when intuition fails or when assumptions are missing.

Common examples:

- **Cancellation law failure in modular arithmetic**  
  2x ≡ 2y (mod 4) does NOT imply x ≡ y (mod 4).

- **Failure of exponent rules**  
  (a + b)² ≠ a² + b² in general.

- **Failure of unique factorization in some number systems**  
  In ℤ[√−5], 6 = 2·3 = (1 + √−5)(1 − √−5).

- **Divisibility traps**  
  "If a ∣ bc, then a ∣ b or a ∣ c" is false.

Example counterexample:
> 2 divides 4·3, but 2 does not divide 3.

Counterexamples prevent incorrect overgeneralizations and refine intuition.
        `,
        practicePrompt: `
Provide counterexamples to TWO of the following:

1. "If a ∣ bc, then a ∣ b."  
2. "If x² = y², then x = y."  
3. "If a ≡ b (mod n), then a² ≡ b² (mod n) always holds." (Hint: does it ALWAYS hold?)

Explain what structural assumption fails in each example.
        `,
        tldr: `
Algebra and number theory contain many tempting but false generalizations—counterexamples show where intuition must be corrected.
        `,
      },

      {
        title: "Common Patterns That Often Fail",
        slug: "common-failing-patterns",
        reading: `
Many mathematical mistakes come from assuming a pattern that looks true but fails in edge cases.

Common failing patterns include:

- Assuming “cancelation” works everywhere.
- Assuming exponent rules extend to sums. (They often don't.)
- Assuming even/odd behavior behaves linearly.
- Assuming “working for many examples” means a statement is true.
- Assuming properties of ℝ apply to ℤ or modular arithmetic.

Example:
> Statement: If x·y = 0, then x = 0 or y = 0.

True over real numbers—false over modular arithmetic.

Pattern failures reveal where intuition must be retrained.
        `,
        practicePrompt: `
Provide a counterexample to one of these false statements:

1. "If a + b is even, then a and b must both be even."  
2. "If ab = ac, then b = c."  
3. "If a² = b², then a = b."

Explain why the counterexample breaks the pattern you expected.
        `,
        tldr: `
Many common mathematical “rules” only work in certain structures—counterexamples identify exactly where patterns break.
        `,
      },

      {
        title: "How Counterexamples Strengthen Understanding",
        slug: "why-counterexamples-matter",
        reading: `
Counterexamples do more than disprove statements—they deepen understanding.

Counterexamples help you:

- See the **boundaries** of a theorem.
- Learn what assumptions are essential.
- Refine incorrect intuition.
- Form better, more accurate conjectures.
- Understand *why* proofs require certain steps.

Example:
> The Mean Value Theorem requires continuity on [a, b] and differentiability on (a, b).  
Removing either condition yields immediate counterexamples.

Counterexamples guide you toward stronger, cleaner, more precise mathematics.
        `,
        practicePrompt: `
Pick any mathematical statement you once believed was true but later discovered was false (even something simple).  
Explain:

- The incorrect intuition you had,  
- The counterexample that corrected you,  
- How your understanding improved after seeing it.
        `,
        tldr: `
Counterexamples sharpen mathematical intuition by revealing exactly which assumptions matter and why.
        `,
      },
    ],
  },
 "indirect-proofs": {
    topic: "core",
    title: "Proof by Contradiction & Contrapositive",
    subsections: [
      {
        title: "Why Indirect Proof Exists",
        slug: "why-indirect-proof-exists",
        reading: `
Not every statement is easy to prove directly. Sometimes the conclusion is difficult
to reach from the assumption — but the *negation of the conclusion* leads quickly
to something impossible.

This is where **indirect proofs** come from.

There are two major forms:

1. **Contrapositive Proof**
   - Instead of proving "If P, then Q," prove the logically equivalent statement:
     > If not Q, then not P.
   - Often much cleaner than direct proofs.

2. **Proof by Contradiction**
   - Assume the statement you want to prove is false.
   - Show that this assumption leads to a contradiction.
   - Conclude the statement must be true.

Indirect proofs exist because they can turn a messy direct argument into a clean,
natural one by reframing the logic.

Example:
> To prove "If n² is even, then n is even," the contrapositive is far easier:
> If n is odd, then n² is odd.
        `,
        practicePrompt: `
Explain why indirect proofs are needed. Give an example of a statement where the direct proof is awkward, but the contrapositive is simple.
        `,
        tldr: `
Indirect proofs reframe a hard proof into an easier one by proving an equivalent or stronger contradiction-based statement.
        `,
      },

      {
        title: "Contrapositive: The Cleanest Technique",
        slug: "contrapositive",
        reading: `
A contrapositive proof is one of the cleanest techniques in mathematics.

To prove:
> If P, then Q,

you instead prove:
> If not Q, then not P.

These two statements are **logically equivalent**, meaning proving either one proves the original.

Examples:

1. **If n² is even, then n is even.**
   Contrapositive:
   > If n is odd, then n² is odd — easy.

2. **If a·b = 0, then a = 0 or b = 0.**
   Contrapositive:
   > If a ≠ 0 and b ≠ 0, then a·b ≠ 0.

The contrapositive is preferred when:
- The negation is easy to work with.
- The original statement feels backwards.
- The hypothesis (P) gives you little to work with, but the negation of the conclusion (¬Q) does.

Contrapositive proofs are common in analysis, algebra, number theory, and logic.
        `,
        practicePrompt: `
Rewrite each statement into its contrapositive:

1. If x ≥ 5, then x² ≥ 25.  
2. If a·b is even, then a is even or b is even.  
3. If a sequence converges, then it is bounded.

Pick one and write a contrapositive proof for it.
        `,
        tldr: `
Contrapositives replace "If P then Q" with the equivalent but often much easier statement "If not Q then not P."
        `,
      },

      {
        title: "Proof by Contradiction: Strategy & Examples",
        slug: "contradiction-strategy",
        reading: `
A proof by contradiction assumes the statement you want to prove is false, and then
shows this assumption leads to something impossible.

General structure:

1. Assume the statement is false.
2. Derive logical consequences of that assumption.
3. Reach a contradiction, such as:
   - A number is both even and odd.
   - 0 = 1.
   - A positive number is < 0.
4. Conclude the original statement must be true.

Contradiction is powerful when:
- The negation of the claim directly violates a known theorem.
- The structure of the problem naturally leads to two mutually exclusive conclusions.
- The goal is easier to prove *impossible* than *true*.

**Example: Integers**

> Prove: There is no smallest positive rational number.

Assume there *is* a smallest positive rational number r.  
Then r/2 is also positive and rational, but r/2 < r — contradiction.

Thus no such smallest rational exists.

Contradiction proofs are fundamental in analysis, algebra, set theory, and number theory.
        `,
        practicePrompt: `
Use proof by contradiction to prove ONE:

1. There is no largest odd integer.  
2. If a² is even, then a is even.  
3. Between any two rational numbers, there is another rational number.  

Explain exactly where the contradiction occurs.
        `,
        tldr: `
In contradiction proofs, you assume the opposite of what you want to prove and show that assumption leads to an impossibility.
        `,
      },

      {
        title: "Classic Examples (Irrationality of √2)",
        slug: "irrationality-of-sqrt2",
        reading: `
One of the most famous contradiction proofs shows that √2 is irrational.

**Goal:** Prove √2 is not a rational number.

Assume the opposite: √2 = a/b in lowest terms (a and b have no common factors).

Then:

1. Square both sides: 2 = a² / b² → a² = 2b².
2. This implies a² is even → a is even → let a = 2k.
3. Substitute: (2k)² = 2b² → 4k² = 2b² → b² = 2k² → b² is even → b is even.
4. But if a and b are both even, the fraction was **not** in lowest terms.

This contradiction proves √2 is irrational.

Other famous contradiction proofs include:
- Infinitely many primes.
- √3, √5, √6 are irrational.
- No rational solution to x² = 3.

These proofs show contradiction is essential for major results.
        `,
        practicePrompt: `
Explain in your own words where the contradiction arises in the proof that √2 is irrational.
Then outline how the argument would look for √3.
        `,
        tldr: `
Classic contradiction proofs often assume a minimal or reduced form and then show that assumption violates its own conditions.
        `,
      },

      {
        title: "When NOT to Use Contradiction",
        slug: "when-not-to-use-contradiction",
        reading: `
Although contradiction is powerful, it is not always the right tool.

Avoid contradiction when:

1. **A direct or contrapositive proof is cleaner.**
   If a simple algebraic argument works, do not complicate it.

2. **The contradiction is manufactured rather than natural.**
   If you must force complicated steps to produce a contradiction, you're using the wrong method.

3. **The negation of the statement is messy.**
   Some statements have negations that introduce unnecessary complexity.

4. **You can construct a direct example or inequality.**

Heuristics:
- Use **contrapositive** for implications where negating the hypothesis and conclusion is clean.
- Use **contradiction** for existence, minimality, parity, or rationality arguments.
- Use **direct proof** when definitions directly apply.

Great problem solvers choose the method that makes the proof *shortest and clearest*.
        `,
        practicePrompt: `
Pick any statement from Modules 1–4 and decide which proof technique fits best:
direct, contrapositive, or contradiction.

Justify *why* your choice is the most natural.
        `,
        tldr: `
Use contradiction only when it simplifies the argument — not when it complicates it unnecessarily.
        `,
      },

      {
        title: "Practice: Rewrite & Convert Proofs",
        slug: "rewrite-convert",
        reading: `
A powerful exercise in learning proof techniques is rewriting the same proof using
different logical strategies.

Try converting:

1. A direct proof → a contrapositive proof.
2. A contrapositive proof → a contradiction proof.
3. A contradiction proof → a direct proof (when possible).

Example:
> If n is odd, then n² is odd.

- **Direct proof:** n = 2k + 1 → n² = 4k² + 4k + 1 → odd.
- **Contrapositive:** If n² is even → n is even.
- **Contradiction:** Assume n² is even and n is odd → contradiction in algebra.

Rewriting proofs strengthens your understanding of logical equivalence and proof structure.
        `,
        practicePrompt: `
Rewrite ONE of your previous proofs from Direct Proofs or Logic in:

1. Contrapositive form  
2. Contradiction form  

Then compare the three versions and reflect: which method produced the clearest argument?
        `,
        tldr: `
Rewriting proofs in different forms reveals logical structure and improves versatility in mathematical problem solving.
        `,
      },
    ],
  },
    induction: {
    topic: "core",
    title: "Mathematical Induction",
    subsections: [
      {
        title: "The Logic Behind Induction",
        slug: "logic-of-induction",
        reading: `
Mathematical induction is a proof technique used to show that a statement P(n)
holds for all integers n greater than or equal to some starting value n₀.

The logic is like a line of dominoes:

1. **Base Case:** Show P(n₀) is true. (Knock over the first domino.)
2. **Induction Step:** Assume P(k) is true for an arbitrary k ≥ n₀ (induction hypothesis),
   and prove P(k + 1) is also true. (Each domino knocks over the next.)

If both parts hold, then:
- P(n₀) is true,
- P(n₀ + 1) is true,
- P(n₀ + 2) is true,
- and so on forever.

Induction does **not** prove infinitely many separate facts; instead, it proves
a *single logical pattern* that propagates truth from one case to the next.
        `,
        practicePrompt: `
In your own words, explain the domino analogy for induction.
Then describe what the base case and induction step represent in that analogy.
        `,
        tldr: `
Induction proves a statement for all integers starting at n₀ by proving a base case and a step that pushes truth from n to n + 1.
        `,
      },

      {
        title: "Weak vs. Strong Induction",
        slug: "weak-vs-strong",
        reading: `
There are two common flavors of induction:

1. **Weak (ordinary) induction**
   - Assume P(k) is true for some k.
   - Use this to prove P(k + 1) is true.

2. **Strong induction**
   - Assume P(j) is true for **all** integers n₀ ≤ j ≤ k.
   - Use this to prove P(k + 1) is true.

Although strong induction *looks* stronger, the two forms are logically equivalent.

Strong induction is especially useful when P(k + 1) depends not just on P(k),
but on earlier values like P(k - 1), P(k - 2), etc. (e.g., recurrence relations,
factorizations, algorithm correctness).

Example (strong induction idea):
> Every integer n ≥ 2 can be written as a product of primes.

To show this for n, you assume it holds for all smaller integers and break n
into factors.
        `,
        practicePrompt: `
Explain the difference between the assumptions in weak and strong induction.
Then give an example of a situation (even in words) where strong induction feels more natural than weak induction.
        `,
        tldr: `
Weak induction assumes P(k) to prove P(k + 1); strong induction assumes all previous cases up to k. They are equivalent, but strong is often more convenient.
        `,
      },

      {
        title: "Induction for Algebraic Identities",
        slug: "induction-identities",
        reading: `
Induction is often used to prove formulas involving sums and algebraic identities.

Example:
> Prove: 1 + 2 + 3 + ... + n = n(n + 1)/2 for all n ≥ 1.

**Base Case (n = 1):**
LHS = 1, RHS = 1(1 + 1)/2 = 1 → true.

**Induction Step:**
Assume the formula holds for n = k:
1 + 2 + ... + k = k(k + 1)/2.

Then for n = k + 1:
1 + 2 + ... + k + (k + 1)
= [1 + 2 + ... + k] + (k + 1)
= k(k + 1)/2 + (k + 1)    (by induction hypothesis)
= (k + 1)(k/2 + 1)
= (k + 1)(k + 2)/2
= (k + 1)((k + 1) + 1)/2.

So the formula holds for k + 1.

This pattern—assume the identity for k, then add the next term—is standard
in many summation proofs.
        `,
        practicePrompt: `
Use induction to prove ONE of the following algebraic identities:

1. 1 + 3 + 5 + ... + (2n − 1) = n².  
2. 1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1)/6.  

Focus on writing a clear base case and a clean use of the induction hypothesis.
        `,
        tldr: `
For algebraic identities, induction usually assumes the formula up to n = k and then adds the next term, simplifying to the desired expression for k + 1.
        `,
      },

      {
        title: "Induction on Inequalities",
        slug: "induction-inequalities",
        reading: `
Induction can also prove inequalities, especially those involving growth rates.

Example:
> Prove: 2ⁿ ≥ n + 1 for all integers n ≥ 0.

**Base Case (n = 0):**
2⁰ = 1 and 0 + 1 = 1 → true.

**Induction Step:**
Assume 2ᵏ ≥ k + 1 for some k ≥ 0.
Then:
2ᵏ⁺¹ = 2·2ᵏ ≥ 2(k + 1) = 2k + 2.

We want 2ᵏ⁺¹ ≥ (k + 1) + 1 = k + 2.
But 2k + 2 ≥ k + 2 for k ≥ 0, so:
2ᵏ⁺¹ ≥ 2k + 2 ≥ k + 2.

Thus the inequality holds for k + 1.

Patterns for inequality induction:

- Use the hypothesis to bound an expression.
- Show the bound is strong enough for n + 1.
- Combine with simple inequalities like 2k + 2 ≥ k + 2.
        `,
        practicePrompt: `
Use induction to prove ONE inequality:

1. 3ⁿ ≥ 2n + 1 for all n ≥ 0.  
2. n! ≥ 2ⁿ for all n ≥ 4.  

Clearly show where you use the induction hypothesis in your argument.
        `,
        tldr: `
Induction on inequalities uses the hypothesis to bound part of the expression for n + 1 and then shows that this bound is strong enough.
        `,
      },

      {
        title: "Induction for Recurrence Relations",
        slug: "induction-recurrences",
        reading: `
Recurrence relations define sequences in terms of earlier terms. Induction is
a natural tool to prove closed forms or properties of such sequences.

Example:
Let a₁ = 1, a₂ = 1, and aₙ = aₙ₋₁ + aₙ₋₂ (Fibonacci sequence).
Suppose we want to prove a property like:
> aₙ ≤ 2ⁿ for all n ≥ 1.

We might use **strong induction**:

- Base cases: Check n = 1 and n = 2.
- Induction Step: Assume the statement holds for all k ≤ n.
  Then:
  aₙ₊₁ = aₙ + aₙ₋₁ ≤ 2ⁿ + 2ⁿ⁻¹ = 2ⁿ⁻¹(2 + 1) = 3·2ⁿ⁻¹ < 2ⁿ⁺¹.

In many recurrence proofs:

- You assume the property holds for several previous indices.
- You combine these assumptions to show it holds for the next index.
- Strong induction is more natural than weak induction.
        `,
        practicePrompt: `
Consider the sequence defined by:
- a₁ = 2
- aₙ₊₁ = 3aₙ for n ≥ 1.

Conjecture: aₙ = 2·3ⁿ⁻¹ for all n ≥ 1.

Use induction to prove this formula.  
(Then think about how you might handle a more complicated recurrence with strong induction.)
        `,
        tldr: `
Recurrence relation proofs usually pair a guessed formula with induction, often using strong induction when the next term depends on multiple previous ones.
        `,
      },

      {
        title: "Common Errors & Pitfalls",
        slug: "induction-pitfalls",
        reading: `
Many induction mistakes come from subtle logical or algebraic errors.

Common pitfalls:

1. **Forgetting the base case.**
   Without a base case, the "domino chain" never starts.

2. **Using P(k + 1) in the induction step.**
   You may only assume P(k), not what you're trying to prove.

3. **Incorrect algebra when going from k to k + 1.**
   Sloppy manipulation can completely break the proof.

4. **Not clearly stating the induction hypothesis.**
   You should explicitly say: "Assume P(k) holds for some k ≥ n₀."

5. **Assuming the result for all smaller values without saying strong induction is used.**

Good habits:

- Write a clear statement of P(n) at the start.
- Clearly mark base case and induction step.
- State the induction hypothesis in words.
- Explicitly show how you use the hypothesis in the step.
        `,
        practicePrompt: `
Write P(n) explicitly for one induction problem you've solved (or from this module).
Then:

1. Write a correct base case.  
2. Write a precise induction hypothesis.  
3. Identify exactly one line in your proof where you *use* the hypothesis.  

Reflect on whether any of your past proofs accidentally committed one of the listed pitfalls.
        `,
        tldr: `
Most induction errors come from missing base cases, misusing the induction hypothesis, or hiding key steps. Clear structure and explicit hypotheses fix most of them.
        `,
      },
    ],
  },
"sets-functions": {
    topic: "core",
    title: "Sets & Functions (Proof-Oriented)",
    subsections: [
      {
        title: "Basic Set Operations",
        slug: "basic-set-operations",
        reading: `
A **set** is a collection of distinct objects, called elements.

Basic notation:
- x ∈ A : "x is an element of A"
- x ∉ A : "x is not an element of A"

Common operations:
- **Union:** A ∪ B = { x : x ∈ A or x ∈ B }
- **Intersection:** A ∩ B = { x : x ∈ A and x ∈ B }
- **Set difference:** A \\ B = { x : x ∈ A and x ∉ B }
- **Complement (relative to a universe U):** Aᶜ = U \\ A

Two sets A and B are equal (A = B) if they have exactly the same elements:
> ∀x, x ∈ A ⇔ x ∈ B.

This element-wise perspective is the key to most set proofs.
        `,
        practicePrompt: `
Rewrite the definitions of A ∪ B and A ∩ B in your own words using "and/or" language.
Then give an example of two sets A and B and explicitly list A ∪ B and A ∩ B.
        `,
        tldr: `
Set operations like union, intersection, and complement are defined element-wise: a point belongs to the result exactly when it satisfies the defining condition.
        `,
      },

      {
        title: "Proving Set Equalities",
        slug: "proving-set-equalities",
        reading: `
To prove two sets A and B are equal, the standard method is:

1. Show A ⊆ B.
2. Show B ⊆ A.

Together, these give A = B.

To show A ⊆ B:
- Assume x ∈ A.
- Use definitions and logic to deduce x ∈ B.
- This proves every element of A is in B.

Example:
> Prove: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).

You would prove:
- If x ∈ A ∩ (B ∪ C), then x ∈ (A ∩ B) ∪ (A ∩ C).
- If x ∈ (A ∩ B) ∪ (A ∩ C), then x ∈ A ∩ (B ∪ C).

Most set equalities are really just structured logical equivalences.
        `,
        practicePrompt: `
Outline a proof (you don’t have to fill every detail) that:
A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).

Write the two directions:

1. Assume x ∈ A ∪ (B ∩ C) and show x ∈ (A ∪ B) ∩ (A ∪ C).  
2. Assume x ∈ (A ∪ B) ∩ (A ∪ C) and show x ∈ A ∪ (B ∩ C).
        `,
        tldr: `
To prove A = B, show A ⊆ B and B ⊆ A by starting with an arbitrary element and chasing membership through definitions.
        `,
      },

      {
        title: "What Makes a Function a Function?",
        slug: "what-is-a-function",
        reading: `
A **function** f from a set X to a set Y (written f : X → Y) assigns to each element
x ∈ X **exactly one** element f(x) ∈ Y.

Key pieces:
- **Domain:** the set X of inputs.
- **Codomain:** the set Y of allowed outputs.
- **Image (range):** the set { f(x) : x ∈ X } ⊆ Y.

Important: A function is not just a formula; it is a *rule with a specified domain and codomain*.

Examples:
- f : ℝ → ℝ given by f(x) = x².
- g : ℤ → ℤ given by g(n) = 2n + 1.

When proving things about functions, you must be precise about:
- Which set the input comes from.
- Which set the output lives in.
- How the rule behaves for all elements of the domain.
        `,
        practicePrompt: `
In your own words, explain why "a function must give exactly one output for each input."
Then give an example of a relation that is NOT a function and explain why it fails.
        `,
        tldr: `
A function is a rule assigning each element of the domain exactly one element of the codomain; domain and codomain matter in proofs.
        `,
      },

      {
        title: "Injective, Surjective, Bijective",
        slug: "injective-surjective-bijective",
        reading: `
Functions can have special properties:

- **Injective (one-to-one):**
  f : X → Y is injective if:
  > For all x₁, x₂ ∈ X, f(x₁) = f(x₂) ⇒ x₁ = x₂.
  Equivalently: different inputs give different outputs.

- **Surjective (onto):**
  f : X → Y is surjective if:
  > For every y ∈ Y, there exists x ∈ X such that f(x) = y.
  Every element of the codomain is actually hit.

- **Bijective:**
  f is bijective if it is both injective and surjective.
  This means f is a perfect matching between X and Y.

Proof patterns:

- To prove injective: assume f(x₁) = f(x₂) and show x₁ = x₂.
- To prove surjective: start with an arbitrary y in Y and solve for x in terms of y.
        `,
        practicePrompt: `
For the function f : ℤ → ℤ given by f(n) = 2n + 3:

1. Prove or disprove that f is injective.  
2. Prove or disprove that f is surjective.  

Be explicit with quantifiers: "for all" and "there exists."
        `,
        tldr: `
Injective means no two inputs share an output; surjective means every codomain element is hit; bijective means both.
        `,
      },

      {
        title: "Inverse Functions & Proofs",
        slug: "inverse-functions",
        reading: `
If f : X → Y is bijective, then it has an **inverse function** f⁻¹ : Y → X
such that:

- f⁻¹(f(x)) = x for all x ∈ X,
- f(f⁻¹(y)) = y for all y ∈ Y.

To prove a function g is the inverse of f, you must show these two compositions
act like identities.

Often, proving a function has an inverse boils down to:

1. Proving f is bijective.
2. Explicitly constructing the inverse rule and verifying the compositions.

Example:
f : ℝ → ℝ, f(x) = 3x + 1.

- Solve y = 3x + 1 ⇒ x = (y − 1)/3.
- Define f⁻¹(y) = (y − 1)/3.
- Then verify f⁻¹(f(x)) = x and f(f⁻¹(y)) = y.
        `,
        practicePrompt: `
Let f : ℝ → ℝ be defined by f(x) = 5x − 2.

1. Show that f is bijective.  
2. Find an explicit formula for f⁻¹.  
3. Verify both compositions f⁻¹(f(x)) and f(f⁻¹(y)) give back the input.
        `,
        tldr: `
Inverse functions exist exactly for bijections; to prove a function has an inverse, you show it is bijective and verify the two-sided inverse identities.
        `,
      },

      {
        title: "Constructing Functions in Proofs",
        slug: "constructing-functions-in-proofs",
        reading: `
Sometimes in a proof you must **construct a function** to show a relationship
between sets, especially in counting, cardinality, and equivalence arguments.

Common patterns:

- To show two sets have the same size (infinite or finite), construct a bijection between them.
- To prove inequalities about sizes, construct injections or surjections.
- To prove existence of solutions, define a function whose properties guarantee a solution.

Example:
To show there are as many even integers as integers, define:
f : ℤ → 2ℤ by f(n) = 2n.

- f is injective and surjective (a bijection), so the sets have the same cardinality.

In more abstract proofs, constructing the right function is often the main creative step.
        `,
        practicePrompt: `
Construct a function f : ℕ → ℕ that is:

1. Injective but not surjective.  
2. Surjective but not injective.

Describe the rule explicitly and briefly justify its properties.
        `,
        tldr: `
Constructing functions (especially injections, surjections, and bijections) is a central proof technique for comparing sizes of sets and showing structural relationships.
        `,
      },
    ],
  },

} as const;
