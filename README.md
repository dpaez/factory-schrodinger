# La fábrica de Schrödinger

El contenido vive en `slides/*.md` (una sección por archivo). El orden de los archivos está en `index.html`.

```bash
npm run dev
# → http://localhost:4321/
```

Al guardar un `.md`, Vite recarga la página. El hash de reveal.js vuelve al mismo slide.

## Teclas

`→` / `espacio` avanzar · `←` volver · `S` vista de presentador · `F` fullscreen · `Esc` overview · `C` cambiar el estilo del gato

## Sintaxis

```md
<!-- .slide: class="section inv" data-title="El experimento" data-deco="grid" data-sec="§ Cierre" -->

<p class="label">etiqueta chiquita</p>

## Título que puede
seguir en otra línea

Párrafo. *itálica* **negrita** <u>subrayado</u> `código` [link](https://…)

<span class="logo geut" role="img" aria-label="GEUT"></span>
<span class="logo lpjs" role="img" aria-label="LaPlataJS"></span>

<p class="fragment">aparece con cada avance</p>

<div class="cols" style="grid-template-columns: 1fr 560px">
<div class="col">…</div>
<div class="col aside fragment">…</div>
</div>

<div data-comp="nombre" data-clave="valor">
  <ul>
    <li class="fragment"><b>título</b><span>texto</span></li>
  </ul>
</div>

Note:
Todo lo que sigue a `Note:` son las notas del presentador.

---
```

- Clases útiles: `label`, `lead`, `muted`, `fragment`, `big-quote`, `mid-quote`, `eq`, `act`, `sub`, `badge`, `punch`, `cite`.
- `data-deco`: `orbit`, `orbit-small`, `rings`, `rings-big`, `grid`, `diag`, `wave`, `axis`.
- `class` en el slide: `section inv` (divisor de acto, fondo negro), `title-slide`, `closing`.
- `data-sec` pisa la numeración automática (`§ I.1`).

## Componentes

Van como HTML, no como `::nombre`. Los que llevan lista leen los `<li>`.

| componente | uso |
|---|---|
| `data-comp="title-box"` | caja del título, se abre con click |
| `data-comp="experiment" data-caption="…"` | figura del experimento |
| `data-comp="observe"` | gato + botón `observar()` |
| `data-comp="det-demo"` | `sum()` vs `agent()` |
| `data-comp="tokens" data-caption="…"` | contador + gráfico de tokens |
| `data-comp="map" data-state="lost\|arrived" data-caption="…"` | mapa; en `arrived` el punto avanza con los fragmentos del slide |
| `data-comp="timeline" data-marks="dic 2025, …"` | línea de tiempo |
| `data-comp="chain"` + `<li><b>título</b><span>texto</span>` | cadena de nodos (`dashed` por ítem) |
| `data-comp="files"` + la misma lista | evolución del estado |
| `data-comp="shot" data-src="…" data-stamp="…" data-caption="…"` | screenshot |
| `data-comp="stages"` + `<li><b>stage</b><span>skill</span>` | chips de stages |
| `data-comp="anatomy"` + listas `data-layer="stack\|stages\|aside"` | lámina: stack, stages en trazo continuo, skills en punteado (`opc.` en el ítem, `data-machinery` debajo) |
| `data-comp="supervisor" data-name="…" data-sub="…"` | la caja que se achica con los pasos |
| `data-comp="loop" data-stages="spec, plan, …"` | loop animado del controller |
| `data-comp="api" data-hub="API" data-sub="…"` + 2 ítems `data-title` | controller ↔ API ↔ dashboard |
| `data-comp="cloud" data-n="40" data-caption="…"` | grilla de subagentes |
| `data-comp="ratio" data-min="22"` + lista | barra prosa vs código |
| `data-comp="repos"` + `<li data-name data-url>` | tarjetas con link |
| `data-comp="videos"` + `<li data-url data-thumb>` | thumbnails con play y link (`data-pos` ajusta el recorte) |
| `data-comp="take" data-start="1"` + `<li><b>título</b><span>texto</span>` | conclusiones numeradas |
| `data-comp="closing-cat"` | gato + mate del cierre |

## El gato

Hay 4 estilos en `cats.js`: `line` (el de v2, el rollback), `geo`, `ascii`, `dots`. Se cambian con `C` (queda guardado en el navegador) o con `?cat=geo` en la URL. Para fijar uno por defecto, cambiar `'line'` en `cats.js`.
