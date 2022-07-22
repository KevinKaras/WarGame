from flask import Flask
from app.config import Config
from .models import db  
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)


@app.route('/')
def Home():
    return "<div>SAMPLE APP</div>"