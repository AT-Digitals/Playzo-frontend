const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/AboutPageImages'

const aboutPage = {
    "about-us-bg.jpg": `${S3_BASE_URL}/${path}/about-us-bg.jpg`,
    "carrersbg.jpg": `${S3_BASE_URL}/${path}/carrersbg.jpg`,
    "cookies.jpg": `${S3_BASE_URL}/${path}/cookies.jpg`,
    "Group 34245.svg": `${S3_BASE_URL}/${path}/Group 34245.svg`,
    "layer-cookies.svg": `${S3_BASE_URL}/${path}/layer-cookies.svg`,
    "pexels-pixabay-209841.jpg": `${S3_BASE_URL}/${path}/pexels-pixabay-209841.jpg`,
    "pexels-pixabay-262524.jpg": `${S3_BASE_URL}/${path}/pexels-pixabay-262524.jpg`,
    "visibility.svg": `${S3_BASE_URL}/${path}/visibility.svg`
}

export default aboutPage