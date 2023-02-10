export default class TodoResource {
    constructor(data = {}) {
        this.id = data.id;
        this.text = data.text;
        this.complete = data.complete;
        this.editable = data.editable || false;
    }
}
