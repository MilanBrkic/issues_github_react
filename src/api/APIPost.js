exports.postIssue = async (issue) => {
    try {
        const formData = new FormData();

        for(const name in issue){
            formData.append(name, issue[name]);
        }

        const url = 'http://localhost:3000/api/issues';
        const options = {
            method: 'POST',
            body: formData
        }
        const raw = await fetch(url, options);
        const res = await raw.json();
        return res;
    } catch (error) {
        return error;
    }

}