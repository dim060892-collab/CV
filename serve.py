#!/usr/bin/env python3
import http.server, os, sys

PORT = 8124
DIR  = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

print(f"Serving http://localhost:{PORT}  (dir: {DIR})")
with http.server.HTTPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
