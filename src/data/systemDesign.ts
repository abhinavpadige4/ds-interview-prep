export const systemDesignQuestions = [
  {
    id: {
    id: 1,
    question: "How would you design a recommendation system for an e-commerce platform?",
    answer: "I would start by collecting user-item interaction data (clicks, purchases, ratings). Use collaborative filtering (matrix factorization or neural networks like NCF) for personalization, combined with content-based features (item categories, descriptions). Implement a two-stage system: candidate generation (using approximate nearest neighbors like FAISS) and ranking (using a deep learning model like Wide & Deep). Store user and item embeddings in a feature store (e.g., Feast). Serve predictions via a low-latency API (e.g., TensorFlow Serving or Triton). Monitor for drift and retrain daily using streaming data (Kafka + Flink).",
  },
  {
    id: 2,
    question: "Design a real-time fraud detection system for credit card transactions.",
    answer: "Ingest transaction streams via Kafka. Extract features in real-time using Flink Spark Streaming: velocity features (transactions/min), geographic anomalies, merchant category risk, and historical user behavior. Use a hybrid model: rule-based filters for high-risk patterns (e.g., sudden international transaction) + ML model (XGBoost or lightweight neural net) for scoring. Store user profiles in Redis for low-latency lookup. Flag transactions above threshold for review. Update models hourly using online learning. Ensure <100ms latency via edge deployment and model quantization.",
  },
  {
    id: 3,
    question: "How would you build a scalable ML pipeline for batch prediction on terabytes of data?",
    answer: "Use Apache Spark on a managed cluster (Dataproc, EMR, or Databricks). Ingest data from data lake (e.g., S3/ADLS) using Spark SQL. Perform feature engineering with Spark MLlib or Pandas UDFs. Load a pre-trained model (TensorFlow, PyTorch, or XGBoost) using MLflow for versioning. Apply model in batches using Spark's mapPartitions for efficiency. Write predictions back to data lake. Orchestrate with Airflow or Prefect. Use Delta Lake for ACID transactions and schema enforcement. Monitor data drift and model performance via Evidently AI.",
  },
  {
    id: 4,
    question: "Design a system to serve ML models with low latency and high availability.",
    answer: "Use a model serving platform like TensorFlow Serving, TorchServe, or Seldon Core. Package models as Docker containers. Deploy via Kubernetes with autoscaling (HPA based on CPU/latency). Use a service mesh (Istio) for traffic management and canary releases. Implement request batching and dynamic batching to improve GPU utilization. Use a feature store (Feast) for online feature retrieval. Add caching (Redis) for frequent inputs. Monitor with Prometheus + Grafana. Ensure high availability via multi-zone deployment and health checks.",
  },
  {
    id: 5,
    question: "How would you design an A/B testing platform for ML model updates?",
    answer: "Route traffic via a feature flag service (LaunchDarkly or homebuilt using Redis). Split users randomly into control (model A) and treatment (model B) groups. Log predictions and outcomes (clicks, conversions) to a data warehouse (BigQuery/Snowflake). Use a statistical engine (e.g., Statsig or custom Python script) to compute significance (two-tailed t-test or Bayesian inference). Ensure proper randomization and avoid interference. Run tests for sufficient duration (based on minimum detectable effect). Automate rollout if treatment shows significant improvement. Monitor for metric drift and novelty effects.",
  },
  {
    id: 6,
    question: "Design a system for monitoring ML model performance in production.",
    answer: "Track input data distribution (using KL divergence or PSI) and prediction drift. Monitor output metrics: accuracy, precision, recall, F1, or business metrics (CTR, revenue). Use Evidently AI or WhyLabs for data and model monitoring. Set up alerts via Prometheus + Alertmanager for drift or performance decay. Log predictions and actuals to a data warehouse. Retrain when performance drops below threshold. Use shadow mode to test new models alongside current model. Visualize trends in Grafana dashboards.",
  },
  {
    id: 7,
    question: "How would you handle concept drift in a production ML system?",
    answer: "Detect drift using statistical tests (KS test, PSI) on input features or model predictions. Monitor performance metrics over time. When drift is detected, trigger retraining pipeline. Use online learning for gradual updates (e.g., SGD with decaying learning rate). Maintain a buffer of recent labeled data. Use ensemble methods to combine old and new models during transition. Implement a canary rollout for updated models. Log decisions for auditability. Retrain frequency depends on drift rate — could be daily, weekly, or monthly.",
  },
  {
    id: 8,
    question: "Design a natural language processing system for sentiment analysis on social media.",
    answer: "Preprocess text: lowercase, remove URLs/mentions, handle emojis (convert to tokens). Use a pre-trained transformer (BERT, RoBERTa, or DistilBERT) fine-tuned on labeled sentiment data. For efficiency, use distillation or quantization. Serve via TensorFlow Serving or Triton. Handle high volume with batching and async processing. Use Kafka to ingest streams. Store results in a database for dashboarding. Monitor for concept drift due to evolving language. Update model quarterly with new slang and trends.",
  },
  {
    id: 9,
    question: "How would you design a search ranking system for a job portal?",
    answer: "Extract features: text match (TF-IDF or BERT embeddings between resume and job description), candidate experience, skills match, location preference, salary expectations, and employer reputation. Use a learning-to-rank model (LambdaMART or RankNet) trained on historical clicks and applications. Store candidate and job embeddings in a vector database (FAISS, Annoy, or Milvus) for approximate nearest neighbor search. Use a two-stage pipeline: recall (top 1000 candidates) then re-rank. Optimize for business metrics (application rate, hire rate). Retrain weekly.",
  },
  {
    id: 10,
    question: "Design a system for generating synthetic data to augment training sets.",
    answer: "Use generative models: GANs (for images), VAEs, or diffusion models for complex data. For tabular data, use CTGAN or TVAE. For time series, use TimeGAN. Validate synthetic data using statistical tests (KS, correlation preservation) and ML efficacy (train real + synthetic, test on real). Store in data lake. Integrate into training pipeline via script. Monitor for mode collapse or privacy leakage (use differential privacy if needed). Update generator quarterly as real data evolves.",
  },
  {
    id: 11,
    question: "How would you design a real-time analytics dashboard for ML model metrics?",
    answer: "Stream predictions and actuals via Kafka. Use Flink Spark Streaming to compute windowed metrics (accuracy, latency, drift scores). Store results in a time-series database (Prometheus, InfluxDB). Serve via Grafana dashboard with auto-refresh. Include drill-downs by model version, region, or feature group. Set alerts for anomalies. Use Apache Superset or Metabase for ad-hoc queries. Ensure <5s latency. Use WebSocket for live updates in frontend. Cache frequent queries in Redis.",
  },
  {
    id: 12,
    question: "Design a feature store for ML systems.",
    answer: "Use Feast as the feature store. Define feature views: batch (from data lake) and streaming (from Kafka). Store feature values in Redis (online) and Parquet (offline). Manage feature definitions via YAML. Serve online features via gRPC or HTTP API. Ensure point-in-time correctness for training. Integrate with MLflow for model versioning. Monitor feature freshness and quality. Use Terraform for infrastructure as code. Support backfilling for historical training.",
  },
  {
    id: 13,
    question: "How would you design a system for active learning to reduce labeling costs?",
    answer: "Train an initial model on small labeled set. Use uncertainty sampling (entropy, margin) or query-by-committee to select unlabeled samples most informative for labeling. Send these to human annotators via interface (Label Studio, Scale AI). Retrain model periodically with new labels. Use a uncertainty threshold to balance cost and gain. Monitor model performance improvement per label. Integrate with ML pipeline via Airflow. Use embeddings to diversify selections and avoid redundancy.",
  },
  {
    id: 14,
    question: "Design a system for explaining ML model predictions to stakeholders.",
    answer: "Use SHAP or LIME for post-hoc explanations. For linear models, use coefficients. For tree-based models, use SHAP TreeExplainer. For neural nets, use Integrated Gradients or DeepLIFT. Generate explanations at scale using batch processing. Store explanations alongside predictions. Build a dashboard (Streamlit, Dash) to visualize feature importance per prediction. Provide global explanations (average SHAP) and local (per instance). Ensure explanations are faithful and stable. Audit for bias using SHAP values across groups.",
  },
  {
    id: 15,
    question: "How would you design a multi-tenant ML platform for internal teams?",
    answer: "Use Kubernetes with namespaces for tenant isolation. Provide self-service portal (Backstage or custom) to deploy models, notebooks, and pipelines. Enforce resource quotas (CPU, GPU, memory) per tenant. Use MLflow for centralized model registry and experiment tracking. Integrate with identity provider (OAuth2, LDAP) for auth. Provide shared services: feature store (Feast), monitoring (Evidently), and object storage (MinIO). Log all access for audit. Enable GPU sharing via time-slicing or MIG. Support JupyterLab and VS Code as IDEs.",
  },
  {
    id: 16,
    question: "Design a system for real-time object detection in video streams.",
    answer: "Use a lightweight CNN (YOLOv8n, EfficientDet) optimized for speed. Process video via FFmpeg or GStreamer. Extract frames at target FPS (e.g., 10fps). Run inference on GPU using TensorRT or ONNX Runtime for acceleration. Apply non-max suppression. Track objects across frames using SORT or DeepSORT. Store results (bounding boxes, labels, timestamps) in time-series DB. Alert on specific objects (person, vehicle). Use edge deployment (Jetson, Coral) for low latency. Monitor FPS and dropout rate.",
  },
  {
    id: 17,
    question: "How would you design a system for chaining multiple ML models in a pipeline?",
    answer: "Model each step as a microservice with defined input/output schema (Protobuf or JSON). Use a workflow orchestrator (Airflow, Prefect, or Argo Workflows) to manage dependencies. Pass data via message queue (RabbitMQ, Kafka) or shared storage (S3). Handle failures with retries and dead-letter queues. Version each model using MLflow. Monitor latency and success rate per step. Allow dynamic reconfiguration via config service. Use canary testing for pipeline updates. Log end-to-end latency and accuracy.",
  },
  {
    id: 18,
    question: "Design a system for detecting and mitigating bias in ML models.",
    answer: "Audit training data for representation imbalance across protected attributes (race, gender, age). Use AIF360 or Fairlearn to measure demographic parity, equal opportunity, and disparate impact. Preprocess: reweighing, disparate impact remover. In-process: adversarial debiasing. Post-process: threshold optimization per group. Monitor fairness metrics in production. Retrain with balanced data if needed. Involve stakeholders in defining fairness criteria. Document decisions for compliance (e.g., EU AI Act).",
  },
  {
    id: 19,
    question: "How would you design a system for continual learning in a non-stationary environment?",
    answer: "Use elastic weight consolidation (EWC) or synaptic intelligence to prevent catastrophic forgetting. Maintain a buffer of old data for replay. Use online learning with decaying learning rate. Monitor performance on recent and historical data. Detect drift to trigger retraining. Use modular networks: freeze early layers, adapt later layers. Employ meta-learning to learn how to adapt. Evaluate on prequential accuracy. Deploy with shadow mode and gradual rollout.",
  },
  {
    id: 20,
    question: "Design a system for ML model versioning and rollback.",
    answer: "Use MLflow or DVC for versioning models, data, and code. Tag versions with Git commit, timestamp, and performance metrics. Store models in a registry with stages: Staging, Production, Archived. Enable rollback via promotion of previous version. Use canary deployment: route 5% traffic to new model, monitor metrics. Automate rollback if error rate increases. Integrate with CI/CD (GitHub Actions) to trigger training and deployment. Ensure immutability of artifacts. Log all deployments for audit.",
  }
];

// FILE: src/data/behavioral.ts
export const behavioralQuestions = [
  {
    id: 1,
    question: "Tell me about a time you faced a challenging data problem and how you solved it.",
    answer: "Situation: At my previous job, we noticed a sudden drop in user engagement metrics, but the root cause wasn't clear from surface-level analytics.\nTask: I was tasked with identifying the underlying issue and recommending a fix within one week.\nAction: I started by segmenting the data by user demographics, acquisition channel, and device type. I discovered the drop was isolated to Android users in Southeast Asia. I then analyzed app logs and found a recent update had introduced a bug causing slow image loading on older Android versions. I quantified the impact using cohort analysis and presented findings to the product and engineering teams with a clear recommendation to roll back the update for affected devices.\nResult: After the rollback, engagement recovered to baseline within 48 hours. I also implemented a monitoring dashboard to catch similar issues early in the future.",
  },
  {
    id: 2,
    question: "Describe a situation where you had to explain a complex technical concept to a non-technical stakeholder.",
    answer: "Situation: The marketing team wanted to understand why our recommendation engine was suggesting certain products, but they had no background in machine learning.\nTask: I needed to explain how the model worked in simple terms to build trust and align on goals.\nAction: I avoided jargon and used an analogy: 'Think of the model like a knowledgeable store assistant who learns your taste by watching what you look at and buy.' I showed a simple example: if users who bought running shoes also bought energy gels, the model learns that association. I used a visualization of co-purchase patterns and focused on business outcomes — like how improving relevance could increase average order value.\nResult: The marketing team felt confident in the system and collaborated on a campaign to promote recommended bundles, which led to a 12% increase in cross-sell revenue.",
  },
  {
    id: 3,
    question: "Give an example of a time you had to work with a difficult team member or stakeholder.",
    answer: "Situation: I was working on a cross-functional project where one senior engineer consistently dismissed my data-driven suggestions, preferring intuition-based decisions.\nTask: I needed to gain their buy-in to ensure the project succeeded.\nAction: I scheduled a 1:1 to understand their concerns. They felt overwhelmed by the pace of change and doubted the reliability of our data. I invited them to co-lead a small validation experiment: we would test one of my hypotheses using their preferred method and compare results. I made sure to credit their expertise throughout the process.\nResult: The experiment supported the data-driven approach, and the engineer became one of our strongest advocates. We improved collaboration by setting up regular syncs and shared documentation.",
  },
  {
    id: 4,
    question: "Tell me about a time you failed and what you learned from it.",
    answer: "Situation: I once built a predictive model for customer churn that performed well in validation but failed in production.\nTask: I needed to understand why and prevent similar mistakes.\nAction: I conducted a post-mortem and discovered the training data didn't include recent pricing changes that significantly affected churn. I had fallen into the trap of assuming stationarity. I also realized I hadn't involved the finance team early enough to capture upcoming business changes.\nResult: I now always include a 'data assumptions' checklist in my projects and hold a pre-mortem meeting with stakeholders to identify potential shifts in data-generating processes. The next model I built incorporated macroeconomic indicators and was updated monthly.",
  },
  {
    id: 5,
    question: "Describe a time you had to learn a new technology or tool quickly to complete a project.",
    answer: "Situation: Our team decided to migrate from on-premise Hadoop to AWS Spark, but I had no prior experience with AWS or Spark.\nTask: I needed to become proficient enough to lead the data migration within three weeks.\nAction: I started with AWS's free tier and completed the 'Analytics on AWS' digital training. I followed hands-on tutorials for Spark using Databricks Community Edition. I paired with a more experienced colleague for the first week and replicated our existing pipelines in the new environment. I documented every step and created a runbook for the team.\nResult: We completed the migration two days ahead of schedule. I continued to deepen my knowledge and eventually became the go-to person for Spark optimization in the team.",
  },
  {
    id: 6,
    question: "Tell me about a time you had to make a decision with incomplete data.",
    answer: "Situation: During a product launch, we needed to decide whether to scale up server capacity, but real-time analytics were delayed due to a logging pipeline issue.\nTask: I had to make a recommendation based on limited early signals.\nAction: I used the available 30-minute data to estimate uptake trends and applied a growth curve based on similar past launches. I quantified the uncertainty and presented a range of scenarios: conservative, expected, and optimistic. I recommended a moderate scale-up with auto-scaling enabled, so we could adjust quickly if needed.\nResult: The actual traffic matched the expected scenario. We avoided over-provisioning (saving costs) while ensuring good user experience. I later worked on improving the logging pipeline's reliability.",
  },
  {
    id: 7,
    question: "Describe a time you improved a process or workflow.",
    answer: "Situation: Our team spent hours each week manually preparing data for weekly executive reports.\nTask: I was asked to streamline the process to save time.\nAction: I mapped the entire workflow and identified bottlenecks: repetitive data cleaning steps and manual Excel formatting. I automated the data extraction and transformation using Python scripts with Pandas, scheduled via Airflow. I replaced Excel with a Looker dashboard that pulled directly from our data warehouse.\nResult: The report generation time dropped from 5 hours to 15 minutes. The team regained 3 hours per week for higher-value work. The automated process also reduced errors and improved consistency.",
  },
  {
    id: 8,
    question: "Tell me about a time you had to prioritize multiple competing tasks.",
    answer: "Situation: I was simultaneously working on a model deadline, a stakeholder request for ad-hoc analysis, and a production issue affecting dashboards.\nTask: I needed to prioritize without dropping any ball.\nAction: I assessed urgency and impact: the production issue was highest severity (affecting users), so I addressed it first with a quick fix. I then negotiated timelines: I told the stakeholder I could deliver the ad-hoc analysis by end of day if they could wait, and I requested a one-day extension on the model deadline, explaining the unforeseen disruption. I used a Kanban board to visualize progress.\nResult: All tasks were completed on time. The stakeholder appreciated the transparency, and the model still met quality standards. I later advocated for better buffer time in sprint planning.",
  },
  {
    id: 9,
    question: "Describe a time you used data to influence a decision or change a strategy.",
    answer: "Situation: The product team wanted to launch a new feature based on user interviews, but I was skeptical about its broad appeal.\nTask: I wanted to test the hypothesis with data before committing resources.\nAction: I analyzed historical behavior data to find users similar to those interviewed. I found they represented only 8% of our user base. I then ran a fake door test: we added a button for the feature and measured click-through rate. Only 4% of users who saw it clicked, and fewer than 1% completed the follow-up.\nResult: We pivoted to improving an existing feature instead. The saved resources were used to increase engagement by 18% through a refinement of the core workflow.",
  },
  {
    id: 10,
    question: "Tell me about a time you had to work outside your comfort zone.",
    answer: "Situation: I was asked to present our team's findings at a company-wide all-hands meeting, but I had never spoken to more than 50 people before.\nTask: I needed to deliver a clear, engaging talk to a large audience.\nAction: I prepared extensively: I wrote a script, practiced in front of peers, and recorded myself to improve pacing and body language. I focused on storytelling — starting with a surprising fact, walking through the problem, and ending with the impact. I used simple slides with minimal text.\nResult: The talk was well-received; I got positive feedback from leaders in other departments. I’ve since spoken at several internal events and even started mentoring others on public speaking.",
  },
  {
    id: 11,
    question: "Describe a time you had to deal with ambiguity in a project.",
    answer: "Situation: I joined a project where the goal was vaguely defined: 'improve user retention using data.' There were no clear metrics or hypotheses.\nTask: I needed to bring structure and direction.\nAction: I started by interviewing stakeholders to understand their mental models of retention. I explored the data to identify key drop-off points in the user journey. I proposed a framework: we would focus on week-1 retention, as it had the highest leverage. I defined success as a 5% relative improvement and outlined a plan with experiments.\nResult: The team aligned quickly. We ran three A/B tests and achieved a 6.2% improvement in week-1 retention through a revised onboarding flow.",
  },
  {
    id: 12,
    question: "Tell me about a time you had to convince others to adopt your idea or recommendation.",
    answer: "Situation: I proposed switching from rule-based fraud detection to a machine learning model, but the security team was hesitant due to concerns about interpretability and false positives.\nTask: I needed to address their concerns and build consensus.\nAction: I organized a workshop where we compared both systems side-by-side using historical data. I showed how the ML model caught 30% more fraud with only a slight increase in false positives. I then proposed a hybrid approach: use rules for high-confidence cases and ML for the rest, with explanations via SHAP for transparency. I offered to run a pilot.\nResult: They agreed to a two-week pilot. The results exceeded expectations, and we fully transitioned within a month. The team now advocates for ML in other risk domains.",
  },
  {
    id: 13,
    question: "Describe a time you had to work with messy or poor-quality data.",
    answer: "Situation: I was given a dataset of customer support tickets with inconsistent categorization, missing fields, and duplicate entries.\nTask: I needed to clean and prepare it for topic modeling analysis.\nAction: I started with data profiling to understand the issues. I standardized text (lowercase, removed extra spaces), used fuzzy matching to merge similar categories, and applied regex to extract missing fields from ticket text (e.g., order IDs). I removed exact duplicates and used consensus labeling for ambiguous cases. I documented all transformations in a script.\nResult: The cleaned dataset enabled accurate topic modeling, revealing three major product issues we hadn't previously noticed. We prioritized fixes and saw a 20% drop in related tickets.",
  },
  {
    id: 14,
    question: "Tell me about a time you had to meet a tight deadline.",
    answer: "Situation: A regulatory report was due in 48 hours, but the data pipeline had failed two days prior, leaving us with incomplete data.\nTask: I needed to deliver a valid report on time.\nAction: I assessed what data was available and its quality. I used imputation for missing values based on historical patterns and flagged all assumptions. I automated the report generation using a Jupyter notebook with parameterized inputs. I worked overnight to validate outputs and cross-checked with manual spot checks.\nResult: We submitted the report on time with a clear appendix detailing limitations and assumptions. The auditors accepted it, and I later led an effort to improve pipeline resilience with better monitoring and retry logic.",
  },
  {
    id: 15,
    question: "Describe a time you had to balance speed and accuracy in your work.",
    answer: "Situation: During a live sales event, the marketing team wanted real-time insights to adjust promotions, but waiting for full data processing would mean missing the window.\nTask: I needed to provide useful insights quickly without sacrificing too much accuracy.\nAction: I used stratified sampling to analyze a representative 10% of the data in real-time. I computed key metrics (conversion rate, average order value) and provided confidence intervals. I clearly communicated the uncertainty and updated the estimates as more data came in.\nResult: The team made timely adjustments that increased conversion by 8%. After the event, we ran the full analysis and confirmed the trends were directionally correct. I now use sampling as a standard tool for rapid iteration.",
  },
  {
    id: 16,
    question: "Tell me about a time you had to give or receive difficult feedback.",
    answer: "Situation: A junior teammate repeatedly submitted analyses with calculation errors, which was slowing down the team.\nTask: I needed to address the issue constructively without discouraging them.\nAction: I scheduled a private conversation and started by acknowledging their effort and enthusiasm. I then shared specific examples of errors and their impact. Instead of just pointing out mistakes, I taught them a checklist I use: validate assumptions, check units, test edge cases, and peer review. I offered to review their next few submissions.\nResult: Their accuracy improved significantly over the next month. They later told me the feedback helped them grow, and they started mentoring others on quality practices.",
  },
  {
    id: 17,
    question: "Describe a time you had to adapt to a major change in project direction.",
    answer: "Situation: Midway through a project to build a customer segmentation model, leadership decided to pivot to predicting customer lifetime value (LTV) instead.\nTask: I needed to shift focus quickly without losing momentum.\nAction: I met with the product lead to understand the new goal and constraints. I reused much of the feature engineering work (e.g., RFM, engagement metrics) but changed the target variable and model type (from clustering to regression). I updated the project plan and communicated the change transparently to the team.\nResult: We delivered the LTV model two weeks later than originally planned but still within the revised timeline. The model was adopted by the finance team for budgeting decisions.",
  },
  {
    id: 18,
    question: "Tell me about a time you used creativity to solve a problem.",
    answer: "Situation: We wanted to predict equipment failure, but sensor data was sparse and labels were extremely rare (only 0.1% failure rate).\nTask: I needed to build a useful model despite the lack of labeled examples.\nAction: I framed it as an anomaly detection problem. I used an autoencoder to learn the normal pattern of sensor data and reconstructed the input. High reconstruction error indicated anomalies. I then used domain knowledge to label a small set of high-error cases and trained a classifier to distinguish failures from other anomalies. I also incorporated maintenance logs as weak labels.\nResult: The system achieved 80% precision at 10% recall, which was sufficient for early maintenance alerts. We reduced unplanned downtime by 25% over three months.",
  },
  {
    id: 19,
    question: "Describe a time you had to work with limited resources.",
    answer: "Situation: I needed to train a large language model for a domain-specific task, but we had no access to GPUs and only a modest CPU cluster.\nTask: I still wanted to produce a usable model within constraints.\nAction: I chose a small, efficient architecture (DistilBERT) and used techniques like gradient accumulation to simulate larger batch sizes. I trained for fewer epochs but used early stopping based on validation loss. I leveraged mixed-precision training via CPU optimizations and used model distillation from a larger teacher model when possible.\nResult: The model achieved 85% of the performance of a full BERT baseline while running 5x faster on CPU. It was deployed successfully for internal use.",
  },
  {
    id: 20,
    question: "Tell me about a time you had to ensure your work was ethical and unbiased.",
    answer: "Situation: I was building a credit scoring model and discovered that certain zip codes were being systematically scored lower, which correlated with protected demographic groups.\nTask: I needed to ensure the model was fair and compliant with regulations like ECOA.\nTask: I conducted a fairness audit using AIF360. I found disparate impact in approval rates. I investigated and found the model was using zip code as a proxy for income, which itself was correlated with race.\nAction: I removed zip code and other proxies (like certain types of retail spending) and replaced them with direct, permissible features (credit history, debt-to-income). I applied reweighing during training to balance representation. I tested the model across subgroups and monitored disparity in production.\nResult: The final model showed no statistically significant disparity in approval rates across protected groups. It was approved by the compliance team and deployed with ongoing fairness monitoring.",
  }
];