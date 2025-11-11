import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./HeroSection.css";

const HeroSection = () => {
  const itemData = [
    {
      img: "https://i0.wp.com/sahara1.net/wp-content/uploads/2025/10/FB_IMG_1760877230396.jpg?fit=2048%2C1236&ssl=1&resize=%20770%2C433&strip=all&quality=75",
      title: "smara",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://www.spectator.co.uk/wp-content/uploads/2025/06/Aidan-iStock.png?w=1000",
      title: "camels",
    },
    {
      img: "https://www.infostourismemaroc.com/uploads/images/gallery/5ec3d0902653a_visiter-smara-sahara-infos-tourisme-maroc.jpg",
      title: "smara",
    },
    {
      img: "https://saharatodos.ma/wp-content/uploads/2022/04/Picsart_22-04-28_17-26-01-679-scaled.jpg",
      title: "smara",
    },

    {
      img: "https://www.mshtly.com/uploads/products/%D8%A7%D9%84%D8%B7%D9%84%D8%AD-1.webp",
      title: "tree",
    },
    {
      img: "https://dawa.center/images/islamic-centers/EqXDUpjO49922rAaiQSSgYA8FWqoXIsBTKQcHFEh%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%B9%D8%AA%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%B1%D8%A9.jpg",
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
