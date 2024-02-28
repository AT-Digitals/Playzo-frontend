const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/TurfImages'

const turfImages = {
    "turf1.jpg": `${S3_BASE_URL}/${path}/turf1.jpg`,
    "turf2.jpg": `${S3_BASE_URL}/${path}/turf2.jpg`,
    "turf3.jpg": `${S3_BASE_URL}/${path}/turf3.jpg`,
    "turf4.jpg": `${S3_BASE_URL}/${path}/turf4.jpg`,
}

export default turfImages