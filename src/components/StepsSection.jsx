import { useEffect } from "react";

const StepsSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("sp-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".sp-item").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            num: "1",
            title: "Sign up for free",
            desc: "Try our services commitment-free! Explore all we offer without a credit card—it's a risk-free",
        },
        {
            num: "2",
            title: "Customize your setup",
            desc: "Customize Nexsas to perfectly align with the unique requirements of your business.",
        },
        {
            num: "3",
            title: "Start scaling",
            desc: "Streamline your processes, enhance efficiency, and expand your business horizons.",
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=Inter+Tight:wght@300;400;500&display=swap');

        .sp-sec{background:#0f1117;padding:100px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}

        .sp-top{text-align:center;margin-bottom:64px}
        .sp-tag{
          display:inline-block;
          font-size:12px;
          color:rgba(255,255,255,0.6);
          border:1px solid rgba(255,255,255,0.15);
          border-radius:100px;
          padding:5px 16px;
          margin-bottom:24px;
          letter-spacing:0.3px;
        }
        .sp-title{
          font-family:'Sora',sans-serif;
          font-size:clamp(1.8rem,3vw,2.8rem);
          font-weight:400;
          color:#fff;
          line-height:1.2;
        }

        .sp-grid{
          max-width:1000px;
          margin:0 auto;
          padding:0 40px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:40px;
          position:relative;
        }
        @media(max-width:768px){
          .sp-grid{grid-template-columns:1fr;gap:48px;padding:0 24px}
        }

        /* Line between steps */
        .sp-grid::before{
          content:'';
          position:absolute;
          top:22px;
          left:calc(16.66% + 20px);
          right:calc(16.66% + 20px);
          height:1px;
          background:rgba(255,255,255,0.1);
        }
        @media(max-width:768px){.sp-grid::before{display:none}}

        .sp-item{
          text-align:center;
          opacity:0;
          transform:translateY(40px);
          transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .sp-item.sp-in{opacity:1;transform:translateY(0)}
        .sp-item:nth-child(1){transition-delay:0.05s}
        .sp-item:nth-child(2){transition-delay:0.2s}
        .sp-item:nth-child(3){transition-delay:0.35s}

        .sp-num{
          width:48px;
          height:48px;
          border-radius:100px;
          border:1px solid rgba(255,255,255,0.2);
          background:rgba(255,255,255,0.05);
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:'Sora',sans-serif;
          font-size:1rem;
          color:#fff;
          font-weight:400;
          margin:0 auto 20px;
        }

        .sp-name{
          font-family:'Sora',sans-serif;
          font-size:1.05rem;
          color:#fff;
          font-weight:400;
          margin-bottom:10px;
        }
        .sp-desc{
          font-size:0.82rem;
          color:rgba(255,255,255,0.38);
          line-height:1.7;
          max-width:240px;
          margin:0 auto;
        }
      `}</style>

            <section className="sp-sec">
                <div className="sp-top">
                    <span className="sp-tag">Steps</span>
                    <h2 className="sp-title">Get started in 3 simple steps</h2>
                </div>

                <div className="sp-grid">
                    {steps.map((s, i) => (
                        <div className="sp-item" key={i}>
                            <div className="sp-num">{s.num}</div>
                            <div className="sp-name">{s.title}</div>
                            <p className="sp-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default StepsSection;