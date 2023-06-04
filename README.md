# T6 JUEGO DE LA MONEDA JS

1. OBJETIVO PEDAGÓGICO
* Desarrollar conocimientos suficientes para el uso de JavaScript en páginas webs dinámicas.

2. OBJETIVO DE TALLER
* Aplicar conceptos fundamentales de javascript.
* Manipular el DOM accediendo a elementos HTML para modificar sus atributos.
* Gestionar eventos asociados a elementos HTML para obtener datos de forma
 dinámica.
 
3. DESCRIPCIÓN
* Tu misión es desarrollar el juego de azar “Cara o Cruz”
  utilizando HTML, CSS y Javascript. El objetivo del juego es
  sumar un punto a cada cara de la moneda cada vez que caiga en esa cara.
  
4. FUNCIONALIDADES
* El juego DEBE tener 2 botones:
  - Girar la moneda.
  - Reiniciar el juego.
* El juego debe tener 2 contadores que almacenen los puntajes según el lado de la moneda que haya caído:
  - Contador cara: n veces cara.
  - Contador cruz: n veces cruz.

5. INTERFAZ
* El juego DEBE tener una interfaz atractiva.
* El usuario TIENE que ver una moneda.
* La moneda DEBE estar animada para que haga el efecto de que gira cada que se lanza.
* La cara que se muestra DEBE coincidir con el puntaje que se añade al contador que corresponda.

<-------------------------------------------------------------------------------------------------------->

Además de éstos prerequisitos, he hecho uso de:
* BEN Naming.
* Uso de HTML Semantic Elements.
* Atención a la Accesibilidad (realizado test con la herramienta de Dev Tools de Firefox Developer Edition: Inspect Accessibility Properties: todos pasados positivamente,
  sin ningún tipo de error/problema).
  - Contrastes adecuados.
  - Navegación mediante el teclado a través de la interfaz del juego (interactividad con ambos botones).
  - Text Labels: ambas imágenes de la moneda, con su respectivo "alt".
* Responsive: sin empleo de Media Queries, usando exclusivamente unidades relativas (vw, vh, vmax, vmin, y %).
  Tanto en vertical, como en horizontal en dispositivos móviles.
* Inclusión de animaciones en los dos botones que accionan el juego (:focus, :hover y :active).

6. EXTRAS:
- Mediante JavaScript, he incluído una serie de mensajes interactivos con el usuario:
  * Mensaje de bienvenida.
  * Resultado al "lanzar" la moneda.
  * Tras cada "lanzamiento" de la moneda, se pregunta al usuario si desea seguir jugando.
  * Si su respuesta es afirmativa, continúa el juego. Si es negativa, se le ofrece la opción de abandonar el juego.
  * Si responde que quiere abandonar, se le ofrece la opción de realmente abandonar el juego, o si se arrepiente,
    se ofrece la opción de regresar y seguir jugando.
  * Si abandona, se le muestra un mensaje a modo de despedida, y los marcadores se resetean, volviendo a 0.
  * También se muestra un mensaje con dos opciones cuando se hace click sobre el botón de Reset: seguir adelante con
    el "reset", o seguir jugando.


