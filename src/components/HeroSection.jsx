import { useEffect } from "react";

const HeroSection = () => {
    useEffect(() => {
        const els = document.querySelectorAll(".anim");
        els.forEach((el) => {
            const delay = parseFloat(el.getAttribute("data-delay") || 0);
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0) scale(1)";
            }, delay * 1000);
        });

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll(".scroll-up").forEach((el) => scrollObserver.observe(el));

        // Counter for Dev Team - 87%
        const devObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const effNum = entry.target.querySelector(".eff-n");
                    if (effNum && !effNum.classList.contains("counted")) {
                        effNum.classList.add("counted");
                        let current = 0;
                        effNum.textContent = "0%";
                        const timer = setInterval(() => {
                            current += 87 / (1500 / 16);
                            if (current >= 87) { current = 87; clearInterval(timer); }
                            effNum.textContent = Math.floor(current) + "%";
                        }, 16);
                    }
                    devObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        const devCard = document.querySelector(".card-dev");
        if (devCard) devObserver.observe(devCard);

        // Counter animation for dashboard
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate 8458
                    const mainNum = entry.target.querySelector(".dash-main-num");
                    const subNum = entry.target.querySelector(".dash-sub-num");
                    if (mainNum && !mainNum.classList.contains("counted")) {
                        mainNum.classList.add("counted");
                        let start = 0;
                        const end = 8458;
                        const duration = 1500;
                        const step = end / (duration / 16);
                        const timer = setInterval(() => {
                            start += step;
                            if (start >= end) { start = end; clearInterval(timer); }
                            mainNum.textContent = Math.floor(start).toLocaleString();
                        }, 16);
                    }
                    if (subNum && !subNum.classList.contains("counted")) {
                        subNum.classList.add("counted");
                        let s = 0;
                        const timer2 = setInterval(() => {
                            s += 0.05;
                            if (s >= 1.124) { s = 1.124; clearInterval(timer2); }
                            subNum.textContent = s.toFixed(3);
                        }, 16);
                    }
                    // Animate bars
                    const bars = entry.target.querySelectorAll(".dbar");
                    bars.forEach((bar, i) => {
                        setTimeout(() => {
                            bar.style.transform = "scaleY(1)";
                        }, 500 + i * 150);
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const dashCard = document.querySelector(".card-dash");
        if (dashCard) counterObserver.observe(dashCard);

        document.querySelectorAll(".hero-btn").forEach((btn) => {
            const icon = btn.querySelector(".b-icon");
            const text = btn.querySelector(".b-text");
            if (!icon || !text) return;
            btn.addEventListener("mouseenter", () => {
                const bR = btn.getBoundingClientRect();
                const iR = icon.getBoundingClientRect();
                const tR = text.getBoundingClientRect();
                icon.style.transform = `translateX(${bR.width - (iR.left - bR.left) - icon.offsetWidth - 4}px)`;
                text.style.transform = `translateX(-${tR.left - bR.left - 4}px)`;
            });
            btn.addEventListener("mouseleave", () => {
                icon.style.transform = "translateX(0)";
                text.style.transform = "translateX(0)";
            });
        });

        return () => { scrollObserver.disconnect(); counterObserver.disconnect(); };
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:wght@300;400;500&family=Manrope:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes heroFloat{0%,100%{transform:translateY(-10px)}50%{transform:translateY(10px)}}
        @keyframes wadeFloat{0%,100%{transform:translateY(0px)}50%{transform:translateY(-8px)}}
        @keyframes dashFloat{0%,100%{transform:translateY(0px)}50%{transform:translateY(-5px)}}
        @keyframes devFloat{0%,100%{transform:translateY(0px)}50%{transform:translateY(-7px)}}
        .hero-float{animation:heroFloat 4s ease-in-out infinite}
        .b-icon,.b-text{transition:transform 0.7s cubic-bezier(0.4,0,0.2,1)}
        .anim{opacity:0;transform:translateY(40px) scale(0.97);transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1),transform 0.8s cubic-bezier(0.4,0,0.2,1)}
        .scroll-up{opacity:0;transform:translateY(80px);transition:opacity 1s cubic-bezier(0.4,0,0.2,1),transform 1s cubic-bezier(0.4,0,0.2,1)}
        .scroll-up.in-view{opacity:1;transform:translateY(0)}
        .scroll-up.d1{transition-delay:0.1s}
        .scroll-up.d2{transition-delay:0.3s}
        .hero-section{background:#f1f4f6;padding:130px 0 86px;position:relative;overflow:hidden;min-height:100vh;font-family:'Inter Tight',sans-serif}
        .hero-container{max-width:1290px;margin:0 auto;padding:0 20px;position:relative}
        .hero-title{font-family:'Sora',sans-serif;font-size:clamp(2rem,4.5vw,4rem);font-weight:400;letter-spacing:-3.2px;color:#0d0d12;line-height:1.2;text-align:center;max-width:950px;margin:0 auto 16px}
        .hero-sub{font-size:1.125rem;color:rgba(13,13,18,0.6);text-align:center;max-width:540px;margin:0 auto;line-height:1.6}
        .btn-wrap{display:flex;justify-content:center;margin-top:56px}
        .hero-btn{background:#191d2a;display:inline-flex;align-items:center;height:52px;border-radius:16px;padding:4px;cursor:pointer;text-decoration:none;border:none;overflow:hidden}
        .b-icon{background:#8d59ff;width:60px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 3px 10px rgba(255,255,255,0.4) inset}
        .b-text{color:#dbe2e6;font-family:'IBM Plex Mono',monospace;font-size:0.95rem;padding:0 20px 0 14px;white-space:nowrap}
        .img-wrap{margin:40px auto 0;max-width:709px;width:100%;position:relative;z-index:1}
        .img-wrap img{width:100%;object-fit:contain;display:block}
        .card-wade{position:absolute;top:28%;left:2%;display:none;z-index:10}
        @media(min-width:1280px){.card-wade{display:block}}
        .card-wade.in-view{animation:wadeFloat 3.5s ease-in-out infinite}
        .wade-outer{background:white;border-radius:24px;padding:32px 32px 56px;width:248px;position:relative;box-shadow:0 4px 20px rgba(0,0,0,0.06)}
        .wade-chip{background:#252a32;border-radius:11px;padding:9px 12px;display:flex;align-items:center;gap:11px;width:190px;transform:rotate(6deg);position:relative;z-index:10}
        .wade-av{width:42px;height:42px;border-radius:8px;flex-shrink:0;overflow:hidden;position:relative}
        .wade-av-bg{position:absolute;inset:0;background:linear-gradient(145deg,#e8521a 0%,#f08040 45%,#c03010 100%)}
        .wade-av-person{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center}
        .wade-name{font-size:13px;color:white;font-family:'Sora',sans-serif;font-weight:400;letter-spacing:-0.3px;line-height:1.2}
        .wade-role{font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;font-weight:300}
        .wade-s1{position:absolute;bottom:14px;left:24px;width:188px;height:50px;background:rgba(13,13,18,0.14);border-radius:11px;transform:rotate(-7deg);z-index:5}
        .wade-s2{position:absolute;bottom:6px;left:22px;width:194px;height:50px;background:rgba(13,13,18,0.08);border-radius:11px;transform:rotate(4deg);z-index:4}
        .card-dash{position:absolute;top:64%;left:1%;display:none;z-index:10}
        @media(min-width:768px){.card-dash{display:block}}
        .card-dash.in-view{animation:dashFloat 4s ease-in-out infinite}
        .dash-outer{background:white;border-radius:20px;padding:16px 16px 12px;width:240px;box-shadow:0 4px 20px rgba(0,0,0,0.07)}
        .dash-tabs{display:flex;gap:4px;margin-bottom:14px}
        .dtab{font-size:11px;padding:5px 10px;border-radius:6px;color:rgba(13,13,18,0.45);cursor:pointer;font-family:'Inter Tight',sans-serif}
        .dtab.on{background:#191d2a;color:white}
        .dash-bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:8px}
        .dash-left{}
        .dash-num{display:flex;align-items:baseline;gap:3px;margin-bottom:6px}
        .dash-main-num{font-family:'Sora',sans-serif;font-size:24px;font-weight:400;color:#0d0d12;letter-spacing:-1px}
        .dash-sub-num{font-size:13px;color:#8d59ff;font-weight:500;font-family:'Inter Tight',sans-serif}
        .dash-desc{font-size:9px;color:rgba(13,13,18,0.4);line-height:1.4;max-width:110px}
        .dash-right{display:flex;flex-direction:column;align-items:flex-end}
        .dash-chart{display:flex;align-items:flex-end;gap:3px;height:48px;margin-bottom:4px}
        .dbar{border-radius:3px 3px 0 0;width:14px;background:#e4eaee;transform:scaleY(0);transform-origin:bottom;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1)}
        .dbar.p{background:#8d59ff}
        .dash-months{display:flex;gap:3px}
        .dmo{font-size:9px;color:rgba(13,13,18,0.4);width:14px;text-align:center}
        .card-dev{position:absolute;top:38%;right:1%;display:none;z-index:10}
        @media(min-width:768px){.card-dev{display:inline-block}}
        .card-dev.in-view{animation:devFloat 3.8s ease-in-out infinite}
        .dev-outer{background:white;border-radius:24px;padding:44px;width:280px;box-shadow:0 4px 20px rgba(0,0,0,0.07)}
        @media(min-width:1280px){.dev-outer{width:323px}}
        .dev-title{font-family:'Sora',sans-serif;font-size:1.25rem;color:#252a32;font-weight:400;text-align:right;letter-spacing:-0.6px;margin-bottom:28px}
        .avs-row{display:flex;justify-content:flex-end;margin-bottom:20px}
        .av{width:40px;height:40px;border-radius:8px;margin-left:-8px;border:2px solid white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;overflow:hidden}
        .av-plus{width:40px;height:40px;border-radius:8px;margin-left:-8px;border:2px solid white;background:linear-gradient(180deg,#2bc0e4 0%,#eaecc6 100%);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .stats-row{display:flex;align-items:flex-end;justify-content:space-between}
        .eff-l{font-size:0.9rem;color:#252a32;margin-bottom:2px}
        .eff-n{font-family:'Sora',sans-serif;font-size:2.5rem;color:#252a32;font-weight:400;letter-spacing:-2px;line-height:1}
        .badge{background:#252a32;border-radius:8px;padding:6px 10px;display:flex;align-items:center;gap:4px;color:white;font-family:'Manrope',sans-serif;font-size:1.1rem;font-weight:500}
      `}</style>

            <section className="hero-section">
                <div className="hero-container">

                    <div className="anim" data-delay="0.1">
                        <h1 className="hero-title">AI that transforms businesses, drives growth</h1>
                        <p className="hero-sub">Harness the power of intelligent solutions to simplify workflows, boost efficiency, and stay ahead of the competition.</p>
                    </div>

                    <div className="btn-wrap anim" data-delay="0.3">
                        <a href="#" className="hero-btn">
                            <div className="b-icon">
                                <svg viewBox="0 0 14 14" width="14" height="14" fill="rgba(255,255,255,0.85)">
                                    <path d="M6 0H8V2H6V0Z" /><path d="M0 0H2V2H0V0Z" />
                                    <path d="M9 3H11V5H9V3Z" /><path d="M3 3H5V5H3V3Z" />
                                    <path d="M12 6H14V8H12V6Z" /><path d="M6 6H8V8H6V6Z" />
                                    <path d="M9 9H11V11H9V9Z" /><path d="M3 9H5V11H3V9Z" />
                                    <path d="M6 12H8V14H6V12Z" /><path d="M0 12H2V14H0V12Z" />
                                </svg>
                            </div>
                            <span className="b-text">Request a demo</span>
                        </a>
                    </div>

                    <div className="img-wrap hero-float anim" data-delay="0.4">
                        <img src="/brain.png" alt="AI Brain" />
                    </div>

                    <div className="card-wade scroll-up d1">
                        <div className="wade-outer">
                            <div className="wade-chip">
                                <img src="/avatar1.png" alt="Wade" style={{ width: '30%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                                <div>
                                    <p className="wade-name">wade warren</p>
                                    <p className="wade-role">Marketing coordinator</p>
                                </div>
                            </div>
                            <div className="wade-s1"></div>
                            <div className="wade-s2"></div>
                        </div>
                    </div>

                    <div className="card-dash scroll-up d2">
                        <div className="dash-outer">
                            <div className="dash-tabs">
                                <span className="dtab on">Overview</span>
                                <span className="dtab">Sales</span>
                                <span className="dtab">Order</span>
                            </div>
                            <div className="dash-bottom">
                                <div className="dash-left">
                                    <div className="dash-num">
                                        <span className="dash-main-num">0</span>
                                        <span className="dash-sub-num">0.000</span>
                                    </div>
                                    <p className="dash-desc">Your sales increased this month by around 58%</p>
                                </div>
                                <div className="dash-right">
                                    <div className="dash-chart">
                                        <div className="dbar" style={{ height: "28px" }}></div>
                                        <div className="dbar p" style={{ height: "42px" }}></div>
                                        <div className="dbar" style={{ height: "22px" }}></div>
                                        <div className="dbar p" style={{ height: "36px" }}></div>
                                    </div>
                                    <div className="dash-months">
                                        <span className="dmo">Apr</span>
                                        <span className="dmo">May</span>
                                        <span className="dmo">Jun</span>
                                        <span className="dmo">Jul</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-dev scroll-up d1">
                        <div className="dev-outer">
                            <p className="dev-title">Dev team</p>
                            <div className="avs-row">
                                <div className="av"><img src="/avatar1.png" alt="A" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div className="av"><img src="/avatar2.png" alt="B" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div className="av"><img src="/avatar3.png" alt="C" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div className="av-plus">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.75 12H20.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M12 3.75V20.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="stats-row">
                                <div>
                                    <p className="eff-l">Efficiency</p>
                                    <p className="eff-n">87%</p>
                                </div>
                                <div className="badge">
                                    <span>4</span>
                                    <svg width="15" height="17" viewBox="0 0 17 19" fill="none">
                                        <path d="M16.5 8.26C16.5 12.55 13.05 15.5 8.5 15.5V17.5C4 17 0.5 12.43 0.5 8.26C0.5 3.97 3.96 0.5 8.51 0.5C13.06 0.5 16.5 3.97 16.5 8.26Z" stroke="white" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default HeroSection;