from fastapi import FastAPI

app = FastAPI()

@app.get("/app/v1/")
async def read_root():
    return {"Hello": "World"}
