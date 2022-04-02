from redis_om import HashModel
from .database import redis


class Product(HashModel):
  name: str
  price: float
  quantity: int

  class Meta:
    database = redis


def format_product(pk: str):
  product = Product.get(pk)
  return {"id": product.pk, "name": product.name, "price": product.price, "quantity": product.quantity}
