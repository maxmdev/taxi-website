export const ApiClient = (props) => {
    return fetch(props.url, {
        method: props.method,
        headers: {
            'Content-Type': 'application/json',
            ...props.headers
        },
        body: JSON.stringify(props.body),
        qs: props.qs
    }).then(response => response.json())
}