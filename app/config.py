import os

from trello import TrelloClient

def get_client():
    from dotenv import load_dotenv
    load_dotenv()
    api_key=os.getenv("API_KEY")
    api_secret=os.getenv("API_SECRET")
    oauth_token=os.getenv("OAUTH_TOKEN")
    token_secret=os.getenv("TOKEN_SECRET")
    if not api_key or not oauth_token:
        raise NotImplemented

    return TrelloClient(
        api_key=api_key,
        api_secret=api_secret,
        token=oauth_token,
        token_secret=token_secret
    )