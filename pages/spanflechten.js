const props = {
  title: 'spanflechten',
  assetFolder: 'spanflechten',
  titleParts: {
    de: [
      { offset: .8, value: 'Körbe' },
      { offset: 0, value: 'in rauen' },
      { offset: 2.6, value: 'Mengen' },
    ],
    en: [
      { offset: 1.9, value: 'baskets' },
      { offset: 0, value: 'in vast' },
      { offset: 2.4, value: 'quantities' },
    ],
  },
  chapters: [
    {
      titleParts: {
        de: [
          { offset: .8, value: 'Spankorb-' },
          { offset: 0, value: 'herstellung im' },
          { offset: 2.8, value: 'Erzgebirge' },
        ],
        en: [
          { offset: .8, value: 'Chip basket' },
          { offset: 0, value: 'making in the' },
          { offset: 2.8, value: 'Erz Mountains' },
        ],
      },
      content: [
        {
          type: 'fixed',
          image: {
            src: 'Foto Kapitel 1 Span A.jpg',
            value: {
              de: 'Korbflechterei in Schwarzenberg, 1929 © SLUB Dresden / Deutsche Fotothek / Ewald Basel',
              en: 'Basketry work in Schwarzenberg, 1929 © SLUB Dresden / Deutsche Fotothek / Ewald Basel',
            },
          },
        },
        {
          type: 'quote',
          value: {
            de: 'Korbmacher beim Ziehen der Wickelspäne. Spankorbflechterei, Lauter, Erzgebirge, 1930 © SLUB Dresden / Deutsche Fotothek.',
            en: 'Basket weaver shaping the winding canes. Chip basket weaving workshop, Lauter, Erzgebirge, 1930 © SLUB Dresden / Deutsche Fotothek / Arno Heinicke',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Sie waren leicht, stabil und gut ineinander zu stapeln. Im 19. Jahrhundert wurden solche Spankörbe massenhaft im oberen Erzgebirge in den Orten Lauter und Bockau geflochten. Dort gab es langsam gewachsene Fichtenwälder. Das frisch geschlagene Nadelholz ließ sich aufspalten und eignete sich gut für das Flechten von Spankörben.',
            en: 'They were light, stable and easy to stack inside each other. In the 19th century, such chip baskets were woven en masse in the towns of Lauter and Bockau in the Upper Erz Mountains, Germany, where there were slow-growing spruce forests. The freshly cut coniferous wood could be split and was very suitable for weaving chip baskets.',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Das Flechten war anfangs nur eine Nebenbeschäftigung im Winter. Sie half, Notzeiten finanziell zu überbrücken. Mit dem Anschluss an die Eisenbahn konnten ab 1859 viel größere Mengen von Spankörben abgesetzt werden. Spankorbfabriken übernahmen damals Herstellung und Handel. Bald gab es im oberen Erzgebirge hunderte Spanflechter*innen. Geeignetes Holz wurde immer knapper und teurer, die zu erzielenden Gewinne sanken. Die Preise der Körbe aber blieben gleich.',
            en: 'Initially, weaving was only a side-line in winter, helping to bridge times of financial hardship. Following the link to the railways, much bigger quantities of chip baskets could be sold from 1859 onwards. At that time, chip basket factories took over production and trade. Soon, there were hundreds of chip basket weavers in the Upper Erz Mountains. Suitable wood became scarcer and more expensive, and the profits that could be made dwindled. The prices of the baskets, however, remained the same.',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Das Schlagen des Holzes und Ziehen der Flechtspäne war Männerarbeit. Beim Korbflechten mussten dann alle mitarbeiten, auch Kinder. Ohne diese Mitarbeit war der Lebensunterhalt einer Korbflechterfamilie um 1920 kaum zu sichern. Doch wie entsteht eigentlich ein Spankorb?',
            en: `Chopping the wood and shaving the chips was men's work, but when it came to weaving the baskets, everyone had to help, including children. Without their work, the livelihood of a basket-weaving family could scarcely be secured around 1920. But how is a chip basket actually made?`,
          },
        },
        {
          type: 'fixed',
          image: {
            src: 'Foto Kapitel 1 Span B.jpg',
            value: {
              de: 'Spankorbflechterei, Lauter, Erzgebirge, 1930 © SLUB Dresden / Deutsche Fotothek / Arno Heinicke',
              en: 'Chip basket weaving workshop, Lauter, Erzgebirge, 1930 © SLUB Dresden / Deutsche Fotothek / Arno Heinicke',
            },
          },
        },
      ],
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Die Herstellung' },
          { offset: 0, value: 'von Flechtspänen' },
        ],
        en: [
          { offset: 0, value: 'Producing wood chips' },
          { offset: 0, value: 'for weaving' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Biegsame Späne lassen sich nur aus dem Holz frisch geschlagener Nadelbäume gewinnen. Dazu werden die Baumstämme auf Länge der gewünschten Flechtspäne zersägt. Dann spaltet man die Stammabschnitte keilartig in Segmente. Diese werden längs in Breite der späteren Flechtspäne geteilt.',
            en: `Pliable chips can only be obtained from the wood of freshly cut conifers. To achieve this, the tree trunks are sawn to the length of the required chips. The trunk sections are then split into wedge-shaped segments. These are cut lengthwise to the width of the chips subsequently used in weaving.`,
          },
        },
        {
          type: 'text',
          value: {
            de: 'An den Stirnseiten der so entstehenden „Stöcke“ sind die Jahresringe gut zu erkennen. Aus diesen „Stöcken“ werden die Flechtspäne gewonnen. Die quer zu den Jahresringen abgelösten Schichten sind besonders stabil, man verwendet sie für den Boden. Sie werden Radialspan genannt. Wird der Span entlang eines Jahresrings abgelöst bezeichnet man ihn als Tangentialspan. Diesen verwendet man zum Ausflechten oder als Wickelspan. Mit dem Schnitzmesser wird jeder Jahresring einzeln eingeschnitten und anschließend vorsichtig mit der Hand abgelöst. Alle Flechtspäne müssen sofort verarbeitet werden. Trocknet der Flechtspan, wird er steif. Der Korb erhält dadurch jedoch erst seine Stabilität. Hier kann man sehen, wie dies geschieht:',
            en: `The annual rings are clearly visible on the fronts of the resulting "sticks". It is from these "sticks" that the weaving chips are obtained. The layers detached transversely to the annual rings are particularly stable and are used for the basket’s base. They are called radial chips. If the chips are removed along the annual rings, they are called tangential chips. They are used for weaving or as wrapping chips. Each annual ring is cut individually with a carving knife and then carefully removed by hand. All the chips must be processed immediately. The wood shavings become stiff when they dry out. However, this is what gives the basket its stability. Here you can see how this happens:`,
          },
        },
        {
          type: 'video',
          value: {
            de: 'Film Kapitel 2 Span 1.mp4',
            en: 'Film Kapitel 2 Span 1.mp4',
          }
        },
      ]
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Vom Span' },
          { offset: 0, value: 'von zum Korb' },
        ],
        en: [
          { offset: 0, value: 'From chip' },
          { offset: 0, value: 'to basket' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Das Herstellen des Korbbodens war früher meist Kinderarbeit, denn es wurde in unbequemer Haltung auf dem Boden ausgeführt. Für den Henkel war in der Mitte ein längerer Span einzuflechten. War der Boden fertig, wurde auf einer Holzform weitergeflochten bis man die Randhöhe erreichte.',
            en: `Making the basket bases was mainly children's work because it had to be done in an uncomfortable position on the floor. A longer chip had to be woven into the middle for the handle. When the base was finished, the weaving was continued around a wooden form until the height of the rim was reached. `,
          },
        },
        {
          type: 'text',
          value: {
            de: 'An den Stirnseiten der so entstehenden „Stöcke“ sind die Jahresringe gut zu erkennen. Aus diesen „Stöcken“ werden die Flechtspäne gewonnen. Die quer zu den Jahresringen abgelösten Schichten sind besonders stabil, man verwendet sie für den Boden. Sie werden Radialspan genannt. Wird der Span entlang eines Jahresrings abgelöst bezeichnet man ihn als Tangentialspan. Diesen verwendet man zum Ausflechten oder als Wickelspan. Mit dem Schnitzmesser wird jeder Jahresring einzeln eingeschnitten und anschließend vorsichtig mit der Hand abgelöst. Alle Flechtspäne müssen sofort verarbeitet werden. Trocknet der Flechtspan, wird er steif. Der Korb erhält dadurch jedoch erst seine Stabilität. Hier kann man sehen, wie dies geschieht:',
            en: `The annual rings are clearly visible on the fronts of the resulting "sticks". It is from these "sticks" that the weaving chips are obtained. The layers detached transversely to the annual rings are particularly stable and are used for the basket’s base. They are called radial chips. If the chips are removed along the annual rings, they are called tangential chips. They are used for weaving or as wrapping chips. Each annual ring is cut individually with a carving knife and then carefully removed by hand. All the chips must be processed immediately. The wood shavings become stiff when they dry out. However, this is what gives the basket its stability. Here you can see how this happens:`,
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Foto Kapitel 3 Span A.jpg',
              value: {
                de: `Korbflechterei in Schwarzenberg, 1929 © SLUB Dresden / Deutsche Fotothek / Ewald Basel`,
                en: `Basketry work in Schwarzenberg, 1929 © SLUB Dresden / Deutsche Fotothek / Ewald Basel`,
              },
            },
            {
              src: 'Foto Kapitel 3 Span B.jpg',
              value: {
                de: `Korbmacher beim Ziehen der Wickelspäne. Spankorbflechterei, Lauter, Erzgebirge, 1930 © SLUB Dresden / Deutsche Fotothek `,
                en: `Basket weaver shaping the winding canes. Chip basket weaving workshop, Lauter, Erzgebirge, 1930 © SLUB Dresden / Deutsche Fotothek / Arno Heinicke  `,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {
            de: 'Korbrand und Henkel erhielten stabilisierende Einlagen. Sie wurden abschließend umwickelt und der Henkel am Rand angenagelt. Mit dem Randabschluss war der Spankorb fertig. Eine Korbflechterfamilie mit Frau und drei Kindern stellte um 1910 bei einem zwölf Stunden langen Arbeitstag etwa 60 Obstkörbe am Tag her. Wie ein solcher Korb geflochten wird, sieht man hier:',
            en: `Inserts in the rim of the basket and the handle created extra stability. Finally, they were wrapped and the handle was tacked to the rim. Once the rim was finished, the chip basket was ready. Around 1910, a basket weaver's family including his wife and three children could make about 60 fruit baskets a day in a twelve-hour working day. Here you can see how such a basket is woven:`,
          },
        },
        {
          type: 'video',
          value: {
            de: 'Film Kapitel 3 Span 1.mp4',
            en: 'Film Kapitel 3 Span 1.mp4',
          }
        },
      ]
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Harte' },
          { offset: 0, value: 'Arbeit' },
        ],
        en: [
          { offset: 0, value: 'Hard' },
          { offset: 0, value: 'work' },
        ],
      },
      content: [
        {
          type: 'text',
          value: {
            de: 'Vielfach wurden die schlechten Arbeitsbedingungen beschrieben und Abhilfe ersonnen. Als Kinderarbeit 1872 gesetzlich verboten wurde, ließen die Fabrikanten die Körbe wieder zuhause in den Familien flechten. Dadurch fiel die Kinderarbeit nicht so auf. Wer konnte, wanderte in andere Berufe ab. Selbst die Fabriken in Lauter verlagerten ihren Schwerpunkt auf neue Industriezweige, insbesondere auf die Fertigung von Blechwaren- und Emaille.',
            en: `The poor working conditions were described frequently, and possible remedies devised. When child labour was banned by law in 1872, the factory owners arranged for the baskets to made be at home again by families. This made child labour less conspicuous. Those who could, moved into other professions. Even the factories in Lauter shifted their focus to new industries, especially the production of tinware and enamelware. `,
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Foto Kapitel 4 Span A.jpg',
              value: {
                de: `Beim Korbflechten, Heimindustrie, Erzgebirge, 1927, © SLUB Dresden / Deutsche Fotothek / Oskar Auraß`,
                en: `Weaving baskets, home industry, Erzgebirge, 1927 © SLUB Dresden / Deutsche Fotothek / Oskar Auraß`,
              },
            },
            {
              src: 'Foto Kapitel 4 Span B.jpg',
              value: {
                de: `Auszug aus J. Werner: Hausarbeitsgesetz und Heimarbeit im Sächsischen Erzgebirge. Leipzig, 1914, S. 24. `,
                en: `Excerpt from J. Werner: Hausarbeitsgesetz und Heimarbeit im Sächsischen Erzgebirge (Laws pertaining to home and cottage industries in the Saxon Erzgebirge). Leipzig, 1914, p. 24.`,
              },
            },
            {
                src: 'Foto Kapitel 4 Span C.jpg',
                value: {
                  de: `Auszug aus J. Werner: Hausarbeitsgesetz und Heimarbeit im Sächsischen Erzgebirge. Leipzig, 1914, S. 23.`,
                  en: `Excerpt from J. Werner: Hausarbeitsgesetz und Heimarbeit im Sächsischen Erzgebirge (Laws pertaining to home and cottage industries in the Saxon Erzgebirge). Leipzig, 1914, p. 23.`,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {
            de: 'Der Kulturhistoriker Dr. Andreas Martin hat sich schon im Studium, in den 1980er-Jahren mit dem Spanflechten im Erzgebirge beschäftigt. Von ihm stammen seltene Filmaufnahmen dieses Handwerks. In seiner Dissertation untersuchte er ausführlich die Arbeitsbedingungen des hausindustriellen Spanflechtens. Hier berichtet er davon:',
            en: 'Cultural historian Dr Andreas Martin studied chip weaving in the Erz Mountains during the 1980s and made rare film recordings of this craft. In his dissertation, he carried out a detailed examination of the working conditions for cottage-industry chip weaving. He reports on this here: ',
          },
        },
        {
          type: 'video',
          value: {
            de: 'Film Kapitel 4 Span 1 dt UTs.mp4',
            en: 'Film Kapitel 4 Span 1 engl UTs.mp4',
          }
        },
        {
          type: 'quote',
          value: {
            de: 'Um 1900 wurden schließlich Schälmaschinen zur Spanherstellung eingeführt. Sie konnten günstigere und breitere Späne erzeugen. ',
            en: 'Around 1900, peeling machines were finally introduced for chip production. They were able to produce cheaper and broader chips.',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Korbrand und Henkel wurden nun meist maschinell geklammert. Von Hand gefertigte Spankörbe hielten diesem Preisdruck nicht stand. Trotz enormer familiärer Arbeitsleistungen verarmten die erzgebirgischen Spankorbmacher*innen im ersten Drittel des 20. Jahrhunderts. Von der einstigen Vielfalt erzgebirgischer Spankorbmacherei blieben einzig die Obstversandkörbe bedeutsam. Spankorbfabriken entstanden nun auch direkt in den Obstanbaugebieten, beispielsweise in Werder und im Oderbruch',
            en: 'Basket rims and handles were now usually stapled by machine. Hand-made chip baskets could not withstand such price pressure. Despite enormous efforts of family labour, the Erz Mountains chip basket makers became impoverished in the first third of the 20th century. Only the baskets for fruit shipping remained important from the once broad range of chip baskets made in the Erz Mountains. Chip basket factories were also being established directly in the fruit-growing regions, for example in Werder and the Oderbruch.',
          },
        },
        {
            type: 'fixed',
            image: {
              src: 'Foto Kapitel 4 Span D.jpg',
              value: {
                de: 'Anzeige aus der Deutschen Korbmacher Zeitung, 22. Juli 1926 (In: A. Martin (2010): Spankörbe aus dem Erzgebirge: Vom Nebenerwerb zum Wegbereiter dörflicher Industrialisierung, S. 51.).',
                en: ' Advertisement from the Deutsche Korbmacher Zeitung, 22 July 1926 In: A. Martin (2010): Spankörbe aus dem Erzgebirge: Vom Nebenerwerb zum Wegbereiter dörflicher Industrialisierung, (Chip baskets from the Erzgebirge: from sideline to precursor of rural industrialisation) p. 51.',
              },
            },
        },
        {
          type: 'text',
          value: {
            de: 'Im Erzgebirge wurden bis Ende der 1980er-Jahre Obst- und Präsentkörbe aus maschinellem Schälfurnierspan hergestellt. Nach 1990 wurde das Flechten von Hand dort zu teuer.',
            en: 'In the Erz Mountains, fruit and gift baskets were made from machine-peeled veneer chips until the end of the 1980s. After 1990, weaving by hand became too expensive.',
          },
        }
      ]
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Und' },
          { offset: 0, value: 'heute?' },
        ],
        en: [
          { offset: 0, value: 'And' },
          { offset: 0, value: 'today?' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Körbe und Verpackungen aus Span spielen auch heute noch eine große Rolle. Allerdings sind sie meist industriell gefertigt.',
            en: 'Baskets and packaging made of wood chips are still very important today. However, most are industrially manufactured. ',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Die einzelnen Stränge werden dabei getackert, von Hand geflochten wird kaum noch. In Westfrankreich produziert die Firma Emballages Martin auf diese Art Spankörbe für Käse, Obst und Gemüse. Bis zu 80 Mitarbeiter*innen fällen die Pappelbäume, entfernen die Rinde, spalten das Holz und stellen bis zu acht Millionen Körbe pro Jahr her: ',
            en: 'The individual strands are stapled together, and they are rarely woven by hand. In western France, the company Emballages Martin produces chip baskets for cheese, fruit and vegetables in this way. Up to 80 employees cut down the poplar trees, remove the bark, split the wood and manufacture up to eight million baskets per year:',
          },
        },
        {
          type: 'video',
          value: {
            de: 'Film Kapitel 5 Span 1.mp4',
            en: 'Film Kapitel 5 Span 1.mp4',
          }
        },
        {
          type: 'text',
          value: {
            de: `Massenproduktion von Körben gibt es aber auch heute noch, denn keine Maschine beherrscht die komplexe Flechttechnik. Alle Körbe, die heute nicht wegen ihrer Funktion, sondern wegen ihres dekorativen Werts in den Läden Berlins verkauft werden, sind handgemacht – meist in Südostasien.`,
            en: `Mass production of baskets by hand still happens today, however, because no machine has ever mastered the complex weaving technique. All the baskets sold in Berlin's shops now for their decorative value rather than their function are handmade – mostly in Southeast Asia.`,
          },
        },
        {
          type: 'fixed',
          image: {
            src: 'Foto Kapitel 5 Span A .jpg',
            value: {
              de: 'Andreas Gursky, Nha Trang, 2004 © Andreas Gursky / VG Bild-Kunst, 2022 Courtesy: Sprüth Magers',
              en: 'Andreas Gursky, Nha Trang, 2004 © Andreas Gursky / VG Bild-Kunst, 2022 Courtesy: Sprüth Magers',
            },
          },
        },
        {
          type: 'quote',
          value: {
            de: 'Die Produktionsbedingungen sind dort ähnlich wie in der Spankorbherstellung des 19. Jahrhunderts',
            en: 'The production conditions there are similar to those of chip basket manufacturing in the 19th century.',
          },
        },
        {
          type: 'text',
          value: {
            de: `Die Korbwaren eines großen Möbelherstellers werden zum Beispiel in Cirebon, Indonesien gefertigt. Die Arbeiter*innen flechten entweder in Fabriken oder als kleine Subunternehmer*innen in Hausarbeit. 2015 veröffentlichte die Internationale Arbeitsorganisation ILO den Bericht „Employment Relationship and Working Conditions in an IKEA Rattan Supply Chain“. Demnach verdienen 55 % der Subunternehmer*innen weniger als den monatlichen Mindestlohn der Region (92 Dollar). Gleichzeitig ist dies für die meisten das einzige Haushaltseinkommen.  
            Wieviel ist uns also ein handgeflochtener Korb heute Wert`,
            de: `The wickerwork of one large furniture manufacturer is made in Cirebon, Indonesia, for example. The workers either weave in factories or as small subcontractors in home industry. In 2015, the International Labour Organization (ILO) published the report "Employment Relationship and Working Conditions in an IKEA Rattan Supply Chain". According to the report, 55% of subcontractors earn less than the monthly minimum wage in the region ($92). At the same time, for most of them, this is the only household income.  
            So how much is a hand-woven basket worth to us today?`,
          },
        }
      ]
    }
  ]
}

export default function Page() {
  return null
}

export async function getStaticProps() {
  return {
    props
  }
}