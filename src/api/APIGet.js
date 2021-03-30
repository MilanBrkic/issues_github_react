exports.getAllIssues = async ()=>{
    try{
        const url = 'http://localhost:3000/api/issues';
        const res = await fetch(url)
        const json = await res.json();
        return json;
    }
    catch(e){
        throw e;
    }
}

exports.getAllIssues = async (id)=>{
    try{
        const url = `http://localhost:3000/api/issues/${id}`;
        const res = await fetch(url)
        const json = await res.json();
        return json;
    }
    catch(e){
        throw e;
    }
}