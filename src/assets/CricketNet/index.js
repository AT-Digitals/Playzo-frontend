const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL
const path = 'assets/CricketNet'

const cricketNetImage = {
    "crick1.webp": `${S3_BASE_URL}/${path}/crick1.webp`,
    "crick2.jpg": `${S3_BASE_URL}/${path}/crick2.jpg`,
    "crick3.jpg": `${S3_BASE_URL}/${path}/crick3.jpg`,  
    "crick4.jpg": `${S3_BASE_URL}/${path}/crick4.jpg`,
}

export default cricketNetImage