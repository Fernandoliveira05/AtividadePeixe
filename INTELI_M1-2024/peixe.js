var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }


};

//Adicionamos o new phaser.game para indicar um novo projeto utilizando o Phaser
var game = new Phaser.Game(config);

var peixinho;


//Para que as imagens funcionem de maneira correta, precisamos carregá-las antes, e pra isso usamos o preload    
function preload() {                                   
    //fundo                                     
    this.load.image('oceano', 'assets/bg_azul-escuro.png');
    //logo do Inteli💜
    this.load.image('logo', 'assets/logo-inteli_azul.png')
    //nosso personagem principal: o tubarão!
    this.load.image('peixin', 'assets/peixes/tubarao.png')
    //Aqui adicionamos a vara de pescar, antagonista do nosso jogo.
    this.load.image('vara', 'assets/peixes/vara.png')
    //Adição da areia ao cenário
    this.load.image('areia', 'assets/areia.png')
 }

//Aqui enfim introduzimos nossas imagens em nosso jogo
function create() {
    //Oceano
    this.add.image(400, 300, 'oceano');
    //Areia
    this.add.image(400, 390, 'areia', {width: '100%'}).setScale(0.5);
    //Logo do Inteli💜
    this.add.image(400, 545, 'logo').setScale(0.5);
    //Tubarão, ou 'peixin'
    peixinho = this.add.image(400, 300, 'peixin');
    //Vara de pescar
    vara = this.add.image(100, 50, 'vara');
    

 //Deixando o peixinho do lado correto
 peixinho.setFlip(true, false);
}
function update() {  
    //Lógica para que o peixinho ande no eixo x
    peixinho.x = this.input.x;
    //Lógica para que o peixinho ande no eixo y
    peixinho.y = this.input.y;

    //Lógica para que a vara de pescar persiga nosso peixinho com 200px a menos no eixo x
    vara.x = this.input.x = peixinho.x -200;
    //Lógica para que a vara de pescar persiga nosso peixinho com 150 pixels a menos no eixo y 
    vara.y = this.input.y = peixinho.y -150;

}