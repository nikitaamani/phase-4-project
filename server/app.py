#!/usr/bin/env python3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Initialize Flask app
app = Flask(__name__)

# Configuration for SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Change to your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)


@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

