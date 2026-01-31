from flask import Blueprint, request, jsonify
from models import db, Task

task_routes = Blueprint("task_routes", __name__)

@task_routes.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

@task_routes.route("/tasks", methods=["POST"])
def add_task():
    data = request.json
    task = Task(
        title=data["title"],
        description=data.get("description", ""),
        status=data.get("status", "Pending")
    )
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201

@task_routes.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    task = Task.query.get_or_404(id)
    data = request.json
    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    task.status = data.get("status", task.status)
    db.session.commit()
    return jsonify(task.to_dict())

@task_routes.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = Task.query.get_or_404(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"})

@task_routes.route("/tasks/<int:task_id>/status", methods=["PUT"])
def update_task_status(task_id):
    data = request.json
    task = Task.query.get_or_404(task_id)

    task.status = data.get("status", task.status)
    db.session.commit()

    return jsonify(task.to_dict()), 200
