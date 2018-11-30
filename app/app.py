from flask import Flask, render_template, jsonify

import requests
import os


from .config import get_client

app = Flask(__name__)


@app.route('/', methods=['GET'])
def boards():
    client = get_client()
    API_KEY = os.getenv("API_KEY")
    TOKEN = os.getenv("TOKEN")
    url = 'https://api.trello.com/1/boards/5bb34b7b941a295e2ecd1c12?key={api_key}&token={token}'.format(api_key=API_KEY, token=TOKEN)
    response = requests.request("GET", url)
    # print(response.text)
    # print(response.json())

    res = response.json()

    return jsonify(id=res['id'], name=res['name'])
    # return 'done'

    # return 'Hello, World!'

@app.route('/index')
def index():
    return render_template('index.html')


if __name__ == " __main__ ":
    app.run(debug=true)
