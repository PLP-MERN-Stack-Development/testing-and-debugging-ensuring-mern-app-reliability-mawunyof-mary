const API_BASE_URL = 'http://localhost:5000/api';

const bugService = {
  getAllBugs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bugs`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch bugs: ${error.message}`);
    }
  },

  createBug: async (bugData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bugs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bugData)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to create bug: ${error.message}`);
    }
  }
};

export default bugService;