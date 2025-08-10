const ngrokPort = 5000;
const ngrokUrl = `https://caring-remotely-bull.ngrok-free.app:${ngrokPort}`;

export async function fetchPiper1Response(inputText) {
    console.log(JSON.stringify({ text: inputText }))
    try {
        const res = await fetch(ngrokUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'o': 'test.wav'
            },
            body: JSON.stringify({ text: inputText }),
        });
        console.log(await res.json());
        const data = await res.json();
        console.log('Response from Piper1:', data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}