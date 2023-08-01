// Lexical Structure

// ========== 2.2 Comments  ========== 
// This is one single-line comment
/* This is other line comment*/ //and others
/*
     And other
*/

// ========== 2.3 Literals  ========== 
12              // the number twelve
1.2             // the numbber one point two
"hello world"   // one strings of text
'bye world'     // other string of text
true            // a boolean value
false           // the other boolean value
null            // abscence of an object

// ========== 2.4 Identifiers and reserved words  ==========
i
my_variable_name
v13
_dummy
$str
// ========== 2.4 Reserved Words  ==========
async/await// Permite escrever código assíncrono de forma síncrona, facilitando o tratamento de Promises. (Exemplo: async function fetchData() { await fetch('url'); })
break// Utilizado para sair de um loop (for, while, switch) ou do bloco de um case em um switch. (Exemplo: for (let i = 0; i < 5; i++) { if (i === 3) break; })
case// Define um caso em um switch, que será executado se a expressão corresponder ao valor do case. (Exemplo: switch (day) { case 'Monday': console.log('It's Monday!'); break; })
catch// Utilizado em conjunto com try para capturar exceções e executar um bloco de código em resposta ao erro. (Exemplo: try { // código que pode gerar um erro } catch (error) { // tratamento do erro })
const// Declara uma variável com atribuição constante, cujo valor não pode ser reatribuído. (Exemplo: const pi = 3.14;)
continue// Utilizado para pular para a próxima iteração em um loop, ignorando o restante do código dentro do loop para aquela iteração. (Exemplo: for (let i = 0; i < 5; i++) { if (i === 2) continue; })
debugger// Pausa a execução do código no navegador quando o depurador está aberto, permitindo inspecionar o estado das variáveis e execução do código.
default//  Especifica um bloco de código a ser executado em um switch caso nenhum caso corresponda ao valor da expressão. (Exemplo: switch (day) { case 'Monday': // código... break; default: // código para outros dias da semana })
delete// Remove uma propriedade de um objeto. (Exemplo: delete obj.prop;)
do// Utilizado em conjunto com while para criar um loop que primeiro executa o bloco e depois verifica a condição. (Exemplo: do { // código... } while (condition);)
else// Utilizado em conjunto com if para especificar um bloco de código a ser executado quando a condição do if não for verdadeira. (Exemplo: if (x > 5) { // código... } else { // código... })
export// Utilizado para exportar funções, variáveis ou objetos de um módulo para que possam ser usados em outros arquivos. (Exemplo: export const pi = 3.14;)
extends// Utilizado para criar uma classe que herda propriedades e métodos de outra classe. (Exemplo: class ChildClass extends ParentClass { // código... })
false// Valor booleano que representa a afirmação "falso" em JavaScript.
finally// Utilizado em conjunto com try para especificar um bloco de código que será executado independentemente de ocorrer uma exceção ou não. (Exemplo: try { // código... } catch (error) { // tratamento do erro } finally { // código que será executado sempre })
for// Utilizado para criar um loop que executa um bloco de código repetidamente, com uma condição de controle. (Exemplo: for (let i = 0; i < 5; i++) { // código... })
from// Utilizado com o import para indicar a origem dos módulos a serem importados. (Exemplo: import { func } from './module';)
function// Utilizado para declarar uma função que pode ser chamada posteriormente. (Exemplo: function add(a, b) { return a + b; })
get// Utilizado para definir um getter em um objeto, permitindo acessar a propriedade como uma função. (Exemplo: const obj = { get prop() { return 'valor'; } };)
if// Utilizado para executar um bloco de código se a condição especificada for verdadeira. (Exemplo: if (x > 10) { // código... })
import// Utilizado para importar módulos exportados de outros arquivos. (Exemplo: import { func } from './module';)
in// Utilizado para verificar se uma propriedade está em um objeto. (Exemplo: 'prop' in obj)
instanceof// Utilizado para verificar se um objeto é uma instância de uma classe específica. (Exemplo: if (obj instanceof MyClass) { // código... })
let// Declara uma variável com escopo de bloco, cujo valor pode ser reatribuído. (Exemplo: let count = 0;)
new// Utilizado para criar uma instância de uma classe ou para chamar um construtor. (Exemplo: const obj = new MyClass();)
null// Valor especial que representa a ausência de um valor.
of// Utilizado com loops (como for...of) para percorrer elementos de uma coleção. (Exemplo: for (const item of array) { // código... })
return:// Utilizado para retornar um valor de uma função. (Exemplo: function add(a, b) { return a + b; })
set// Utilizado para definir um setter em um objeto, permitindo definir o valor de uma propriedade como uma função. (Exemplo: const obj = { set prop(value) { // código... } };)
static// Utilizado para definir um método estático em uma classe, que pode ser chamado sem instanciar a classe. (Exemplo: class MyClass { static staticMethod() { // código... } })
super// Utilizado em classes para chamar o método pai na hierarquia de herança. (Exemplo: super.method();)
switch// Utilizado para selecionar um dos muitos blocos de código a serem executados com base em uma expressão. (Exemplo: switch (day) { case 'Monday': // código... break; case 'Tuesday': // código... break; })
target// Utilizado em contexto de eventos para representar o elemento DOM que foi o alvo do evento.
this//  Utilizado para referenciar o objeto atual dentro de um método ou construtor. (Exemplo: this.property = 'value';)
throw// Utilizado para lançar uma exceção explicitamente. (Exemplo: `throw new Error('Mensagem de erro');
true 
try
typeof 
var 
void 
while 
with
yield
// ========== 2.5 Unicode  ==========
const n = 3.14;
const sí = true;

// ========== 2.5,1 Unicode Escape Sequences
let café = 1; // Defining one variable with unicode character
// Result: 
caf\u00e9 // => 1; acess the variable using an escape sequence
caf\u{E9} // => 1; another form of the same escape sequence

// ========== 2.5.2 Unicode Normalization
const café = 1;// This const is name "caf\u{e9"}
const café = 2;// This constant is different: "cafe\u{301}"
café // => 1
café // =>2