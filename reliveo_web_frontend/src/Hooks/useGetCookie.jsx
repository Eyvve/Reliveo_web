export default function useGetCookie() {
    let cookies = {};

    const cookiesAsString = document.cookie.split('; ');

    cookiesAsString.map(cookie => {
        let vals = cookie.split('=');
        cookies = {
            ...cookies,
            [vals[0]]: vals[1]
        };
    });

    return cookies
}