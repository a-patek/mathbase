// data/practiceProblems.ts

export const practiceProblems = [
  // ------------------------------------
  // MODULE 1 — What is a Proof?
  // ------------------------------------
  {
    id: "what-is-a-proof",
    title: "Module 1 — What is a Proof?",
    description:
      "Foundations of what proofs are actually doing, beyond checking examples.",
    problems: [
      {
        id: "wip-1",
        title: "Examples vs. Proof",
        difficulty: "warmup",
        topic: "Proof intuition",
        prompt: `
Explain, using your own words, why checking 100 or even 1,000,000 examples
does not count as a proof of a statement like:

"For all integers n, n^2 + n is even."

Then, describe what extra ingredient a *proof* must have that a big pile
of examples does not.
        `,
        hint: `
Focus on the difference between "for all integers n" (infinitely many cases)
and "for these particular n that I tried". What does a proof let you conclude
about *every* integer, even ones you never see?
        `,
        outline: `
1. Restate the statement in clear language.
2. Explain what it means to "check examples" and why that only touches finitely many cases.
3. Contrast that with what a proof does: it gives a *general argument* that works for an arbitrary integer n.
4. Conclude with a sentence about why examples are suggestive but not enough.
        `,
        solution: `
A correct solution will say that examples can suggest a pattern and show that
a statement is at least sometimes true, but they can never rule out the existence
of a counterexample. A proof explains why *no* counterexample can exist, by
reasoning about an arbitrary integer n rather than specific values.
        `,
        modelProof: `
Sample writeup:

Checking examples like n = 1, 2, 3, ..., 100 only shows that the statement holds
for those particular integers. There are infinitely many integers, so there could
still be some n beyond the ones we tested where n^2 + n is odd instead of even.

A proof is different. To prove "for all integers n, n^2 + n is even", we would
start with an arbitrary integer n and show algebraically that n^2 + n is always
divisible by 2. For example:

  n^2 + n = n(n + 1).

One of n or n + 1 is even, so their product is even. Therefore n^2 + n is even
for every integer n. This argument does not depend on any particular value of n,
so it rules out *all* possible counterexamples at once.

Thus, examples give us evidence, but a proof gives us a general argument that
works in every case.
        `,
      },
      {
        id: "wip-2",
        title: "Proof vs. Explanation",
        difficulty: "core",
        topic: "Mathematical communication",
        prompt: `
Take a simple statement you already know how to prove, such as:

"If n is even, then n^2 is even."

Write two versions of an explanation:

(1) A very informal, intuitive explanation you would give to a friend
    who is not taking a proof course.

(2) A fully formal proof that could appear in a textbook.

Then reflect on the differences between (1) and (2) in 2–3 sentences.
        `,
        hint: `
For the informal version, you might talk about "multiplying by itself" in words.
For the formal proof, you should explicitly use the definition of even:
n = 2k for some integer k.
        `,
        outline: `
1. Choose your statement (e.g. "if n is even then n^2 is even").
2. Write an informal explanation using everyday language and intuition.
3. Write a formal proof starting from the exact definition and reasoning step by step.
4. Compare: which details did you have to add or tighten in the formal version?
        `,
        solution: `
A correct solution will produce both an informal explanation and a formal proof,
then explicitly compare them. The key idea is that the formal proof uses precise
definitions and logical steps, while the informal version relies more on intuition.
        `,
        modelProof: `
Example of a formal proof:

Claim: If n is even, then n^2 is even.

Proof. Suppose n is an even integer. By definition, there exists an integer k
such that n = 2k. Then

  n^2 = (2k)^2 = 4k^2 = 2(2k^2),

which is 2 times an integer. Therefore n^2 is even. ∎
        `,
      },
      {
        id: "wip-3",
        title: "Universal vs. Existential Claim",
        difficulty: "core",
        topic: "Types of statements",
        prompt: `
Identify whether each statement is universal or existential, and then write
in one sentence what a proof of the statement would need to accomplish.

(a) For every real number x, x^2 ≥ 0.
(b) There exists an integer n such that n^2 = 25.
(c) For all integers n, if n is odd then n^2 is odd.
(d) There exists a rational number r such that r^2 = 2.
        `,
        hint: `
Universal = "for all ..."; existential = "there exists ...".
For universal statements, proofs must handle an arbitrary element.
For existential statements, proofs must exhibit or logically guarantee at least one example.
        `,
        outline: `
1. Classify each statement as universal or existential.
2. For each universal statement, describe what you would assume and what you must show.
3. For each existential statement, describe what kind of evidence counts as a proof
   (explicit example vs. a nonconstructive argument).
        `,
        solution: `
(a) Universal. A proof must take an arbitrary real x and show x^2 ≥ 0.
(b) Existential. A proof can show that n = 5 (or n = -5) works.
(c) Universal. A proof must assume n is an arbitrary odd integer and show n^2 is odd.
(d) Existential. A proof would need to show there is some rational r with r^2 = 2
    (in fact, this particular statement is false, which is a separate interesting fact).
        `,
        modelProof: `
You don't need full formal proofs here; the key is correct classification and
a clear description for each statement of what a proof would *have to do*.
        `,
      },
      {
        id: "wip-4",
        title: "Spot the Fake Proof",
        difficulty: "challenge",
        topic: "Logical flaws",
        prompt: `
Consider the (fake) "proof" below that claims to show: "All integers are equal."

1. Let a and b be any integers with a ≠ b.
2. Consider the function f(x) = (x - a)(x - b).
3. Then f(a) = 0 and f(b) = 0.
4. Suppose we have a magical rule: if f(a) = f(b), then a = b.
5. Since f(a) = f(b) = 0, we conclude a = b.
6. Therefore all integers are equal.

Explain precisely what is wrong with this "proof".
        `,
        hint: `
Focus on step 4. Is that rule actually valid? If not, explain why it's an incorrect logical principle.
        `,
        outline: `
1. Identify the claimed general rule in step 4.
2. Show (with a counterexample) that this rule is not valid in general.
3. Conclude that the argument relies on an incorrect logical implication.
        `,
        solution: `
The flaw is assuming that "if f(a) = f(b) then a = b" holds for arbitrary functions.
This is not true in general: many different inputs can map to the same output.
For example, the constant function g(x) = 0 satisfies g(a) = g(b) for *any* a, b,
but that does not mean a = b. The argument sneaks in a false logical rule at step 4.
        `,
        modelProof: `
Step 4 asserts a bogus implication: from f(a) = f(b) we can conclude a = b.
This is false for most functions. In particular, consider f(x) = 0 for all x.
Then f(a) = f(b) = 0 for any a, b, but that certainly doesn't force a = b.

Thus the "proof" depends on an invalid logical principle. Once we reject that
principle, the argument collapses and does not show that all integers are equal.
        `,
      },
    ],
  },

  // ------------------------------------
  // MODULE 2 — Logic & Quantifiers
  // ------------------------------------
  {
    id: "logic",
    title: "Module 2 — Logic & Quantifiers",
    description:
      "Propositions, implications, truth tables, quantifiers, and their negations.",
    problems: [
      {
        id: "log-1",
        title: "Implication as Or",
        difficulty: "core",
        topic: "Implications",
        prompt: `
Prove using a truth-table *or* case analysis that the implication

  P → Q

is logically equivalent to

  ¬P ∨ Q.

Explain in words what this equivalence means.
        `,
        hint: `
Make a truth table with columns for P, Q, P → Q, and ¬P ∨ Q.
Compare the last two columns row by row. Or, do a case split on P being true or false.
        `,
        outline: `
1. List all possibilities for (P, Q): (T, T), (T, F), (F, T), (F, F).
2. Compute the truth values of P → Q and ¬P ∨ Q in each case.
3. Verify they match in all four rows.
4. Interpret the result: the only case where an implication fails is when P is true and Q is false.
        `,
        solution: `
In all four combinations of truth values for P and Q, the columns for P → Q and ¬P ∨ Q agree.
Thus they are logically equivalent. In words, "If P then Q" is true whenever P is false
(or Q is true); it only fails when P is true and Q is false.
        `,
        modelProof: `
Constructing the truth table:

P | Q | P → Q | ¬P | ¬P ∨ Q
T | T |   T   |  F |   T
T | F |   F   |  F |   F
F | T |   T   |  T |   T
F | F |   T   |  T |   T

The columns for P → Q and ¬P ∨ Q are identical (T, F, T, T), so the formulas
are logically equivalent.

This shows that saying "if P then Q" is the same as saying "either P is false
or Q is true."
        `,
      },
      {
        id: "log-2",
        title: "Negating a Universal Statement",
        difficulty: "warmup",
        topic: "Negation & quantifiers",
        prompt: `
Negate the statement:

  "For all real numbers x, x^2 ≥ 1."

Write the negation in formal symbols with quantifiers, then translate it into
clear English.
        `,
        hint: `
Use the rule: ¬(∀x P(x)) is equivalent to ∃x such that ¬P(x).
        `,
        outline: `
1. Let P(x) be the statement "x^2 ≥ 1".
2. The original statement is ∀x ∈ ℝ, P(x).
3. Negate using the quantifier rule: ∃x ∈ ℝ such that ¬P(x).
4. Simplify ¬(x^2 ≥ 1) into x^2 < 1 and translate into English.
        `,
        solution: `
The negation of "For all real numbers x, x^2 ≥ 1" is:

"There exists a real number x such that x^2 < 1."

This says: "At least one real number has square less than 1."
        `,
        modelProof: `
Let P(x) be the statement "x^2 ≥ 1". The original sentence is ∀x ∈ ℝ, P(x).
The negation is

  ∃x ∈ ℝ such that ¬P(x),

which means ∃x ∈ ℝ with x^2 < 1. So in English: "There exists a real number
whose square is less than 1."
        `,
      },
      {
        id: "log-3",
        title: "Order of Quantifiers",
        difficulty: "core",
        topic: "Quantifier order",
        prompt: `
Consider the two statements:

(A) For every real number x, there exists a real number y such that y > x.
(B) There exists a real number y such that for every real number x, y > x.

1. Decide whether (A) is true or false and justify your answer.
2. Decide whether (B) is true or false and justify your answer.
3. Explain how the order of quantifiers changes the meaning.
        `,
        hint: `
For (A), can you always choose a y once you know x? For (B), you're asked to find a single y
that is larger than *every* real number.
        `,
        outline: `
1. Analyze (A): Given an arbitrary x, propose a formula for y in terms of x.
2. Analyze (B): Ask whether there is a largest real number.
3. Use these conclusions to discuss the difference between ∀x ∃y and ∃y ∀x.
        `,
        solution: `
(A) is true: for any real x, we can take y = x + 1 (or x + 0.001, etc.), which is bigger than x.
(B) is false: there is no largest real number because given any candidate y, y + 1 is larger.

The order of quantifiers matters: ∀x ∃y ... allows y to depend on x, while ∃y ∀x ...
demands a single y that works for all x at once.
        `,
        modelProof: `
For (A), let x be any real number. Define y = x + 1. Then y is real and y > x.
Because x was arbitrary, this shows that for every real x there exists a real y
with y > x. So (A) is true.

For (B), suppose there were a real number y such that y > x for all real x.
Then y - 1 would also be real, and we would have y > y - 1, contradicting the
claim that y is greater than *every* real number. More directly, given any
candidate y, consider y + 1, which is larger, so no such y can exist. Thus (B)
is false.

This illustrates that ∀x ∃y ... is very different from ∃y ∀x ....
        `,
      },
      {
        id: "log-4",
        title: "Contrapositive vs. Converse",
        difficulty: "challenge",
        topic: "Implications",
        prompt: `
Let P(x) be "x is divisible by 4" and Q(x) be "x is even".

1. Write "If x is divisible by 4, then x is even" in symbolic form using P and Q.
2. Write the **converse** of this implication in symbols and in English.
3. Write the **contrapositive** in symbols and in English.
4. Decide which of the three statements are true, and justify briefly.
        `,
        hint: `
Converse: Q → P. Contrapositive: ¬Q → ¬P.
Think carefully about which directions hold.
        `,
        outline: `
1. Original: P(x) → Q(x).
2. Converse: Q(x) → P(x).
3. Contrapositive: ¬Q(x) → ¬P(x).
4. Check truth:
   - Is every multiple of 4 even?
   - Is every even integer a multiple of 4?
   - If x is not even, can it be divisible by 4?
        `,
        solution: `
Original statement (P → Q): "If x is divisible by 4, then x is even" — true.
Converse (Q → P): "If x is even, then x is divisible by 4" — false (e.g. x = 2).
Contrapositive (¬Q → ¬P): "If x is not even, then x is not divisible by 4" — true.

The implication and its contrapositive are logically equivalent; the converse is different.
        `,
        modelProof: `
For P(x) = "x is divisible by 4" and Q(x) = "x is even":

Original: P(x) → Q(x): If x is divisible by 4, then x is even. This is true:
if x = 4k, then x = 2(2k), so x is even.

Converse: Q(x) → P(x): If x is even, then x is divisible by 4. This is false:
for instance, x = 2 is even but not divisible by 4.

Contrapositive: ¬Q(x) → ¬P(x): If x is not even (i.e., x is odd), then x is not
divisible by 4. This is true because any multiple of 4 is even, so an odd integer
cannot be divisible by 4.

Implications are equivalent to their contrapositives, but generally not to their converses.
        `,
      },
    ],
  },

  // ------------------------------------
  // MODULE 3 — Direct Proofs
  // ------------------------------------
  {
    id: "direct-proofs",
    title: "Module 3 — Direct Proofs",
    description:
      "Foundational exercises with even/odd numbers, divisibility, and inequalities.",
    problems: [
      {
        id: "dp-1",
        title: "Sum of Two Even Integers",
        difficulty: "warmup",
        topic: "Parity",
        prompt: `
Prove directly that the sum of two even integers is even.
        `,
        hint: `
Use the definition of even: an integer n is even if n = 2k for some integer k.
Let your two even integers be a and b.
        `,
        outline: `
1. Let a and b be even integers.
2. Write a = 2k and b = 2ℓ for some integers k, ℓ.
3. Compute a + b and factor out a 2.
4. Conclude that a + b is even.
        `,
        solution: `
Let a and b be even. Then there exist integers k, ℓ such that a = 2k and b = 2ℓ.
Then

  a + b = 2k + 2ℓ = 2(k + ℓ),

and since k + ℓ is an integer, a + b is even.
        `,
        modelProof: `
Claim: The sum of two even integers is even.

Proof. Let a and b be even integers. Then a = 2k and b = 2ℓ for some integers
k and ℓ. Hence

  a + b = 2k + 2ℓ = 2(k + ℓ).

Because k + ℓ is an integer, a + b is 2 times an integer, so a + b is even. ∎
        `,
      },
      {
        id: "dp-2",
        title: "Sum of Two Odd Integers",
        difficulty: "core",
        topic: "Parity",
        prompt: `
Prove directly that the sum of two odd integers is even.
        `,
        hint: `
Write an odd integer as 2k + 1. Let the two odd integers be a = 2k + 1 and b = 2ℓ + 1.
        `,
        outline: `
1. Let a and b be odd integers.
2. Write a = 2k + 1 and b = 2ℓ + 1 for some integers k, ℓ.
3. Compute a + b and simplify.
4. Show the result is 2 times an integer.
        `,
        solution: `
Let a and b be odd. Then a = 2k + 1 and b = 2ℓ + 1 for some integers k, ℓ.
Then

  a + b = (2k + 1) + (2ℓ + 1) = 2k + 2ℓ + 2 = 2(k + ℓ + 1),

so a + b is even.
        `,
        modelProof: `
Claim: The sum of two odd integers is even.

Proof. Let a and b be odd integers. Then there exist integers k and ℓ such that
a = 2k + 1 and b = 2ℓ + 1. Then

  a + b = (2k + 1) + (2ℓ + 1) = 2k + 2ℓ + 2
        = 2(k + ℓ + 1).

Since k + ℓ + 1 is an integer, a + b is even. ∎
        `,
      },
      {
        id: "dp-3",
        title: "Transitivity of Divisibility",
        difficulty: "core",
        topic: "Divisibility",
        prompt: `
Prove: If a divides b and b divides c (for integers a, b, c), then a divides c.
        `,
        hint: `
Translate "a divides b" into an equation: b = ak for some integer k.
Do the same for b | c, then substitute.
        `,
        outline: `
1. Assume a | b and b | c.
2. From a | b, write b = ak for some integer k.
3. From b | c, write c = bℓ for some integer ℓ.
4. Substitute b = ak into c = bℓ to express c in terms of a.
5. Factor out a and conclude a | c.
        `,
        solution: `
Assume a | b and b | c. Then b = ak for some k ∈ ℤ, and c = bℓ for some ℓ ∈ ℤ.
Substituting gives

  c = bℓ = (ak)ℓ = a(kℓ),

so c is a times an integer, hence a | c.
        `,
        modelProof: `
Claim: If a, b, c are integers with a | b and b | c, then a | c.

Proof. We are given that a | b and b | c. By definition of divisibility,
there exists an integer k such that b = ak, and an integer ℓ such that c = bℓ.
Substituting b = ak into c = bℓ gives

  c = bℓ = (ak)ℓ = a(kℓ).

Since kℓ is an integer, c is a times an integer, so a | c. ∎
        `,
      },
      {
        id: "dp-4",
        title: "Inequality with Squares",
        difficulty: "challenge",
        topic: "Inequalities",
        prompt: `
Prove directly that for every real number x,

  x^2 + 1 ≥ 2x.

(Hint: rewrite the inequality so that something squared appears on one side.)
        `,
        hint: `
Bring all terms to one side and try to complete the square:

x^2 + 1 - 2x = x^2 - 2x + 1.
        `,
        outline: `
1. Start from x^2 + 1 ≥ 2x and rearrange to x^2 - 2x + 1 ≥ 0.
2. Notice x^2 - 2x + 1 = (x - 1)^2.
3. Use that (x - 1)^2 ≥ 0 for all real x.
4. Conclude x^2 + 1 ≥ 2x for all real x.
        `,
        solution: `
We have

  x^2 + 1 ≥ 2x
⇔ x^2 - 2x + 1 ≥ 0
⇔ (x - 1)^2 ≥ 0.

But (x - 1)^2 is a square of a real number, so it is always ≥ 0. Therefore
x^2 + 1 ≥ 2x for all real x.
        `,
        modelProof: `
For any real x,

  x^2 + 1 - 2x = x^2 - 2x + 1 = (x - 1)^2.

Since the square of a real number is always nonnegative, we have (x - 1)^2 ≥ 0
for all x. Therefore

  x^2 + 1 - 2x ≥ 0,

which is equivalent to x^2 + 1 ≥ 2x. Hence the inequality holds for all
real x. ∎
        `,
      },
    ],
  },
];
