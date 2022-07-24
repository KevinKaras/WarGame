from flask_wtf import FlaskForm

from wtforms import StringField
# print(FlaskForm)

class SignUpForm(FlaskForm):
    name1=StringField('Name1')
    name2=StringField('Name2')