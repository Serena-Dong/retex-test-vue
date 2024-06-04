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
            showBg: false,
            type: "intro",
            fontColor: "white",
            bgImg: "intro.jpeg",
            title: "Rocella Jonica, la Lampedusa che l'italia ignora",
            date: "22 Giugno 2022",
            author: {
                name: "Alessandro Puglia",
                img: "alessandro-puglia.jpeg"
            },
            tag: {
                text: "migranti",
                bgColor: "white"
            }
        },
        containerFirst: {
            colMainLeft: {
                showBg: true,
                type: "video",
                fontColor: "white",
                bgImg: "video.jpeg",
                title: "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
                date: "14 Luglio 2022",
                author: {
                    name: "Gilda Sciortino",
                    img: "gilda-sciortino.jpeg"
                },
                tag: {
                    text: "allarmi",
                    bgColor: "l-green"
                },
                buttons: {
                    img: true,
                    video: true
                }
            },
            colTop: {
                showBg: false,
                type: "podcast",
                fontColor: "white",
                bgImg: "startupper.jpeg",
                title: "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
                author: "",
                authorImg: "gilda-sciortino.jpeg",
                date: "14 Luglio 2022",
                author: {
                    name: "Diletta Grella",
                    img: "gilda-sciortino.jpeg"
                },
                tag: {
                    text: "esperimenti",
                    bgColor: "l-cyan"
                }
            },
            colBottom: {
                showBg: false,
                type: "text",
                fontColor: "white",
                bgImg: "ukraine.png",
                title: "Nelle città italiane tutti in piazza per e con Kiev",
                date: "14 Luglio 2022",
                author: {
                    name: "Anna Spena",
                    img: "anna-spena.jpeg"
                },
                tag: {
                    text: "UCRAINA",
                    bgColor: "l-pink"
                },
            },

        },
        containerSecond: {
            col: [
                {
                    showBg: true,
                    type: "text",
                    fontColor: "white",
                    bgColor: "red",
                    title: "“Qui Odessa”, fotografie, progetti e solidarietà",
                    date: "14 Luglio 2022",
                    author: {
                        name: "Redazione",
                        img: "redazione.png"
                    },
                    tag: {
                        text: "progetto arca",
                        bgColor: "white"
                    }
                },
                {
                    showBg: false,
                    type: "text",
                    fontColor: "white",
                    bgImg: "startupper.jpeg",
                    title: "“Qui Odessa”, fotografie, progetti e solidarietà",
                    date: "14 Luglio 2022",
                    author: {
                        name: "Luca Cereda",
                        img: "gilda-sciortino.jpeg"
                    },
                    tag: {
                        text: "adolescenti",
                        bgColor: "l-cyan"
                    }
                },
                {
                    showBg: false,
                    type: "text",
                    fontColor: "white",
                    bgImg: "ukraine.png",
                    title: "““Qui Odessa”, fotografie, progetti e solidarietà",
                    date: "14 Luglio 2022",
                    author: {
                        name: "Emilliano Moccia",
                        img: "emilliano-moccia.jpeg"
                    },
                    tag: {
                        text: "economia civile",
                        bgColor: "l-pink"
                    },
                }
            ]
        },
        containerThird: {
            colLeft: {
                showBg: false,
                type: "podcast",
                fontColor: "white",
                bgImg: "sport.jpeg",
                title: "Troppi abusi nello sport minorile, il governo interviene",
                date: "14 Luglio 2022",
                author: {
                    name: "Gilda Sciortino",
                    img: "gilda-sciortino.jpeg"
                },
                tag: {
                    text: "esperimenti",
                    bgColor: "l-cyan"
                }
            },
            colRight: {
                showBg: true,
                type: "video",
                fontColor: "white",
                bgImg: "donne.jpeg",
                title: "Donne e nuove generazioni: con loro riparte l’Italia",
                date: "14 Luglio 2022",
                author: {
                    name: "Gilda Sciortino",
                    img: "gilda-sciortino.jpeg"
                },
                tag: {
                    text: "allarmi",
                    bgColor: "l-green"
                }
            }

        },
        containerForth: {
            col: {
                showBg: true,
                type: "video",
                fontColor: "white",
                bgImg: "kasbah.png",
                title: "La Kasbah mazarese nella quale si gusta la cultura araba",
                date: "22 Giugno 2022",
                author: {
                    name: "Alessandro Puglia",
                    img: "alessandro-puglia.jpeg"
                },
                tag: {
                    text: "Impresa Sociale",
                    bgColor: "white"
                },
                buttons: {
                    video: true
                }
            }
        },
        containerFifth: {
            col: [{
                showBg: false,
                type: "text",
                fontColor: "white",
                bgImg: "startupper.jpeg",
                title: "Uccisa ad Haiti suor Luisa, era l'angelo dei bambini",
                date: "14 Luglio 2022",
                author: {
                    name: "Luca Cereda",
                    img: "gilda-sciortino.jpeg"
                },
                tag: {
                    text: "adolescenti",
                    bgColor: "l-cyan"
                }
            },
            {
                showBg: true,
                type: "text",
                fontColor: "white",
                bgColor: "red",
                title: "“Qui Odessa”, fotografie, progetti e solidarietà",
                date: "14 Luglio 2022",
                author: {
                    name: "Redazione",
                    img: "redazione.png"
                },
                tag: {
                    text: "progetto arca",
                    bgColor: "white"
                }
            },
            {
                showBg: false,
                type: "text",
                fontColor: "white",
                bgImg: "startupper.jpeg",
                title: "Sostenibilità sociale: accordo tra Dynamo Academy e Acsi",
                date: "14 Luglio 2022",
                author: {
                    name: "Luca Cereda",
                    img: "gilda-sciortino.jpeg"
                },
                tag: {
                    text: "adolescenti",
                    bgColor: "l-cyan"
                }
            },
            {
                showBg: false,
                type: "text",
                fontColor: "black",
                bgColor: "white",
                title: "“Lisa, il modello Croce Rossa per l'inclusione lavorativa",
                date: "14 Luglio 2022",
                author: {
                    name: "Emilliano Moccia",
                    img: "emilliano-moccia.jpeg"
                },
                tag: {
                    text: "economia civile",
                    bgColor: "l-pink"
                },
            }
            ]
        },
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