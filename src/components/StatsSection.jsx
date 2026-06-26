import { useEffect } from "react";

const StatsSection = () => {
    useEffect(() => {
        const counters = document.querySelectorAll(".count-num");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute("data-target"));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = Math.floor(current);
                    }, 16);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach((el) => observer.observe(el));

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("st-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".st-card").forEach((el) => cardObserver.observe(el));

        return () => { observer.disconnect(); cardObserver.disconnect(); };
    }, []);

    const stats = [
        { icon: "✦", title: "Relied upon by businesses", num: 20, suffix: "+", label: "Experts" },
        { icon: "◎", title: "The team at NexSaaS bank", num: 15, suffix: "+", label: "Years Experience" },
        { icon: "⬡", title: "Projects delivered globally", num: 500, suffix: "+", label: "Projects" },
        { icon: "◈", title: "Clients who trust NexSaaS", num: 100, suffix: "+", label: "Clients" },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=Inter+Tight:wght@300;400;500&display=swap');

        .st-sec{background:#f5f0eb;padding:80px 0;font-family:'Inter Tight',sans-serif}
        .st-grid{
          max-width:1100px;
          margin:0 auto;
          padding:0 32px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:16px;
        }
        @media(max-width:900px){.st-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:500px){.st-grid{grid-template-columns:1fr;padding:0 20px}}

        .st-card{
          background:#ede8e2;
          border-radius:20px;
          padding:28px 24px 24px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:200px;
          opacity:0;
          transform:translateY(40px);
          transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .st-card.st-in{opacity:1;transform:translateY(0)}
        .st-card:nth-child(1){transition-delay:0.05s}
        .st-card:nth-child(2){transition-delay:0.15s}
        .st-card:nth-child(3){transition-delay:0.25s}
        .st-card:nth-child(4){transition-delay:0.35s}

        .st-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:24px}
        .st-title{font-family:'Inter Tight',sans-serif;font-size:0.95rem;font-weight:400;color:#1a1a1a;line-height:1.5;max-width:160px}
        .st-icon{
          width:40px;
          height:40px;
          border:1.5px solid rgba(0,0,0,0.15);
          border-radius:10px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
          color:rgba(0,0,0,0.5);
          flex-shrink:0;
        }

        .st-bottom{}
        .st-num-wrap{display:flex;align-items:baseline;gap:2px;margin-bottom:6px}
        .count-num{
          font-family:'Sora',sans-serif;
          font-size:3rem;
          font-weight:300;
          color:#1a1a1a;
          letter-spacing:-2px;
          line-height:1;
        }
        .st-suffix{
          font-family:'Sora',sans-serif;
          font-size:2.2rem;
          font-weight:300;
          color:#1a1a1a;
          letter-spacing:-1px;
        }
        .st-label{font-size:0.78rem;color:rgba(0,0,0,0.4);letter-spacing:0.2px}
      `}</style>

            <section className="st-sec">
                <div className="st-grid">
                    {stats.map((s, i) => (
                        <div className="st-card" key={i}>
                            <div className="st-top">
                                <div className="st-title">{s.title}</div>
                                <div className="st-icon">{s.icon}</div>
                            </div>
                            <div className="st-bottom">
                                <div className="st-num-wrap">
                                    <span className="count-num" data-target={s.num}>0</span>
                                    <span className="st-suffix">{s.suffix}</span>
                                </div>
                                <div className="st-label">{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default StatsSection;