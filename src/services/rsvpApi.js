const BASE_URL = 'https://undangan.pythonanywhere.com';

export const getPesan = async () => {
  const response = await fetch(
    `${BASE_URL}/get-pesan`
  );

  if (!response.ok) {
    throw new Error('Gagal mengambil data');
  }

  const data = await response.json();

  return data.data;
};

export const addPesan = async (payload) => {
  const response = await fetch(
    `${BASE_URL}/add-pesan`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error('Gagal mengirim RSVP');
  }

  return response.json();
};