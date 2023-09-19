import axios from "axios";

const BASE_API = 'https://f9b1ac93-38a7-4e1d-876b-48a0fa65d647.mock.pstmn.io/api'

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
    if (!question_id) return
    const url = `${BASE_API}/quiz/question/${question_id}`
    try {
        const res = await axios.get(url);
        return res.data
    } catch (error) {
        console.log(error)
    }
}    

export const getQuizResult = async () => {
    const url = `${BASE_API}/quiz/score`
    try {
        const res = await axios.get(url);
        return res.data
    } catch (error) {
        console.log(error)
    }
}  

export const submitAnswer = async (data) => {
    const url = `${BASE_API}/quiz/submit`
    try {
        const res = await axios.post(url, data);
        return res.data
    } catch (error) {
        console.log(error)
    }
}  


