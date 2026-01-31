from urllib.parse import quote_plus

DB_USER = "root"
DB_PASSWORD = quote_plus("Pass@123")  # VERY IMPORTANT
DB_HOST = "localhost"
DB_PORT = "3306"
DB_NAME = "task_manager"

class Config:
    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
