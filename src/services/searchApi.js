import axiosInstance from "./config/axiosInstance";

export function getMetadata() {
    return axiosInstance.get('service/attributes')
}

export function getFileList(hospital, attributes) {
    return axiosInstance.post('service/search', {name: hospital, attributes: attributes})
}