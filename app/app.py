from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)


## Function composition


def make_endpoint(resource, resource_id="", key="", token=""):
    if key:
        API_KEY = key
    else:
        API_KEY = os.getenv("API_KEY")
    if token:
        TOKEN = token
    else:
        TOKEN = os.getenv("TOKEN")
    endpoint = ""
    if resource == "board":
        endpoint = "https://api.trello.com/1/boards/5bb34b7b941a295e2ecd1c12/cards?key={api_key}&token={token}".format(
            api_key=API_KEY, token=TOKEN
        )
    elif resource == "cards":
        endpoint = "https://api.trello.com/1/cards/{idCard}/members?key={api_key}&token={token}".format(
            idCard=resource_id, api_key=API_KEY, token=TOKEN
        )
    return endpoint


def make_get_response(resource, resource_id="", key="", token=""):
    endpoint = make_endpoint(resource, resource_id=resource_id, key=key, token=token)
    return requests.get(endpoint)


## Views


@app.route("/board", methods=["GET"])
def boards():
    response = make_get_response("board")
    return jsonify(response.json())


@app.route("/cards/<string:idCard>", methods=["GET"])
def card(idCard):
    response = make_get_response("cards", resource_id=idCard)
    return jsonify(response.json())


if __name__ == " __main__ ":
    app.run(debug=True)
