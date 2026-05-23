export const getHistory = (language) => [
  {
    role: language === "vi" ? "Thực tập sinh Frontend Developer" : "Frontend Developer Intern",
    organisation: "Smart Ads",
    startDate: language === "vi" ? "Thg 12, 2025" : "Dec, 2025",
    endDate: language === "vi" ? "Thg 4, 2026" : "Apr, 2026",
    experiences:
      language === "vi"
        ? [
            "Xây dựng giao diện Web responsive bằng HTML, CSS, JavaScript và React.js.",
            "Tích hợp API backend, tối ưu hiệu suất tải trang và review code theo hướng dẫn."
          ]
        : [
            "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
            "Integrated backend APIs, optimized page load speed, and participated in code reviews."
          ],
    imageSrc: "history/smartads.png",
  },
  {
    role: language === "vi" ? "Trợ giảng môn CNPM & Web nâng cao" : "Teaching Assistant - Adv. Software Eng. & Web Dev.",
    organisation: "HUFLIT",
    startDate: language === "vi" ? "Thg 3, 2025" : "Mar, 2025",
    endDate: language === "vi" ? "Thg 5, 2025" : "May, 2025",
    experiences:
      language === "vi"
        ? [
            "Hỗ trợ hướng dẫn thực hành môn CNPM nâng cao và Lập trình Web nâng cao.",
            "Giải đáp thắc mắc, hỗ trợ kỹ thuật và chuẩn bị tài liệu thực hành cho sinh viên."
          ]
        : [
            "Supported lab sessions for Advanced Software Engineering & Web Development courses.",
            "Assisted students with queries, technical issues, and prepared lab environments."
          ],
    imageSrc: "history/huflit.png",
  },
  {
    role: language === "vi" ? "Admin Hotline / Chăm sóc khách hàng / Lễ tân" : "Hotline Admin / Customer Service / Receptionist",
    organisation: "FIT 24",
    startDate: language === "vi" ? "Thg 3, 2024" : "Mar, 2024",
    endDate: language === "vi" ? "Thg 8, 2024" : "Aug, 2024",
    experiences:
      language === "vi"
        ? [
            "Tiếp nhận, xử lý cuộc gọi hotline, giải đáp thắc mắc và hỗ trợ khách hàng tại quầy.",
            "Quản lý thông tin dữ liệu khách hàng và hỗ trợ xử lý khiếu nại ban đầu."
          ]
        : [
            "Handled hotline calls, answered customer inquiries, and supported reception desk operations.",
            "Managed customer database and resolved initial customer service complaints."
          ],
    imageSrc: "history/fit24.png",
  },
];
