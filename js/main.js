window.onload=function(){let e=window.location.href;-1!==e.indexOf("index.html")?this.indexStrana():-1!==e.indexOf("oNama.html")?oNamaStrana():-1!==e.indexOf("usluge.html")?(uslugeStrana(),promenaSlike()):-1!==e.indexOf("kontakt.html")&&kontaktStrana()};var slikeNiz=[],i=0;function promenaSlike(){document.getElementById("setTimeOut").src=slikeNiz[i],i<slikeNiz.length-1?i++:i=0,setTimeout(promenaSlike,2e3)}function indexStrana(){}function oNamaStrana(){$("#nevidljivPtag").hide(),$(document).ready(function(){$(".pokazi").click(function(e){e.preventDefault(),$("#nevidljivPtag").slideToggle("slow"),$(this).text(function(){$(this).text("prociraj vise"==$(this).text()?"sakrij tekst":"prociraj vise")})})})}function uslugeStrana(){var e=["popravka kvarova na vozilu","osiguranja","reglaža","tehnički pregled","A-testiranje ugrađenih plinskih boca"],t=["Vršimo popravke svih kvarova,od ispadanja menjaca, preko napuklih vetrobrana,pa sve do pucanja kardana,naravno tu smo za Vas kao uteha da nije sve tako crno i belo jer pored problema sa kvarom,nećete imati probleme sa cenom.","Kod nas možete dobiti doivotno osiguranje pa čak i kad ste krivi, mi plaćamo vašu štetu na drugom vozilu ili nekom drugom licu u zavisnosti od toga šta ste sve uradili, naravno osiguranje možete iskoristiti za placanje sudskih troskova u slučaju neke parnice vezane za saobraćajnu nezgodu. ","Reglaža se vrsi na najmodernijim mašinama uvezene iz Južno Afričke republike, pružaju sigurnost i pouzdanost u radu, pa smo zbog toga prvi u Srbiji.","Kao što znate (verovatno znate jer se dobar glas na daleko čuje), mi smo prvi u Svetu po utvrđivanju kvarova na vozilu, iza nas je Kina , pa Amerika, a potom i Rusija, dođite, proverite ispravnost vašeg vozila.","Testiranje plinskih boca koje ste ugradili ilegalno ili bez dozvole ovlašćenog lica je nemoguće u našem servisu, mi radimo svoj posao profesionalno tako da znate kada budete dolazili."],a=document.getElementById("usluge");for(let o=0;o<e.length;o++)a.innerHTML+=`\n        <li>\n        <h3>${e[o]}</h3>\n        <ul>\n        <li><p>${t[o]}</p></li>\n        </ul>\n        </li>`}function kontaktStrana(){document.getElementById("posalji").addEventListener("click",function(){var e=document.getElementById("ime").value.trim(),t=document.getElementById("email").value.trim(),a=document.getElementById("telefon").value.trim(),o=document.getElementById("poruka").value.trim(),n=document.getElementsByName("imeRadio"),d=document.getElementById("gradovi").value,i=document.querySelector("#saglasnost"),r=/^[A-ZŽĐŠČĆ][a-zžđščć]{2,14}(\s[A-ZŽĐŠČĆ][a-zžđščć]{2,14})*$/;""==e?(document.getElementById("greskaImePrezime").innerHTML="Polje za ime i prezime je prazno!",document.getElementById("greskaImePrezime").classList.add("dodaj"),document.getElementById("ime").style.borderBottom="3px solid red"):r.test(e)?(document.getElementById("greskaImePrezime").innerHTML="",document.getElementById("greskaImePrezime").classList.remove("dodaj"),document.getElementById("ime").style.borderBottom="3px solid gray"):r.test(e)||(document.getElementById("greskaImePrezime").innerHTML="Polje za ime i prezime nije u dobrom formatu!",document.getElementById("greskaImePrezime").classList.add("dodaj"),document.getElementById("ime").style.borderBottom="3px solid red");""==t?(document.getElementById("greskaEmail").innerHTML="Polje za email je prazno!",document.getElementById("greskaEmail").classList.add("dodaj"),document.getElementById("email").style.borderBottom="3px solid red"):/^[A-zžđščć][A-zžđščć\d\_\.\-]+\@[a-z]{3,10}(\.[a-z]{2,4})+$/.test(t)?(document.getElementById("greskaEmail").innerHTML="",document.getElementById("greskaEmail").classList.remove("dodaj"),document.getElementById("email").style.borderBottom="3px solid gray"):(document.getElementById("greskaEmail").innerHTML="Polje za email nije u dobrom formatu!",document.getElementById("greskaEmail").classList.add("dodaj"),document.getElementById("email").style.borderBottom="3px solid red");""==a?(document.getElementById("greskaBroj").innerHTML="Polje za telefon je prazno!",document.getElementById("greskaBroj").classList.add("dodaj"),document.getElementById("telefon").style.borderBottom="3px solid red"):/^(06[0-9]|\+3816[0-9])\-[\d]{3}\-[\d]{3,4}$/.test(a)?(document.getElementById("greskaBroj").innerHTML="",document.getElementById("greskaBroj").classList.remove("dodaj"),document.getElementById("telefon").style.borderBottom="3px solid gray"):(document.getElementById("greskaBroj").innerHTML="Polje za telefon nije u dobrom formatu!",document.getElementById("greskaBroj").classList.add("dodaj"),document.getElementById("telefon").style.borderBottom="3px solid red");""==o?(document.getElementById("greskaPoruke").innerHTML="Polje za poruku je prazno!",document.getElementById("greskaPoruke").classList.add("dodaj"),document.getElementById("poruka").style.borderBottom="3px solid red"):/^[A-zžđščć\s\/\-\_\+\@\,\.\'\"\%\d]{15,60}$/.test(o)?(document.getElementById("greskaPoruke").innerHTML="",document.getElementById("greskaPoruke").classList.remove("dodaj"),document.getElementById("poruka").style.borderBottom="3px solid gray"):(document.getElementById("greskaPoruke").innerHTML="Poruka je ograničena,mora sadržati min 15,a max 50 karaktera!",document.getElementById("greskaPoruke").classList.add("dodaj"),document.getElementById("poruka").style.borderBottom="3px solid red");var l=0;for(let e of n)e.checked&&l++;0==l?(document.getElementById("zvezda").innerHTML="Niste označili zbog čega nas kontaktirate!",document.getElementById("zvezda").classList.add("dodaj")):1==l&&(document.getElementById("zvezda").innerHTML="",document.getElementById("zvezda").classList.remove("dodaj"));"0"==d?(document.getElementById("grad").innerHTML="Niste odabrali grad!",document.getElementById("grad").classList.add("dodaj")):(document.getElementById("grad").innerHTML="",document.getElementById("grad").classList.remove("dodaj"));i.checked?(document.getElementById("agree").innerHTML="",document.getElementById("agree").classList.remove("dodaj")):(document.getElementById("agree").innerHTML="Niste dali saglasnost!",document.getElementById("agree").classList.add("dodaj"))}),$(document).ready(function(){$("#info ul > li ul").click(function(e){e.stopPropagation()}).filter(":not(:first)").hide(),$("#info ul > li").click(function(){$(this).find("ul:first").is(":visible")||$(this).parent().find("> li ul:visible").slideToggle(),$(this).find("ul:first").stop(!0,!0).slideToggle()})});var e=["Izaberite grad","BEOGRAD","NIS","NOVI SAD","KRAGUJEVAC"],t=document.getElementById("gradovi");for(let a=0;a<e.length;a++)t.innerHTML+=`<option value="${a}">${e[a]}</option>`}slikeNiz[0]="img/slika5.png",slikeNiz[1]="img/slika13.png",slikeNiz[2]="img/slika8.png",slikeNiz[3]="img/slika9.png";