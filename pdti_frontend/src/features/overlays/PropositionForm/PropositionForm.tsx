import React, { useState } from "react";
import "./PropositionForm.css";
import { useProposition } from "../../hooks/useProposition";
import type { PropositionForm as PropositionFormType } from "../../models/propositionForm";

interface PropositionFormProps {
  axisId: string;
}

const PropositionForm: React.FC<PropositionFormProps> = ({ axisId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    proposition: "",
  });

  const { loading, response, createProposition } = useProposition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.proposition) {
      alert("يرجى ملء جميع الحقول.");
      return;
    }

    await createProposition({
      AxisGivenId: axisId,
      ...formData,
    } as PropositionFormType);

    if (response?.statusCode == 200 || response?.statusCode == 201) {
      setFormData({ firstName: "", lastName: "", email: "", proposition: "" });
    }
  };

  return (
    <div className="proposition-form-container">
      <h2>إرسال اقتراحك</h2>

      {response && (
        <p
          className={`success-message ${response.title ? "success" : "error"}`}
        >
          {response.message ||
            (response.message ? "تم الإرسال بنجاح!" : "حدث خطأ!")}
        </p>
      )}

      <form onSubmit={handleSubmit} className="proposition-form">
        <div className="form-group">
          <label htmlFor="firstName">الاسم الأول *</label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="أدخل الاسم الأول"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">اسم العائلة *</label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="أدخل اسم العائلة"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="أدخل البريد الإلكتروني"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="proposition">الاقتراح *</label>
          <textarea
            id="proposition"
            value={formData.proposition}
            onChange={(e) =>
              setFormData({ ...formData, proposition: e.target.value })
            }
            placeholder="اكتب اقتراحك هنا..."
            rows={6}
            disabled={loading}
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "جارٍ الإرسال..." : "إرسال"}
        </button>
      </form>
    </div>
  );
};

export default PropositionForm;
