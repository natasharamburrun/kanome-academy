from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests
import os

from .config import get_client

app = Flask(__name__)
CORS(app)



@app.route('/board', methods=['GET'])
# @cross_origin(allow_headers=['Content-Type'])
def boards():
    client = get_client()
    API_KEY = os.getenv("API_KEY")
    TOKEN = os.getenv("TOKEN")
    url = 'https://api.trello.com/1/boards/5bb34b7b941a295e2ecd1c12/cards?key={api_key}&token={token}'.format(api_key=API_KEY, token=TOKEN)

    response = requests.request("GET", url)
    print(response.json())
    res = response.json()

    return jsonify(response.json())

    # *** Get all boards and lists ***

    # all_boards = client.list_boards()
    # last_board = all_boards[-1]
    # last_board.list_lists()

    # for list in last_board.list_lists():
    #     print(list.name)
    #     print(list.id)

    # # *** Get cards (ID Level) ***

    # list_id = '5bb34b8a8109ec3a6649237f'     
 
    # my_list = last_board.get_list(list_id)

    # for card in my_list.list_cards():
    #     print(card.name)
    #     print(card.id)
    #     print(card.closed)

    # return last_board.name


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == " __main__ ":
    app.run(debug=true)
