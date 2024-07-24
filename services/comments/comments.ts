import axiosInstanceWordpress from "../axiosWordpress"

const CommentsService = async () => {
    return await axiosInstanceWordpress.get(`comments`)
}
const AddCommentsService = async () => {
    return await axiosInstanceWordpress.post(`comments`)
}

export { CommentsService, AddCommentsService }