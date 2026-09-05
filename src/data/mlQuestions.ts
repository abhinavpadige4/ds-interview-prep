```typescript
import { MLQuestion } from '../types';

export const mlQuestions: MLQuestion[] = [
  {
    id: 'ml-1',
    question: 'What is the bias-variance tradeoff?',
    answer: 'The bias-variance tradeoff is the fundamental tension in supervised learning between two sources of error:\n\n• Bias: Error from overly simplistic assumptions. High bias → underfitting (model misses relevant relations).\n• Variance: Error from sensitivity to small fluctuations in training data. High variance → overfitting (model captures noise).\n\nTotal Error = Bias² + Variance + Irreducible Error\n\nTo reduce bias: use more complex models, add features, reduce regularization.\nTo reduce variance: use more data, simplify model, increase regularization, use ensemble methods.\n\nThe goal is to find the sweet spot that minimizes total error.',
    category: 'Fundamentals',
    tags: ['bias-variance', 'fundamentals', 'overfitting']
  },
  {
    id: 'ml-2',
    question: 'Explain how Linear Regression works and its assumptions.',
    answer: 'Linear Regression models the relationship between features (X) and a continuous target (y) as a linear equation:\n\ny = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε\n\nEstimation methods:\n• Ordinary Least Squares (OLS): minimizes Σ(yᵢ - ŷᵢ)²\n• Gradient Descent: iteratively adjusts weights\n\nKey Assumptions:\n1. Linearity: relationship between X and y is linear\n2. Independence: residuals are independent\n3. Homoscedasticity: constant variance of residuals\n4. Normality: residuals are normally distributed\n5. No multicollinearity: features are not highly correlated\n\nRegularization variants:\n• Ridge (L2): adds λΣβ² → shrinks coefficients\n• Lasso (L1): adds λΣ|β| → can zero out coefficients (feature selection)\n• Elastic Net: combination of L1 and L2',
    category: 'Regression',
    tags: ['linear-regression', 'regression', 'ols']
  },
  {
    id: 'ml-3',
    question: 'How does Logistic Regression differ from Linear Regression?',
    answer: 'Key differences:\n\n1. Output: Linear regression predicts continuous values; logistic regression predicts probabilities (0 to 1).\n\n2. Link function: Logistic regression uses the sigmoid function:\n   σ(z) = 1/(1 + e^(-z)) where z = Xβ\n\n3. Loss function: Linear regression uses MSE; logistic regression uses log loss (cross-entropy):\n   L = -[y·log(ŷ) + (1-y)·log(1-ŷ)]\n\n4. Decision boundary: Logistic regression creates a probabilistic decision boundary at p = 0.5.\n\n5. Interpretation: Coefficients represent log-odds ratios. e^βᵢ = odds ratio for feature i.\n\nDespite the name, logistic regression is a classification algorithm, not regression.',
    category: 'Classification',
    tags: ['logistic-regression', 'classification', 'sigmoid']
  },
  {
    id: 'ml-4',
    question: 'Explain how Decision Trees work and how to prevent overfitting.',
    answer: 'Decision Trees split data recursively based on feature values to create a tree-like model of decisions.\n\nSplitting criteria:\n• Gini Impurity: 1 - Σpᵢ² (lower = purer)\n• Information Gain: reduction in entropy\n• Entropy: -Σpᵢ·log₂(pᵢ)\n• MSE reduction (for regression trees)\n\nPreventing overfitting:\n1. Pruning: Remove branches that provide little power (pre-pruning or post-pruning)\n2. Max depth: Limit tree depth\n3. Min samples per leaf: Require minimum samples to split\n4. Max features: Limit features considered at each split\n5. Ensemble methods: Random Forests, Gradient Boosting\n\nDecision trees are interpretable but prone to overfitting on their own.',
    category: 'Classification',
    tags: ['decision-trees', 'classification', 'overfitting']
  },
  {
    id: 'ml-5',
    question: 'What is Random Forest and how does it work?',
    answer: 'Random Forest is an ensemble method that builds multiple decision trees and aggregates their predictions.\n\nHow it works:\n1. Bootstrap sampling: Create multiple datasets by sampling with replacement\n2. Feature randomness: At each split, consider only a random subset of features (√p for classification, p/3 for regression)\n3. Build trees independently (no pruning needed)\n4. Aggregate: Majority vote (classification) or average (regression)\n\nAdvantages:\n• Reduces variance compared to single trees\n• Handles non-linear relationships\n• Provides feature importance\n• Robust to outliers and missing values\n• Less prone to overfitting\n\nHyperparameters:\n• n_estimators: number of trees\n• max_depth: maximum tree depth\n• max_features: features per split\n• min_samples_split/leaf',
    category: 'Ensemble Methods',
    tags: ['random-forest', 'ensemble', 'bagging']
  },
  {
    id: 'ml-6',
    question: 'Explain Gradient Boosting and XGBoost.',
    answer: 'Gradient Boosting builds trees sequentially, where each new tree corrects errors made by the previous ensemble.\n\nAlgorithm:\n1. Initialize with constant prediction (mean for regression)\n2. For each iteration:\n   a. Compute negative gradient (pseudo-residuals)\n   b. Fit a tree to the residuals\n   c. Update predictions: F(x) += learning_rate × tree(x)\n\nXGBoost improvements:\n• Regularization (L1/L2) to prevent overfitting\n• Second-order Taylor expansion for faster convergence\n• Handling missing values natively\n• Parallel processing for tree construction\n• Built-in cross-validation\n• Tree pruning with gamma parameter\n\nKey hyperparameters:\n• learning_rate: step size shrinkage\n• max_depth: tree depth\n• n_estimators: number of trees\n• subsample: fraction of samples per tree\n• colsample_bytree: fraction of features per tree',
    category: 'Ensemble Methods',
    tags: ['gradient-boosting', 'xgboost', 'ensemble']
  },
  {
    id: 'ml-7',
    question: 'What is Support Vector Machine (SVM)?',
    answer: 'SVM finds the optimal hyperplane that maximizes the margin between classes.\n\nKey concepts:\n• Margin: distance between hyperplane and nearest data points (support vectors)\n• Hard margin: perfect separation (no errors allowed)\n• Soft margin: allows some misclassifications (controlled by C parameter)\n\nKernel trick: Maps data to higher dimensions to make it linearly separable:\n• Linear: K(x,y) = x·y\n• Polynomial: K(x,y) = (x·y + c)^d\n• RBF (Gaussian): K(x,y) = exp(-γ||x-y||²)\n• Sigmoid: K(x,y) = tanh(γ·x·y + c)\n\nAdvantages: Effective in high dimensions, memory efficient, versatile kernels.\nDisadvantages: Slow on large datasets, sensitive to feature scaling, hard to interpret.\n\nHyperparameters:\n• C: regularization (higher = less regularization)\n• gamma: kernel coefficient (higher = more complex decision boundary)\n• kernel: type of kernel function',
    category: 'Classification',
    tags: ['svm', 'classification', 'kernel']
  },
  {
    id: 'ml-8',
    question: 'Explain K-Means Clustering.',
    answer: 'K-Means partitions data into k clusters by minimizing within-cluster variance.\n\nAlgorithm:\n1. Initialize k centroids randomly (or using k-means++)\n2. Assign each point to nearest centroid (Euclidean distance)\n3. Update centroids as mean of assigned points\n4. Repeat steps 2-3 until convergence\n\nObjective: Minimize Σᵢ Σⱼ ||xᵢⱼ - μₖ||² (within-cluster sum of squares)\n\nChoosing k:\n• Elbow method: plot inertia vs k, look for elbow\n• Silhouette score: measures cluster cohesion/separation\n• Domain knowledge\n\nPros: Simple, fast, scales well.\nCons: Requires specifying k, sensitive to initialization, assumes spherical clusters, sensitive to outliers.\n\nVariants: K-Medoids (PAM), Mini-Batch K-Means, Gaussian Mixture Models.',
    category: 'Clustering',
    tags: ['k-means', 'clustering', 'unsupervised']
  },
  {
    id: 'ml-9',
    question: 'What is DBSCAN and when to use it?',
    answer: 'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups together points that are closely packed and marks outliers as noise.\n\nParameters:\n• eps (ε): maximum distance between two points to be considered neighbors\n• min_samples: minimum points to form a dense region\n\nPoint types:\n• Core point: has ≥ min_samples within eps\n• Border point: within eps of a core point but not a core point itself\n• Noise point: neither core nor border\n\nAdvantages:\n• No need to specify number of clusters\n• Can find arbitrarily shaped clusters\n• Handles noise/outliers naturally\n• Works with any distance metric\n\nWhen to use:\n• Unknown number of clusters\n• Non-spherical cluster shapes\n• Data with noise/outliers\n• Spatial/geographic data\n\nDisadvantages: Struggles with varying densities, sensitive to eps parameter.',
    category: 'Clustering',
    tags: ['dbscan', 'clustering', 'density-based']
  },
  {
    id: 'ml-10',
    question: 'Explain how Neural Networks work.',
    answer: 'Neural Networks are composed of layers of interconnected neurons:\n\nArchitecture:\n• Input layer: receives features\n• Hidden layers: learn representations (can have multiple layers)\n• Output layer: produces predictions\n\nForward pass:\nz = Wx + b (linear transformation)\na = activation(z) (non-linear activation)\n\nCommon activations:\n• ReLU: max(0, x) — most common, avoids vanishing gradient\n• Sigmoid: 1/(1+e^(-x)) — outputs [0,1], for binary classification\n• Tanh: outputs [-1,1]\n• Softmax: for multi-class classification\n\nBackpropagation:\n1. Compute loss (MSE, cross-entropy)\n2. Compute gradients using chain rule\n3. Update weights: w = w - learning_rate × ∂L/∂w\n\nOptimizers: SGD, Momentum, Adam, RMSprop\n\nKey concepts: vanishing/exploding gradients, batch normalization, dropout, weight initialization.',
    category: 'Neural Networks',
    tags: ['neural-networks', 'deep-learning', 'backpropagation']
  },
  {
    id: 'ml-11',
    question: 'What is the vanishing gradient problem and how to solve it?',
    answer: 'The vanishing gradient problem occurs when gradients become extremely small during backpropagation in deep networks, causing weights in early layers to barely update.\n\nCauses:\n• Sigmoid/tanh activations squash gradients\n• Multiplication of many small numbers through layers\n• Poor weight initialization\n\nSolutions:\n1. ReLU activation: gradient is 1 for positive inputs\n2. LSTM/GRU: gated architectures preserve gradients\n3. Batch Normalization: stabilizes activations\n4. Residual Connections (ResNet): skip connections allow gradient flow\n5. Proper weight initialization: He initialization for ReLU, Xavier for sigmoid/tanh\n6. Gradient clipping: cap gradient values\n7. Use fewer hidden layers or wider networks',
    category: 'Neural Networks',
    tags: ['neural-networks', 'vanishing-gradient', 'deep-learning']
  },
  {
    id: 'ml-12',
    question: 'Explain Convolutional Neural Networks (CNNs).',
    answer: 'CNNs are specialized neural networks for processing grid-like data (images).\n\nKey components:\n1. Convolutional Layer: applies filters/kernels to detect features\n   • Filters slide across input, computing dot products\n   • Learn hierarchical features (edges → textures → objects)\n\n2. Pooling Layer: reduces spatial dimensions\n   • Max pooling: takes maximum value in window\n   • Average pooling: takes average value\n\n3. Fully Connected Layer: classification/regression\n\nArchitecture pattern:\nInput → [Conv → ReLU → Pool] × n → Flatten → FC → Output\n\nKey concepts:\n• Stride: step size of filter movement\n• Padding: add zeros around input to control output size\n• Receptive field: region of input influencing a neuron\n• Parameter sharing: same filter applied everywhere\n\nPopular architectures: LeNet, AlexNet, VGG, ResNet, EfficientNet.',
    category: 'Neural Networks',
    tags: ['cnn', 'deep-learning', 'computer-vision']
  },
  {
    id: 'ml-13',
    question: 'What is Cross-Validation and why is it important?',
    answer: 'Cross-validation is a technique to assess how well a model generalizes to unseen data.\n\nTypes:\n1. k-Fold CV: Split data into k folds, train on k-1, validate on 1, rotate\n2. Stratified k-Fold: maintains class distribution in each fold\n3. Leave-One-Out CV: k = n (expensive but unbiased)\n4. Time Series CV: respect temporal order\n\nWhy it\'s important:\n• Better estimate of model performance than single train/test split\n• Reduces variance in performance estimation\n• Helps detect overfitting\n• Useful for hyperparameter tuning\n• Makes efficient use of limited data\n\nBest practices:\n• Use stratified CV for imbalanced classification\n• Use 5 or 10 folds (good bias-variance tradeoff)\n• Never use CV for final model evaluation (use held-out test set)\n• Combine with grid/random search for hyperparameter tuning',
    category: 'Fundamentals',
    tags: ['cross-validation', 'evaluation', 'fundamentals']
  },
  {
    id: 'ml-14',
    question: 'How do you handle imbalanced datasets?',
    answer: 'Imbalanced datasets have unequal class distribution, causing models to favor the majority class.\n\nStrategies:\n\nData-level:\n1. Oversampling: SMOTE (Synthetic Minority Over-sampling Technique)\n2. Undersampling: reduce majority class samples\n3. Hybrid: combine oversampling and undersampling\n4. Data augmentation: generate synthetic samples\n\nAlgorithm-level:\n1. Class weights: penalize misclassification of minority class more\n2. Threshold tuning: adjust decision threshold\n3. Ensemble methods: Balanced Random Forest, EasyEnsemble\n\nEvaluation:\n• Don\'t use accuracy (misleading)\n• Use: Precision, Recall, F1-score, ROC-AUC, PR-AUC\n• Confusion matrix for detailed analysis\n\nBest practice: Use stratified sampling for train/test split and cross-validation.',
    category: 'Fundamentals',
    tags: ['imbalanced', 'classification', 'evaluation']
  },
  {
    id: 'ml-15',
    question: 'What is Regularization and why is it used?',
    answer: 'Regularization adds a penalty term to the loss function to prevent overfitting by discouraging complex models.\n\nTypes:\n1. L1 (Lasso): λΣ|wᵢ|\n   • Can drive weights to exactly zero (feature selection)\n   • Produces sparse models\n\n2. L2 (Ridge): λΣwᵢ²\n   • Shrinks weights toward zero but not exactly zero\n   • More stable than L1\n\n3. Elastic Net: α·L1 + (1-α)·L2\n   • Combines benefits of both\n\n4. Dropout (Neural Networks): randomly zero out neurons during training\n\n5. Early Stopping: stop training when validation loss stops improving\n\nWhy use it:\n• Reduces overfitting\n• Improves generalization\n• Handles multicollinearity\n• Performs feature selection (L1)\n\nChoosing λ: Use cross-validation to find optimal regularization strength.',
    category: 'Fundamentals',
    tags: ['regularization', 'overfitting', 'fundamentals']
  },
  {
    id: 'ml-16',
    question: 'Explain Feature Engineering techniques.',
    answer: 'Feature engineering is the process of creating new features or transforming existing ones to improve model performance.\n\nTechniques:\n\n1. Scaling/Normalization:\n   • Standardization: (x - μ) / σ\n   • Min-Max: (x - min) / (max - min)\n   • Robust scaling: use median and IQR\n\n2. Encoding Categorical Variables:\n   • One-Hot Encoding: binary columns for each category\n   • Label Encoding: integer mapping\n   • Target Encoding: replace with mean target value\n   • Frequency Encoding: replace with category frequency\n\n3. Feature Creation:\n   • Polynomial features: x², x₁x₂\n   • Interaction terms\n   • Binning/discretization\n   • Date/time features: day of week, month, hour\n\n4. Dimensionality Reduction:\n   • PCA: linear transformation to uncorrelated components\n   • t-SNE/UMAP: non-linear for visualization\n   • Feature selection: mutual information, chi-square\n\n5. Handling Missing Values:\n   • Mean/median/mode imputation\n   • KNN imputation\n   • Model-based imputation',
    category: 'Fundamentals',
    tags: ['feature-engineering', 'preprocessing', 'fundamentals']
  },
  {
    id: 'ml-17',
    question: 'What is the difference between Bagging and Boosting?',
    answer: 'Both are ensemble methods but work differently:\n\nBagging (Bootstrap Aggregating):\n• Trains models INDEPENDENTLY in parallel\n• Each model trained on bootstrap sample (random sample with replacement)\n• Combines predictions by averaging (regression) or voting (classification)\n• Reduces VARIANCE\n• Examples: Random Forest, Bagged Decision Trees\n• Less prone to overfitting\n\nBoosting:\n• Trains models SEQUENTIALLY\n• Each model focuses on errors of previous models\n• Combines predictions with weighted voting\n• Reduces BIAS\n• Examples: AdaBoost, Gradient Boosting, XGBoost, LightGBM\n• More prone to overfitting (needs careful tuning)\n\nKey comparison:\n• Bagging: parallel, variance reduction, robust\n• Boosting: sequential, bias reduction, higher accuracy potential\n• Bagging models are equally weighted; boosting models have different weights',
    category: 'Ensemble Methods',
    tags: ['bagging', 'boosting', 'ensemble']
  },
  {
    id: 'ml-18',
    question: 'Explain Precision, Recall, and F1-Score.',
    answer: 'These metrics evaluate classification performance, especially for imbalanced datasets.\n\nDefinitions:\n• True Positive (TP): correctly predicted positive\n• False Positive (FP): incorrectly predicted positive\n• True Negative (TN): correctly predicted negative\n• False Negative (FN): incorrectly predicted negative\n\nMetrics:\n• Precision = TP / (TP + FP) — "Of predicted positives, how many are correct?"\n• Recall = TP / (TP + FN) — "Of actual positives, how many did we find?"\n• F1-Score = 2 × (Precision × Recall) / (Precision + Recall) — harmonic mean\n\nTradeoff:\n• High precision, low recall: few false positives, miss many positives\n• High recall, low precision: find most positives, many false alarms\n• F1 balances both\n\nWhen to use:\n• Precision-focused: spam detection, fraud detection (costly false positives)\n• Recall-focused: disease detection, cancer screening (costly false negatives)\n• F1: balanced importance of both',
    category: 'Evaluation',
    tags: ['precision', 'recall', 'f1-score', 'evaluation']
  },
  {
    id: 'ml-19',
    question: 'What is ROC-AUC and how to interpret it?',
    answer: 'ROC (Receiver Operating Characteristic) curve plots True Positive Rate vs False Positive Rate at various classification thresholds.\n\nROC-AUC (Area Under Curve):\n• Ranges from 0 to 1\n• 0.5 = random classifier\n• 1.0 = perfect classifier\n• > 0.8 = good, > 0.9 = excellent\n\nInterpretation:\nAUC = probability that a randomly chosen positive instance is ranked higher than a randomly chosen negative instance.\n\nWhen to use ROC-AUC:\n• Balanced datasets\n• When both TP and FP rates matter equally\n• Comparing models across different thresholds\n\nWhen NOT to use:\n• Highly imbalanced datasets (use PR-AUC instead)\n• When false positives are much more costly than false negatives\n\nPR-AUC (Precision-Recall AUC) is better for imbalanced data as it focuses on the positive class.',
    category: 'Evaluation',
    tags: ['roc-auc', 'evaluation', 'classification']
  },
  {
    id: 'ml-20',
    question: 'What is Transfer Learning and when to use it?',
    answer: 'Transfer Learning uses a pre-trained model as a starting point for a new task, leveraging knowledge learned from a large dataset.\n\nApproaches:\n1. Feature Extractor: Freeze pre-trained layers, train new classifier on top\n2. Fine-tuning: Unfreeze some layers and train with small learning rate\n3. Full fine-tuning: Train all layers (requires large dataset)\n\nPopular pre-trained models:\n• Computer Vision: ResNet, VGG, EfficientNet, Vision Transformer\n• NLP: BERT, GPT, RoBERTa, DistilBERT\n• Multi-modal: CLIP, DALL-E\n\nWhen to use:\n• Limited training data\n• Limited computational resources\n• Similar source and target domains\n• Need quick prototyping\n\nBest practices:\n• Freeze early layers (learn general features)\n• Fine-tune later layers (learn task-specific features)\n• Use smaller learning rate than training from scratch\n• Use data augmentation to prevent overfitting\n• Start with feature extraction, then fine-tune if needed',
    category: 'Neural Networks',
    tags: ['transfer-learning', 'deep-learning', 'pre-trained']
  }
];
