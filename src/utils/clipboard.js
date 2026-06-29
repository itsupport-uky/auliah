export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);

    return {
      success: true,
      message: 'Berhasil disalin'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Gagal menyalin'
    };
  }
};

export default copyToClipboard;