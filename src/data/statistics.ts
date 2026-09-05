```typescript
import { StatisticsTopic } from '../types';

export const statisticsTopics: StatisticsTopic[] = [
  {
    id: 'stat-1',
    title: 'Mean, Median, Mode',
    category: 'Descriptive Statistics',
    content: 'Measures of central tendency describe the center of a dataset.',
    formula: 'Mean (μ) = Σxᵢ / n\nMedian = middle value when sorted\nMode = most frequent value',
    example: 'Dataset: [2, 3, 3, 5, 7]\nMean = 20/5 = 4\nMedian = 3\nMode = 3',
    tags: ['descriptive', 'central-tendency', 'basics']
  },
  {
    id: 'stat-2',
    title: 'Variance and Standard Deviation',
    category: 'Descriptive Statistics',
    content: 'Measures of dispersion describe how spread out data points are from the mean.',
    formula: 'Population Variance (σ²) = Σ(xᵢ - μ)² / N\nSample Variance (s²) = Σ(xᵢ - x̄)² / (n-1)\nStandard Deviation (σ) = √Variance',
    example: 'Dataset: [2, 4, 4, 4, 5, 5, 7, 9]\nMean = 5\nVariance = 4\nStd Dev = 2',
    tags: ['descriptive', 'dispersion', 'basics']
  },
  {
    id: 'stat-3',
    title: 'Normal Distribution',
    category: 'Probability Distributions',
    content: 'The normal (Gaussian) distribution is the most important distribution in statistics. It\'s symmetric, bell-shaped, and defined by mean (μ) and standard deviation (σ).',
    formula: 'f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))\n\n68-95-99.7 Rule:\n• 68% within ±1σ\n• 95% within ±2σ\n• 99.7% within ±3σ',
    example: 'If heights ~ N(170, 10):\nP(160 < X < 180) ≈ 68%\nP(150 < X < 190) ≈ 95%',
    tags: ['distributions', 'normal', 'gaussian']
  },
  {
    id: 'stat-4',
    title: 'Central Limit Theorem',
    category: 'Sampling Theory',
    content: 'The Central Limit Theorem states that the sampling distribution of the sample mean approaches a normal distribution as the sample size gets larger, regardless of the population\'s distribution.',
    formula: 'If X₁, X₂, ..., Xₙ ~ iid with mean μ and variance σ²:\nX̄ ~ N(μ, σ²/n) as n → ∞\n\nStandard Error = σ / √n',
    example: 'Even if population is skewed, with n ≥ 30,\nthe sample mean distribution is approximately normal.',
    tags: ['sampling', 'clt', 'fundamental']
  },
  {
    id: 'stat-5',
    title: 'Hypothesis Testing - Z-test',
    category: 'Hypothesis Testing',
    content: 'Z-test is used when population variance is known and sample size is large (n ≥ 30). Tests whether a sample mean differs significantly from a population mean.',
    formula: 'H₀: μ = μ₀\nH₁: μ ≠ μ₀ (two-tailed)\n\nZ = (x̄ - μ₀) / (σ/√n)\n\nReject H₀ if |Z| > Z_(α/2)\n\nCommon critical values:\n• α = 0.05 → Z = 1.96\n• α = 0.01 → Z = 2.576',
    example: 'Test if mean height ≠ 170cm:\nSample: x̄=172, σ=10, n=100\nZ = (172-170)/(10/√100) = 2.0\n|2.0| > 1.96 → Reject H₀ at α=0.05',
    tags: ['hypothesis-testing', 'z-test', 'inference']
  },
  {
    id: 'stat-6',
    title: 'Hypothesis Testing - T-test',
    category: 'Hypothesis Testing',
    content: 'T-test is used when population variance is unknown and sample size is small (n < 30). Uses the t-distribution which has heavier tails than the normal distribution.',
    formula: 'One-sample t-test:\nt = (x̄ - μ₀) / (s/√n)\ndf = n - 1\n\nTwo-sample t-test:\nt = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)\n\nPaired t-test:\nt = d̄ / (s_d/√n)',
    example: 'Compare two groups:\nGroup A: x̄=85, s=10, n=25\nGroup B: x̄=80, s=12, n=30\nt = 5/√(100/25 + 144/30) = 1.56',
    tags: ['hypothesis-testing', 't-test', 'inference']
  },
  {
    id: 'stat-7',
    title: 'Chi-Square Test',
    category: 'Hypothesis Testing',
    content: 'Chi-square test assesses whether there is a significant association between two categorical variables (independence test) or whether observed frequencies differ from expected frequencies (goodness of fit).',
    formula: 'χ² = Σ(Oᵢ - Eᵢ)² / Eᵢ\n\nDegrees of freedom = (r-1)(c-1)\n\nReject H₀ if χ² > χ²_(α, df)\n\nH₀: Variables are independent\nH₁: Variables are dependent',
    example: 'Test independence of gender and preference:\nObserved: [[50, 30], [40, 80]]\nExpected: [[45, 35], [45, 75]]\nχ² = 25/45 + 25/35 + 25/45 + 25/75 = 2.31',
    tags: ['hypothesis-testing', 'chi-square', 'categorical']
  },
  {
    id: 'stat-8',
    title: 'P-value and Significance Level',
    category: 'Hypothesis Testing',
    content: 'The p-value is the probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true. A small p-value indicates strong evidence against H₀.',
    formula: 'p-value = P(Test Statistic ≥ observed | H₀ is true)\n\nDecision rule:\n• p < α → Reject H₀ (statistically significant)\n• p ≥ α → Fail to reject H₀\n\nCommon α levels: 0.05, 0.01, 0.001\n\nType I Error (α): False positive\nType II Error (β): False negative\nPower = 1 - β',
    example: 'If p = 0.03 and α = 0.05:\n0.03 < 0.05 → Reject H₀\nResult is statistically significant.\n\nIf p = 0.07 and α = 0.05:\n0.07 > 0.05 → Fail to reject H₀',
    tags: ['hypothesis-testing', 'p-value', 'significance']
  },
  {
    id: 'stat-9',
    title: 'Confidence Intervals',
    category: 'Estimation',
    content: 'A confidence interval provides a range of plausible values for a population parameter. A 95% CI means that if we repeated the sampling process many times, 95% of the intervals would contain the true parameter.',
    formula: 'CI = x̄ ± Z_(α/2) × (σ/√n)\n\nFor unknown σ (small n):\nCI = x̄ ± t_(α/2, n-1) × (s/√n)\n\nCommon Z values:\n• 90% CI: Z = 1.645\n• 95% CI: Z = 1.96\n• 99% CI: Z = 2.576',
    example: '95% CI for mean:\nx̄ = 50, σ = 10, n = 100\nCI = 50 ± 1.96 × (10/10)\nCI = 50 ± 1.96 = [48.04, 51.96]',
    tags: ['estimation', 'confidence-interval', 'inference']
  },
  {
    id: 'stat-10',
    title: 'Bayes\' Theorem',
    category: 'Probability',
    content: 'Bayes\' theorem describes the probability of an event based on prior knowledge of conditions that might be related to the event. It\'s fundamental in Bayesian statistics and many ML algorithms.',
    formula: 'P(A|B) = P(B|A) × P(A) / P(B)\n\nExpanded:\nP(A|B) = P(B|A) × P(A) / [P(B|A)×P(A) + P(B|¬A)×P(¬A)]\n\nWhere:\n• P(A|B) = Posterior\n• P(B|A) = Likelihood\n• P(A) = Prior\n• P(B) = Evidence',
    example: 'Disease test:\nP(Disease) = 0.01\nP(Positive|Disease) = 0.99\nP(Positive|No Disease) = 0.05\n\nP(Disease|Positive) = (0.99×0.01)/(0.99×0.01 + 0.05×0.99)\n= 0.0099/0.0594 = 0.167 (16.7%)',
    tags: ['probability', 'bayes', 'conditional']
  },
  {
    id: 'stat-11',
    title: 'A/B Testing',
    category: 'Experimental Design',
    content: 'A/B testing is a statistical method for comparing two versions (A and B) to determine which performs better. It\'s widely used in product development, marketing, and web optimization.',
    formula: 'Steps:\n1. Define hypothesis (H₀: no difference, H₁: difference exists)\n2. Determine sample size (power analysis)\n3. Randomly assign users to A or B\n4. Collect data and compute metrics\n5. Run statistical test (t-test, z-test, chi-square)\n6. Check p-value and confidence interval\n\nSample size: n = 2×(Z_(α/2) + Z_β)² × σ² / δ²',
    example: 'Test conversion rates:\nGroup A: 100/1000 = 10%\nGroup B: 120/1000 = 12%\n\nRun two-proportion z-test:\nz = (0.12-0.10)/√(0.11×0.89×(2/1000)) = 1.47\np = 0.14 → Not significant at α=0.05',
    tags: ['ab-testing', 'experimental', 'industry']
  },
  {
    id: 'stat-12',
    title: 'Correlation and Covariance',
    category: 'Descriptive Statistics',
    content: 'Covariance measures how two variables change together. Correlation is the normalized version that ranges from -1 to 1, indicating the strength and direction of the linear relationship.',
    formula: 'Cov(X,Y) = E[(X-μₓ)(Y-μᵧ)] = Σ(xᵢ-x̄)(yᵢ-ȳ)/(n-1)\n\nPearson Correlation:\nr = Cov(X,Y) / (σₓ × σᵧ)\n\nInterpretation:\nr = 1: Perfect positive\nr = 0: No linear relationship\nr = -1: Perfect negative',
    example: 'X = [1, 2, 3, 4, 5]\nY = [2, 4, 5, 4, 5]\nCov(X,Y) = 1.2\nσₓ = 1.58, σᵧ = 1.38\nr = 1.2/(1.58×1.38) = 0.56',
    tags: ['correlation', 'covariance', 'relationship']
  }
];
