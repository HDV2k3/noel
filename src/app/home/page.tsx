// pages/index.js
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css"; // Fixed path to styles
import Image from "next/image";
import dynamic from "next/dynamic";

// Component for countdown
const CountdownComponent = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true once component mounts on client
    setMounted(true);

    const target = new Date("2025-03-20T10:30:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days: d, hours: h, minutes: m, seconds: s });
      }
    };

    // Update immediately
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only render the content after client-side hydration
  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.countdownBoxes}>
      <div className={styles.countdownBox}>
        <div className={styles.countdownNumber}>{countdown.days}</div>
        <div className={styles.countdownLabel}>Ngày</div>
      </div>
      <div className={styles.countdownBox}>
        <div className={styles.countdownNumber}>{countdown.hours}</div>
        <div className={styles.countdownLabel}>Giờ</div>
      </div>
      <div className={styles.countdownBox}>
        <div className={styles.countdownNumber}>{countdown.minutes}</div>
        <div className={styles.countdownLabel}>Phút</div>
      </div>
      <div className={styles.countdownBox}>
        <div className={styles.countdownNumber}>{countdown.seconds}</div>
        <div className={styles.countdownLabel}>Giây</div>
      </div>
    </div>
  );
};

// Dynamically import the countdown component with SSR disabled
const DynamicCountdown = dynamic(() => Promise.resolve(CountdownComponent), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lễ Tốt Nghiệp Của Quý Quỳnh | UEH University</title>
        <meta
          name="description"
          content="Thư mời tham dự lễ tốt nghiệp của Quý Quỳnh tại UEH University"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <Image
                src="/images.png"
                alt="UEH Logo"
                width={100}
                height={100}
                priority
                className={styles.uehLogo}
              />
            </div>

            <div className={styles.graduationTitle}>
              <h1 className={styles.title}>Lễ Tốt Nghiệp</h1>
            </div>

            <div className={styles.graduateContainer}>
              <div className={styles.graduatePhoto}>
                <Image
                  src="/quynh.jpg"
                  alt="Quý Quỳnh"
                  width={180}
                  height={180}
                  priority
                  className={styles.photoRounded}
                />
              </div>

              <div className={styles.graduateName}>
                <h2 className={styles.subtitle}>Quý Quỳnh</h2>
                <p className={styles.degree}>Cử nhân Quản trị Kinh doanh</p>
                <p className={styles.university}>
                  Trường Đại học Kinh tế TP.HCM (UEH University)
                </p>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.message}>
              <p>Helloooo bạn iu </p>
              <p>Helloooo bạn iu!!! </p>
              <p>
                Sau khoảng thời gian gần 4 năm học tập, làm việc và trải nghiệm
                tại UEH, sắp tới đây mình là Quý Quỳnh sẽ chính thức tốt nghiệp
                chặng đường Đại học này.
              </p>
              <p>
                Ngay bây giờ Quý Quỳnh rất mong chờ và vui mừng nếu có thể được
                chia sẻ những khoảnh khắc háp pi này cùng mọi người ở ngày lễ vô
                cùng quan trọng để đánh dấu một cột mốc đáng nhớ trong hành
                trình phát triển của Quý Quỳnh.
              </p>
              <p>
                Vì thế Quý Quỳnh xin trân trọng mời bạn iu đến tham gia Lễ tốt
                nghiệp của mình với thông tin chi tiết sau đây:
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <div className={styles.icon}>📅</div>
                <div className={styles.detailContent}>
                  <h3>Thời gian</h3>
                  <p>10h30 20/03/2025 (Thứ Năm)</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.icon}>📍</div>
                <div className={styles.detailContent}>
                  <h3>Địa điểm</h3>
                  <p>
                    UEH cơ sở A - 59C Nguyễn Đình Chiểu, Phường 6, Quận 3,
                    TP.HCM
                  </p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.icon}>🅿️</div>
                <div className={styles.detailContent}>
                  <h3>Nơi gửi xe</h3>
                  <p>
                    Xung quanh khu vực hồ con rùa (hoặc đi bằng phương tiện khác
                    vì hôm í sẽ rất đông khó gửi và lấy xe)
                  </p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.icon}>📱</div>
                <div className={styles.detailContent}>
                  <h3>Liên hệ</h3>
                  <p>
                    SĐT/Zalo để tìm kiếm Quý Quỳnh giữa dòng đời tấp nập:
                    0764655997
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.countdown}>
              <h3>Đếm ngược đến ngày vui</h3>
              <DynamicCountdown />
            </div>

            <div className={styles.closing}>
              <p>
                Sự tham gia của bạn ngày hôm ấy là niềm vinh dự và hạnh phúc to
                lớn của Quý Quỳnh.
              </p>
              <p className={styles.finalMessage}>
                Hẹn gặp lại trong ngày vui của Quý Quỳnh nhé! ❤️
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Quý Quỳnh - UEH University</p>
      </footer>
    </div>
  );
}
