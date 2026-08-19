#!/usr/bin/env python3
"""Verifica que cada href/src/action/fetch/require local apunte a un archivo existente.
Correr desde la raíz del proyecto:  python3 check_enlaces.py"""
import re, pathlib, sys
from urllib.parse import unquote

RAIZ = pathlib.Path(__file__).parent
PATRON = re.compile(r'(?:href|src|action|content)="([^"]+)"|fetch\("([^"]+)"|require(?:_once)? "([^"]+)"|url\("([^"]+)"\)')
SITIO = "https://azuu.uk"  # las URLs propias también deben resolver a un archivo local

rotos = []
for p in RAIZ.rglob("*"):
    if p.suffix not in {".html", ".js", ".php", ".css"} or ".git" in p.parts or ".claude" in p.parts:
        continue
    for n, linea in enumerate(p.read_text(encoding="utf-8").splitlines(), 1):
        for m in PATRON.finditer(linea):
            ref = next(g for g in m.groups() if g)
            # ponytail: se saltan externos, anclas, mailto y plantillas ${...}
            if ref.startswith(SITIO):
                ref = ref[len(SITIO):] or "/index.html"
            elif re.match(r"^(https?:|//|#|mailto:|data:)", ref) or "${" in ref or not ref:
                continue
            # content= trae texto suelto (descripciones, og:title); solo miramos rutas
            if not re.search(r"\.(html|php|css|js|png|jpe?g|webp|svg|epub|xml|txt|ico)$", ref.split("?")[0]):
                continue
            ruta = unquote(ref.split("?")[0].split("#")[0])
            # en .js el navegador resuelve contra la URL de la página (todas en la raíz),
            # no contra el archivo .js; en .php el require sí es relativo al archivo
            base = RAIZ if ruta.startswith("/") or p.suffix == ".js" else p.parent
            if not (base / ruta.lstrip("/")).exists():
                rotos.append(f"{p.relative_to(RAIZ)}:{n}  ->  {ref}")

print("\n".join(rotos) if rotos else "OK: todas las referencias locales resuelven")
sys.exit(1 if rotos else 0)
