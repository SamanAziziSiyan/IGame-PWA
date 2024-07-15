import axiosInstance from "../axios"

const OrderListService = async (CustomerID: number) => {
    return await axiosInstance.post(`orderlist/customer/${CustomerID}`,
        {
            "offset": -20,
            "sorts": [{
                "_fields": "CreatedDateTime",
                "dir": "desc",
                "field": "CreatedDateTime"
            }]

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