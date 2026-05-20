export const getHistory = (language) => [
  {
    role: language === "vi" ? "Kỹ sư phần mềm" : "Software Engineer",
    organisation: "Google",
    startDate: language === "vi" ? "Thg 9, 2022" : "Sept, 2022",
    endDate: language === "vi" ? "Hiện tại" : "Present",
    experiences:
      language === "vi"
        ? ["Làm việc với Google Maps", "Giảm thời gian tải 50%"]
        : ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: "history/google.png",
  },
  {
    role: language === "vi" ? "UI Designer" : "UI Designer",
    organisation: "Mirosoft",
    startDate: language === "vi" ? "Thg 8, 2021" : "Aug, 2021",
    endDate: language === "vi" ? "Thg 8, 2022" : "Aug, 2022",
    experiences:
      language === "vi"
        ? ["Làm việc với Windows 11", "Thiết kế Control Panel"]
        : ["Worked on Windows 11", "Designed the control panel"],
    imageSrc: "history/microsoft.png",
  },
  {
    role: language === "vi" ? "Thực tập SWE" : "SWE Intern",
    organisation: "Netflix",
    startDate: language === "vi" ? "Thg 4, 2020" : "Apr, 2020",
    endDate: language === "vi" ? "Thg 6, 2020" : "Jun, 2020",
    experiences:
      language === "vi"
        ? ["Làm việc với component library", "Hỗ trợ tạo UI components"]
        : ["Worked on component library", "Helped create UI components"],
    imageSrc: "history/netflix.png",
  },
];
