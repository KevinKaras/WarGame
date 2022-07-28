# from flask import Flask
# from app.config import Config
# from flask_cors import CORS
# from app.models import db, Score
# from flask_migrate import Migrate


# def test_home_route():
#     app = Flask(__name__)
#     app.config.from_object(Config)
#     db.init_app(app)
#     Migrate(app, db)
#     CORS(app)
#     url = '/'
#     client = app.test_client(url)
    


#     # HOME ROUTE
#     @app.route('/')
#     def Home():

#         # GRAB ALL SCORES
#         # GRAB ALL USERS 
#         # FOR LEADERBOARD
#         scores = Score.query.all()
#         return {"score": [score.to_dict() for score in scores]}

#     res = client.get('http://127.0.0.1:5000/')
#     print(res)
#     assert res.status_code == 200

# def test_score_creation():
#     score = Score(name='TestSubject', wins=10)

#     assert score.name == 'TestSubject'
#     assert score.wins == 10