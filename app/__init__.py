from flask import Flask
from app.config import Config
from .models import db, Score
from flask_migrate import Migrate
from .forms.SignUpForm import SignUpForm

print(SignUpForm)
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
    scores = Score.query.all()
    return {"score": score.to_dict() for score in scores}

@app.route('/SignUp')
def SignUp():
    # GRAB INFO FROM REQUEST
    # CREATE SIGNUPFORM WITH INFO FROM REQUEST
    # MAKE NEW ADDITION TO DATABASE, COMMIT CHANGES
    form = SignUpForm()
    
    
    return 


# @app.route('/')
# def Home():
#     # 
#     user = User.query.all()
#     return "<div>NOT BAD</div>"

# ROUTE TO UPDATE WINS FOR USER ID
@app.route('/win/<int:id>')
def Winner(id):
    # GRAB USER BY ID
    # UPDATE HIS/HERS WINS BY 1
    # RETURN USER:ID, SCORE OF USERID
    return "<div>NOT BAD</div>"