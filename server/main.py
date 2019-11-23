from flask import abort, redirect, url_for

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login')
def login():
    abort(401)
    this_is_never_executed()

@app.route('/get-clusters', methods=['GET', 'POST'])
def clusters():
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
      pass


@app.route('/get-rating', methods=['GET', 'POST'])
def rating():
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
      pass
