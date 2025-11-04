"use strict"

class Client {
    #dniClient;

    constructor(nomClient, dniClient, anyAlta) {
        this._nomClient = nomClient;
        this.#dniClient = dniClient;
        this._anyAlta = parseInt(anyAlta);
        this._taulesLlogades = [];
    }

    get nomClient() { return this._nomClient }
    get dniClient() { return this.#dniClient }
    get anyAlta() { return this._anyAlta }
    get taulesLlogades() { return this._taulesLlogades }

    llogarTaula(novaTaula, numHores) {

        const preuClient = novaTaula.calcularPreu(numHores);
        novaTaula.estatTaula = "llogada";
        this._taulesLlogades.push(novaTaula)

        return `El client ${this.nomClient} ha llogat la taula ${novaTaula.idTaula} per ${numHores} hores.
        El preu total és ${preuClient} €.`

    }

    tornarTaula (idTaula) {
        
    const taulaPosicio = indexTaulaClient(dniClient, idTaula)

    if (taulaPosicio === -1) return `El client no té llogada aquesta taula.`

    this._taulesLlogades[taulaPosicio].estatTaula = "disponible"
    this._taulesLlogades.splice(taulaPosicio, 1)

    return `Taula ${idTaula} retornada amb èxit.`
    
    }

    mostrarTaulesLlogades() {
        const taulesClientArr = this._taulesLlogades
        return taulesClientArr.join("<br>")
    }
    
//mostrar dades i taules llogades
    toString() {
        return `DADES DEL CLIENT

        Nom client: ${this.nomClient}
        Data alta a l'app: ${this.anyAlta}
        Taules llogades: ${this.taulesLlogades.length}
        `
    }


}