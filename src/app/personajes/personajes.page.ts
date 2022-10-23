import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

lista_personajes = [
    {
        "nombre": "Eddard «Ned» Stark",
        "edad": 36,
        "filiacion": "Casa Stark",
        "actor": [
            "Sean Bean",
            "Sebastian Croft (joven)",
            "Robert Aramayo (adulto joven)"
        ],
        "descripcion": "Lord Eddard Stark, apodado Ned, fue cabeza de la Casa Stark, y como tal, Señor de Invernalia y Guardián del Norte. Durante la Guerra del Usupador se casó con Lady Catelyn Tully, con quien tuvo cinco hijos, Robb, Sansa, Arya, Brandon y Rickon. Tuvo un hijo bastardo, Jon Nieve.",
        "apariencia y caracter": "Eddard es descrito como un hombre de rostro alargado, cabello oscuro y ojos grises, rasgos típicos de la Casa Stark. Su barba empezaba a tornarse grisácea en su último año de vida. De acuerdo a Lady Catelyn, no es ni tan alto ni tan atractivo como lo fue su hermano mayor, Brandon Stark.Eddard fue conocido por su inquebrantable sentido del honor y la justicia, y su familia lo describe como amable y generoso, aunque algunos consideran su carácter reservado, como frío y distante."
    },
    {
        "nombre": "Robert Baratheon",
        "edad": 36,
        "filiacion": "Casa Baratheon",
        "actor": "Mark Addy",
        "descripcion": "El rey Robert Baratheon fue cabeza de la Casa Baratheon y Señor de Bastión de Tormentas. En 283 d.C., tras liderar una rebelión contra la Dinastía Targaryen y salir victorioso, se convirtió en Rey de los Siete Reinos hasta su muerte en 298 d.C.",
        "apariencia y caracter": "Robert es descrito como un hombre robusto y dado a los excesos de todo tipo. Aunque no particularmente inteligente, fue reconocido como un renombrado guerrero. En su juventud era descrito como alto, ancho de hombros y atlético, el sueño de toda doncella. No llevaba barba, pero tras ser coronado rey acumuló peso debido a los banquetes frecuentes y el beber en exceso. Ganó mucho peso en sus años de reinado, dejándose crecer la barba para ocultar la prominente papada. <br>Robert es reconocido como un cazador ávido, tal y como se refleja sustituyendo los cráneos de dragón de los Targaryen en la sala del trono por trofeos de caza. Aunque en el arsenal real se incluyen numerosas armas, Tywin Lannister indica que la única arma parecida a una espada usada por Robert fue un cuchillo de caza que él recibió de Lord Jon Arryn cuando era un muchacho. En sus días más jóvenes, Robert prefería manejar un martillo de guerra de hierro, forjado por Donal Noye, y llevar un gran yelmo con cornamenta a juego con su armadura. <br>Se le describía como encantador, extrovertido y como poseedor de una personalidad atrayente y carismática, con una habilidad impresionante para volver amigos a los enemigos. De acuerdo con Eddard Stark, Robert le prometía el mundo a una mujer durante la noche, sólo para olvidarlo todo, incluida a la mujer, a la mañana siguiente."
    },
    {
      "nombre": "Jaime Lannister",
      "edad": 34,
      "filiacion": "Casa Lannister",
      "actor": "Nikolaj Coster-Waldau",
      "descripcion": "Ser Jaime Lannister, apodado Matarreyes, es el Lord Comandante de la Guardia Real del rey Tommen I Baratheon. Es el segundo hijo de Lord Tywin Lannister y Lady Joanna Lannister. Tiene una hermana gemela, Cersei, y un hermano menor, Tyrion. Se ganó el apodo de Matarreyes tras asesinar al rey Aerys II Targaryen al término de la Rebelión de Robert. Durante la mayor parte de su vida, Jaime ha mantenido una relación incestuosa en secreto con su hermana Cersei, con la que tiene tres hijos, Joffrey, Myrcella y Tommen. Oficialmente los niños son reconocidos como hijos legítimos del esposo de Cersei, el rey Robert Baratheon.",
      "apariencia y caracter": "Jaime es descrito como un hombre alto y vigoroso con cabello dorado, de ojos verdes y una sonrisa que cortaba como un cuchillo, según las palabras de Jon Nieve.[3] Jaime es considerado un guerrero nato, pues la mayoría de sus habilidades se concentran en el área de conocimientos marciales. Es considerado un hombre atractivo, como casi todos los Lannister. Tiene poco interés en la política y las intrigas, y asegura sentirse realmente vivo cuando lucha o cuando hace el amor. Habitualmente, viste de blanco, como miembro de la Guardia Real para cuando está de servicio, pero también ha llevado los colores de su familia en una armadura distintiva, además de un yelmo con forma de cabeza de león. Jaime se muestra en ocasiones arrogante, amoral y deshonroso, de comportamiento similar a su hermana Cersei. Debido a que Jaime ha cometido actos reprobables, suele tener una mala reputación. Una broma improvisada es tomada como una grave amenaza por otros, simplemente porque la ha dicho el Matarreyes. Por honor, Jaime pronunció sus votos de la Guardia Real, pero cuando estos entran en conflicto, elige actuar hasta el final, sin importar las consecuencias."
    }
]

  constructor() { }

  ngOnInit() {
    
  
      let body = ""
            for (var i = 0; i < this.lista_personajes.length; i++) {      
               body+=`<i-item>
                        <ion-avatar slot="start">
                        <img src="assets/img/personajes/${this.lista_personajes[i].nombre}.jpg">
                        </ion-avatar>
                        <ion-label>${this.lista_personajes[i].nombre}</ion-label>
                      </i-item>`
            }
            document.getElementById("contenidos").innerHTML = body
  
  }

}
