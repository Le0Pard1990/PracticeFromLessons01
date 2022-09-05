export const postData = async (url, data) => {
    const responsePost = await fetch (url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    })

    return await responsePost.json();
}

export async function getResource(url) {
    const responseGet = await fetch(url);

    if (!responseGet.ok) {
        throw new Error(`Could not fetch ${url}, status:${responseGet.status}`);
    }

    return await responseGet.json();
}

export const deleteData = async (url) => {
    const responseDel = await fetch(url, {
        method: 'DELETE',
    })

    return await responseDel.json();
}
      