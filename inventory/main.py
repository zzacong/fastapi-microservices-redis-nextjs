from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.model import Product, format_product

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/")
def read_root():
  return {"Hello": "Inventory"}


@app.get('/products')
def get_products():
  return [format_product(pk) for pk in Product.all_pks()]


@app.get('/products/{product_id}')
def get_products(product_id: str):
  return format_product(Product.get(product_id).pk)


@app.post('/products', status_code=201)
def create_product(product: Product):
  return product.save()


@app.delete('/products/{product_id}')
def delete_product(product_id: str):
  return Product.delete(product_id)
