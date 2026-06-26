import { useEffect } from "react";

const AboutSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("in-view");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".av").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=Inter+Tight:wght@300;400;500&display=swap');
        .ab{background:#12141c;padding:80px 0;font-family:'Inter Tight',sans-serif}
        .ab-wrap{max-width:1200px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 440px;gap:56px;align-items:start}
        @media(max-width:1024px){.ab-wrap{grid-template-columns:1fr;padding:0 24px}}

        .ab-h{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,3vw,3rem);font-weight:400;color:#fff;margin-bottom:14px;line-height:1.15}
        .ab-h span{color:rgba(255,255,255,0.28)}
        .ab-p{font-size:0.9rem;color:rgba(255,255,255,0.45);line-height:1.8;margin-bottom:40px;max-width:480px}

        .ab-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden}
        .ab-card{padding:28px 24px;border:1px solid rgba(255,255,255,0.07);background:#1a1c26}
        .ab-card:hover{background:#1f2133}

        .ab-num{font-family:'Sora',sans-serif;font-size:2.8rem;font-weight:400;color:#fff;letter-spacing:-2px;line-height:1;margin-bottom:8px}
        .ab-nl{font-size:0.78rem;color:rgba(255,255,255,0.38);letter-spacing:0.2px}

        .ab-ct{font-family:'Sora',sans-serif;font-size:1.05rem;color:#fff;margin-bottom:10px;font-weight:400}
        .ab-cx{font-size:0.8rem;color:rgba(255,255,255,0.42);line-height:1.7}

        .ab-card.pur{background:linear-gradient(140deg,#2e1770 0%,#1a0e45 60%,#130b38 100%)}
        .ab-card.pur:hover{background:linear-gradient(140deg,#3a1f88 0%,#22115a 60%,#180e44 100%)}

        .avs{display:flex;align-items:center;margin-bottom:12px}
        .av-i{width:36px;height:36px;border-radius:50%;border:2.5px solid #1a1c26;margin-left:-10px;overflow:hidden;flex-shrink:0;object-fit:cover}
        .av-i:first-child{margin-left:0}
        .av-n{width:36px;height:36px;border-radius:50%;border:2.5px solid #1a1c26;margin-left:-10px;background:#555e7a;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;flex-shrink:0}
        .av-tx{font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.55}

        .ab-img{border-radius:14px;overflow:hidden;height:100%;min-height:420px}
        .ab-img img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(25%) brightness(0.9)}
        .ab-img-ph{width:100%;height:420px;background:linear-gradient(135deg,#1c1c2e,#16213e,#0d1b2a);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:13px;color:rgba(255,255,255,0.15)}
      `}</style>

            <section className="ab">
                <div className="ab-wrap">

                    {/* LEFT */}
                    <div>
                        <h2 className="ab-h">How NexSas <span>was born</span></h2>
                        <p className="ab-p">NexSas was founded to make AI accessible for businesses. our tools are trusted globally for their simplicity, power, and real-world impact.</p>

                        <div className="ab-grid">

                            {/* Card 1 — 95% */}
                            <div className="ab-card">
                                <div className="ab-num">95%</div>
                                <div className="ab-nl">Customer satisfaction rate</div>
                            </div>

                            {/* Card 2 — Website design */}
                            <div className="ab-card">
                                <div className="ab-ct">Website design</div>
                                <div className="ab-cx">Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.</div>
                            </div>

                            {/* Card 3 — Branding purple */}
                            <div className="ab-card pur">
                                <div className="ab-ct">Branding & identity</div>
                                <div className="ab-cx">Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.</div>
                            </div>

                            {/* Card 4 — Avatars */}
                            <div className="ab-card">
                                <div className="avs">
                                    <img className="av-i" src="https://i.pravatar.cc/40?img=1" alt="a1" />
                                    <img className="av-i" src="https://i.pravatar.cc/40?img=5" alt="a2" />
                                    <img className="av-i" src="https://i.pravatar.cc/40?img=9" alt="a3" />
                                    <img className="av-i" src="https://i.pravatar.cc/40?img=12" alt="a4" />
                                    <div className="av-n">99+</div>
                                </div>
                                <div className="av-tx">Timeless,<br />sustainable<br />creativity.</div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT — Image */}
                    <div className="ab-img">
                        <img src="/circuit.png" alt="circuit" />
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutSection;