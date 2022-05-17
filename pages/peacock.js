const props = {
  title: 'Peacock',
  assetFolder: 'peacock',
  titleParts: {
    de: [
      { offset: .8, value: 'Der' },
      { offset: 0, value: 'Peacock Chair' },
      { offset: 2.6, value: 'von Pop bis' },
      { offset: 4.6, value: 'Politik' },
    ],
    en: [
      { offset: 1.9, value: 'The' },
      { offset: 0, value: 'Peacock Chair' },
      { offset: 2.4, value: 'From Pop to' },
      { offset: 6, value: 'Politics' },
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
        en: [
          { offset: .8, value: 'Does this' },
          { offset: 0, value: 'chair look familiar' },
          { offset: 2.8, value: 'to you?' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Die größten Stars der 1960er-und 1970er-Jahre wie Elizabeth Taylor, Cher, Dolly Parton, Donna Summer und John F. Kennedy, saßen darauf. Dieser Stuhl ist mehr als ein bloßes Foto-Requisit:',
            en: 'The greatest stars of the 1960s and 1970s, like Elizabeth Taylor, Cher, Dolly Parton, Donna Summer and John F. Kennedy all sat on it. But this chair is more than a simple photographic prop:',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Der sogenannte Peacock Chair (dt. Pfauen Sessel) erzählt über 100 Jahre Weltgeschichte – von Popkultur über Identität bis zu kolonialen Verflechtungen. Benannt nach seiner besonderen Lehne, die an das Rad eines Pfaus erinnert, ist dieser Stuhl auf zahlreichen Fotografien schon seit Anfang des 20. Jahrhunderts zu finden. Doch was macht diesen Stuhl so besonders?',
            en: 'The so-called Peacock Chair tells over 100 years of world history – from Pop culture to identity and even colonial entanglements. Named after its special back, which is reminiscent of a peacock’s tail, the chair can be found on many photographs since the start of the 20th century. But what makes it so special?',
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 1 Peacock A.jpg',
              value: {
                de: `Portrait von Elizabeth Taylor in den 1950er-Jahren\n©Getty Images API`,
                en: `Portrait of Elizabeth Taylor in the 1950s\n©Getty Images API`,
              },
            },
            {
              src: 'Kapitel 1 Peacock B.jpg',
              value: {
                de: `Cher bei einem Auftritt\n©Michael Ochs Archives`,
                en: `Cher Performing\n©Michael Ochs Archives`,
              },
            },
            {
              src: 'Kapitel 1 Peacock C.jpg',
              value: {
                de: `Country-Sängerin Dolly Parton in den 1970er-Jahren`,
                en: `Country singer Dolly Parton in the 1970s `,
              },
            },
            {
              src: 'Kapitel 1 Peacock D.jpg',
              value: {
                de: `Adams Family 1964\n©ABC Television`,
                en: `Adams Family 1964\n© ABC Television`,
              },
            },
            {
              src: 'Kapitel 1 Peacock E.jpg',
              value: {
                de: `Foto der Familie Kennedy\n©The Estate of Jacques Lowe`,
                en: `Kennedy Family Portrait\n©The Estate of Jacques Lowe`,
              },
            },
          ],
        },
      ],
    },
    {
      titleParts: {
        de: [
          { offset: 0, value: 'Wie alles' },
          { offset: 0, value: 'begann' },
        ],
        en: [
          { offset: 0, value: 'How it' },
          { offset: 0, value: 'all began' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Der Ursprung des Stuhls ist nicht sicher belegt: Wahrscheinlich kommt er von den Philippinen und wurde dort zuerst in einem Gefängnis in Manila entworfen und hergestellt.',
            en: 'The origin of the chair has not been proven with certainty: most probably, it came from the Philippines, where it was first designed and manufactured at a prison in Manila',
          },
        },
        {
          type: 'text',
          value: {  
            de: 'Der Stuhl wird aus den natürlichen, regionalen Materialien Rattan oder Bambus geflochten. Ein Dokument für die Herkunft des Stuhls soll dieses am 16. Mai 1914 veröffentlichte Foto der amerikanischen Zeitung „El Paso Herald“ sein. Der Titel lautet: „Gefangene auf einem Pfauenthron“.',
            en: ' The chair is woven from the natural, regional materials of rattan or bamboo. This photo, published in the American newspaper “El Paso Herald” on May 16, 1914, appears to document the chair’s origin with its title: “Jail Bird in a Peacock Chair”.',
          },
        },
        {
          type: 'fixed',
          image: {
            src: 'Kapitel 2 Wie alles A.jpg',
            value: {
              de: 'Anzeige in der amerikanischen Zeitung „El Paso Herald“ vom 16. Mai 1914.',
              en: 'Advertisement in the US-American  newspaper “El Paso Herald” dated 16 May 1914.',
            },
          },
          value: {
            de: 'Historische Fotografien nehmen nicht immer Rücksicht darauf, ob die dargestellte Person fotografiert werden wollte. Wir wollen stereotypisierende Darstellungen nicht einfach reproduzieren. Deshalb haben wir uns dazu entschieden, den direkten Blick auf die dargestellte Person zu verdecken. Mit einem Klick auf das Bild können Sie entscheiden, ob Sie das Foto der „Gefangenen auf einem Pfauenthron“ ganz sehen.',
            en: 'Historical photographs do not always take into account whether the person depicted wanted to be recorded photographically. We do not wish to simply reproduce stereotyping images. Consequently, we have chosen to obscure the view of the person depicted here. By clicking on the image, you may decide whether you wish to see the photograph of the "Jail Bird in a Peacock Chair" in its entirety.',
          },
          coverImage: {
            src: 'Kapitel 2 Wie alles A-cover.jpg',
          }
        },
        {
          type: 'text',
          value: {  
            de: 'Die Philippinen waren von 1898 bis 1946 eine Kolonie der USA. Viele amerikanische Tourist*innen reisten dorthin und brachten handgemacht Produkte als Souvenirs zurück in die USA. So auch den Peacock Chair. Von da an erreichte der Stuhl große Bekanntheit, besonders in der Studiofotografie: Mit seiner hohen, geschwungenen Rückenlehne und dem eleganten Unterbau gibt er jeder Person eine erhabene Rahmung.',
            en: 'The Philippines was a colony of the USA from 1898 to 1946. Many American tourists travelled there, bringing hand-made products back to the USA as souvenirs. These included the Peacock Chair. From then on, the chair became very well-known, particularly in studio photography: Its high, curving back and elegant supporting frame provide a noble setting for any sitter.',
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 2 Wie alles B.jpg',
              value: {
                de: `Fotografie eines kleinen Mädchens, auf einem Weidenstuhl stehend, Anfang 20. Jahrhundert.\n© Frank R. Snyder`,
                de: `Portrait photograph of young girl standing on ornate wicker chair, Frank R Snyder, beginning of the 20th century © Miami U. Libraries`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles C.jpg',
              value: {
                de: `Norma Talmadge, 1922\n© James Aabe`,
                en: `Norma Talmadge, 1922\n© James Aabe`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles D.jpg',
              value: {
                de: `Schwarz-Weiß-Porträtfoto eines Mädchens und eines Jungen, Lily Faulkner Studio, um 1900\n© Pioneer Photos - Lucy Rennie, Howard Black & J. P. Johnstone History`,
                de: `Black and white portrait photograph of a girl and a boy, Lily Faulkner Studio, circa 1900\n© Pioneer Photos - Lucy Rennie, Howard Black & J. P. Johnstone History`,
              },
            },
          ],
        },
        {
          type: 'text',
          value: {  
            de: 'Die 1960er-Jahre und die aufkommende Hippie-Bewegung gaben dem Peacock Chair nochmals ein neues Image: An der Westküste der USA konnte der Stuhl in Import-Läden gekauft werden – zusammen mit Sandelholz und anderen Accessoires für einen vermeintlich „asiatischen“ und „meditativen“ Lebensstil. Musik spielte in dieser Zeit eine besonders wichtige Rolle für das richtige Ambiente: Auf zahlreichen Plattencovern wurde der Peacock Chair zum zentralen Motiv.',
            en: 'The 1960s and the rise of the Hippie movement gave the Peacock Chair a new and different image: On the West Coast of the USA, it was possible to purchase the chair in import stores – together with sandalwood and other accessories for a supposedly “Asian”, “meditative” lifestyle. During this period, music played a key role in creating the right ambience, and the Peacock Chair was the central motif on numerous record covers.',
          },
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 2 Wie alles E.jpg',
              value: {
                de: `Al Di Meola, Casino, 1978\n© Columbia Records`,
                en: `Al Di Meola, Casino, 1978\n© Columbia Records`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles F.jpg',
              value: {
                de: `Julio Iglesias, El Amor, 1975\n© Columbia`,
                den: `Julio Iglesias, El Amor, 1975\n© Columbia`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles G.jpg',
              value: {
                de: `James Brown, The Original Disco Man, 1978\n© Polydor Records`,
                en: `James Brown, The Original Disco Man, 1978\n© Polydor Records`,
              },
            },
            {
              src: 'Kapitel 2 Wie alles H.jpg',
              value: {
                de: `Funkadelic: Uncle Jam Wants You, 1979, Artwork\n© Diem M. Jones`,
                en: `Funkadelic: Uncle Jam Wants You, 1979, Artwork\n© Diem M. Jones`,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {  
            de: 'Das Album Cover von Funkadelics „Uncle Jam Wants You“ (1979) ist dabei ein direktes Zitat auf einen wichtigen Be-Sitzer des Stuhls:  1967 erhält der Peacock Chair in den USA eine ganz neue Bedeutung.',
            en: 'The album cover of Funkadelic’s “Uncle Jam wants you” (1979) is a direct quotation from one significant occupant of the chair: In 1967, the Peacock Chair developed a completely new meaning in the USA.',
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
        en: [
          { offset: 0, value: 'A chair becomes' },
          { offset: 0, value: 'a symbol' },
        ],
      },
      content: [
        {
          type: 'fixed',
          image: {
            src: 'Kapitel 3 Sessel Symbol A.jpg',
            value: {
              de: 'Huey P. Newton als „Minster of Defense“; als Foto erstmals publiziert in der Zeitschrift der Black Panther Party am 15. Mai 1967',
              en: 'Huey P. Newton as “Minster of Defense”, first published as a photo in the magazine of the Black Panther Party on 15 May 1967',
            },
          },
          value: null,
          coverImage: null
        },
        {
          type: 'quote',
          value: {
            de: 'Die 1960er-Jahre waren in den USA geprägt von der Bürger*innenrechtsbewegung des Schwarzen Amerikas. Nach Jahrhunderten der Versklavung, Unterdrückung und des Rassismus setzten sich verschiedene Schwarze Gruppierungen für ihre Rechte ein.',
            en: 'The 1960s in the USA were shaped by the Civil Rights Movement of Black America. After centuries of enslavement, oppression and racism, various Black groups were standing up for their rights.'
          }
        },
        {
          type: 'text',
          value: {
            de: 'Als im Februar 1965 der Schwarze Aktivist Malcolm X, einer der Anführer der religiösen und politischen Organisation „Nation of Islam“, ermordet wurde, kam es zu landesweiten Protesten. Hunderte Schwarze Menschen wurden dabei im ganzen Land getötet – von weißen Polizisten. Inspiriert von der Herangehensweise von Malcolm X gründete der Student Huey Percy Newton am 15. Oktober 1966 in Berkeley, Kalifornien mit anderen zusammen die „Black Panthers Party for Self Defense“. 1967 entstand eine Fotografie, die ihn auf einem Peacock Chair thronend zeigt. Sie erschien in der Zeitschrift der Partei am 15. Mai 1967 unter der Überschrift „Minister of Defense“. Unzählige Poster und Kopien haben es zu einem ikonischen Foto werden lassen – bis heute. Es steht symbolisch für den Einsatz Schwarzer Menschen, sich ihre Grundrechte – zur Not auch durch Gewalt – zu erkämpfen.',
            en: `There were nationwide protests when Black activist Malcolm X, one of the leaders of the religious and political organization “Nation of Islam”, was assassinated in February 1965. During these protests, hundreds of Black people were killed across the country – by white policemen. Inspired by the actions of Malcolm X, student Huey Percy Newton joined with others to form the Black Panthers Party for Self Defense in Berkeley, California on October 15, 1966. In 1967, a photograph was taken of him enthroned on a Peacock Chair. Under the headline "Minister of Defense", it appeared in the party's newspaper on May 15, 1967. Countless posters and copies have made it into an iconic photograph - to this day. It symbolizes the Blacks’ commitment to fight for their basic rights – if necessary, even with violence.`
          }
        },
        {
          type: 'text',
          value: {
            de: 'Jo-Ann Morgan, Professorin für African American Studies und Kunstgeschichte hat sich mit dieser Fotografie und ihrer Bedeutung auseinandergesetzt:',
            en: 'Jo-Ann Morgan, Professor of African American Studies and Art History, goes into the context of this photo and its meaning:'
          }
        },
        {
          type: 'video',
          value: {
            de: 'Film Kapitel 3 Sessel Symbol 1 dt UTs.mp4',
            en: 'Film Kapitel 3 Sessel Symbol 1 engl UTs.mp4',
          }
        },
        {
          type: 'text',
          value: {
            de: 'Die Wirkung der ikonischen Fotografie war so stark, dass der Peacock Chair auch als Stellvertreter für Huey P. Newton genutzt wurde. Am 28. Oktober 1967 gerät Newton in eine Polizeikontrolle – eine (bis heute) nicht unübliche Schikane der Polizei gegenüber Schwarzen Menschen. Die Situation eskaliert, es fallen Schüsse. Am Ende ist ein Polizist erschossen, ein zweiter verwundet. Newton selbst kommt mit einer schweren Schussverletzung ins Krankenhaus. Obgleich bei ihm keine Waffe gefunden wird und es keine Zeugen des Vorfalls gibt, wird er für den Mord am Polizisten John Frey angeklagt. Die ikonische Fotografie wird daraufhin von seinen Anhänger*innen bei Demonstrationen für seine Freilassung getragen. Bei öffentlichen Auftritten der Black Panther Party, zum Beispiel bei der „Huey P. Newton Birthday Party“ am 17. Februar 1968 im Auditorium von Oakland, Kalifornien steht ein leerer Peacock Chair als Stellvertreter für Newton auf der Bühne. Vor 5000 Zuschauer*innen, die sich für die Freilassung von Newton einsetzen, wird er als verwaister Thron zum politischen Symbol.',
            en: `The impact of the iconic photograph was so strong that the Peacock Chair was also used as a stand-in for Huey P. Newton. On October 28, 1967, Newton was caught in a police raid – a not uncommon (to this day) police harassment of Black people. The situation escalated; shots were fired. In the end, one policeman was shot dead and a second was wounded. Newton himself was hospitalized with a serious gunshot wound. Although no weapon was found on him and there were no witnesses to the incident, he was charged and indicted for the murder of police officer John Frey. Subsequently, the iconic photograph was carried by his supporters in demonstrations for his release. At public appearances of the Black Panther Party - for example at the "Huey P. Newton Birthday Party" on February 17, 1968 in the auditorium of Oakland, California - an empty Peacock Chair was set on stage as a stand-in for Newton. In front of 5,000 spectators campaigning for Newton's release, the orphaned throne became a political symbol.`
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 3 Sessel Symbol B.jpg',
              value: {
                de: `Huey P. Newtons Geburtstagsfeier am 17. Februar 1968 im Oakland Auditorium während seines Gefängnisaufenthalts. Von links nach rechts: US Congressman Ron Dellums und dessen Sohn, unbekannte Person, Bobby Seale, Mitbegründer der Black Panthers, Stokely Carmichael und Rap Brown vom Student Nonviolent Coordinating Committee, James Forman vom Student Nonviolent Coordinating Committee und Civil Rights sowie eine unbekannte Person. Dazwischen steht stellvertretend für Huey P. Newton der leere Peacock Chair.\n© Gerhard E. Gscheidle`,
                en: `Huey P. Newton’s birthday party in Oakland Auditorium on 17 February 1968 during his imprisonment. From left to right: US Congressman Ron Dellums and his son, unknown person, Bobby Seale, cofounder of the Black Panthers, Stokely Carmichael and Rap Brown from the Student Nonviolent Coordinating Committee, James Forman from the Student Nonviolent Coordinating Committee and Civil Rights as well as an unknown person. In the middle, representing Huey P. Newton, is the empty Peacock Chair.\n© Gerhard E. Gscheidle`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol C.jpg',
              value: {
                de: `September 1968, Oakland, USA: Black Panther halten „Free Huey”-Schilder bei der Kundgebung vor dem Alandea County Courthouse, wo der Verteidugungsminister der Black Panther, Huey P. Newton, vor Gericht steht, angeklagt für den Mord an einem Polizisten aus Oakland.\n© 2022, Stephen Shames / courtesy Galerie Esther Woerdehoff`,
                en: `September, 1968 – Oakland, California, USA: Black Panthers hold Free Huey signs at a rally at the Alameda County Curthouse where Black Panther Minister of Defense, Huey P. Newton, is on trial for killing an Oakland policeman. © 2022, Stephen Shames / courtesy Galerie Esther Woerdehoff`,
              },
            },
          ]
        },
        {
          type: 'text',
          value: {
            de: 'Bis heute wird der Peacock Chair immer wieder als Symbol für den Schwarzen Widerstand von Künstler*innen in Szene gesetzt: Bei Beyoncés „Formation“-Tour (2016) hatte er einen zentralen Platz auf der Bühne, in dem Marvel Hit „Black Panther“ (2018) ist der Thron des Königs von Wakanda inspiriert von dem Peacock Chair.',
            en: `To this day, the Peacock Chair has been staged repeatedly by artists as a symbol of Black resistance: In Beyoncé's "Formation" tour (2016) it took centre stage, in the Marvel hit "Black Panther" (2018), the King of Wakanda’s throne is inspired by the Peacock Chair.`,
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 3 Sessel Symbol D.jpg',
              value: {
                de: `Sängerin Beyoncé mit Tänzerinnen, London, 2016\n©Daniela Vesco`,
                en: `Singer Beyoncé with dancers, London, 2016.\n©Daniela Vesco`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol E.jpg',
              value: {
                de: `„Black Panther“ Filmplakat, 2018\n© Marvel Studios`,
                en: `„Black Panther” movie poster, 2018\n© Marvel Studios`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol F.jpg',
              value: {
                de: `Missy Eliott: This is not a Test, 2003, Artwork\n© Warwick Saint Studio`,
                en: `Missy Eliott: This is not a Test, 2003, Artwork \n© Warwick Saint Studio`,
              },
            },
            {
              src: 'Kapitel 3 Sessel Symbol G.jpg',
              value: {
                de: `Drake, More Life\n© 2017 Young Money Entertainment/Cash Money Records`,
                en: `Drake, More Life\n© 2017 Young Money Entertainment/Cash Money Records`,
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
        en: [
          { offset: .4, value: 'Colonial' },
          { offset: 0, value: 'Entanglements' },
          { offset: 2.5, value: 'Symbolic Power' },
          { offset: 5, value: 'in Europe, too' },
        ],
      },
      content: [
        {
          type: 'text',
          value: {
            de: 'Auch in Europa wird das Symbol des Peacock Chairs genutzt, um an den Kampf zahlreicher Schwarzer Menschen zu erinnern. 2017 jährte sich der Verkauf der ehemaligen Kolonialgebiete der karibischen Virgin Islands von Dänemark an die USA zum 100. Mal. Die Künstlerinnen La Vaughn Belle und Jeannette Ehlers schufen zu diesem Anlass das transatlantische Kunstprojekt „I am Queen Mary“. Im Zentrum: Mary Thomas.',
            en: 'The symbol of the Peacock Chair is used to commemorate many Black people’s struggles in Europe, too. 2017 marked the 100th anniversary of the sale of the Caribbean Virgin Islands, former colonial territories of Denmark, to the United States. Artists La Vaughn Belle and Jeannette Ehlers produced the transatlantic art project "I am Queen Mary" to mark this occasion. At the centre: Mary Thomas.',
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 4 Koloniale A.jpg',
              value: {
                de: `Die Skulptur „I am Queen Mary“ vor dem ehemaligen Lagergebäude der Dänischen Westindienkompanie im Hafen von Kopenhagen, heute die „Royal Casting Collection“, 2018,\n©David Berg`,
                en: `The sculpture “I am Queen Mary” in front of the former warehouse of the Danish West Indies Company in Copenhagen harbour, now the “Royal Casting Collection”, 2018,\n©David Berg`,
              },
            },
            {
              src: 'Kapitel 4 Koloniale B.jpg',
              value: {
                de: `Bei der Einweihung der Skulptur „I am Queen Mary“ vor dem ehemaligen Lagergebäude der Dänischen Westindienkompanie im Hafen von Kopenhagen, heute die „Royal Casting Collection“ am 31. März 2018,\n© Sarah Giersing`,
                en: `At the unveiling of the sculpture “I am Queen Mary” in front of the former warehouse of the Danish West Indies Company in Copenhagen harbour, now the “Royal Casting Collection” on 31 March 2018,\n© Sarah Giersing`,
              },
            },
          ]
        },
        {
          type: 'quote',
          value: {
            de: 'Das Kunstwerk zeigt sie als Kunstfigur auf einem Peacock Chair thronend vor dem Gebäude in Kopenhagen, in dem sich einst der Hauptsitz der Dänischen Westindien-Kompanie befand.',
            en: 'The artwork shows her as a sculptural figure enthroned on a Peacock Chair, set in front of the building in Copenhagen that once housed the headquarters of the Danish West India Company.',
          }
        },
        {
          type: 'text',
          value: {
            de: 'Obgleich die Versklavung von Menschen 1848 in dem dänischen Kolonialgebiet abgeschafft wurde, änderte sich an den Lebens- und Arbeitsbedingungen der Menschen wenig. Am 1. Oktober 1878 führten drei Frauen auf der Insel Saint Croix im karibischen Meer eine Revolte an, um die Verbesserung der Arbeitsbedingungen Schwarzer Menschen auf den Plantagen der weißen zu erkämpfen. Eine von ihnen war Mary Thomas. Für ihre Beteiligung am Aufstand wurde sie zunächst zum Tode verurteilt. Später wurde dies in lebenslange Haft, die sie ab 1882 in Kopenhagen absaß, umgewandelt.',
            en: `Although slavery was abolished in the Danish colonial territory in 1848, people's living and working conditions changed very little. On October 1, 1878, three women led a revolt on the island of Saint Croix in the Caribbean Sea over the working conditions of Blacks on white plantations. One of them was Mary Thomas. Initially, she was sentenced to death for her participation in the revolt. This was later commuted to life imprisonment, which she served in Copenhagen as from 1882.`,
          }
        },
        {
          type: 'text',
          value: {
            de: 'Das Aufbegehren Schwarzer Menschen auf Plantagen ist nur wenigen Personen der weißen Mehrheitsgesellschaft bekannt. Dabei haben sie durch kleine Sabotageakte oder große Revolten immer schon ihr Schicksal in die Hand genommen und sich gewehrt. Die sieben Meter hohe, monumentale Skulptur in Kopenhagen gibt diesem Teil der Geschichte Raum. Sie schafft Bewusstsein in der Öffentlichkeit. ',
            en: 'Only a few people in white majority society are aware of the rebellion of Blacks on plantations. But they have always taken their fate into their own hands and fought back via small acts of sabotage, or in bigger revolts. The seven-metre-high monumental sculpture in Copenhagen creates',
          }
        },
        {
          type: 'text',
          value: {
            de: 'Die Künstlerinnen La Vaughn Belle und Jeannette Ehlers erklären warum sie genau diese Art der Darstellung wählten:',
            en: 'Artists La Vaughn Belle and Jeannette Ehlers explain exactly why they chose this form of representation:',
          }
        },
        {
          type: 'video',
          value: {
            de: 'Film Kapitel 4 Koloniale 1 dt UTs.mp4',
            en: 'Film Kapitel 4 Koloniale 1 engl UTs.mp4',
          }
        },
        {
          type: 'text',
          value: {
            de: 'Der Pfauensessel ist also mehr als nur ein schickes Möbel. Besonders für Schwarze Menschen und People of Color in den USA und in Europa ist er zu einem festen Symbol ihrer politischen Identität geworden. Es ist wichtig, alle Perspektiven eines solchen Objekts zu beleuchten. Auf der einen Seite ist der Peacock Chair auch heute noch ein beliebtes Requisit in der Mode- und Werbefotografie. Auch auf Social Media ist der ikonische Sessel erfolgreich: Das Hashtag „Peacockchair“ hat über 100.000 Einträge auf Instagram. Auf der anderen Seite lassen sich an ihm die kolonialen Verflechtungen – von Ausbeutung, kultureller Aneignung und Aufbegehren – und ihre globalen Auswirkungen bis heute verdeutlichen – von Politik bis Popkultur.',
            en: 'The Peacock Chair, therefore, is more than just a chic item of furniture. Especially for Blacks and people of colour in the USA and Europe, it has developed into a firm symbol of their political identity. It is important to shed light on every perspective of such an object. On the one hand, the Peacock Chair is still a popular prop in fashion and advertising photography. The iconic chair is also successful on social media: the hashtag "Peacockchair" uncovers 100,000 entries on Instagram. On the other hand, it can be used to illustrate colonial entanglements – those of exploitation, cultural appropriation and rebellion, and their enduring global impact in fields ranging from politics to Pop culture, even today.',
          }
        },
        {
          type: 'images',
          images: [
            {
              src: 'Kapitel 4 Koloniale C.jpg',
              value: {
                de: `Michelle Obama bei ihrem Abschlussball, 1982\n©Courtesy of Michelle Obama`,
                en: `Michelle Obama at her prom 1982\n©Courtesy of Michelle Obama`,
              }
            },
            {
              src: 'Kapitel 4 Koloniale D.jpg',
              value: {
                de: `Schauspielerin Kristin Davis in einer Modestrecke für Instyle Magazine, 2011\n©Instyle Magazine`,
                en: `Actress Kristin Davis modelling the spring collection for Instyle Magazine, 2011\n©Instyle Magazine`,
              },
            },
            {
              src: 'Kapitel 4 Koloniale E.jpg',
              value: {
                de: `Model Claudia Schiffer auf dem Cover des ZEITmagazins Nr. 42, 2010\n©Frederike Helwig/ ZEITmagazin`,
                en: `Model Claudia Schiffer on the cover of ZEITmagazin issue 42, 2010\n©Frederike Helwig/ ZEITmagazin`,
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
