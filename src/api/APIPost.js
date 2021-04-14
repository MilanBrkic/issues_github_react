exports.postIssue = async (issue) => {
    try {
        const formData = new FormData();

        formData.append('title', issue.title);
        formData.append('user', issue.user);
        formData.append('text',issue.text);
        for (const i in issue.file) {
            formData.append('file', issue.file[i]);
        }

        console.log(formData);
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