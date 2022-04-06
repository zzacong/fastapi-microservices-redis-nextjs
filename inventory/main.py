from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio

from src.router import router
from src.consumer import consume

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/")
def index():
  return {"Hello": "Inventory"}


app.include_router(router)
asyncio.create_task(consume())
