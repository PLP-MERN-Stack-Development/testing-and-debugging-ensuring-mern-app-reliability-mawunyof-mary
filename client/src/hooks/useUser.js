const { useState, useCallback } = require('react');
const axios = require('axios');

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUser = useCallback(async (userId, userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`/api/users/${userId}`, userData);
      setUser(response.data);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, error, fetchUser, updateUser };
};

module.exports = { useUser };
