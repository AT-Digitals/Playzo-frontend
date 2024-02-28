const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/Bowling'

const bowlingImage = {
    "bowling1.jpg": `${S3_BASE_URL}/${path}/bowling1.jpg`,
    "bowling2.jpg": `${S3_BASE_URL}/${path}/bowling2.jpg`,
    "bowling3.webp": `${S3_BASE_URL}/${path}/bowling3.webp`,
}

export default bowlingImage