import { MagneticButton } from "@/components/MagneticButton";
import { contacts } from "@/data/content";

export function FooterSection() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-inner">
        <div className="footer-logo">WILLO</div>
        <h2>ГОТОВЫ ОБСУДИТЬ ВАШУ ЗАДАЧУ?</h2>
        <p>ОСТАВЬТЕ ЗАЯВКУ, И МЫ СВЯЖЕМСЯ С ВАМИ</p>
        <MagneticButton className="footer-button">НАПИСАТЬ</MagneticButton>
        <address>
          <span>EMAIL: {contacts.email}</span>
          <span>ТЕЛЕФОН: {contacts.phone}</span>
          <span>АДРЕС: {contacts.address}</span>
        </address>
      </div>
    </footer>
  );
}
