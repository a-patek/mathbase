// data/proofCourse.ts

export type MCQ = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type CourseSession = {
  id: string;
  week: number;
  session: string;
  title: string;
  duration: string;
  lessonNotes: string[];
  workedExamples?: string[];
  practice: string[];
  answers?: string[];
  quiz?: string[];
  quizAnswers?: string[];
  mcqs: MCQ[];
};

export const proofCourse = {
  title: "Proof-Based Math for Beginners",
  weeks: 8,
  sessions: [
    // Week 1
    {
      id: "w1a",
      week: 1,
      session: "1A",
      title: "Mathematical statements and truth",
      duration: "45-75 min",
      lessonNotes: [
        "A statement is a sentence that is either true or false.",
        "Questions, commands, and open expressions are not statements.",
        "A counterexample disproves a universal statement.",
      ],
      workedExamples: [
        "\"2 + 2 = 4\" is a statement (true).",
        "\"x + 2 = 4\" is not a statement (depends on x).",
        "\"For all real x, x + 2 > x\" is a true statement.",
      ],
      practice: [
        "Classify each as statement or not. If statement, say true or false.",
        "1. 9 is prime",
        "2. What time is it",
        "3. For all integers n, n^2 >= n",
        "4. x^2 = 9",
        "5. There exists an integer n with n^2 = 2",
        "6. If it rains, the ground is wet",
        "7. Every even integer is divisible by 4",
        "8. 0 < 1",
      ],
      answers: [
        "1. Statement, false.",
        "2. Not a statement.",
        "3. Statement, true.",
        "4. Not a statement.",
        "5. Statement, false.",
        "6. Statement (conditional form).",
        "7. Statement, false (2 is a counterexample).",
        "8. Statement, true.",
      ],
      mcqs: [
        {
          question: "Which is a statement?",
          options: [
            "What time is it?",
            "x + 2 = 4",
            "For all real x, x + 2 > x",
            "Solve 2x = 6",
          ],
          answerIndex: 2,
          explanation: "It has a definite truth value (true) for all real x.",
        },
      ],
    },
    {
      id: "w1b",
      week: 1,
      session: "1B",
      title: "Quantifiers and translating English",
      duration: "45-75 min",
      lessonNotes: [
        "For all is written as 'forall' and there exists as 'exists'.",
        "The order of quantifiers matters: forall x exists y is not the same as exists y forall x.",
      ],
      workedExamples: [
        "Every integer has a successor: forall n in Z, exists m in Z such that m = n + 1.",
        "Some integer is even: exists n in Z such that n is even.",
      ],
      practice: [
        "Translate to symbols.",
        "1. Every real number has a square that is nonnegative.",
        "2. Some integer is divisible by 7.",
        "3. For every integer n, there exists an integer k with n = 2k or n = 2k + 1.",
        "4. There exists a real x such that for all real y, x <= y.",
      ],
      answers: [
        "1. forall x in R, x^2 >= 0",
        "2. exists n in Z, 7 | n",
        "3. forall n in Z, exists k in Z: (n = 2k) OR (n = 2k + 1)",
        "4. exists x in R, forall y in R: x <= y (false statement; no least real).",
      ],
      mcqs: [
        {
          question: "Which translation matches 'Every integer has a successor'?",
          options: [
            "exists n in Z, forall m in Z: m = n + 1",
            "forall n in Z, exists m in Z: m = n + 1",
            "exists m in Z, forall n in Z: m = n + 1",
            "forall m in Z, exists n in Z: n = m - 1",
          ],
          answerIndex: 1,
          explanation: "For each integer n, you can find an integer m = n + 1.",
        },
      ],
    },
    {
      id: "w1c",
      week: 1,
      session: "1C",
      title: "Negations",
      duration: "45-75 min",
      lessonNotes: [
        "Negation flips quantifiers: not (forall x P) equals exists x not P.",
        "Negation flips exists: not (exists x P) equals forall x not P.",
        "Negate 'and' to 'not P or not Q'; negate 'or' to 'not P and not Q'.",
      ],
      workedExamples: [
        "Negate 'For all integers n, n is even': 'There exists an integer n that is not even.'",
        "Negate 'There exists x such that x^2 = 2' (over integers): 'For all integers x, x^2 != 2.'",
      ],
      practice: [
        "Negate each carefully.",
        "1. For all real x, x^2 >= 1",
        "2. There exists an integer n such that n is prime and n is even",
        "3. For every student s, there exists a class c that s has taken",
        "4. There exists x in R such that for all y in R, x + y = y",
      ],
      answers: [
        "1. exists x in R with x^2 < 1",
        "2. forall n in Z, (n is not prime) OR (n is not even)",
        "3. exists student s such that forall classes c, s has not taken c",
        "4. forall x in R, exists y in R such that x + y != y",
      ],
      mcqs: [
        {
          question: "What is the negation of 'For all real x, x^2 >= 1'?",
          options: [
            "For all real x, x^2 < 1",
            "There exists real x with x^2 < 1",
            "There exists real x with x^2 >= 1",
            "For all real x, x^2 != 1",
          ],
          answerIndex: 1,
          explanation: "Negation flips forall to exists and negates the predicate.",
        },
      ],
    },
    {
      id: "w1d",
      week: 1,
      session: "1D",
      title: "First proofs and counterexamples",
      duration: "45-75 min",
      lessonNotes: [
        "To prove a universal statement, start with an arbitrary element.",
        "To disprove a universal statement, find one counterexample.",
      ],
      workedExamples: [
        "If n is even then n^2 is even (direct proof with n = 2k).",
        "Disprove 'for all integers n, n^2 > n' with n = 0.",
      ],
      practice: [
        "1. Prove: If n is odd, then n^2 is odd.",
        "2. Disprove: For all integers n, 2n + 1 is even.",
        "3. Prove: For all real numbers x, x^2 >= 0.",
      ],
      answers: [
        "1. Let n = 2k + 1, then n^2 = 4k^2 + 4k + 1 is odd.",
        "2. n = 0 gives 2n + 1 = 1, which is not even.",
        "3. If x >= 0 then x^2 >= 0; if x < 0 then x^2 = (-x)^2 >= 0.",
      ],
      quiz: [
        "Translate: 'Every integer has an additive inverse.'",
        "Negate: 'There exists a real x such that x^2 < 0.'",
        "Give a counterexample to: 'All primes are odd.'",
      ],
      quizAnswers: [
        "forall n in Z, exists m in Z: n + m = 0",
        "forall x in R, x^2 >= 0",
        "2",
      ],
      mcqs: [
        {
          question: "Which is a valid counterexample to 'For all integers n, n^2 > n'?",
          options: ["n = 2", "n = 1", "n = 0", "n = -2"],
          answerIndex: 2,
          explanation: "At n = 0, the statement becomes 0 > 0, which is false.",
        },
      ],
    },

    // Week 2
    {
      id: "w2a",
      week: 2,
      session: "2A",
      title: "Implications and contrapositive",
      duration: "45-75 min",
      lessonNotes: [
        "P -> Q means if P then Q.",
        "Contrapositive is not Q -> not P and is logically equivalent to P -> Q.",
        "Converse is Q -> P and is not equivalent in general.",
      ],
      workedExamples: [
        "If n^2 is even then n is even (proved by contrapositive: odd n gives odd n^2).",
      ],
      practice: [
        "1. Write the contrapositive: If a number is divisible by 4, then it is even.",
        "2. Is the converse true? If a number is even then divisible by 4?",
        "3. Prove: If n is divisible by 6, then n is divisible by 3.",
      ],
      answers: [
        "1. If a number is not even, then it is not divisible by 4.",
        "2. False; counterexample: 2 is even but not divisible by 4.",
        "3. n = 6k gives n = 3(2k).",
      ],
      mcqs: [
        {
          question: "What is the contrapositive of 'If a number is divisible by 4, then it is even'?",
          options: [
            "If a number is even, then it is divisible by 4",
            "If a number is not even, then it is not divisible by 4",
            "If a number is divisible by 4, then it is not odd",
            "If a number is odd, then it is divisible by 4",
          ],
          answerIndex: 1,
          explanation: "Contrapositive swaps and negates: not Q -> not P.",
        },
      ],
    },
    {
      id: "w2b",
      week: 2,
      session: "2B",
      title: "If and only if (iff)",
      duration: "45-75 min",
      lessonNotes: [
        "P iff Q means P -> Q and Q -> P.",
        "An iff proof must show both directions.",
      ],
      workedExamples: [
        "An integer n is even iff n^2 is even (prove both directions).",
      ],
      practice: [
        "1. Prove: n is odd iff n^2 is odd.",
        "2. Prove: n is divisible by 5 iff its last digit is 0 or 5 (or prove the easy direction).",
      ],
      answers: [
        "1. Mirror the even proof for both directions.",
        "2. Use n = 10k + d and analyze d in {0,...,9}.",
      ],
      mcqs: [
        {
          question: "To prove P iff Q, what must you show?",
          options: [
            "P -> Q only",
            "Q -> P only",
            "Both P -> Q and Q -> P",
            "Neither direction is needed",
          ],
          answerIndex: 2,
          explanation: "Iff means both implications are true.",
        },
      ],
    },
    {
      id: "w2c",
      week: 2,
      session: "2C",
      title: "Proof by cases",
      duration: "45-75 min",
      lessonNotes: [
        "Split the problem into exhaustive cases.",
        "Common case splits: even/odd, >= 0 / < 0, rational/irrational.",
      ],
      workedExamples: [
        "For every integer n, n(n+1) is even (case on n even or odd).",
      ],
      practice: [
        "1. Prove: For every integer n, n^2 and n have the same parity.",
        "2. Prove: |x| >= 0 for all real x (cases x >= 0 and x < 0).",
      ],
      mcqs: [
        {
          question: "Which case split is most natural to prove |x| >= 0 for all real x?",
          options: [
            "x is integer / x is not integer",
            "x >= 0 / x < 0",
            "x even / x odd",
            "x rational / x irrational",
          ],
          answerIndex: 1,
          explanation: "The definition of absolute value uses x >= 0 and x < 0.",
        },
      ],
    },
    {
      id: "w2d",
      week: 2,
      session: "2D",
      title: "Proof by contradiction",
      duration: "45-75 min",
      lessonNotes: [
        "Assume the opposite of what you want to prove, then derive an impossibility.",
        "Common when proving non-existence or irrationality.",
      ],
      workedExamples: [
        "There is no smallest positive real number (assume s, then s/2 is smaller).",
      ],
      practice: [
        "1. Prove: sqrt(2) is irrational.",
        "2. Prove: There is no integer n such that n^2 = 2.",
      ],
      answers: [
        "1. Assume sqrt(2) = a/b in lowest terms; show a and b both even, contradiction.",
        "2. Use parity: if n^2 is even then n is even; leads to infinite descent.",
      ],
      quiz: [
        "Give the contrapositive of: If x is a multiple of 8, then x is divisible by 4.",
        "Prove or disprove: If n^2 is divisible by 3 then n is divisible by 3.",
      ],
      quizAnswers: [
        "If x is not divisible by 4, then x is not a multiple of 8.",
        "True; prove by contrapositive or using residues mod 3.",
      ],
      mcqs: [
        {
          question: "Which proof method starts by assuming the negation and reaching a contradiction?",
          options: ["Direct proof", "Contrapositive", "Proof by contradiction", "Casework"],
          answerIndex: 2,
          explanation: "Contradiction assumes the opposite and derives impossibility.",
        },
      ],
    },

    // Week 3
    {
      id: "w3a",
      week: 3,
      session: "3A",
      title: "Set notation and subset proofs",
      duration: "45-75 min",
      lessonNotes: [
        "A subset proof: let x be arbitrary in A and show x is in B.",
        "A subseteq B means every element of A is in B.",
      ],
      workedExamples: [
        "A intersect B subseteq A: if x in A intersect B, then x in A.",
      ],
      practice: [
        "1. Prove: A intersect B subseteq B",
        "2. Prove: A subseteq A union B",
        "3. Prove: If A subseteq B and B subseteq C, then A subseteq C",
      ],
      mcqs: [
        {
          question: "To prove A subseteq B, you should start with:",
          options: [
            "Let x be arbitrary in A",
            "Let x be arbitrary in B",
            "Assume A and B are disjoint",
            "Assume B subseteq A",
          ],
          answerIndex: 0,
          explanation: "Subset proofs begin by taking x in A and showing x in B.",
        },
      ],
    },
    {
      id: "w3b",
      week: 3,
      session: "3B",
      title: "Set identities with element-chasing",
      duration: "45-75 min",
      lessonNotes: [
        "To prove set equality, show both inclusions.",
        "Use element-chasing: let x be arbitrary and track membership.",
      ],
      practice: [
        "1. Prove: A intersect (B union C) = (A intersect B) union (A intersect C)",
        "2. Prove: A \\ (B union C) = (A \\ B) intersect (A \\ C)",
      ],
      answers: [
        "Show each side is a subset of the other using element-chasing.",
      ],
      mcqs: [
        {
          question: "To prove A intersect (B union C) = (A intersect B) union (A intersect C), you must:",
          options: [
            "Check a few examples",
            "Prove left subseteq right and right subseteq left",
            "Assume A = B",
            "Use induction",
          ],
          answerIndex: 1,
          explanation: "Set equality requires both inclusions.",
        },
      ],
    },
    {
      id: "w3c",
      week: 3,
      session: "3C",
      title: "Functions: injective, surjective, bijective",
      duration: "45-75 min",
      lessonNotes: [
        "Injective: f(a) = f(b) implies a = b.",
        "Surjective: every y in codomain has some x with f(x) = y.",
        "Bijective means both injective and surjective.",
      ],
      workedExamples: [
        "f(x) = 2x + 1 from Z to Z is injective.",
      ],
      practice: [
        "1. Show f(x) = x^2 from R to R is not injective.",
        "2. Show f(x) = x^3 from R to R is bijective.",
        "3. Determine if f(x) = 2x from Z to Z is surjective.",
      ],
      answers: [
        "1. f(1) = f(-1).",
        "2. Injective: a^3 = b^3 implies a = b; surjective: x = cbrt(y).",
        "3. Not surjective: odd integers are not hit.",
      ],
      mcqs: [
        {
          question: "The function f(x) = x^2 from R to R is:",
          options: ["Injective", "Surjective", "Bijective", "Neither"],
          answerIndex: 3,
          explanation: "It is not injective (1 and -1) and not surjective (no negatives).",
        },
      ],
    },
    {
      id: "w3d",
      week: 3,
      session: "3D",
      title: "Composition and inverses",
      duration: "45-75 min",
      lessonNotes: [
        "An inverse exists iff the function is bijective.",
        "Composition is (f o g)(x) = f(g(x)).",
      ],
      practice: [
        "1. If f and g are injective, prove f o g is injective.",
        "2. If f and g are surjective, prove f o g is surjective.",
        "3. Give an example where f o g is bijective but f is not bijective (codomains differ).",
      ],
      answers: [
        "1. f(g(a)) = f(g(b)) -> g(a) = g(b) -> a = b.",
        "2. Use surjectivity of f and g to hit any y.",
      ],
      quiz: [
        "Prove: A subseteq B implies A union C subseteq B union C.",
        "Decide if f(x) = x^2 from R to [0, infinity) is surjective.",
      ],
      quizAnswers: [
        "Use subset proof: take x in A union C and show x in B union C.",
        "Yes, it is surjective onto [0, infinity).",
      ],
      mcqs: [
        {
          question: "If f and g are injective, then f o g is:",
          options: ["Injective", "Surjective", "Both", "Neither"],
          answerIndex: 0,
          explanation: "Composition of injective functions is injective.",
        },
      ],
    },

    // Week 4
    {
      id: "w4a",
      week: 4,
      session: "4A",
      title: "Divisibility definitions",
      duration: "45-75 min",
      lessonNotes: [
        "a | b means b = ak for some integer k.",
        "Use the definition early in divisibility proofs.",
      ],
      workedExamples: [
        "If a | b and a | c then a | (b + c): b = ak, c = al, so b + c = a(k + l).",
      ],
      practice: [
        "1. If a | b then a | bc for any integer c.",
        "2. If a | b and b | c then a | c.",
        "3. If a | b and a | c then a | (mb + nc) for integers m, n.",
      ],
      mcqs: [
        {
          question: "The statement a | b means:",
          options: [
            "a = bk for some integer k",
            "b = ak for some integer k",
            "a and b are both prime",
            "b divides a",
          ],
          answerIndex: 1,
          explanation: "By definition, b = ak for some integer k.",
        },
      ],
    },
    {
      id: "w4b",
      week: 4,
      session: "4B",
      title: "Primes and gcd basics",
      duration: "45-75 min",
      lessonNotes: [
        "Prime p has only positive divisors 1 and p.",
        "Euclid's Lemma: if p is prime and p | ab then p | a or p | b.",
      ],
      practice: [
        "1. Prove: If p is prime and p | a^2 then p | a.",
        "2. Prove: If gcd(a,b) = 1 and a | bc then a | c.",
      ],
      answers: [
        "1. Apply Euclid's Lemma to p | a*a.",
        "2. Use Bezout or modular reasoning.",
      ],
      mcqs: [
        {
          question: "Euclid's Lemma says: if p is prime and p | ab, then:",
          options: [
            "p | a and p | b",
            "p | a or p | b",
            "a | p",
            "b | p",
          ],
          answerIndex: 1,
          explanation: "That is the defining property of primes in products.",
        },
      ],
    },
    {
      id: "w4c",
      week: 4,
      session: "4C",
      title: "Modular arithmetic",
      duration: "45-75 min",
      lessonNotes: [
        "a == b (mod m) means m | (a - b).",
        "You can add, subtract, and multiply congruences.",
      ],
      practice: [
        "1. Show: if a == b (mod m) then a + c == b + c (mod m).",
        "2. Compute: 17 mod 5 and 100 mod 7.",
        "3. Prove: if n is odd then n == 1 (mod 2).",
      ],
      mcqs: [
        {
          question: "a == b (mod m) means:",
          options: [
            "a = b",
            "m divides (a - b)",
            "a divides b",
            "b divides a",
          ],
          answerIndex: 1,
          explanation: "Congruence means a - b is a multiple of m.",
        },
      ],
    },
    {
      id: "w4d",
      week: 4,
      session: "4D",
      title: "Classic modular proofs",
      duration: "45-75 min",
      lessonNotes: [
        "Use parity or residue cases to control possibilities.",
      ],
      practice: [
        "1. Prove: n divisible by 3 iff sum of digits divisible by 3 (outline ok).",
        "2. Prove: For any integer n, n^2 == 0 or 1 (mod 4).",
        "3. Prove: There is no integer n such that n^2 == 2 (mod 4).",
      ],
      answers: [
        "2. Case n even or odd.",
        "3. From (2), only 0 or 1 are possible.",
      ],
      quiz: [
        "Prove: If a == b (mod m) then a^2 == b^2 (mod m).",
        "Evaluate: 2^10 mod 7.",
      ],
      quizAnswers: [
        "Use a^2 - b^2 = (a - b)(a + b).",
        "2^3 = 8 == 1, so 2^9 == 1 and 2^10 == 2.",
      ],
      mcqs: [
        {
          question: "For any integer n, n^2 mod 4 can be:",
          options: ["0 only", "1 only", "0 or 1", "0, 1, or 2"],
          answerIndex: 2,
          explanation: "Even gives 0, odd gives 1.",
        },
      ],
    },

    // Week 5
    {
      id: "w5a",
      week: 5,
      session: "5A",
      title: "Induction structure",
      duration: "45-75 min",
      lessonNotes: [
        "Induction has a base case, hypothesis, and inductive step.",
        "In the step, assume the claim for n = k and prove it for n = k + 1.",
      ],
      workedExamples: [
        "Sum 1 + 2 + ... + n = n(n + 1)/2 for n >= 1.",
      ],
      practice: [
        "1. Prove: 1 + 3 + 5 + ... + (2n - 1) = n^2.",
        "2. Prove: 2^n >= n + 1 for n >= 0.",
      ],
      mcqs: [
        {
          question: "In the inductive step, you must show:",
          options: [
            "The statement holds for n = 0",
            "If it holds for n = k, then it holds for n = k + 1",
            "If it holds for n = k + 1, then it holds for n = k",
            "The statement is true for all n",
          ],
          answerIndex: 1,
          explanation: "That is the heart of induction.",
        },
      ],
    },
    {
      id: "w5b",
      week: 5,
      session: "5B",
      title: "Induction with divisibility",
      duration: "45-75 min",
      lessonNotes: [
        "Use algebra to pull out the divisibility factor in the inductive step.",
      ],
      practice: [
        "1. Prove: 7^n - 1 is divisible by 6 for n >= 1.",
        "2. Prove: 3 divides (n^3 - n) for all integers n.",
      ],
      answers: [
        "1. 7^(k+1) - 1 = 7(7^k - 1) + 6.",
        "2. Factor n(n - 1)(n + 1).",
      ],
      mcqs: [
        {
          question: "A good inductive step for 7^n - 1 divisible by 6 starts with:",
          options: [
            "7^(k+1) - 1 = 7(7^k - 1) + 6",
            "7^(k+1) - 1 = 7^k - 1",
            "7^(k+1) - 1 = 6(7^k)",
            "7^(k+1) - 1 = 6k + 1",
          ],
          answerIndex: 0,
          explanation: "This splits into a multiple of 6 plus 6.",
        },
      ],
    },
    {
      id: "w5c",
      week: 5,
      session: "5C",
      title: "Strong induction",
      duration: "45-75 min",
      lessonNotes: [
        "Strong induction assumes the statement for all values up to k.",
        "Use it for problems that depend on multiple smaller cases.",
      ],
      practice: [
        "1. Prove: Every integer n >= 2 can be written as a product of primes.",
        "2. Prove: Every amount of postage >= 12 can be made with 4 and 5 cent stamps.",
      ],
      mcqs: [
        {
          question: "In strong induction, the hypothesis assumes:",
          options: [
            "Only the case n = k",
            "All cases from 1 up to k",
            "Only even cases",
            "Only the base case",
          ],
          answerIndex: 1,
          explanation: "Strong induction uses all previous cases.",
        },
      ],
    },
    {
      id: "w5d",
      week: 5,
      session: "5D",
      title: "Induction pitfalls and polishing",
      duration: "45-75 min",
      lessonNotes: [
        "Common errors: forgetting the base case, misusing the hypothesis, or proving only for k.",
        "Rewrite one induction proof in clean final form.",
      ],
      practice: ["Rewrite one induction proof you wrote this week."],
      quiz: ["Induction: Prove 1 + 2 + ... + n <= n^2 for n >= 1."],
      quizAnswers: ["Use induction; check base n = 1, then add k + 1."],
      mcqs: [
        {
          question: "Which is a common induction mistake?",
          options: [
            "Proving the base case",
            "Using the inductive hypothesis correctly",
            "Forgetting the base case",
            "Checking k + 1",
          ],
          answerIndex: 2,
          explanation: "Skipping the base case breaks the logic.",
        },
      ],
    },

    // Week 6
    {
      id: "w6a",
      week: 6,
      session: "6A",
      title: "Counting basics",
      duration: "45-75 min",
      lessonNotes: [
        "Product rule counts independent choices by multiplying.",
        "Sum rule counts disjoint choices by adding.",
      ],
      practice: [
        "1. How many 5-letter strings from {A,B,C} (repetition allowed)?",
        "2. How many 5-letter strings with no repetition from {A,B,C,D,E,F}?",
        "3. Prove: number of subsets of an n-element set is 2^n.",
      ],
      mcqs: [
        {
          question: "How many 5-letter strings from {A,B,C} with repetition allowed?",
          options: ["15", "120", "243", "3125"],
          answerIndex: 2,
          explanation: "3^5 = 243.",
        },
      ],
    },
    {
      id: "w6b",
      week: 6,
      session: "6B",
      title: "Combinations and binomial coefficients",
      duration: "45-75 min",
      lessonNotes: [
        "C(n,k) counts k-subsets of an n-element set.",
        "Pascal identity: C(n,k) = C(n-1,k) + C(n-1,k-1).",
      ],
      practice: [
        "1. Prove Pascal identity using counting.",
        "2. Prove: C(n,k) = C(n,n-k).",
        "3. Compute C(10,3).",
      ],
      mcqs: [
        {
          question: "C(n,k) counts:",
          options: [
            "Ordered k-tuples",
            "k-subsets of an n-set",
            "n-subsets of a k-set",
            "Permutations of n items",
          ],
          answerIndex: 1,
          explanation: "Combinations count unordered k-subsets.",
        },
      ],
    },
    {
      id: "w6c",
      week: 6,
      session: "6C",
      title: "Pigeonhole principle",
      duration: "45-75 min",
      lessonNotes: [
        "If more than n objects go into n boxes, some box has at least two.",
      ],
      practice: [
        "1. Among 13 people, at least two share a birth month.",
        "2. In any set of n + 1 integers, two have the same remainder mod n.",
        "3. Any 6 people include 3 mutual acquaintances or 3 mutual strangers (optional).",
      ],
      mcqs: [
        {
          question: "'Among 13 people, at least two share a birth month' uses:",
          options: ["Induction", "Pigeonhole principle", "Contradiction", "Casework"],
          answerIndex: 1,
          explanation: "13 people into 12 months forces a repeat.",
        },
      ],
    },
    {
      id: "w6d",
      week: 6,
      session: "6D",
      title: "Proofs by bijection",
      duration: "45-75 min",
      lessonNotes: [
        "A bijection shows two sets have the same size.",
      ],
      practice: [
        "1. Give a bijection proof of C(n,k) = C(n,n-k).",
        "2. Prove: number of odd-sized subsets equals number of even-sized subsets (n >= 1).",
      ],
      answers: [
        "Pair each subset S with its symmetric difference with a fixed element.",
      ],
      quiz: [
        "Use pigeonhole: show among any 5 integers, two differ by a multiple of 4.",
      ],
      quizAnswers: ["Two integers have the same remainder mod 4."],
      mcqs: [
        {
          question: "A bijection is used to prove:",
          options: [
            "Two sets have the same size",
            "A statement is false",
            "A sequence is increasing",
            "A number is prime",
          ],
          answerIndex: 0,
          explanation: "Bijections match elements one-to-one.",
        },
      ],
    },

    // Week 7
    {
      id: "w7a",
      week: 7,
      session: "7A",
      title: "Relations",
      duration: "45-75 min",
      lessonNotes: [
        "A relation R on A is a subset of A x A.",
        "Properties: reflexive, symmetric, transitive.",
      ],
      practice: [
        "On integers, define a R b if a - b is even. Prove R is reflexive.",
        "Prove R is symmetric.",
        "Prove R is transitive.",
      ],
      mcqs: [
        {
          question: "For a R b defined by a - b even, which property follows from 'if a - b is even then b - a is even'?",
          options: ["Reflexive", "Symmetric", "Transitive", "Antisymmetric"],
          answerIndex: 1,
          explanation: "That statement is exactly symmetry.",
        },
      ],
    },
    {
      id: "w7b",
      week: 7,
      session: "7B",
      title: "Equivalence relations and classes",
      duration: "45-75 min",
      lessonNotes: [
        "Equivalence relations are reflexive, symmetric, and transitive.",
        "They partition a set into equivalence classes.",
      ],
      practice: [
        "1. Describe the equivalence class of 3 under 'same parity'.",
        "2. Show congruence mod n is an equivalence relation.",
      ],
      mcqs: [
        {
          question: "The equivalence class of 3 under 'same parity' is:",
          options: [
            "All even integers",
            "All odd integers",
            "All multiples of 3",
            "All integers",
          ],
          answerIndex: 1,
          explanation: "3 is odd, so its class is all odd integers.",
        },
      ],
    },
    {
      id: "w7c",
      week: 7,
      session: "7C",
      title: "Partitions",
      duration: "45-75 min",
      lessonNotes: [
        "Equivalence classes are either disjoint or identical.",
        "The union of all equivalence classes is the whole set.",
      ],
      practice: [
        "1. Prove equivalence classes are either disjoint or identical.",
        "2. Prove union of all classes is the whole set.",
      ],
      mcqs: [
        {
          question: "Two equivalence classes are:",
          options: [
            "Always equal",
            "Always disjoint",
            "Either disjoint or identical",
            "Always overlapping",
          ],
          answerIndex: 2,
          explanation: "If they share one element, they are the same class.",
        },
      ],
    },
    {
      id: "w7d",
      week: 7,
      session: "7D",
      title: "Application mini-proof set",
      duration: "45-75 min",
      lessonNotes: [
        "Pick any 3 of the listed mini-proofs and write full proofs.",
      ],
      practice: [
        "1. If n == m (mod 5) then n^2 == m^2 (mod 5).",
        "2. If gcd(a,b) = 1 and a | b then a = 1 or a = -1.",
        "3. n(n+1)(n+2) divisible by 3.",
        "4. If f is bijective, then f has an inverse function.",
      ],
      quiz: [
        "Show 'same remainder mod 4' is an equivalence relation, and list the 4 classes.",
      ],
      quizAnswers: [
        "Classes: [0], [1], [2], [3] mod 4 (integers with those remainders).",
      ],
      mcqs: [
        {
          question: "If f is bijective, then:",
          options: [
            "f has an inverse function",
            "f is not injective",
            "f is not surjective",
            "f has no inverse",
          ],
          answerIndex: 0,
          explanation: "Bijective means invertible.",
        },
      ],
    },

    // Week 8
    {
      id: "w8a",
      week: 8,
      session: "8A",
      title: "Proof style and revision checklist",
      duration: "45-75 min",
      lessonNotes: [
        "Checklist: use definitions early, check quantifiers, prove both directions for iff.",
        "Justify steps and end with a clear conclusion.",
      ],
      practice: ["Revise two older proofs using the checklist."],
      mcqs: [
        {
          question: "Which item belongs on the proof revision checklist?",
          options: [
            "Avoid definitions",
            "Leave out the conclusion",
            "Use definitions early",
            "Never check quantifiers",
          ],
          answerIndex: 2,
          explanation: "Definitions and clear structure are essential.",
        },
      ],
    },
    {
      id: "w8b",
      week: 8,
      session: "8B",
      title: "Mixed proof exam (practice)",
      duration: "45-75 min",
      lessonNotes: [
        "Do 4 of 6 mixed problems combining all techniques.",
      ],
      practice: [
        "1. If n is odd then n^2 == 1 (mod 8) is false; fix it.",
        "2. Prove: A \\ (B intersect C) = (A \\ B) union (A \\ C).",
        "3. Induction: 1^3 + 2^3 + ... + n^3 = (n(n+1)/2)^2.",
        "4. Prove Euclid's Lemma (outline ok).",
        "5. If f and g are bijections then f o g is a bijection.",
        "6. Pigeonhole: among any 10 integers, two have the same last digit.",
      ],
      mcqs: [
        {
          question: "Which identity is correct?",
          options: [
            "A \\ (B intersect C) = (A \\ B) intersect (A \\ C)",
            "A \\ (B intersect C) = (A \\ B) union (A \\ C)",
            "A \\ (B intersect C) = (A intersect B) union C",
            "A \\ (B intersect C) = A",
          ],
          answerIndex: 1,
          explanation: "This is the De Morgan style identity for set difference.",
        },
      ],
    },
    {
      id: "w8c",
      week: 8,
      session: "8C",
      title: "Final portfolio assembly",
      duration: "45-75 min",
      lessonNotes: [
        "Pick 10 proofs and rewrite cleanly in final form.",
      ],
      practice: [
        "Core: even/odd proofs, set identities, bijection, induction, modular proofs.",
        "Stretch: sqrt(2) irrational, prime factorization, Pascal identity, odd/even subsets.",
      ],
      mcqs: [
        {
          question: "How many polished proofs are required in the final portfolio?",
          options: ["6", "8", "10", "12"],
          answerIndex: 2,
          explanation: "The portfolio requires 10 proofs.",
        },
      ],
    },
    {
      id: "w8d",
      week: 8,
      session: "8D",
      title: "Final assessment",
      duration: "45-75 min",
      lessonNotes: [
        "Write 2 proofs from scratch and self-grade with the rubric.",
        "Rubric: setup and definitions (2), flow (4), correctness (3), clarity (1).",
      ],
      practice: [
        "1. Prove: For all integers n, n^3 - n is divisible by 3.",
        "2. Prove: If A subseteq B then A \\ C subseteq B \\ C.",
      ],
      mcqs: [
        {
          question: "A standard factorization for n^3 - n is:",
          options: [
            "n(n - 1)(n + 1)",
            "n(n + 1)",
            "n^2 - 1",
            "(n - 1)^3",
          ],
          answerIndex: 0,
          explanation: "n^3 - n = n(n - 1)(n + 1).",
        },
      ],
    },
  ] as CourseSession[],
};
