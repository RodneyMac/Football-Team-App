import {createStore} from 'redux';
import j1 from './assets/j1.jpg';
import j3 from './assets/j3.jpg';
import j4 from './assets/j4.jpg';
import j17 from './assets/j17.jpg';
import j20 from './assets/j20.jpg';
import j15 from './assets/j15.jpg';
import j16 from './assets/j16.jpg';
import j9 from './assets/j9.jpg';
import j10 from './assets/j10.jpg';
import j19 from './assets/j19.jpg';
import j12 from './assets/j12.jpg';
import j18 from './assets/j18.jpg';
import j14 from './assets/j14.jpg';

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Juan",
        //nombre: "Juan Carlitos",
        //foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
        foto: j1
    },
    {
        id: 2,
        nombre: "Robert",
        //nombre: "Beto Quiroga",
        //foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        foto: j3

    },
    {
        id: 3,
        nombre: "Carlos",
        //nombre: "Alejo Garcia",
        //foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
        foto: j4
    },
    {
        id: 4,
        nombre: "Ricardo",
        //nombre: "Juan Disain",
        //foto: "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg"
        foto: j17
    },
    {
        id: 5,
        nombre: "Edgar",
        //nombre: "Alvaro Felipe",
        //foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/alvaro.jpg?itok=08DTxTR9"
        foto: j20
    },
    {
        id: 6,
        nombre: "César",
        //nombre: "Alexys Lozada",
        //foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-09/tioalexys.jpg?itok=X6xIi4DI"
        foto: j16
    },
    {
        id: 7,
        nombre: "Luis",
        //nombre: "Harold Pajuelo",
        //foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2017-11/2017-11-16_17h25_03.png?itok=FrcROCNv"
        foto: j15
    },
    {
        id: 8,
        nombre: "Antonio",
        //nombre: "Manu Rodriguez",
        //foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/manu-foto.jpg?itok=4HvdRLS7ceived_1693673130717610.jpeg?itok=ey6dQlly"
        foto: j9
    },
    {
        id: 9,
        nombre: "Victor",
        //nombre: "AlejoRodríguez",
        //foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-02/IMG-20180202-WA0001.jpg?itok=TIRhGBIM"
        foto: j10
    },
    {
        id: 10,
        nombre: "Damian",
        //nombre: "Andrés Muquinche",
        //foto: "https://api.ed.team/files/avatars/33f02168-6547-4520-bada-6302388d5880.jpg"
        foto: j19
    },
    {
        id: 11,
        nombre: "Rafael",
        //nombre: "Ricardo Otero",
        //foto: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-05/ricardo%20%28FILEminimizer%29.png"
        foto: j12
    },
    {
        id: 12,
        nombre:"Pedro",
        //nombre: "Deivis Rivera",
        //foto: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-05/deivis.jpg"
        foto: j18
    },
    {
        id: 13,
        nombre: "Armando",
        //nombre: "Percy Tuncar",
        //foto: "https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png"
        foto: j14
    }
],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    //console.log(action);
    if(action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)