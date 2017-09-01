
from flask import Flask, Response, json, jsonify, request
from flask_bootstrap import Bootstrap
from flask import render_template
import csv



app = Flask(__name__)
Bootstrap(app)

def get_csv():
    csv_path = './static/assets/data/asansol.csv'
    csv_file = open(csv_path, 'r')
    csv_obj = csv.DictReader(csv_file)
    csv_list = list(csv_obj)
    return csv_list



@app.route("/", methods = ['GET', 'POST'])
def index():
    template = 'index.html'
    object_list = get_csv()
    return render_template(template, object_list=object_list)



if __name__ == "__main__":
    #app.run(host='0.0.0.0')
    app.run(debug=True)