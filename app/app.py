from flask import Flask, render_template, jsonify

from .config import get_client

app = Flask(__name__)


@app.route('/')
def home():
    cilent = get_client()

    return 'Hello, World!'

@app.route('/index')
def index():
    return render_template('index.html')


if __name__ == " __main__ ":
    app.run(debug=true)
