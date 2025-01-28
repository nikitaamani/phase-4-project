from email_validator import EmailNotValidError, validate_email
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.sql import func
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer,
                   primary_key=True)  # Auto-incrementing primary key
    username = db.Column(
        db.String(50), nullable=False, unique=True
    )  # Username with max length of 50 characters, must be unique
    email = db.Column(
        db.String(255), nullable=False,
        unique=True)  # Email with max length of 255 characters, must be unique
    _password_hash = db.Column(
        db.String(255),
        nullable=False)  # Password hash with max length of 255 characters
    profile_picture = db.Column(db.Text)  # Profile picture (optional)
    created_at = db.Column(db.DateTime, default=func.now(
    ))  # Use func.now() to set the current timestamp for creation
    updated_at = db.Column(
        db.DateTime, default=func.now(),
        onupdate=func.now())  # Automatically updated on record modification

    __table_args__ = (db.CheckConstraint(
        "email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'",
        name='check_email_format'), )

    def __repr__(self):
        return f"<User {self.username}>"

    @validates('email')
    def validate_email(self, _, email):
        """
        Validate the email address provided by the user and return the
        normalized email if valid, or raise a ValueError if invalid.
        """
        try:
            # Validate the email using the email-validator library
            valid = validate_email(email)
            # Return the normalized email (e.g., lowercase and trimmed)
            return valid.email
        except EmailNotValidError as e:
            # Raise an exception for invalid emails
            raise ValueError(f'Invalid email address: {e}')


class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    id = db.Column(db.Integer,
                   primary_key=True)  # Auto-incrementing primary key
    title = db.Column(db.String(255),
                      nullable=False)  # Title of the book (required)
    author = db.Column(db.String(255),
                       nullable=False)  # Author's name (required)
    price = db.Column(db.Numeric(10, 2), nullable=False,
                      default=0.00)  # Price of the book, default is 0.00
    condition = db.Column(
        Enum('new', 'used', name='book_condition'),
        nullable=False,
        default='new'
    )  # Book condition, either 'new' or 'used', default is 'new'
    status = db.Column(
        Enum('available', 'rented', 'sold', name='book_status'),
        nullable=False,
        default='available')  # Book status, default is 'available'
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                        nullable=False)  # Foreign key to the users table

    def __repr__(self):
        return f"<Book {self.id} : {self.title}>"


class Transaction(db.Model, SerializerMixin):
    __tablename__ = 'transactions'

    #serialize rules
    # serialize_rules = ('-book.transactions', 'user.transactions', '-book.reviews', '-user.reviews')
    serialize_only = ('id', 'transaction_date', 'transaction_type', 'user_id',
                      "book_id")

    id = db.Column(db.Integer, primary_key=True)
    transaction_date = db.Column(db.DateTime)
    transaction_type = db.Column(Enum('purchase',
                                      'sale',
                                      'rent',
                                      name='transaction_type'),
                                 nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("books.id"))

    #relationships
    book = db.relationship('Book', back_populates='transactions')
    user = db.relationship('User', back_populates='transactions')