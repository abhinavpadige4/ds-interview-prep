export const mlQuestions = [
  {
    id: 1,
    question: "What is the difference between supervised and unsupervised learning?",
    answer: "Supervised learning uses labeled data to train models (e.g., classification, regression), while unsupervised learning finds patterns in unlabeled data (e.g., clustering, dimensionality reduction)."
  },
  {
    id: 2,
    question: "Explain the bias-variance tradeoff.",
    answer: "Bias is error from overly simplistic assumptions; variance is error from sensitivity to small fluctuations in training data. High bias causes underfitting; high variance causes overfitting. The goal is to minimize total error by balancing both."
  },
  {
    id: 3,
    question: "What is overfitting and how can you prevent it?",
    answer: "Overfitting occurs when a model learns training data too well, including noise, and fails to generalize. Prevention techniques: cross-validation, regularization (L1/L2), pruning, early stopping, dropout (in neural nets), and using more training data."
  },
  {
    id: 4,
    question: "Explain the difference between L1 and L2 regularization.",
    answer: "L1 regularization (Lasso) adds penalty equal to absolute value of weights, leading to sparse models (feature selection). L2 regularization (Ridge) adds penalty equal to square of weights, shrinking weights but not zeroing them. L1 tends to produce sparse solutions; L2 tends to distribute error among all features."
  },
  {
    id: 5,
    question: "What is the curse of dimensionality?",
    answer: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces, such as data sparsity, increased computational complexity, and the fact that distance metrics become less meaningful as dimensions grow."
  },
  {
    id: 6,
    question: "How does k-means clustering work?",
    answer: "K-means iteratively assigns each data point to the nearest centroid, then recomputes centroids as the mean of assigned points. It minimizes within-cluster sum of squares. Requires specifying k (number of clusters) beforehand and is sensitive to initial centroid placement."
  },
  {
    id: 7,
    question: "What is the elbow method in clustering?",
    answer: "The elbow method plots the within-cluster sum of squares (WCSS) against the number of clusters k. The 'elbow' point where WCSS begins to decrease linearly suggests the optimal k, balancing model complexity and fit."
  },
  {
    id: 8,
    question: "Explain precision, recall, and F1-score.",
    answer: "Precision = TP/(TP+FP) — of all positive predictions, how many were correct. Recall = TP/(TP+FN) — of all actual positives, how many were captured. F1-score = 2*(Precision*Recall)/(Precision+Recall) — harmonic mean, useful for imbalanced classes."
  },
  {
    id: 9,
    question: "What is the ROC curve and AUC?",
    answer: "ROC curve plots True Positive Rate (sensitivity) against False Positive Rate (1-specificity) at various thresholds. AUC (Area Under Curve) measures the model's ability to distinguish between classes; AUC=1 is perfect, AUC=0.5 is random."
  },
  {
    id: 10,
    question: "How does a decision tree work?",
    answer: "A decision tree recursively splits data based on feature values that maximize information gain (or minimize Gini impurity/entropy). Each internal node is a test on a feature, each branch is an outcome, and each leaf node assigns a class or value."
  },
  {
    id: 11,
    question: "What is ensemble learning? Give examples.",
    answer: "Ensemble learning combines multiple models to improve performance. Examples: Bagging (Random Forest), Boosting (AdaBoost, XGBoost, Gradient Boosting), and Stacking. Reduces variance (bagging) or bias (boosting)."
  },
  {
    id: 12,
    question: "Explain how Random Forest works.",
    answer: "Random Forest builds multiple decision trees on bootstrapped samples of data, using random subsets of features at each split. Final prediction is average (regression) or majority vote (classification). Reduces overfitting via decorrelation and averaging."
  },
  {
    id: 13,
    question: "What is gradient boosting?",
    answer: "Gradient boosting builds trees sequentially, where each new tree corrects the errors of the previous ones by fitting to the negative gradient (residuals) of the loss function. Examples: XGBoost, LightGBM, CatBoost."
  },
  {
    id: 14,
    question: "How does a neural network learn?",
    answer: "A neural network learns via backpropagation: forward pass computes output, loss is calculated, then backward pass computes gradients of loss w.r.t. weights using chain rule, and weights are updated via gradient descent (or variants like Adam)."
  },
  {
    id: 15,
    question: "What is the vanishing gradient problem?",
    answer: "In deep networks, gradients can become exponentially small as they propagate backward through layers, especially with sigmoid/tanh activations, making early layers learn very slowly or not at all. Mitigated by ReLU, batch normalization, residual connections, and proper initialization."
  },
  {
    id: 16,
    question: "Explain convolutional neural networks (CNNs).",
    answer: "CNNs use convolutional layers to automatically learn spatial hierarchies of features from input data (e.g., images). They apply filters (kernels) that slide over input, detecting edges, textures, etc., followed by pooling and fully connected layers."
  },
  {
    id: 17,
    question: "What is transfer learning?",
    answer: "Transfer learning reuses a pre-trained model on a large dataset as a starting point for a new, related task. Especially useful when data is limited. Common in CV (ResNet, VGG) and NLP (BERT, GPT)."
  },
  {
    id: 18,
    question: "How do you handle imbalanced datasets?",
    answer: "Techniques: resampling (oversample minority, undersample majority), synthetic data generation (SMOTE), using appropriate metrics (F1, AUC-PRC), cost-sensitive learning, anomaly detection, and ensemble methods designed for imbalance."
  },
  {
    id: 19,
    question: "What is cross-validation and why is it important?",
    answer: "Cross-validation splits data into k folds, trains on k-1 and validates on 1, repeating k times. Reduces overfitting risk, gives better estimate of generalization performance, and helps tune hyperparameters reliably."
  },
  {
    id: 20,
    question: "Explain the difference between bagging and boosting.",
    answer: "Bagging (Bootstrap Aggregating) trains models in parallel on random subsets and averages predictions (reduces variance). Boosting trains models sequentially, each focusing on errors of prior ones (reduces bias). Bagging: Random Forest. Boosting: AdaBoost, XGBoost."
  }
];