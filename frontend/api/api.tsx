export const STRAPIGET = async (slug: string) => {
    try {
        let resp = await fetch(`${process.env.STRAPI_URL}/api/${slug}?populate=*`)
        if (!resp.ok) {
            throw new Error(`HTTP error: Status ${resp.status}`);
        }
        return resp.json()
    } catch (error) {
        console.log(error)
    }
}