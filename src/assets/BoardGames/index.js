const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/BoardGames'

const boardGameImage = {
    "Board1.jpg": `${S3_BASE_URL}/${path}/Board1.jpg`,
    "Board2.avif": `${S3_BASE_URL}/${path}/Board2.avif`,
    "Board3.webp": `${S3_BASE_URL}/${path}/Board3.webp`,
}

export default boardGameImage