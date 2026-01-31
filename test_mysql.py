import pymysql

conn = pymysql.connect(
    host="localhost",
    user="root",
    password="Pass@123",
    database="task_manager",
    port=3306
)

print("✅ MySQL 8.0 connected successfully")
conn.close()
