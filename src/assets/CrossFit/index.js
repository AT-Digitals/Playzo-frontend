const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/CrossFit'

const crossFitImage = {
    "cross1.jpg": `${S3_BASE_URL}/${path}/cross1.jpg`,
    "cross2.jpg": `${S3_BASE_URL}/${path}/cross2.jpg`,
    "cross3.jpg": `${S3_BASE_URL}/${path}/cross3.jpg`,  
    "cross4.webp": `${S3_BASE_URL}/${path}/cross4.webp`,
}

export default crossFitImage