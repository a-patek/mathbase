// data/practiceProblems.ts

export type PracticeProblem = {
  id: string;      // e.g. "DP-1"
  module: string;  // must match a lessons key, e.g. "direct-proofs"
  title: string;
  statement: string;
  solution?: string; // optional model solution
};


export const practiceProblems: PracticeProblem[] = [
  // ─────────────────────────────
  // MODULE: WHAT IS A PROOF?
  // slug: "what-is-a-proof"
  // ─────────────────────────────
  {
    id: "WP-1",
    module: "what-is-a-proof",
    title: "Examples vs. Proof",
    statement:
      "You suspect that the sum of two even integers is always even.\n\n" +
      "a) Explain the difference between giving a few numerical examples and giving a full proof.\n" +
      "b) Write a clear paragraph in your own words describing what a mathematical proof is trying to guarantee.",
  },
  {
    id: "WP-2",
    module: "what-is-a-proof",
    title: "Why 'Checked a Bunch of Cases' Isn’t a Proof",
    statement:
      "A student claims: \"I checked n = 1, 2, 3, 4, 5 and in each case n^2 + n is even, so it must always be even.\" \n\n" +
      "a) Explain why this is not a valid proof that n^2 + n is always even.\n" +
      "b) Give a short outline of how a legitimate proof of this statement could be structured.",
  },
  {
    id: "WP-3",
    module: "what-is-a-proof",
    title: "Turning Intuition into a Proof Outline",
    statement:
      "You believe the statement: \"If n is odd, then n^2 is odd.\" is true because odd numbers look like 1, 3, 5, 7, and their squares look odd.\n\n" +
      "Write a proof **outline** (not a full polished proof) that explains how you might prove this formally, using the algebraic definition of an odd integer.",
  },
  {
    id: "WP-4",
    module: "what-is-a-proof",
    title: "Identifying Hidden Assumptions",
    statement:
      "A friend says: \"The function f(x) = 1/x is continuous everywhere because small changes in x cause small changes in 1/x.\" \n\n" +
      "a) Explain why this argument is not a complete proof.\n" +
      "b) Identify at least one hidden assumption or missing detail that would need to be addressed in a rigorous proof.",
  },

  // ─────────────────────────────
  // MODULE: LOGIC & QUANTIFIERS
  // slug: "logic"
  // ─────────────────────────────
  {
  id: "LOG-1",
  module: "logic",
  title: "Implication as ¬P ∨ Q",
  statement:
    "Prove using truth tables or logical equivalences that (P → Q) is logically equivalent to (¬P ∨ Q).",
  solution: `
One way is with a truth table.

List all possibilities for the truth values of P and Q and compare the columns for (P → Q) and (¬P ∨ Q):

P   Q   P → Q   ¬P   ¬P ∨ Q
T   T     T     F       T
T   F     F     F       F
F   T     T     T       T
F   F     T     T       T

The column for (P → Q) and the column for (¬P ∨ Q) match in every row. Therefore, the two statements are logically equivalent.

Alternatively: by definition, P → Q is false only when P is true and Q is false. The disjunction ¬P ∨ Q is false exactly in that same case: ¬P is false and Q is false, so ¬P ∨ Q is false; in all other cases at least one of ¬P or Q is true. Thus P → Q and ¬P ∨ Q have identical truth conditions and are equivalent.
`,
},

 {
  id: "LOG-2",
  module: "logic",
  title: "Negating a Quantified Statement",
  statement:
    "Write the formal negation of the statement \"For all real numbers x, x^2 ≥ 0\" and then explain the negation in plain English.",
  solution: `
The original statement is:

∀x ∈ ℝ, x² ≥ 0.

The general rule is:
¬(∀x, P(x)) is equivalent to ∃x such that ¬P(x).

So the negation is:

∃x ∈ ℝ such that x² < 0.

In plain English:
"There exists a real number x whose square is negative."

So to negate "every real number has nonnegative square", we say "there is at least one real number whose square is negative."
`,
},
  {
    id: "LOG-3",
    module: "logic",
    title: "Contrapositive Equivalence",
    statement:
      "Prove that the statement (P → Q) is logically equivalent to its contrapositive (¬Q → ¬P), using either truth tables or step-by-step logical equivalences.",
  },
  {
    id: "LOG-4",
    module: "logic",
    title: "De Morgan’s Laws",
    statement:
      "Prove one of De Morgan’s laws:\n" +
      "a) ¬(P ∧ Q) is logically equivalent to (¬P ∨ ¬Q), or\n" +
      "b) ¬(P ∨ Q) is logically equivalent to (¬P ∧ ¬Q).\n\n" +
      "Use either truth tables or symbolic manipulation.",
  },
  {
    id: "LOG-5",
    module: "logic",
    title: "Order of Quantifiers",
    statement:
      "Consider the two statements:\n" +
      "(1) For every real number x, there exists a real number y such that x + y = 0.\n" +
      "(2) There exists a real number y such that for every real number x, x + y = 0.\n\n" +
      "a) Decide whether each statement is true or false.\n" +
      "b) Explain in detail why the order of quantifiers makes these two statements different.",
  },

  // ─────────────────────────────
  // MODULE: DIRECT PROOFS
  // slug: "direct-proofs"
  // ─────────────────────────────
  {
  id: "DP-1",
  module: "direct-proofs",
  title: "Even Squares Plus 6",
  statement:
    "Prove: If n is an even integer, then n^2 + 6 is even.",
  solution: `
Let n be an even integer. By definition of even, there exists an integer k such that n = 2k.

Then:
n² + 6 = (2k)² + 6
         = 4k² + 6
         = 2(2k² + 3).

Since k is an integer, 2k² + 3 is an integer, so n² + 6 is 2 times an integer. Therefore n² + 6 is even.
`,
},

{
  id: "DP-2",
  module: "direct-proofs",
  title: "Sum of Odd Squares",
  statement:
    "Prove: If a and b are odd integers, then a^2 + b^2 is even.",
  solution: `
Let a and b be odd integers. Then there exist integers m and n such that:

a = 2m + 1 and b = 2n + 1.

Compute a² and b²:

a² = (2m + 1)² = 4m² + 4m + 1,
b² = (2n + 1)² = 4n² + 4n + 1.

Add them:

a² + b² = (4m² + 4m + 1) + (4n² + 4n + 1)
        = 4m² + 4m + 4n² + 4n + 2
        = 2(2m² + 2m + 2n² + 2n + 1).

Since m and n are integers, 2m² + 2m + 2n² + 2n + 1 is an integer, so a² + b² is 2 times an integer. Therefore a² + b² is even.
`,
},

  {
    id: "DP-3",
    module: "direct-proofs",
    title: "Divisible by 12",
    statement:
      "Prove: If n is divisible by 12, then n is divisible by both 3 and 4.",
  },
  {
    id: "DP-4",
    module: "direct-proofs",
    title: "Sum of Multiples of 5",
    statement:
      "Prove: If m and n are integers that are both divisible by 5, then m + n is divisible by 5.",
  },
  {
    id: "DP-5",
    module: "direct-proofs",
    title: "Product of Even Integers",
    statement:
      "Prove: If m and n are even integers, then the product mn is divisible by 4.",
  },

  // ─────────────────────────────
  // MODULE: COUNTEREXAMPLES
  // slug: "counterexamples"
  // ─────────────────────────────
  {
  id: "CE-1",
  module: "counterexamples",
  title: "Counterexample to 'All Primes Are Odd'",
  statement:
    "Give a clear counterexample to the statement \"All prime numbers are odd\" and explain why it works.",
  solution: `
The proposed statement is: "All prime numbers are odd."

Consider the number 2. It is a prime number because its only positive divisors are 1 and 2. However, 2 is not odd; it is even.

Thus 2 is a counterexample: it is prime but not odd. This shows the universal statement "all prime numbers are odd" is false.
`,
},

  {
    id: "CE-2",
    module: "counterexamples",
    title: "False Prime Pattern",
    statement:
      "Consider the conjecture: \"Every number of the form n^2 + n + 17 is prime.\" \n" +
      "Find a specific integer n that makes this false and explain why your choice is a counterexample.",
  },
  {
    id: "CE-3",
    module: "counterexamples",
    title: "Composite but Not Divisible by 2, 3, or 5",
    statement:
      "Consider the incorrect statement: \"Every composite integer is divisible by 2, 3, or 5.\"\n\n" +
      "Find a counterexample and explain clearly why it shows the statement is false.",
  },
  {
    id: "CE-4",
    module: "counterexamples",
    title: "Square Root Misconception",
    statement:
      "A student claims: \"For all real numbers a and b with a, b ≥ 0, we have √(a + b) = √a + √b.\"\n\n" +
      "Find a counterexample to this statement and explain the flaw in the original claim.",
  },
  {
    id: "CE-5",
    module: "counterexamples",
    title: "Set Identity That Fails",
    statement:
      "Consider the incorrect set identity: (A ∩ B)^c = A^c ∩ B^c.\n\n" +
      "Find specific sets A and B for which this identity fails, and clearly justify why your example is a counterexample.",
  },

  // ─────────────────────────────
  // MODULE: INDIRECT PROOFS
  // slug: "indirect-proofs"
  // ─────────────────────────────
{
  id: "IP-1",
  module: "indirect-proofs",
  title: "n^2 Even ⇒ n Even",
  statement:
    "Prove: If n^2 is even, then n is even. You may use either a contrapositive proof or a proof by contradiction.",
  solution: `
We prove the contrapositive: "If n is odd, then n² is odd."

Assume n is odd. Then there exists an integer k such that n = 2k + 1.

Compute n²:
n² = (2k + 1)²
    = 4k² + 4k + 1
    = 2(2k² + 2k) + 1.

Since k is an integer, 2k² + 2k is an integer, so n² is of the form 2(⋯) + 1, which is odd.

Thus if n is odd, then n² is odd. This is the contrapositive of "If n² is even, then n is even," so the original statement is true.
`,
},

  {
    id: "IP-2",
    module: "indirect-proofs",
    title: "Irrationality of √2",
    statement:
      "Prove that √2 is irrational using a proof by contradiction. Clearly identify the assumption you make and the contradiction you derive.",
  },
  {
    id: "IP-3",
    module: "indirect-proofs",
    title: "Infinitely Many Primes",
    statement:
      "Prove by contradiction that there are infinitely many prime numbers. (Hint: Assume there are only finitely many and build a new number.)",
  },
  {
    id: "IP-4",
    module: "indirect-proofs",
    title: "Contrapositive on Parity",
    statement:
      "Prove the statement: \"If 3n + 2 is even, then n is even\" by proving its contrapositive instead.",
  },

  // ─────────────────────────────
  // MODULE: INDUCTION
  // slug: "induction"
  // ─────────────────────────────
{
  id: "IND-1",
  module: "induction",
  title: "Sum of First n Integers",
  statement:
    "Use mathematical induction to prove that 1 + 2 + 3 + ... + n = n(n + 1)/2 for all integers n ≥ 1.",
  solution: `
We prove by induction on n.

Base case (n = 1):
Left-hand side (LHS) = 1.
Right-hand side (RHS) = 1(1 + 1)/2 = 1.
So the formula holds for n = 1.

Induction step:
Assume the formula holds for some k ≥ 1, i.e.
1 + 2 + 3 + ... + k = k(k + 1)/2.   (induction hypothesis)

We must show it holds for k + 1:
1 + 2 + ... + k + (k + 1).

Using the hypothesis:
1 + 2 + ... + k + (k + 1)
= [k(k + 1)/2] + (k + 1)
= (k(k + 1) + 2(k + 1))/2
= (k + 1)(k + 2)/2.

But (k + 1)(k + 2)/2 is the same as plugging n = k + 1 into n(n + 1)/2. Therefore the formula also holds for k + 1.

By induction, the statement is true for all integers n ≥ 1.
`,
},

  {
    id: "IND-2",
    module: "induction",
    title: "Sum of First n Odd Integers",
    statement:
      "Prove by induction that 1 + 3 + 5 + ... + (2n − 1) = n^2 for all integers n ≥ 1.",
  },
  {
    id: "IND-3",
    module: "induction",
    title: "Inequality with Powers of 2",
    statement:
      "Use induction to prove that 2^n ≥ n + 1 for all integers n ≥ 0.",
  },
  {
    id: "IND-4",
    module: "induction",
    title: "Factorial Inequality",
    statement:
      "Prove by induction that n! ≥ 2^n for all integers n ≥ 4.",
  },
  {
    id: "IND-5",
    module: "induction",
    title: "A Simple Recurrence",
    statement:
      "Let a_1 = 2 and a_{n+1} = 3a_n for n ≥ 1. Prove by induction that a_n = 2·3^{n−1} for all n ≥ 1.",
  },

  // ─────────────────────────────
  // MODULE: SETS & FUNCTIONS
  // slug: "sets-functions"
  // ─────────────────────────────
{
  id: "SF-1",
  module: "sets-functions",
  title: "Union Distributes over Intersection",
  statement:
    "Prove that for any sets A, B, and C, we have:\n\nA ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).\n\nUse element-chasing: show mutual inclusion of both sides.",
  solution: `
We prove set equality by showing mutual inclusion.

(⊆) Let x ∈ A ∪ (B ∩ C). Then either x ∈ A, or x ∈ B ∩ C.

• If x ∈ A, then x ∈ A ∪ B and x ∈ A ∪ C, so x ∈ (A ∪ B) ∩ (A ∪ C).
• If x ∈ B ∩ C, then x ∈ B and x ∈ C. Thus x ∈ A ∪ B (because x ∈ B) and x ∈ A ∪ C (because x ∈ C). So again x ∈ (A ∪ B) ∩ (A ∪ C).

In both cases, x ∈ (A ∪ B) ∩ (A ∪ C). Hence
A ∪ (B ∩ C) ⊆ (A ∪ B) ∩ (A ∪ C).

(⊇) Now let x ∈ (A ∪ B) ∩ (A ∪ C). Then:
x ∈ A ∪ B and x ∈ A ∪ C.

So either:
• Case 1: x ∈ A. Then immediately x ∈ A ∪ (B ∩ C).
• Case 2: x ∉ A. Then from x ∈ A ∪ B we get x ∈ B, and from x ∈ A ∪ C we get x ∈ C. Thus x ∈ B ∩ C, so x ∈ A ∪ (B ∩ C).

Therefore (A ∪ B) ∩ (A ∪ C) ⊆ A ∪ (B ∩ C).

Since we have both inclusions, the sets are equal:
A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).
`,
},

  {
    id: "SF-2",
    module: "sets-functions",
    title: "Intersection Distributes over Union",
    statement:
      "Prove that for any sets A, B, and C, we have:\n\n" +
      "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
  },
  {
    id: "SF-3",
    module: "sets-functions",
    title: "Subset via Element Argument",
    statement:
      "Let A, B, and C be sets. Prove that A ∩ B ⊆ A and A ∩ B ⊆ B using element-wise arguments.",
  },
  {
    id: "SF-4",
    module: "sets-functions",
    title: "Injectivity of a Linear Function",
    statement:
      "Consider the function f: ℝ → ℝ defined by f(x) = 5x − 2.\n\n" +
      "a) Prove that f is injective.\n" +
      "b) Find an explicit formula for f^{-1}(y) and verify that it is indeed the inverse.",
  },
  {
    id: "SF-5",
    module: "sets-functions",
    title: "Surjectivity Onto a Restricted Codomain",
    statement:
      "Define f: ℤ → 2ℤ by f(n) = 2n, where 2ℤ is the set of even integers.\n\n" +
      "a) Prove that f is surjective onto 2ℤ.\n" +
      "b) Decide whether f is injective and justify your answer.",
  },
];
