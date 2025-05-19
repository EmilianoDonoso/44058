// Generated from c:/Users/Emili/ssl-antlr-Parcial2/ssl-antlr-Parcial2/Parcial2.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link Parcial2Parser}.
 */
public interface Parcial2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link Parcial2Parser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(Parcial2Parser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link Parcial2Parser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(Parcial2Parser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link Parcial2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(Parcial2Parser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link Parcial2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(Parcial2Parser.StatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code moverArchivo}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMoverArchivo(Parcial2Parser.MoverArchivoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code moverArchivo}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMoverArchivo(Parcial2Parser.MoverArchivoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code usarEscaneoProfundo}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterUsarEscaneoProfundo(Parcial2Parser.UsarEscaneoProfundoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code usarEscaneoProfundo}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitUsarEscaneoProfundo(Parcial2Parser.UsarEscaneoProfundoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code retornarResultado}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterRetornarResultado(Parcial2Parser.RetornarResultadoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code retornarResultado}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitRetornarResultado(Parcial2Parser.RetornarResultadoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code notificar}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNotificar(Parcial2Parser.NotificarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code notificar}
	 * labeled alternative in {@link Parcial2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNotificar(Parcial2Parser.NotificarContext ctx);
}