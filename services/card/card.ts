import axiosInstance from "../axios"

const UploadCardDocumentService = async () => {
    return await axiosInstance.post(`CustomerCardVerificationForm/Add`)
}
const AddCardDocumentService = async (DocumentData: string) => {
    return await axiosInstance.get(`CustomerCardVerificationForm/addDocuments`,)
}

export { UploadCardDocumentService, AddCardDocumentService }