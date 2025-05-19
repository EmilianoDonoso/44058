## README

Este proyecto utiliza ANTLR4 para generar analizadores léxicos y sintácticos. Se ejecuta desde Visual Studio Code utilizando npm.

## Instalación

.Paso 1: Clonar el repositorio

Abrí una terminal y ejecutá:

git clone https://github.com/EmilianoDonoso/44058.git

Luego:

cd 44058

.Paso 2: Abrir el proyecto en Visual Studio Code

Desde la misma terminal:

code .

O de forma manual:

File → Open Folder… → Seleccioná 44058


## Instrucciones de uso

Paso 1: Ejecutar el programa

Desde la terminal integrada de Visual Studio Code (con el proyecto ya abierto), ejecutá el siguiente comando:

npm start

El script hará automáticamente:

.Validar la entrada según la gramática ANTLR4.

.Mostrar en consola el árbol de derivación.

.Interpretar y ejecutar la acción principal, que puede incluir mover archivos, escaneo profundo y notificaciones.

.Indicar al final que la acción ha concluido.


Paso 2: Ver el árbol de derivación y los tokens en VS Code

1) Asegurate de tener instalada la extensión ANTLR4 grammar syntax support.

2) Abrí el archivo de gramática (Parcial2.g4) en VS Code.

3) Presioná F5 o ubicate en Run → Start Debugging.

4) En el Debug Console verás la lista de tokens generada por el lexer. 

5) En la vista de ANTLR Parse Tree se mostrará gráficamente el árbol de derivación.

6) Podés hacer clic derecho en nodos o tokens para ver reglas, tipos y texto asociado.

7) Para refrescar, cambia tu entrada de ejemplo o la gramática y volvé a presionar F5.
