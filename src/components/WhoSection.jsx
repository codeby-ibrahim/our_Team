import { useEffect } from "react";

const WhoSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("w-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".w-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const cards = [
        { img: "https://i.pravatar.cc/400?img=47", name: "Sarah Johnson", role: "Content Creator" },
        { img: "https://i.pravatar.cc/400?img=48", name: "Emily Chen", role: "SEO Specialist" },
        { img: "https://i.pravatar.cc/400?img=49", name: "Mia Tanaka", role: "Landing Page Expert" },
        { img: "https://i.pravatar.cc/400?img=50", name: "Sophia Lee", role: "Blog Strategist" },
        { img: "https://i.pravatar.cc/400?img=44", name: "Aisha Khan", role: "Digital Marketer" },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=Inter+Tight:wght@300;400;500&display=swap');

        .w-sec{background:#0d0f1a;padding:100px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}
        .w-top{text-align:center;margin-bottom:60px}
        .w-tag{font-size:11px;color:#e05555;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:block}
        .w-title{font-family:'Sora',sans-serif;font-size:clamp(2rem,3.5vw,2.8rem);font-weight:400;color:#fff;margin-bottom:16px}
        .w-sub{font-size:0.9rem;color:rgba(255,255,255,0.45);max-width:500px;margin:0 auto;line-height:1.7}

        .w-grid{
          display:flex;
          gap:16px;
          max-width:1200px;
          margin:0 auto;
          padding:0 32px;
          overflow-x:auto;
          scrollbar-width:none;
        }
        .w-grid::-webkit-scrollbar{display:none}

        /* CARD */
        .w-card{
          flex:0 0 220px;
          height:320px;
          border-radius:16px;
          overflow:hidden;
          position:relative;
          cursor:pointer;
          opacity:0;
          transform:translateY(50px);
          transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .w-card.w-in{opacity:1;transform:translateY(0)}
        .w-card:nth-child(1){transition-delay:0.05s}
        .w-card:nth-child(2){transition-delay:0.15s}
        .w-card:nth-child(3){transition-delay:0.25s}
        .w-card:nth-child(4){transition-delay:0.35s}
        .w-card:nth-child(5){transition-delay:0.45s}

        @media(min-width:1000px){
          .w-grid{justify-content:center}
          .w-card{flex:0 0 calc(20% - 14px)}
        }

        .w-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          transition:transform 0.5s ease;
        }
        .w-card:hover img{transform:scale(1.06)}

        /* Dark overlay */
        .w-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
          opacity:0;
          transition:opacity 0.4s ease;
        }
        .w-card:hover .w-overlay{opacity:1}

        /* Name - neeche se upar aata hai */
        .w-info{
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          padding:20px 16px;
          transform:translateY(100%);
          transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .w-card:hover .w-info{transform:translateY(0)}

        .w-name{
          font-family:'Sora',sans-serif;
          font-size:0.95rem;
          color:#fff;
          font-weight:400;
          margin-bottom:4px;
        }
        .w-role{
          font-size:0.75rem;
          color:rgba(255,255,255,0.6);
        }
      `}</style>

            <section className="w-sec">
                <div className="w-top">
                    <span className="w-tag">Use cases</span>
                    <h2 className="w-title">Who It's For</h2>
                    <p className="w-sub">Whether you're optimizing blog content or building landing pages, Nexsas makes it easier to rank.</p>
                </div>

                <div className="w-grid">
                    {cards.map((c, i) => (
                        <div className="w-card" key={i}>
                            <img src={c.img} alt={c.name} />
                            <div className="w-overlay"></div>
                            <div className="w-info">
                                <div className="w-name">{c.name}</div>
                                <div className="w-role">{c.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default WhoSection;