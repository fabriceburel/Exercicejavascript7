document.getElementById('valider').addEventListener('click',function(){
    var pointure = document.getElementById('pointure').value;  //déclaration de la variable nombre1
    var annee = document.getElementById('annee').value; //déclaration de la variable nombre2
    if (isNaN(pointure) == false && isNaN(pointure) == false && pointure && annee){ //vérification que les données saisis sont bien des nombres
      if (parseInt(annee)==0) {       //vérification du nombre2 afin de prévenir que la division par 0 est interdit
        alert('vous n \'etes pas nés à l\'an 0!!')
      }
      else {
        var result  = parseInt(pointure) *2;
        result += 5;
        result *= 50;
        result -= parseInt(annee) + 1766;
        alert(result);
      }
    }
    else{
      alert('Veuillez vérifier votre saisis')
    }
})
