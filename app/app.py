from flask import Flask, render_template, jsonify

import requests
import os


from .config import get_client

app = Flask(__name__)


@app.route('/', methods=['GET'])
def boards():
    client = get_client()
    API_KEY = os.getenv("API_KEY")
    OAUTH_TOKEN = os.getenv("API_SECRET")
    url = 'https://api.trello.com/1/boards/5bb34b7b941a295e2ecd1c12?key={api_key}&token={oauth_token}'.format(api_key=API_KEY, oauth_token=OAUTH_TOKEN)
    print(response.text)
    return jsonify

    # return 'Hello, World!'

@app.route('/index')
def index():
    return render_template('index.html')


if __name__ == " __main__ ":
    app.run(debug=true)
