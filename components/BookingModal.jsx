'use client';

import { useState, useEffect } from 'react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageId: 'adventure',
    date: '',
    participants: 15,
    addons: [],
    notes: '',
  });

  const packages = [
    {
      id: 'family',
      name: 'Rafting Cisadane Keluarga',
      dist: '7 KM (± 1.5 - 2 Jam)',
      price: 185000,
      badge: 'Family & Pemula',
    },
    {
      id: 'adventure',
      name: 'Rafting Adventure Dam 3M',
      dist: '11 KM (± 2 - 2.5 Jam)',
      price: 225000,
      badge: 'Paling Populer ★',
    },
    {
      id: 'gathering',
      name: 'One Day Gathering + Rafting',
      dist: '11 KM + Outbound Team Building',
      price: 345000,
      badge: 'Corporate / Kantor',
    },
    {
      id: 'paintball',
      name: 'Bundling Rafting + Paintball',
      dist: '11 KM + Wargame 50 Peluru',
      price: 345000,
      badge: 'Battle Seru',
    },
    {
      id: 'offroad',
      name: 'Bundling Rafting + Offroad 4x4',
      dist: '11 KM + Jalur Ekstrem Lumpur',
      price: 495000,
      badge: 'Adrenalin Tinggi',
    },
  ];

  const customPackage = {
    id: 'custom',
    name: 'Paket Kustom Rombongan',
    dist: 'Sesuai Request Khusus & Rundown Fleksibel',
    price: 0,
    badge: 'Konsultasi Khusus',
  };

  const addonOptions = [
    { id: 'prasmanan', name: 'Prasmanan Sunda Papalidan', priceTag: '+45rb/org', pricePerPerson: 45000 },
    { id: 'drone', name: 'Foto & Video Drone HD', priceTag: '+750rb/grup', fixedPrice: 750000 },
    { id: 'bbq', name: 'Barbeque (BBQ) Night', priceTag: '+75rb/org', pricePerPerson: 75000 },
    { id: 'kambing', name: 'Kambing Guling Utuh', priceTag: '+2,2jt/ekor', fixedPrice: 2200000 },
    { id: 'transport', name: 'Shuttle Bus/Elf PP', priceTag: '+65rb/org', pricePerPerson: 65000 },
  ];

  const paxPresets = [5, 10, 15, 20, 30, 50];

  // Listen to global open-booking-modal event
  useEffect(() => {
    const handleOpen = (e) => {
      if (e?.detail?.packageId) {
        setFormData((prev) => ({ ...prev, packageId: e.detail.packageId }));
      }
      setIsOpen(true);
    };

    const handleGlobalClick = (e) => {
      const target = e.target.closest(
        'a[href="#booking"], a[href="#reservasi"], [data-open-booking], .floating-booking-btn, .nav-cta-btn'
      );
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('open-booking-modal', handleOpen);
    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('open-booking-modal', handleOpen);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handleAddonToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.addons.includes(id);
      return {
        ...prev,
        addons: exists ? prev.addons.filter((item) => item !== id) : [...prev.addons, id],
      };
    });
  };

  const selectedPkg =
    packages.find((p) => p.id === formData.packageId) || customPackage;

  // Realtime Live Calculation
  const calculateTotal = () => {
    if (selectedPkg.id === 'custom') return 0;
    const baseCost = selectedPkg.price * (formData.participants || 0);

    let addonsCost = 0;
    formData.addons.forEach((addonId) => {
      const addon = addonOptions.find((a) => a.id === addonId);
      if (addon) {
        if (addon.pricePerPerson) {
          addonsCost += addon.pricePerPerson * (formData.participants || 0);
        } else if (addon.fixedPrice) {
          addonsCost += addon.fixedPrice;
        }
      }
    });

    return baseCost + addonsCost;
  };

  const estimatedTotal = calculateTotal();

  const formatIDR = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Silakan masukkan nama lengkap atau nama instansi Anda.');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Silakan masukkan nomor WhatsApp Anda.');
      return;
    }

    const chosenAddonNames = formData.addons
      .map((id) => addonOptions.find((a) => a.id === id)?.name)
      .filter(Boolean);

    const waText = `*FORMULIR RESERVASI & ESTIMASI BIAYA - SA ADVENTURE*
---------------------------------------
👤 *Nama Pemesan*: ${formData.name}
📱 *No. WhatsApp*: ${formData.phone}
📅 *Rencana Tanggal*: ${formData.date || 'Menyesuaikan jadwal tersedia'}
👥 *Jumlah Peserta*: ${formData.participants} Orang
🚣 *Pilihan Paket*: ${selectedPkg.name} (${selectedPkg.dist})
✨ *Layanan Tambahan*: ${chosenAddonNames.length > 0 ? chosenAddonNames.join(', ') : 'Tidak ada'}
${formData.notes ? `📝 *Catatan Khusus*: ${formData.notes}\n` : ''}💰 *Estimasi Total*: ${
      selectedPkg.price > 0 ? formatIDR(estimatedTotal) : 'Sesuai kesepakatan penawaran'
    }
---------------------------------------
Halo Tim Reservasi SA Adventure, mohon informasi ketersediaan slot tanggal tersebut, rincian invoice/DP, dan panduan reservasinya. Terima kasih!`;

    const waUrl = `https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(
      waText
    )}`;
    window.open(waUrl, '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-5 lg:p-6 bg-black/75 backdrop-blur-md transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        className="relative bg-white w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200 animate-slideUp z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-neutral-200 bg-neutral-900 text-white shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-sans font-bold">
              Formulir Reservasi Resmi
            </span>
            <h2 id="booking-modal-title" className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white m-0">
              Rencana Petualangan Rafting & Outbound
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Tutup Formulir"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-4 sm:p-6 lg:p-7 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* === LEFT COLUMN: Identitas, Tanggal, Paket (lg:col-span-7) === */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* 1. Identitas Pemesan */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-sans">
                  Data Pemesan / Perusahaan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap / Instansi *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="No. WhatsApp Aktif (08xx) *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Rencana Tanggal & Jumlah Peserta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans" htmlFor="bm-date">
                    Rencana Tanggal
                  </label>
                  <input
                    id="bm-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 font-sans" htmlFor="bm-participants">
                      Jumlah Peserta
                    </label>
                    <span className="text-xs font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-md">
                      {formData.participants} Orang
                    </span>
                  </div>
                  <input
                    id="bm-participants"
                    type="number"
                    min="1"
                    max="500"
                    value={formData.participants}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        participants: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition"
                  />
                  <div className="flex items-center gap-1 mt-1.5 flex-wrap">
                    {paxPresets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData({ ...formData, participants: p })}
                        className={`text-[10px] px-2 py-0.5 rounded-md border transition cursor-pointer ${
                          formData.participants === p
                            ? 'bg-neutral-950 text-white border-neutral-950'
                            : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {p} Pax
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Pilihan Paket Petualangan */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-sans">
                  Pilihan Paket Rafting & Bundling
                </label>
                <div className="space-y-2">
                  {packages.map((pkg) => {
                    const isSelected = formData.packageId === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData({ ...formData, packageId: pkg.id })}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-950'
                            : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50/60 text-neutral-900'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-white text-neutral-950 border-white font-bold text-[10px]'
                                : 'border-neutral-400'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-xs sm:text-sm truncate">
                                {pkg.name}
                              </span>
                              <span
                                className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider ${
                                  isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-neutral-100 text-neutral-600'
                                }`}
                              >
                                {pkg.badge}
                              </span>
                            </div>
                            <span
                              className={`text-[11px] block mt-0.5 truncate ${
                                isSelected ? 'text-neutral-300' : 'text-neutral-500'
                              }`}
                            >
                              {pkg.dist}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-serif text-xs sm:text-sm font-bold block">
                            {formatIDR(pkg.price)}
                          </span>
                          <span
                            className={`text-[10px] block ${
                              isSelected ? 'text-neutral-300' : 'text-neutral-400'
                            }`}
                          >
                            / orang
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* === RIGHT COLUMN: Addons, Ringkasan Biaya, & CTA (lg:col-span-5) === */}
            <div className="lg:col-span-5 mt-5 lg:mt-0 space-y-4 sm:space-y-4.5 bg-neutral-50/70 p-4 sm:p-5 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
              
              {/* 4. Layanan Tambahan (Addons Checklist) */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans">
                  Layanan Tambahan (Opsional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
                  {addonOptions.map((addon) => {
                    const isChecked = formData.addons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => handleAddonToggle(addon.id)}
                        className={`p-2.5 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${
                          isChecked
                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                            : 'border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold border shrink-0 transition ${
                              isChecked
                                ? 'bg-white text-neutral-950 border-white'
                                : 'bg-white border-neutral-300 text-transparent'
                            }`}
                          >
                            ✓
                          </span>
                          <span className="font-medium text-[11px] truncate">
                            {addon.name}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold shrink-0 ${isChecked ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {addon.priceTag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 5. Catatan Khusus */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1 font-sans" htmlFor="bm-notes">
                  Catatan Khusus (Opsional)
                </label>
                <textarea
                  id="bm-notes"
                  rows={2}
                  placeholder="Contoh: Berangkat pagi jam 08.30, ada anak kecil 2 pax..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-xs focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition resize-none"
                />
              </div>

              {/* 6. Live Dynamic Cost Estimation Bar */}
              <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Estimasi Biaya Awal:
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-neutral-950">
                    {selectedPkg.price > 0 ? formatIDR(estimatedTotal) : 'Sesuai Kebutuhan'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1 pt-1.5 border-t border-neutral-100 font-sans">
                  <span>{formData.participants} Peserta &bull; Asuransi &amp; Safety Termasuk</span>
                  <span className="font-semibold text-neutral-700">Tanpa Biaya Tersembunyi</span>
                </div>
              </div>

              {/* 7. Action Buttons (Submit & Cancel) */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 rounded-xl border border-neutral-300 text-neutral-700 font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition cursor-pointer text-center bg-white"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest transition shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Kirim Rencana via WhatsApp</span>
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
