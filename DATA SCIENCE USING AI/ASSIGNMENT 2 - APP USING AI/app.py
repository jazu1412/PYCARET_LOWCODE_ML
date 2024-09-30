from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

expenses = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_expense', methods=['POST'])
def add_expense():
    name = request.form['name']
    amount = float(request.form['amount'])
    expense_type = request.form['type']
    date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    expense = {
        'name': name,
        'amount': amount,
        'type': expense_type,
        'date': date
    }
    
    expenses.append(expense)
    return jsonify({'success': True})

@app.route('/get_expenses')
def get_expenses():
    return jsonify(expenses)

if __name__ == '__main__':
    app.run(debug=True)