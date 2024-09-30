import unittest
from app import app, expenses
import json

class TestExpenseTracker(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True 

    def tearDown(self):
        expenses.clear()  # Clear expenses after each test

    def test_index_route(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Expense Tracker', response.data)

    def test_add_expense(self):
        response = self.app.post('/add_expense', data=dict(
            name='Test Expense',
            amount='100',
            type='Food'
        ))
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(len(expenses), 1)
        self.assertEqual(expenses[0]['name'], 'Test Expense')
        self.assertEqual(expenses[0]['amount'], 100.0)
        self.assertEqual(expenses[0]['type'], 'Food')

    def test_get_expenses(self):
        # Add a test expense
        self.app.post('/add_expense', data=dict(
            name='Test Expense',
            amount='100',
            type='Food'
        ))
        
        response = self.app.get('/get_expenses')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Test Expense')
        self.assertEqual(data[0]['amount'], 100.0)
        self.assertEqual(data[0]['type'], 'Food')

if __name__ == '__main__':
    unittest.main()