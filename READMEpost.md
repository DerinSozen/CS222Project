### Introduction

Project Name: Amazon ASIN Scraper

The chrome extension takes the current amazon product website the user is visiting and scrapes a variable number of reviews, sends them to a ML model in the backend, and returns user review summaries to the UI. Allows for buyers to get quick information and summaries from multiple reviewers quicker than searching and reading through many lengthy reviews.

Amazon already provides analytics software to sellers. However for buyers, there isn’t much software available that provides insights on products. This project is our attempt to provide more information to online buyers, as online shopping has gained in popularity over the past few years, and eCommerce scams are still prevalent.

Our motivation behind this project is to shed light on a new perspective towards the eCommerce industry for buyers. We wanted to create a software that gave buyers more insight on the products they buy. If time allotted, we might’ve expanded our chrome extension to act as a security feature, which double checks items before they are purchased for potential fraud or scams.

---

### Technical Architecture

Flask - backend python server to host the web scraper both locally or on Heroku.

Python web scraper (Python) - takes in a URL and scrapes raw user reviews web data from Amazon.com using Selenium Stealth and a WebDriver to avoid bot detection. 

Hugging Face NLP Model (Python) - takes in scraped reviews from web scraper and output brief textual summaries of user reviews to the UI for user viewing,

UI - (JavaScript, HTML)  present data to user 

---

### Installation Instructions

1. Clone the repository to your local machine
2. In app.py, change the executable path to the full path to the chromedriver located within the repository folder you cloned.
3. To start the Flask server, first enable the virtual environment by typing "source bin/activate" from bash or another terminal shell.
4. Once the server is up, navigate to Chrome. Go to Manage Extensions. Enable developer mode. Click Load Unpacked Extensions. Navigate to the extension folder named chrome-extension. Press select.
5. The chrome extension should now be available to you to use, so long as the server is running on your local machine.

Please note that the files presented in this Github repository are for the above instructions. Another version of the chrome extension developed for Heroku is also available, but due to scoping limitations and the monetary cost to keep the application running, we chose to provide this version.

---

### 2 problems or lessons learned

Bot detection

- Amazon.com has a lot of bot detection. From the beginning, we tried using some simpler python alternatives to scrape the website like BeautifulSoup or scrapy. However, these didn’t work and we were always sent to a Captcha or a login page. 
- The solution we found for this was to use Selenium and a webdriver. Instead of scraping the HTML contents of the website through a request, we boot up a lightweight version of chrome (webdriver) and automatically navigate to the correct URL to get all of the required information. This method was still not that reliable until we found out about Selenium Stealth, which is a library specifically designed for getting around bot detection.
Data quotas on Github

Github Data Quota

- As we finished developing the models we planned to use in the final product, we noticed that Github has a data quota limit, meaning that we couldn’t push the models and all of the training data to the repository. This was a big setback, since we spent a large amount of time developing the models. Furthermore, we didn’t want to have to pay for another service to store our models and the data, since we were already paying for Heroku.
- Since this issue came about at the end of the semester, we decided to search for other alternatives to the models we created. We ended up choosing to go for an open source NLP model from Hugging Face. Using the models from Hugging Face was relatively easy, as they provide an API that you can simply call in your Python code. It is free, but there is a limit to how many calls you can make per hour.

---

### Team member roles and responsibilities

Presentation:

- Demo → Luke Hancock
- Architecture Diagram → Daden Gabryszewski
- Introduction → Amogh Donthi
- Development → Derin Sozen

Project Overall:

- Frontend UI, web scraper development, API, Heroku research and deployment, development of chrome extension, HuggingFace model implementation → Luke Hancock
- Web scraper development,  bot avoidance development, web scraper testing → Derin Sozen
- … → …
- … → …
