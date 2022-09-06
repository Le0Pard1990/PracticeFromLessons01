export const useService = () => {

    const serverUrl = 'http://localhost:3000/employees'
    
    const postData = async (url, data) => {
        const responsePost = await fetch (url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })
    
        return await responsePost.json();
    }
    
    const getResource = async (url) => {
        const responseGet = await fetch(url);
    
        if (!responseGet.ok) {
            throw new Error(`Could not fetch ${url}, status:${responseGet.status}`);
        }
    
        return await responseGet.json();
    }
    
    const deleteData = async (url, id) => {
        const responseDel = await fetch(url + '/' + id, {
            method: 'DELETE',
        })
    
        return await responseDel.json();
    }

    return {postData, getResource, deleteData, serverUrl}
}


      