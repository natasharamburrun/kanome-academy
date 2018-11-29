from flask import Flask, render_template, jsonify

import requests

from .config import get_client

app = Flask(__name__)


@app.route('/', methods=['GET'])
def boards():
    cilent = get_client()
    endpoint = 'https://api.trello.com/1/boards'
    response = requests.request("GET", url)
    return jsonify

    # return 'Hello, World!'

@app.route('/index')
def index():
    return render_template('index.html')


if __name__ == " __main__ ":
    app.run(debug=true)
