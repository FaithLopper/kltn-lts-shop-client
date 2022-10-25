const handleApiResponse = ({ success, responseData }, onCompleted, onError) =>
    success ? onCompleted(responseData) : onError(responseData)

export { handleApiResponse }
