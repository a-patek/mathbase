// data/branches.ts

export const branches = {
  "number-theory": {
    tier: 2,
    id: "number-theory",
    name: "Number Theory",
    description:
      "Explore divisibility, modular arithmetic, primes, and classic Diophantine problems.",
    modules: [
      {
        slug: "divisibility-gcds",
        title: "Divisibility & GCDs",
        status: "planned", // later: "live"
        blurb:
          "Foundations of divisibility, greatest common divisors, and the Euclidean algorithm.",
      },
      {
        slug: "modular-arithmetic",
        title: "Modular Arithmetic",
        status: "planned",
        blurb:
          "Working with congruences, modular addition/multiplication, and basic properties.",
      },
      {
        slug: "congruences-inverses",
        title: "Congruences & Inverses",
        status: "planned",
        blurb:
          "Solving congruences, modular inverses, and applications to number-theoretic equations.",
      },
      {
        slug: "primes-unique-factorization",
        title: "Primes & Unique Factorization",
        status: "planned",
        blurb:
          "Prime numbers, the Fundamental Theorem of Arithmetic, and factorizations.",
      },
      {
        slug: "number-theoretic-functions",
        title: "Number-Theoretic Functions",
        status: "planned",
        blurb:
          "Functions like τ(n), σ(n), φ(n) and how they encode arithmetic structure.",
      },
      {
        slug: "diophantine-equations",
        title: "Diophantine Equations",
        status: "planned",
        blurb:
          "Integer solutions to equations, linear Diophantine equations, and classic examples.",
      },
    ],
  },

  combinatorics: {
    tier: 2,
    id: "combinatorics",
    name: "Combinatorics",
    description:
      "Counting, clever invariants, and the backbone ideas of many olympiad problems.",
    modules: [
      {
        slug: "counting-principles",
        title: "Counting Principles",
        status: "planned",
        blurb:
          "Addition and multiplication rules, basic counting strategies, and structured casework.",
      },
      {
        slug: "permutations-combinations",
        title: "Permutations & Combinations",
        status: "planned",
        blurb:
          "n!, binomial coefficients, and choosing/ordering objects under constraints.",
      },
      {
        slug: "invariants-monovariants",
        title: "Invariants & Monovariants",
        status: "planned",
        blurb:
          "Using quantities that stay fixed or move one way to crack hard problems.",
      },
      {
        slug: "pigeonhole-principle",
        title: "Pigeonhole Principle",
        status: "planned",
        blurb:
          "From simple 'more pigeons than holes' to surprisingly deep combinatorial consequences.",
      },
      {
        slug: "graphs-in-combinatorics",
        title: "Graphs in Combinatorics",
        status: "planned",
        blurb:
          "Using graphs as a language for combinatorial configurations and counting arguments.",
      },
      {
        slug: "classic-olympiad-problems",
        title: "Classic Olympiad-Style Problems",
        status: "planned",
        blurb:
          "A curated set of famous problems that synthesize the core combinatorial tools.",
      },
    ],
  },

  "graph-theory": {
    tier: 2,
    id: "graph-theory",
    name: "Graph Theory",
    description:
      "Learn the language of vertices and edges that underlies modern networks and combinatorics.",
    modules: [
      {
        slug: "graph-basics",
        title: "Vertices, Edges, and Basic Definitions",
        status: "planned",
        blurb:
          "Graphs, degrees, adjacency, simple vs multigraphs, and basic examples.",
      },
      {
        slug: "paths-cycles-connectivity",
        title: "Paths, Cycles, and Connectivity",
        status: "planned",
        blurb:
          "Walks, paths, cycles, connected components, and basic connectivity questions.",
      },
      {
        slug: "trees",
        title: "Trees and Their Properties",
        status: "planned",
        blurb:
          "Acyclic connected graphs, spanning trees, and fundamental tree theorems.",
      },
      {
        slug: "graph-coloring",
        title: "Graph Coloring",
        status: "planned",
        blurb:
          "Vertex and edge colorings, chromatic number, and coloring-based arguments.",
      },
      {
        slug: "matchings-algorithms",
        title: "Matchings & Algorithms",
        status: "planned",
        blurb:
          "Matchings, Hall’s theorem ideas, and the algorithmic side of graph theory.",
      },
      {
        slug: "planarity-euler-formula",
        title: "Planarity & Euler’s Formula",
        status: "planned",
        blurb:
          "Planar graphs, faces, and V − E + F = 2 as a powerful structural invariant.",
      },
    ],
  },
} as const;
