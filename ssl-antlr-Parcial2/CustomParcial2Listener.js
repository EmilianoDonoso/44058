import Parcial2Listener from './generated/Parcial2Listener.js';

export class CustomParcial2Listener extends Parcial2Listener {
  enterProg(ctx) {
    console.log('Entrando al programa');
  }

  exitProg(ctx) {
    console.log('Saliendo del programa');
  }

  enterStat(ctx) {
    console.log('Entrando a una acción o estatuto');
  }

  exitStat(ctx) {
    console.log('Saliendo de una acción o estatuto');
  }

  enterMoverArchivo(ctx) {
    console.log('Entrando en moverArchivo');
  }

  exitMoverArchivo(ctx) {
    const destino = ctx.ID().getText();
    console.log(`Archivo movido a ${destino}`);
  }

  enterUsarEscaneoProfundo(ctx) {
    console.log('Entrando en usarEscaneoProfundo');
  }

  exitUsarEscaneoProfundo(ctx) {
    console.log('Ejecutando escaneo profundo');
  }

  enterRetornarResultado(ctx) {
    console.log('Entrando en retornarResultado');
  }

  exitRetornarResultado(ctx) {
    console.log('Retornando resultado');
  }

  enterNotificar(ctx) {
    console.log('Entrando en notificar');
  }

  exitNotificar(ctx) {
    const destinatario = ctx.ID().getText();
    console.log(`Notificando a ${destinatario}`);
  }
}
