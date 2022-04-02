from functools import lru_cache
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.background import BackgroundTasks
import requests, time

from src.config import Settings
from src.database import redis
from src.model import Order

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)


@lru_cache()
def get_settings():
  return Settings()


@app.get("/")
def read_root():
  return {"Hello": "payment"}


# @app.get('/products')
# def get_products():
#   return [format_product(pk) for pk in Product.all_pks()]


# @app.get('/products/{product_id}')
# def get_products(product_id: str):
#   return format_product(Product.get(product_id).pk)


@app.post('/orders', status_code=201)
async def create_order(background_tasks: BackgroundTasks, product_id: str = Body(...), quantity: int = Body(...)):
  res = requests.get(
      f"{get_settings().inventory_server_url}/products/{product_id}"
  )
  product = res.json()
  print(product)
  order = Order(
      product_id=product_id,
      price=product['price'],
      fee=0.2 * product['price'],
      total=1.2 * product['price'],
      quantity=quantity,
      status="pending"
  )
  order.save()

  background_tasks.add_task(order_completed, order)

  return order


@app.get('/orders/{order_id}')
def get_order(order_id: str):
  return Order.get(order_id)


def order_completed(order: Order):
  time.sleep(5)
  order.status = "completed"
  order.save()
  redis.xadd('order_completed', order.dict(), '*')
