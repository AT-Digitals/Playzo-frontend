const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/Header'

const headerImage = {
    "headerProfileLogo.png": `${S3_BASE_URL}/${path}/headerProfileLogo.png`,
}

export default headerImage