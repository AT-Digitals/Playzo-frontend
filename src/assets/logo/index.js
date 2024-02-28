const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/logo'

const logoImage = {
    "Playzo.svg": `${S3_BASE_URL}/${path}/Playzo.svg`,
}

export default logoImage