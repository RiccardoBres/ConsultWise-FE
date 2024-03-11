// apiUtils.js
import axios from 'axios';

export const sendApiRequest = async (endpoint, token, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_SERVER_BASE_URL}/company/${endpoint}`,
            data,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
