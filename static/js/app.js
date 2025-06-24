const { createApp } = Vue;

createApp({
  delimiters: ["[[", "]]"], // change delimiters to avoid clash with Jinja2
  data() {
    return {
      isDark: localStorage.getItem("darkMode") === "true",
      projects: [],
      profileImg: "/static/assets/profile.jpg",
      resume: "/static/assets/noor_resume.pdf",
      aboutText: "",
      certificates: [
        {
          title: "Diploma in Programming",
          issuer: "IIT Madras",
          image: "/static/certificates/diploma_programming.png",
          link: "/static/certificates/diploma_programming_pdf.pdf",
        },
        {
          title: "Implementing AI using Azure",
          issuer: "IITM BS Degree Program",
          image: "/static/certificates/azure_iitm.png",
          link: "/static/certificates/azure_iitm_pdf.pdf",
        },
        {
          title: "Grade Card - Jan 2025",
          issuer: "IIT Madras",
          image: "/static/certificates/cgpa_jan2025.png",
          link: "/static/certificates/jan2025_gradecard_pdf.pdf",
        },
      ],
    };
  },
  methods: {
    fetchProjects() {
      fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => {
          this.projects = data;
        })
        .catch((err) => console.error("Fetch error:", err));
    },
    applyDarkMode() {
      const el = document.body;
      if (this.isDark) {
        el.classList.add("bg-dark", "text-white");
        el.classList.remove("bg-light", "text-dark");
      } else {
        el.classList.add("bg-light", "text-dark");
        el.classList.remove("bg-dark", "text-white");
      }
      localStorage.setItem("darkMode", this.isDark);
    },
    toggleDarkMode() {
      this.isDark = !this.isDark;
      this.applyDarkMode();
    },
    fetchAbout() {
      fetch("/about.txt")
        .then((res) => res.text())
        .then((data) => {
          this.aboutText = data;
        })
        .catch((err) => {
          this.aboutText = "Failed to load About info.";
          console.error(err);
        });
    },
  },
  mounted() {
    this.applyDarkMode();
    this.fetchProjects();
    this.fetchAbout();
  },
}).mount("#app");
