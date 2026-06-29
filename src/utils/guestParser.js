export const guestParser = (search) => {
  const params = new URLSearchParams(search);

  const guest =
    params.get('to') ||
    params.get('guest') ||
    '';

  if (!guest || guest.trim().length === 0) {
    return 'Tamu Undangan';
  }

  return decodeURIComponent(guest);
};

export default guestParser;