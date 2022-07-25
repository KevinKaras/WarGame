from flask import Flask
from app.config import Config
from flask_cors import CORS
from .models import db, Score
from flask_migrate import Migrate
from .forms.SignUpForm import SignUpForm

# print(Migrate)
# print(Flask)

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)
CORS(app)


# HOME ROUTE
@app.route('/')
def Home():

    # GRAB ALL SCORES
    # GRAB ALL USERS 
    # FOR LEADERBOARD
    scores = Score.query.all()
    return {"score": [score.to_dict() for score in scores]}

@app.route('/signup', methods=["POST"])
def SignUp():
    # GRAB INFO FROM REQUEST
    # CREATE SIGNUPFORM WITH INFO FROM REQUEST
    # MAKE NEW ADDITION TO DATABASE, COMMIT CHANGES
    form = SignUpForm()
    print(form.data)
    newScore1 = Score(
        name = form.data["name1"],
        wins = 0
    )
    newScore2 = Score(
        name = form.data["name2"],
        wins = 0
    )

    db.session.add_all([newScore1,newScore2])
    db.session.commit()
    scores = {
        newScore1,
        newScore2
    }
    
    return {"Scores": score.to_dict() for score in scores}

@app.route('/win/<int:id>')
def Winner(id):
    # GRAB USER BY ID
    # UPDATE HIS/HERS WINS BY 1
    # RETURN USER:ID, SCORE OF USERID
    return "<div>NOT BAD</div>"