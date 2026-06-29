import React, {
  memo,
  useCallback,
  useState
} from 'react';

import { motion } from 'framer-motion';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Toast from '../../components/ui/Toast';

const STORAGE_KEY =
  'wedding-rsvp-data';

const RSVPSection = memo(() => {
  const [showToast, setShowToast] =
    useState(false);

  const [form, setForm] = useState({
    name: '',
    attendance: '',
    guestCount: 1,
    message: ''
  });

  const handleChange =
    useCallback((e) => {
      const { name, value } =
        e.target;

      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }, []);

  const handleSubmit =
    useCallback(
      (e) => {
        e.preventDefault();

        if (
          !form.name.trim()
        ) {
          return alert(
            'Nama wajib diisi'
          );
        }

        if (
          !form.attendance
        ) {
          return alert(
            'Pilih kehadiran'
          );
        }

        if (
          Number(
            form.guestCount
          ) <= 0
        ) {
          return alert(
            'Jumlah tamu minimal 1'
          );
        }

        if (
          form.message.length >
          300
        ) {
          return alert(
            'Pesan maksimal 300 karakter'
          );
        }

        const existing =
          JSON.parse(
            localStorage.getItem(
              STORAGE_KEY
            ) || '[]'
          );

        existing.unshift({
          ...form,
          id:
            Date.now(),
          createdAt:
            new Date().toISOString()
        });

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(
            existing
          )
        );

        setForm({
          name: '',
          attendance: '',
          guestCount: 1,
          message: ''
        });

        setShowToast(true);

        window.dispatchEvent(
          new Event(
            'wedding-rsvp-updated'
          )
        );
      },
      [form]
    );

  return (
    <>
      <Toast
        show={showToast}
        message="RSVP berhasil dikirim"
        onClose={() =>
          setShowToast(false)
        }
      />

      <section
        id="rsvp"
        className="
          py-24
          bg-beige
        "
      >
        <Container>
          <SectionTitle
            title="RSVP"
            subtitle="Konfirmasi Kehadiran"
          />

          <motion.form
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            onSubmit={
              handleSubmit
            }
            className="
              max-w-3xl
              mx-auto
              bg-white
              p-8
              rounded-3xl
              shadow-luxury
              space-y-5
            "
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={
                handleChange
              }
              placeholder="Nama"
              className="
                w-full
                border
                rounded-xl
                p-4
              "
              required
            />

            <select
              name="attendance"
              value={
                form.attendance
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                rounded-xl
                p-4
              "
              required
            >
              <option value="">
                Pilih Kehadiran
              </option>

              <option value="Hadir">
                Hadir
              </option>

              <option value="Tidak Hadir">
                Tidak Hadir
              </option>
            </select>

            <input
              type="number"
              min="1"
              name="guestCount"
              value={
                form.guestCount
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                rounded-xl
                p-4
              "
            />

            <textarea
              rows="5"
              maxLength="300"
              name="message"
              value={
                form.message
              }
              onChange={
                handleChange
              }
              placeholder="Pesan & Doa"
              className="
                w-full
                border
                rounded-xl
                p-4
              "
            />

            <button
              type="submit"
              className="
                bg-gold
                text-white
                px-8
                py-4
                rounded-full
              "
            >
              Kirim RSVP
            </button>
          </motion.form>
        </Container>
      </section>
    </>
  );
});

RSVPSection.displayName =
  'RSVPSection';

export default RSVPSection;