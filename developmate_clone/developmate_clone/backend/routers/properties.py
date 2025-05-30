from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Property(BaseModel):
    id: int
    address: str
    lat: float
    lon: float

@router.get("/properties")
def list_properties():
    return [{"id": 1, "address": "123 Main St", "lat": 29.76, "lon": -95.37}]
