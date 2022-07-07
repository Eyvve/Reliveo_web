import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function useReactPath() {

    const [path, setPath] = useState(window.location.pathname);
    const listenToPopstate = () => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };
    useEffect(() => {
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);
    return path;
}
export default useReactPath;