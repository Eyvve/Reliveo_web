
import * as jose from 'jose';

export default function useGetUsers() {
    return () => {
        const cookie = document.cookie
        let jwtData = jose.decodeJwt(cookie)
        // console.log(jwtData)
        return jwtData
    }
}