window.onload = function(){
    let strana = window.location.href;

    if(strana.indexOf("index.html")!==-1){
        // kod za ucitavanje index stranu
        this.indexStrana();
		document.getElementById("meniEks").addEventListener("click",myFunction);
    } 
    else if(strana.indexOf("oNama.html") !== -1){

        oNamaStrana();
    }
    else if(strana.indexOf("usluge.html") !== -1){
 
        uslugeStrana();
        promenaSlike();
           
    }
    else if(strana.indexOf("kontakt.html") !== -1){
    
        kontaktStrana();
    } 
};
    
 
  
  /*setTimeOUT*/
  
  var slikeNiz = [];
  var i=0;
  
  slikeNiz[0]='img/slika5.png';
  slikeNiz[1]='img/slika13.png';
  slikeNiz[2]='img/slika8.png';
  slikeNiz[3]='img/slika9.png';
  
  function promenaSlike(){
    document.getElementById('setTimeOut').src=slikeNiz[i];
  
    if(i<slikeNiz.length-1){
      i++;
    }
    else {i=0};
    setTimeout(promenaSlike, 2000);
  }
  
  function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  
  
  
  
function indexStrana(){
    
      /*  ovo mi treba za otvaranje kartice na novoj stranici 
      document.getElementById("link").addEventListener("click", function(){
        window.open("pdf.html", "_blank");
    });
  */
}
function oNamaStrana(){
    
    $('#nevidljivPtag').hide();
  $(document).ready(function(){
    $(".pokazi").click(function (e) {
      e.preventDefault();
    $('#nevidljivPtag').slideToggle('slow');
    $(this).text(function () {
        $(this).text(($(this).text() == 'prociraj vise') ? 'sakrij tekst' : 'prociraj vise')
    })
  })
  });
  /*plug-in 
  // As a JavaScript plugin
new SimpleLightbox({
    elements: '.gallery a',
    // more options here
  });
  
  // As a jQuery plugin
  $('.gallery a').simpleLightbox({
    // options here
  });
  SimpleLightbox.open({
    items: ['img/slika1.png', 'img/slika2.png', 'img/slika3.png','img/slika4.png','img/slika5.png','img/slika6.png']
  }); */
  
}
function uslugeStrana(){
    
 //window.onload=function(){
    //promenaSlike();
 //}  
    
    
      /*setTimeOUT
            var slikeNiz = [];
            var i=0;
            
            slikeNiz[0]='img/slika5.png';
            slikeNiz[1]='img/slika13.png';
            slikeNiz[2]='img/slika8.png';
            slikeNiz[3]='img/slika9.png';
            function promenaSlike(){
                alert('zdravo')
              document.getElementById('setTimeOut').src=slikeNiz[i];
            
              if(i<slikeNiz.length-1){
                i++;
              }
              else {i=0};
              setTimeout(promenaSlike, 2000);
            } 
      */

        var VrstaUsluga=['Popravka kvarova na vozilu','Osiguranja','Reglaža','Tehnički pregled','A-testiranje ugrađenih plinskih boca'];
        var podNizUsluga=['Vršimo popravke svih kvarova,od ispadanja menjaca, preko napuklih vetrobrana,pa sve do pucanja kardana,naravno tu smo za Vas kao uteha da nije sve tako crno i belo jer pored problema sa kvarom,nećete imati probleme sa cenom.',
        'Kod nas možete dobiti doivotno osiguranje pa čak i kad ste krivi, mi plaćamo vašu štetu na drugom vozilu ili nekom drugom licu u zavisnosti od toga šta ste sve uradili, naravno osiguranje možete iskoristiti za placanje sudskih troskova u slučaju neke parnice vezane za saobraćajnu nezgodu. ',
        'Reglaža se vrsi na najmodernijim mašinama uvezene iz Južno Afričke republike, pružaju sigurnost i pouzdanost u radu, pa smo zbog toga prvi u Srbiji.',
        'Kao što znate (verovatno znate jer se dobar glas na daleko čuje), mi smo prvi u Svetu po utvrđivanju kvarova na vozilu, iza nas je Kina , pa Amerika, a potom i Rusija, dođite, proverite ispravnost vašeg vozila.',
        'Testiranje plinskih boca koje ste ugradili ilegalno ili bez dozvole ovlašćenog lica je nemoguće u našem servisu, mi radimo svoj posao profesionalno tako da znate kada budete dolazili.'];
        var dodajUsluge = document.getElementById('usluge');

        for(let i=0; i<VrstaUsluga.length; i++){
        dodajUsluge.innerHTML+=`
        <li>
        <h3>${VrstaUsluga[i]}</h3>
        <ul>
        <li><p>${podNizUsluga[i]}</p></li>
        </ul>
        </li>`
        }
}
function kontaktStrana(){

        document.getElementById('posalji').addEventListener('click',provera);

        $(document).ready(function(){
            $('#info ul > li ul')
            .click(function(e){
                e.stopPropagation();
            })
            .filter(':not(:first)')
            .hide();
            
            $('#info ul > li').click(function(){
            var tekuciPokazivac = $(this).find('ul:first').is(':visible');
            if(!tekuciPokazivac) {
                $(this)
                .parent()
                .find('> li ul:visible')
                .slideToggle();
            }
            
            $(this)
                .find('ul:first')
                .stop(true, true)
                .slideToggle();
            });
        });
        
    /*DINAMIČKO ISPISIVANJE*/
    var DimIspisGradova=['Izaberite grad','BEOGRAD','NIS','NOVI SAD','KRAGUJEVAC'];
    var HTMLelement=document.getElementById('gradovi');
    for(let i=0; i<DimIspisGradova.length; i++){
        HTMLelement.innerHTML+=`<option value="${i}">${DimIspisGradova[i]}</option>`
    }
    /*kraj DINAMIČKO ISPISIVANJE*/
    var brojKlika=0;
    function provera(){

        var imePrezime=document.getElementById('ime').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefon= document.getElementById('telefon').value.trim();
        var poruka = document.getElementById('poruka').value.trim();
        var zbogCega = document.getElementsByName('imeRadio');
        var grad = document.getElementById('gradovi').value;
        var saglasnost = document.querySelector('#saglasnost');

        var REGimePrezime=/^[A-ZŽĐŠČĆ][a-zžđščć]{2,14}(\s[A-ZŽĐŠČĆ][a-zžđščć]{2,14})*$/;
        var REGemail =/^[A-zžđščć][A-zžđščć\d\_\.\-]+\@[a-z]{3,10}(\.[a-z]{2,4})+$/;
        var REGtelefon = /^(06[0-9]|\+3816[0-9])\-[\d]{3}\-[\d]{3,4}$/;
        var REGporuka = /^[A-zžđščć\s\/\-\_\+\@\,\.\'\"\%\d]{15,60}$/;

        if(imePrezime==''){
            document.getElementById('greskaImePrezime').innerHTML='Polje za ime i prezime je prazno!';
            document.getElementById('greskaImePrezime').classList.add('dodaj');
            document.getElementById('ime').style.borderBottom ='3px solid red';
        }
        else if(REGimePrezime.test(imePrezime)){  
            document.getElementById('greskaImePrezime').innerHTML='';
            document.getElementById('greskaImePrezime').classList.remove('dodaj');
            document.getElementById('ime').style.borderBottom ='3px solid gray';
        }
        else if(!REGimePrezime.test(imePrezime)){   
            document.getElementById('greskaImePrezime').innerHTML='Polje za ime i prezime nije u dobrom formatu!';
            document.getElementById('greskaImePrezime').classList.add('dodaj');
            document.getElementById('ime').style.borderBottom ='3px solid red';
        }
        if(email==''){  
            document.getElementById('greskaEmail').innerHTML='Polje za email je prazno!';
            document.getElementById('greskaEmail').classList.add('dodaj');
            document.getElementById('email').style.borderBottom ='3px solid red';
        }
        else if(!REGemail.test(email)){
            
            document.getElementById('greskaEmail').innerHTML='Polje za email nije u dobrom formatu!';
            document.getElementById('greskaEmail').classList.add('dodaj');
            document.getElementById('email').style.borderBottom ='3px solid red';
        }
        else {
            document.getElementById('greskaEmail').innerHTML='';
            document.getElementById('greskaEmail').classList.remove('dodaj');
            document.getElementById('email').style.borderBottom ='3px solid gray';
        }
        if(telefon==''){ 
            document.getElementById('greskaBroj').innerHTML='Polje za telefon je prazno!';
            document.getElementById('greskaBroj').classList.add('dodaj');
            document.getElementById('telefon').style.borderBottom ='3px solid red';
        }
        else if(!REGtelefon.test(telefon)){
            document.getElementById('greskaBroj').innerHTML='Polje za telefon nije u dobrom formatu!';
            document.getElementById('greskaBroj').classList.add('dodaj');
            document.getElementById('telefon').style.borderBottom ='3px solid red';
        }
        else {
            document.getElementById('greskaBroj').innerHTML='';
            document.getElementById('greskaBroj').classList.remove('dodaj');
            document.getElementById('telefon').style.borderBottom ='3px solid gray';
        }
        if(poruka==''){
            document.getElementById('greskaPoruke').innerHTML='Polje za poruku je prazno!';
            document.getElementById('greskaPoruke').classList.add('dodaj');
            document.getElementById('poruka').style.borderBottom ='3px solid red';
        }
        else if(!REGporuka.test(poruka)){
            document.getElementById('greskaPoruke').innerHTML='Poruka je ograničena,mora sadržati min 15,a max 50 karaktera!';
            document.getElementById('greskaPoruke').classList.add('dodaj');
            document.getElementById('poruka').style.borderBottom ='3px solid red';
        }
        else {
            document.getElementById('greskaPoruke').innerHTML='';
            document.getElementById('greskaPoruke').classList.remove('dodaj');
            document.getElementById('poruka').style.borderBottom ='3px solid gray';
        }
        var brojac=0;
        for(let vrednost of zbogCega){
            if(vrednost.checked){  
                brojac++;
            }
        }
        if(brojac==0){
            document.getElementById('zvezda').innerHTML= 'Niste označili zbog čega nas kontaktirate!';
            document.getElementById('zvezda').classList.add('dodaj');
        }
    else if(brojac==1){
            document.getElementById('zvezda').innerHTML= '';
                document.getElementById('zvezda').classList.remove('dodaj');
        }
        if(grad=='0'){   
            document.getElementById('grad').innerHTML='Niste odabrali grad!';
            document.getElementById('grad').classList.add('dodaj');
        }
        else {
            document.getElementById('grad').innerHTML='';
            document.getElementById('grad').classList.remove('dodaj');
        }
        if(!(saglasnost.checked)){  
            document.getElementById('agree').innerHTML='Niste dali saglasnost!';
            document.getElementById('agree').classList.add('dodaj');
        }
        else {
            document.getElementById('agree').innerHTML='';
            document.getElementById('agree').classList.remove('dodaj');
        }
    }

}