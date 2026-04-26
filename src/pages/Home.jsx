import { useNavigate } from "react-router-dom";
import VideoHero from "../components/VideoHero";

const cards = [
  { title: "Culture",      sub: "Traditions & Rituals",    image: "/images/culture_01.jpg",     route: "/culture"      },
  { title: "Monasteries",  sub: "Sacred Living Spaces",    image: "/images/monastery_01.jpg",       route: "/monasteries"  },
  { title: "Temples",      sub: "Architecture & Devotion", image: "/images/temple_01.png",        route: "/temples"      },
  { title: "Translation",  sub: "Ancient Texts & Scripts", image: "/images/manuscript_01.png",   route: "/translation"  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <VideoHero />

      <section className="cards-section">
        <p className="cards-eyebrow">Explore</p>
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.route}
              className="card"
              onClick={() => navigate(card.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(card.route)}
            >
              <img src={card.image} alt={card.title} className="card__img" />
              <div className="card__overlay" />
              <div className="card__body">
                <span className="card__sub">{card.sub}</span>
                <h3 className="card__title">{card.title}</h3>
                <span className="card__arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}