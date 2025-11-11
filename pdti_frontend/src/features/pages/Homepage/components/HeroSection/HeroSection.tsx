import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import hero1 from "./../../../../../assets/images/hero-1.jpg";
import hero2 from "./../../../../../assets/images/hero-2.jpg";
import hero3 from "./../../../../../assets/images/hero-3.jpg";
import hero4 from "./../../../../../assets/images/hero-4.jpg";
import hero5 from "./../../../../../assets/images/hero-5.jpg";
import hero6 from "./../../../../../assets/images/hero-6.jpg";

import "./HeroSection.css";

const HeroSection = () => {
  const itemData = [
    {
      img: hero1,
      title: "smara",
      rows: 2,
      cols: 2,
    },
    {
      img: hero2,
      title: "camels",
    },
    {
      img: hero3,
      title: "smara",
    },
    {
      img: hero4,
      title: "smara",
    },

    {
      img: hero5,
      title: "tree",
    },
    {
      img: hero6,
      title: "smara",
    },
  ];

  return (
    <section className="hero-section">
      <h1 className="hero-title">
        اللقاءات التواصلية و المشاورات الموسعة من أجل اعداد برنامج التنمية
        الترابية المندمجة الخاص بإقليم السمارة
      </h1>
      <div className="images-section">
        <ImageList variant="quilted" cols={3} gap={6}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
};

export default HeroSection;
