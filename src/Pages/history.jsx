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
        <main className={historyStyle.page}>
            <div className={historyStyle.background_glow_top}></div>
            <div className={historyStyle.background_glow_bottom}></div>

            <header className={historyStyle.hero}>
                <Navbar />
                <div className={historyStyle.hero_inner}>
                    <p className={historyStyle.hero_badge}>Historia • Emoción • Presencia</p>
                    <h1 className={historyStyle.hero_title}>Una página con alma propia</h1>
                    <p className={historyStyle.hero_text}>
                        Conoce la historia de Mariachi Corazón de México, una agrupación dedicada a preservar la emoción, tradición y elegancia de la música mariachi en Nueva York y sus alrededores.
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
                            <img
                                className={historyStyle.story_image}
                                src={section.image}
                                alt={section.imageAlt}
                                loading="lazy"
                            />
                        </div>
                        <div className={historyStyle.story_copy}>
                            <p className={historyStyle.story_eyebrow}>{section.eyebrow}</p>
                            <h2 className={historyStyle.story_title}>{section.title}</h2>
                            <p className={historyStyle.story_text}>{section.text}</p>
                        </div>
                    </section>
                ))}

                <section className={historyStyle.cta_panel}>
                    <div className={historyStyle.cta_glow}></div>
                    <h2 className={historyStyle.cta_label}>Listos Para Crear Algo Inolvidable</h2>
                    <p className={historyStyle.cta_text}>
                        Cada evento tiene su propio ritmo. Nosotros llegamos para convertirlo en una experiencia que se recuerda.
                    </p>
                </section>
            </main>
        </main>
    );
}

export default History;
