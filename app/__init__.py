from flask import Flask
from app.config import Config
from .models import db, User
from flask_migrate import Migrate

print(Flask)

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)

# HOME ROUTE
@app.route('/')
def Home():

    # GRAB ALL SCORES
    # GRAB ALL USERS 
    # FOR LEADERBOARD
    user = User.query.all()
    return "<div>NOT BAD</div>"


@app.route('/')
def Home():
    # 
    user = User.query.all()
    return "<div>NOT BAD</div>"

# ROUTE TO UPDATE WINS FOR USER ID
@app.route('/win/<int:id>')
def Winner(id):
    # GRAB USER BY ID
    # UPDATE HIS/HERS WINS BY 1
    # RETURN USER:ID, SCORE OF USERID
    user = User.query.all()
    return "<div>NOT BAD</div>"