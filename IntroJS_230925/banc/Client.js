"use strict"

class Client { //per qualsevol llenguatge es important saber: L'ORDRE ES IMPERATIU
    //a les classes no es posa VAR ni LET x declarar variables, ni tampoc el FUNCTION
    //1. ATRIBUTS
    nom;
    pin;
    saldo = 0; //un cop tenim això anem al index HTML i li diem document.write(client1.nom).. surt en blanc pk no hem connectat html i js
    //en un punt, al final canvia saldo x comptes
    
    
    //2. MÈTODE (O MÈTODES) CONSTRUCTOR: mètode especial que ens permet fer un procés lògic quan s'estigui instanciant una classe creant un objecte a partir d'ell.
    //no es un metode x alimentar l 'objecte, sino x fer qualsevol proces logic mentre s'instancia la classe, només s'activa UN COP, quan s'instancia la classe.
    //Exemples: la cadena de muntatge en un cotxe, quan acaba es queda allà, el cotxe només hi passa UN COP
    //ex 2: fabrica de pcs, despres d muntar-se, SE LI INSTAL·LA LA BIOS (metode constructiu, NOMES UN COP)
    //aquet metode sempre s'estableix amb una paraula reservada, i mai no pot retornar res. ESTÀ PROHIBIT, no te capacitat de fer-ho, en CAP LLENGUATGE. 
    // No hi ha return, metode de sortida. ELS METODES CONSTRUCTORS no poden ser mai privat, SEMPRE PÚBLIC, no tindria sentit, si s'ha d executar si o si quan isntanciem
    //no te sentit posar-li una condicio, pk si o si s'ha d'executar.
    //CONSTRUCTOR NO ES OBLIGATORI

    constructor(nom,pin,saldo){ //(recordem q es una FUNCIO) ara fem cadascuna d assignacions, amb THIS. Amb this el podem treballar on sigui, sense només dins del metode constructor
        this.nom = nom; //Amb this el podem treballar on sigui, sense només dins del metode constructor.
        this.pin = pin;
        this.saldo = 0;}
    //3. GETTERS --> micromètodes segmentats x cadascun dels atributs pro tb x cada un dels proposits: quan vulguem obtenir l'atribut nom, farem servir un metode especial
    //  nomes x agafar aquesta info, quan el vulguem sobreescriure, farem un altre metode x sobreescriure. Si fem un get del nom ens toranra el nom sencer. 
    // Com ? Pk tenim el nom guardat en una banda, el primer en una altra i el segon en altre, pro x no exposar la base d dades i les debilitats, 
    // posem una microfunció que hi posi seguretat x mig, i nomes es pot consultar la info a través de l'intermediari.
    //Sempre es fa posant: nom reservat GET + nom atribut. 
    //GETTERS MAI MAI REBEN PARÀMETRES, PARÈNTESIS SEMPRE BUITS, però si que en retornen, GETTER TÉ RETURN, SETTER NO EN TÉ.

    getNom(){
        return this.nom;
    }
    getPin(){
        return this.pin;
    }
    //getSaldo(){
    getCompte(){
        return this.comptes.push;
    
    }
    }

    //NO HI HA MODIFICADORS D'ACCÉS EN JAVA SCRIPT

    //4. SETTERS: MAI MAI RETORNEN PARÀMETRES, SEMPRE EN REBEN. NO TÉ RETURN.

    setNom(nom); {//això rebrà el NOU NOM que vulguem sobreescriure, i fem com amb el constructor
        this.nom = nom;
    }
    setPin(pin); {
        this.pin = pin;
    }
    setSaldo(saldo); {
        this.saldo = saldo;
    }
    //ara nem a index a canviar on feiem l'edicio i la consulta pels metodes
    

    //5. MÈTODES GENERALS: tot el que no es constructor, metode general, egtter ni setter
    saludar();{
        return "Hola";
    }


    //6. MÈTODES PROPIS (agafem un metode q ja existeix i l'adaptem a la nostra manera)
    toString();{ //aixo transforma les dades en string
        let resposta = ""; //aqui tem creant una variable string q anirem recorrent tots els comptes q te l'usuari, dira, soc el compte n1 i tinc tant saldo, 
        for(var compte in this.comptes){
            resposta += comptes[compte].toString() + "<p>";
        }
        //return "Sóc un client amb nom " + this.nom + " amb el pin " + this.pin + " i un saldo de " + this.saldo; //anem al index a fer document write, pro no surt (adrede)
        return "Sóc un client amb nom " + this.nom + " amb el pin " + this.pin + " i tinc els comptes:<p> " + resposta; //anem al index a fer document write, pro no surt (adrede)
    }

