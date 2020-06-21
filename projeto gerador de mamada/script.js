            var body = document.querySelector('body');
            var title = document.querySelector('.title');
            var btn = document.querySelector('#app button');
            var btn_collor = document.querySelector('.btn-collor')
            var input = document.querySelector('#app input');
            var numero = document.querySelector('.numero');
            var numero2 = document.querySelector('.numero2');
            var span = document.querySelector('#span');
            var alert = document.querySelector('#alert');
            var fechar = document.querySelector('.fechar');
            var div = document.querySelector('#alert div');
            var kill = false
            var cont = 0;
            var mort = 0;
            var kid = false;
            var close = true;
            var cor = 'azul';
            var contorno = document.getElementById('contorno');
            var box1 = document.getElementById('box');
            var box2 = document.getElementById('box2');
            var box3 = document.getElementById('box3');
            var box4 = document.getElementById('box4');
            var azul = document.getElementById('azul');
            var vermelho = document.querySelector('#vermelho');
            var verde = document.querySelector('#verde');
            var amarelo = document.querySelector('#amarelo');
            var rosa = document.querySelector('#rosa');
            var preto = document.querySelector('#preto');

            azul.onclick = function(){
                cor = 'azul'
                contorno.style.top = '85%'
                contorno.style.left = '95.5%'
                title.style.background = 'rgb(0, 120, 185)'
                title.style.boxShadow = '0 5px rgb(0, 85, 135)'
                body.style.backgroundImage = 'url(img/cubosazul.png)'
                div.style.background = 'rgb(0, 120, 185)'
                div.style.boxShadow = '0 5px rgb(0, 85, 135)'
                box1.style.background = 'linear-gradient(45deg,rgb(1, 155, 238),rgb(0, 57, 90))'
                box2.style.background = 'rgb(0, 120, 185)'
                box2.style.boxShadow = '0 5px rgb(0, 85, 135)'
                box3.style.background = 'linear-gradient(45deg,rgb(1, 155, 238),rgb(0, 57, 90))'
                box4.style.background = 'rgb(0, 120, 185)'
                box4.style.boxShadow = '0 5px rgb(0, 85, 135)'
                btn_collor.style.background = 'rgb(0, 120, 185)'
                btn_collor.style.boxShadow = '0 5px rgb(0, 85, 135)'
                console.log('A cor agora é azul')
            }
            vermelho.onclick = function(){
                cor = 'vermelho'
                contorno.style.top = '85%'
                contorno.style.left = '98.5%'
                title.style.background = 'rgb(255, 0, 0)'
                title.style.boxShadow = '0px 5px 0px rgb(180, 0, 0)'
                body.style.backgroundImage = 'url(img/cubosvermelho.png)'
                div.style.background = 'rgb(255, 0, 0)'
                div.style.boxShadow = '0 5px rgb(180, 0, 0)'
                box1.style.background = 'linear-gradient(45deg,rgb(255, 50, 50),rgb(130, 0, 0))'
                box2.style.background = 'rgb(255, 0, 0)'
                box2.style.boxShadow = '0 5px rgb(180, 0, 0)'
                box3.style.background = 'linear-gradient(45deg,rgb(255, 50, 50),rgb(130, 0, 0))'
                box4.style.background = 'rgb(255, 0, 0)'
                box4.style.boxShadow = '0 5px rgb(180, 0, 0)'
                btn_collor.style.background = 'rgb(255, 0, 0)'
                btn_collor.style.boxShadow = '0 5px rgb(180, 0, 0)'
                console.log('A cor agora é vermelho')
            }
            verde.onclick = function(){
                cor = 'verde'
                contorno.style.top = '91%'
                contorno.style.left = '95.5%'
                title.style.background = 'rgb(76, 240, 0)'
                title.style.boxShadow = '0px 5px 0px rgb(50, 158, 0)'
                body.style.backgroundImage = 'url(img/cubosverde.png)'
                div.style.background = 'rgb(76, 240, 0)'
                div.style.boxShadow = '0 5px rgb(50, 158, 0)'
                box1.style.background = 'linear-gradient(45deg,rgb(81, 255, 1),rgb(25, 78, 0))'
                box2.style.background = 'rgb(76, 240, 0)'
                box2.style.boxShadow = '0 5px rgb(50, 158, 0)'
                box3.style.background = 'linear-gradient(45deg,rgb(81, 255, 1),rgb(25, 78, 0))'
                box4.style.background = 'rgb(76, 240, 0)'
                box4.style.boxShadow = '0 5px rgb(50, 158, 0)'
                btn_collor.style.background = 'rgb(76, 240, 0)'
                btn_collor.style.boxShadow = '0 5px rgb(50, 158, 0)'
                console.log('A cor agora é verde')
            }
            amarelo.onclick = function(){
                cor = 'amarelo'
                contorno.style.top = '91%'
                contorno.style.left = '98.5%'
                title.style.background = 'rgb(255, 251, 0)'
                title.style.boxShadow = '0px 5px 0px rgb(189, 186, 0)'
                body.style.backgroundImage = 'url(img/cubosamarelo.png)'
                div.style.background = 'rgb(255, 251, 0)'
                div.style.boxShadow = '0 5px rgb(189, 186, 0)'
                box1.style.background = 'linear-gradient(45deg,rgb(255, 252, 57),rgb(49, 48, 0))'
                box2.style.background = 'rgb(255, 251, 0)'
                box2.style.boxShadow = '0 5px rgb(189, 186, 0)'
                box3.style.background = 'linear-gradient(45deg,rgb(255, 252, 57),rgb(49, 48, 0))'
                box4.style.background = 'rgb(255, 251, 0)'
                box4.style.boxShadow = '0 5px rgb(189, 186, 0)'
                btn_collor.style.background = 'rgb(255, 251, 0)'
                btn_collor.style.boxShadow = '0 5px rgb(189, 186, 0)'
                console.log('A cor agora é amarelo')
            }
            rosa.onclick = function(){
                cor = 'rosa'
                contorno.style.top = '97%'
                contorno.style.left = '95.5%'
                title.style.background = 'rgb(255, 192, 203)'
                title.style.boxShadow = '0px 5px 0px rgb(192, 128, 139)'
                body.style.backgroundImage = 'url(img/cubosrosa.png)'
                div.style.background = 'rgb(255, 192, 203)'
                div.style.boxShadow = '0 5px rgb(192, 128, 139)'
                box1.style.background = 'linear-gradient(45deg,rgb(255, 197, 206),rgb(83, 51, 56))'
                box2.style.background = 'rgb(255, 192, 203)'
                box2.style.boxShadow = '0 5px rgb(192, 128, 139)'
                box3.style.background = 'linear-gradient(45deg,rgb(255, 197, 206),rgb(83, 51, 56))'
                box4.style.background = 'rgb(255, 192, 203)'
                box4.style.boxShadow = '0 5px rgb(192, 128, 139)'
                btn_collor.style.background = 'rgb(255, 192, 203)'
                btn_collor.style.boxShadow = '0 5px rgb(192, 128, 139)'
                console.log('A cor agora é rosa')
            }
            preto.onclick = function(){
                cor = 'preto'
                contorno.style.top = '97%'
                contorno.style.left = '98.5%'
                title.style.background = 'rgb(50, 50, 50)'
                title.style.boxShadow = '0px 5px 0px rgb(0, 0, 0)'
                body.style.backgroundImage = 'url(img/cubospreto.png)'
                div.style.background = 'rgb(50, 50, 50)'
                div.style.boxShadow = '0 5px rgb(0, 0, 0)'
                box1.style.background = 'linear-gradient(45deg,rgb(100, 100, 100),rgb(0, 0, 0))'
                box2.style.background = 'rgb(50, 50, 50)'
                box2.style.boxShadow = '0 5px rgb(0, 0, 0)'
                box3.style.background = 'linear-gradient(45deg,rgb(100, 100, 100),rgb(0, 0, 0))'
                box4.style.background = 'rgb(50, 50, 50)'
                box4.style.boxShadow = '0 5px rgb(0, 0, 0)'
                btn_collor.style.background = 'rgb(50, 50, 50)'
                btn_collor.style.boxShadow = '0 5px rgb(0, 0, 0)'
                console.log('A cor agora é preto')
            }
            function contador() {
                numero.innerHTML = ''
                cont = cont + 1
                var contador = document.createTextNode(cont);
                numero.appendChild(contador);
            }
            function descontador() {
                numero.innerHTML = ''
                cont = cont - 1
                var contador = document.createTextNode(cont);
                numero.appendChild(contador);
            }
            fechar.onclick = function fecha() {
                alert.style.opacity = '0'
                div.style.cursor = 'default'
                close = true;
                fechar.style.top = '85%'
                fechar.style.boxShadow = 'none'
                setTimeout(pressfecha, 150)
                if (kill == true) {
                alert.style.opacity = '1'
                div.style.cursor = 'pointer'
                close = false
                span.innerHTML = ''
                span.innerHTML = 'Você morreu.'
                fechar.style.top = '85%'
                fechar.style.boxShadow = 'none'
                setTimeout(pressfecha, 150)
                kill = false
                }
            }
            function morte2() {
                if (close == false) {
                    morte2()
                } else {
                    alert.style.opacity = '1'
                    div.style.cursor = 'pointer'
                    close = false
                    span.innerHTML = ''
                    span.innerHTML = 'Você morreu.'
                    morte()
                    }
                } 
            function kidbenga() {
                if (kid == false) {
                            alert.style.opacity = '1'
                            div.style.cursor = 'pointer'
                            close = false
                            span.innerHTML = ''
                            span.innerHTML = "Você mama Kid bengala.";
                            input.value = ""
                            kid = true;
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn, 150)
                            descontador()

                       } else {
                            alert.style.opacity = '1'
                            div.style.cursor = 'pointer'
                            close = false
                            span.innerHTML = ''
                            span.innerHTML = "Você mama Kid bengala novamente mas acaba se engasgando e morrendo."
                            input.value = ""
                            numero.innerHTML = '0'
                            cont = 0
                            kid = false
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn, 150)
                            morte()
                    }
            }
            function morte() {
                numero2.innerHTML = ''
                mort = mort + 1
                var mortes = document.createTextNode(mort);
                numero2.appendChild(mortes);
                kill = true
            }

            function onmouse(botao) {
                    switch(cor) {
                    case 'azul' :
                        botao.style.boxShadow = '0 5px rgb(0, 65, 100)'
                        botao.style.background = 'rgb(0, 85, 135)'
                        break;
                    case 'vermelho' :
                        botao.style.boxShadow = '0 5px rgb(130, 0, 0)'
                        botao.style.background = 'rgb(180, 0, 0)'
                        break;
                    case 'verde' :
                        botao.style.boxShadow = '0 5px rgb(25, 78, 0)'
                        botao.style.background = 'rgb(50, 158, 0)'
                        break;
                    case 'amarelo' :
                        botao.style.boxShadow = '0 5px rgb(49, 48, 0)'
                        botao.style.background = 'rgb(189, 186, 0)'
                        break;
                    case 'rosa' :
                        botao.style.boxShadow = '0 5px rgb(83, 51, 56)'
                        botao.style.background = 'rgb(192, 128, 139)'
                        break;
                    case 'preto' :
                        botao.style.boxShadow = '0 5px rgb(0, 0, 0)'
                        botao.style.background = 'rgb(25, 25, 25)'
                        break;
                    }
                }
            function outmouse(botao) {
                switch(cor) {
                    case 'azul' :
                        botao.style.boxShadow = '0 5px rgb(0, 85, 135)'
                        botao.style.background = 'rgb(0, 120, 185)'
                        break;
                    case 'vermelho' :
                        botao.style.boxShadow = '0 5px rgb(180, 0, 0)'
                        botao.style.background = 'rgb(255, 0, 0)'
                        break;
                    case 'verde' :
                        botao.style.boxShadow = '0 5px rgb(50, 158, 0)'
                        botao.style.background = 'rgb(76, 240, 0)'
                        break;
                    case 'amarelo' :
                        botao.style.boxShadow = '0 5px rgb(189, 186, 0)'
                        botao.style.background = 'rgb(255, 251, 0)'
                        break;
                    case 'rosa' :
                        botao.style.boxShadow = '0 5px rgb(192, 128, 139)'
                        botao.style.background = 'rgb(255, 192, 203)'
                        break;
                    case 'preto' :
                        botao.style.boxShadow = '0 5px rgb(0, 0, 0)'
                        botao.style.background = 'rgb(50, 50, 50)'
                        break;
                    }
            }
            function pressbtn() {
                press(btn)
            }
            function pressfecha() {
                pressfechar(fechar)
            }
            function press(botao) {
                switch(cor) {
                case 'azul' :
                    botao.style.top = '50%'
                    botao.style.boxShadow = '0 5px rgb(0, 85, 135)'
                    console.log('O botão foi clicado')
                    break;
                case 'vermelho' :
                    botao.style.top = '50%'
                    botao.style.boxShadow = '0px 5px 0px rgb(180, 0, 0)'
                    console.log('O botão foi clicado')
                    break;
                case 'verde' :
                    botao.style.top = '50%'
                    botao.style.boxShadow = '0px 5px 0px rgb(50, 158, 0)'
                    console.log('O botão foi clicado')
                    break;
                case 'amarelo' :
                    botao.style.top = '50%'
                    botao.style.boxShadow = '0px 5px 0px rgb(255, 252, 57)'
                    console.log('O botão foi clicado')
                    break;
                case 'rosa' :
                    botao.style.top = '50%'
                    botao.style.boxShadow = '0px 5px 0px rgb(192, 128, 139)'
                    console.log('O botão foi clicado')
                    break;
                case 'preto' :
                    botao.style.top = '50%'
                    botao.style.boxShadow = '0px 5px 0px rgb(0, 0, 0)'
                    console.log('O botão foi clicado')
                    break;
                } }
            function pressfechar(botao) {
                switch(cor) {
                    case 'azul' :
                        botao.style.top = '80%'
                        botao.style.boxShadow = '0 5px rgb(0, 85, 135)'
                        console.log('O alerta foi fechado')
                        break;
                    case 'vermelho' :
                        botao.style.top = '80%'
                        botao.style.boxShadow = '0px 5px 0px rgb(180, 0, 0)'
                        console.log('O alerta foi fechado')
                        break;
                    case 'verde' :
                        botao.style.top = '80%'
                        botao.style.boxShadow = '0px 5px 0px rgb(50, 158, 0)'
                        console.log('O alerta foi fechado')
                        break;
                    case 'amarelo' :
                        botao.style.top = '80%'
                        botao.style.boxShadow = '0px 5px 0px rgb(189, 186, 0)'
                        console.log('O alerta foi fechado')
                        break;
                    case 'rosa' :
                        botao.style.top = '80%'
                        botao.style.boxShadow = '0px 5px 0px rgb(192, 128, 139)'
                        console.log('O alerta foi fechado')
                        break;
                    case 'preto' :
                        botao.style.top = '80%'
                        botao.style.boxShadow = '0px 5px 0px rgb(0, 0, 0)'
                        console.log('O alerta foi fechado')
                        break;
            }
        }
            function foco() {
                switch(cor) {
                    case 'azul' :
                        input.style.borderColor = 'rgb(1, 155, 238)'
                        input.style.boxShadow = '0 0 8px 0 rgb(1, 155, 238)'
                        break;
                    case 'vermelho' :
                        input.style.borderColor = 'rgb(255, 50, 50)'
                        input.style.boxShadow = '0 0 8px 0 rgb(255, 50, 50)'
                        break;
                    case 'verde' :
                        input.style.borderColor = 'rgb(81, 255, 1)'
                        input.style.boxShadow = '0 0 8px 0 rgb(81, 255, 1)'
                        break;
                    case 'amarelo' :
                        input.style.borderColor = 'rgb(255, 252, 57)'
                        input.style.boxShadow = '0 0 8px 0 rgb(255, 252, 57)'
                        break;
                    case 'rosa' :
                        input.style.borderColor = 'rgb(255, 197, 206)'
                        input.style.boxShadow = '0 0 8px 0 rgb(255, 197, 206)'
                        break;
                    case 'preto' :
                        input.style.borderColor = 'rgb(100, 100, 100)'
                        input.style.boxShadow = '0 0 8px 0 rgb(100, 100, 100)'
                        break;
            } }
            function desfoco() {
                input.style.borderColor = '#aaa'
                input.style.boxShadow = 'none'
            }
            function mamada() {
                switch (close) {
                    case true :
                    var text = input.value;
                    switch (text.toLowerCase()) {
                        case 'cintra' :
                            alert.style.opacity = '1'
                            div.style.cursor = 'pointer'
                            close = false
                            span.innerHTML = ''
                            span.innerHTML = "Cintra é macho demais para te mamar."
                            input.value = '' 
                            numero.innerHTML = '0' 
                            cont = 0
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn , 150)
                            morte()
                            break;
                        case 'kid bengala' :
                        case 'kid bengas' :
                        case 'kid benga' :
                            kidbenga()
                            break;
                        case '' :
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn, 150)
                            break;
                        case 'raul seixas' :
                            alert.style.opacity = '1'
                            div.style.cursor = 'pointer'
                            close = false
                            span.innerHTML = ''
                            span.innerHTML = "Raul Seixas tenta te mamar mas você broxou."
                            input.value = '' 
                            numero.innerHTML = '0' 
                            cont = 0
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn, 150)
                            morte()
                            break;
                        case 'mia khalifa' :
                            alert.style.opacity = '1'
                            div.style.cursor = 'pointer'
                            close = false
                            span.innerHTML = ''
                            span.innerHTML = "Mia Khalifa te deu uma mamada mas você não aguentou e morreu."
                            input.value = '' 
                            numero.innerHTML = '0' 
                            cont = 0
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn, 150)
                            morte ()
                            break;
                        default:
                            alert.style.opacity = '1'
                            div.style.cursor = 'pointer'
                            close = false
                            span.innerHTML = ''
                            span.innerHTML = text + ' te deu uma mamada.'
                            btn.style.position = 'absolute'
                            btn.style.transform = 'translate(-50%,-50%)'
                            btn.style.top = '50.7%'
                            btn.style.boxShadow = 'none'
                            setTimeout(pressbtn, 150)
                            contador()
                            break;
                    }
                    break;
                    case false :
                        break;
            } }
            btn.onclick = function() { 
                mamada()
            }

            document.addEventListener("keypress", keypressed, false);

            function keypressed(key) {
            if (key.keyCode == 13){
                mamada()
            } }