
export default function useEraseCookie() {

    return () => {
        console.log("bye cookie")
        document.cookie = "ReliveoJwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    }
}