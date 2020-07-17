const translations = {
    hu: {
        home: {
            title: "Ingyen Minecraft Hosting",
            subtitle: "A hosting a szakma; a boldog ügyfelek a prioritások. Célunk, hogy a legmagasabb színvonalú Minecraft szervereket biztosítsuk a piacon a legújabb technológiák felhasználásával.",
            button_register: "Regisztráció",
            button_dashboard: "Irányítópult",
            nav_contact: "Kapcsolatfelvétel",
            nav_panel: "Panel",
            nav_dashboard: "Ügyfelek területe",
            nav_button: "Regisztráció",
            plans_title: "Más tervek",
            plans_subtitle: "A Minecraft szervereket mind az SSD-tárolón tartjuk az alapoktól kezdve. Az MChost segítségével élvezheti a fokozott teljesítményt, megfelelést és teljes ellenőrzést a szerver felett.",
            plan_free_title: "Ingyen",
            plan_premium_title: "Prémium",
            plan_bungee_title: "Bungee Csomag",
            plan_custom_title: "Egyedi",
            plan_free_plugins: "Korlátlan Pluginok",
            plan_free_players: "Korlátlan Férőhely",
            plan_free_nolimit: "Nincs férőhely vagy plugin limit",
            plan_free_online: "24/7 elérhető, nincs várakozás",
            plan_dedicated_ports: "%s dedikált portok",
            plan_online: "elérhető",
            plan_custom_ports: "portok",
            plan_free_get: "Regisztráció",
            plan_premium_get: "Szerezd meg a Prémiumot",
            plan_bungee_get: "Szerezd meg a Csomagot",
            plan_custom_get: "Szerezd meg a Sajátod",
            plan_free_support: "Döbbenetes technikai segítség",
            plan_premium_support: "Elszánt technikai segítség",
            plan_bungee_support: "Elsőbbségi technikai segítség",
            features_title: "Miért olyan jó?",
            features_subtitle: "Mert arra törekedtünk, hogy a legjobbat kínáljuk az Ön számára.",
            features_support_title: "Élő segítség",
            features_support_subtitle: 'Támogató csapatunk élőben él <a href="%s" class="text-white text-underline" target="_blank">Discord szerveren</a> bármikor segíthetünk!',
            features_uptime_title: "99% Elérhető",
            features_uptime_subtitle: 'De ne vesztegessük a szót. Nézd meg <a href="%s" class="text-white text-underline" target="_blank">itt</a>.',
            features_tech_title: "Első élő technológia",
            features_tech_subtitle: "Folyamatosan korszerűsítjük szolgáltatásainkat annak érdekében, hogy szerverek naprakészek és a lehető leggyorsabbak legyenek.",
            features_title2: "Az összes csomaggal együtt",
            features_subtitle2: "Ezek az összes általunk kínált Minecraft csomag alapvető jellemzői.",
            features_ddos_title: "DDoS védelem",
            features_ddos_subtitle: "A 7. réteg fordított proxyit használjuk az elosztott szolgáltatásmegtagadási támadások könnyed ellenállására és ellensúlyozására.",
            features_disk_title: "NVMe SSD",
            features_disk_subtitle: "A szerver indításához szükséges idő közvetlenül a lemeztől függ. Ezért van nekünk a legjobb.",
            features_scalability_title: "Skálázhatóság",
            features_scalability_subtitle: "Vezérlőpultunk segítségével néhány kattintással bármikor frissítheti szerverét. Kezdje azzal, amire szüksége van, és lépjen az erősebbre, ha a játékosok száma növekszik.",
            features_panel_title: "Pterodactyl Vezérlő Panel",
            features_panel_subtitle: "A multi-szerver menedzsment még soha nem volt ilyen egyszerű a Pterodactyl webes panelen. Közvetlen hozzáférés a fájlokhoz, a szerver terminálhoz és az alfelhasználókhoz.",
            features_sftp_title: "SFTP",
            features_sftp_description: "Az MChostnál a biztonságot soha nem hagyják figyelmen kívül. Az általunk megvalósított biztonságos fájlátviteli protokoll lehetővé teszi az adatok bárhonnan, biztonságos kezelését.",
            features_scheduler_title: "Feladat ütemező",
            features_scheduler_subtitle: "A CRON használatával lehetővé válik a szerveren végzett tevékenységek ütemezése, például a rendszeres újraindítás vagy bármilyen más parancs.",
            about_title: "Rólunk",
            about_subtitle: "Igényesek vagyunk és elkötelezettek vagyunk abban, hogy a lehető legjobb és legmagasabb színvonalú, emberi szempontból lehetséges kiszolgálókat biztosítsuk. Éjjel-nappal azon dolgoztunk, hogy a lehető legjobb csomópontokat állítsuk be, hogy zökkenőmentes és kellemes játékot élvezhessünk barátaiddal a Minecraft szerverén.",
            reviews_title: "Értékelések",
            reviews_subtitle: "Ne vegye figyelembe a szót, hogy milyen nagyszerű. Íme, amit ügyfeleink mondnak!",
            review1_title: "Nem fogok hazudni, ez a hosting a legjobb",
            review1_text: "Ez a legjobb hosting, amit használtam. A teljesítmény szintén a legnagyobb, még akkor is, ha szervere nem sok RAM-mal működik.",
            review2_title: "Nagyon jó hosting",
            review2_text: "A hosting nagyon jó! Nincs késés, nincs TPS 19,9 alatt. Ez nagyszerű!",
            review3_title: "Legjobb hosting",
            review3_text: "Ez az egyik legjobb hosting szolgáltatás, amelyben valaha találkoztam, és örülök, hogy megtaláltam. Határozottan megmentett nekem néhány dollárt!",
            review4_title: "Elképesztő",
            review4_text: "Ők adnak SFTP-t és webes panelt. Nem olyan, mint más szolgáltatások, amelyek nagyban korlátozzák a teendőit. Ez olyan, mintha megfelelő szervert vásárolt volna. Nagyon örülök, hogy ezt megtaláltam.",
            panel_title: "Közreműködő Pterodactyl",
            panel_subtitle: "A Pterodactyl a legjobb Minecraft szerverkezelő központ, amelyet a biztonság szem előtt tartásával terveztek, és az összes kiszolgálót elkülönített Docker-tárolókban futtatja, miközben egy gyönyörű és intuitív felhasználói felületet fed le.",
            need_support: 'Még mindig információt keres? <a href="%s">Kérjen segítséget itt</a> vagy csatlakozzon a mi <a href="%s" target="_blank">Discord szerverükre</a>.',
            start_title: "Kezd el a szervered még ma!",
            start_subtitle: "Mire vársz? Ez ingyenes!",
            support_title: "Élő szakértői segítség",
            support_subtitle: 'Azonnal segítségre van szüksége, vagy csak pár kérdést szeretne feltenni? <a href="https://discord.gg/Wx95Nx3" target="_blank">Csatlakozz Discord szerverünkre</a> és élőben cseveghet egy segítőtársunkal. E-mailt is küldhet nekünk a <a href="mailto:support@mchost.cc">support@mchost.cc</a> bármikor írhat.',
            footer_information: "Információ",
            footer_pages: "Oldalak",
            footer_more: "Több",
            footer_page_terms: "Használati feltételek",
            footer_page_privacy: "Adatvédelmi irányelvek",
            footer_page_mc: "Minecraft Hosting",
            footer_page_pricing: "Árazás",
            footer_page_order: "Rendelés",
            footer_page_blog: "Blog",
            footer_powered: "Powered by",
            footer_copyright: "All Rights Reserved."
        },
        contact: {
            title: "Lépjen kapcsolatba velünk",
            field_name: "Név",
            placeholder_name: "Kérem írja be a nevét",
            field_organisation: "Intézmény",
            placeholder_organisation: "Kérjük, írja be a szervezet nevét",
            field_email: "Email",
            placeholder_email: "Kérem, írja be az e-mail címét",
            field_phone: "Telefonszám",
            placeholder_phone: "Kérjük, írja be telefonszámát",
            field_message: "Üzenet",
            placeholder_message: "Üzenet nekünk",
            button_send: "Üzenet küldése",
            note: '* Ezekre a mezőkre van szükség. Beküldésével elfogadja a <a href="%s" target="_blank">Használati feltételeket</a>.'
        },
        hosting: {
            title: "Minecraft Hosting",
            subtitle: "2 GB RAM ingyenes Minecraft hosting. 100% NVMe SSD tároló, 24/7 fel, nincs hülye sor, nincs játékos korlátozás, nincs plugin korlátozás, bármilyen Minecraft verzió, amely tetszik! Kezdje el most ingyen!",
            plan_traffic: "Korlátlan forgalom",
            plan_ddos: "7. réteg DDoS védelem"
        },
        order: {
            title: "Rendelés",
            field_name: "Név",
            placeholder_name: "Kérjük írja be a nevét",
            field_email: "Email",
            placeholder_email: "Kérjük írja be az e-mail címét",
            field_pp_email: "PayPal E-mail",
            field_more: "További utasítások",
            button: "Kérjen megrendelést",
            note: '* Ezekre a mezőkre van szükség. Beküldésével elfogadja a <a href="%s" target="_blank">Használati feltételeket</a>.'
        },
        support: {
            title: "segítség",
            subtitle: "Bárhol elérhet minket. Itt van néhány lehetőség!",
            faq_title: "Gyakran Ismételt Kérdések",
            faq_text: "Nézze meg tudásbázisunkat, mielőtt kérdést feltenne. Lehet, hogy már megválaszolták az Ön számára.",
            dc_title: "Discord Élő segítség",
            dc_text: "Kattintson az alábbi gombra, hogy csatlakozzon a Discord szerverhez és kérjen segítséget.",
            email_title: "E-mail",
            email_text: 'E-mail nekünk <a href="mailto:support@mchost.cc">support@mchost.cc</a> és egy képviselő 12 órán belül felveszi Önnel a kapcsolatot!',
            form_title: "Kapcsolatfelvételi űrlap",
            form_text: "Vagy küldjön egy üzenetet nekünk a kapcsolatfelvételi űrlapon keresztül."
        },
        arc_earn: {
            title: "Keress kreditet",
            subtitle: "Olyan krediteket szerezhet, amelyek felhasználhatók extra forrásokra, ha egy lapot tétlenít. Óránként 1 jóváírást kap.",
            label: "KÉRJÜK ÍRJON BE EGYET A KÖVETKEZŐKBŐL",
            placeholder: "Discord ID, Client ID vagy panel név",
            get_dc: "Szerezd meg a saját Discord ID-det",
            get_panel: "Szerezd meg a saját felhasználónevedet",
            get_cid: "Szerezd meg a saját Client ID-det",
            unsure: 'Nem biztos benne, hogyan lehet ezt megszerezni? <a href="$s" target="_blank">Lépjen kapcsolatba velünk</a>.',
            keep_open: "Tartsa nyitva ezt az oldalt, hogy krediteket szerezzen!",
            earned: 'Összesen szerzet kredit: <b class="kredit">%s</b> credits',
            btn_quit: "Kilépés",
            btn_refresh: "Újratöltés",
            btn_blank: "Üres",
            text: 'Tartsa nyitva ezt az oldalt, és óránként 1 jóváírást kap. Ha bezárja az oldalt, 5 perce van arra, hogy újra megnyissa, mielőtt a munkamenet visszaállna. Ha óránként több kreditet szeretne szerezni, kérjük, kövesse <a href="%s" target="_blank">ezt a tutorialt</a>.',
            video_subtitle: "Jutalmakat kaphat, amelyek felhasználhatók extra forrásokhoz, ha megnézzük a jutalmazott videohirdetéseket.",
            short_title: "Jóváírást kap ingyen!",
            short_new: 'Nyissa meg ezt az URL-t <a href="%s">%s</a> és szerezzen más jutalmat!',
            short_success: "Sikeresen igényelted a jutalmat!",
            short_error_title: "Hiba!",
            short_error_text: "A hashért járó jutalmat már igényelték, vagy nem létezik.",
            short_error_new: 'Nem igényelt URL, különösen az Ön számára: <a href="%s">%s</a>'
        },
        gdpr: {
            text: "Webhelyünk sütiket használ. Kérjük, olvassa el az adatvédelmi irányelveinket további információkért.",
            accept: "Elfogadás",
            privacy: "Adatvédelmi irányelvek"
        },
        dashboard: {
            welcome: "Üdvözöljük az irányítópulton!",
            btn_panel: "Vezérlő Panel",
            btn_logout: "Kijelentkezés",
            servers: "Szerverek",
            server_create: "Szerver létrehozása",
            server_name: "Név",
            server_actions: "Akciók",
            server_unlimited: "Korlátlan",
            balance: "MChost Egyenleg",
            balance_text: "Credits Elérhető",
            balance_add: "Hozzáad",
            balance_store: "Bolt",
            balance_send: "Utalás",
            create_title: "Szerver létrehozása",
            create_name: "Szerver neve",
            create_quota: "A te felhasználható RAM-od %s MB",
            create_location: "Hely",
            create_type: "Szerver típus",
            create_btn: "Készítés!",
            btn_close: "Bezárás",
            panel_title: "Bejelentkezés a Panelba",
            panel_subtitle: "Ez az alapértelmezett hitelesítő adat, amellyel beléphet a vezérlőpultba. Felhívjuk figyelmét, hogy ha megváltoztatja őket, itt sem frissülnek.",
            panel_username: "Felhasználónév",
            panel_pass: "Jelszó",
            panel_show_pass: "Jelszó mutatása",
            btn_login: "Bejelentkezés",
            panel_open: "Panel Megnyitása",
            add_title: "Kredit szerzés",
            add_buy: "Kredit vásárlás",
            add_buy_sub: "Töltse fel számláját kreditekkel PayPal vagy betéti kártya segítségével.",
            credits: "Kreditek",
            add_buy_buy: "Következő",
            add_giftcard: "Ajándékkártya beváltása",
            add_giftcard_sub: "Beválthatja az MChost ajándékkártya kódját, hogy további krediteket szerezzen!",
            gift_card: "Ajándék kártya",
            add_giftcard_btn: "Beváltás",
            add_idle: "Üresjárat",
            add_idle_sub: "Ingyenes kreditet kereshet, ha alapjárati oldalunkat nyitva tartja böngészőjében.",
            add_idle_btn: "Menj alapjáratba",
            add_app: "Nézze meg a hirdetést <small>(Android)</small>",
            add_app_sub: "Ingyenes kreditet kaphat egy hirdetési videó megtekintéséért mobilalkalmazásunkban.",
            add_app_btn: "Letöltés",
            add_vid: "Nézze meg a hirdetéseket <small>(Desktop)</small>",
            add_vid_sub: "Emellett megnézheti hirdetéseit a PC-böngészőben, hogy extra krediteket szerezzen.",
            add_vid_btn: "Nézés",
            add_short: "Rövid URLs",
            add_short_sub: "Kattintson az alábbi gombra, hogy ingyenes krediteket kapjon",
            add_short_btn: "Megy"
        }
    }
}
