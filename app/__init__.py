from flask import Flask
from .config import Config
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
    # FOR LEADERBOARD
    scores = Score.query.all()
    return {"score": [score.to_dict() for score in scores]}

@app.route('/signup', methods=["POST"])
def SignUp():
    # GRAB INFO FROM REQUEST
    # CREATE SIGNUPFORM WITH INFO FROM REQUEST
    # MAKE NEW ADDITION TO DATABASE, COMMIT CHANGES
    form = SignUpForm()
    # print(form.data)
    MatchedFirst = Score.query.filter(Score.name == form.data["name1"]).one_or_none()
    MatchedSecond = Score.query.filter(Score.name == form.data["name2"]).one_or_none()


    if(MatchedFirst == None):
        newScore1 = Score(
            name = form.data["name1"],
            wins = 0
        )
        db.session.add(newScore1)
    if(MatchedSecond == None):
        newScore2 = Score(
            name = form.data["name2"],
            wins = 0
        )
        db.session.add(newScore2)
        db.session.commit()
    
    if(MatchedFirst):
        newScore1 = MatchedFirst
    if(MatchedSecond):
        newScore2 = MatchedSecond
    
    scores = {
        newScore1,
        newScore2
    }
    
    return {"Scores": [score.to_dict() for score in scores]}

@app.route('/win/<int:id>')
def Winner(id):
    print(id)
    MatchedFirst = Score.query.filter(Score.id == id).one()
    MatchedFirst.wins += 1
    db.session.commit()


    return "<div>NOT BAD</div>"