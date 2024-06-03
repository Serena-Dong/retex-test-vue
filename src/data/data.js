const headerData = {
    navbar: {
        menu: [
            {
                title: "Articoli",
                subtitle: "Trend, dati e novità del Terzo settore",
                path: "#"
            },
            {
                title: "Storie",
                subtitle: "Letture ed approfondimenti dei fenomeni complessi",
                path: "#"
            },
            {
                title: "Interviste",
                subtitle: "Racconti reali di persone ed organizzazioni",
                path: "#"
            },
            {
                title: "Opinioni",
                subtitle: "Riflessioni e confronti dei nostri opinionisti",
                path: "#"
            },
            {
                title: "Podcast",
                subtitle: "Un luogo per dare voce ai protagonisti della sotenibilità",
                path: "#"
            },
            {
                title: "Bookazine",
                subtitle: "Una rivista da leggere e un libro da conservare",
                path: "#"
            },
            {
                title: "Chi siamo",
                path: "#"
            },
            {
                title: "Comitato editoriale",
                path: "#"
            },
            {
                title: "Servizi",
                path: "#"
            },
            {
                title: "Agenda/Eventi",
                path: "#"
            },
            {
                title: "Mappa dell'attivismo",
                path: "#"
            },
            {
                title: "Inchieste crowdfunding",
                path: "#"
            },


        ],
        themes: [
            {
                name: "Ambiente",
                path: "#",
                bgColor: "l-green"
            },
            {
                name: "Economia",
                path: "#",
                bgColor: "white"
            },
            {
                name: "Mondo",
                path: "#",
                bgColor: "l-pink"
            },
            {
                name: "Non Profit",
                path: "#",
                bgColor: "white"
            },
            {
                name: "Politica",
                path: "#",
                bgColor: "l-yellow"
            },
            {
                name: "Società",
                path: "#",
                bgColor: "white"
            },
            {
                name: "Welfare",
                path: "#",
                bgColor: "white"
            },

        ]
    },
}

const mainData = {
    cards: {
        intro: {
            type: "intro",
            img: "intro.jpeg",
            title: "Rocella Jonica, la Lampedusa che l'italia ignora",
            author: "Alessandro Puglia",
            authorImg: "alessandro-puglio.jpeg",
            date: "22 Giugno 2022",
            tag: {
                text: "migranti",
                bgColor: "white"
            }
        },
        containerOne: {
            colSix: {
                type: "video",
                img: "video.jpeg",
                title: "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
                author: "Gilda Sciortino",
                authorImg: "gilda-sciortino.jpeg",
                date: "14 Luglio 2022",
                tag: {
                    text: "allarmi",
                    bgColor: "l-green"
                },
                buttons: {
                    img: "",
                    video: ""
                }
            },
            colTop: {
                type: "podcast",
                img: "startupper.jpeg",
                title: "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
                author: "Diletta Grella",
                authorImg: "gilda-sciortino.jpeg",
                date: "14 Luglio 2022",
                tag: {
                    text: "ESPERIMENTI",
                    bgColor: "l-cyan"
                }
            },
            colBottom: {
                type: "text",
                img: "ucraina.png",
                title: "Nelle città italiane tutti in piazza per e con Kiev",
                author: "Anna Spena",
                authorImg: "anna-spena.jpeg",
                date: "14 Luglio 2022",
                tag: {
                    text: "UCRAINA",
                    bgColor: "l-cyan"
                },
            },

        }
    },
    banner: {
        title: "Il tuo supporto è fondamentale",
        link: {
            text: "Dai il tuo contributo",
            path: "#"
        },
        bgColor: "l-yellow"
    },
    quote: {
        text: "Essere troppo seri non è cosa molto seria",
        credits: "Detto Africano",
        bgColor: "grey"
    },
    blog: {
        authors: [
            {
                name: "Paolo Dell’Oca",
                nickname: "Il Becco dell’oca",
                img: "paolo-dell-oca.jpeg",
                link: "#"
            },
            {
                name: "Pasquale Pugliese",
                nickname: "Disarmato",
                img: "pasquale-pugliese.jpeg",
                link: "#"
            },
            {
                name: "Lorenzo Maria Alvaro",
                nickname: "Battiperminuto",
                img: "lorenzo-maria-alvaro.jpeg",
                link: "#"
            },
            {
                name: "Elena Zanella",
                nickname: "La Zanzarellaa",
                img: "elena-zanella.jpeg",
                link: "#"
            },
            {
                name: "Laura Orestano",
                nickname: "Impact Q&A",
                img: "laura-orestano.jpeg",
                link: "#"
            }
        ],
        link: ""
    }

}

const footerData = {
    links: [
        {
            name: "Il Gruppo",
            path: "#"
        },
        {
            name: "Note Legali",
            path: "#"
        },
        {
            name: "Chi Siamo",
            path: "#"
        },
        {
            name: "Condizioni d'uso",
            path: "#"
        },
        {
            name: "Privacy",
            path: "#"
        },
        {
            name: "Scrivici",
            path: "#"
        },
        {
            name: "Pubblicità",
            path: "#"
        },
    ],
    signature: "© 1994-2022 Vita Società Editoriale S.p.A."

}

export { headerData, mainData, footerData }