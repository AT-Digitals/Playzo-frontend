const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/Playstation'

const playstationImage = {
    "play1.webp": `${S3_BASE_URL}/${path}/play1.webp`,
    "play2.jpg": `${S3_BASE_URL}/${path}/play2.jpg`,
    "play3.avif": `${S3_BASE_URL}/${path}/play3.avif`,
}

export default playstationImage