import { IOrderProductData } from "@/types";
import axiosInstance from "../axios"

const OrderListService = async (CustomerID: number, page: number, ITEMS_PER_PAGE: number) => {
    let offset;
    if (page == 1)
        offset = 5;
    else
        offset = (page - 1) * ITEMS_PER_PAGE;
    return await axiosInstance.post(`orderlist/customer/${CustomerID}`,
        {
            "limit": ITEMS_PER_PAGE,
            "offset": offset,
            "sorts": [
                {
                    "_field": "createDateTime",
                    "dir": "desc",
                    "field": "createDateTime"
                }
            ]
        })
}

const LastOrderListService = async (CustomerID: number) => {
    return await axiosInstance.post(`orderlist/customer/${CustomerID}`,
        {
            "currentPage": 0,
            "limit": 5,
            "offset": -5,
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

const PreOrderService = async (orderData: IOrderProductData) => {
    return await axiosInstance.post(`order/preorder/`,
        orderData
    )
}


export { OrderListService, LastOrderListService, DashboardOrderStatisticsService, PreOrderService }