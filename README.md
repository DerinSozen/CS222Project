# Sentiment Analysis of Customer Reviews for Optimizing eCommerce User Experience
Project Members: Daden Gabryszewski (dadenng2), Derin Sozen (dsozen2), Luke Hancock (lucasoh2), Amogh Donthi (amoghd3)


## Pitch:
We aim to create a machine learning model for sentiment analysis on eCommerce platform reviews with at least an 85% accuracy rate. This model will mitigate statistical biases arising from the 1-5 star rating system and human biases like selection, outlier, and confirmation bias, offering actionable insights to businesses on customer satisfaction. 

## Functionality:
- Users can submit a url to any eCommerce website
- Users can view a sentiment analysis report summarizing the review data via an Excel spreadsheet
- Users can view frequently-mentioned keywords
- Users can view a pie chart showcasing the ratio of positive and negative reviews
- Users can view a text-summary of the data, elaborating on the general consensus.

## Project Duration:
10 weeks

## Tools and Technologies:
Python (Primary Programming Language)
scikit-learn, TensorFlow, or PyTorch (ML Libraries)
Python requests(Raw web data)
Scrapy (Web Scraping and parsing)
Pandas, NumPy (Data Manipulation)
Matplotlib, Seaborn (Data Visualization)
Git (Version Control)
AWS or Google Cloud (Cloud Computing)

## Components:
- User Interface
  - Functionality
    - The User Interface is the visual front end of the application where users can input data, make selections, and receive output. Its tasks include:
      - Accepting user input for web scraping (e.g., URLs, parameters)
      - Offering ML model options (e.g., classification, sentiment analysis)
      - Displaying the processed output (e.g., scraped data, ML model results)
    - This set of features is organized into its own component to encapsulate all user-related activities, ensuring a separation of concerns.
  - Programming Language(s) Used
    - JavaScript (React) is used for this component. Given the widespread adoption of JavaScript for front-end development and our team's proficiency in React, this choice allows for a responsive and scalable UI.
  - Major Libraries Used
    - React: For building the UI components.
    - Axios: For making HTTP requests to the backend.
  - Testing Methodology
    - Jest and React Testing Library will be used for unit testing and integration testing of components. These libraries allow for the simulation of user behavior, ensuring that the UI behaves as expected.
  - Interactions With Other Components
    - Web Scraper: Sends HTTP request to initiate scraping.
    - ML Model: Sends HTTP requests to initiate data processing.
- Web Scraper
  - Functionality
    - The Web Scraper component is responsible for fetching data from the internet based on the URLs and parameters provided. Tasks include:
      - URL validation
      - Data scraping
      - Data sanitization
    - It is a separate component to abstract the complexities of web scraping from other parts of the application.
  - Programming Language(s) Used
    - Python. Known for its rich ecosystem around web scraping and data manipulation, Python is ideal for this component.
  - Major Libraries Used
    - BeautifulSoup: For parsing HTML and extracting information.
    - Requests: For making HTTP requests.
  - Testing Methodology
    - Unit tests using Python’s unittest framework will ensure that URLs are properly validated and data is accurately scraped.
  - Interactions With Other Components
    - User Interface: Receives HTTP requests to initiate scraping.
    - ML Model: Sends scraped data for further processing.
ML Model
  - Functionality
    - This component is responsible for the machine learning aspect of the application. It performs:
      - Data preprocessing
      - Model selection
      - Model training
      - Model inference
    - It exists as a separate component to abstract away the ML operations and to allow for easy updates or replacements of models.
  - Programming Language(s) Used
    - Python. Given its robust ML libraries and community support, Python is well-suited for this role.
  - Major Libraries Used
    - scikit-learn or TensorFlow: For machine learning algorithms and model training.
  - Testing Methodology
    - Unit tests and integration tests using Python’s unittest or pytest will be implemented to ensure model accuracy and reliability.
    - Interactions With Other Components
    - Web Scraper: Receives scraped data for processing.
    - User Interface: Sends processed data as HTTP responses.


## Methodology:
Data Collection
Scrape customer reviews and ratings from eCommerce websites such as Amazon, eBay, and others.
Utilize APIs if available, or web scraping tools like Scrapy.

Data Preprocessing
Cleaning and structuring the collected data.
Tokenizing the text and handling missing values.
Creating a balanced dataset for both positive and negative reviews.

Exploratory Data Analysis (EDA)
Visualize the data to identify patterns, trends, and outliers.
Generate summary statistics to better understand the dataset.

Feature Engineering
Employ techniques like TF-IDF, word embeddings, etc.

Model Selection and Training
Experiment with different machine learning algorithms such as Naive Bayes, SVM, and Deep Learning methods.
Use cross-validation for model evaluation.

Hyperparameter Tuning
Optimize the model for better performance using techniques like Grid Search or Randomized Search.

Evaluation Metrics
Use accuracy, F1-score, and ROC curve for performance evaluation.

Deployment
Deploy the model to a cloud platform for real-time analysis.

Continuous Integration
Testing Library
JavaScript (React): We will use Jest along with React Testing Library to run unit and integration tests for the User Interface.
Python: For the Web Scraper and ML Model components, we will use Python’s built-in unittest framework.
These libraries are widely used, well-documented, and integrate well with CI/CD pipelines like GitHub Actions.

Code Style Guide
JavaScript (React): We'll follow the Airbnb JavaScript Style Guide, using ESLint to automatically enforce this style.
Python: We'll follow the PEP 8 style guide, using tools like flake8 for automatic enforcement.
Both of these style guides are widely recognized and offer automated tools to enforce code quality.

Test Coverage
JavaScript (React): We'll use Jest’s built-in coverage reporting, which is based on Istanbul.
Python: We will use coverage.py to compute test coverage for Python components.
Both of these tools integrate well with CI/CD systems and provide detailed reports on what parts of the code are not covered by tests.

Pull Request Workflow
When to Open PRs: Pull requests will be opened when a feature is complete and all local tests pass. No one should work directly on the main branch.
Reviewer Selection: Each team member will be assigned to a specific component (UI, Web Scraper, ML Model). Reviews will be carried out by team members who are not primarily responsible for the component being reviewed.
Alternate Reviewers: In the case that a team member is unable to review a PR within 24 hours, an alternate reviewer will be selected based on a rotating schedule.
Avoiding Merge Conflicts: To minimize merge conflicts, the team will follow a feature-branch workflow where each new feature or fix is developed in a separate branch. Regularly pulling the latest changes from main into feature branches will also help to prevent conflicts.

GitHub Actions
We will use GitHub Actions to automate the Continuous Integration process. On every push or pull request, GitHub Actions will:
Run the style checkers (ESLint, flake8)
Run all tests (Jest, unittest)
Compute and report test coverage (Istanbul, coverage.py)
By adhering to this CI plan, we aim to maintain high code quality and minimize bugs as we develop our project.

## Schedule

Week 1
1. Initialize dev environment and git repository for everyone. 
2. Finalize architecture and library decisions.

Week 2 
1. Implement web scraper for raw web data
2. Begin developing models on a small manual dataset.

Week 3
1. Parse web meta data into CSV
2. Begin training models with scrapped dataset

Week 4
1. Make the web scraper able to accept any URL as prompted.
2. Continued model development and tuning. Fine tune web scraping app for edge cases and variable products.

Week 5
1. Begin narrowing down the number of models and begin training the most accurate with a larger dataset.
2. Error-handling on web scraping and Begin UI development.

Week 6
1. Fine tuning of the model to improve results, testing for edge cases, stress, and possible bugs
2. Development begins on UI and a chrome extension utilizing the model.

Week 7
1. Ensure the model has an accuracy of above 80% with the larger datasets, test varied datasets for test reliability
2. Continue work on UI and the functionality of the Chrome Extension

Week 8
1. Create an MVP of the chrome extension that can access
2. Set Up a service to host our model on the cloud

Week 9
1. Connect cloud model and chrome UI
2. Ensure non-local deployment of app is functional, bugfix as needed

Week 10
1. Finalize Chrome Extension, finish any final tests to ensure its reliability
2. Release on the Chrome Web Store.

 
## Potential Risks
Limiting and throttling by anti-scraping tools
Issues with the models processing large datasets
Changes to source material format mid-development.
1. Limiting and Throttling by Anti-Scraping Tools
Mitigation Plan:
Implement rate-limiting and random delays in the Web Scraper to respect the scraping policy of the target site.
Build a rotating proxy system to distribute requests across different IP addresses.
As a last resort, seek API-based alternatives to web scraping for data retrieval.
Impact on Schedule:
If we're limited or throttled, this could cause a delay of up to two weeks to redesign and implement the new data retrieval method.
Schedule Adjustment:
We'll buffer two weeks into the project timeline for this potential delay. If the issue arises, we'll halt work on dependent features and focus all efforts on resolving this.
2. Issues with the Models Processing Large Datasets
Mitigation Plan:
Start by using a smaller dataset to test the ML model’s scalability.
Optimize the ML model algorithms for speed and memory efficiency.
If issues persist, consider cloud-based distributed computing resources.
Impact on Schedule:
Resolving scalability issues might take up to three weeks, depending on the severity.
Schedule Adjustment:
To prepare for this, we’ll set aside a three-week buffer after the initial model training phase. If the risk materializes, we'll use this time to resolve the issues.
3. Changes to Source Material Format Mid-Development
Mitigation Plan:
Make the Web Scraper modular, so changing the scraping strategy involves minimal code change.
Regularly validate the data schema to detect changes as early as possible.
Use version control to roll back to stable versions if an immediate fix isn’t feasible.
Impact on Schedule:
Adapting to changes in the source material could cause a delay of 1-2 weeks.
Schedule Adjustment:
Include a two-week buffer in the timeline specifically for this risk. If changes occur, this time will be used to adapt the Web Scraper and possibly the ML model if the data schema has changed.
By preparing for these risks in advance and building time buffers into the schedule, we aim to minimize the impact of these potential setbacks on the overall project timeline.


## Teamwork
We plan on splitting the team into one specifically working on the model and one specifically working on UI and web scraping, due to some of us having previous experience with web scraping and some of us having previous experience in machine learning. With weekly meetings and keeping a group chat constantly running, we will foster communication and be able to keep each other accountable on meeting our goals and deadlines. A short summary of team member responsibilities and experiences is as follows:
Luke Hancock: will contribute to the front end UI and develop the Chrome Extension when appropriate. Will also oversee and manage database-related tasks to ensure efficient data storage and retrieval for the ML models since he has experience designing, creating, working with, and implementing relational database systems in a previous project.
Daden Gabryszewski: will contribute to the model development and testing for the aforementioned models and the frontend and backend development for the UI portion due to his experience in building neural networks and other machine learning algorithms.
Derin Sozen: Will work on the web scraping portion of our project and once that’s finalized transition to working on the UI and developing robust unit tests on each of our components.
Amogh Donthi: will work on designing the front end UI, web scraping, managing, and analyzing the data we accumulate, as he has experience with Figma, data analysis, and data visualization.
As the project progresses, however, we do not anticipate the above responsibilities between each group member are strictly mutually exclusive. Rather, we will maintain good communication in order to collaborate, help each other out, and drive the best possible end result.
