exports.deleteOne = async(id) =>{
    try {
        const url = 'http://localhost:3000/api/issues/'+id;
        const options = {
            method: 'DELETE'
        }
        const raw = await fetch(url, options);
        const res = await raw.json();
        return res;
    } catch (error) {
        return error;
    }
}