import { calculateAge } from "../hooks/useCommon";

const messages = {
  en: {
    notFound: {
      title: "Page not found",
      desc: "Please check the link you came from or go back to the home page.",
      btn: "home page",
    },
    Header: {
      home: "Home",
      about: "About",
      skills: "Skills",
      works: "Works",
      contact: "Contact",
      address:
        "7/2 Nong Kham 5 Rd., Bua Yai, Bua Yai, Nakhon Ratchasima 30120, Thailand",
    },
    SectionHomeBanner: {
      hello: "Hi I'm",
      fname: "Kasidit",
      lname: "Katcharoen",
      position: "Frontend Developer | Full Stack Developer",
      sub: "I'm an experienced web developer, creating and developing digital platforms while collaborating with both leading companies and ambitious startups!",
      btnContact: "Contact",
    },
    SectionAbout: {
      title: "ABOUT ME",
      title_sub: "Kasidit Katcharoen",
      desc: `
          Hello, my name is Kasidit Katcharoen (Gun), a Frontend Developer.
          I graduated Bachelor's degree in Business Computer (Continuing Program) 
          from the Faculty of Business Administration, Rajamangala University of 
          Technology Isan.I'm highly committed to continuously learning, growing, 
          and sharpening my skills in order to build efficient and high-performing 
          web applications. I strongly believe that my technical expertise and 
          passion can contribute significantly to the success of any organization.
          My goal is to create user-centric solutions that truly meet user needs, 
          and to push the boundaries of technology for the benefit of both business 
          and society in the future.
      `,
      btnViewMore: "View More",
    },
    SectionSkills: {
      title: "SKILLS",
      desc: "Web development skills & Technology",
      dropdown_category_skills: {
        all: "All",
        language: "Language",
        "framework&labary": "Framework&nbsp;&nbsp;&&nbsp;&nbsp;labary",
        tools: "Tools",
      },
    },
    SectionWorks: {
      title:'Works',
    },
    SectionContact: {
      title:'Contact',
    },
    Footer: {
      home: "Home",
      about: "About",
      skills: "Skills",
      works: "Works",
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
  },
  th: {
    notFound: {
      title: "ไม่พบหน้า",
      desc: "กรุณาตรวจสอบลิงก์ที่คุณมาหรือกลับไปที่หน้าแรก",
      btn: "หน้าแรก",
    },
    Header: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      skills: "ความสามารถ",
      works: "การทำงาน",
      contact: "ติดต่อ",
      address: "7/2 ถ.หนองขาม 5 ต.บัวใหญ่ อ.บัวใหญ่ นครราชสีมา 30120 ประเทศไทย",
    },
    SectionHomeBanner: {
      hello: "สวัสดีครับ",
      fname: "กษิดิศ",
      lname: "กาศเจริญ",
      position: "Frontend Developer | Full Stack Developer",
      sub: "ผมเป็นนักพัฒนาเว็บไซต์มากประสบการณ์ สร้างสรรค์และพัฒนาแพลตฟอร์มดิจิทัล ร่วมงานกับทั้งบริษัทชั้นนำและสตาร์ทอัพไฟแรง!",
      btnContact: "ติดต่อ",
    },
    SectionAbout: {
      title: "เกี่ยวกับฉัน",
      title_sub: "กษิดิศ กาศเจริญ",
      desc: `
          สวัสดีครับผม นายกษิดิศ กาศเจริญ (กันต์) เป็น Frontend Developer สำเร็จการศึกษาระดับปริญญาตรี 
          สาขาคอมพิวเตอร์ธุรกิจ (ต่อเนื่อง) คณะบริหารธุรกิจ จากมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน 
          ผมได้มุ่งมั่นศึกษา เรียนรู้ และเพิ่มทักษะความสามารถของตัวเองอยู่เสมอ 
          เพื่อที่จะพัฒนาเว็บแอปพลิเคชั่นให้มีประสิทธิภาพจนเกิดประโยชน์สูงสุด 
          และหวังเป็นอย่างยิ่งว่าจะได้นำทักษะความสามารถเหล่านี้มาช่วยส่งเสริมให้สามารถพัฒนาองค์กร 
          พร้อมทั้งสร้างสรรค์โซลูชั่นที่ตอบโจทย์ต่อความต้องการของผู้ใช้ 
          สุดท้ายนี้ผมได้ตั้งเป้าหมายในการพัฒนาเทคโนโลยีให้ก้าวหน้าและ
          เป็นประโยชน์ต่อธุรกิจและสังคมต่อไปในอนาคตข้างหน้า
      `,
      btnViewMore: "ดูเพิ่มเติม",
    },
    SectionSkills: {
      title: "ทักษะ",
      desc: "ทักษะการพัฒนาเว็บไซต์และเทคโนโลยี",
      dropdown_category_skills: {
        all: "ทั้งหมด",
        language: "ภาษา",
        "framework&labary": "เฟรมเวิร์กและไลบรารี",
        tools: "เครื่องมือ",
      },
    },
    SectionWorks: {
      title:'การทำงาน',
    },
    SectionContact: {
      title:'ติดต่อ',
    },
    Footer: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      skills: "ความสามารถ",
      works: "การทำงาน",
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
  },
};

export default messages;
