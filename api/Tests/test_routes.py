from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/testing', methods=['GET', 'POST'])
def testing():
    if request.method == "GET":
        return jsonify({"response": "Get Request Called"})
    elif request.method == "POST":
        #req_Json = request.json
        #name = req_Json['name']
        return jsonify({"response": "Post request called " })
if __name__ == '__main__':
    app.run(debug=True, port=9090)
