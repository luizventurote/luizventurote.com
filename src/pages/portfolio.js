import React from "react"
import { useEffect } from "react"
import Layout from "../components/layout"

export default ({data}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace('https://venturote.notion.site/Luiz-Venturote-5329276ac505419e80b60b385749d9ab?pvs=4');
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Layout>Will redirect in 3 seconds...</Layout>
    )
}