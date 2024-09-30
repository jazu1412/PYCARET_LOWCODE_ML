# Expense Tracker Application

This is a simple Expense Tracker application built with Python Flask, featuring a sleek and modern dark-themed UI.

## Video Demo

Check out the video demo of the application [here](https://drive.google.com/file/d/1KfrHWDwmiXiSqL9-osOLQy7nHrnrYMRV/view?usp=sharing).

## Features

- Add expenses with name, amount, and type
- View list of added expenses
- Display expenses in a pie chart grouped by type
- Dark-themed, responsive UI

## Running the Application

To run the Expense Tracker application:

1. Ensure you have Python and Flask installed.
2. Navigate to the project directory:
   ```
   cd "DATA SCIENCE USING AI/ASSIGNMENT 2 - APP USING AI"
   ```
3. Run the Flask application:
   ```
   python app.py
   ```
4. Open a web browser and go to `http://127.0.0.1:5000`

## Running Unit Tests

To run the unit tests for the application:

1. Navigate to the project directory:
   ```
   cd "DATA SCIENCE USING AI/ASSIGNMENT 2 - APP USING AI"
   ```
2. Run the tests using the following command:
   ```
   python -m unittest test_app.py
   ```

## Note

This application stores expenses in memory, so data will be reset when the server is restarted. For persistent storage, consider integrating a database in future enhancements.
