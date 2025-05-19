grammar Parcial2;

prog
    : stat+ 
    ;

stat
    : 'accion' ID '{' stat+ '}'     // bloque de acción
    | expr                          // comando individual
    ;

expr
    : 'moverArchivo' 'a' RUTA       # moverArchivo
    | 'usarEscaneoProfundo'         # usarEscaneoProfundo
    | 'retornar' 'resultado'        # retornarResultado
    | 'notificar' MENSAJE           # notificar
    ;

// Identificador para nombrar acciones
ID: [a-zA-Z]+ ;

// Ruta de archivo: letras, dígitos, guiones, puntos y barras
RUTA: [a-zA-Z0-9_/.\-]+ ;

// Mensaje para notificar, entre comillas dobles
MENSAJE: '"' (~["\r\n])* '"' ;

// Espacios en blanco (saltados)
WS: [ \t\r\n]+ -> skip;
