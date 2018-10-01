export class Todo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string) {
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;
        // This is an example app,
        // On a real app, please use another method to assign an id.
        this.id = Math.random();
    }
}
