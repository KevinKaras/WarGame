from flask import Flask
from app.config import Config
from .models import db, User
from flask_migrate import Migrate

print(Flask)

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)


@app.route('/')
def Home():
    
    user = User.query.all()
    print(user)
    return "<div>NOT BAD</div>"