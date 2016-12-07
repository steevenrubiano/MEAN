export class Message {
    constructor(private user: string, private content: string){}

    toString(){
        this.user + " " + this.content;
    }
}
