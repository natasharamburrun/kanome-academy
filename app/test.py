from unittest import mock
from app import app
import requests
import os


def test_make_endpoint():
    resource = "board"
    resource_id = "testresourceid123"
    key = "testkey123"
    token = "testtoken123"
    board_endpoint = app.make_endpoint(
        resource, resource_id=resource_id, key=key, token=token
    )
    assert (
        board_endpoint
        == "https://api.trello.com/1/boards/5bb34b7b941a295e2ecd1c12/cards?key={api_key}&token={token}".format(
            api_key=key, token=token
        )
    )


@mock.patch("requests.get", mock.Mock(side_effect=lambda x: x))
def test_make_get_response():
    resource = "board"
    resource_id = "testresourceid123"
    key = "testkey123"
    token = "testtoken123"
    board_endpoint = app.make_endpoint(
        resource, resource_id=resource_id, key=key, token=token
    )
    board_response = app.make_get_response(
        resource, resource_id=resource_id, key=key, token=token
    )

    assert board_response == board_endpoint

