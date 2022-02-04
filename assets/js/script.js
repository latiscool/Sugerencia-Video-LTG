// Función ejecutadas inmediatamente (IIFE)
// **Metodo setAttribute, que toma los dos parametros.
// En donde el primero es el nombre de la propiedad a setear y el segundo es el valor de dicha propiedad

const patronAutoEjecutable = (() => {
  //Variable  para el video
  const data = (url, id) => {
    id.setAttribute('src', url);
    id.style.display = 'block';
  };

  //Retornado data
  return { mostrarInfo: (url, id) => data(url, id) };
})();

//Creando las clases aplicando Closure ES6
class Multimedia {
  constructor(url) {
    //  Atributo privado (_)
    let _url = url;

    // Funcion interna
    this.getUrl = () => _url;
  }

  //Agregando  método Get
  get url() {
    return this.getUrl();
  }
  //Metodo que retorb solo un mensaje
  setInicio() {
    return 'Este método es para realizar un cambio en la URL del video';
  }
}

//Creando las clases aplicando Closure ES6
// **Clase Hija(o) de Multimedia

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    //  Atributo privado (_)
    let _id = id;
    // Funcion interna
    this.getId = () => _id;

    //Metodo que llama a  la Función Pública de la IIFE (url,id)
  }
  playMultimedia() {
    //IIFE.variable_que_contenga_informacion_a_Mostrar
    patronAutoEjecutable.mostrarInfo(this.url, this.getId());
  }

  //Metodo para setear tiempo de inicio de la URl con setAttribute
  setInicio(tiempo) {
    this.getId().setAttribute('src', `${this.url}?start=${tiempo}`);
  }
}

//Instanciando Muscia, Video y Serie de la clase Reprocuctor
//Dando el argumento la url del video y y el id(del html)

let musicaVideo = new Reproductor(
  'https://www.youtube.com/embed/-lO0ohlMjXw',
  musica
);
let peliculasVideo = new Reproductor(
  'https://www.youtube.com/embed/ctcQ6b037k0',
  peliculas
);
let seriesVideo = new Reproductor(
  'https://www.youtube.com/embed/Vlutwk2GspA',
  series
);

//Invocar metodo de la clase

musicaVideo.playMultimedia();
peliculasVideo.playMultimedia();
seriesVideo.playMultimedia();

musicaVideo.setInicio(60);
// peliculasVideo.setInicio(60);
// seriesVideo.setInicio(60);
