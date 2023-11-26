const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

async function apiClient(endpoint: string) {
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };

  return window.fetch(`${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { apiClient };
