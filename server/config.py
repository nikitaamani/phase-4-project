import os

from flask import Flask
from flask_bcrypt import Bcrypt
from utils import generate_secret_key

SECRET_KEY = os.environ.get('SECRET_KEY') or generate_secret_key()
SQLALCHEMY_DATABASE_URI = os.environ.get(
    'DATABASE_URI') or 'sqlite:///bookshub.db'

# Create a Flask instance
app = Flask(__name__)
app.secret_key = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSON_SORT_KEYS'] = False

# Initialize bcrypt
bcrypt = Bcrypt(app)