import os

from trello import TrelloClient

def get_client():
    from dotenv import load_dotenv
    load_dotenv()
    api_key=os.getenv("API_KEY")
    api_secret=os.getenv("API_SECRET")
    if not api_key or not api_secret:
        raise NotImplemented

    return TrelloClient(
        api_key=api_key,
        api_secret=api_secret,
    )