import Parcial2Visitor from './generated/Parcial2Visitor.js';

export class CustomParcial2Visitor extends Parcial2Visitor {
  constructor() {
    super();
    this._indent = '  ';
  }

  visitProg(ctx) {
    const funciones = ctx.stat()
      .map(statCtx => this.visit(statCtx))
      .filter(s => s)  // quita posibles nulls
      .join('\n\n');
    return funciones;
  }

  visitStat(ctx) {
    if (ctx.expr()) {
      // comando suelto en el toplevel (no muy habitual)
      const resultado = this.visit(ctx.expr());
      console.log(`Ejecutando comando: ${resultado}`);
      return resultado;
    }
    // es un bloque de acción:
    const nombreAccion = ctx.ID().getText();
    console.log(`Ejecutando acción: ${nombreAccion}...`);

    const cuerpo = ctx.stat()
      .map(sub => this.visit(sub))
      .filter(line => line)    // eliminamos posibles null
      .map(line => this._indent + line)  // indentación
      .join('\n');

    console.log(`Acción ${nombreAccion} completada.`);

    // montamos la función y la llamada
    return [
      `const ${nombreAccion} = function() {`,
      cuerpo,
      `};`,
      `${nombreAccion}();`
    ].join('\n');
  }

  visitMoverArchivo(ctx) {
    const destino = ctx.RUTA().getText();
    console.log(`Moviendo archivo a ${destino}`);
    return `console.log("Moviendo archivo a ${destino}");`;
  }

  visitUsarEscaneoProfundo(ctx) {
    console.log("USANDO ESCANEO PROFUNDO");
    return `console.log("USANDO ESCANEO PROFUNDO");`;
  }

  visitRetornarResultado(ctx) {
    console.log("Retornando resultado");
    return `return "resultado";`;
  }

  visitNotificar(ctx) {
    let mensaje = ctx.MENSAJE().getText();
    mensaje = mensaje.substring(1, mensaje.length - 1);
    console.log(`Notificación: ${mensaje}`);
    return `console.log("NOTIFICACION: ${mensaje}");`;
  }
}
