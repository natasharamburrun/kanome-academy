from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests
import os

# from .config import get_client

app = Flask(__name__)
CORS(app)



@app.route('/board', methods=['GET'])
def boards():
    # client = get_client()
    API_KEY = os.getenv("API_KEY")
    TOKEN = os.getenv("TOKEN")
    url = 'https://api.trello.com/1/boards/5bb34b7b941a295e2ecd1c12/cards?key={api_key}&token={token}'.format(api_key=API_KEY, token=TOKEN)

    response = requests.request("GET", url)
    print(response.json())

    return jsonify(response.json())


@app.route('/card/<string:idCard>', methods=['GET'])
def card(idCard):
    API_KEY = os.getenv("API_KEY")
    TOKEN = os.getenv("TOKEN")
    url = 'https://api.trello.com/1/cards/{idCard}/members?key={api_key}&token={token}'.format(idCard=idCard,api_key=API_KEY, token=TOKEN)
   
    response = requests.request("GET", url)
    print(response.json())

    return jsonify(response.json())


if __name__ == " __main__ ":
    app.run(debug=True)
