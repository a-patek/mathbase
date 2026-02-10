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
        "A mathematical statement is a sentence that has a definite truth value: it is either true or false. \"2 + 2 = 4\" is a statement, and \"x + 2 = 4\" is not a statement by itself because it depends on what x is. Math cares a lot about being precise about what is being claimed, so we separate statements from expressions, questions, and commands. Many statements come with conditions like \"if...\" or with hidden assumptions like \"let x be a real number.\" When you read a sentence in math, your first job is to ask: does it claim something that can be checked as true or false given the rules of the system?",
        "A key idea is the difference between proving and disproving. A universal claim like \"all integers have property P\" is disproved by finding one counterexample, a single integer that fails the property. But proving a universal claim is harder: you must give a reasoning chain that works for every allowed input, not just examples. This is why proofs rely on definitions and algebraic steps rather than checking cases randomly. Beginners often mistake \"I tested it a few times\" for proof. Testing builds intuition, but a proof is what guarantees the claim for all cases.",
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
        "Quantifiers tell you the scope of a claim. \"For all\" (written forall) means a property holds for every element in a specified set, like \"for all integers n.\" \"There exists\" (written exists) means at least one element has the property, like \"there exists an integer n such that...\" The set matters: \"there exists a real x with x^2 = 2\" is true, but \"there exists an integer x with x^2 = 2\" is false. When translating English into math, identify (1) the set you are talking about, (2) whether the claim is for all or there exists, and (3) the exact property being asserted.",
        "The order of quantifiers can completely change meaning. Compare \"for every x, there exists a y\" (forall x exists y) with \"there exists a y such that for every x\" (exists y forall x). Example: \"For every real x, there exists a real y with y > x\" is true, but \"There exists a real y such that for every real x, y > x\" is false (no single number is bigger than every real number). Good proof writing starts with correctly expressing claims, because if you misunderstand the quantifiers, you can prove the wrong thing perfectly.",
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
        "Negation is how you correctly express \"the opposite\" of a statement, and it is essential for contradiction proofs and for spotting counterexamples. The most important rule is that negation flips quantifiers: the negation of \"for all x, P(x)\" is \"there exists an x such that not P(x).\" Symbolically, not (forall x P(x)) is equivalent to exists x not P(x). Similarly, not (exists x P(x)) is equivalent to forall x not P(x). This matches common sense: to deny \"everyone passed,\" you only need \"someone failed,\" and to deny \"someone passed,\" you need \"no one passed.\"",
        "You also need De Morgan's laws for combining statements. The negation of \"P and Q\" is \"not P or not Q,\" and the negation of \"P or Q\" is \"not P and not Q.\" Beginners often negate incorrectly by keeping the same connector. Finally, be careful with inequalities: the negation of \"x >= 3\" is \"x < 3,\" and the negation of \"x > 3\" is \"x <= 3.\" Correct negations matter because they tell you exactly what must be shown to disprove a claim or what assumption you take on when proving by contradiction.",
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
        "Most beginner proofs follow a predictable structure: start with an arbitrary object, rewrite assumptions using definitions, then manipulate until you reach the conclusion. For example, to prove \"if n is even then n^2 is even,\" you begin by letting n be even, which by definition means n = 2k for some integer k. That definition is powerful because it turns a word (\"even\") into algebra you can use. Once you rewrite in definitional form, the proof often becomes straightforward algebra: n^2 = (2k)^2 = 4k^2 = 2(2k^2), which matches the definition of even again.",
        "Disproving is different: to refute a \"for all\" claim, you only need one counterexample, and the best counterexamples are simple and decisive. If someone claims \"all primes are odd,\" the number 2 instantly kills it. If someone claims \"for all integers n, n^2 > n,\" then n = 0 or n = 1 refutes it. Learning when to prove and when to counterexample is a core skill: your first step should always be identifying whether a statement is universal (needs proof, vulnerable to counterexample) or existential (needs an example or construction).",
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
        "An implication has the form P -> Q, read \"if P then Q.\" P is the hypothesis and Q is the conclusion. The most common beginner mistake is confusing an implication with its converse. \"If it's a square, then it's a rectangle\" is true, but \"if it's a rectangle, then it's a square\" is false. In proofs, you should treat an implication as a promise: you are allowed to assume P, and your job is to logically derive Q. Also note that P -> Q is considered true whenever P is false, which is why we focus on situations where P actually holds.",
        "A key technique is proving an implication by proving its contrapositive because the contrapositive is logically equivalent and often easier. The contrapositive of P -> Q is not Q -> not P. Example: proving \"if n^2 is even then n is even\" is tricky directly, but the contrapositive \"if n is odd then n^2 is odd\" is straightforward using n = 2k + 1. In practice, when the conclusion is a \"simple\" property (like evenness) and the hypothesis is \"complicated\" (like n^2 is even), contrapositive is often the cleanest route.",
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
        "A statement of the form P iff Q (P <-> Q) means two implications at once: P -> Q and Q -> P. This is why \"iff\" proofs always have two directions, usually labeled \"(->)\" and \"(<-)\" or \"(1)\" and \"(2).\" The mindset is: you are proving equivalence, so you must show each condition guarantees the other. If you only prove one direction, you have not proved \"iff,\" you have proved only a one-way implication.",
        "Good \"iff\" proofs lean heavily on definitions and known lemmas. For example, \"n is even iff n^2 is even\" is proven by two short pieces: (->) even implies square even by substituting n = 2k, and (<-) square even implies even by a contrapositive or a separate lemma. Many math definitions are iff statements, like \"n is odd iff n = 2k + 1 for some integer k.\" Treating \"iff\" properly also prevents logical errors in algebraic manipulation, where people assume they can reverse steps that are not reversible.",
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
        "Proof by cases is used when the universe naturally splits into a small number of exhaustive and non-overlapping possibilities. You prove the desired conclusion separately in each case, and because every object falls into one of the cases, the conclusion holds universally. Typical splits include: integer is even or odd, real number is >= 0 or < 0, and a set element is in A or not in A. The crucial requirement is exhaustiveness. If your cases do not cover every possibility, the proof is incomplete.",
        "A classic example is proving that n(n+1) is even for every integer n. The cases are: n is even, so the product is even, or n is odd, so n+1 is even, so the product is even. Case proofs are especially common when working with parity and modular arithmetic, because \"mod m\" arguments often reduce to checking a small set of residues. The main writing skill here is clarity: state the cases explicitly, finish each case cleanly, and then conclude that since the cases cover all possibilities, the claim is proven.",
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
        "Proof by contradiction is used when it is hard to build the object directly or when the statement claims something cannot exist. The structure is: assume the negation of what you want to prove, then logically derive a contradiction, meaning you reach something impossible (like 1 = 0) or you violate a known fact or definition. Since the assumption leads to impossibility, it must be false, so the original statement is true. This method depends on having correct negations, especially with quantifiers and inequalities.",
        "The classic beginner example is proving sqrt(2) is irrational. You assume the opposite, that sqrt(2) = a/b in lowest terms, then algebra forces a and b to both be even, contradicting the assumption that the fraction was reduced. Contradictions often emerge from parity (even/odd), divisibility, ordering (smaller than smallest), or minimality (choosing a smallest counterexample). A good contradiction proof clearly marks the assumption, shows the chain of reasoning, and explicitly identifies the contradiction at the end.",
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
        "Set proofs are usually done by element-chasing, which means you prove membership statements by tracking what it means to belong to a set. To prove A subseteq B, you start with \"Let x be an arbitrary element of A\" and then use the definition of A to show x must be in B. This is the set version of a direct proof: assume membership in the left set, derive membership in the right set. Similarly, to prove two sets are equal, you show both inclusions: A subseteq B and B subseteq A.",
        "The operations union, intersection, and difference translate into logical connectors. x in A union B means x in A or x in B. x in A intersect B means x in A and x in B. x in A \\ B means x in A and not in B. Once you write membership in logic form, the proof often becomes a logic exercise. The main discipline is writing each step explicitly: state what membership gives you, transform it, then repackage it as membership in the target set.",
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
        "Set identities like A intersect (B union C) = (A intersect B) union (A intersect C) are proven by showing both directions using element-chasing. For the \"subseteq\" direction, assume x is in the left side, translate that into logical form, then deduce x satisfies the right-side condition. For the \"supseteq\" direction, assume x is in the right side and reverse the logic. This is similar to proving \"iff\" statements because equality of sets is equivalent to \"x is in the left iff x is in the right.\"",
        "De Morgan's laws for sets match De Morgan's laws for logic. For example, the complement of a union is the intersection of complements, and the complement of an intersection is the union of complements. For difference, A \\ (B union C) equals (A \\ B) intersect (A \\ C). These identities become almost automatic if you always translate set membership into \"and/or/not.\" The deeper skill here is learning to move fluently between set notation and logic, because many later topics (probability, analysis, abstract algebra) use the same pattern.",
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
        "A function f: A -> B assigns each input in A exactly one output in B. The set A is the domain and B is the codomain. A function is injective (one-to-one) if different inputs can't map to the same output. The standard proof format is: assume f(a) = f(b) and then show a = b. A function is surjective (onto) if every element of the codomain is hit: for each y in B, there exists x in A such that f(x) = y. The proof format is constructive: start with an arbitrary y, then solve f(x)=y for x and show that x lies in the domain.",
        "A function is bijective if it is both injective and surjective. Bijectivity matters because bijections are exactly the functions that have inverses. Many beginner mistakes come from mixing up domain and codomain. For example, f(x)=x^2 from R to R is not surjective because negative numbers are not hit, but from R to [0, infinity) it is surjective. Function proofs are often algebra plus careful attention to where variables live. The point is not complicated computation. It's demonstrating logical control over definitions.",
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
        "Function composition is defined by (f o g)(x) = f(g(x)). Composition is a way to build complex functions from simpler ones, and many proof properties behave nicely under composition. For instance, if f and g are injective, then f o g is injective, because equality of outputs forces equality step-by-step going backward through g and then through f. If f and g are surjective, then f o g is surjective, because you can hit any target y by first finding an input for f and then finding an input for g.",
        "An inverse function f^-1 exists exactly when f is bijective. The defining property is f^-1(f(x)) = x for all x in the domain and f(f^-1(y)) = y for all y in the codomain. Proving something is an inverse is usually done by verifying these two identities. Beginners often treat inverses as automatic algebraic \"undoing,\" but that only works if the function is one-to-one and onto in the specified sets. Thinking set-theoretically about inverses prevents errors like claiming x^2 has an inverse on all real numbers.",
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
        "Divisibility is a definition disguised as notation. Saying a divides b (a | b) means there exists an integer k such that b = ak. Almost every divisibility proof starts by rewriting using that definition, because it converts a statement about divisibility into an algebra statement about multiples. For example, to show a | (b + c) given a | b and a | c, you write b = ak and c = al, then add them to get b + c = a(k + l), which matches the definition again.",
        "Divisibility proofs often involve closure properties: multiples of a stay multiples of a under addition and under multiplication by integers. You also learn transitivity: if a|b and b|c then a|c, because c = bq = (ap)q = a(pq). The key writing skill is keeping track of which numbers are integers, because divisibility lives in the integers. Whenever you introduce a k from \"a|b,\" explicitly state k is an integer. That small habit prevents many hidden logical gaps.",
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
        "A prime is a positive integer p > 1 whose only positive divisors are 1 and p. Prime numbers are central because they behave like \"atomic\" divisibility objects. A major tool is Euclid's Lemma: if p is prime and p | ab, then p | a or p | b. This is not true for non-primes. For example, 6 | (2*3) but 6 does not divide 2 or 3. Euclid's Lemma is what makes prime factorization and many number theory arguments work.",
        "At a beginner level, you can treat Euclid's Lemma as a theorem you are allowed to use, but it's still important to know how it is used: it lets you pull a prime divisor out of a product. For instance, if p | a^2, then p | a because a^2 = a*a and the lemma says p divides one of the a's, which is the same as p | a. As you get further, you'll connect this to gcd arguments and Bezout's identity, but early on the main goal is learning how primes interact with products in proofs.",
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
        "Modular arithmetic formalizes \"same remainder.\" The statement a == b (mod m) means m divides (a - b), so a and b differ by a multiple of m. This definition is powerful because it turns a remainder claim into a divisibility claim, letting you use algebra safely. Once you know a == b (mod m), you can add the same number to both sides and keep congruence, subtract, and multiply, because these operations preserve the \"difference is a multiple of m\" property.",
        "The main beginner technique is reducing complicated expressions to small cases. For example, mod 2 there are only two residues: 0 and 1, corresponding to even and odd. Mod 4 there are residues 0,1,2,3, which lets you prove statements about squares by checking a small set of cases. Always be explicit about the modulus and what it means. Writing \"mod m\" without stating the definition is how mistakes happen. If you can restate congruence as \"m | (a-b)\" on demand, you are doing modular arithmetic correctly.",
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
        "Many \"impossibility\" number theory proofs come from restricting what values are possible modulo a small number. A famous example: for any integer n, n^2 == 0 or 1 (mod 4). The proof is by cases on parity. If n is even, n = 2k, so n^2 = 4k^2 == 0 (mod 4). If n is odd, n = 2k + 1, so n^2 = 4k(k+1) + 1 == 1 (mod 4). This is extremely useful because it means n^2 can never be congruent to 2 or 3 mod 4.",
        "Once you know the possible residues, you can prove impossibility statements cleanly. For instance, there is no integer n with n^2 == 2 (mod 4) because squares mod 4 are only 0 or 1. This style generalizes: learn what values an expression can take mod m, then use that to rule out equations or divisibility claims. It's a controlled version of proof by cases, and it becomes a major technique in contest math and in early number theory.",
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
        "Mathematical induction proves statements indexed by integers (usually n >= some start). The logic is like dominoes: you prove a base case (the first domino falls), and then you prove that if the statement is true for an arbitrary k, it must also be true for k+1 (each domino knocks down the next). Formally, induction proves a universal statement over the integers. It is not \"assume what you want and done.\" The inductive step must show how truth at k forces truth at k+1.",
        "Induction proofs have a standard form: (1) Base case: verify n = n0. (2) Inductive hypothesis: assume the statement holds for n = k. (3) Inductive step: using the hypothesis, prove it holds for n = k+1. The main beginner pitfall is not using the hypothesis in a logically valid way or accidentally proving the same n twice. The right mindset is: the hypothesis is a tool you may use exactly for k, and your job is to transform the k+1 statement until it contains the k statement inside it.",
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
        "Induction is especially clean for divisibility statements because many expressions have a natural recurrence. Suppose you want to prove something like \"7^n - 1 is divisible by 6 for all n >= 1.\" The inductive step works because 7^(k+1) - 1 can be rewritten as 7(7^k - 1) + 6. That splits the expression into a multiple of the previous term plus an obvious multiple of 6. This is the general pattern: rewrite the (k+1) expression so it contains the k expression plus a term you can directly show is divisible by the target integer.",
        "The \"rewrite to reveal the hypothesis\" habit is the core skill. If your hypothesis is \"6 | (7^k - 1),\" you want to manufacture (7^k - 1) somewhere in the next expression. Similarly, induction can prove inequalities, sums, and recursion formulas, but divisibility is where you see the mechanism most transparently because \"being divisible by m\" is stable under adding multiples of m.",
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
        "Strong induction is a variation where, to prove the statement for k+1, you may assume it is true for all values up to k, not just for k alone. This is useful when k+1 depends on multiple earlier cases. For example, proving \"every integer n >= 2 can be written as a product of primes\" uses strong induction. In the inductive step, either n is prime (done) or n is composite, meaning n = ab with 2 <= a,b < n. Then you need the statement for a and b, which are smaller than n, not necessarily equal to n-1. Strong induction gives you that.",
        "Conceptually, strong induction is not \"stronger\" than normal induction in logical power, but it is stronger in convenience. It matches many natural recursive breakdowns, like factoring, tiling problems, and coin problems. The key requirement is still the same: you must cover the base cases that make the argument work. If your breakdown uses n-4 or n-5, you must ensure those earlier statements exist and have been established.",
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
        "Most induction errors are structural, not algebraic. A frequent mistake is a weak base case, where you prove n = 1 but your inductive step actually needs n = 2 and n = 3 as well. Another common mistake is circularity, where you \"prove\" the k+1 case by rewriting it into itself without progress. Good induction proofs explicitly label the hypothesis, explicitly show where it is used, and clearly finish with the exact k+1 statement, not something close to it.",
        "Polishing an induction proof means making the logic easy to audit. A clean inductive step often starts with the left-hand side of the k+1 statement, then performs algebra until the k-case statement appears, then replaces it using the inductive hypothesis, then simplifies to reach the desired form. If you can't find where to use the hypothesis, that's a sign you need a different algebraic rewrite or a different proof method. Induction is a tool, not a default. Use it when the statement naturally relates n to n+1.",
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
        "Counting proofs start with two basic rules. The sum rule applies when choices are in disjoint categories: if there are a ways to do task A or b ways to do task B, and you cannot do both at once, then there are a + b total ways. The product rule applies when a procedure is sequential: if there are a choices for step 1 and for each of those there are b choices for step 2, then there are ab total outcomes. These rules are simple, but they are the foundation of most combinatorics.",
        "A subtle but important skill is defining what counts as one outcome. You must specify whether order matters, whether repetition is allowed, and what the \"alphabet\" or set of objects is. Many counting mistakes come from silently switching these assumptions. Once your assumptions are clear, counting becomes a chain of product and sum rule applications. Counting is also proof-based because many identities are proven by counting the same set in two different ways, which leads directly into combinations and binomial identities.",
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
        "The binomial coefficient C(n,k), read \"n choose k,\" counts how many ways to choose a k-element subset from an n-element set when order does not matter. It is defined by the formula C(n,k) = n!/(k!(n-k)!), but proof-based combinatorics prefers reasoning over formula memorization. A key identity is Pascal's identity: C(n,k) = C(n-1,k) + C(n-1,k-1). The cleanest proof is a counting argument: count k-person committees from n people by splitting into committees that include a particular person versus those that do not.",
        "Another fundamental identity is symmetry: C(n,k) = C(n,n-k), because choosing k elements to include is equivalent to choosing the n-k elements to exclude. These are best understood via bijections rather than algebra. In proof-based math, you learn to justify formulas, not just apply them. Once you can build and explain these identities with words and logic, you can handle more advanced counting problems without getting lost in algebraic manipulation.",
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
        "The pigeonhole principle is a simple idea with strong consequences: if you place more than n objects into n boxes, then some box contains at least two objects. In proof form, you identify what counts as \"objects\" and what counts as \"boxes.\" For example, if the objects are 13 people and the boxes are the 12 months, at least two people share a birth month. This works because every person must belong to exactly one month box.",
        "The principle generalizes: if you distribute N objects among n boxes, some box contains at least ceil(N/n) objects. Many problems become pigeonhole once you choose the right grouping. A common pattern in number theory is using remainders as boxes. For example, among n+1 integers, two have the same remainder mod n, because there are only n possible remainders. The main challenge is not the logic, it's modeling the situation correctly.",
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
        "A bijection proof shows two sets have the same size by giving a function that pairs each object in one set with exactly one object in the other, with no leftovers. This is stronger than \"they look the same size\" because it explicitly constructs a perfect matching. Bijections are widely used to prove combinatorial identities, like C(n,k) = C(n,n-k): map each k-subset to its complement, which is an (n-k)-subset. The complement map is reversible, so it's a bijection.",
        "Bijection thinking also helps you avoid double counting and clarifies when order matters. If you can build a bijection, you have a proof that two counts are equal without computing either count directly. This style becomes more important later in algebra and discrete math, where structure-preserving maps (isomorphisms) are essentially advanced bijections. For beginners, the goal is learning to describe the map clearly and argue it is one-to-one and onto.",
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
        "A relation on a set A is any rule that tells you which pairs (a,b) in A x A are related. Relations generalize ideas like \"<=\", \"same parity,\" and \"congruent mod n.\" Relations can have properties: reflexive means every element relates to itself (aRa). Symmetric means if aRb then bRa. Transitive means if aRb and bRc then aRc. Proofs here are direct definition proofs: take the definition, assume the hypothesis, and show the property.",
        "A standard beginner example is the relation \"aRb if a-b is even\" on integers. Reflexive holds because a-a=0 is even. Symmetric holds because if a-b is even, then b-a = -(a-b) is also even. Transitive holds because if a-b and b-c are even, then adding gives a-c = (a-b) + (b-c), which is even. These proofs train you to do \"definition, then algebra\" cleanly, which is the same structure you use later in abstract algebra.",
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
        "An equivalence relation is a relation that is reflexive, symmetric, and transitive. Equivalence relations capture the idea of \"same type\" under some criterion, like \"same remainder mod n.\" When a relation is an equivalence relation, it partitions the set into equivalence classes, where each class consists of all elements related to a given element. For example, under \"same parity,\" there are exactly two classes: the evens and the odds. Each element belongs to exactly one class.",
        "Equivalence classes matter because they let you simplify a messy set into a smaller set of categories. Modular arithmetic is built on this: the equivalence classes mod n are the residue classes [0], [1], ..., [n-1]. Proving something is an equivalence relation is usually straightforward, but the deeper understanding is recognizing that once you have equivalence classes, you can work with representatives and avoid repeating the same argument for infinitely many elements.",
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
        "A partition is a collection of nonempty subsets that are pairwise disjoint and whose union is the entire set. Equivalence relations automatically create partitions: the equivalence classes form the blocks of the partition. Two key facts make this work. First, classes are either identical or disjoint: if two classes share an element, then by transitivity they must be the same class. Second, every element lies in its own equivalence class, so the union of all classes is the whole set.",
        "These are proof exercises that reinforce controlled logical reasoning. To show \"classes are disjoint or equal,\" you assume two classes overlap, pick an element in the overlap, and use the relation properties to show every element of one class must relate to every element of the other in the right way, forcing equality. This style is similar to set equality proofs, but now the structure of the relation (especially transitivity) does the heavy lifting.",
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
        "At this stage, you should be comfortable choosing a proof method rather than defaulting to one. If a statement is universal, a direct proof or case proof often works. If it's an implication with a hard direction, try the contrapositive. If it asserts nonexistence or minimality, contradiction is often clean. If it involves sets, do element-chasing. If it involves \"same remainder,\" translate to divisibility and use modular arithmetic. If it involves \"for all n,\" consider induction if there's a natural n to n+1 connection.",
        "The skill you are building is proof strategy. Many beginner proofs fail because the writer does not decide what they are allowed to assume and what they must show. A good proof begins by restating the definitions and isolating the goal. Once you see the goal in definitional form, the path becomes much clearer. This is why learning the definitions and practicing rewriting is more important than memorizing tricks.",
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
        "A correct proof can still be hard to read, and proof-based math cares about communication. Good proof style means: state the claim clearly, define your terms, introduce variables with their sets (\"let n be an integer\"), and justify each step. Avoid skipping the key step where a word becomes algebra, like \"n is even, so n = 2k.\" Also avoid \"obvious\" unless you can explain it in one line. A proof should be checkable by another person without guessing what you meant.",
        "Revision is a real part of mathematics. When you revise, look for hidden assumptions, unclear variable declarations, and steps that are true but not justified. Also watch for the most common beginner issue: proving a stronger or different statement than what was asked. A good revision pass compares each line to the goal: does this line move me closer to the conclusion, or is it unrelated algebra? Clean proofs are usually shorter, not longer, because every line has a job.",
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
        "Mixed practice is where you learn to select the right tool. If you see an \"iff,\" split into two directions. If you see set equality, prove two inclusions. If you see a divisibility statement, rewrite using \"= ak.\" If you see something about squares and parity, consider cases mod 2 or mod 4. If you see a sum or a power indexed by n, consider induction. Strategy becomes almost mechanical once you recognize these signal phrases and structures.",
        "The goal is not to know advanced theorems. It's to know how to translate a problem into the right language and then apply a standard proof pattern cleanly. This is why earlier weeks drilled translation, negation, and definitions. In a mixed proof session, you should always start by rewriting the statement in precise math form, then pick a method, then write the proof with explicit steps. Skipping the rewrite step is the fastest way to get stuck.",
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
        "A proof portfolio is a set of polished proofs that demonstrate mastery of core methods. \"Polished\" means: correct logic, clear structure, minimal fluff, and explicit use of definitions. The portfolio should include a variety: at least one contrapositive proof, one contradiction proof, one induction proof, one set identity proof, one function property proof, and one modular or divisibility proof. This ensures you can move between styles and topics without relying on a single technique.",
        "When selecting proofs, choose ones you can explain out loud. If you cannot explain why each step is valid, it's not yet portfolio-ready. For each proof, aim for a clean beginning that sets variables and hypotheses, a middle that uses definitions and algebra or logic, and a crisp ending that restates the conclusion. The portfolio is less about difficulty and more about correctness and clarity, because those are the foundational skills proof-based math demands.",
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
        "In a final assessment, the most important skill is controlling the logical structure under time pressure. Start by identifying the type of statement: implication, universal, existence, equality. Then commit to a method and write in a disciplined format. For example, for divisibility: \"Let k be an integer such that...\" and for subsets: \"Let x be an arbitrary element of...\" Those openings are not filler, they are the correct logical entry points.",
        "If you get stuck, don't do random algebra. Return to definitions and the goal. Ask: what exactly do I need to show? Can I rewrite it in a more workable form? Many proofs fail because the writer never wrote the goal in an actionable form, like \"show m divides (expression)\" becoming \"show expression = m*t for some integer t.\" That rewrite often creates the path forward. A strong beginner proof is not fancy. It is controlled, explicit, and logically complete.",
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
