from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-response', methods=['POST'])
def get_response():
    user_input = request.json.get("message")
    bot_response = "Lo siento, no entiendo."

    if "hola" in user_input.lower():
        bot_response = "¡Hola! ¿Cómo estás?"
    elif "adiós" in user_input.lower():
        bot_response = "¡Adiós! Que tengas un buen día."

    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)
