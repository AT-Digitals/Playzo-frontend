const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/Partycenter'

const partycenterImage = {
    "party1.webp": `${S3_BASE_URL}/${path}/party1.webp`,
    "party2.jpg": `${S3_BASE_URL}/${path}/party2.jpg`,
    "party3.jpeg": `${S3_BASE_URL}/${path}/party3.jpeg`,
    "party4.jpg": `${S3_BASE_URL}/${path}/party4.jpg`,
}

export default partycenterImage