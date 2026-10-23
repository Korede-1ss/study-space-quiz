const subjects = [
  {
    name: "Mathematics",
    code: "MTH",
    icon: "π",
    color: "#74a8ff",
    description: "Number bases, algebra, geometry and more",
    questions: [
      {
        topic: "Numbers Bases · Q1",
        text: "In base ten, what is 101101₂?",
        options: ["15", "32", "45", "90"],
        answer: 2,
        explanation: "Expand by place value: 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1 = 45."
      },
      {
        topic: "Numbers Bases · Q2",
        text: "Write the decimal number 39 in base two.",
        options: ["100111₂", "110111₂", "111001₂", "100101₂"],
        answer: 0,
        explanation: "39 = 32 + 4 + 2 + 1, so its binary representation is 100111₂."
      },
      {
        topic: "Numbers Bases · Q3",
        text: "Convert 25 from base ten to the binary base.",
        options: ["10011₂", "1111011₂", "111000₂", "11001₂", "110011₂"],
        answer: 3,
        explanation: "25 = 16 + 8 + 1, so its binary representation is 11001₂."
      },
      {
        topic: "Numbers Bases · Q4",
        text: "In base seven, rice costs M56₇ per bag and milk costs M4₇ per tin. What is the total cost of 4 bags of rice and 3 tins of milk?",
        options: ["M245₇", "M242₇", "M236₇", "M341₇", "M338₇"],
        answer: 3,
        explanation: "Rice costs 4×56₇ = 323₇. Milk costs 3×4₇ = 15₇. Their total is 323₇ + 15₇ = 341₇."
      },
      {
        topic: "Numbers Bases · Q5",
        text: "Find x if (x₄)² = 100100₂.",
        options: ["6₁₀", "12₄", "100₄", "210₄"],
        answer: 1,
        explanation: "100100₂ = 36₁₀, so x = 6₁₀. Written in base four, 6₁₀ = 12₄."
      },
      {
        topic: "Numbers Bases · Q6",
        text: "If 263 + 441 = 714 in the same base, what base is being used?",
        options: ["12", "11", "10", "9", "8"],
        answer: 3,
        explanation: "In base nine, 263₉ = 219₁₀, 441₉ = 361₁₀, and 714₉ = 580₁₀. Since 219 + 361 = 580, the base is 9."
      },
      {
        topic: "Numbers Bases · Q7",
        text: "A trader buys 103₅ oranges at M14₅ each and sells them at M24₅ each. What is the total gain?",
        options: ["M103₅", "M1030₅", "M102₅", "M2002₅", "M3032₅"],
        answer: 1,
        explanation: "The gain per orange is 24₅ − 14₅ = 10₅. Then 103₅ × 10₅ = 1030₅."
      },
      {
        topic: "Numbers Bases · Q8",
        text: "In base two, solve 11₂ ÷ x = 1000₂ ÷ (x + 101₂).",
        options: ["101₂", "11₂", "110₂", "111₂", "10₂"],
        answer: 1,
        explanation: "Convert the numerals to base ten: 3/x = 8/(x+5). Cross-multiplying gives 3x + 15 = 8x, so x = 3 = 11₂."
      },
      {
        topic: "Numbers Bases · Q9",
        text: "Evaluate (212)₃ − (121)₃ + (222)₃.",
        options: ["(313)₃", "(1000)₃", "(1020)₃", "(1222)₃"],
        answer: 2,
        explanation: "Convert to base ten: 212₃ = 23, 121₃ = 16 and 222₃ = 26. The result is 23 − 16 + 26 = 33 = 1020₃."
      },
      {
        topic: "Numbers Bases · Q10",
        text: "Convert 241₅ to base eight.",
        options: ["71₈", "107₈", "176₈", "241₈"],
        answer: 1,
        explanation: "241₅ = 2×25 + 4×5 + 1 = 71₁₀, and 71₁₀ = 107₈."
      },
      {
        topic: "Numbers Bases · Q11",
        text: "In base n, 2257ₙ is the result of subtracting 4577ₙ from 7056ₙ. Find n.",
        options: ["8", "9", "10", "11"],
        answer: 0,
        explanation: "The digit 7 means n must be greater than 7. Testing the possible bases, base eight gives 7056₈ − 4577₈ = 2257₈."
      },
      {
        topic: "Numbers Bases · Q12",
        text: "Find n if 34ₙ = 10011₂.",
        options: ["5", "6", "7", "8"],
        answer: 0,
        explanation: "10011₂ = 19₁₀. Therefore 34ₙ = 3n + 4 = 19, giving n = 5."
      },
      {
        topic: "Numbers Bases · Q13",
        text: "Calculate 3310₅ − 1442₅.",
        options: ["1313₅", "2113₅", "4302₅", "1103₅"],
        answer: 0,
        explanation: "3310₅ = 455₁₀ and 1442₅ = 247₁₀. Their difference is 208₁₀ = 1313₅."
      },
      {
        topic: "Numbers Bases · Q14",
        text: "If (1P03)₄ = 115₁₀, find P.",
        options: ["0", "1", "2", "3"],
        answer: 3,
        explanation: "(1P03)₄ = 64 + 16P + 3. Equating this to 115 gives 16P = 48, so P = 3."
      },
      {
        topic: "Numbers Bases · Q15",
        text: "If 1011₂ + x = 25₁₀, find x in base ten.",
        options: ["14", "20", "24", "25"],
        answer: 0,
        explanation: "1011₂ = 11₁₀, so x = 25 − 11 = 14."
      },
      {
        topic: "Numbers Bases · Q16",
        text: "If 2₉ × (Y3)₉ = 3₅ × (Y3)₅, find Y.",
        options: ["4", "3", "2", "1"],
        answer: 3,
        explanation: "Convert each numeral: 2(9Y + 3) = 3(5Y + 3). Solving gives 18Y + 6 = 15Y + 9, so Y = 1."
      },
      {
        topic: "Numbers Bases · Q17",
        text: "Divide 2434₆ by 42₆. Give the quotient in base six.",
        options: ["23₆", "35₆", "52₆", "55₆"],
        answer: 1,
        explanation: "2434₆ = 598₁₀ and 42₆ = 26₁₀. Their quotient is 23₁₀, which is 35₆."
      },
      {
        topic: "Numbers Bases · Q18",
        text: "If P344₆ − 23P2₆ = 2PP2₆, find P.",
        options: ["5", "4", "3", "2"],
        answer: 0,
        explanation: "Convert the base-six numbers to decimal expressions and equate them. Simplifying gives 168P = 840, so P = 5."
      },
      {
        topic: "Numbers Bases · Q19",
        text: "Simplify 213₄ × 23₄.",
        options: ["10321₄", "12231₄", "13211₄", "10311₄"],
        answer: 1,
        explanation: "213₄ = 39₁₀ and 23₄ = 11₁₀. Their product is 429₁₀ = 12231₄."
      },
      {
        topic: "Numbers Bases · Q20",
        text: "Calculate 4321₅ − 1243₅ and give the answer in base five.",
        options: ["2303₅", "2233₅", "2033₅", "2330₅"],
        answer: 0,
        explanation: "4321₅ = 576₁₀ and 1243₅ = 248₁₀. The difference is 328₁₀ = 2303₅."
      },
      {
        topic: "Numbers Bases · Q21",
        text: "Find p if 451₆ − p₇ = 305₆.",
        options: ["611₇", "142₇", "116₇", "62₇"],
        answer: 2,
        explanation: "451₆ = 175₁₀ and 305₆ = 113₁₀, so p = 62₁₀ = 116₇."
      },
      {
        topic: "Numbers Bases · Q22",
        text: "Find m if 13ₘ + 24ₘ = 41ₘ.",
        options: ["8", "6", "5", "2"],
        answer: 1,
        explanation: "In decimal, the equation is (m+3) + (2m+4) = 4m+1. Solving gives m = 6."
      },
      {
        topic: "Numbers Bases · Q23",
        text: "If 321₄ is divided by 23₄ and leaves a remainder r, find r.",
        options: ["0", "1", "2", "3"],
        answer: 2,
        explanation: "321₄ = 57₁₀ and 23₄ = 11₁₀. Since 57 = 5×11 + 2, the remainder is 2."
      },
      {
        topic: "Numbers Bases · Q24",
        text: "If (k2)₆ × 3 = 3 × (k4)₅, find k.",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "Write the numerals in decimal: 3(6k + 2) = 3(5k + 4). Solving gives k = 2."
      },
      {
        topic: "Numbers Bases · Q25",
        text: "Evaluate 1011₂² − 101₂².",
        options: ["110000₂", "1100000₂", "11000₂", "110₂"],
        answer: 1,
        explanation: "Use the difference of two squares: (1011₂ + 101₂)(1011₂ − 101₂) = 10000₂ × 110₂ = 1100000₂."
      },
      {
        topic: "Numbers Bases · Q26",
        text: "Add 1101₂, 10111₂ and 111₂.",
        options: ["111011₂", "110110₂", "101011₂", "101010₂"],
        answer: 2,
        explanation: "The numbers are 13, 23 and 7 in decimal. Their sum is 43₁₀ = 101011₂."
      },
      {
        topic: "Numbers Bases · Q27",
        text: "If 124ₓ = 39₁₀, find x.",
        options: ["3", "4", "5", "6"],
        answer: 2,
        explanation: "124ₓ = x² + 2x + 4. Setting this equal to 39 gives x² + 2x − 35 = 0, so x = 5; its digits are valid in base five."
      },
      {
        topic: "Numbers Bases · Q28",
        text: "Subtract 16418 from 18630.",
        options: ["1121", "2112", "2113", "2212"],
        answer: 3,
        explanation: "18630 − 16418 = 2212."
      },
      {
        topic: "Numbers Bases · Q29",
        text: "If 55ₓ + 52ₓ = 77₁₀, find x.",
        options: ["5", "6", "7", "10"],
        answer: 2,
        explanation: "Expand in base x: (5x+5) + (5x+2) = 77. Thus 10x + 7 = 77 and x = 7."
      },
      {
        topic: "Numbers Bases · Q30",
        text: "Find r if 6r7₈ = 511₉.",
        options: ["3", "2", "6", "5"],
        answer: 0,
        explanation: "511₉ = 415₁₀, while 6r7₈ = 391 + 8r. Equating them gives 8r = 24, so r = 3."
      },
      {
        topic: "Numbers Bases · Q31",
        text: "If 2q3₅ = 77₈, find q.",
        options: ["2", "1", "4", "0"],
        answer: 0,
        explanation: "77₈ = 63₁₀ and 2q3₅ = 53 + 5q. So 53 + 5q = 63, giving q = 2."
      },
      {
        topic: "Numbers Bases · Q33",
        text: "Convert 27₁₀ to base three.",
        options: ["1001₃", "1010₃", "1100₃", "1000₃"],
        answer: 3,
        explanation: "27 = 2×9 + 1×3 + 0×1, so 27₁₀ = 1000₃."
      },
      {
        topic: "Numbers Bases · Q34",
        text: "Find 110111₂ + 10100₂.",
        options: ["1101011₂", "100101₂", "1001011₂", "1001111₂"],
        answer: 2,
        explanation: "110111₂ = 55₁₀ and 10100₂ = 20₁₀. Their sum is 75₁₀ = 1001011₂."
      },
      {
        topic: "Numbers Bases · Q35",
        text: "If x₁₀ = 23₅, find x.",
        options: ["15", "12", "14", "13"],
        answer: 3,
        explanation: "23₅ = 2×5 + 3 = 13₁₀, so x = 13."
      },
      {
        topic: "Numbers Bases · Q36",
        text: "The sum of four numbers is 1214₅. What is their average in base five?",
        options: ["411₅", "401₅", "114₅", "141₅"],
        answer: 3,
        explanation: "1214₅ = 184₁₀. Divide by four to get 46₁₀, which is 141₅."
      },
      {
        topic: "Numbers Bases · Q37",
        text: "Simplify 23₄ × 22₄.",
        options: ["1132₄", "1223₄", "1232₄", "1123₄"],
        answer: 2,
        explanation: "23₄ = 11₁₀ and 22₄ = 10₁₀. Their product is 110₁₀ = 1232₄."
      },
      {
        topic: "Numbers Bases · Q38",
        text: "Find the sum of 25₆, 52₆ and 43₆, expressing your answer in base eight.",
        options: ["411₈", "141₈", "114₈", "417₈"],
        answer: 2,
        explanation: "The sum is 25₆ + 52₆ + 43₆ = 204₆ = 76₁₀. Converting 76 to base eight gives 114₈."
      }
    ]
  },
  {
    name: "Physics",
    code: "PHY",
    icon: "↗",
    color: "#ff9a4a",
    description: "Measurements, motion, forces and energy",
    questions: [
      {
        topic: "Motion",
        text: "A runner travels 100 metres in 20 seconds. What is the runner's average speed?",
        options: ["2 m/s", "5 m/s", "20 m/s", "80 m/s"],
        answer: 1,
        explanation: "Average speed = distance ÷ time. 100 m ÷ 20 s = 5 m/s."
      },
      {
        topic: "Forces",
        text: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Pascal", "Newton"],
        answer: 3,
        explanation: "Force is measured in newtons (N), named after physicist Isaac Newton."
      },
      {
        topic: "Electricity",
        text: "Which instrument is used to measure electric current?",
        options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
        answer: 1,
        explanation: "An ammeter measures electric current. A voltmeter measures potential difference."
      }
    ]
  },
  {
    name: "English",
    code: "ENG",
    icon: "A",
    color: "#c195ff",
    description: "Comprehension, lexis, structure and oral forms",
    questions: [
      {
        topic: "Grammar",
        text: "Choose the correct word: “Neither of the answers ___ correct.”",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        explanation: "“Neither” is treated as singular here, so it takes the singular verb “is.”"
      },
      {
        topic: "Vocabulary",
        text: "Which word is closest in meaning to “brief”?",
        options: ["Lengthy", "Concise", "Unclear", "Detailed"],
        answer: 1,
        explanation: "“Brief” means short in duration or wording. “Concise” means brief but clear."
      },
      {
        topic: "Punctuation",
        text: "Which sentence uses the apostrophe correctly?",
        options: ["The students books are on the desk.", "The student's books are on the desk.", "The students' books are on the desk.", "The students's books are on the desk."],
        answer: 2,
        explanation: "The books belong to multiple students, so the plural possessive is formed by adding an apostrophe after the s: “students'.”"
      }
    ]
  },
  {
    name: "Chemistry",
    code: "CHM",
    icon: "⚗",
    color: "#43d6a0",
    description: "Mixtures, atoms, reactions and organic chemistry",
    questions: [
      {
        topic: "Atomic structure",
        text: "Which subatomic particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        answer: 2,
        explanation: "Electrons carry a negative charge. Protons are positive, while neutrons have no charge."
      },
      {
        topic: "Elements",
        text: "What is the chemical symbol for sodium?",
        options: ["S", "So", "Na", "N"],
        answer: 2,
        explanation: "Sodium's symbol is Na, from its Latin name, natrium."
      },
      {
        topic: "Acids and bases",
        text: "A solution with a pH of 3 is best described as…",
        options: ["Acidic", "Neutral", "Alkaline", "A pure element"],
        answer: 0,
        explanation: "A pH below 7 is acidic. A pH of 7 is neutral, and a pH above 7 is alkaline."
      }
    ]
  }
];

const syllabusTopics = {
  MTH: [
    "Number bases",
    "Fractions, decimals and percentages",
    "Indices, logarithms and surds",
    "Sets",
    "Polynomials",
    "Variation",
    "Inequalities",
    "Progression",
    "Binary operations",
    "Matrices and determinants",
    "Euclidean geometry",
    "Mensuration",
    "Loci",
    "Coordinate geometry",
    "Trigonometry",
    "Differentiation",
    "Applications of differentiation",
    "Integration",
    "Representation of data",
    "Measures of location and dispersion",
    "Permutation and combination",
    "Probability"
  ],
  PHY: [
    "Measurements and units",
    "Scalars and vectors",
    "Motion",
    "Gravitational field",
    "Equilibrium of forces",
    "Work, energy and power",
    "Friction",
    "Simple machines",
    "Elasticity",
    "Pressure and liquids",
    "Temperature and thermal expansion",
    "Gas laws and kinetic theory",
    "Quantity of heat and change of state",
    "Heat transfer",
    "Waves and sound",
    "Light and optical instruments",
    "Electrostatics and capacitors",
    "Electric cells and current electricity",
    "Electrical energy and power",
    "Magnets and magnetic fields",
    "Electromagnetic induction",
    "Simple harmonic motion",
    "Conduction of electricity through matter",
    "Elementary modern physics",
    "Introductory electronics"
  ],
  ENG: [
    "Comprehension",
    "Cloze test",
    "Reading text (The Lekki Headmaster)",
    "Synonyms",
    "Antonyms",
    "Homonyms",
    "Sentence interpretation",
    "Sentence completion",
    "Grammar and concord",
    "Punctuation and spelling",
    "Idioms and figurative language",
    "Vowels and consonants",
    "Rhymes and homophones",
    "Word stress and intonation"
  ],
  CHM: [
    "Separation of mixtures",
    "Chemical combination and stoichiometry",
    "Kinetic theory and gas laws",
    "Atomic structure",
    "Periodic table and periodicity",
    "Chemical bonding and molecular shapes",
    "Nuclear chemistry and radioactivity",
    "Air",
    "Water and hardness",
    "Solubility",
    "Acids, bases and salts",
    "Oxidation and reduction",
    "Electrolysis",
    "Chemical energetics and equilibrium",
    "Rates of reaction",
    "Metals and their compounds",
    "Organic chemistry",
    "Chemistry and industry"
  ]
};

const extraQuestions = {
  MTH: [
    {
      topic: "Fractions, decimals and percentages",
      text: "A jacket marked ₦8,000 is reduced by 15%. What is the sale price?",
      options: ["₦6,400", "₦6,800", "₦7,200", "₦7,850"],
      answer: 1,
      explanation: "15% of ₦8,000 is ₦1,200. The sale price is ₦8,000 − ₦1,200 = ₦6,800."
    },
    {
      topic: "Indices, logarithms and surds",
      text: "Simplify 2³ × 2⁴.",
      options: ["2⁷", "4⁷", "2¹²", "2"],
      answer: 0,
      explanation: "When multiplying powers with the same base, add the indices: 2³ × 2⁴ = 2⁷."
    },
    {
      topic: "Sets",
      text: "In a class of 30 students, 18 study Biology, 12 study Chemistry, and 5 study both. How many study neither?",
      options: ["3", "5", "7", "11"],
      answer: 1,
      explanation: "The number studying at least one is 18 + 12 − 5 = 25. Therefore 30 − 25 = 5 study neither."
    },
    {
      topic: "Polynomials",
      text: "The roots of x² − 7x + 12 = 0 are…",
      options: ["2 and 6", "−3 and −4", "3 and 4", "1 and 12"],
      answer: 2,
      explanation: "Factor the expression: x² − 7x + 12 = (x − 3)(x − 4). The roots are 3 and 4."
    },
    {
      topic: "Progression",
      text: "What is the 8th term of the arithmetic sequence 4, 7, 10, …?",
      options: ["22", "25", "28", "31"],
      answer: 1,
      explanation: "The common difference is 3. The 8th term is 4 + (8 − 1)×3 = 25."
    },
    {
      topic: "Matrices and determinants",
      text: "Find the determinant of [[3, 2], [1, 4]].",
      options: ["8", "10", "12", "14"],
      answer: 1,
      explanation: "For a 2×2 matrix [[a,b],[c,d]], the determinant is ad − bc. Here, 3×4 − 2×1 = 10."
    },
    {
      topic: "Euclidean geometry",
      text: "The exterior angle of a regular hexagon is…",
      options: ["45°", "60°", "90°", "120°"],
      answer: 1,
      explanation: "The exterior angles of any polygon total 360°. For a regular hexagon, 360° ÷ 6 = 60°."
    },
    {
      topic: "Mensuration",
      text: "A circle has radius 7 cm. Using π = 22/7, what is its area?",
      options: ["44 cm²", "88 cm²", "154 cm²", "308 cm²"],
      answer: 2,
      explanation: "Area = πr² = (22/7) × 7² = 154 cm²."
    },
    {
      topic: "Coordinate geometry",
      text: "Find the gradient of the line joining (2, 3) and (6, 11).",
      options: ["1/2", "2", "4", "8"],
      answer: 1,
      explanation: "Gradient = (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2."
    },
    {
      topic: "Trigonometry",
      text: "A right-angled triangle has an opposite side of 3 cm and hypotenuse of 5 cm. What is the sine of the marked angle?",
      options: ["3/5", "4/5", "3/4", "5/3"],
      answer: 0,
      explanation: "Sine is opposite ÷ hypotenuse, so sin θ = 3/5."
    },
    {
      topic: "Differentiation",
      text: "If y = x³ + 2x, what is dy/dx?",
      options: ["3x² + 2", "x² + 2", "3x + 2", "x³ + 2"],
      answer: 0,
      explanation: "Differentiate each term: d(x³)/dx = 3x² and d(2x)/dx = 2."
    },
    {
      topic: "Probability",
      text: "A fair six-sided die is rolled once. What is the probability of rolling an even number?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      answer: 2,
      explanation: "Three of the six outcomes (2, 4 and 6) are even, so the probability is 3/6 = 1/2."
    },
    {
      topic: "Variation",
      text: "y varies inversely as x. If y = 12 when x = 2, what is y when x = 8?",
      options: ["2", "3", "6", "48"],
      answer: 1,
      explanation: "For inverse variation, xy is constant. 12 × 2 = 24, so y = 24 ÷ 8 = 3."
    },
    {
      topic: "Inequalities",
      text: "Solve 3x − 4 < 8.",
      options: ["x < 4", "x > 4", "x < 12", "x > 12"],
      answer: 0,
      explanation: "Add 4 to both sides, then divide by 3: 3x < 12, so x < 4."
    },
    {
      topic: "Binary operations",
      text: "A binary operation is defined by a * b = a + b − ab. Find 2 * 3.",
      options: ["−1", "1", "5", "6"],
      answer: 0,
      explanation: "Substitute a = 2 and b = 3: 2 * 3 = 2 + 3 − (2 × 3) = −1."
    },
    {
      topic: "Loci",
      text: "What is the locus of points that are equally distant from two fixed points?",
      options: ["A circle centred at either point", "The perpendicular bisector of the line joining the points", "A line parallel to the joining line", "An ellipse through both points"],
      answer: 1,
      explanation: "Every point on the perpendicular bisector of a segment is equally distant from its two endpoints."
    },
    {
      topic: "Applications of differentiation",
      text: "The height of a curve is y = −x² + 6x. At what value of x does it reach its maximum?",
      options: ["x = 2", "x = 3", "x = 6", "x = 12"],
      answer: 1,
      explanation: "At a maximum, dy/dx = 0. Here dy/dx = −2x + 6, which is zero at x = 3; the second derivative is −2, confirming a maximum."
    },
    {
      topic: "Integration",
      text: "Evaluate the definite integral ∫₀³ 2x dx.",
      options: ["3", "6", "9", "18"],
      answer: 2,
      explanation: "An antiderivative of 2x is x². Evaluating from 0 to 3 gives 3² − 0² = 9."
    },
    {
      topic: "Representation of data",
      text: "In a pie chart, what angle represents 25% of the observations?",
      options: ["45°", "60°", "90°", "180°"],
      answer: 2,
      explanation: "A full circle is 360°. Twenty-five per cent of 360° is 90°."
    },
    {
      topic: "Measures of location and dispersion",
      text: "Find the median of 2, 4, 7, 8 and 9.",
      options: ["4", "6", "7", "8"],
      answer: 2,
      explanation: "The values are already ordered; the middle of the five values is 7."
    },
    {
      topic: "Permutation and combination",
      text: "In how many different ways can three pupils be seated in three places chosen from five pupils?",
      options: ["10", "15", "60", "125"],
      answer: 2,
      explanation: "The places are ordered, so use permutations: 5 × 4 × 3 = 60."
    }
  ],
  PHY: [
    {
      topic: "Measurements and units",
      text: "Which instrument is most suitable for measuring the diameter of a thin wire?",
      options: ["Metre rule", "Stopwatch", "Micrometer screw gauge", "Beam balance"],
      answer: 2,
      explanation: "A micrometer screw gauge measures very small thicknesses and diameters accurately."
    },
    {
      topic: "Scalars and vectors",
      text: "Which of the following is a vector quantity?",
      options: ["Mass", "Temperature", "Distance", "Displacement"],
      answer: 3,
      explanation: "Displacement has both magnitude and direction, so it is a vector."
    },
    {
      topic: "Motion",
      text: "A car increases its velocity from 5 m/s to 17 m/s in 4 seconds. What is its acceleration?",
      options: ["3 m/s²", "4 m/s²", "5.5 m/s²", "12 m/s²"],
      answer: 0,
      explanation: "Acceleration = change in velocity ÷ time = (17 − 5) ÷ 4 = 3 m/s²."
    },
    {
      topic: "Gravitational field",
      text: "A body has a mass of 3 kg. What is its weight where g = 10 m/s²?",
      options: ["0.3 N", "3 N", "13 N", "30 N"],
      answer: 3,
      explanation: "Weight = mass × gravitational acceleration = 3 × 10 = 30 N."
    },
    {
      topic: "Equilibrium of forces",
      text: "A 2 m beam is balanced at its centre. A 10 N force acts 0.5 m to the left of the pivot. What force balances it 1 m to the right?",
      options: ["2.5 N", "5 N", "10 N", "20 N"],
      answer: 1,
      explanation: "For balance, clockwise moment equals anticlockwise moment. 10 × 0.5 = F × 1, so F = 5 N."
    },
    {
      topic: "Work, energy and power",
      text: "A force of 20 N moves a box 3 m in the direction of the force. How much work is done?",
      options: ["6 J", "23 J", "60 J", "120 J"],
      answer: 2,
      explanation: "Work done = force × distance in the direction of the force = 20 × 3 = 60 J."
    },
    {
      topic: "Pressure and liquids",
      text: "A force of 60 N acts normally on an area of 3 m². What pressure does it exert?",
      options: ["20 Pa", "57 Pa", "63 Pa", "180 Pa"],
      answer: 0,
      explanation: "Pressure = force ÷ area = 60 ÷ 3 = 20 Pa."
    },
    {
      topic: "Temperature and thermal expansion",
      text: "A temperature of 27°C is equivalent to approximately…",
      options: ["246 K", "273 K", "300 K", "310 K"],
      answer: 2,
      explanation: "Kelvin temperature = Celsius temperature + 273, so 27°C = 300 K."
    },
    {
      topic: "Gas laws and kinetic theory",
      text: "At constant temperature, a gas occupies 200 cm³ at 100 kPa. What volume will it occupy at 200 kPa?",
      options: ["50 cm³", "100 cm³", "200 cm³", "400 cm³"],
      answer: 1,
      explanation: "Boyle's law gives P₁V₁ = P₂V₂. V₂ = (100 × 200) ÷ 200 = 100 cm³."
    },
    {
      topic: "Heat transfer",
      text: "Heat from the Sun reaches Earth mainly by…",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      answer: 2,
      explanation: "Radiation can travel through a vacuum, unlike conduction and convection."
    },
    {
      topic: "Waves and sound",
      text: "A wave has frequency 5 Hz and wavelength 2 m. What is its speed?",
      options: ["2.5 m/s", "7 m/s", "10 m/s", "20 m/s"],
      answer: 2,
      explanation: "Wave speed = frequency × wavelength = 5 × 2 = 10 m/s."
    },
    {
      topic: "Light and optical instruments",
      text: "Light travels from air into glass. Which change occurs?",
      options: ["It speeds up and bends away from the normal.", "It slows down and bends towards the normal.", "Its frequency increases.", "It stops travelling."],
      answer: 1,
      explanation: "Glass is optically denser than air. Light slows down and refracts towards the normal."
    },
    {
      topic: "Electric cells and current electricity",
      text: "A 6 Ω resistor is connected across a 12 V supply. What current flows?",
      options: ["0.5 A", "2 A", "6 A", "72 A"],
      answer: 1,
      explanation: "By Ohm's law, I = V/R = 12/6 = 2 A."
    },
    {
      topic: "Electrical energy and power",
      text: "A 40 W lamp is used for 3 hours. How much electrical energy does it use?",
      options: ["43 Wh", "120 Wh", "120 W", "4,800 Wh"],
      answer: 1,
      explanation: "Energy = power × time = 40 W × 3 h = 120 Wh."
    },
    {
      topic: "Magnets and magnetic fields",
      text: "Which pole of a freely suspended bar magnet points approximately towards geographic north?",
      options: ["Its north-seeking pole", "Its south pole only when heated", "Both poles", "Neither pole"],
      answer: 0,
      explanation: "The north-seeking pole of a freely suspended magnet aligns approximately with geographic north."
    },
    {
      topic: "Friction",
      text: "Which statement best describes friction between two solid surfaces?",
      options: ["It always acts in the direction of motion.", "It opposes relative motion or the tendency to move.", "It removes the weight of both objects.", "It acts only when surfaces are far apart."],
      answer: 1,
      explanation: "Friction acts to oppose relative motion, or the tendency of surfaces to move relative to one another."
    },
    {
      topic: "Simple machines",
      text: "A machine lifts a load of 240 N using an effort of 60 N. What is its mechanical advantage?",
      options: ["0.25", "4", "180", "300"],
      answer: 1,
      explanation: "Mechanical advantage = load ÷ effort = 240 ÷ 60 = 4."
    },
    {
      topic: "Elasticity",
      text: "Within the elastic limit, a spring's extension is doubled. What happens to the applied force?",
      options: ["It halves.", "It remains unchanged.", "It doubles.", "It becomes zero."],
      answer: 2,
      explanation: "Hooke's law states that, within the elastic limit, extension is directly proportional to applied force."
    },
    {
      topic: "Quantity of heat and change of state",
      text: "Why does the temperature of pure water remain constant while it boils at a fixed pressure?",
      options: ["The heater stops supplying energy.", "The supplied energy is used for the change of state.", "The water's mass becomes zero.", "The water stops absorbing heat."],
      answer: 1,
      explanation: "During boiling, latent heat is used to change the liquid into vapour rather than raise its temperature."
    },
    {
      topic: "Electrostatics and capacitors",
      text: "What is the main function of a capacitor?",
      options: ["To store electric charge and energy in an electric field", "To convert sound into light", "To measure mass", "To permanently increase resistance"],
      answer: 0,
      explanation: "A capacitor stores separated electric charge and energy in the electric field between its conductors."
    },
    {
      topic: "Electromagnetic induction",
      text: "A current is induced in a coil when…",
      options: ["The coil is kept still in a constant magnetic field.", "The magnetic flux through the coil changes.", "The coil is heated without a magnetic field.", "The coil is disconnected from every circuit."],
      answer: 1,
      explanation: "Electromagnetic induction occurs when the magnetic flux linking a conductor changes."
    },
    {
      topic: "Simple harmonic motion",
      text: "A particle completes 4 oscillations each second. What is its period?",
      options: ["0.25 s", "2 s", "4 s", "16 s"],
      answer: 0,
      explanation: "The period T is the reciprocal of frequency: T = 1/4 = 0.25 s."
    },
    {
      topic: "Conduction of electricity through matter",
      text: "In an electrolyte, electric current is carried mainly by…",
      options: ["Free electrons only", "Moving positive and negative ions", "Neutrons", "Sound waves"],
      answer: 1,
      explanation: "In electrolytes, mobile positive and negative ions transport charge through the liquid."
    },
    {
      topic: "Elementary modern physics",
      text: "An alpha particle is the same as…",
      options: ["An electron", "A proton", "A helium nucleus", "An electromagnetic wave"],
      answer: 2,
      explanation: "An alpha particle contains two protons and two neutrons, the same composition as a helium nucleus."
    },
    {
      topic: "Introductory electronics",
      text: "What is the main purpose of a diode in a simple circuit?",
      options: ["To allow current to flow mainly in one direction", "To store a large mechanical load", "To increase the frequency of sound", "To measure temperature"],
      answer: 0,
      explanation: "A diode conducts readily in one direction and resists current in the opposite direction."
    }
  ],
  ENG: [
    {
      topic: "Comprehension",
      passage: "When the rain finally stopped, Tola expected the footpath to the village library to dry quickly. Instead, the narrow path remained muddy, and several younger pupils turned back. Tola and two friends fetched stones from a nearby pile and placed them along the deepest patches. The librarian brought an old wheelbarrow, while a farmer donated sand. No one had planned a major project; each person simply offered what was available. By midday, the path was safer, but the friends noticed that water still collected beside the entrance. The librarian suggested a shallow channel to carry it towards the garden. They dug it together and planted grass along its edge to prevent erosion. The following week, more children visited the library. Tola realised that the work had done more than make a path. It had shown the pupils how a shared problem could be solved through small, practical contributions. They agreed to inspect the channel after each heavy rain, so that a little care would prevent the larger task from returning.",
      text: "Why did some younger pupils turn back from the library?",
      options: ["The library was closed.", "The muddy path was difficult to cross.", "They had no books to return.", "The farmer asked them to leave."],
      answer: 1,
      explanation: "The passage says the path remained muddy and several younger pupils turned back."
    },
    {
      topic: "Comprehension",
      passage: "When the rain finally stopped, Tola expected the footpath to the village library to dry quickly. Instead, the narrow path remained muddy, and several younger pupils turned back. Tola and two friends fetched stones from a nearby pile and placed them along the deepest patches. The librarian brought an old wheelbarrow, while a farmer donated sand. No one had planned a major project; each person simply offered what was available. By midday, the path was safer, but the friends noticed that water still collected beside the entrance. The librarian suggested a shallow channel to carry it towards the garden. They dug it together and planted grass along its edge to prevent erosion. The following week, more children visited the library. Tola realised that the work had done more than make a path. It had shown the pupils how a shared problem could be solved through small, practical contributions. They agreed to inspect the channel after each heavy rain, so that a little care would prevent the larger task from returning.",
      text: "What does “each person simply offered what was available” suggest about the villagers?",
      options: ["They waited for a professional builder.", "They contributed using what they had.", "They wanted the library to close.", "They competed to own the path."],
      answer: 1,
      explanation: "The librarian provided a wheelbarrow, the farmer gave sand, and the pupils gathered stones; everyone contributed practically."
    },
    {
      topic: "Comprehension",
      passage: "When the rain finally stopped, Tola expected the footpath to the village library to dry quickly. Instead, the narrow path remained muddy, and several younger pupils turned back. Tola and two friends fetched stones from a nearby pile and placed them along the deepest patches. The librarian brought an old wheelbarrow, while a farmer donated sand. No one had planned a major project; each person simply offered what was available. By midday, the path was safer, but the friends noticed that water still collected beside the entrance. The librarian suggested a shallow channel to carry it towards the garden. They dug it together and planted grass along its edge to prevent erosion. The following week, more children visited the library. Tola realised that the work had done more than make a path. It had shown the pupils how a shared problem could be solved through small, practical contributions. They agreed to inspect the channel after each heavy rain, so that a little care would prevent the larger task from returning.",
      text: "Why did the group plant grass along the channel?",
      options: ["To make the path longer.", "To prevent the soil from washing away.", "To attract more farmers.", "To block water from the garden."],
      answer: 1,
      explanation: "The passage states that the grass was planted to prevent erosion."
    },
    {
      topic: "Comprehension",
      passage: "When the rain finally stopped, Tola expected the footpath to the village library to dry quickly. Instead, the narrow path remained muddy, and several younger pupils turned back. Tola and two friends fetched stones from a nearby pile and placed them along the deepest patches. The librarian brought an old wheelbarrow, while a farmer donated sand. No one had planned a major project; each person simply offered what was available. By midday, the path was safer, but the friends noticed that water still collected beside the entrance. The librarian suggested a shallow channel to carry it towards the garden. They dug it together and planted grass along its edge to prevent erosion. The following week, more children visited the library. Tola realised that the work had done more than make a path. It had shown the pupils how a shared problem could be solved through small, practical contributions. They agreed to inspect the channel after each heavy rain, so that a little care would prevent the larger task from returning.",
      text: "What can be inferred about the channel after it was dug?",
      options: ["It directed water away from the entrance.", "It carried sand into the library.", "It stopped pupils from using the garden.", "It replaced the footpath."],
      answer: 0,
      explanation: "The channel carried collected rainwater away from the entrance towards the garden."
    },
    {
      topic: "Comprehension",
      passage: "When the rain finally stopped, Tola expected the footpath to the village library to dry quickly. Instead, the narrow path remained muddy, and several younger pupils turned back. Tola and two friends fetched stones from a nearby pile and placed them along the deepest patches. The librarian brought an old wheelbarrow, while a farmer donated sand. No one had planned a major project; each person simply offered what was available. By midday, the path was safer, but the friends noticed that water still collected beside the entrance. The librarian suggested a shallow channel to carry it towards the garden. They dug it together and planted grass along its edge to prevent erosion. The following week, more children visited the library. Tola realised that the work had done more than make a path. It had shown the pupils how a shared problem could be solved through small, practical contributions. They agreed to inspect the channel after each heavy rain, so that a little care would prevent the larger task from returning.",
      text: "Which statement best expresses the main idea of the passage?",
      options: ["Libraries should only open in dry weather.", "A community can solve a shared problem by working together.", "Children should avoid muddy paths.", "Farmers should build village libraries."],
      answer: 1,
      explanation: "The passage emphasises cooperation and small contributions in solving a common problem."
    },
    {
      topic: "Cloze test",
      passage: "A community garden needs careful (1) ___ before planting begins. First, volunteers (2) ___ the soil and remove weeds. Seeds are placed at the correct (3) ___ so that young roots have room to grow. During dry weeks, a steady supply of water is (4) ___. By working together, neighbours can (5) ___ fresh food for their families.",
      text: "Choose the best word for blank (1).",
      options: ["planning", "planned", "plans", "plan"],
      answer: 0,
      explanation: "The noun “planning” fits after the adjective “careful.”"
    },
    {
      topic: "Cloze test",
      passage: "A community garden needs careful (1) ___ before planting begins. First, volunteers (2) ___ the soil and remove weeds. Seeds are placed at the correct (3) ___ so that young roots have room to grow. During dry weeks, a steady supply of water is (4) ___. By working together, neighbours can (5) ___ fresh food for their families.",
      text: "Choose the best word for blank (2).",
      options: ["prepare", "prepares", "prepared", "preparing"],
      answer: 0,
      explanation: "The plural subject “volunteers” takes the base-form verb “prepare.”"
    },
    {
      topic: "Cloze test",
      passage: "A community garden needs careful (1) ___ before planting begins. First, volunteers (2) ___ the soil and remove weeds. Seeds are placed at the correct (3) ___ so that young roots have room to grow. During dry weeks, a steady supply of water is (4) ___. By working together, neighbours can (5) ___ fresh food for their families.",
      text: "Choose the best word for blank (3).",
      options: ["depth", "deep", "deepen", "deeply"],
      answer: 0,
      explanation: "The noun “depth” names how far below the surface the seeds should be placed."
    },
    {
      topic: "Cloze test",
      passage: "A community garden needs careful (1) ___ before planting begins. First, volunteers (2) ___ the soil and remove weeds. Seeds are placed at the correct (3) ___ so that young roots have room to grow. During dry weeks, a steady supply of water is (4) ___. By working together, neighbours can (5) ___ fresh food for their families.",
      text: "Choose the best word for blank (4).",
      options: ["necessary", "necessity", "necessarily", "necessitate"],
      answer: 0,
      explanation: "“A steady supply of water is necessary” is the grammatically correct sentence."
    },
    {
      topic: "Cloze test",
      passage: "A community garden needs careful (1) ___ before planting begins. First, volunteers (2) ___ the soil and remove weeds. Seeds are placed at the correct (3) ___ so that young roots have room to grow. During dry weeks, a steady supply of water is (4) ___. By working together, neighbours can (5) ___ fresh food for their families.",
      text: "Choose the best word for blank (5).",
      options: ["produce", "production", "productive", "product"],
      answer: 0,
      explanation: "After the modal verb “can,” use the base form of the verb: “produce.”"
    },
    {
      topic: "Synonyms",
      text: "Choose the word nearest in meaning to “diligent.”",
      options: ["Careless", "Industrious", "Impatient", "Ordinary"],
      answer: 1,
      explanation: "“Diligent” means careful and persistent in one's work; “industrious” is closest in meaning."
    },
    {
      topic: "Antonyms",
      text: "Choose the word opposite in meaning to “scarce.”",
      options: ["Rare", "Limited", "Abundant", "Missing"],
      answer: 2,
      explanation: "“Scarce” means in short supply. “Abundant” means plentiful."
    },
    {
      topic: "Homonyms",
      text: "Choose the homophones that correctly complete both sentences: “The farmer will ___ the seeds. We sat in the front ___.”",
      options: ["sow / row", "sew / row", "sow / road", "so / row"],
      answer: 0,
      explanation: "“Sow” means to plant seeds and is pronounced like “row” in the phrase “row of seats.”"
    },
    {
      topic: "Sentence interpretation",
      text: "“Although the road was rough, the driver maintained a steady pace.” What does this imply?",
      options: ["The driver stopped at once.", "The driver continued at a consistent speed despite the road.", "The road became smooth.", "The driver was unfamiliar with the vehicle."],
      answer: 1,
      explanation: "“Although” signals a contrast: despite the rough road, the driver kept a steady pace."
    },
    {
      topic: "Grammar and concord",
      text: "Choose the correct verb: “The list of items ___ on the desk.”",
      options: ["are", "were", "is", "have been"],
      answer: 2,
      explanation: "The subject is the singular noun “list”; “of items” does not change the subject. Use “is.”"
    },
    {
      topic: "Punctuation and spelling",
      text: "Choose the correctly punctuated sentence.",
      options: ["“Please close the door”, said Musa.", "“Please close the door,” said Musa.", "“Please close the door” said, Musa.", "Please close the door,” said Musa."],
      answer: 1,
      explanation: "In standard British punctuation, the comma belongs inside the closing quotation mark before the reporting clause."
    },
    {
      topic: "Idioms and figurative language",
      text: "If someone says “the plan is still up in the air,” what do they mean?",
      options: ["The plan involves flying.", "The plan has not yet been decided.", "The plan has failed completely.", "The plan is being celebrated."],
      answer: 1,
      explanation: "“Up in the air” means unsettled or not yet decided."
    },
    {
      topic: "Vowels and consonants",
      text: "Which word begins with a vowel sound?",
      options: ["university", "European", "hour", "useful"],
      answer: 2,
      explanation: "“Hour” begins with a silent h and a vowel sound, /aʊə/."
    },
    {
      topic: "Rhymes and homophones",
      text: "Choose the word that is a homophone of “flour.”",
      options: ["Flower", "Floor", "Flare", "Flew"],
      answer: 0,
      explanation: "“Flour” and “flower” have the same pronunciation but different meanings and spellings."
    },
    {
      topic: "Word stress and intonation",
      text: "Which syllable is stressed in the noun “PHOtograph”?",
      options: ["The first syllable", "The second syllable", "The third syllable", "All syllables equally"],
      answer: 0,
      explanation: "“Photograph” is stressed on its first syllable: PHO-to-graph."
    },
    {
      topic: "Sentence completion",
      text: "The committee ___ not yet reached a final decision.",
      options: ["have", "has", "are", "were"],
      answer: 1,
      explanation: "The singular collective noun “committee” takes the singular verb “has” in this sentence."
    },
    {
      topic: "Sentence completion",
      text: "By the time the bus arrived, the rain ___.",
      options: ["stops", "has stopped", "had stopped", "will stop"],
      answer: 2,
      explanation: "The rain stopped before another past event, so the past perfect “had stopped” is appropriate."
    },
    {
      topic: "Sentence completion",
      text: "Hardly had the match begun ___ the lights went out.",
      options: ["when", "than", "while", "then"],
      answer: 0,
      explanation: "The standard correlative construction is “hardly … when.”"
    },
    {
      topic: "Sentence completion",
      text: "You will bring your calculator, ___?",
      options: ["will you", "won't you", "do you", "don't you"],
      answer: 1,
      explanation: "A positive statement with “will” takes the negative question tag “won't you?”"
    },
    {
      topic: "Sentence completion",
      text: "If she ___ more time, she would learn another language.",
      options: ["has", "had", "will have", "has had"],
      answer: 1,
      explanation: "The second conditional uses a past-tense form in the if-clause: “If she had …, she would …”"
    },
    {
      topic: "Sentence completion",
      text: "The new safety rules will take ___ next month.",
      options: ["affect", "effect", "effort", "afford"],
      answer: 1,
      explanation: "The idiom is “take effect,” meaning to become operative."
    },
    {
      topic: "Sentence completion",
      text: "Kemi prefers walking ___ taking a crowded bus.",
      options: ["than", "from", "to", "over than"],
      answer: 2,
      explanation: "The standard construction is “prefer one activity to another.”"
    },
    {
      topic: "Sentence completion",
      text: "Neither the head teacher nor the pupils ___ ready to leave.",
      options: ["was", "is", "were", "has been"],
      answer: 2,
      explanation: "With “neither … nor,” the verb agrees with the nearer subject. “Pupils” is plural, so use “were.”"
    },
    {
      topic: "Sentence completion",
      text: "The outdoor lesson was cancelled ___ the heavy rain.",
      options: ["because", "because of", "although", "despite of"],
      answer: 1,
      explanation: "“Because of” is followed by the noun phrase “the heavy rain.”"
    },
    {
      topic: "Sentence completion",
      text: "All applications must reach the office ___ Friday.",
      options: ["by", "since", "during", "until"],
      answer: 0,
      explanation: "“By Friday” sets a deadline: the applications must arrive no later than Friday."
    }
  ],
  CHM: [
    {
      topic: "Separation of mixtures",
      text: "Which method is best for separating ethanol from water?",
      options: ["Filtration", "Fractional distillation", "Magnetisation", "Decantation"],
      answer: 1,
      explanation: "Ethanol and water are miscible liquids with different boiling points, so fractional distillation separates them."
    },
    {
      topic: "Chemical combination and stoichiometry",
      text: "How many moles of oxygen atoms are present in 2 moles of H₂O?",
      options: ["1 mole", "2 moles", "3 moles", "4 moles"],
      answer: 1,
      explanation: "Each water molecule contains one oxygen atom, so 2 moles of water contain 2 moles of oxygen atoms."
    },
    {
      topic: "Kinetic theory and gas laws",
      text: "At constant pressure, a gas is heated from 300 K to 450 K. If its initial volume is 2 dm³, what is its final volume?",
      options: ["1.33 dm³", "2.5 dm³", "3 dm³", "4 dm³"],
      answer: 2,
      explanation: "Charles' law gives V₁/T₁ = V₂/T₂. V₂ = 2 × 450/300 = 3 dm³."
    },
    {
      topic: "Atomic structure",
      text: "How many neutrons are in an atom of sodium-23 with atomic number 11?",
      options: ["11", "12", "23", "34"],
      answer: 1,
      explanation: "Number of neutrons = mass number − atomic number = 23 − 11 = 12."
    },
    {
      topic: "Periodic table and periodicity",
      text: "Which group of elements is generally known for having a full outer electron shell?",
      options: ["Alkali metals", "Halogens", "Noble gases", "Transition metals"],
      answer: 2,
      explanation: "Noble gases generally have full outer electron shells, which makes them relatively unreactive."
    },
    {
      topic: "Chemical bonding and molecular shapes",
      text: "What type of bond holds sodium and chlorine together in sodium chloride?",
      options: ["Ionic", "Metallic", "Hydrogen", "Coordinate covalent"],
      answer: 0,
      explanation: "Sodium transfers an electron to chlorine; the resulting oppositely charged ions attract through an ionic bond."
    },
    {
      topic: "Nuclear chemistry and radioactivity",
      text: "An unstable sample has a half-life of 4 hours. What fraction remains after 8 hours?",
      options: ["1/2", "1/3", "1/4", "1/8"],
      answer: 2,
      explanation: "Eight hours is two half-lives. The fraction remaining is (1/2)² = 1/4."
    },
    {
      topic: "Air",
      text: "Which gas makes up the largest proportion of dry air?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      answer: 1,
      explanation: "Nitrogen makes up about 78% of dry air."
    },
    {
      topic: "Water and hardness",
      text: "Which substance can remove temporary hardness from water by boiling?",
      options: ["Calcium hydrogencarbonate", "Sodium chloride", "Copper sulfate", "Silicon dioxide"],
      answer: 0,
      explanation: "Boiling decomposes dissolved calcium hydrogencarbonate, producing insoluble calcium carbonate that can be removed."
    },
    {
      topic: "Solubility",
      text: "A solution that can dissolve more solute at the same temperature is…",
      options: ["Saturated", "Unsaturated", "Supersaturated", "A suspension"],
      answer: 1,
      explanation: "An unsaturated solution contains less than the maximum amount of dissolved solute at that temperature."
    },
    {
      topic: "Acids, bases and salts",
      text: "What is the pH of a neutral aqueous solution at room temperature?",
      options: ["1", "5", "7", "14"],
      answer: 2,
      explanation: "At room temperature, a neutral aqueous solution has pH 7."
    },
    {
      topic: "Oxidation and reduction",
      text: "In the reaction Mg + CuO → MgO + Cu, which substance is reduced?",
      options: ["Magnesium", "Copper(II) oxide", "Magnesium oxide", "Oxygen"],
      answer: 1,
      explanation: "Copper(II) ions gain electrons to form copper metal, so copper(II) oxide is reduced."
    },
    {
      topic: "Electrolysis",
      text: "During electrolysis, positively charged ions move towards the…",
      options: ["Anode", "Cathode", "Electrolyte surface", "Salt bridge"],
      answer: 1,
      explanation: "Positive ions (cations) are attracted to the negatively charged cathode."
    },
    {
      topic: "Chemical energetics and equilibrium",
      text: "A reaction that releases heat to its surroundings is…",
      options: ["Endothermic", "Exothermic", "Reversible only", "At equilibrium"],
      answer: 1,
      explanation: "An exothermic reaction transfers heat from the reaction mixture to its surroundings."
    },
    {
      topic: "Rates of reaction",
      text: "Which change usually increases the rate of reaction between two solid reactants?",
      options: ["Using larger pieces of solid", "Lowering the temperature", "Increasing the exposed surface area", "Removing a reactant"],
      answer: 2,
      explanation: "Greater exposed surface area allows more frequent collisions between reacting particles."
    },
    {
      topic: "Metals and their compounds",
      text: "Which method is commonly used to extract iron from its ore in a blast furnace?",
      options: ["Reduction with carbon monoxide", "Filtration", "Simple distillation", "Crystallisation"],
      answer: 0,
      explanation: "Carbon monoxide reduces iron oxides to iron in the blast furnace."
    },
    {
      topic: "Organic chemistry",
      text: "What is the general formula for an alkane?",
      options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
      answer: 1,
      explanation: "Acyclic saturated alkanes have the general formula CₙH₂ₙ₊₂."
    },
    {
      topic: "Chemistry and industry",
      text: "Which raw material is the main source of ammonia in the Haber process?",
      options: ["Nitrogen from air", "Oxygen from water", "Chlorine from salt", "Carbon dioxide from limestone"],
      answer: 0,
      explanation: "The Haber process combines nitrogen, obtained from air, with hydrogen to produce ammonia."
    }
  ]
};

const questionExtensions = {
  MTH: [
    {
      topic: "Fractions, decimals and percentages",
      text: "Evaluate 3/4 − 2/5.",
      options: ["1/20", "7/20", "1/2", "7/9"],
      answer: 1,
      explanation: "Use a common denominator of 20: 3/4 = 15/20 and 2/5 = 8/20. The difference is 7/20."
    },
    {
      topic: "Indices, logarithms and surds",
      text: "Evaluate 27^(2/3).",
      options: ["3", "6", "9", "18"],
      answer: 2,
      explanation: "27^(2/3) = (cube root of 27)² = 3² = 9."
    },
    {
      topic: "Variation",
      text: "y varies inversely as x. If y = 12 when x = 2, what is y when x = 8?",
      options: ["3", "6", "24", "48"],
      answer: 0,
      explanation: "For inverse variation, xy is constant. The constant is 12 × 2 = 24, so y = 24/8 = 3."
    },
    {
      topic: "Inequalities",
      text: "Solve 3x − 4 < 11.",
      options: ["x < 5", "x > 5", "x < 7/3", "x > 7/3"],
      answer: 0,
      explanation: "Add 4 to both sides to get 3x < 15. Divide by 3: x < 5."
    },
    {
      topic: "Binary operations",
      text: "A binary operation is defined by a * b = a + b + ab. Find 2 * 3.",
      options: ["6", "8", "11", "13"],
      answer: 2,
      explanation: "Substitute a = 2 and b = 3: 2 * 3 = 2 + 3 + (2 × 3) = 11."
    },
    {
      topic: "Mensuration",
      text: "A rectangle is 10 cm long and 6 cm wide. What is its area?",
      options: ["16 cm²", "32 cm²", "60 cm²", "120 cm²"],
      answer: 2,
      explanation: "Area of a rectangle = length × width = 10 × 6 = 60 cm²."
    },
    {
      topic: "Coordinate geometry",
      text: "Find the distance between the points (1, 2) and (4, 6).",
      options: ["4", "5", "6", "7"],
      answer: 1,
      explanation: "Distance = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = 5 units."
    },
    {
      topic: "Trigonometry",
      text: "In a right-angled triangle, the opposite and adjacent sides to angle θ are 6 cm and 8 cm. What is tan θ?",
      options: ["3/4", "4/3", "3/5", "4/5"],
      answer: 0,
      explanation: "tan θ = opposite ÷ adjacent = 6/8 = 3/4."
    },
    {
      topic: "Differentiation",
      text: "Differentiate y = x³ − 4x with respect to x.",
      options: ["3x² − 4", "x² − 4", "3x − 4", "x⁴ − 4"],
      answer: 0,
      explanation: "Apply the power rule term by term: d(x³)/dx = 3x² and d(−4x)/dx = −4."
    },
    {
      topic: "Integration",
      text: "Find ∫(2x + 3) dx.",
      options: ["x² + 3x + C", "2 + 3x + C", "x² + 3 + C", "2x² + 3x + C"],
      answer: 0,
      explanation: "Integrate each term: ∫2x dx = x² and ∫3 dx = 3x. Include the constant C."
    },
    {
      topic: "Measures of location and dispersion",
      text: "Find the median of 3, 7, 2, 8 and 10.",
      options: ["3", "5", "7", "8"],
      answer: 2,
      explanation: "Arrange the values in order: 2, 3, 7, 8, 10. The middle value is 7."
    },
    {
      topic: "Probability",
      text: "A bag contains 3 red and 2 blue counters. What is the probability of selecting a red counter?",
      options: ["2/5", "3/5", "1/2", "3/2"],
      answer: 1,
      explanation: "There are 3 red counters out of 5 counters in total, so the probability is 3/5."
    }
  ],
  PHY: [
    {
      topic: "Measurements and units",
      text: "What is the SI unit of density?",
      options: ["kg m⁻³", "kg m⁻²", "N m⁻¹", "m³ kg⁻¹"],
      answer: 0,
      explanation: "Density is mass divided by volume, so its SI unit is kg/m³."
    },
    {
      topic: "Scalars and vectors",
      text: "Which quantity is a vector?",
      options: ["Distance", "Speed", "Mass", "Displacement"],
      answer: 3,
      explanation: "Displacement has both magnitude and direction, so it is a vector."
    },
    {
      topic: "Elasticity",
      text: "A spring of force constant 300 N/m is stretched by a force of 15 N. What is its extension?",
      options: ["0.02 m", "0.05 m", "5 m", "20 m"],
      answer: 1,
      explanation: "Hooke's law gives F = kx, so x = F/k = 15/300 = 0.05 m."
    },
    {
      topic: "Pressure and liquids",
      text: "Find the pressure due to water 0.2 m below its surface. Take density as 1,000 kg/m³ and g as 10 m/s².",
      options: ["200 Pa", "2,000 Pa", "5,000 Pa", "20,000 Pa"],
      answer: 1,
      explanation: "Liquid pressure p = ρgh = 1,000 × 10 × 0.2 = 2,000 Pa."
    },
    {
      topic: "Quantity of heat and change of state",
      text: "How much heat raises 0.5 kg of water by 10°C? Use c = 4,200 J kg⁻¹ °C⁻¹.",
      options: ["2,100 J", "4,200 J", "21,000 J", "42,000 J"],
      answer: 2,
      explanation: "Q = mcΔT = 0.5 × 4,200 × 10 = 21,000 J."
    },
    {
      topic: "Waves and sound",
      text: "A wave has a frequency of 50 Hz and a wavelength of 0.4 m. What is its speed?",
      options: ["20 m/s", "50 m/s", "125 m/s", "200 m/s"],
      answer: 0,
      explanation: "Wave speed = frequency × wavelength = 50 × 0.4 = 20 m/s."
    },
    {
      topic: "Light and optical instruments",
      text: "A converging lens has a focal length of 0.5 m. What is its power?",
      options: ["0.5 D", "1 D", "2 D", "5 D"],
      answer: 2,
      explanation: "Lens power P = 1/f when f is in metres. P = 1/0.5 = 2 dioptres."
    },
    {
      topic: "Electric cells and current electricity",
      text: "Two resistors of 2 Ω and 4 Ω are connected in series to a 12 V supply. What current flows?",
      options: ["1 A", "2 A", "3 A", "6 A"],
      answer: 1,
      explanation: "The total series resistance is 2 + 4 = 6 Ω. By Ohm's law, I = 12/6 = 2 A."
    },
    {
      topic: "Electrostatics and capacitors",
      text: "A 2 μF capacitor is connected to a 12 V supply. What charge does it store?",
      options: ["6 μC", "14 μC", "24 μC", "48 μC"],
      answer: 2,
      explanation: "Charge Q = capacitance × voltage = 2 μF × 12 V = 24 μC."
    },
    {
      topic: "Gravitational field",
      text: "What is the gravitational potential energy gained by a 2 kg object lifted 5 m? Take g = 10 m/s².",
      options: ["10 J", "25 J", "50 J", "100 J"],
      answer: 3,
      explanation: "Potential energy gained = mgh = 2 × 10 × 5 = 100 J."
    },
    {
      topic: "Simple harmonic motion",
      text: "A pendulum makes 20 complete oscillations in 10 seconds. What is its frequency?",
      options: ["0.5 Hz", "2 Hz", "10 Hz", "20 Hz"],
      answer: 1,
      explanation: "Frequency = number of oscillations ÷ time = 20/10 = 2 Hz."
    },
    {
      topic: "Elementary modern physics",
      text: "When a nucleus emits an alpha particle, its mass number and proton number change by…",
      options: ["−4 and −2", "−2 and −4", "+4 and +2", "0 and −1"],
      answer: 0,
      explanation: "An alpha particle contains two protons and two neutrons, so the mass number falls by 4 and proton number by 2."
    }
  ],
  ENG: [
    {
      topic: "Comprehension",
      passage: "At first, the new community library was quiet. A few residents donated books, while volunteers repaired shelves and painted the walls. When it opened, children came after school to read and use the computers. Within months, adults were also attending evening lessons. The library had become more than a room of books: it was a place where neighbours shared skills and helped one another.",
      text: "What was one result of the library opening?",
      options: ["The volunteers stopped helping.", "Children and adults began using it for learning.", "The computers were removed.", "The residents closed the library."],
      answer: 1,
      explanation: "The passage says children came to read and use computers, and adults attended evening lessons."
    },
    {
      topic: "Comprehension",
      passage: "At first, the new community library was quiet. A few residents donated books, while volunteers repaired shelves and painted the walls. When it opened, children came after school to read and use the computers. Within months, adults were also attending evening lessons. The library had become more than a room of books: it was a place where neighbours shared skills and helped one another.",
      text: "The phrase “more than a room of books” suggests that the library…",
      options: ["had no books left.", "served as a community learning centre.", "was too small for visitors.", "was used only in the evening."],
      answer: 1,
      explanation: "The final sentence explains that neighbours used it to share skills and help one another."
    },
    {
      topic: "Cloze test",
      passage: "A good revision plan helps candidates use their time ___. It is wise to take short breaks ___ studying for long periods. Learners should also test themselves ___ merely rereading their notes.",
      text: "Choose the word that best completes the first gap.",
      options: ["carelessly", "effectively", "rarely", "suddenly"],
      answer: 1,
      explanation: "“Effectively” means in a way that produces a useful result, which fits the advice about a revision plan."
    },
    {
      topic: "Cloze test",
      passage: "A good revision plan helps candidates use their time ___. It is wise to take short breaks ___ studying for long periods. Learners should also test themselves ___ merely rereading their notes.",
      text: "Choose the word that best completes the second gap.",
      options: ["while", "because", "instead of", "unless"],
      answer: 0,
      explanation: "“Take short breaks while studying” is the correct construction."
    },
    {
      topic: "Cloze test",
      passage: "A good revision plan helps candidates use their time ___. It is wise to take short breaks ___ studying for long periods. Learners should also test themselves ___ merely rereading their notes.",
      text: "Choose the phrase that best completes the final gap.",
      options: ["rather than", "as soon as", "in spite", "as well"],
      answer: 0,
      explanation: "“Test themselves rather than merely rereading” correctly contrasts two study methods."
    },
    {
      topic: "Synonyms",
      text: "Choose the word nearest in meaning to “reluctant.”",
      options: ["Unwilling", "Eager", "Careless", "Certain"],
      answer: 0,
      explanation: "“Reluctant” means unwilling or hesitant to do something."
    },
    {
      topic: "Antonyms",
      text: "Choose the word opposite in meaning to “scarce.”",
      options: ["Rare", "Limited", "Abundant", "Insufficient"],
      answer: 2,
      explanation: "“Scarce” means in short supply; “abundant” means plentiful."
    },
    {
      topic: "Homonyms",
      text: "Which word is a homophone of “principal” when it means a school head?",
      options: ["Principle", "Prince", "Principally", "Printer"],
      answer: 0,
      explanation: "“Principal” and “principle” are pronounced alike but have different meanings and spellings."
    },
    {
      topic: "Sentence interpretation",
      text: "“Although Tunde was tired, he completed the assignment.” What does this sentence imply?",
      options: ["Tunde did not begin the assignment.", "Tunde completed it despite being tired.", "The assignment made Tunde tired after he finished.", "Tunde asked someone else to do it."],
      answer: 1,
      explanation: "“Although” introduces a contrast: Tunde was tired, but he still completed the work."
    },
    {
      topic: "Grammar and concord",
      text: "Choose the correct verb: “Each of the players ___ a certificate.”",
      options: ["receive", "receives", "have received", "were receiving"],
      answer: 1,
      explanation: "“Each” is singular, so it takes the singular verb “receives.”"
    },
    {
      topic: "Punctuation and spelling",
      text: "Choose the correctly spelt word.",
      options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
      answer: 1,
      explanation: "The correct spelling is “accommodation,” with two c's and two m's."
    },
    {
      topic: "Idioms and figurative language",
      text: "If someone says “Ada hit the nail on the head,” what do they mean?",
      options: ["She damaged a tool.", "She described the situation exactly.", "She made a careless mistake.", "She finished the work late."],
      answer: 1,
      explanation: "The idiom means to say or identify exactly the right thing."
    },
    {
      topic: "Rhymes and homophones",
      text: "Which word rhymes with “bright”?",
      options: ["Brought", "Bite", "Bread", "Breath"],
      answer: 1,
      explanation: "“Bright” and “bite” share the same final sound."
    },
    {
      topic: "Word stress and intonation",
      text: "Which syllable carries the main stress in “photographic”?",
      options: ["The first", "The second", "The third", "The fourth"],
      answer: 2,
      explanation: "The usual pronunciation is pho-to-GRAPH-ic, with the main stress on the third syllable."
    }
  ],
  CHM: [
    {
      topic: "Chemical combination and stoichiometry",
      text: "How many moles are in 36 g of water? (H = 1, O = 16)",
      options: ["1 mol", "2 mol", "18 mol", "36 mol"],
      answer: 1,
      explanation: "The molar mass of H₂O is 18 g/mol. Amount = 36/18 = 2 mol."
    },
    {
      topic: "Atomic structure",
      text: "A magnesium ion, Mg²⁺, has 12 protons. How many electrons does it have?",
      options: ["10", "12", "14", "24"],
      answer: 0,
      explanation: "A 2+ ion has lost two electrons. It has 12 − 2 = 10 electrons."
    },
    {
      topic: "Periodic table and periodicity",
      text: "What generally happens to atomic radius down a group in the periodic table?",
      options: ["It decreases because shells are removed.", "It increases because additional electron shells are occupied.", "It stays exactly the same.", "It becomes zero."],
      answer: 1,
      explanation: "Each step down a group adds an occupied electron shell, so the atomic radius generally increases."
    },
    {
      topic: "Chemical bonding and molecular shapes",
      text: "What type of bonding is present in a piece of copper?",
      options: ["Ionic", "Metallic", "Simple molecular", "Hydrogen"],
      answer: 1,
      explanation: "Copper atoms in the solid are held together by metallic bonding involving delocalised electrons."
    },
    {
      topic: "Water and hardness",
      text: "Which method can remove temporary hardness from water?",
      options: ["Boiling", "Adding sand", "Freezing", "Using a magnet"],
      answer: 0,
      explanation: "Boiling decomposes dissolved calcium and magnesium hydrogencarbonates, removing temporary hardness."
    },
    {
      topic: "Solubility",
      text: "A saturated solution at a given temperature is one that…",
      options: ["contains no dissolved solute.", "can dissolve unlimited solute.", "contains the maximum amount of dissolved solute at that temperature.", "contains only a solvent."],
      answer: 2,
      explanation: "A saturated solution contains as much dissolved solute as it can hold at that temperature."
    },
    {
      topic: "Acids, bases and salts",
      text: "What are the products when hydrochloric acid reacts with sodium hydroxide?",
      options: ["Sodium chloride and water", "Sodium and chlorine", "Hydrogen and oxygen", "Sodium oxide and hydrogen"],
      answer: 0,
      explanation: "Acid-base neutralisation forms a salt and water: HCl + NaOH → NaCl + H₂O."
    },
    {
      topic: "Oxidation and reduction",
      text: "In a redox reaction, oxidation can be defined as…",
      options: ["gain of electrons.", "loss of electrons.", "gain of neutrons.", "loss of protons only."],
      answer: 1,
      explanation: "Oxidation is loss of electrons; reduction is gain of electrons."
    },
    {
      topic: "Electrolysis",
      text: "During electrolysis of molten sodium chloride, what forms at the cathode?",
      options: ["Chlorine gas", "Sodium metal", "Oxygen gas", "Hydrogen gas"],
      answer: 1,
      explanation: "Sodium ions gain electrons at the cathode and form sodium metal."
    },
    {
      topic: "Chemical energetics and equilibrium",
      text: "For the Haber equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the effect of increasing pressure?",
      options: ["It favours ammonia formation.", "It favours nitrogen and hydrogen only.", "It has no effect because there are equal gas molecules.", "It stops the reaction."],
      answer: 0,
      explanation: "The forward reaction has fewer gas molecules (2 rather than 4), so increased pressure favours ammonia formation."
    },
    {
      topic: "Rates of reaction",
      text: "How does a suitable catalyst increase the rate of a reaction?",
      options: ["It raises the activation energy.", "It provides an alternative pathway with lower activation energy.", "It permanently increases the amount of product.", "It is used up to form the products."],
      answer: 1,
      explanation: "A catalyst provides an alternative reaction pathway with lower activation energy and is not used up overall."
    },
    {
      topic: "Organic chemistry",
      text: "What is the general formula for an open-chain alkane?",
      options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙHₙ", "CₙH₂ₙ₋₂"],
      answer: 1,
      explanation: "A saturated open-chain alkane has the general formula CₙH₂ₙ₊₂."
    }
  ]
};

subjects.forEach((subject) => {
  subject.questions.forEach((question) => {
    if (question.topic.startsWith("Numbers Bases")) question.topic = "Number bases";
    if (question.topic === "Grammar") question.topic = "Grammar and concord";
    if (question.topic === "Vocabulary") question.topic = "Synonyms";
    if (question.topic === "Punctuation") question.topic = "Punctuation and spelling";
    if (subject.code === "CHM" && question.topic === "Elements") question.topic = "Periodic table and periodicity";
    if (subject.code === "CHM" && question.topic === "Acids and bases") question.topic = "Acids, bases and salts";
    if (subject.code === "PHY" && question.topic === "Electricity") question.topic = "Electric cells and current electricity";
    if (subject.code === "PHY" && question.topic === "Forces") question.topic = "Equilibrium of forces";
  });
  subject.questions.push(...extraQuestions[subject.code]);
  subject.questions.push(...questionExtensions[subject.code]);
  subject.topics = syllabusTopics[subject.code];
});

const storageKey = "study-space-progress-v1";
const previewUsernameStorageKey = "study-space-preview-username-v1";
const emptyProgress = () => ({
  answered: 0,
  correct: 0,
  streak: 0,
  lastStudyDate: "",
  bySubject: {},
  topicStats: {}
});

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || typeof saved !== "object") return emptyProgress();
    return {
      ...emptyProgress(),
      ...saved,
      answered: Number.isFinite(saved.answered) ? saved.answered : 0,
      correct: Number.isFinite(saved.correct) ? saved.correct : 0,
      streak: Number.isFinite(saved.streak) ? saved.streak : 0,
      bySubject: saved.bySubject && typeof saved.bySubject === "object" ? saved.bySubject : {},
      topicStats: saved.topicStats && typeof saved.topicStats === "object" ? saved.topicStats : {}
    };
  } catch (error) {
    console.warn("Could not load saved quiz progress.", error);
    return emptyProgress();
  }
}

let progress = loadProgress();
let currentSubject = subjects[0];
let currentQuestionIndex = 0;
let sessionCorrect = 0;
let answerLocked = false;
let activeQuestions = [];
let activeMode = "Topic practice";
let activeSubject = currentSubject;

const dashboardPage = document.querySelector("#dashboard-page");
const learnPage = document.querySelector("#learn-page");
const progressPage = document.querySelector("#progress-page");
const setupPage = document.querySelector("#subject-setup-page");
const quizPage = document.querySelector("#quiz-page");
const resultsPage = document.querySelector("#results-page");
const subjectGrid = document.querySelector("#subject-grid");
const navLinks = document.querySelectorAll(".nav-link");
const topicSelect = document.querySelector("#topic-select");
const authScreen = document.querySelector("#auth-screen");
const appShell = document.querySelector("#app-shell");
const authForm = document.querySelector("#auth-form");
const authMessage = document.querySelector("#auth-message");
const authSubmit = document.querySelector("#auth-submit");
let authMode = "signin";
let firebaseAuth = null;
let previewMode = false;
let authActionInProgress = false;

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function selectDiverseQuestions(questions, count) {
  const groups = new Map();
  questions.forEach((question) => {
    const groupKey = `${question.subjectCode || ""}:${question.topic}`;
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey).push(question);
  });

  const shuffledGroups = shuffle([...groups.values()].map((group) => shuffle(group)));
  const selected = [];
  let groupIndex = 0;
  while (selected.length < count && shuffledGroups.some((group) => group.length)) {
    const group = shuffledGroups[groupIndex % shuffledGroups.length];
    if (group.length) selected.push(group.pop());
    groupIndex += 1;
  }
  return selected;
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch (error) {
    console.warn("Could not save quiz progress in this browser.", error);
  }
}

function getSubjectProgress(subject) {
  const subjectProgress = progress.bySubject[subject.code];
  return subjectProgress && Number.isFinite(subjectProgress.answered) ? subjectProgress : { answered: 0, correct: 0 };
}

function renderDashboard() {
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  document.querySelector("#answered-count").textContent = progress.answered;
  document.querySelector("#correct-count").textContent = progress.correct;
  document.querySelector("#accuracy-count").innerHTML = `${accuracy}<span class="small-percent">%</span>`;
  document.querySelector("#streak-count").textContent = `${progress.streak} ${progress.streak === 1 ? "day" : "days"} streak`;
  subjectGrid.innerHTML = subjects.map((subject) => {
    const subjectProgress = getSubjectProgress(subject);
    const percent = subjectProgress.answered ? Math.round((subjectProgress.correct / subjectProgress.answered) * 100) : 0;
    return `
      <article class="subject-card" style="--subject-color: ${subject.color}">
        <div class="subject-top">
          <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
          <span class="subject-tag">${subject.code}</span>
        </div>
        <h3>${subject.name}</h3>
        <p class="subject-description">${subject.description}</p>
        <div class="subject-bottom">
          <div class="subject-progress" aria-label="${percent}% accuracy across ${subjectProgress.answered} answered">
            <div class="subject-progress-track"><span style="width: ${percent}%"></span></div>
            <small>${subjectProgress.answered ? `${percent}%` : "New"}</small>
          </div>
          <button class="subject-start" data-subject="${subject.code}">Start quiz <span aria-hidden="true">→</span></button>
        </div>
      </article>`;
  }).join("");
  const today = new Date();
  document.querySelector("#today-label").textContent = today.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

function renderLearnPage() {
  document.querySelector("#course-grid").innerHTML = subjects.map((subject) => {
    const availableTopics = new Set(subject.questions.map((question) => question.topic));
    return `
      <article class="course-card" style="--subject-color: ${subject.color}">
        <div class="course-card-heading">
          <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
          <div><h2>${subject.name}</h2><p>${availableTopics.size} of ${subject.topics.length} syllabus topics have practice questions</p></div>
        </div>
        <div class="course-topic-list">
          ${subject.topics.map((topic, index) => {
            const count = subject.questions.filter((question) => question.topic === topic).length;
            return `<button class="course-topic" type="button" data-course-subject="${subject.code}" data-topic-index="${index}" ${count ? "" : "disabled"}>${topic}<small>${count ? `${count} Q` : "Soon"}</small></button>`;
          }).join("")}
        </div>
      </article>`;
  }).join("");
}

function renderProgressPage() {
  document.querySelector("#progress-summary").innerHTML = `
    <article class="progress-summary-card"><span>QUESTIONS ANSWERED</span><strong>${progress.answered}</strong></article>
    <article class="progress-summary-card"><span>CORRECT ANSWERS</span><strong>${progress.correct}</strong></article>
    <article class="progress-summary-card"><span>DAY STREAK</span><strong>${progress.streak}</strong></article>`;
  document.querySelector("#readiness-list").innerHTML = subjects.map((subject) => {
    const subjectProgress = getSubjectProgress(subject);
    const accuracy = subjectProgress.answered ? Math.round((subjectProgress.correct / subjectProgress.answered) * 100) : 0;
    const practicedTopics = subject.topics.filter((topic) => {
      const topicProgress = progress.topicStats[`${subject.code}:${topic}`];
      return topicProgress && topicProgress.answered > 0;
    }).length;
    const coverage = subject.topics.length ? Math.round((practicedTopics / subject.topics.length) * 100) : 0;
    return `
      <article class="readiness-row" style="--subject-color: ${subject.color}">
        <div class="readiness-subject"><strong>${subject.name}</strong><span>${practicedTopics}/${subject.topics.length} topics practised · ${subjectProgress.answered} answers · ${accuracy}% accuracy</span></div>
        <div class="readiness-track" aria-label="${coverage}% of syllabus topics practised"><span style="width: ${coverage}%; background: ${subject.color}"></span></div>
        <span class="readiness-percent">${coverage}%</span>
      </article>`;
  }).join("");
}

function showDashboard(section = "home") {
  [dashboardPage, learnPage, progressPage, setupPage, quizPage, resultsPage].forEach((page) => page.classList.add("hidden"));
  const visiblePage = section === "learn" ? learnPage : section === "progress" ? progressPage : dashboardPage;
  visiblePage.classList.remove("hidden");
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.page === section));
  document.querySelector("#breadcrumb-page").textContent = section.toUpperCase();
  if (section === "learn") renderLearnPage();
  if (section === "progress") renderProgressPage();
  if (section === "home") renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSubjectSetup(subject) {
  activeSubject = subject;
  [dashboardPage, learnPage, progressPage].forEach((page) => page.classList.add("hidden"));
  setupPage.classList.remove("hidden");
  quizPage.classList.add("hidden");
  resultsPage.classList.add("hidden");
  document.querySelector("#breadcrumb-page").textContent = subject.code;
  document.querySelector("#setup-title").textContent = `${subject.name} practice`;
  document.querySelector("#setup-description").textContent = subject.description;
  const availableTopics = new Set(subject.questions.map((question) => question.topic));
  topicSelect.innerHTML = [
    '<option value="">Choose a syllabus topic</option>',
    ...subject.topics.map((topic) => {
      const available = availableTopics.has(topic);
      return `<option value="${topic}" ${available ? "" : "disabled"}>${topic}${available ? "" : " — coming soon"}</option>`;
    })
  ].join("");
  const englishReadingNote = subject.code === "ENG"
    ? " Questions on The Lekki Headmaster have not been added yet."
    : "";
  document.querySelector("#coverage-note").textContent =
    `${subject.questions.length} original practice questions are currently available across ${availableTopics.size} syllabus topic${availableTopics.size === 1 ? "" : "s"}. Other syllabus topics are listed and will be added in stages.${englishReadingNote}`;
  updateTopicAvailability();
  navLinks.forEach((link) => link.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateTopicAvailability() {
  const topic = topicSelect.value;
  const questionCount = activeSubject.questions.filter((question) => question.topic === topic).length;
  const startButton = document.querySelector("#start-topic");
  startButton.disabled = !questionCount;
  document.querySelector("#topic-availability").textContent = topic
    ? `${questionCount} question${questionCount === 1 ? "" : "s"} available · up to 10 per practice session`
    : "Choose an available topic to see the questions.";
}

function startQuiz(subject, questions, mode) {
  activeSubject = subject;
  currentSubject = subject || { name: "Mixed subjects", code: "MIX" };
  activeQuestions = questions.map((question) => ({
    ...question,
    subjectCode: question.subjectCode || subject?.code
  }));
  activeMode = mode;
  currentQuestionIndex = 0;
  sessionCorrect = 0;
  [dashboardPage, learnPage, progressPage].forEach((page) => page.classList.add("hidden"));
  setupPage.classList.add("hidden");
  resultsPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  document.querySelector("#breadcrumb-page").textContent = currentSubject.code;
  document.querySelector("#quiz-title").textContent = currentSubject.name;
  document.querySelector("#quiz-subject-label").textContent = `${currentSubject.code} · ${mode.toUpperCase()}`;
  navLinks.forEach((link) => link.classList.remove("active"));
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = activeQuestions[currentQuestionIndex];
  const total = activeQuestions.length;
  answerLocked = false;
  document.querySelector("#question-count").textContent = `QUESTION ${currentQuestionIndex + 1} OF ${total}`;
  document.querySelector("#question-progress").style.width = `${(currentQuestionIndex / total) * 100}%`;
  const questionSubject = subjects.find((subject) => subject.code === question.subjectCode);
  document.querySelector("#question-topic").textContent = currentSubject.code === "MIX"
    ? `${questionSubject.name} · ${question.topic}`
    : question.topic;
  const passage = document.querySelector("#question-passage");
  passage.textContent = question.passage || "";
  passage.classList.toggle("hidden", !question.passage);
  document.querySelector("#question-text").textContent = question.text;
  document.querySelector("#answer-list").innerHTML = question.options.map((option, index) => `
    <button class="answer-option" data-answer="${index}">
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    </button>`).join("");
  const feedback = document.querySelector("#answer-feedback");
  feedback.classList.add("hidden");
  feedback.classList.remove("wrong");
  document.querySelector("#next-question").classList.add("hidden");
  document.querySelector("#session-correct").textContent = sessionCorrect;
  document.querySelector("#session-progress").style.width = `${(currentQuestionIndex / total) * 100}%`;
  document.querySelector("#session-caption").textContent = `${total - currentQuestionIndex} ${total - currentQuestionIndex === 1 ? "question" : "questions"} left in this session.`;
}

function recordAnswer(isCorrect) {
  progress.answered += 1;
  if (isCorrect) {
    progress.correct += 1;
    sessionCorrect += 1;
  }
  const questionSubject = subjects.find((subject) => subject.code === activeQuestions[currentQuestionIndex].subjectCode);
  const subjectProgress = getSubjectProgress(questionSubject);
  progress.bySubject[questionSubject.code] = {
    answered: subjectProgress.answered + 1,
    correct: subjectProgress.correct + (isCorrect ? 1 : 0)
  };
  const topicKey = `${questionSubject.code}:${activeQuestions[currentQuestionIndex].topic}`;
  const topicProgress = progress.topicStats[topicKey] || { answered: 0, correct: 0 };
  progress.topicStats[topicKey] = {
    answered: topicProgress.answered + 1,
    correct: topicProgress.correct + (isCorrect ? 1 : 0)
  };

  const localDateKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const today = localDateKey(new Date());
  if (progress.lastStudyDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = localDateKey(yesterday);
    progress.streak = progress.lastStudyDate === yesterdayKey ? progress.streak + 1 : 1;
    progress.lastStudyDate = today;
  }
  saveProgress();
  renderDashboard();
  renderProgressPage();
}

function chooseAnswer(answerIndex) {
  if (answerLocked) return;
  answerLocked = true;
  const question = activeQuestions[currentQuestionIndex];
  const isCorrect = answerIndex === question.answer;
  recordAnswer(isCorrect);

  document.querySelectorAll(".answer-option").forEach((button) => {
    const optionIndex = Number(button.dataset.answer);
    button.disabled = true;
    if (optionIndex === question.answer) button.classList.add("correct");
    if (optionIndex === answerIndex && !isCorrect) button.classList.add("incorrect");
  });

  const feedback = document.querySelector("#answer-feedback");
  feedback.innerHTML = `<strong>${isCorrect ? "That's right!" : "Not quite — here's why."}</strong>${question.explanation}`;
  feedback.classList.toggle("wrong", !isCorrect);
  feedback.classList.remove("hidden");
  document.querySelector("#question-progress").style.width = `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%`;
  document.querySelector("#session-correct").textContent = sessionCorrect;
  document.querySelector("#session-progress").style.width = `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%`;
  document.querySelector("#session-caption").textContent = isCorrect ? "Nice work — keep it up!" : "A useful step in your learning.";
  const nextButton = document.querySelector("#next-question");
  nextButton.innerHTML = currentQuestionIndex === activeQuestions.length - 1
    ? "See my results <span aria-hidden=\"true\">→</span>"
    : "Next question <span aria-hidden=\"true\">→</span>";
  nextButton.classList.remove("hidden");
}

function showResults() {
  quizPage.classList.add("hidden");
  resultsPage.classList.remove("hidden");
  const total = activeQuestions.length;
  const percent = Math.round((sessionCorrect / total) * 100);
  document.querySelector("#results-title").textContent = percent >= 70 ? "Fantastic work!" : percent >= 40 ? "Good effort!" : "Keep going!";
  document.querySelector("#results-subtitle").textContent = `${currentSubject.name} · ${activeMode}. Every question is progress.`;
  document.querySelector("#final-score").textContent = `${sessionCorrect}/${total}`;
  document.querySelector("#final-score-label").textContent = `correct · ${percent}%`;
  document.querySelector("#results-icon").textContent = percent >= 70 ? "✦" : "✓";
  document.querySelector("#breadcrumb-page").textContent = "RESULTS";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

subjectGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-subject]");
  if (!button) return;
  const selectedSubject = subjects.find((subject) => subject.code === button.dataset.subject);
  if (selectedSubject) openSubjectSetup(selectedSubject);
});

document.querySelector("#start-daily").addEventListener("click", () => {
  const mixedPool = subjects.flatMap((subject) =>
    subject.questions.map((question) => ({ ...question, subjectCode: subject.code }))
  );
  const firstRound = subjects.flatMap((subject) =>
    selectDiverseQuestions(
      subject.questions.map((question) => ({ ...question, subjectCode: subject.code })),
      2
    )
  );
  const selectedKeys = new Set(firstRound.map((question) => `${question.subjectCode}:${question.topic}:${question.text}`));
  const remaining = mixedPool.filter((question) =>
    !selectedKeys.has(`${question.subjectCode}:${question.topic}:${question.text}`)
  );
  const mixedQuestions = [...firstRound, ...selectDiverseQuestions(remaining, 10 - firstRound.length)];
  startQuiz(null, shuffle(mixedQuestions), "10-question mixed practice");
});

topicSelect.addEventListener("change", updateTopicAvailability);
document.querySelector("#start-topic").addEventListener("click", () => {
  const selectedTopic = topicSelect.value;
  const topicQuestions = activeSubject.questions.filter((question) => question.topic === selectedTopic);
  if (!topicQuestions.length) return;
  startQuiz(activeSubject, selectDiverseQuestions(topicQuestions, 10), `${selectedTopic} topic practice`);
});
document.querySelector("#start-subject-mock").addEventListener("click", () => {
  const mockQuestions = selectDiverseQuestions(activeSubject.questions, 10);
  startQuiz(activeSubject, mockQuestions, "10-question subject mock");
});
document.querySelector("#back-to-subjects").addEventListener("click", () => showDashboard("learn"));

document.querySelector("#answer-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button) chooseAnswer(Number(button.dataset.answer));
});

document.querySelector("#next-question").addEventListener("click", () => {
  if (currentQuestionIndex < activeQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
});

document.querySelector("#back-to-dashboard").addEventListener("click", () => showDashboard("learn"));
document.querySelector("#try-again").addEventListener("click", () => startQuiz(activeSubject, activeQuestions, activeMode));
document.querySelector("#see-subjects").addEventListener("click", () => showDashboard("learn"));
navLinks.forEach((link) => link.addEventListener("click", () => showDashboard(link.dataset.page)));

document.querySelector("#course-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-course-subject]");
  if (!button || button.disabled) return;
  const subject = subjects.find((item) => item.code === button.dataset.courseSubject);
  if (!subject) return;
  openSubjectSetup(subject);
  topicSelect.value = subject.topics[Number(button.dataset.topicIndex)];
  updateTopicAvailability();
});

function setAuthMessage(message, type = "") {
  authMessage.textContent = message;
  authMessage.className = `auth-message${type ? ` ${type}` : ""}`;
}

function setAuthMode(mode) {
  authMode = mode;
  const emailLabel = document.querySelector('label[for="auth-email"]');
  const emailInput = document.querySelector("#auth-email");
  const usernameLabel = document.querySelector("#auth-username-label");
  const usernameInput = document.querySelector("#auth-username");
  const passwordLabel = document.querySelector("#auth-password-label");
  const passwordInput = document.querySelector("#auth-password");
  const authSwitch = document.querySelector("#auth-switch");
  const forgotPassword = document.querySelector("#forgot-password");
  const backToSignin = document.querySelector("#auth-back-to-signin");
  const isRecoveryRequest = mode === "recovery-request";
  const signingUp = mode === "signup";

  document.querySelector("#auth-title").textContent = isRecoveryRequest
    ? "Reset your password"
    : signingUp
      ? "Create your account"
      : "Sign in to start practising";
  document.querySelector(".auth-panel-copy").textContent = isRecoveryRequest
    ? "We’ll email you a link to securely reset your password."
    : signingUp
      ? "Choose a username to personalize your study space."
      : "Use your email and password to open your account.";

  usernameLabel.classList.toggle("hidden", !signingUp);
  usernameInput.classList.toggle("hidden", !signingUp);
  usernameInput.required = signingUp;
  emailLabel.classList.remove("hidden");
  emailInput.classList.remove("hidden");
  emailInput.required = true;
  passwordLabel.classList.toggle("hidden", isRecoveryRequest);
  passwordInput.classList.toggle("hidden", isRecoveryRequest);
  passwordInput.required = !isRecoveryRequest;
  passwordLabel.textContent = "Password";
  passwordInput.minLength = 6;
  passwordInput.autocomplete = signingUp ? "new-password" : "current-password";
  passwordInput.value = "";

  authSubmit.innerHTML = `${isRecoveryRequest ? "Send reset link" : signingUp ? "Create account" : "Sign in"} <span aria-hidden="true">→</span>`;
  authSwitch.classList.toggle("hidden", isRecoveryRequest);
  forgotPassword.classList.toggle("hidden", mode !== "signin");
  backToSignin.classList.toggle("hidden", !isRecoveryRequest);
  setAuthMessage("");
}

function showAuthScreen(message = "") {
  previewMode = false;
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  if (authMode === "recovery-request") setAuthMode("signin");
  if (message) setAuthMessage(message, "error");
}

function showApp(user, preview = false, previewUsername = "") {
  previewMode = preview;
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  document.querySelector("#app-message").classList.add("hidden");
  const username = typeof user?.displayName === "string" ? user.displayName.trim() : "";
  const providers = new Set((user?.providerData || []).map((provider) => provider.providerId));
  const providerLabel = providers.has("google.com") ? "Google" : providers.has("password") ? "Email/Password" : "Signed in";
  document.querySelector("#profile-name").textContent = username || user?.email || previewUsername || (preview ? "Local preview" : "My study space");
  document.querySelector("#profile-status").textContent = preview
    ? "Local preview · progress saved on this device"
    : `${user?.email || providerLabel} · ${providerLabel} · progress saved on this device`;
  document.querySelector("#sign-out").textContent = preview ? "Exit preview" : "Sign out";
  renderDashboard();
  renderLearnPage();
  renderProgressPage();
}

function getFirebaseContinueUrl() {
  return new URL("./", window.location.href).toString();
}

function getAuthErrorMessage(error) {
  const messages = {
    "auth/account-exists-with-different-credential": "An account already exists with this email using a different sign-in method. Sign in with that method first.",
    "auth/email-already-in-use": "An account already exists with this email. Sign in instead, or use password reset if needed.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/invalid-credential": "That email and password combination was not recognized. Check them and try again.",
    "auth/invalid-login-credentials": "That email and password combination was not recognized. Check them and try again.",
    "auth/user-not-found": "That email and password combination was not recognized. Check them and try again.",
    "auth/wrong-password": "That email and password combination was not recognized. Check them and try again.",
    "auth/user-disabled": "This account has been disabled. Contact the site administrator for help.",
    "auth/weak-password": "Choose a stronger password with at least 6 characters.",
    "auth/too-many-requests": "There have been too many attempts. Please wait a while and try again.",
    "auth/network-request-failed": "Could not reach Firebase. Check your internet connection and try again.",
    "auth/popup-closed-by-user": "The Google sign-in window was closed before sign-in finished.",
    "auth/popup-blocked": "The Google sign-in popup was blocked. Trying the redirect sign-in instead.",
    "auth/unauthorized-domain": "This website address is not authorized in Firebase. Add korede-1ss.github.io under Authentication → Settings → Authorized domains.",
    "auth/operation-not-allowed": "This sign-in method is not enabled in Firebase Authentication settings.",
    "auth/invalid-api-key": "Firebase rejected the project API key. Check the Firebase web app configuration.",
    "auth/configuration-not-found": "Firebase Authentication is not configured for this project. Check the Firebase Console settings."
  };
  return messages[error?.code] || error?.message || "Authentication failed. Please try again.";
}

function setAuthBusy(isBusy) {
  authSubmit.disabled = isBusy;
  document.querySelector("#google-sign-in").disabled = isBusy;
}

async function initialiseAuth() {
  const config = window.STUDYSPACE_FIREBASE;
  if (!config?.apiKey || !config?.authDomain || !config?.projectId || !config?.appId) {
    setAuthMessage("Firebase is not configured. Check firebase-config.js.", "error");
    document.querySelector("#auth-note").textContent = "Preview usernames and progress are saved only in this browser. Add the Firebase web app configuration to firebase-config.js to enable account sign-in.";
    return;
  }
  if (!window.firebase?.initializeApp || !window.firebase?.auth) {
    setAuthMessage("Could not load Firebase Authentication. Check your internet connection, then reload this page.", "error");
    return;
  }

  try {
    const app = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(config);
    firebaseAuth = app.auth();
    await firebaseAuth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
    document.querySelector("#auth-note").textContent = "Preview usernames and progress are saved only in this browser. Account sign-in uses Firebase; quiz progress is currently stored on this device.";
    firebaseAuth.onAuthStateChanged((user) => {
      if (authActionInProgress) return;
      if (!user) {
        if (!previewMode) showAuthScreen();
        return;
      }
      const isPasswordAccount = user.providerData.some((provider) => provider.providerId === "password");
      if (isPasswordAccount && !user.emailVerified) {
        showAuthScreen("Please verify your email address using the link we sent you, then sign in.");
        authActionInProgress = true;
        firebaseAuth.signOut().catch((error) => {
          showAuthScreen(`Could not close the unverified session: ${getAuthErrorMessage(error)}`);
        }).finally(() => {
          authActionInProgress = false;
        });
        return;
      }
      showApp(user);
    }, (error) => {
      showAuthScreen(`Could not check your sign-in: ${getAuthErrorMessage(error)}`);
    });

    firebaseAuth.getRedirectResult().catch((error) => {
      if (error.code !== "auth/no-auth-event") setAuthMessage(getAuthErrorMessage(error), "error");
    });
  } catch (error) {
    showAuthScreen(`Could not initialize Firebase Authentication: ${getAuthErrorMessage(error)}`);
  }
}

document.querySelector("#auth-mode-toggle").addEventListener("click", () => {
  const signingUp = authMode === "signin";
  document.querySelector("#auth-switch-copy").textContent = signingUp ? "Already have an account?" : "New here?";
  document.querySelector("#auth-mode-toggle").textContent = signingUp ? "Sign in" : "Create an account";
  setAuthMode(signingUp ? "signup" : "signin");
});

document.querySelector("#forgot-password").addEventListener("click", () => setAuthMode("recovery-request"));
document.querySelector("#auth-back-to-signin").addEventListener("click", () => {
  setAuthMode("signin");
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!firebaseAuth) {
    setAuthMessage("Firebase Authentication is not ready. Reload the page and try again.", "error");
    return;
  }

  const formData = new FormData(authForm);
  const username = String(formData.get("username") || "").trim();
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password"));
  if (authMode === "signup" && (username.length < 2 || username.length > 30)) {
    setAuthMessage("Your username must be between 2 and 30 characters.", "error");
    document.querySelector("#auth-username").focus();
    return;
  }
  authActionInProgress = true;
  setAuthBusy(true);
  setAuthMessage(
    authMode === "signup" ? "Creating your account…" :
      authMode === "recovery-request" ? "Requesting a password reset…" : "Signing in…"
  );
  try {
    if (authMode === "signup") {
      const credential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      await credential.user.updateProfile({ displayName: username });
      try {
        await credential.user.sendEmailVerification({ url: getFirebaseContinueUrl() });
      } finally {
        await firebaseAuth.signOut();
      }
      document.querySelector("#auth-switch-copy").textContent = "New here?";
      document.querySelector("#auth-mode-toggle").textContent = "Create an account";
      setAuthMode("signin");
      setAuthMessage("Account created. Check your email to verify your address, then sign in.", "success");
    } else if (authMode === "recovery-request") {
      await firebaseAuth.sendPasswordResetEmail(email, { url: getFirebaseContinueUrl() });
      setAuthMessage("If an account exists for this email, a password reset link will arrive shortly.", "success");
    } else {
      const credential = await firebaseAuth.signInWithEmailAndPassword(email, password);
      if (!credential.user.emailVerified) {
        await firebaseAuth.signOut();
        setAuthMessage("Please verify your email using the link sent when you registered, then sign in again.", "error");
      } else {
        showApp(credential.user);
      }
    }
  } catch (error) {
    setAuthMessage(getAuthErrorMessage(error), "error");
  } finally {
    authActionInProgress = false;
    setAuthBusy(false);
  }
});

document.querySelector("#google-sign-in").addEventListener("click", async () => {
  if (!firebaseAuth) {
    setAuthMessage("Firebase Authentication is not ready. Reload the page and try again.", "error");
    return;
  }
  authActionInProgress = true;
  setAuthBusy(true);
  setAuthMessage("Opening Google sign-in…");
  const provider = new window.firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const credential = await firebaseAuth.signInWithPopup(provider);
    showApp(credential.user);
  } catch (error) {
    if (error.code === "auth/popup-blocked" || error.code === "auth/operation-not-supported-in-this-environment") {
      try {
        setAuthMessage("Redirecting to Google sign-in…");
        await firebaseAuth.signInWithRedirect(provider);
        return;
      } catch (redirectError) {
        setAuthMessage(getAuthErrorMessage(redirectError), "error");
      }
    } else {
      setAuthMessage(getAuthErrorMessage(error), "error");
    }
  } finally {
    authActionInProgress = false;
    setAuthBusy(false);
  }
});

document.querySelector("#preview-app").addEventListener("click", () => {
  const previewUsernameInput = document.querySelector("#preview-username");
  const previewUsernameLabel = document.querySelector("#preview-username-label");
  const previewButton = document.querySelector("#preview-app");
  if (previewUsernameInput.classList.contains("hidden")) {
    try {
      previewUsernameInput.value = localStorage.getItem(previewUsernameStorageKey) || "";
    } catch (error) {
      console.warn("Could not load the local preview username from this browser.", error);
    }
    previewUsernameLabel.classList.remove("hidden");
    previewUsernameInput.classList.remove("hidden");
    previewUsernameInput.focus();
    previewButton.textContent = "Start local preview";
    return;
  }

  const username = previewUsernameInput.value.trim();
  if (username && (username.length < 2 || username.length > 30)) {
    setAuthMessage("Your username must be between 2 and 30 characters, or leave it blank.", "error");
    previewUsernameInput.focus();
    return;
  }
  try {
    if (username) {
      localStorage.setItem(previewUsernameStorageKey, username);
    } else {
      localStorage.removeItem(previewUsernameStorageKey);
    }
  } catch (error) {
    console.warn("Could not save the local preview username in this browser.", error);
  }
  showApp(null, true, username);
});
document.querySelector("#sign-out").addEventListener("click", async () => {
  if (previewMode) {
    showAuthScreen();
    return;
  }
  if (!firebaseAuth) {
    showAuthScreen();
    return;
  }
  try {
    await firebaseAuth.signOut();
    showAuthScreen();
  } catch (error) {
    const appMessage = document.querySelector("#app-message");
    appMessage.textContent = `Could not sign out: ${getAuthErrorMessage(error)}`;
    appMessage.classList.remove("hidden");
  }
});

setAuthMode("signin");
renderDashboard();
renderLearnPage();
renderProgressPage();
initialiseAuth();