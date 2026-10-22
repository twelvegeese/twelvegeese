// Тексты сайта на четырёх языках
const T = {
 "ru": {
  "nav_home": "Главная",
  "nav_privacy": "Конфиденциальность",
  "nav_support": "Поддержка",
  "tagline": "Готовим по сезону",
  "lead": "Рецепты, которые идут за календарём: что созрело в этом месяце — то и на столе. И личная книга рецептов для всех ваших любимых блюд.",
  "soon": "Скоро в App Store",
  "get": "Скачать в App Store",
  "f1_t": "Рецепты по месяцам",
  "f1_d": "Каждый месяц — новая коллекция блюд из того, что сейчас в сезоне.",
  "f2_t": "Ваша книга рецептов",
  "f2_d": "Сохраняйте свои рецепты с фото и шагами, отмечайте любимые.",
  "f3_t": "Список покупок",
  "f3_d": "Продукты из рецептов сами собираются в список и раскладываются по разделам.",
  "langs": "English · Polski · Беларуская · Русский",
  "pp_title": "Политика конфиденциальности",
  "updated": "Обновлено: 22 октября 2026",
  "pp_intro": "Twelve Geese — приложение с сезонными рецептами и личная книга рецептов для iPhone. Коротко: в приложении нет аккаунтов и нашего сервера для ваших рецептов — мы не видим вашу книгу. Ниже приложение и этот сайт описаны отдельно.",
  "pp_h1": "Какие данные собирает приложение",
  "pp_p1": "Через приложение мы не собираем персональные данные. В нём нет регистрации, рекламы, аналитики и отслеживания, нет сторонних библиотек аналитики и рекламы.",
  "pp_h2": "Ваша книга остаётся на iPhone",
  "pp_p2": "Ваши рецепты и их фото, заметки, избранное, план «Готовлю», календарь приготовленного и список покупок хранятся только на вашем устройстве. У нас нет к ним доступа. Если включена резервная копия iCloud или на компьютер, iOS добавляет эти данные в вашу собственную копию, которой управляет Apple. Если удалить приложение, его данные удаляются с устройства. Можно сохранить и свой файл резервной копии в приложении (Настройки → Резервная копия книги) и самим выбрать, где его хранить.",
  "pp_h3": "Камера, фото и «Напоминания»",
  "pp_p3": "Приложение просит камеру, только когда вы снимаете блюдо или страницу, использует только те фото, которые вы выбрали сами, и просит доступ к «Напоминаниям», только если вы отправляете туда список покупок. Разрешения можно изменить в Настройках iPhone в любой момент.",
  "pp_hi": "Импорт рецептов",
  "pp_pi": "<b>По ссылке:</b> iPhone открывает страницу рецепта напрямую, как браузер, и сохраняет рецепт, главное фото и ссылку. Сайт видит обычный запрос с вашего устройства, через нас ничего не проходит.<br><b>Из Instagram, TikTok, Facebook, YouTube, Pinterest:</b> через «Поделиться → Twelve Geese» приложение получает только ссылку и текст, если другое приложение передало его вместе со ссылкой. Само приложение публикации в соцсетях не открывает и не читает — текст рецепта или скриншот добавляете вы.<br><b>С фото и скриншотов:</b> текст распознаётся на вашем устройстве, снимки никуда не отправляются.<br><b>Вставка текста:</b> приложение читает буфер обмена, только когда вы нажимаете «Вставить» или «Вставить текст».",
  "pp_h4": "Подписка",
  "pp_p4": "Оплата и управление подпиской проходят через Apple. Мы не получаем ваши платёжные данные. Приложение проверяет подписку на вашем устройстве средствами Apple; нам Apple показывает только отчёты о продажах, по которым вас нельзя узнать. Условия подписки — <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">стандартное лицензионное соглашение Apple (EULA)</a>.",
  "pp_h5": "Когда вы делитесь рецептом",
  "pp_p5": "Рецепт уходит через стандартное меню «Поделиться» в то приложение и тем людям, которых вы выбрали. Мы его не храним и не видим.",
  "pp_h6": "Дети",
  "pp_p6": "Приложение не собирает персональные данные ни у кого, в том числе у детей.",
  "pp_h7": "Ваши права",
  "pp_p7": "Данные приложения хранятся только на вашем устройстве, поэтому вы управляете ими сами: можете изменить, сохранить копию или удалить вместе с приложением. С любым вопросом о данных пишите на {email}. Вы также можете обратиться в орган по защите персональных данных своей страны.",
  "pp_h8": "Изменения",
  "pp_p8": "Если приложение или эта политика изменятся, мы обновим эту страницу и дату вверху.",
  "sp_title": "Поддержка",
  "sp_lead": "Есть вопрос, идея или что-то работает не так? Напишите — обязательно ответим.",
  "sp_btn": "Написать нам",
  "sp_faq": "Частые вопросы",
  "q1": "Что бесплатно, а что по подписке?",
  "a1": "Бесплатно — Рецепт недели, 3 сезонных рецепта в месяц и до 10 своих рецептов. Годовая подписка открывает все сезонные рецепты и безлимитное число своих. Она продлевается автоматически раз в год, пока вы её не отмените, — не позднее чем за 24 часа до конца периода. Уже сохранённые рецепты всегда остаются с вами.",
  "q2": "Как отменить подписку?",
  "a2": "На iPhone: Настройки → ваше имя → Подписки → Twelve Geese → Отменить подписку.",
  "q3": "Сменила телефон — как вернуть подписку?",
  "a3": "Войдите в тот же Apple ID и нажмите «Восстановить покупки» в настройках приложения.",
  "q4": "Как вернуть деньги?",
  "a4": "Возвраты оформляет Apple на сайте <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.",
  "nav_terms": "Условия использования (Apple Standard EULA)",
  "nav_saving": "Сохранение рецептов и авторские права",
  "pp_hm": "Если вы нам пишете",
  "pp_pm": "Когда вы пишете на {email}, мы получаем ваш адрес и письмо и используем их только для ответа.",
  "pp_hs": "Этот сайт",
  "pp_ps": "Сайт twelvegeese.com — простой статический сайт на GitHub Pages. Когда вы его открываете, GitHub обрабатывает технические данные, например IP-адрес, чтобы показать страницы и защитить сервис, — по своему <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\">заявлению о конфиденциальности</a>. Сайт ничего не загружает с других сервисов: шрифты и картинки хранятся на самом сайте. На нём нет cookie, аналитики и рекламы. Выбранный язык запоминается только в вашем браузере.",
  "rs_title": "Сохранение рецептов и авторские права",
  "rs_intro": "Twelve Geese — личная книга рецептов, цифровая версия папки, где хранят распечатки, вырезки из журналов и карточки, переписанные от руки. Вот как устроено сохранение рецептов из других источников.",
  "rs_h1": "Ваша книга — только ваша",
  "rs_p1": "Всё, что вы сохраняете, остаётся на вашем iPhone. Нет публичных профилей, лент и нашего сервера, где собирались бы сохранённые рецепты. Мы не видим вашу книгу.",
  "rs_h2": "Что делает приложение",
  "rs_p2": "<b>Сайты:</b> iPhone читает страницу рецепта и сохраняет ингредиенты, шаги, главное фото и ссылку на оригинал. Фото можно убрать или заменить перед сохранением.<br><b>Книги и скриншоты:</b> текст распознаётся на iPhone, чтобы не перепечатывать его вручную.<br><b>Instagram, TikTok, Facebook, YouTube, Pinterest:</b> «Поделиться → Twelve Geese» сохраняет ссылку на публикацию. Приложение не скачивает видео и само не читает публикации — описание вставляете или скриншот добавляете вы. Ссылка остаётся в рецепте, и к оригиналу всегда можно вернуться.",
  "rs_h3": "Автор остаётся автором",
  "rs_p3": "Рецепты, фото, тексты и видео принадлежат тем, кто их создал, и права на них остаются у авторов. Сохранение в Twelve Geese не даёт вам на них прав и не означает, что их можно публиковать. Вы сами выбираете, что импортировать, и сами отвечаете за то, как делитесь этим дальше. Чтобы указание автора не терялось, Twelve Geese сохраняет ссылку на источник, когда она есть: когда вы делитесь рецептом, ссылка уходит вместе с ним, а фото, автоматически взятые с сайтов, — нет.",
  "rs_h4": "Хорошие привычки",
  "rs_p4": "• Сохраняйте рецепты, по которым хотите готовить.<br>• Сохраняйте указание автора: оставляйте ссылку на оригинал, когда делитесь.<br>• Не публикуйте чужие рецепты, фото и тексты как свои.<br>• Поддерживайте любимых авторов: смотрите, отмечайте и подписывайтесь на оригинальные публикации.",
  "rs_h5": "Вопросы",
  "rs_p5": "Вы автор рецептов или считаете, что что-то в самом приложении — например, сезонный рецепт или фото — нарушает ваши права? Напишите на {email}. Рецепты, которые сохраняют пользователи, остаются на их устройствах: мы их не размещаем и не можем ни увидеть, ни удалить.",
  "rs_h6": "Собственные рецепты Twelve Geese",
  "rs_p6": "Сезонные рецепты, тексты, фото и иллюстрации в приложении созданы для Twelve Geese. По ним можно готовить и делиться ими кнопкой «Поделиться» в приложении, но, пожалуйста, не публикуйте и не продавайте их."
 },
 "en": {
  "nav_home": "Home",
  "nav_privacy": "Privacy",
  "nav_support": "Support",
  "tagline": "Cooking with the seasons",
  "lead": "Recipes that follow the calendar: whatever ripens this month ends up on the table. Plus a personal recipe book for all your favourite dishes.",
  "soon": "Coming soon to the App Store",
  "get": "Download on the App Store",
  "f1_t": "Recipes by month",
  "f1_d": "Every month brings a new collection of dishes made from what’s in season right now.",
  "f2_t": "Your recipe book",
  "f2_d": "Save your own recipes with photos and steps, and mark your favourites.",
  "f3_t": "Shopping list",
  "f3_d": "Ingredients from recipes gather into one list, sorted by aisle.",
  "langs": "English · Polski · Беларуская · Русский",
  "pp_title": "Privacy Policy",
  "updated": "Last updated: 22 October 2026",
  "pp_intro": "Twelve Geese is a seasonal recipe app and a personal cookbook for iPhone. In short: the app has no accounts and no server of ours for your recipes — we can’t see your cookbook. Below, the app and this website are described separately.",
  "pp_h1": "What the app collects",
  "pp_p1": "We don’t collect personal data through the app. There is no sign-up, no advertising, no analytics and no tracking, and the app contains no third-party analytics or advertising code.",
  "pp_h2": "Your cookbook stays on your iPhone",
  "pp_p2": "Your recipes and their photos, your notes, favourites, the “Cooking” plan, the calendar of cooked dishes and your shopping list are stored only on your device. We have no access to them. If iCloud Backup or a backup to your computer is on, iOS includes this data in your own backup, which Apple manages. If you delete the app, its data is deleted from the device. You can also save your own backup file in the app (Settings → Back Up My Cookbook) and choose where to keep it.",
  "pp_h3": "Camera, photos and Reminders",
  "pp_p3": "The app asks for the camera only when you take a photo or scan a page, uses only the photos you pick yourself, and asks for Reminders only if you send your shopping list there. You can change these permissions in the iPhone Settings app at any time.",
  "pp_hi": "Importing recipes",
  "pp_pi": "<b>From a link:</b> your iPhone opens the recipe page directly, just like a browser, and keeps the recipe, its main photo and the link. The website sees an ordinary request from your device; nothing passes through us.<br><b>From Instagram, TikTok, Facebook, YouTube or Pinterest:</b> with “Share → Twelve Geese” the app receives only the link and any text the other app shares. It doesn’t open or read social network posts by itself — you add the recipe text or a screenshot.<br><b>From photos and screenshots:</b> the text is recognised on your device; the pictures aren’t sent anywhere.<br><b>Pasting text:</b> the app reads the clipboard only when you tap “Paste” or “Paste text”.",
  "pp_h4": "Subscription",
  "pp_p4": "Subscriptions are paid and managed through Apple. We never receive your payment details. The app checks your subscription on your device using Apple’s own tools; Apple shows us only sales reports that don’t identify you. The subscription is covered by Apple’s <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Standard Licence Agreement (EULA)</a>.",
  "pp_h5": "Sharing a recipe",
  "pp_p5": "A shared recipe goes through the standard iOS Share menu to the app and people you choose. We don’t store or see it.",
  "pp_h6": "Children",
  "pp_p6": "The app doesn’t collect personal data from anyone, including children.",
  "pp_h7": "Your rights",
  "pp_p7": "The app’s data is stored only on your device, so you control it yourself: you can edit it, export it or delete it together with the app. For any question about your data, write to {email}. You can also contact the data protection authority in your country.",
  "pp_h8": "Changes",
  "pp_p8": "If the app or this policy changes, we’ll update this page and the date at the top.",
  "sp_title": "Support",
  "sp_lead": "Have a question, an idea, or something isn’t working? Write to us — we’ll get back to you.",
  "sp_btn": "Email us",
  "sp_faq": "FAQ",
  "q1": "What’s free and what’s in the subscription?",
  "a1": "Free: the Recipe of the Week, 3 seasonal recipes a month and up to 10 of your own recipes. The yearly subscription unlocks all seasonal recipes and unlimited own recipes. It renews automatically every year until you cancel it, at least 24 hours before the end of the period. Recipes you’ve already saved always stay with you.",
  "q2": "How do I cancel my subscription?",
  "a2": "On iPhone: Settings → your name → Subscriptions → Twelve Geese → Cancel Subscription.",
  "q3": "New phone — how do I get my subscription back?",
  "a3": "Sign in with the same Apple ID and tap “Restore Purchases” in the app settings.",
  "q4": "How do I get a refund?",
  "a4": "Refunds are handled by Apple at <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.",
  "nav_terms": "Terms of Use (Apple Standard EULA)",
  "nav_saving": "Recipe Saving & Copyright",
  "pp_hm": "If you write to us",
  "pp_pm": "When you email {email}, we receive your address and your message. We use them only to answer you.",
  "pp_hs": "This website",
  "pp_ps": "twelvegeese.com is a simple static site hosted on GitHub Pages. When you open it, GitHub processes technical data such as your IP address to deliver the pages and keep the service secure, under its own <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\">privacy statement</a>. The site loads nothing from other services — fonts and pictures are stored on the site itself — and has no cookies, analytics or ads. The language you choose is remembered only in your browser.",
  "rs_title": "Recipe Saving & Copyright",
  "rs_intro": "Twelve Geese is a personal cookbook — a digital version of the folder where people keep printed recipes, magazine cut-outs and handwritten cards. Here is how saving recipes from elsewhere works.",
  "rs_h1": "Your cookbook is private",
  "rs_p1": "Everything you save stays on your iPhone. There are no public profiles, no feeds and no server of ours where saved recipes are collected. We can’t see your cookbook.",
  "rs_h2": "What the app does",
  "rs_p2": "<b>Websites:</b> your iPhone reads the recipe page and keeps the ingredients, the steps, the main photo and a link to the original. You can remove or replace the photo before saving.<br><b>Books and screenshots:</b> the text is recognised on your iPhone, so you don’t have to retype it.<br><b>Instagram, TikTok, Facebook, YouTube, Pinterest:</b> “Share → Twelve Geese” keeps the link to the post. The app doesn’t download videos and doesn’t read posts by itself — you paste the description or add a screenshot. The link stays in the recipe so you can always go back to the original.",
  "rs_h3": "The author stays the author",
  "rs_p3": "Recipes, photos, texts and videos belong to the people who made them, and the rights stay with them. Saving something in Twelve Geese doesn’t give you any rights to it and doesn’t make it yours to publish. You choose what to import, and you are responsible for how you share it further. To help keep the credit, Twelve Geese keeps the link to the source when there is one: when you share a recipe, the link goes with it, while photos taken automatically from websites stay out.",
  "rs_h4": "Good habits",
  "rs_p4": "• Save the recipes you want to cook.<br>• Keep the credit: leave the link to the original author when you share.<br>• Don’t republish other people’s recipes, photos or texts as your own.<br>• Support the creators you love: watch, like and follow the original posts.",
  "rs_h5": "Questions",
  "rs_p5": "Are you a recipe author, or do you think something in the app itself — for example a seasonal recipe or photo — infringes your rights? Write to {email}. Recipes saved by users stay on their own devices: we don’t host them and can’t see or remove them.",
  "rs_h6": "Twelve Geese’s own recipes",
  "rs_p6": "The seasonal recipes, texts, photos and illustrations in the app were made for Twelve Geese. You can cook from them and share them with the app’s Share button, but please don’t republish or sell them."
 },
 "be": {
  "nav_home": "Галоўная",
  "nav_privacy": "Канфідэнцыяльнасць",
  "nav_support": "Падтрымка",
  "tagline": "Гатуем па сезоне",
  "lead": "Рэцэпты, якія ідуць за календаром: што саспела ў гэтым месяцы — тое і на стале. І асабістая кніга рэцэптаў для ўсіх вашых любімых страў.",
  "soon": "Хутка ў App Store",
  "get": "Спампаваць у App Store",
  "f1_t": "Рэцэпты па месяцах",
  "f1_d": "Кожны месяц — новая калекцыя страў з таго, што цяпер у сезоне.",
  "f2_t": "Ваша кніга рэцэптаў",
  "f2_d": "Захоўвайце свае рэцэпты з фота і крокамі, адзначайце любімыя.",
  "f3_t": "Спіс пакупак",
  "f3_d": "Прадукты з рэцэптаў самі збіраюцца ў спіс і раскладваюцца па раздзелах.",
  "langs": "English · Polski · Беларуская · Русский",
  "pp_title": "Палітыка канфідэнцыяльнасці",
  "updated": "Абноўлена: 22 кастрычніка 2026",
  "pp_intro": "Twelve Geese — праграма з сезоннымі рэцэптамі і асабістая кніга рэцэптаў для iPhone. Коратка: у праграме няма акаўнтаў і нашага сервера для вашых рэцэптаў — мы не бачым вашу кнігу. Ніжэй праграма і гэты сайт апісаны асобна.",
  "pp_h1": "Якія даныя збірае праграма",
  "pp_p1": "Праз праграму мы не збіраем персанальныя даныя. У ёй няма рэгістрацыі, рэкламы, аналітыкі і адсочвання, няма старонніх бібліятэк аналітыкі і рэкламы.",
  "pp_h2": "Ваша кніга застаецца на iPhone",
  "pp_p2": "Вашы рэцэпты і іх фота, нататкі, абранае, план «Гатую», каляндар прыгатаванага і спіс пакупак захоўваюцца толькі на вашай прыладзе. У нас няма да іх доступу. Калі ўключана рэзервовая копія iCloud або на камп’ютар, iOS дадае гэтыя даныя ў вашу ўласную копію, якой кіруе Apple. Калі выдаліць праграму, яе даныя выдаляюцца з прылады. Можна захаваць і свой файл рэзервовай копіі ў праграме (Налады → Рэзервовая копія кнігі) і самім выбраць, дзе яго трымаць.",
  "pp_h3": "Камера, фота і «Напаміны»",
  "pp_p3": "Праграма просіць камеру, толькі калі вы фатаграфуеце страву або старонку, выкарыстоўвае толькі тыя фота, якія вы выбралі самі, і просіць доступ да «Напамінаў», толькі калі вы адпраўляеце туды спіс пакупак. Дазволы можна змяніць у Наладах iPhone у любы момант.",
  "pp_hi": "Імпарт рэцэптаў",
  "pp_pi": "<b>Па спасылцы:</b> iPhone адкрывае старонку рэцэпта непасрэдна, як браўзер, і захоўвае рэцэпт, галоўнае фота і спасылку. Сайт бачыць звычайны запыт з вашай прылады, праз нас нічога не праходзіць.<br><b>З Instagram, TikTok, Facebook, YouTube, Pinterest:</b> праз «Абагуліць → Twelve Geese» праграма атрымлівае толькі спасылку і тэкст, калі іншая праграма перадала яго разам са спасылкай. Сама праграма публікацыі ў сацсетках не адкрывае і не чытае — тэкст рэцэпта або скрыншот дадаеце вы.<br><b>З фота і скрыншотаў:</b> тэкст распазнаецца на вашай прыладзе, здымкі нікуды не адпраўляюцца.<br><b>Устаўка тэксту:</b> праграма чытае буфер абмену, толькі калі вы націскаеце «Уставіць» або «Уставіць тэкст».",
  "pp_h4": "Падпіска",
  "pp_p4": "Аплата і кіраванне падпіскай праходзяць праз Apple. Мы не атрымліваем вашы плацёжныя даныя. Праграма правярае падпіску на вашай прыладзе сродкамі Apple; нам Apple паказвае толькі справаздачы пра продажы, па якіх вас нельга пазнаць. Умовы падпіскі — <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">стандартнае ліцэнзійнае пагадненне Apple (EULA)</a>.",
  "pp_h5": "Калі вы дзеліцеся рэцэптам",
  "pp_p5": "Рэцэпт ідзе праз стандартнае меню «Абагуліць» у тую праграму і тым людзям, якіх вы выбралі. Мы яго не захоўваем і не бачым.",
  "pp_h6": "Дзеці",
  "pp_p6": "Праграма не збірае персанальныя даныя ні ў кога, у тым ліку ў дзяцей.",
  "pp_h7": "Вашы правы",
  "pp_p7": "Даныя праграмы захоўваюцца толькі на вашай прыладзе, таму вы кіруеце імі самі: можаце змяніць, захаваць копію або выдаліць разам з праграмай. З любым пытаннем пра даныя пішыце на {email}. Вы таксама можаце звярнуцца ў орган па абароне персанальных даных сваёй краіны.",
  "pp_h8": "Змены",
  "pp_p8": "Калі праграма або гэтая палітыка зменяцца, мы абновім гэтую старонку і дату ўверсе.",
  "sp_title": "Падтрымка",
  "sp_lead": "Ёсць пытанне, ідэя ці нешта працуе не так? Напішыце — абавязкова адкажам.",
  "sp_btn": "Напісаць нам",
  "sp_faq": "Частыя пытанні",
  "q1": "Што бясплатна, а што па падпісцы?",
  "a1": "Бясплатна — Рэцэпт тыдня, 3 сезонныя рэцэпты ў месяц і да 10 сваіх рэцэптаў. Гадавая падпіска адкрывае ўсе сезонныя рэцэпты і неабмежаваную колькасць сваіх. Яна падаўжаецца аўтаматычна раз на год, пакуль вы яе не скасуеце, — не пазней чым за 24 гадзіны да канца перыяду. Ужо захаваныя рэцэпты заўсёды застаюцца з вамі.",
  "q2": "Як скасаваць падпіску?",
  "a2": "На iPhone: Налады → ваша імя → Падпіскі → Twelve Geese → Скасаваць падпіску.",
  "q3": "Змяніла тэлефон — як вярнуць падпіску?",
  "a3": "Увайдзіце ў той жа Apple ID і націсніце «Аднавіць пакупкі» ў наладах праграмы.",
  "q4": "Як вярнуць грошы?",
  "a4": "Вяртанні афармляе Apple на сайце <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.",
  "nav_terms": "Умовы выкарыстання (Apple Standard EULA)",
  "nav_saving": "Захаванне рэцэптаў і аўтарскія правы",
  "pp_hm": "Калі вы нам пішаце",
  "pp_pm": "Калі вы пішаце на {email}, мы атрымліваем ваш адрас і ліст і выкарыстоўваем іх толькі для адказу.",
  "pp_hs": "Гэты сайт",
  "pp_ps": "Сайт twelvegeese.com — просты статычны сайт на GitHub Pages. Калі вы яго адкрываеце, GitHub апрацоўвае тэхнічныя даныя, напрыклад IP-адрас, каб паказаць старонкі і абараніць сэрвіс, — паводле сваёй <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\">заявы аб канфідэнцыяльнасці</a>. Сайт нічога не загружае з іншых сэрвісаў: шрыфты і выявы захоўваюцца на самім сайце. На ім няма cookie, аналітыкі і рэкламы. Выбраная мова запамінаецца толькі ў вашым браўзеры.",
  "rs_title": "Захаванне рэцэптаў і аўтарскія правы",
  "rs_intro": "Twelve Geese — асабістая кніга рэцэптаў, лічбавая версія папкі, дзе захоўваюць раздрукоўкі, выразкі з часопісаў і карткі, перапісаныя ад рукі. Вось як уладкавана захаванне рэцэптаў з іншых крыніц.",
  "rs_h1": "Ваша кніга — толькі ваша",
  "rs_p1": "Усё, што вы захоўваеце, застаецца на вашым iPhone. Няма публічных профіляў, стужак і нашага сервера, дзе збіраліся б захаваныя рэцэпты. Мы не бачым вашу кнігу.",
  "rs_h2": "Што робіць праграма",
  "rs_p2": "<b>Сайты:</b> iPhone чытае старонку рэцэпта і захоўвае інгрэдыенты, крокі, галоўнае фота і спасылку на арыгінал. Фота можна прыбраць або замяніць перад захаваннем.<br><b>Кнігі і скрыншоты:</b> тэкст распазнаецца на iPhone, каб не перадрукоўваць яго ўручную.<br><b>Instagram, TikTok, Facebook, YouTube, Pinterest:</b> «Абагуліць → Twelve Geese» захоўвае спасылку на публікацыю. Праграма не спампоўвае відэа і сама не чытае публікацыі — апісанне ўстаўляеце або скрыншот дадаеце вы. Спасылка застаецца ў рэцэпце, і да арыгінала заўсёды можна вярнуцца.",
  "rs_h3": "Аўтар застаецца аўтарам",
  "rs_p3": "Рэцэпты, фота, тэксты і відэа належаць тым, хто іх стварыў, і правы на іх застаюцца ў аўтараў. Захаванне ў Twelve Geese не дае вам на іх правоў і не азначае, што іх можна публікаваць. Вы самі выбіраеце, што імпартаваць, і самі адказваеце за тое, як дзеліцеся гэтым далей. Каб указанне аўтара не гублялася, Twelve Geese захоўвае спасылку на крыніцу, калі яна ёсць: калі вы дзеліцеся рэцэптам, спасылка ідзе разам з ім, а фота, аўтаматычна ўзятыя з сайтаў, — не.",
  "rs_h4": "Добрыя звычкі",
  "rs_p4": "• Захоўвайце рэцэпты, па якіх хочаце гатаваць.<br>• Захоўвайце ўказанне аўтара: пакідайце спасылку на арыгінал, калі дзеліцеся.<br>• Не публікуйце чужыя рэцэпты, фота і тэксты як свае.<br>• Падтрымлівайце любімых аўтараў: глядзіце, адзначайце і падпісвайцеся на арыгінальныя публікацыі.",
  "rs_h5": "Пытанні",
  "rs_p5": "Вы аўтар рэцэптаў або лічыце, што нешта ў самой праграме — напрыклад, сезонны рэцэпт або фота — парушае вашы правы? Напішыце на {email}. Рэцэпты, якія захоўваюць карыстальнікі, застаюцца на іх прыладах: мы іх не размяшчаем і не можам ні ўбачыць, ні выдаліць.",
  "rs_h6": "Уласныя рэцэпты Twelve Geese",
  "rs_p6": "Сезонныя рэцэпты, тэксты, фота і ілюстрацыі ў праграме створаны для Twelve Geese. Па іх можна гатаваць і дзяліцца імі кнопкай «Абагуліць» у праграме, але, калі ласка, не публікуйце і не прадавайце іх."
 },
 "pl": {
  "nav_home": "Strona główna",
  "nav_privacy": "Prywatność",
  "nav_support": "Pomoc",
  "tagline": "Gotujemy z porami roku",
  "lead": "Przepisy, które podążają za kalendarzem: co dojrzało w tym miesiącu, trafia na stół. Do tego osobista książka kucharska na wszystkie ulubione dania.",
  "soon": "Wkrótce w App Store",
  "get": "Pobierz z App Store",
  "f1_t": "Przepisy na każdy miesiąc",
  "f1_d": "Co miesiąc nowa kolekcja dań z tego, co właśnie jest w sezonie.",
  "f2_t": "Twoja książka przepisów",
  "f2_d": "Zapisuj własne przepisy ze zdjęciami i krokami, oznaczaj ulubione.",
  "f3_t": "Lista zakupów",
  "f3_d": "Składniki z przepisów same trafiają na listę i układają się według działów.",
  "langs": "English · Polski · Беларуская · Русский",
  "pp_title": "Polityka prywatności",
  "updated": "Ostatnia aktualizacja: 22 października 2026",
  "pp_intro": "Twelve Geese to aplikacja z sezonowymi przepisami i osobista książka kucharska na iPhone’a. W skrócie: aplikacja nie ma kont ani naszego serwera na Twoje przepisy — nie widzimy Twojej książki. Poniżej osobno opisujemy aplikację i tę stronę.",
  "pp_h1": "Jakie dane zbiera aplikacja",
  "pp_p1": "Przez aplikację nie zbieramy danych osobowych. Nie ma rejestracji, reklam, analityki ani śledzenia, a aplikacja nie zawiera zewnętrznych bibliotek analitycznych ani reklamowych.",
  "pp_h2": "Twoja książka zostaje na iPhonie",
  "pp_p2": "Twoje przepisy i ich zdjęcia, notatki, ulubione, plan „Gotuję”, kalendarz ugotowanych dań i lista zakupów są przechowywane wyłącznie na Twoim urządzeniu. Nie mamy do nich dostępu. Jeśli masz włączoną kopię zapasową iCloud lub na komputerze, iOS dodaje te dane do Twojej własnej kopii, którą zarządza Apple. Po usunięciu aplikacji jej dane znikają z urządzenia. Możesz też zapisać własny plik kopii w aplikacji (Ustawienia → Kopia zapasowa książki) i sam(a) zdecydować, gdzie go trzymać.",
  "pp_h3": "Aparat, zdjęcia i Przypomnienia",
  "pp_p3": "Aplikacja prosi o aparat tylko wtedy, gdy robisz zdjęcie dania lub strony, korzysta tylko ze zdjęć, które sam(a) wybierzesz, a o Przypomnienia prosi tylko, gdy wysyłasz tam listę zakupów. Uprawnienia możesz zmienić w każdej chwili w Ustawieniach iPhone’a.",
  "pp_hi": "Importowanie przepisów",
  "pp_pi": "<b>Z linku:</b> iPhone otwiera stronę z przepisem bezpośrednio, jak przeglądarka, i zapisuje przepis, główne zdjęcie i link. Strona widzi zwykłe zapytanie z Twojego urządzenia — nic nie przechodzi przez nas.<br><b>Z Instagrama, TikToka, Facebooka, YouTube’a, Pinteresta:</b> przez „Udostępnij → Twelve Geese” aplikacja dostaje tylko link i tekst, jeśli druga aplikacja przekazała go razem z linkiem. Sama nie otwiera i nie odczytuje postów — tekst przepisu lub zrzut ekranu dodajesz Ty.<br><b>Ze zdjęć i zrzutów ekranu:</b> tekst jest rozpoznawany na Twoim urządzeniu, obrazy nie są nigdzie wysyłane.<br><b>Wklejanie tekstu:</b> aplikacja odczytuje schowek tylko wtedy, gdy stukniesz „Wklej” lub „Wklej tekst”.",
  "pp_h4": "Subskrypcja",
  "pp_p4": "Płatności i zarządzanie subskrypcją obsługuje Apple. Nie otrzymujemy Twoich danych płatniczych. Aplikacja sprawdza subskrypcję na Twoim urządzeniu za pomocą narzędzi Apple; Apple pokazuje nam tylko raporty sprzedaży, z których nie da się Cię rozpoznać. Subskrypcję regulują <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">standardowe warunki licencyjne Apple (EULA)</a>.",
  "pp_h5": "Udostępnianie przepisu",
  "pp_p5": "Przepis trafia przez standardowe menu „Udostępnij” do aplikacji i osób, które wybierzesz. Nie przechowujemy go i go nie widzimy.",
  "pp_h6": "Dzieci",
  "pp_p6": "Aplikacja nie zbiera danych osobowych od nikogo, także od dzieci.",
  "pp_h7": "Twoje prawa",
  "pp_p7": "Dane aplikacji są tylko na Twoim urządzeniu, więc zarządzasz nimi sam(a): możesz je zmienić, zapisać kopię albo usunąć razem z aplikacją. W razie pytań o dane napisz na {email}. Możesz też zwrócić się do organu ochrony danych osobowych w swoim kraju.",
  "pp_h8": "Zmiany",
  "pp_p8": "Jeśli aplikacja lub ta polityka się zmienią, zaktualizujemy tę stronę i datę na górze.",
  "sp_title": "Pomoc",
  "sp_lead": "Masz pytanie, pomysł albo coś nie działa? Napisz — na pewno odpowiemy.",
  "sp_btn": "Napisz do nas",
  "sp_faq": "Częste pytania",
  "q1": "Co jest za darmo, a co w subskrypcji?",
  "a1": "Za darmo: Przepis tygodnia, 3 sezonowe przepisy w miesiącu i do 10 własnych przepisów. Roczna subskrypcja odblokowuje wszystkie sezonowe przepisy i nielimitowane własne przepisy. Odnawia się automatycznie co rok, dopóki jej nie anulujesz — najpóźniej 24 godziny przed końcem okresu. Zapisane już przepisy zawsze zostają z Tobą.",
  "q2": "Jak anulować subskrypcję?",
  "a2": "Na iPhonie: Ustawienia → Twoje imię → Subskrypcje → Twelve Geese → Anuluj subskrypcję.",
  "q3": "Nowy telefon — jak odzyskać subskrypcję?",
  "a3": "Zaloguj się tym samym Apple ID i stuknij „Przywróć zakupy” w ustawieniach aplikacji.",
  "q4": "Jak uzyskać zwrot pieniędzy?",
  "a4": "Zwroty obsługuje Apple na stronie <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.",
  "nav_terms": "Warunki korzystania (Apple Standard EULA)",
  "nav_saving": "Zapisywanie przepisów i prawa autorskie",
  "pp_hm": "Jeśli do nas piszesz",
  "pp_pm": "Gdy piszesz na {email}, otrzymujemy Twój adres i wiadomość i używamy ich tylko do odpowiedzi.",
  "pp_hs": "Ta strona",
  "pp_ps": "Strona twelvegeese.com to prosta statyczna strona na GitHub Pages. Gdy ją otwierasz, GitHub przetwarza dane techniczne, np. adres IP, aby wyświetlić strony i chronić usługę — zgodnie z własnym <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\">oświadczeniem o prywatności</a>. Strona niczego nie pobiera z innych serwisów: czcionki i obrazy są przechowywane na samej stronie. Nie ma na niej plików cookie, analityki ani reklam. Wybrany język jest zapamiętywany tylko w Twojej przeglądarce.",
  "rs_title": "Zapisywanie przepisów i prawa autorskie",
  "rs_intro": "Twelve Geese to osobista książka kucharska — cyfrowa wersja teczki z wydrukami, wycinkami z gazet i ręcznie przepisanymi kartkami. Oto jak działa zapisywanie przepisów z innych źródeł.",
  "rs_h1": "Twoja książka jest prywatna",
  "rs_p1": "Wszystko, co zapisujesz, zostaje na Twoim iPhonie. Nie ma publicznych profili, kanałów ani naszego serwera, na którym zbierałyby się zapisane przepisy. Nie widzimy Twojej książki.",
  "rs_h2": "Co robi aplikacja",
  "rs_p2": "<b>Strony internetowe:</b> iPhone odczytuje stronę z przepisem i zapisuje składniki, kroki, główne zdjęcie i link do oryginału. Zdjęcie możesz usunąć lub zmienić przed zapisaniem.<br><b>Książki i zrzuty ekranu:</b> tekst jest rozpoznawany na iPhonie, więc nie trzeba go przepisywać.<br><b>Instagram, TikTok, Facebook, YouTube, Pinterest:</b> „Udostępnij → Twelve Geese” zapisuje link do posta. Aplikacja nie pobiera filmów i sama nie odczytuje postów — opis wklejasz lub zrzut ekranu dodajesz Ty. Link zostaje w przepisie, więc zawsze możesz wrócić do oryginału.",
  "rs_h3": "Autor pozostaje autorem",
  "rs_p3": "Przepisy, zdjęcia, teksty i filmy należą do tych, którzy je stworzyli, i prawa do nich pozostają przy autorach. Zapisanie ich w Twelve Geese nie daje Ci do nich praw i nie oznacza, że możesz je publikować. Sam(a) wybierasz, co importujesz, i odpowiadasz za to, jak dzielisz się tym dalej. Aby informacja o autorze nie ginęła, Twelve Geese zachowuje link do źródła, gdy jest dostępny: gdy udostępniasz przepis, link idzie razem z nim, a zdjęcia pobrane automatycznie ze stron — nie.",
  "rs_h4": "Dobre nawyki",
  "rs_p4": "• Zapisuj przepisy, z których chcesz gotować.<br>• Zachowuj informację o autorze: zostawiaj link do oryginału, gdy udostępniasz.<br>• Nie publikuj cudzych przepisów, zdjęć ani tekstów jako własnych.<br>• Wspieraj ulubionych twórców: oglądaj, polub i obserwuj oryginalne posty.",
  "rs_h5": "Pytania",
  "rs_p5": "Jesteś autorem przepisów albo uważasz, że coś w samej aplikacji — na przykład sezonowy przepis lub zdjęcie — narusza Twoje prawa? Napisz na {email}. Przepisy zapisywane przez użytkowników pozostają na ich urządzeniach: nie hostujemy ich i nie możemy ich zobaczyć ani usunąć.",
  "rs_h6": "Własne przepisy Twelve Geese",
  "rs_p6": "Sezonowe przepisy, teksty, zdjęcia i ilustracje w aplikacji zostały stworzone dla Twelve Geese. Możesz z nich gotować i udostępniać je przyciskiem „Udostępnij” w aplikacji, ale prosimy, nie publikuj ich ani nie sprzedawaj."
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
      if (v != null) el.innerHTML = v.split("{email}").join(mail);
    });
    document.querySelectorAll("[data-lang]").forEach(b =>
      b.setAttribute("aria-pressed", b.dataset.lang === lang));
    const t = document.querySelector("[data-title]");
    if (t) document.title = d[t.dataset.title] + " — Twelve Geese";
    document.querySelectorAll("[data-mailto]").forEach(a => a.href = "mailto:" + cfg.email);
    document.querySelectorAll("img[data-shot]").forEach(img => {
      const want = "img/shots/" + lang + "/" + img.dataset.shot + ".jpg";
      if (img.dataset.want === want) return;
      img.dataset.want = want;
      img.onerror = () => { img.onerror = null; img.src = img.dataset.fallback; };
      img.src = want;
    });
    document.querySelectorAll("img[data-shot]").forEach(img => {
      const want = "img/shots/" + lang + "/" + img.dataset.shot + ".jpg";
      if (img.dataset.want === want) return;
      img.dataset.want = want;
      img.onerror = () => { img.onerror = null; img.src = img.dataset.fallback; };
      img.src = want;
    });
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
