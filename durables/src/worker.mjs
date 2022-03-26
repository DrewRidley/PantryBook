import User from './user.mjs';

export default {
    fetch() {
        return new Response("This worker instantiates the durable objects for PantryBook.")
    }
}