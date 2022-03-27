
export class User {
    constructor(state, env) {
        this.state = state;
    }   

    async fetch(request) {
        const body = await request.json();

        //This object is being created.
        if(request.method == "PUT") {

            
            //Put the body directly into storage.
            await this.state.storage.put(body);
        }

        //A field (or multiple) of the object is being updated.
        if(request.method == "PATCH") {
            let promiseArr = [];
            for (const [k, v] of Object.entries(body)) {
                promiseArr.push(this.state.storage.put(k, v));
            }
            await Promise.all(promiseArr);
        }
    }
}



export default {
    fetch() {
        return new Response("This worker instantiates the durable objects for PantryBook.")
    }
}