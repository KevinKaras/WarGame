import os
from flask import Flask
from flask import Flask, render_template, request, session, redirect
from .config import Config
from flask_cors import CORS
from .models import db, Score
from flask_wtf.csrf import CSRFProtect, generate_csrf
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
@app.route('/api/')
def Home():

    # GRAB ALL SCORES
    # FOR LEADERBOARD
    scores = Score.query.all()
    return {"score": [score.to_dict() for score in scores]}

@app.route('/api/signup', methods=["POST"])
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

@app.route('/api/win/<int:id>')
def Winner(id):
    print(id)
    MatchedFirst = Score.query.filter(Score.id == id).one()
    MatchedFirst.wins += 1
    db.session.commit()


    return "<div>NOT BAD</div>"

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')