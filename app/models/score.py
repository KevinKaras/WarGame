from .db import db  


class Score(db.Model):
    __tablename__ = "scores"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False)
    wins = db.Column(db.Integer, nullable = False, default = 1)

    #  Implement Db.Relationship here if tests are throwing errors


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "wins": self.wins
        }