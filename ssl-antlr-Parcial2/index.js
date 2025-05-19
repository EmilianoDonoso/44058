import Parcial2Lexer from './generated/Parcial2Lexer.js';
import Parcial2Parser from './generated/Parcial2Parser.js';
import antlr4 from 'antlr4';
import readline from 'readline';
import fs from 'fs';
import { CustomParcial2Visitor } from './CustomParcial2Visitor.js';

// Defino un listener de errores personalizado para notificar
class ThrowingErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.log("NOTIFICACION: Error durante el procesamiento.");
        throw new Error(`Error en ${line}:${column} – ${msg}`);
    }
}

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = antlr4.CharStreams.fromString(input);
    let lexer = new Parcial2Lexer(inputStream);
    lexer.addErrorListener(new ThrowingErrorListener());

    let tokenStream = new antlr4.CommonTokenStream(lexer);
    let parser = new Parcial2Parser(tokenStream);
    parser.addErrorListener(new ThrowingErrorListener());

    try {
        let tree = parser.prog();

        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomParcial2Listener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomParcial2Visitor();
        visitor.visit(tree);   
    } catch (error) {
        // El error ya fue notificado por ThrowingErrorListener
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
