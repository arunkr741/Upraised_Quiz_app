import axios from "axios";

const BASE_API = 'https://upraised.free.beeceptor.com/api'

export const postQuizStart = async (data) => {
    const url = `${BASE_API}/quiz/start`
    try {
        const res = await axios.post(url, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
} 

export const getQuestionDetails = async (question_id) => {
    const url = `${BASE_API}/quiz/question/${question_id}`
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        console.log(error)
    }
}    


