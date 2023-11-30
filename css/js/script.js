
let genera = document.getElementById('genera')

genera.addEventListener('click',function(){

     function quadrato(num) {
          const div = document.createElement('div');
     
          div.classList.add('quadrato');
     
          div.innerHTML=num
          return div
     }
     const griglia = document.getElementById('grid');
     
     
     for (i = 0; i < 100; i++) {
          let quad = quadrato(i+1);
          griglia.appendChild(quad)
     }
})

