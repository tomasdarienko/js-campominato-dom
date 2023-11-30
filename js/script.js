
let genera = document.getElementById('genera')


genera.addEventListener('click', function () {

     function quadrato(num) {

          const div = document.createElement('div');
          div.classList.add('quadrato');

          div.innerHTML = num
          return div
     }


     const griglia = document.getElementById('grid');
   

     let punti = 0
     for (i = 0; i < 100; i++) {
          let quad = quadrato(i + 1);
          griglia.appendChild(quad)

          quad.addEventListener('click', function () {
               if (!genera_bombe().includes(i)) {
                    this.classList.toggle('clicked')

                    punti++
                    document.getElementById('punteggio').innerText = `il tuo punteggio e ${punti}`
                    if (punti > 83) {
                         document.getElementById('punteggio').innerText = `complimenti hai vinto`
                         griglia.style.display = "none"
                         document.getElementById('punteggio').style.color = "black"
                    }
               }
               else {
                    this.classList.toggle('clicked-bomb')
              

                    document.getElementById('punteggio').style.display = "block"
                    document.getElementById('punteggio').style.color = "black"

                    griglia.style.display = "none"
               }
          })
     }
})

function genera_bombe() {

     let array = []
     let i = 0;
     while (array.length < 16) {
          i++
          let x = Math.floor((Math.random() * 100 + 1));
          if (!array.includes(x)) {
               array.push(x)
          }
     }

     return array
}
