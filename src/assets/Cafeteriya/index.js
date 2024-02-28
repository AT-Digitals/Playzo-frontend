const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/Cafeteriya'

const cafeteriaImage = {
    "cafe1.jpg": `${S3_BASE_URL}/${path}/cafe1.jpg`,
    "cafe2.jpg": `${S3_BASE_URL}/${path}/cafe2.jpg`,
    "cafe3.jpg": `${S3_BASE_URL}/${path}/cafe3.jpg`,  
    "cafe4.jpg": `${S3_BASE_URL}/${path}/cafe4.jpg`,
}

export default cafeteriaImage