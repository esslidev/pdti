import "./AxisSection.css";
import axis1 from "./../../../../../assets/images/axis-1.jpg";
import axis2 from "./../../../../../assets/images/axis-2.jpg";
import axis3 from "./../../../../../assets/images/axis-3.jpeg";
import axis4 from "./../../../../../assets/images/axis-4.png";
import axis5 from "./../../../../../assets/images/axis-5.png";
import AxisCard from "./components/axisCard/AxisCard";
import { useState } from "react";
import Overlay from "../../../../components/common/Overlay/Overlay";
import PropositionForm from "../../../../overlays/PropositionForm/PropositionForm";

const AxisSection = () => {
  const axisData = [
    {
      axisId: "1",
      axisTitle: "المحور الأول",
      description: "انعاش الشغل",
      imageUrl: axis1,
    },
    {
      axisId: "2",
      axisTitle: "المحور الثاني",
      description:
        "تقوية الخدمات الاجتماعية الأساسية خاصة في مجال التربية  و التعليم",
      imageUrl: axis2,
    },
    {
      axisId: "3",
      axisTitle: "المحور الثالث",
      description:
        "تقوية الخدمات الاجتماعية الأساسية خاصة في مجال الرعاية الصحية",
      imageUrl: axis3,
    },
    {
      axisId: "4",
      axisTitle: "المحور الرابع",
      description: "التدبير الاستباقي و المستدام للموارد المائية",
      imageUrl: axis4,
    },
    {
      axisId: "5",
      axisTitle: "المحور الخامس",
      description: "التأهيل الترابي المندمج",
      imageUrl: axis5,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAxisId, setSelectedAxisId] = useState<string>("1");

  return (
    <section className="axis-section">
      <div className="axis-title-wrapper">
        <div className="axis-line"></div>
        <h1 className="axis-title">المحاور</h1>
        <div className="axis-line"></div>
      </div>

      <div className="axis-cards-grid">
        {axisData.map((axis, index) => (
          <AxisCard
            key={index}
            axisTitle={axis.axisTitle}
            description={axis.description}
            imageUrl={axis.imageUrl}
            onClick={() => {
              setSelectedAxisId(axis.axisId);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      <Overlay isVisible={isOpen} onClick={() => setIsOpen(false)}>
        <PropositionForm axisId={selectedAxisId} />
      </Overlay>
    </section>
  );
};

export default AxisSection;
