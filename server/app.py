from flask import Flask, jsonify, request, redirect, render_template, flash
import os

app = Flask(__name__)
app.secret_key = "not a secret key"


@app.route('/',  methods=['GET'])
def hello_world():
    return "Welcome to Driver Assistant"


@app.route('/getClusters', methods=['GET', 'POST'])
def get_clusters(location):
    return "No clusters for you."


@app.route('/confirmClusters', methods=['POST'])
def confirm_clusters(location, datetime):
    return "Clusters confirmed, the world will end soon."


if __name__ == '__main__':
    host = '0.0.0.0'
    default_port = 5000
    PORT = int(os.environ.get('PORT', default_port))
    app.run(host=host, debug=True, port=PORT)
