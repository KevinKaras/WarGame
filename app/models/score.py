from .db import db  


class Score(db.Model):
    __tablename__ = "scores"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), db.ForeignKey("users.id"))
    wins = db.Column(db.Integer, nullable = False, default = 1)
    # implement the back_populates if deletion cascading error

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "wins": self.wins
        }