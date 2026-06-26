import { useEffect } from "react";

const TeamSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("t-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".t-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const team = [
        { img: "https://i.pravatar.cc/400?img=11", name: "James Park", role: "AI Engineer", featured: false },
        { img: "https://i.pravatar.cc/400?img=12", name: "Sophia Lee", role: "Chief Technology Officer", featured: true },
        { img: "https://i.pravatar.cc/400?img=13", name: "Aryan Mehta", role: "Product Designer", featured: false },
        { img: "https://i.pravatar.cc/400?img=14", name: "Carlos Rivera", role: "ML Specialist", featured: false },
        { img: "https://i.pravatar.cc/400?img=15", name: "David Osei", role: "Backend Developer", featured: false },
        { img: "https://i.pravatar.cc/400?img=16", name: "Kevin Yoon", role: "Growth Lead", featured: false },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=Inter+Tight:wght@300;400;500&display=swap');

        .t-sec{background:#0a0b10;padding:100px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}

        .t-top{text-align:center;margin-bottom:60px}
        .t-tag{font-size:11px;color:#e05555;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:block}
        .t-title{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,3vw,2.6rem);font-weight:400;color:#fff;margin-bottom:14px;line-height:1.25}
        .t-sub{font-size:0.88rem;color:rgba(255,255,255,0.42);max-width:440px;margin:0 auto;line-height:1.7}

        /* GRID */
        .t-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:4px;
          max-width:900px;
          margin:0 auto;
          padding:0 32px;
        }
        @media(max-width:600px){
          .t-grid{grid-template-columns:repeat(2,1fr);padding:0 16px}
        }

        /* CARD */
        .t-card{
          position:relative;
          overflow:hidden;
          border-radius:12px;
          cursor:pointer;
          opacity:0;
          transform:translateY(60px) scale(0.95);
          transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1),
                      transform 0.8s cubic-bezier(0.4,0,0.2,1);
          aspect-ratio:3/4;
        }
        .t-card.t-in{opacity:1;transform:translateY(0) scale(1)}

        /* Staggered delays */
        .t-card:nth-child(1){transition-delay:0.05s}
        .t-card:nth-child(2){transition-delay:0.15s}
        .t-card:nth-child(3){transition-delay:0.25s}
        .t-card:nth-child(4){transition-delay:0.35s}
        .t-card:nth-child(5){transition-delay:0.45s}
        .t-card:nth-child(6){transition-delay:0.55s}

        .t-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:top;
          display:block;
          filter:grayscale(100%) brightness(0.75);
          transition:filter 0.4s ease, transform 0.5s ease;
        }
        .t-card:hover img{
          filter:grayscale(60%) brightness(0.85);
          transform:scale(1.05);
        }

        /* Featured card */
        .t-card.featured img{
          filter:grayscale(30%) brightness(0.9);
        }

        /* Overlay */
        .t-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
          opacity:0;
          transition:opacity 0.4s ease;
        }
        .t-card.featured .t-overlay{opacity:1}
        .t-card:hover .t-overlay{opacity:1}

        /* Info — neeche se upar */
        .t-info{
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          padding:20px 16px;
          transform:translateY(100%);
          transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .t-card.featured .t-info{transform:translateY(0)}
        .t-card:hover .t-info{transform:translateY(0)}

        .t-name{
          font-family:'Sora',sans-serif;
          font-size:1rem;
          color:#fff;
          font-weight:400;
          margin-bottom:4px;
        }
        .t-role{
          font-size:0.72rem;
          color:rgba(255,255,255,0.55);
          letter-spacing:0.3px;
        }

        /* Featured white bar */
        .t-card.featured .t-info::before{
          content:'';
          display:block;
          width:40px;
          height:2px;
          background:white;
          margin-bottom:10px;
          border-radius:2px;
        }
      `}</style>

            <section className="t-sec">
                <div className="t-top">
                    <span className="t-tag">Our expert</span>
                    <h2 className="t-title">Driven by expertise.<br />United by purpose.</h2>
                    <p className="t-sub">Our team of AI specialists and strategists is committed to delivering intelligent, customized solutions that fuel your growth.</p>
                </div>

                <div className="t-grid">
                    {team.map((member, i) => (
                        <div className={`t-card ${member.featured ? "featured" : ""}`} key={i}>
                            <img src={member.img} alt={member.name} />
                            <div className="t-overlay"></div>
                            <div className="t-info">
                                <div className="t-name">{member.name}</div>
                                <div className="t-role">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TeamSection;