
let genera = document.getElementById('genera')

genera.addEventListener('click', function () {

     function quadrato(num) {

          const div = document.createElement('div');

          div.classList.add('quadrato');
          div.addEventListener('click', function () {
               this.classList.toggle('clicked')
          })
          div.innerHTML = num
          return div
     }
     const griglia = document.getElementById('grid');


     for (i = 0; i < 100; i++) {
          let quad = quadrato(i + 1);
          griglia.appendChild(quad)
     }
})

function genera_numeri(num) {

     let array = []

     for (i = 0; i < num.lenght; i++) {
          let x = Math.floor((Math.random() * 100 + 1));
          if (!array.includes(x)) {
               array.push(x)
          }
     }

}
