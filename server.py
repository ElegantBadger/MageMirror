from flask import Flask, request
app = Flask(__name__, static_url_path='/static')

@app.route('/')
def root():
    return app.send_static_file('index.html')
