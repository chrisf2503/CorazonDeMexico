import { useEffect, useState } from 'react';
import Navbar from './Components/nav.jsx';
import { storyList } from './Components/storyList.jsx';
import historyStyle from './CSS/history.module.css';

function History() {
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const sections = document.querySelectorAll('[data-history-section]');

        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleSections((currentSections) => {
                    const nextSections = { ...currentSections };

                    entries.forEach((entry) => {
                        nextSections[entry.target.dataset.historySection] = entry.isIntersecting;
                    });

                    return nextSections;
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-10% 0px -10% 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    const getRevealClassName = (sectionId) => {
        const visibilityClassName = visibleSections[sectionId]
            ? historyStyle.section_visible
            : historyStyle.section_hidden;

        return `${historyStyle.story_section} ${historyStyle.section_reveal} ${visibilityClassName}`;
    };

    return (
        <div className={historyStyle.page}>
            <div className={historyStyle.background_glow_top}></div>
            <div className={historyStyle.background_glow_bottom}></div>

            <header className={historyStyle.hero}>
                <Navbar />
                <div className={historyStyle.hero_inner}>
                    <div className={historyStyle.hero_badge}>Historia • Emoción • Presencia</div>
                    <h1 className={historyStyle.hero_title}>Una página con alma propia</h1>
                    <p className={historyStyle.hero_text}>
                        Esta historia no aparece plana. Se revela con movimiento, brillo y presencia,
                        como una entrada al escenario antes del primer acorde.
                    </p>
                </div>
            </header>

            <main className={historyStyle.story_layout}>
                {storyList.map((section, index) => (
                    <section
                        key={section.id}
                        data-history-section={section.id}
                        className={`${getRevealClassName(section.id)} ${index % 2 === 1 ? historyStyle.story_section_reverse : ''}`}
                    >
                        <div className={historyStyle.story_media}>
                            <div className={historyStyle.media_ring}></div>
                            <img className={historyStyle.story_image} src={section.image} alt={section.imageAlt} />
                        </div>
                        <div className={historyStyle.story_copy}>
                            <div className={historyStyle.story_eyebrow}>{section.eyebrow}</div>
                            <h2 className={historyStyle.story_title}>{section.title}</h2>
                            <p className={historyStyle.story_text}>{section.text}</p>
                        </div>
                    </section>
                ))}

                <section className={historyStyle.cta_panel}>
                    <div className={historyStyle.cta_glow}></div>
                    <div className={historyStyle.cta_label}>Listos Para Crear Algo Inolvidable</div>
                    <p className={historyStyle.cta_text}>
                        Cada evento tiene su propio ritmo. Nosotros llegamos para convertirlo en una experiencia que se recuerda.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default History;
