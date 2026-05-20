import React, { createContext, useContext, useMemo, useState } from "react";

const translations = {
  en: {
    nav: {
      title: "Portfolio",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      switchTo: "Switch to Vietnamese",
      langShort: "EN",
    },
    hero: {
      title: "Hi, I'm Phuong Nam (Brazet)",
      description:
        "I'm a full-stack developer with 0 years of experience using React and NodeJS. Reach out if you'd like to learn more!",
      contactBtn: "Contact Me",
      imageAlt: "Hero image of me",
    },
    about: {
      title: "About",
      galleryAria: "About photos",
      photoAlt: "About photo",
      items: [
        {
          title: "Frontend Developer",
          description:
            "I'm a frontend developer with experience in building responsive and optimized sites",
        },
        {
          title: "Backend Developer",
          description:
            "I have experience developing fast and optimised back-end systems and APIs",
        },
        {
          title: "UI Designer",
          description:
            "I have designed multiple landing pages and have created design systems as well",
        },
      ],
    },
    experience: {
      title: "Experience",
    },
    projects: {
      title: "Projects",
      demo: "Demo",
      source: "Source",
      imageAlt: "Image of",
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out!",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
      },
    },
  },
  vi: {
    nav: {
      title: "Portfolio",
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      contact: "Liên hệ",
      switchTo: "Chuyển sang tiếng Anh",
      langShort: "VI",
    },
    hero: {
      title: "Xin chào, mình là Phương Nam (Brazet)",
      description:
        "Mình là full-stack developer với 0 năm kinh nghiệm về React và NodeJS. Hãy liên hệ nếu bạn muốn tìm hiểu thêm!",
      contactBtn: "Liên hệ",
      imageAlt: "Ảnh đại diện của mình",
    },
    about: {
      title: "Giới thiệu",
      galleryAria: "Ảnh giới thiệu",
      photoAlt: "Ảnh giới thiệu",
      items: [
        {
          title: "Frontend Developer",
          description:
            "Mình có kinh nghiệm xây dựng giao diện responsive và tối ưu hiệu năng",
        },
        {
          title: "Backend Developer",
          description:
            "Mình có kinh nghiệm phát triển backend và API nhanh, ổn định",
        },
        {
          title: "UI Designer",
          description:
            "Mình đã thiết kế nhiều landing page và hệ thống thiết kế",
        },
      ],
    },
    experience: {
      title: "Kinh nghiệm",
    },
    projects: {
      title: "Dự án",
      demo: "Demo",
      source: "Mã nguồn",
      imageAlt: "Hình ảnh của",
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Cứ tự nhiên liên hệ nhé!",
      form: {
        name: "Họ và tên",
        email: "Email",
        subject: "Chủ đề",
        message: "Nội dung",
        submit: "Gửi tin nhắn",
      },
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children, defaultLanguage = "en" }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const t = useMemo(() => translations[language], [language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
