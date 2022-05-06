const props = {
  title: 'Peacock',
  assetFolder: 'peacock',
  titleParts: {
    de: [
      { offset: .8, value: 'Ein Stuhl' },
      { offset: 0, value: 'als Ikone für' },
      { offset: 2.6, value: 'Popkutlur' },
      { offset: 4.6, value: '& Politik' },
    ],
    en: [
      { offset: 1.9, value: 'A chair' },
      { offset: 0, value: 'as an icon of' },
      { offset: 2.4, value: 'popculture' },
      { offset: 6, value: '& politics' },
    ],
  },
  chapters: [
    {
      titleParts: {
        de: [
          { offset: .8, value: 'Kommt ihnen' },
          { offset: 0, value: 'dieser Stuhl' },
          { offset: 2.8, value: 'bekannt vor?' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Die größten Stars der 1960er-und 1970er-Jahre wie Elizabeth Taylor, Cher, Dolly Parton, Donna Summer und John F. Kennedy, saßen darauf. Dieser Stuhl ist mehr als ein bloßes Foto-Requisit:',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Der sogenannte Peacock Chair (dt. Pfauen Sessel) erzählt über 100 Jahre Weltgeschichte – von Popkultur über Identität bis zu kolonialen Verflechtungen. Benannt nach seiner besonderen Lehne, die an das Rad eines Pfaus erinnert, ist dieser Stuhl auf zahlreichen Fotografien schon seit Anfang des 20. Jahrhunderts zu finden. Doch was macht diesen Stuhl so besonders?',
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 1 Peacock A.jpg',
              value: {
                de: `Portrait von Elizabeth Taylor in den 1950er-Jahren\n© Getty Images API`,
              },
            },
          ]
        },
      ],
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Wie alles' },
          { offset: 0, value: 'begann' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Der Ursprung des Stuhls ist nicht sicher belegt: Wahrscheinlich kommt er von den Philippinen und wurde dort zuerst in einem Gefängnis in Manila entworfen und hergestellt.',
          },
        },
        {
          type: 'text',
          value: {  
            de: 'Der Stuhl wird aus den natürlichen, regionalen Materialien Rattan oder Bambus geflochten. Ein Dokument für die Herkunft des Stuhls soll dieses am 16. Mai 1914 veröffentlichte Foto der amerikanischen Zeitung „El Paso Herald“ sein. Der Titel lautet: „Gefangene auf einem Pfauenthron“.',
          },
        },
        {
          type: 'fixed',
          image: {
            src: 'Kapitel 2 Wie alles A.jpg',
            value: {
              de: 'Anzeige in der amerikanischen Zeitung „El Paso Herald“ vom 16. Mai 1914.',
            },
          },
          value: {
            de: 'Historische Fotografien nehmen nicht immer Rücksicht darauf, ob die dargestellte Person fotografiert werden wollte. Wir wollen stereotypisierende Darstellungen nicht einfach reproduzieren. Deshalb haben wir uns dazu entschieden, den direkten Blick auf die dargestellte Person zu verdecken. Mit einem Klick auf das Bild können Sie entscheiden, ob Sie das Foto der „Gefangenen auf einem Pfauenthron“ ganz sehen.',
          },
          coverImage: {
            src: 'Kapitel 2 Wie alles A-cover.png',
          }
        },
        {
          type: 'text',
          value: {  
            de: 'Die Philippinen waren von 1898 bis 1946 eine Kolonie der USA. Viele amerikanische Tourist*innen reisten dorthin und brachten handgemacht Produkte als Souvenirs zurück in die USA. So auch den Peacock Chair. Von da an erreichte der Stuhl große Bekanntheit, besonders in der Studiofotografie: Mit seiner hohen, geschwungenen Rückenlehne und dem eleganten Unterbau gibt er jeder Person eine erhabene Rahmung.',
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 2 Wie alles B.jpg',
              value: {
                de: `Fotografie eines kleinen Mädchens, auf einem Weidenstuhl stehend, Anfang 20. Jahrhundert.\n© Frank R. Snyder`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles C.jpg',
              value: {
                de: `Norma Talmadge, 1922\n© James Aabe`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles D.png',
              value: {
                de: `Schwarz-Weiß-Porträtfoto eines Mädchens und eines Jungen, Lily Faulkner Studio, um 1900\n© Pioneer Photos - Lucy Rennie, Howard Black & J. P. Johnstone History`,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {  
            de: 'Die 1960er-Jahre und die aufkommende Hippie-Bewegung gaben dem Peacock Chair nochmals ein neues Image: An der Westküste der USA konnte der Stuhl in Import-Läden gekauft werden – zusammen mit Sandelholz und anderen Accessoires für einen vermeintlich „asiatischen“ und „meditativen“ Lebensstil. Musik spielte in dieser Zeit eine besonders wichtige Rolle für das richtige Ambiente: Auf zahlreichen Plattencovern wurde der Peacock Chair zum zentralen Motiv.',
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 2 Wie alles E.jpg',
              value: {
                de: `Al Di Meola, Casino, 1978\n© Columbia Records`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles F.jpg',
              value: {
                de: `Julio Iglesias, El Amor, 1975\n© Columbia`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles G.jpeg',
              value: {
                de: `James Brown, The Original Disco Man, 1978\n© Polydor Records`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles H.jpg',
              value: {
                de: `Funkadelic: Uncle Jam Wants You, 1979, Artwork\n© Diem M. Jones`,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {  
            de: 'Das Album Cover von Funkadelics „Uncle Jam Wants You“ (1979) ist dabei ein direktes Zitat auf einen wichtigen Be-Sitzer des Stuhls:  1967 erhält der Peacock Chair in den USA eine ganz neue Bedeutung.',
          },
        },
      ],
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Aus Sessel' },
          { offset: 0, value: 'wird Symbol' },
        ],
      },
      content: [
        {
          type: 'fixed',
          image: {
            src: 'Kapitel 3 Sessel Symbol A.jpg',
            value: {
              de: 'Huey P. Newton als „Minster of Defense“; als Foto erstmals publiziert in der Zeitschrift der Black Panther Party am 15. Mai 1967',
            },
          },
          value: null,
          coverImage: null
        },
        {
          type: 'quote',
          value: {
            de: 'Die 1960er-Jahre waren in den USA geprägt von der Bürger*innenrechtsbewegung des Schwarzen Amerikas. Nach Jahrhunderten der Versklavung, Unterdrückung und des Rassismus setzten sich verschiedene Schwarze Gruppierungen für ihre Rechte ein.'
          }
        },
        {
          type: 'text',
          value: {
            de: 'Als im Februar 1965 der Schwarze Aktivist Malcolm X, einer der Anführer der religiösen und politischen Organisation „Nation of Islam“, ermordet wurde, kam es zu landesweiten Protesten. Hunderte Schwarze Menschen wurden dabei im ganzen Land getötet – von weißen Polizisten. Inspiriert von der Herangehensweise von Malcolm X gründete der Student Huey Percy Newton am 15. Oktober 1966 in Berkeley, Kalifornien mit anderen zusammen die „Black Panthers Party for Self Defense“. 1967 entstand eine Fotografie, die ihn auf einem Peacock Chair thronend zeigt. Sie erschien in der Zeitschrift der Partei am 15. Mai 1967 unter der Überschrift „Minister of Defense“. Unzählige Poster und Kopien haben es zu einem ikonischen Foto werden lassen – bis heute. Es steht symbolisch für den Einsatz Schwarzer Menschen, sich ihre Grundrechte – zur Not auch durch Gewalt – zu erkämpfen.'
          }
        },
        {
          type: 'text',
          value: {
            de: 'Jo-Ann Morgan, Professorin für African American Studies und Kunstgeschichte hat sich mit dieser Fotografie und ihrer Bedeutung auseinandergesetzt:'
          }
        },
        {
          type: 'video',
          src: 'Film Kapitel 3 Sessel Symbol 1 dt UTs.mp4',
        },
        {
          type: 'text',
          value: {
            de: 'Die Wirkung der ikonischen Fotografie war so stark, dass der Peacock Chair auch als Stellvertreter für Huey P. Newton genutzt wurde. Am 28. Oktober 1967 gerät Newton in eine Polizeikontrolle – eine (bis heute) nicht unübliche Schikane der Polizei gegenüber Schwarzen Menschen. Die Situation eskaliert, es fallen Schüsse. Am Ende ist ein Polizist erschossen, ein zweiter verwundet. Newton selbst kommt mit einer schweren Schussverletzung ins Krankenhaus. Obgleich bei ihm keine Waffe gefunden wird und es keine Zeugen des Vorfalls gibt, wird er für den Mord am Polizisten John Frey angeklagt. Die ikonische Fotografie wird daraufhin von seinen Anhänger*innen bei Demonstrationen für seine Freilassung getragen. Bei öffentlichen Auftritten der Black Panther Party, zum Beispiel bei der „Huey P. Newton Birthday Party“ am 17. Februar 1968 im Auditorium von Oakland, Kalifornien steht ein leerer Peacock Chair als Stellvertreter für Newton auf der Bühne. Vor 5000 Zuschauer*innen, die sich für die Freilassung von Newton einsetzen, wird er als verwaister Thron zum politischen Symbol.'
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 3 Sessel Symbol B.jpg',
              value: {
                de: `Huey P. Newtons Geburtstagsfeier am 17. Februar 1968 im Oakland Auditorium während seines Gefängnisaufenthalts. Von links nach rechts: US Congressman Ron Dellums und dessen Sohn, unbekannte Person, Bobby Seale, Mitbegründer der Black Panthers, Stokely Carmichael und Rap Brown vom Student Nonviolent Coordinating Committee, James Forman vom Student Nonviolent Coordinating Committee und Civil Rights sowie eine unbekannte Person. Dazwischen steht stellvertretend für Huey P. Newton der leere Peacock Chair.\n© Gerhard E. Gscheidle`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol C.jpg',
              value: {
                de: `September 1968, Oakland, USA: Black Panther halten „Free Huey”-Schilder bei der Kundgebung vor dem Alandea County Courthouse, wo der Verteidugungsminister der Black Panther, Huey P. Newton, vor Gericht steht, angeklagt für den Mord an einem Polizisten aus Oakland.\n© 2022, Stephen Shames / courtesy Galerie Esther Woerdehoff`,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {
            de: 'Bis heute wird der Peacock Chair immer wieder als Symbol für den Schwarzen Widerstand von Künstler*innen in Szene gesetzt: Bei Beyoncés „Formation“-Tour (2016) hatte er einen zentralen Platz auf der Bühne, in dem Marvel Hit „Black Panther“ (2018) ist der Thron des Königs von Wakanda inspiriert von dem Peacock Chair.'
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 3 Sessel Symbol D.jpg',
              value: {
                de: `Sängerin Beyoncé mit Tänzerinnen, London, 2016\n© Daniela Vesco`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol E.jpg',
              value: {
                de: `„Black Panther“ Filmplakat, 2018\n© Marvel Studios`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol F.jpg',
              value: {
                de: `Missy Eliott: This is not a Test, 2003, Artwork\n© Warwick Saint Studio`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol G.jpg',
              value: {
                de: `Drake, More Life\n© 2017 Young Money Entertainment/Cash Money Records`,
              },
            },
          ]
        },
      ],
    },
    {
      titleParts: {
        de: [
          { offset: .4, value: 'Koloniale' },
          { offset: 0, value: 'Verflechtungen' },
          { offset: 2.5, value: 'Symbolkraft' },
          { offset: 5, value: 'auch in Europa' },
        ],
      },
      content: [
        {
          type: 'text',
          value: {
            de: 'Auch in Europa wird das Symbol des Peacock Chairs genutzt, um an den Kampf zahlreicher Schwarzer Menschen zu erinnern. 2017 jährte sich der Verkauf der ehemaligen Kolonialgebiete der karibischen Virgin Islands von Dänemark an die USA zum 100. Mal. Die Künstlerinnen La Vaughn Belle und Jeannette Ehlers schufen zu diesem Anlass das transatlantische Kunstprojekt „I am Queen Mary“. Im Zentrum: Mary Thomas.'
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 4 Koloniale A.jpg',
              value: {
                de: `Die Skulptur „I am Queen Mary“ vor dem ehemaligen Lagergebäude der Dänischen Westindienkompanie im Hafen von Kopenhagen, heute die „Royal Casting Collection“, 2018,\n© David Berg
                `,
              },
            },
            {
              src: 'Kapitel 4 Koloniale B.jpeg',
              value: {
                de: `Bei der Einweihung der Skulptur „I am Queen Mary“ vor dem ehemaligen Lagergebäude der Dänischen Westindienkompanie im Hafen von Kopenhagen, heute die „Royal Casting Collection“ am 31. März 2018,\n© Sarah Giersing`,
              },
            },
          ]
        },
        {
          type: 'quote',
          value: {
            de: 'Das Kunstwerk zeigt sie als Kunstfigur auf einem Peacock Chair thronend vor dem Gebäude in Kopenhagen, in dem sich einst der Hauptsitz der Dänischen Westindien-Kompanie befand.'
          }
        },
        {
          type: 'text',
          value: {
            de: 'Obgleich die Versklavung von Menschen 1848 in dem dänischen Kolonialgebiet abgeschafft wurde, änderte sich an den Lebens- und Arbeitsbedingungen der Menschen wenig. Am 1. Oktober 1878 führten drei Frauen auf der Insel Saint Croix im karibischen Meer eine Revolte an, um die Verbesserung der Arbeitsbedingungen Schwarzer Menschen auf den Plantagen der weißen zu erkämpfen. Eine von ihnen war Mary Thomas. Für ihre Beteiligung am Aufstand wurde sie zunächst zum Tode verurteilt. Später wurde dies in lebenslange Haft, die sie ab 1882 in Kopenhagen absaß, umgewandelt.'
          }
        },
        {
          type: 'text',
          value: {
            de: 'Das Aufbegehren Schwarzer Menschen auf Plantagen ist nur wenigen Personen der weißen Mehrheitsgesellschaft bekannt. Dabei haben sie durch kleine Sabotageakte oder große Revolten immer schon ihr Schicksal in die Hand genommen und sich gewehrt. Die sieben Meter hohe, monumentale Skulptur in Kopenhagen gibt diesem Teil der Geschichte Raum. Sie schafft Bewusstsein in der Öffentlichkeit. '
          }
        },
        {
          type: 'text',
          value: {
            de: 'Die Künstlerinnen La Vaughn Belle und Jeannette Ehlers erklären warum sie genau diese Art der Darstellung wählten:'
          }
        },
        {
          type: 'video',
          src: 'Film Kapitel 4 Koloniale 1 dt UTs.mp4',
        },
        {
          type: 'text',
          value: {
            de: 'Der Pfauensessel ist also mehr als nur ein schickes Möbel. Besonders für Schwarze Menschen und People of Color in den USA und in Europa ist er zu einem festen Symbol ihrer politischen Identität geworden. Es ist wichtig, alle Perspektiven eines solchen Objekts zu beleuchten. Auf der einen Seite ist der Peacock Chair auch heute noch ein beliebtes Requisit in der Mode- und Werbefotografie. Auch auf Social Media ist der ikonische Sessel erfolgreich: Das Hashtag „Peacockchair“ hat über 100.000 Einträge auf Instagram. Auf der anderen Seite lassen sich an ihm die kolonialen Verflechtungen – von Ausbeutung, kultureller Aneignung und Aufbegehren – und ihre globalen Auswirkungen bis heute verdeutlichen – von Politik bis Popkultur.'
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 4 Koloniale C.PNG',
              value: {
                de: `Michelle Obama bei ihrem Abschlussball, 1982\n© Courtesy of Michelle Obama`,
              },
            },
            {
              src: 'Kapitel 4 Koloniale D.PNG',
              value: {
                de: `Schauspielerin Kristin Davis in einer Modestrecke für Instyle Magazine, 2011\n© Instyle Magazine`,
              },
            },
            {
              src: 'Kapitel 4 Koloniale E.jpeg',
              value: {
                de: `Model Claudia Schiffer auf dem Cover des ZEITmagazins Nr. 42, 2010© Frederike Helwig/ ZEITmagazin`,
              },
            },
          ]
        },
      ]
    }
  ],
}

export default function Page() {
  return null
}

export async function getStaticProps() {
  return {
    props
  }
}
