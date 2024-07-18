import axiosInstance from "../axios"

const OrderListService = async (CustomerID: number) => {
    return await axiosInstance.post(`orderlist/customer/${CustomerID}`,
        {
            "currentPage": 0,
            "limit": 20,
            "offset": -20,
            "sorts": [
                {
                    "_field": "createDateTime",
                    "dir": "desc",
                    "field": "createDateTime"
                }
            ]
        })
}

const DashboardOrderStatisticsService = async (CustomerID: number) => {
    return await axiosInstance.get(`order/statistics/${CustomerID}`)
}

const PreOrderService = async (orderData: string) => {
    return await axiosInstance.post(`order/preorder/`,
        orderData
    )
}


export { OrderListService, DashboardOrderStatisticsService, PreOrderService }