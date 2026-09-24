'use client';

import { useState, useEffect } from 'react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageId: 'adventure',
    villaId: 'none',
    date: '',
    participants: 15,
    addons: [],
    notes: '',
  });

  const packages = [
    {
      id: 'family',
      name: 'Rafting Keluarga',
      dist: '7 KM (± 1.5 - 2 Jam)',
      price: 185000,
      badge: 'Family & Beginner',
    },
    {
      id: 'adventure',
      name: 'Rafting Adventure',
      dist: '11 KM (± 2 - 2.5 Jam)',
      price: 225000,
      badge: 'Paling Populer ★',
    },
    {
      id: 'gathering',
      name: 'One Day Gathering',
      dist: '11 KM + Outbound Games',
      price: 345000,
      badge: 'Corporate / Kantor',
    },
    {
      id: 'camp',
      name: '2D1N Riverside Camp',
      dist: 'Camp Tepi Sungai + Rafting',
      price: 585000,
      badge: 'Menginap Tenda',
    },
  ];

  const customPackage = {
    id: 'custom',
    name: 'Paket Kustom Rombongan',
    dist: 'Sesuai Request Khusus & Rundown Fleksibel',
    price: 0,
    badge: 'Konsultasi Khusus',
  };

  const villas = [
    { id: 'none', name: 'Tanpa Penginapan', desc: 'One Day Trip' },
    { id: 'mawar', name: 'Villa Mawar Puncak', desc: '30 - 70+ Pax • Pool & Rooftop' },
    { id: 'zanara', name: 'Villa Zanara', desc: '20 - 45 Pax • Asri & Privat' },
  ];

  const addonOptions = [
    { id: 'prasmanan', name: 'Prasmanan Sunda', priceTag: '+45rb/org', pricePerPerson: 45000 },
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
      if (e?.detail?.villaId) {
        setFormData((prev) => ({ ...prev, villaId: e.detail.villaId }));
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

  // Close on Escape key & Lock background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleAddonToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.addons.includes(id);
      return {
        ...prev,
        addons: exists ? prev.addons.filter((item) => item !== id) : [...prev.addons, id],
      };
    });
  };

  const handlePaxChange = (delta) => {
    setFormData((prev) => ({
      ...prev,
      participants: Math.max(2, (Number(prev.participants) || 0) + delta),
    }));
  };

  // Calculate live estimate
  const allPackages = [...packages, customPackage];
  const selectedPkg = allPackages.find((p) => p.id === formData.packageId) || packages[1];
  let estimatedTotal = (selectedPkg.price || 0) * (Number(formData.participants) || 0);

  formData.addons.forEach((addonId) => {
    const item = addonOptions.find((a) => a.id === addonId);
    if (item) {
      if (item.pricePerPerson) {
        estimatedTotal += item.pricePerPerson * (Number(formData.participants) || 0);
      } else if (item.fixedPrice) {
        estimatedTotal += item.fixedPrice;
      }
    }
  });

  const formatIDR = (num) => {
    return 'Rp ' + (num || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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

    const selectedVilla = villas.find((v) => v.id === formData.villaId)?.name || 'Tanpa Penginapan';
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
🏡 *Akomodasi*: ${selectedVilla}
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
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingModalTitle"
    >
      {/* Main Luxury Modal Card (Expanded on Laptop for Balanced Proportion) */}
      <div
        className="relative w-full max-w-2xl lg:max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-neutral-200/90 max-h-[94vh] flex flex-col transition-all font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header (Editorial Monochrome) */}
        <div className="relative bg-neutral-950 text-white px-5 sm:px-8 py-4 sm:py-5 border-b border-neutral-800 shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-300 font-sans">
                  Reservasi &bull; Hitung Estimasi Biaya
                </span>
              </div>
              <h3 id="bookingModalTitle" className="font-serif text-lg sm:text-2xl text-white tracking-tight">
                Formulir Reservasi SA Adventure
              </h3>
              <p className="hidden sm:block text-xs text-neutral-400 font-sans mt-0.5 leading-relaxed font-light">
                Pilih paket dan sesuaikan kebutuhan acara Anda. Sistem langsung menyusun kalkulasi biaya transparan ke WhatsApp resmi.
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-neutral-950 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 shrink-0"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup formulir"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Body: Balanced 2-Column Split on Desktop/Laptop (`lg:grid lg:grid-cols-12`) */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-4 sm:p-6 lg:p-7">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            
            {/* === LEFT COLUMN: Identitas, Paket & Peserta (lg:col-span-7) === */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* 1. Data Pemesan (Nama & WhatsApp) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans" htmlFor="bm-name">
                    Nama Lengkap / Instansi <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="bm-name"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso / PT Maju"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans" htmlFor="bm-phone">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="bm-phone"
                    type="tel"
                    required
                    placeholder="Contoh: 0812-3456-7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition"
                  />
                </div>
              </div>

              {/* 2. Pilihan Paket Rafting (2x2 Grid + 1 Full Width Card) */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-sans">
                  Pilih Paket Arung Jeram / Acara <span className="text-red-500">*</span>
                </label>
                
                {/* 4 Main Packages (2x2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
                  {packages.map((pkg) => {
                    const isSelected = formData.packageId === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData({ ...formData, packageId: pkg.id })}
                        className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-950'
                            : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-900'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <span className="font-serif font-bold text-xs sm:text-sm leading-tight">
                            {pkg.name}
                          </span>
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-neutral-200 text-neutral-700'
                            }`}
                          >
                            {pkg.badge}
                          </span>
                        </div>

                        <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-current/10">
                          <span className={`text-[10px] sm:text-[11px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                            {pkg.dist}
                          </span>
                          <span className="font-bold text-xs tracking-tight">
                            {formatIDR(pkg.price)}/org
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 5th Option: Custom Package (Full-width card, perfectly balanced) */}
                <div
                  onClick={() => setFormData({ ...formData, packageId: customPackage.id })}
                  className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2 ${
                    formData.packageId === customPackage.id
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-950'
                      : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-xs sm:text-sm">
                        {customPackage.name}
                      </span>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          formData.packageId === customPackage.id
                            ? 'bg-white/20 text-white'
                            : 'bg-neutral-200 text-neutral-700'
                        }`}
                      >
                        {customPackage.badge}
                      </span>
                    </div>
                    <span className={`text-[10px] sm:text-[11px] block mt-0.5 ${
                      formData.packageId === customPackage.id ? 'text-neutral-300' : 'text-neutral-500'
                    }`}>
                      {customPackage.dist}
                    </span>
                  </div>
                  <span className="font-bold text-xs tracking-tight shrink-0">
                    Tarif Kustom
                  </span>
                </div>
              </div>

              {/* 3. Tanggal Acara & Stepper Jumlah Peserta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans" htmlFor="bm-date">
                    Rencana Tanggal Acara <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="bm-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-xs sm:text-sm focus:bg-white focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 outline-none transition"
                  />
                </div>

                {/* Stepper Jumlah Peserta dengan Presets yang Rapi */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans" htmlFor="bm-participants">
                    Jumlah Peserta: <strong className="text-neutral-950 font-black">{formData.participants} Pax</strong>
                  </label>

                  <div className="flex items-center gap-2">
                    {/* Stepper +/- */}
                    <div className="flex items-center border border-neutral-300 rounded-xl overflow-hidden bg-neutral-50 shrink-0">
                      <button
                        type="button"
                        onClick={() => handlePaxChange(-1)}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold text-neutral-700 hover:bg-neutral-200 transition cursor-pointer"
                        aria-label="Kurangi peserta"
                      >
                        &minus;
                      </button>
                      <input
                        id="bm-participants"
                        type="number"
                        min="2"
                        max="500"
                        value={formData.participants}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            participants: Math.max(1, parseInt(e.target.value) || 1),
                          })
                        }
                        className="w-12 text-center font-bold text-neutral-900 bg-transparent text-xs sm:text-sm outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => handlePaxChange(1)}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold text-neutral-700 hover:bg-neutral-200 transition cursor-pointer"
                        aria-label="Tambah peserta"
                      >
                        +
                      </button>
                    </div>

                    {/* Quick Presets Pill Bar (Compact & Single-row) */}
                    <div className="flex items-center gap-1 overflow-x-auto py-1">
                      {paxPresets.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setFormData({ ...formData, participants: p })}
                          className={`px-2 py-1.5 rounded-lg text-[10px] font-bold transition cursor-pointer shrink-0 ${
                            formData.participants === p
                              ? 'bg-neutral-950 text-white'
                              : 'bg-neutral-200/70 text-neutral-700 hover:bg-neutral-300'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === RIGHT COLUMN: Villa, Addons, Ringkasan Biaya, & CTA (lg:col-span-5) === */}
            <div className="lg:col-span-5 mt-5 lg:mt-0 space-y-4 sm:space-y-4.5 bg-neutral-50/70 p-4 sm:p-5 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
              
              {/* 4. Pilihan Akomodasi Villa */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-sans">
                  Pilihan Akomodasi Villa (Opsional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                  {villas.map((v) => {
                    const isSelected = formData.villaId === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, villaId: v.id })}
                        className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                            : 'border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-800'
                        }`}
                      >
                        <div className="min-w-0">
                          <span className="font-bold text-xs truncate block">{v.name}</span>
                          <span className={`text-[10px] truncate block ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                            {v.desc}
                          </span>
                        </div>
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 text-[9px] ${
                            isSelected
                              ? 'bg-white text-neutral-950 border-white font-bold'
                              : 'border-neutral-300'
                          }`}
                        >
                          {isSelected && '✓'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Layanan Tambahan (Addons Checklist) */}
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
                        className={`p-2 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${
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

              {/* 6. Catatan Khusus */}
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

              {/* 7. Live Dynamic Cost Estimation Bar */}
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
                  <span>{formData.participants} Peserta &bull; FAJI &amp; Asuransi Termasuk</span>
                  <span className="font-semibold text-neutral-700">Tanpa Biaya Tersembunyi</span>
                </div>
              </div>

              {/* 8. Action Buttons (Submit & Cancel) */}
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
