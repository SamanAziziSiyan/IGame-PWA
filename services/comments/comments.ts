import axiosInstanceWordpress from "../axiosWordpress"

const CommentsService = async () => {
    return await axiosInstanceWordpress.get(`wp/v2/comments`)
}
const AddCommentsService = async () => {
    return await axiosInstanceWordpress.post(`wp/v2/comments`)
}

export { CommentsService, AddCommentsService }