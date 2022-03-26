export async function get(request) {
    let id = UserObject.newUniqueId();
    let do = UserObject.get(id);

    const response = await do.fetch({
        method: "POST",
        body: {
            name: "John Doe",
            age: 42
            
        }
    })
}