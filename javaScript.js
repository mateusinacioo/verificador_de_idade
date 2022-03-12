function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var anoInformado = document.getElementById('txtano');
  var resultado = document.querySelector('div#resultado');
  
  if(anoInformado.value.length == 0 || anoInformado.value > ano){
      window.alert('[ERRO] Verifique os dados informados e tente novamente')
  }else{
      var radioSexo = document.getElementsByName('radiosexo');
      var idade = ano - anoInformado.value;
      var genero ='';
      var imagem = document.createElement('img');// img é como se fosse um atag não pode alterar o nome
      imagem.setAttribute('id', 'foto');
      if(radioSexo[0].checked){
        //Gênero Masculino
        if(idade >=0 && idade <10){
          genero = 'Criança';
          imagem.setAttribute('src', './images/foto-bebe-m.png');
        }else if( idade < 21){
          genero = 'Jovem';
          imagem.setAttribute('src', './images/foto-jovem-m.png');
        }else if( idade <50){
          genero = 'Adulto(a)';
          imagem.setAttribute('src', './images/foto-adulto-m.png');
        }else{
          genero= 'Idoso(a)';
          imagem.setAttribute('src', './images/foto-idoso-m.png')
        }
      } 
      if(radioSexo[1].checked){
        //Gênero feminino
        if(idade >=0 && idade <10){
          genero = 'Criança';
          imagem.setAttribute('src', './images/foto-bebe-f.png');
        }else if(idade <21 ){
          genero = 'Jovem';
          imagem.setAttribute('src', './images/foto-jovem-f.png');
        }else if(idade <50){
          genero = 'Adulto(a)';
          imagem.setAttribute('src', './images/foto-adulto-f.png');
        } else{
          genero = 'Idoso(a)';
          imagem.setAttribute('src', './images/foto-idoso-f.png');
        }
      }
      resultado.style.textAlign = 'center';
      resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;  
      resultado.appendChild(imagem);
    }
  }