export const sendReqToServer = async ({ url, method, body }) => {
    try {
        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!res.ok) {
            const err = new Error('Failed to fetch');
            err.status = res.status;
            throw err;
        }
        return await res.json();
    } catch (err) {
        err.scope = err.scope || 'sendReqToServer';
        console.error(err);
    }
};