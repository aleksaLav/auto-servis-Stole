var dodjaSadrzaj;
window.onload = function(){
    document.getElementById('posalji').addEventListener('click',provera);

}


// opsti problem sa regularnim izrazima je resetovanje problema posle sanacije


var brojKlika=0;
function provera(){
    var popunjeno=true;
    //brojKlika++;

    var imePrezime=document.getElementById('ime').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefon= document.getElementById('telefon').value.trim();
    var poruka = document.getElementById('poruka').value.trim();
    var zbogCega = document.getElementsByName('imeRadio');
    var grad = document.getElementById('gradovi').value;
    var saglasnost = document.querySelector('#saglasnost').value;

    var REGimePrezime=/^[A-ZŽĐŠČĆ][a-zžđščć]{2,14}(\s[A-ZŽĐŠČĆ][a-zžđščć]{2,14})*$/;
    var REGemail =/^[a-zžđščć][a-zžđščć\d\_\.\-]+\@[a-z]{3,10}(\.[a-z]{2,4})+$/;
    var REGtelefon = /^(06|\+3816)\-[\d]{3}\-[\d]{3,4}$/;
    var REGporuka = /^[A-zžđščć\s\/\-\_\+\@\,\.\'\"\%\d]{15,60}$/;

    if(imePrezime==''){
        popunjeno=false;
      //  nepopunjeno.push('Polje za ime i prezime je prazno!');
        document.getElementById('greskaImePrezime').innerHTML='Polje za ime i prezime je prazno!';
        document.getElementById('greskaImePrezime').classList.add('dodaj');
        document.getElementById('ime').style.borderBottom ='3px solid red';
    }
    //radjeno sa Anjom 
    else if(REGimePrezime.test(imePrezime)){
        popunjeno=false;
      //  nepopunjeno.push('Polje za ime i prezime nije u dobrom formatu!');
        document.getElementById('greskaImePrezime').innerHTML='';
        document.getElementById('greskaImePrezime').classList.remove('dodaj');
        document.getElementById('ime').style.borderBottom ='3px solid gray';
    }
    //kraj sa ANJOM
    else if(!REGimePrezime.test(imePrezime)){
        popunjeno=false;
      //  nepopunjeno.push('Polje za ime i prezime nije u dobrom formatu!');
        document.getElementById('greskaImePrezime').innerHTML='Polje za ime i prezime nije u dobrom formatu!';
        document.getElementById('greskaImePrezime').classList.add('dodaj');
        document.getElementById('ime').style.borderBottom ='3px solid red';
    }
    if(email==''){
        popunjeno=false;
       // nepopunjeno.push('Polje za email je prazno!');
        document.getElementById('greskaEmail').innerHTML='Polje za email je prazno!';
        document.getElementById('greskaEmail').classList.add('dodaj');
        document.getElementById('email').style.borderBottom ='3px solid red';
    }
    else if(!REGemail.test(email)){
        popunjeno=false;
      //  nepopunjeno.push('Polje za email nije u dobrom formatu!');
        document.getElementById('greskaEmail').innerHTML='Polje za email nije u dobrom formatu!';
        document.getElementById('greskaEmail').classList.add('dodaj');
        document.getElementById('email').style.borderBottom ='3px solid red';
    }
    if(telefon==''){
        popunjeno=false;
      //  nepopunjeno.push('Polje za telefon je prazno!');
        document.getElementById('greskaBroj').innerHTML='Polje za telefon je prazno!';
        document.getElementById('greskaBroj').classList.add('dodaj');
        document.getElementById('telefon').style.borderBottom ='3px solid red';
    }
    else if(!REGtelefon.test(telefon)){
        popunjeno=false;
      //  nepopunjeno.push('Polje za email nije u dobrom formatu!');
        document.getElementById('greskaBroj').innerHTML='Polje za email nije u dobrom formatu!';
        document.getElementById('greskaBroj').classList.add('dodaj');
        document.getElementById('telefon').style.borderBottom ='3px solid red';
    }
    if(poruka==''){
        popunjeno=false;
      //  nepopunjeno.push('Polje za poruku je prazno!');
        document.getElementById('greskaPoruke').innerHTML='Polje za poruku je prazno!';
        document.getElementById('greskaPoruke').classList.add('dodaj');
        document.getElementById('poruka').style.borderBottom ='3px solid red';
    }
    else if(!REGporuka.test(poruka)){
        popunjeno=false;
      //  nepopunjeno.push('Poruka je ograničena sa 50 karaktera!');
        document.getElementById('greskaPoruke').innerHTML='Poruka je ograničena sa 50 karaktera!';
        document.getElementById('greskaPoruke').classList.add('dodaj');
        document.getElementById('poruka').style.borderBottom ='3px solid red';
    }
    //ovde je problem beskonacnog ispisivanja
    //var brojac=0;
    for(let vrednost of zbogCega){
        if(!(vrednost.checked)){
            popunjeno=false;
          //  brojac++;
             document.getElementById('zvezda').innerHTML= 'Niste označili zbog čega nas kontaktirate!';
            document.getElementById('zvezda').classList.add('dodaj');
        }
        else {
            // nepopunjeno.push('Niste označili zbog čega nas kontaktirate!');
             document.getElementById('zvezda').innerHTML= '';
             document.getElementById('zvezda').classList.remove('dodaj');
         }
    }
    
    if(grad=='0'){
        popunjeno=false;
       // nepopunjeno.push('Niste odabrali grad!');
        document.getElementById('grad').innerHTML+='Niste odabrali grad!';
        document.getElementById('grad').classList.add('dodaj');
    }

    //ovde je problem beskonacnog ispisivanja
    if(!(saglasnost.checked)){
        popunjeno=false;
       // nepopunjeno.push('Niste dali saglasnost!');
        document.getElementById('agree').innerHTML='Niste dali saglasnost!';
        document.getElementById('agree').classList.add('dodaj');
    }
    else {
        popunjeno=true;
        document.getElementById('agree').innerHTML='';
        document.getElementById('agree').classList.remove('dodaj');
    }
    /*
    if(!popunjeno){
        if(brojKlika==1){
            dodjaSadrzaj ='<ul>';
        for(let vrednost of nepopunjeno){
            dodjaSadrzaj +=`<li>${vrednost}</li>`;
        }
        dodjaSadrzaj +='<ul>';
        document.getElementById('dodanoIzJS').innerHTML+=dodjaSadrzaj;
        document.getElementById('dodanoIzJS').classList.add('PozBoja');
        }
    }*/ 
    //ne znam sta sam ovde pokusao 
  /*  else{
        document.getElementById('mojaFORMA').reset();
        brojKlika=0;
        nepopunjeno=new Array();
        dodjaSadrzaj='';
        document.getElementById('dodanoIzJS').innerHTML='';
    }*/
}
