// Тексты сайта на четырёх языках
const T = {
  ru: {
    nav_home: "Главная", nav_privacy: "Конфиденциальность", nav_support: "Поддержка",
    tagline: "Готовим по сезону",
    lead: "Рецепты, которые идут за календарём: что созрело в этом месяце — то и на столе. И личная книга рецептов для всех ваших любимых блюд.",
    soon: "Скоро в App Store", get: "Скачать в App Store",
    f1_t: "Рецепты по месяцам", f1_d: "Каждый месяц — новая коллекция блюд из того, что сейчас в сезоне.",
    f2_t: "Ваша книга рецептов", f2_d: "Сохраняйте свои рецепты с фото и шагами, отмечайте любимые.",
    f3_t: "Список покупок", f3_d: "Продукты из рецептов сами собираются в список и раскладываются по разделам.",
    langs: "Русский · English · Беларуская · Polski",

    pp_title: "Политика конфиденциальности", updated: "Обновлено: 16 октября 2026",
    pp_intro: "Twelve Geese — приложение с сезонными рецептами. Мы бережно относимся к вашим данным и собираем как можно меньше.",
    pp_h1: "Какие данные мы собираем", pp_p1: "Мы не собираем персональные данные. В приложении нет регистрации, рекламы, аналитики и отслеживания.",
    pp_h2: "Где хранятся ваши рецепты", pp_p2: "Ваши рецепты, фото, избранное и список покупок хранятся только на вашем устройстве. У нас нет к ним доступа.",
    pp_h3: "Фото и камера", pp_p3: "Приложение просит доступ к фото или камере только тогда, когда вы сами добавляете фото к рецепту. Фото остаются на вашем устройстве.",
    pp_h4: "Подписка", pp_p4: "Оплата подписки проходит через Apple. Мы не получаем ваши платёжные данные — их обрабатывает Apple по своей политике конфиденциальности.",
    pp_h5: "Когда вы делитесь рецептом", pp_p5: "Рецепт отправляется через стандартное меню «Поделиться» в приложение, которое вы выбрали. Мы его не храним и не видим.",
    pp_h6: "Дети", pp_p6: "Приложение не собирает данные детей.",
    pp_h7: "Ваши права", pp_p7: "Поскольку мы не храним ваши данные, они удаляются вместе с приложением. С любыми вопросами пишите на {email}.",
    pp_h8: "Изменения", pp_p8: "Если политика изменится, мы обновим эту страницу и дату вверху.",

    sp_title: "Поддержка", sp_lead: "Есть вопрос, идея или что-то работает не так? Напишите — обязательно ответим.",
    sp_btn: "Написать нам", sp_faq: "Частые вопросы",
    q1: "Что бесплатно, а что по подписке?", a1: "Бесплатно — Рецепт недели, 3 сезонных рецепта в месяц и до 10 своих рецептов. Подписка открывает все сезонные коллекции и безлимитное число своих рецептов.",
    q2: "Как отменить подписку?", a2: "На iPhone: Настройки → ваше имя → Подписки → Twelve Geese → Отменить подписку.",
    q3: "Сменила телефон — как вернуть подписку?", a3: "Войдите в тот же Apple ID и нажмите «Восстановить покупки» в настройках приложения.",
    q4: "Как вернуть деньги?", a4: "Возвраты оформляет Apple на сайте <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>."
  },

  en: {
    nav_home: "Home", nav_privacy: "Privacy", nav_support: "Support",
    tagline: "Cooking with the seasons",
    lead: "Recipes that follow the calendar: whatever ripens this month ends up on the table. Plus a personal recipe book for all your favourite dishes.",
    soon: "Coming soon to the App Store", get: "Download on the App Store",
    f1_t: "Recipes by month", f1_d: "Every month brings a new collection of dishes made from what’s in season right now.",
    f2_t: "Your recipe book", f2_d: "Save your own recipes with photos and steps, and mark your favourites.",
    f3_t: "Shopping list", f3_d: "Ingredients from recipes gather into one list, sorted by aisle.",
    langs: "Русский · English · Беларуская · Polski",

    pp_title: "Privacy Policy", updated: "Last updated: 16 October 2026",
    pp_intro: "Twelve Geese is a seasonal recipe app. We care about your data and collect as little as possible.",
    pp_h1: "What data we collect", pp_p1: "We don’t collect personal data. The app has no sign-up, no ads, no analytics and no tracking.",
    pp_h2: "Where your recipes are stored", pp_p2: "Your recipes, photos, favourites and shopping list are stored only on your device. We have no access to them.",
    pp_h3: "Photos and camera", pp_p3: "The app asks for access to your photos or camera only when you add a photo to a recipe yourself. Photos stay on your device.",
    pp_h4: "Subscription", pp_p4: "Subscriptions are paid through Apple. We never receive your payment details — Apple handles them under its own privacy policy.",
    pp_h5: "Sharing a recipe", pp_p5: "A shared recipe is sent through the standard iOS Share menu to the app you choose. We don’t store or see it.",
    pp_h6: "Children", pp_p6: "The app does not collect any data from children.",
    pp_h7: "Your rights", pp_p7: "Since we don’t store your data, it is removed together with the app. For any questions, write to {email}.",
    pp_h8: "Changes", pp_p8: "If this policy changes, we’ll update this page and the date at the top.",

    sp_title: "Support", sp_lead: "Have a question, an idea, or something isn’t working? Write to us — we’ll get back to you.",
    sp_btn: "Email us", sp_faq: "FAQ",
    q1: "What’s free and what’s in the subscription?", a1: "Free: the Recipe of the Week, 3 seasonal recipes a month and up to 10 of your own recipes. The subscription unlocks all seasonal collections and unlimited own recipes.",
    q2: "How do I cancel my subscription?", a2: "On iPhone: Settings → your name → Subscriptions → Twelve Geese → Cancel Subscription.",
    q3: "New phone — how do I get my subscription back?", a3: "Sign in with the same Apple ID and tap “Restore Purchases” in the app settings.",
    q4: "How do I get a refund?", a4: "Refunds are handled by Apple at <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>."
  },

  be: {
    nav_home: "Галоўная", nav_privacy: "Канфідэнцыяльнасць", nav_support: "Падтрымка",
    tagline: "Гатуем па сезоне",
    lead: "Рэцэпты, якія ідуць за календаром: што саспела ў гэтым месяцы — тое і на стале. І асабістая кніга рэцэптаў для ўсіх вашых любімых страў.",
    soon: "Хутка ў App Store", get: "Спампаваць у App Store",
    f1_t: "Рэцэпты па месяцах", f1_d: "Кожны месяц — новая калекцыя страў з таго, што цяпер у сезоне.",
    f2_t: "Ваша кніга рэцэптаў", f2_d: "Захоўвайце свае рэцэпты з фота і крокамі, адзначайце любімыя.",
    f3_t: "Спіс пакупак", f3_d: "Прадукты з рэцэптаў самі збіраюцца ў спіс і раскладваюцца па раздзелах.",
    langs: "Русский · English · Беларуская · Polski",

    pp_title: "Палітыка канфідэнцыяльнасці", updated: "Абноўлена: 16 кастрычніка 2026",
    pp_intro: "Twelve Geese — праграма з сезоннымі рэцэптамі. Мы беражліва ставімся да вашых даных і збіраем як мага менш.",
    pp_h1: "Якія даныя мы збіраем", pp_p1: "Мы не збіраем персанальныя даныя. У праграме няма рэгістрацыі, рэкламы, аналітыкі і адсочвання.",
    pp_h2: "Дзе захоўваюцца вашы рэцэпты", pp_p2: "Вашы рэцэпты, фота, абранае і спіс пакупак захоўваюцца толькі на вашай прыладзе. У нас няма да іх доступу.",
    pp_h3: "Фота і камера", pp_p3: "Праграма просіць доступ да фота або камеры толькі тады, калі вы самі дадаеце фота да рэцэпта. Фота застаюцца на вашай прыладзе.",
    pp_h4: "Падпіска", pp_p4: "Аплата падпіскі праходзіць праз Apple. Мы не атрымліваем вашы плацёжныя даныя — іх апрацоўвае Apple паводле сваёй палітыкі канфідэнцыяльнасці.",
    pp_h5: "Калі вы дзеліцеся рэцэптам", pp_p5: "Рэцэпт адпраўляецца праз стандартнае меню «Абагуліць» у праграму, якую вы абралі. Мы яго не захоўваем і не бачым.",
    pp_h6: "Дзеці", pp_p6: "Праграма не збірае даныя дзяцей.",
    pp_h7: "Вашы правы", pp_p7: "Паколькі мы не захоўваем вашы даныя, яны выдаляюцца разам з праграмай. З любымі пытаннямі пішыце на {email}.",
    pp_h8: "Змены", pp_p8: "Калі палітыка зменіцца, мы абновім гэтую старонку і дату ўверсе.",

    sp_title: "Падтрымка", sp_lead: "Ёсць пытанне, ідэя ці нешта працуе не так? Напішыце — абавязкова адкажам.",
    sp_btn: "Напісаць нам", sp_faq: "Частыя пытанні",
    q1: "Што бясплатна, а што па падпісцы?", a1: "Бясплатна — Рэцэпт тыдня, 3 сезонныя рэцэпты ў месяц і да 10 сваіх рэцэптаў. Падпіска адкрывае ўсе сезонныя калекцыі і неабмежаваную колькасць сваіх рэцэптаў.",
    q2: "Як скасаваць падпіску?", a2: "На iPhone: Налады → ваша імя → Падпіскі → Twelve Geese → Скасаваць падпіску.",
    q3: "Змяніла тэлефон — як вярнуць падпіску?", a3: "Увайдзіце ў той жа Apple ID і націсніце «Аднавіць пакупкі» ў наладах праграмы.",
    q4: "Як вярнуць грошы?", a4: "Вяртанні афармляе Apple на сайце <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>."
  },

  pl: {
    nav_home: "Strona główna", nav_privacy: "Prywatność", nav_support: "Pomoc",
    tagline: "Gotujemy z porami roku",
    lead: "Przepisy, które podążają za kalendarzem: co dojrzało w tym miesiącu, trafia na stół. Do tego osobista książka kucharska na wszystkie ulubione dania.",
    soon: "Wkrótce w App Store", get: "Pobierz z App Store",
    f1_t: "Przepisy na każdy miesiąc", f1_d: "Co miesiąc nowa kolekcja dań z tego, co właśnie jest w sezonie.",
    f2_t: "Twoja książka przepisów", f2_d: "Zapisuj własne przepisy ze zdjęciami i krokami, oznaczaj ulubione.",
    f3_t: "Lista zakupów", f3_d: "Składniki z przepisów same trafiają na listę i układają się według działów.",
    langs: "Русский · English · Беларуская · Polski",

    pp_title: "Polityka prywatności", updated: "Ostatnia aktualizacja: 16 października 2026",
    pp_intro: "Twelve Geese to aplikacja z sezonowymi przepisami. Dbamy o Twoje dane i zbieramy ich jak najmniej.",
    pp_h1: "Jakie dane zbieramy", pp_p1: "Nie zbieramy danych osobowych. W aplikacji nie ma rejestracji, reklam, analityki ani śledzenia.",
    pp_h2: "Gdzie przechowywane są Twoje przepisy", pp_p2: "Twoje przepisy, zdjęcia, ulubione i lista zakupów są przechowywane wyłącznie na Twoim urządzeniu. Nie mamy do nich dostępu.",
    pp_h3: "Zdjęcia i aparat", pp_p3: "Aplikacja prosi o dostęp do zdjęć lub aparatu tylko wtedy, gdy sam(a) dodajesz zdjęcie do przepisu. Zdjęcia pozostają na Twoim urządzeniu.",
    pp_h4: "Subskrypcja", pp_p4: "Płatności za subskrypcję obsługuje Apple. Nie otrzymujemy Twoich danych płatniczych — Apple przetwarza je zgodnie z własną polityką prywatności.",
    pp_h5: "Udostępnianie przepisu", pp_p5: "Przepis jest wysyłany przez standardowe menu „Udostępnij” do wybranej przez Ciebie aplikacji. Nie przechowujemy go i go nie widzimy.",
    pp_h6: "Dzieci", pp_p6: "Aplikacja nie zbiera danych dzieci.",
    pp_h7: "Twoje prawa", pp_p7: "Ponieważ nie przechowujemy Twoich danych, są one usuwane razem z aplikacją. W razie pytań napisz na {email}.",
    pp_h8: "Zmiany", pp_p8: "Jeśli polityka się zmieni, zaktualizujemy tę stronę i datę na górze.",

    sp_title: "Pomoc", sp_lead: "Masz pytanie, pomysł albo coś nie działa? Napisz — na pewno odpowiemy.",
    sp_btn: "Napisz do nas", sp_faq: "Częste pytania",
    q1: "Co jest za darmo, a co w subskrypcji?", a1: "Za darmo: Przepis tygodnia, 3 sezonowe przepisy w miesiącu i do 10 własnych przepisów. Subskrypcja odblokowuje wszystkie sezonowe kolekcje i nielimitowane własne przepisy.",
    q2: "Jak anulować subskrypcję?", a2: "Na iPhonie: Ustawienia → Twoje imię → Subskrypcje → Twelve Geese → Anuluj subskrypcję.",
    q3: "Nowy telefon — jak odzyskać subskrypcję?", a3: "Zaloguj się tym samym Apple ID i stuknij „Przywróć zakupy” w ustawieniach aplikacji.",
    q4: "Jak uzyskać zwrot pieniędzy?", a4: "Zwroty obsługuje Apple na stronie <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>."
  }
};

(function () {
  const cfg = window.LS_CONFIG || {};
  const mail = `<a href="mailto:${cfg.email}">${cfg.email}</a>`;

  function pick() {
    try { const s = localStorage.getItem("ls-lang"); if (T[s]) return s; } catch (e) {}
    const n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return T[n] ? n : (n === "uk" ? "ru" : "en");
  }

  function apply(lang) {
    const d = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = d[el.dataset.i18n];
      if (v != null) el.innerHTML = v.replace("{email}", mail);
    });
    document.querySelectorAll("[data-lang]").forEach(b =>
      b.setAttribute("aria-pressed", b.dataset.lang === lang));
    const t = document.querySelector("[data-title]");
    if (t) document.title = d[t.dataset.title] + " — Twelve Geese";
    document.querySelectorAll("[data-mailto]").forEach(a => a.href = "mailto:" + cfg.email);
    const store = document.getElementById("store");
    if (store) {
      if (cfg.appStoreUrl) { store.href = cfg.appStoreUrl; store.innerHTML = d.get; store.classList.remove("soon"); }
      else { store.removeAttribute("href"); store.innerHTML = d.soon; store.classList.add("soon"); }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let lang = pick();
    apply(lang);
    document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try { localStorage.setItem("ls-lang", lang); } catch (e) {}
      apply(lang);
    }));
  });
})();
