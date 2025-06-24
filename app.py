import chardet
from flask import request, send_from_directory
from flask import Flask, render_template, jsonify
import json
from markdown_it import MarkdownIt



app = Flask(__name__, static_folder="static", template_folder="templates")



@app.route('/')
def index():
    dark_mode = request.cookies.get('darkMode') == 'true'
    return render_template('index.html', dark_mode=dark_mode)

@app.route("/about.txt")
def about_txt():
    return send_from_directory("static", "about.txt")

@app.get('/api/projects')
def projects():
    with open('data/projects.json') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/project/<slug>')
def project_detail(slug):
    filepath = f'blogs/{slug}.md'
    
    try:
        # Step 1: Read file in binary mode
        with open(filepath, 'rb') as file:
            raw = file.read()
            detected = chardet.detect(raw)
            encoding = detected['encoding'] or 'utf-8'
            
        # Step 2: Try reading using detected encoding
        try:
            md_content = raw.decode(encoding)
        except UnicodeDecodeError:
            print(f"Failed to decode using {encoding}, trying UTF-8 with errors='replace'")
            md_content = raw.decode('utf-8', errors='replace')  # Fallback

        # Step 3: Render Markdown
        markdown = MarkdownIt('gfm-like').enable('linkify')
        html_content = markdown.render(md_content)

        return render_template('project_detail.html', content=html_content, project=slug)

    except FileNotFoundError:
        return "Project not found", 404


if __name__ == '__main__':
    app.run(debug=True)
