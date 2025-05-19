// Generated from c:/Users/Emili/ssl-antlr-Parcial2/Parcial2.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Parcial2Listener from './Parcial2Listener.js';
import Parcial2Visitor from './Parcial2Visitor.js';

const serializedATN = [4,1,13,35,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,1,1,1,1,1,1,1,4,1,16,8,1,11,1,12,1,17,1,1,1,1,1,1,3,1,23,8,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,33,8,2,1,2,0,0,3,0,2,4,0,0,37,0,7,1,
0,0,0,2,22,1,0,0,0,4,32,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,
1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,12,5,1,0,0,12,13,5,10,0,0,13,15,5,2,
0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,
0,18,19,1,0,0,0,19,20,5,3,0,0,20,23,1,0,0,0,21,23,3,4,2,0,22,11,1,0,0,0,
22,21,1,0,0,0,23,3,1,0,0,0,24,25,5,4,0,0,25,26,5,5,0,0,26,33,5,11,0,0,27,
33,5,6,0,0,28,29,5,7,0,0,29,33,5,8,0,0,30,31,5,9,0,0,31,33,5,12,0,0,32,24,
1,0,0,0,32,27,1,0,0,0,32,28,1,0,0,0,32,30,1,0,0,0,33,5,1,0,0,0,4,9,17,22,
32];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Parcial2Parser extends antlr4.Parser {

    static grammarFileName = "Parcial2.g4";
    static literalNames = [ null, "'accion'", "'{'", "'}'", "'moverArchivo'", 
                            "'a'", "'usarEscaneoProfundo'", "'retornar'", 
                            "'resultado'", "'notificar'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "ID", "RUTA", "MENSAJE", "WS" ];
    static ruleNames = [ "prog", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Parcial2Parser.ruleNames;
        this.literalNames = Parcial2Parser.literalNames;
        this.symbolicNames = Parcial2Parser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Parcial2Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.stat();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 722) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Parcial2Parser.RULE_stat);
	    var _la = 0;
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 11;
	            this.match(Parcial2Parser.T__0);
	            this.state = 12;
	            this.match(Parcial2Parser.ID);
	            this.state = 13;
	            this.match(Parcial2Parser.T__1);
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 14;
	                this.stat();
	                this.state = 17; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 722) !== 0));
	            this.state = 19;
	            this.match(Parcial2Parser.T__2);
	            break;
	        case 4:
	        case 6:
	        case 7:
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.expr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Parcial2Parser.RULE_expr);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new MoverArchivoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.match(Parcial2Parser.T__3);
	            this.state = 25;
	            this.match(Parcial2Parser.T__4);
	            this.state = 26;
	            this.match(Parcial2Parser.RUTA);
	            break;
	        case 6:
	            localctx = new UsarEscaneoProfundoContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(Parcial2Parser.T__5);
	            break;
	        case 7:
	            localctx = new RetornarResultadoContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.match(Parcial2Parser.T__6);
	            this.state = 29;
	            this.match(Parcial2Parser.T__7);
	            break;
	        case 9:
	            localctx = new NotificarContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.match(Parcial2Parser.T__8);
	            this.state = 31;
	            this.match(Parcial2Parser.MENSAJE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

Parcial2Parser.EOF = antlr4.Token.EOF;
Parcial2Parser.T__0 = 1;
Parcial2Parser.T__1 = 2;
Parcial2Parser.T__2 = 3;
Parcial2Parser.T__3 = 4;
Parcial2Parser.T__4 = 5;
Parcial2Parser.T__5 = 6;
Parcial2Parser.T__6 = 7;
Parcial2Parser.T__7 = 8;
Parcial2Parser.T__8 = 9;
Parcial2Parser.ID = 10;
Parcial2Parser.RUTA = 11;
Parcial2Parser.MENSAJE = 12;
Parcial2Parser.WS = 13;

Parcial2Parser.RULE_prog = 0;
Parcial2Parser.RULE_stat = 1;
Parcial2Parser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parcial2Parser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Parcial2Visitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parcial2Parser.RULE_stat;
    }

	ID() {
	    return this.getToken(Parcial2Parser.ID, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Parcial2Visitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parcial2Parser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NotificarContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MENSAJE() {
	    return this.getToken(Parcial2Parser.MENSAJE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.enterNotificar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.exitNotificar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Parcial2Visitor ) {
	        return visitor.visitNotificar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Parcial2Parser.NotificarContext = NotificarContext;

class RetornarResultadoContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.enterRetornarResultado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.exitRetornarResultado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Parcial2Visitor ) {
	        return visitor.visitRetornarResultado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Parcial2Parser.RetornarResultadoContext = RetornarResultadoContext;

class MoverArchivoContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RUTA() {
	    return this.getToken(Parcial2Parser.RUTA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.enterMoverArchivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.exitMoverArchivo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Parcial2Visitor ) {
	        return visitor.visitMoverArchivo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Parcial2Parser.MoverArchivoContext = MoverArchivoContext;

class UsarEscaneoProfundoContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.enterUsarEscaneoProfundo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Parcial2Listener ) {
	        listener.exitUsarEscaneoProfundo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Parcial2Visitor ) {
	        return visitor.visitUsarEscaneoProfundo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Parcial2Parser.UsarEscaneoProfundoContext = UsarEscaneoProfundoContext;


Parcial2Parser.ProgContext = ProgContext; 
Parcial2Parser.StatContext = StatContext; 
Parcial2Parser.ExprContext = ExprContext; 
