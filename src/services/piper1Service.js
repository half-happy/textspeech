const ngrokPort = 5000;
const ngrokUrl = `https://caring-remotely-bull.ngrok-free.app:${ngrokPort}`;

async function fetchPiper1Response(inputText) {
    try {
        const res = await fetch(ngrokUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ text: inputText }),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default {
    fetchPiper1Response,
};