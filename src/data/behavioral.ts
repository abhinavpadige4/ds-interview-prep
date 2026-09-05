export const behavioralQuestions = [
  {
    id: 1,
    question: "Tell me about a time you had to explain a complex technical concept to a non-technical stakeholder.",
    answer: "Situation: I needed to convince marketing to adopt a new customer segmentation model based on clustering. Task: Explain how the model works and why it’s better than their current rule-based approach. Action: I avoided jargon, used a visual analogy (grouping similar customers like sorting fruits by color and size), showed a before/after comparison of campaign ROI, and provided a simple one-pager with key metrics. Result: They approved the pilot, which led to a 22% increase in conversion rate.",
    difficulty: "Medium",
    starBreakdown: {
      situation: "Needed to convince marketing to adopt a new customer segmentation model based on clustering.",
      task: "Explain how the model works and why it’s better than their current rule-based approach.",
      action: "Avoided jargon, used a visual analogy (grouping similar customers like sorting fruits by color and size), showed a before/after comparison of campaign ROI, and provided a simple one-pager with key metrics.",
      result: "They approved the pilot, which led to a 22% increase in conversion rate."
    }
  },
  {
    id: 2,
    question: "Describe a time when you disagreed with a team member on a technical approach. How did you handle it?",
    answer: "Situation: A colleague wanted to use a complex deep learning model for a small dataset problem; I argued for a simpler logistic regression. Task: Reach consensus on the best approach. Action: I proposed we both train our models on a small validation set and compare interpretability, training time, and performance. We documented results and discussed trade-offs in a team meeting. Result: We agreed on logistic regression due to better explainability and similar accuracy; the model was deployed faster and gained stakeholder trust.",
    difficulty: "Medium",
    starBreakdown: {
      situation: "A colleague wanted to use a complex deep learning model for a small dataset problem; I argued for a simpler logistic regression.",
      task: "Reach consensus on the best approach.",
      action: "Proposed we both train our models on a small validation set and compare interpretability, training time, and performance. We documented results and discussed trade-offs in a team meeting.",
      result: "We agreed on logistic regression due to better explainability and similar accuracy; the model was deployed faster and gained stakeholder trust."
    }
  },
  {
    id: 3,
    question: "Give an example of a project where you had to learn a new technology quickly to meet a deadline.",
    answer: "Situation: Our team needed to deploy a real-time dashboard using Apache Flink, but none of us had prior experience. Task: Learn Flink and build the pipeline in two weeks. Action: I completed the official Flink training, built a small prototype with Kafka integration, and pair-programmed with a senior engineer. I documented common pitfalls and shared them in a team wiki. Result: We delivered the dashboard on time, which reduced incident response time by 40%.",
    difficulty: "Hard",
    starBreakdown: {
      situation: "Our team needed to deploy a real-time dashboard using Apache Flink, but none of us had prior experience.",
      task: "Learn Flink and build the pipeline in two weeks.",
      action: "Completed the official Flink training, built a small prototype with Kafka integration, and pair-programmed with a senior engineer. I documented common pitfalls and shared them in a team wiki.",
      result: "We delivered the dashboard on time, which reduced incident response time by 40%."
    }
  },
  {
    id: 4,
    question: "Tell me about a time you failed. What did you learn?",
    answer: "Situation: I deployed a model without proper validation on time-based splits, leading to overfitting. Task: Address the sudden drop in production accuracy. Action: I conducted a post-mortem, realized I had leaked future data during feature creation, and corrected the pipeline. I implemented strict time-series cross-validation and added automated tests to prevent leakage. Result: The model’s performance stabilized, and I now advocate for rigorous validation practices in all ML projects.",
    difficulty: "Medium",
    starBreakdown: {
      situation: "I deployed a model without proper validation on time-based splits, leading to overfitting.",
      task: "Address the sudden drop in production accuracy.",
      action: "Conducted a post-mortem, realized I had leaked future data during feature creation, and corrected the pipeline. I implemented strict time-series cross-validation and added automated tests to prevent leakage.",
      result: "The model’s performance stabilized, and I now advocate for rigorous validation practices in all ML projects."
    }
  },
  {
    id: 5,
    question: "Describe a situation where you had to work with incomplete or messy data.",
    answer: "Situation: We were building a churn model but 30% of customer support logs were unstructured text with missing fields. Task: Extract usable features from this data. Action: I used spaCy for NER to extract product names and issue types, applied regex for ticket IDs, and used fuzzy matching to link to customer IDs. I created a feature indicating 'support contact frequency' and sentiment score from text. Result: The enriched features improved model AUC by 0.08, and we documented the cleaning pipeline for reproducibility.",
    difficulty: "Hard",
    starBreakdown: {
      situation: "We were building a churn model but 30% of customer support logs were unstructured text with missing fields.",
      task: "Extract usable features from this data.",
      action: "Used spaCy for NER to extract product names and issue types, applied regex for ticket IDs, and used fuzzy matching to link to customer IDs. I created a feature indicating 'support contact frequency' and sentiment score from text.",
      result: "The enriched features improved model AUC by 0.08, and we documented the cleaning pipeline for reproducibility."
    }
  },
  {
    id: 6,
    question: "Tell me about a time you improved a process or workflow.",
    answer: "Situation: Our team spent hours manually updating model versions in production. Task: Automate the deployment pipeline. Action: I designed a CI/CD pipeline using GitHub Actions: on push to main, run tests, build Docker image, push to ECR, and deploy to EKS with ArgoCD. Added model validation gates and rollback on failure. Result: Deployment time reduced from 4 hours to 20 minutes, and we increased release frequency from monthly to weekly.",
    difficulty: "Medium",
    starBreakdown: {
      situation: "Our team spent hours manually updating model versions in production.",
      task: "Automate the deployment pipeline.",
      action: "Designed a CI/CD pipeline using GitHub Actions: on push to main, run tests, build Docker image, push to ECR, and deploy to EKS with ArgoCD. Added model validation gates and rollback on failure.",
      result: "Deployment time reduced from 4 hours to 20 minutes, and we increased release frequency from monthly to weekly."
    }
  },
  {
    id: 7,
    question: "Give an example of how you handled conflicting priorities.",
    answer: "Situation: I was asked to finish a model report while also fixing a production data pipeline issue. Task: Manage both without missing deadlines. Action: I assessed impact: the pipeline issue affected real-time scoring, so I prioritized it. I communicated the delay to stakeholders, fixed the pipeline in 2 hours, then completed the report. I also suggested a weekly sync to better align priorities. Result: Both tasks were completed on time, and the stakeholder appreciated my transparency.",
    difficulty: "Medium",
    starBreakdown: {
      situation: "I was asked to finish a model report while also fixing a production data pipeline issue.",
      task: "Manage both without missing deadlines.",
      action: "Assessed impact: the pipeline issue affected real-time scoring, so I prioritized it. I communicated the delay to stakeholders, fixed the pipeline in 2 hours, then completed the report. I also suggested a weekly sync to better align priorities.",
      result: "Both tasks were completed on time, and the stakeholder appreciated my transparency."
    }
  },
  {
    id: 8,
    question: "Describe a time you had to convince your team to adopt a new tool or methodology.",
    answer: "Situation: The team was using Jupyter notebooks for all work, leading to reproducibility issues. Task: Introduce modular code and version control best practices. Action: I created a template repo with proper structure (src/, tests/, configs/), demonstrated how it improved debugging and collaboration, and ran a workshop on pytest and pre-commit hooks. I started by refactoring one small utility. Result: Within a month, 80% of new work used the new structure, and we reduced bugs related to environment issues by 60%.",
    difficulty: "Hard",
    starBreakdown: {
      situation: "The team was using Jupyter notebooks for all work, leading to reproducibility issues.",
      task: "Introduce modular code and version control best practices.",
      action: "Created a template repo with proper structure (src/, tests/, configs/), demonstrated how it improved debugging and collaboration, and ran a workshop on pytest and pre-commit hooks. I started by refactoring one small utility.",
      result: "Within a month, 80% of new work used the new structure, and we reduced bugs related to environment issues by 60%."
    }
  },
  {
    id: 9,
    question: "Tell me about a time you received critical feedback. How did you respond?",
    answer: "Situation: My manager said my presentations were too technical and lost the audience. Task: Improve communication clarity. Action: I took a public speaking course, started using the 'rule of three' in talks, and began each presentation with a clear headline and end with a call-to-action. I asked for feedback after each talk. Result: My next presentation to leadership was praised for being clear and action-oriented, leading to faster approval of my project.",
    difficulty: "Medium",
    starBreakdown: {
      situation: "My manager said my presentations were too technical and lost the audience.",
      task: "Improve communication clarity.",
      action: "Took a public speaking course, started using the 'rule of three' in talks, and began each presentation with a clear headline and end with a call-to-action. I asked for feedback after each talk.",
      result: "My next presentation to leadership was praised for being clear and action-oriented, leading to faster approval of my project."
    }
  },
  {
    id: 10,
    question: "Describe a situation where you had to work under pressure to meet a tight deadline.",
    answer: "Situation: A client requested a custom churn prediction model with only 5 days’ notice. Task: Deliver a usable model in time. Action: I skipped extensive EDA, used automated feature engineering (FeatureTools), focused on high-impact features, and used XGBoost with early stopping. I delivered daily updates and a simple API. Result: We delivered a working model with 0.78 AUC on time; the client used it to target retention offers and reduced churn by 15% in the first month.",
    difficulty: "Hard",
    starBreakdown: {
      situation: "A client requested a custom churn prediction model with only 5 days’ notice.",
      task: "Deliver a usable model in time.",
      action: "Skipped extensive EDA, used automated feature engineering (FeatureTools), focused on high-impact features, and used XGBoost with early stopping. I delivered daily updates and a simple API.",
      result: "We delivered a working model with 0.78 AUC on time; the client used it to target retention offers and reduced churn by 15% in the first month."
    }
  }
];