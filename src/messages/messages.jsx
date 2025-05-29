import { calculateAge } from "../hooks/useCommon";

const messages = {
  en: {
    notFound: {
      404: "404",
      title: "Page not found",
      desc: "Please check the link you came from or go back to the home page.",
      btn: "Home page",
    },
    Header: {
      home: "Home",
      about: "About",
      skills: "Skills",
      works: "Works",
      experiences: "Experiences",
      contact: "Contact",
      address:
        "7/2 Nong Kham 5 Rd., Bua Yai, Bua Yai, Nakhon Ratchasima 30120, Thailand",
    },
    SectionHomeBanner: {
      hello: "Hi I'm",
      fname: "Kasidit",
      lname: "Katcharoen",
      position: "Frontend Developer | Full stack Developer",
      sub: "I'm an experienced web developer, creating and developing digital platforms while collaborating with both leading companies and ambitious startups!",
      btnContact: "Contact",
      btnCV: "Download CV",
    },
    SectionAbout: {
      title: "ABOUT ME",
      title_sub: "Kasidit Katcharoen",
      desc: `
        Hello, I'm Mr. Kasidit Katcharoen (Gun).
        I hold a Bachelor's degree in Business Computer (Continuing Program) from the Faculty of Business Administration, Rajamangala University of Technology Isan.
        I have over 2 years of experience working as a Frontend Developer, developing websites using PHP, JavaScript, jQuery, React, Next.js and other technologies.
        Currently, I'm highly interested in pursuing a position as a Full-stack Developer. I'm committed to continuously learning and enhancing my skills in order to build efficient web applications that deliver maximum value.
        I strongly hope to contribute my skills and knowledge to help drive organizational development and to create solutions that truly meet user needs.
        Ultimately, my goal is to develop advanced technologies that benefit both businesses and society in the future.
      `,
      btnViewMore: "View More",
    },
    SectionSkills: {
      title: "SKILLS",
      desc: "Web development skills & Technology",
      dropdown_category_skills: {
        "all": "All",
        "frontend": "Frontend",
        "backend": "Backend",
        "tools": "Tools",
      },
    },
    SectionExperiences: {
      title: "Experiences",
      note: "Note: Due to the proprietary nature of the data and content within the system, full details cannot be disclosed. This information is provided solely for reference and to demonstrate past work experience.",
    },
    SectionContact: {
      title: "Contact",
      titleForm: "Contact Form",
    },
    Footer: {
      home: "Home",
      about: "About",
      skills: "Skills",
      works: "Works",
      experiences: "Experiences",
      contact: "Contact",
      address:
        "7/2 Nong Kham 5 Rd., Bua Yai, Bua Yai, Nakhon Ratchasima 30120, Thailand",
    },
    Form: {
      submit: "Submit",
      messages_error: {
        empty: "Please enter the information.",
        invalid: "Please enter the correct information.",
      },
      field: {
        first_name: {
          label: "First name",
        },
        last_name: {
          label: "Last name",
        },
        email: {
          label: "Email",
        },
        phone: {
          label: "Phone",
        },
        contact_topic: {
          label: "Contact topic",
        },
        contact_desc: {
          label: "Contact description",
        },
      },
    },
    general: {
      click: "Click",
      link: "Link",
      close: "Close",
      select: "Select",
      drag: "Drag",
      viewImage: "View",
    },
  },
  th: {
    notFound: {
      404: "404",
      title: "ไม่พบหน้า",
      desc: "กรุณาตรวจสอบลิงก์ที่คุณมาหรือกลับไปที่หน้าแรก",
      btn: "หน้าแรก",
    },
    Header: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      works: "การทำงาน",
      experiences: "ประสบการณ์",
      contact: "ติดต่อ",
      address: "7/2 ถ.หนองขาม 5 ต.บัวใหญ่ อ.บัวใหญ่ นครราชสีมา 30120 ประเทศไทย",
    },
    SectionHomeBanner: {
      hello: "สวัสดีครับ",
      fname: "กษิดิศ",
      lname: "กาศเจริญ",
      position: "Frontend Developer | Full stack Developer",
      sub: "ผมเป็นนักพัฒนาเว็บไซต์มากประสบการณ์ สร้างสรรค์และพัฒนาแพลตฟอร์มดิจิทัล ร่วมงานกับทั้งบริษัทชั้นนำและสตาร์ทอัพไฟแรง!",
      btnContact: "ติดต่อ",
      btnCV: "ดาวน์โหลด CV",
    },
    SectionAbout: {
      title: "เกี่ยวกับฉัน",
      title_sub: "กษิดิศ กาศเจริญ",
      desc: `
        สวัสดีครับผม นายกษิดิศ กาศเจริญ (กันต์) สำเร็จการศึกษาระดับปริญญาตรี สาขาคอมพิวเตอร์ธุรกิจ (ต่อเนื่อง) คณะบริหารธุรกิจ 
        จากมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน มีประสบการณ์ทำงานตำแหน่ง Frontend Developer มากกว่า 2 ปี พัฒนาเว็บไซต์ด้วย 
        PHP, JS, Jquery React, Nextjs อื่นๆ และได้มีความสนใจในตำแหน่ง Full-stack Developer ผมได้มุ่งมั่นศึกษา เรียนรู้ 
        และเพิ่มทักษะความสามารถของตัวเองอยู่เสมอ เพื่อที่จะพัฒนาเว็บแอปพลิเคชั่นให้มีประสิทธิภาพจนเกิดประโยชน์สูงสุด และหวังเป็นอย่างยิ่งว่า
        จะได้นำทักษะความสามารถเหล่านี้มาช่วยส่งเสริมให้สามารถพัฒนาองค์กร พร้อมทั้งสร้างสรรค์โซลูชั่นที่ตอบโจทย์ต่อความต้องการของผู้ใช้ 
        สุดท้ายนี้ผมได้ตั้งเป้าหมายในการพัฒนาเทคโนโลยีให้ก้าวหน้าและ เป็นประโยชน์ต่อธุรกิจและสังคมต่อไปในอนาคตข้างหน้า
      `,
      btnViewMore: "ดูเพิ่มเติม",
    },
    SectionSkills: {
      title: "ทักษะ",
      desc: "ทักษะการพัฒนาเว็บไซต์และเทคโนโลยี",
      dropdown_category_skills: {
        "all": "ทั้งหมด",
        "frontend": "ฝั่งหน้าบ้าน",
        "backend": "ฝั่งหลังบ้าน",
        "tools": "เครื่องมือ",
      },
    },
    SectionExperiences: {
      title: "ประสบการณ์",
      note: "หมายเหตุ: เนื่องจากข้อมูลและเนื้อหาในระบบเป็นทรัพย์สินของทางบริษัท จึงไม่สามารถเปิดเผยรายละเอียดทั้งหมดได้ ใช้เพื่ออ้างอิงและแสดงถึงประสบณ์การทำงานที่ผ่านมาเท่านั้น",
    },
    SectionContact: {
      title: "ติดต่อ",
      titleForm: "แบบฟอร์มติดต่อ",
    },
    Footer: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      works: "การทำงาน",
      experiences: "ประสบการณ์",
      contact: "ติดต่อ",
      address: "7/2 ถ.หนองขาม 5 ต.บัวใหญ่ อ.บัวใหญ่ นครราชสีมา 30120 ประเทศไทย",
    },
    Form: {
      submit: "ยืนยัน",
      messages_error: {
        empty: "กรุณากรอกข้อมูล",
        invalid: "กรุณากรอกข้อมูลที่ถูกต้อง",
      },
      field: {
        first_name: {
          label: "ชื่อ",
        },
        last_name: {
          label: "นามสกุล",
        },
        email: {
          label: "อีเมล",
        },
        phone: {
          label: "เบอโทรศัพท์",
        },
        contact_topic: {
          label: "หัวข้อที่ติดต่อ",
        },
        contact_desc: {
          label: "รายละเอียด",
        },
      },
    },
    general: {
      click: "คลิก",
      link: "ลิงค์",
      close: "ปิด",
      select: "เลือก",
      drag: "ลาก",
      viewImage: "ดูรูปภาพ"
    },
  },
};

export default messages;
