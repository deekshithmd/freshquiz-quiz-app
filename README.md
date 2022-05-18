<p align="center">
  <img src="https://i.postimg.cc/wBkfnyzT/freshquiz.png" height="150px" width="150px"/>
</p>

# FreshQuiz Quiz App

 ## Table of contents
 * [About](#about)
 * [Features](#features)
 * [Installation](#installation)
 * [Walkthrough](#walkthrough)
 
 ## About
 FreshQuiz is a quiz app containing agriculture related questions which can be used to test knowledge on different agriculture practices. This quiz app provides questions based on few categories featured in the app.
 
 ## Features
 There are different features available in different sections of the app
 
 1. Navigation bar
    * Logo is provided at first, it has the feature that if you click on logo when you are in different pages you will reach homepage.
    * Profile icon is provided to give user's profile details
    * Theme button provided to toggle between `light` and `dark` theme.
 
 2. Home Page <br>
    In homepage application information and one `CTA` button available, this CTA button can be used to enter the quiz process.
    
 3. Category Listing <br>
    * In this section available categories listed.<br>
    * In this application user can see categories like `Dairy`, `Poultry`, `Fish`, `Forest` Farming quizzes.
    * On clicking any category, roles page opens.
 4. Rules Page<br>
    * In this page it displays certain set of rules related to quiz
    * One CTA button provided, on clicking that user enters actual quiz.
 5. Quiz Page<br>
    * As the user lands into quiz page, he will see one button with `START` and 5 Min timer starts running.
    * By clicking `START` button user can answer questions.
    * Each question card shows
        * Question number, 
        * Button to `Quit` the quiz, 
        * Button to move to previous question
        * Button to move to next question.
        * Last question shows button to submit the quiz
 6. Result Page <br>
     * User can see his total score and percentage.
     * Button provided to naviagte to answer page
 7. Answer Page <br>
     * User can see answer to all questions
     * Correct answer marked with green and wrong answer marked with red.
8. User authentication <br>
      Following functionalities provided for user authentication
      * User Login
      * User Signp
      * User Logout
9. User Profile.<br>
      * This section displays users profile data
10. Loader & Alerts <br>
      * Loaders displays during action processing
      * Alerts displays when processing/Action completed

 
## Installation

* Clone the repository on local machine 
  ```
  git clone https://github.com/deekshithmd/freshquiz-quiz-app.git
  
  cd freshquiz-quiz-app
  ```
* Configure secret file <br>
  
  Create `.env` file in project folder and add the following code,
  ```
  REACT_APP_JWT_SECRET="your_secret_code"
  ```
  
* Install dependencies using package installer 
  ```
  npm install
  ```
  
* Run the app
  ```
  npm start
  ```
  
 ## Walkthrough
 
![FreshViiew](https://github.com/deekshithmd/Data/blob/main/Gifs/freshquiz-quiz.gif)
