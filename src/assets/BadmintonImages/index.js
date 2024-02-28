const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/BadmintonImages'

const badmintonImage = {
    "badminton1.jpg": `${S3_BASE_URL}/${path}/badminton1.jpg`,
    "badminton2.jpg": `${S3_BASE_URL}/${path}/badminton2.jpg`,
    "badminton3.jpg": `${S3_BASE_URL}/${path}/badminton3.jpg`,
}

export default badmintonImage