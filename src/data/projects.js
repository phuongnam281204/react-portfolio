export const getProjects = (language) => [
  {
    title: "BookStore App",
    imageSrc: "projects/bookStore.png",
    description:
      language === "vi"
        ? "Ứng dụng bán sách full-stack với tìm kiếm và chi tiết sản phẩm, giỏ hàng/checkout, quản trị sách/đơn hàng/người dùng, và reset mật khẩu qua email."
        : "Full-stack bookstore with storefront search and product details, cart/checkout, admin management for books/orders/users, and email-based password reset.",
    skills: [
      "React",
      "Vite",
      "Tailwind",
      "DaisyUI",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    demo: "https://brazet.me",
    source: "https://github.com/phuongnam281204/bookStoreApp-master",
  },
  {
    title: "Amazon Clone",
    imageSrc: "projects/amazone.png",
    description:
      language === "vi"
        ? "Ứng dụng thương mại điện tử kiểu Amazon với đăng nhập, tìm kiếm/lọc sản phẩm, giỏ hàng và thanh toán, đơn hàng, và admin quản lý sản phẩm/trạng thái đơn hàng."
        : "Amazon-style e-commerce app with authentication, product search/filtering, cart and checkout, orders, and an admin panel for products and order status.",
    skills: [
      "Flutter",
      "Provider",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
    ],
    demo: "https://github.com/phuongnam281204/Amazon-",
    source: "https://github.com/phuongnam281204/Amazon-",
  },
  {
    title: "ChatApp MERN",
    imageSrc: "projects/project.png",
    description:
      language === "vi"
        ? "Ứng dụng chat realtime với frontend/backend tách riêng, API chat, JWT auth, và triển khai Docker Compose + Nginx kết nối MongoDB Atlas."
        : "Real-time chat app with separate frontend/backend, chat APIs, JWT-based auth, and Docker Compose + Nginx deployment targeting MongoDB Atlas.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Docker",
      "Nginx",
    ],
    demo: "https://github.com/phuongnam281204/ChatApp-Mern",
    source: "https://github.com/phuongnam281204/ChatApp-Mern",
  },
];
