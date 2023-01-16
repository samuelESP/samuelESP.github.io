function insert(num)
        {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
            //Quando eu clicar no meu botão ele vai adicionar ele dentro do meu visor e depois adicinar meu anterior também junto dele
        }
        function clean()
        {
            document.getElementById('resultado').innerHTML = "";
            //Ira limpar o que o meu resultado armazena
        }
        function back()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
            //Ele vai cortar a parte da minha string menos 1, ou seja, ele vai apagar apenas o últmo numero. Exemplo:
            /*4+3 --> length = 3   
            [0](4)---[1](+)---[2](3)
            usando a propriedade substring, ele vai pegar minha posição 0 e vai cortar ela até minha posição 2-->(3-1=2), tirando de consideração a posição 2, deixando assim so a posição 0 e 1
            */
        }
        function calcular()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)//Se houver algo dentro do meu resultado ele ira executar:
            {
                document.getElementById('resultado').innerHTML = eval(resultado);
                //O Eval é uma função que faz calculo com strings, permitindo assim calcular o meu resultado
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
        }


        
function ChangeMode(){
    chageStyle();
}

function chageStyle(){
    const back = document.querySelector('.fundo');
    const corpo = document.querySelector('.calculadora');
    const btn = document.querySelectorAll('.botao');
    const resul = document.querySelector('#resultado');


    back.classList.toggle(BlackMode);
    corpo.classList.toggle(BlackMode);
    resul.classList.toggle(BlackMode);
    btn.forEach(function(elemnet) {
        elemnet.classList.toggle(BlackMode);
    })
}



const body = document.querySelector('body');
const BlackMode = 'dark-mode';

const switcher = document.querySelector('.bola');
switcher.addEventListener('click', ChangeMode);