'use client';

import { useState } from 'react';

export default function Estimator() {
  const [packageKey, setPackageKey] = useState('adventure');
  const [participants, setParticipants] = useState(20);
  const [addonDrone, setAddonDrone] = useState(false);
  const [addonTransport, setAddonTransport] = useState(false);
  const [addonBbq, setAddonBbq] = useState(false);
  const [addonOutbound, setAddonOutbound] = useState(false);

  const contactPhone = '6281291068287';

  const packageRates = {
    family: {
      name: 'Rafting Cisadane Family (7 KM)',
      rate: 185000,
    },
    adventure: {
      name: 'Rafting Cisadane Adventure (11 KM)',
      rate: 225000,
    },
    oneday: {
      name: 'One Day Gathering (Rafting + Fun Games)',
      rate: 345000,
    },
    camp: {
      name: '2D1N Riverside Camp & Rafting',
      rate: 585000,
    },
  };

  const formatIDR = (amount) => {
    return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const selectedPkg = packageRates[packageKey] || packageRates.adventure;

  let total = selectedPkg.rate * participants;
  const chosenAddons = [];

  if (addonDrone) {
    total += 750000;
    chosenAddons.push('Drone (+Rp 750rb)');
  }
  if (addonTransport) {
    total += 65000 * participants;
    chosenAddons.push('Bus/Elf PP (+Rp 65rb/org)');
  }
  if (addonBbq) {
    total += 75000 * participants;
    chosenAddons.push('BBQ (+Rp 75rb/org)');
  }
  if (addonOutbound) {
    total += 60000 * participants;
    chosenAddons.push('Fun Games (+Rp 60rb/org)');
  }

  const addonsSummaryText =
    chosenAddons.length > 0 ? chosenAddons.join(', ') : 'Tidak ada';

  const bookingMsg = `Halo Tim SA Adventure, saya ingin reservasi dan konsultasi ${selectedPkg.name} untuk ${participants} orang. Layanan Tambahan: ${addonsSummaryText}. Estimasi Biaya ${formatIDR(total)}.`;
  const waUrl = `https://api.whatsapp.com/send?phone=${contactPhone}&text=${encodeURIComponent(bookingMsg)}`;

  return (
    <section className="estimator-section" id="kalkulator">
      <div className="container">
        <div className="estimator-box">
          <div className="text-center">
            <span className="section-tagline">Kalkulator Interaktif</span>
            <h2 className="section-title">Hitung Rencana Estimasi Anggaran Anda</h2>
            <p className="section-desc">
              Sesuaikan jenis paket, jumlah peserta, dan opsi tambahan untuk memperoleh gambaran total
              biaya transparan secara instan.
            </p>
          </div>

          <div className="estimator-grid">
            {/* Controls */}
            <div className="estimator-controls">
              <div className="form-group">
                <label htmlFor="calcPackage" className="form-label">
                  <span>Pilih Jenis Paket Utama</span>
                </label>
                <select
                  id="calcPackage"
                  className="form-select"
                  value={packageKey}
                  onChange={(e) => setPackageKey(e.target.value)}
                >
                  <option value="adventure">
                    Rafting Cisadane Adventure (11 KM) - Rp 225.000 / org
                  </option>
                  <option value="family">
                    Rafting Cisadane Family (7 KM) - Rp 185.000 / org
                  </option>
                  <option value="oneday">
                    One Day Gathering (Rafting + Fun Games) - Rp 345.000 / org
                  </option>
                  <option value="camp">
                    2D1N Riverside Camp &amp; Rafting - Rp 585.000 / org
                  </option>
                </select>
              </div>

              <div className="form-group">
                <div className="form-label">
                  <span>Estimasi Jumlah Peserta</span>
                  <strong className="highlight-gold">{participants} Orang</strong>
                </div>
                <div className="range-wrap">
                  <input
                    type="range"
                    id="participantSlider"
                    className="range-slider"
                    min="5"
                    max="150"
                    value={participants}
                    step="1"
                    onChange={(e) => setParticipants(parseInt(e.target.value))}
                  />
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Geser untuk mengubah jumlah peserta (5 sampai 150+ orang).
                </span>
              </div>

              <div className="form-group">
                <label className="form-label">Layanan Tambahan (Opsional)</label>
                <div className="addon-checkboxes">
                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      checked={addonDrone}
                      onChange={(e) => setAddonDrone(e.target.checked)}
                    />
                    <span>Dokumentasi Drone &amp; Video HD (+Rp 750.000 / rombongan)</span>
                  </label>
                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      checked={addonTransport}
                      onChange={(e) => setAddonTransport(e.target.checked)}
                    />
                    <span>Transportasi Bus/Elf PP (+Rp 65.000 / org)</span>
                  </label>
                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      checked={addonBbq}
                      onChange={(e) => setAddonBbq(e.target.checked)}
                    />
                    <span>Barbeque Pinggir Sungai (+Rp 75.000 / org)</span>
                  </label>
                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      checked={addonOutbound}
                      onChange={(e) => setAddonOutbound(e.target.checked)}
                    />
                    <span>Modul Fun Games Tambahan (+Rp 60.000 / org)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="estimator-summary">
              <div className="summary-row">
                <span>Paket Terpilih</span>
                <span>{selectedPkg.name}</span>
              </div>
              <div className="summary-row">
                <span>Jumlah Peserta</span>
                <span>{participants} Orang</span>
              </div>
              <div className="summary-row">
                <span>Tarif Dasar</span>
                <span>{formatIDR(selectedPkg.rate)} / orang</span>
              </div>
              <div className="summary-row">
                <span>Tambahan Layanan</span>
                <span>{addonsSummaryText}</span>
              </div>

              <div className="summary-total">
                <div className="summary-total-label">Estimasi Total Biaya</div>
                <div className="summary-total-value">{formatIDR(total)}</div>
              </div>

              <p className="summary-note">
                *Estimasi bersifat indikatif. Tersedia penawaran diskon khusus untuk rombongan
                perusahaan di atas 50 orang.
              </p>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Konsultasikan Estimasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
