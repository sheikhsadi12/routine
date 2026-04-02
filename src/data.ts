export const BN_DAYS = ['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
export const BN_MONTHS = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];

export const EXAMS: Record<string, any> = {
  '2026-04-03': { s:'ইংরেজি ১ম পত্র-২', t:'Writing, Rearrange', m:'৫০', time:'১ ঘ ৩০ মি' },
  '2026-04-04': { s:'বাংলা ২য় পত্র-২', t:'সম্পূর্ণ নির্মিতি', m:'৬০' },
  '2026-04-06': { s:'উচ্চতর গণিত ১ম-২', t:'অধ্যায় ৩, ১০' },
  '2026-04-08': { s:'জীববিজ্ঞান ১ম-২', t:'অধ্যায় ৪, ৫, ৬, ৭' },
  '2026-04-09': { s:'রসায়ন ২য় পত্র-২', t:'অধ্যায় ২' },
  '2026-04-10': { s:'ইংরেজি ২য় পত্র-২', t:'Grammar + Writing', m:'৪৮', time:'১ ঘ ৩০ মি' },
  '2026-04-12': { s:'পদার্থবিজ্ঞান ২য়-২', t:'অধ্যায় ৪, ৫, ৮' },
  '2026-04-13': { s:'উচ্চতর গণিত ২য়-২', t:'অধ্যায় ৩, ৪, ৫' },
  '2026-04-15': { s:'জীববিজ্ঞান ২য়-২', t:'অধ্যায় ৪, ৫, ৬, ৭, ১২' },
  '2026-04-16': { s:'বাংলা ১ম পত্র-৩', t:'উপন্যাস + নাটক' },
  '2026-04-17': { s:'পদার্থবিজ্ঞান ১ম-৩', t:'অধ্যায় ৮, ৯, ১০' },
  '2026-04-19': { s:'উচ্চতর গণিত ১ম-৩', t:'অধ্যায় ২, ৬, ৭' },
  '2026-04-20': { s:'রসায়ন ১ম পত্র-৩', t:'অধ্যায় ৪' },
  '2026-04-21': { s:'জীববিজ্ঞান ১ম-৩', t:'অধ্যায় ৮, ৯, ১০, ১১' },
  '2026-04-23': { s:'পদার্থবিজ্ঞান ২য়-৩', t:'অধ্যায় ৬, ৭, ৯, ১০' },
  '2026-04-24': { s:'রসায়ন ২য় পত্র-৩', t:'অধ্যায় ৩, ৪' },
  '2026-04-26': { s:'উচ্চতর গণিত ২য়-৩', t:'অধ্যায় ৭, ৮' },
  '2026-04-27': { s:'জীববিজ্ঞান ২য়-৩', t:'অধ্যায় ৮, ৯, ১০, ১১' },
  '2026-04-29': { s:'উচ্চতর গণিত ১ম-৪', t:'অধ্যায় ৪, ৯' },
  '2026-04-30': { s:'উচ্চতর গণিত ২য়-৪', t:'অধ্যায় ৯, ১০' },
  '2026-05-02': { s:'বাংলা ১ম পত্র', t:'Final Model Test', model:true },
  '2026-05-03': { s:'ইংরেজি ১ম পত্র', t:'Final Model Test', model:true },
};

export const PLANS: Record<string, any> = {
'2026-04-02': {
  note: '⚡ কাল ইংরেজি পরীক্ষা! আজকে intensive prep দরকার।',
  type: 'prep',
  motto: '📖 আজকে English ভালো করে দেখলে কাল paper টা easy হবে।',
  sessions:[
    {time:'05:30–08:30', icon:'📚', si:'si-class1', label:'CLASS 1', sub:'ইংরেজি ১ম পত্র', topic:'Writing: Letter, Paragraph, Dialogue, Story, Email', detail:'প্রতিটা writing format-এর structure আলাদা করে শিখো। Formal vs informal letter, dialogue format, story ending — এগুলো practice করো।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Rearrange Sentences', topic:'৬-৮ টা passage rearrange করো', detail:'আগের বছরের question থেকে rearrange practice করো। Connectors (however, therefore, although) চেনো।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'ইংরেজি ১ম পত্র — পূর্ণ সেট', topic:'১ ঘ ৩০ মিনিটে ৫০ নম্বরের সেট দাও', detail:'সময় মেপে দাও। Writing অংশ সবার আগে করো যেগুলো তুমি ভালো পারো। শেষে rearrange।'},
    {time:'03:00–05:30', icon:'📐', si:'si-class2', label:'PRACTICE 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ৩: সরলরেখা — শুরু', detail:'৬ই পরীক্ষা আছে। আজকে Chapter 3 start করো: সরলরেখার সমীকরণ, দুই বিন্দুর দূরত্ব, slope।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ১০: যোগজীকরণ — basic formulas', detail:'Integration by substitution, by parts। Basic formulas মুখস্থ করো: ∫xⁿ, ∫eˣ, ∫sinx ইত্যাদি।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'English Final Revision + Arabic', topic:'কালকের exam-এর জন্য সব format আরেকবার দেখো', detail:'৩০ মিনিট — Arabic practice। বাকি সময় English formats review করো। ঘুমানোর আগে শুধু পড়ো, লেখালেখি না।'},
  ]
},
'2026-04-03': {
  note: '📝 আজকে পরীক্ষা: ইংরেজি ১ম পত্র-২',
  type: 'exam',
  motto: '✅ পরীক্ষার পর বিশ্রাম নিয়ে Biology শুরু করো।',
  exam: '2026-04-03',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'ইংরেজি — শেষ revision', topic:'Writing formats quick দেখো', detail:'শুধু formats দেখো: letter structure, paragraph intro/body/conclusion, dialogue opening। নতুন কিছু পড়তে যেও না।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'ইংরেজি ১ম পত্র-২', topic:'Writing + Rearrange — ৫০ নম্বর', detail:'যা ভালো পারো সেটা আগে লিখো। সময় বেঁচে গেলে review করো।'},
    {time:'03:00–05:30', icon:'🌿', si:'si-class2', label:'PRACTICE 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৪: কোষ বিভাজন (Mitosis/Meiosis)', detail:'৮ই পরীক্ষা। Chapter 4,5,6,7 কভার করতে হবে। আজকে Ch 4 শুরু — Mitosis vs Meiosis differences diagram আঁকো।'},
    {time:'06:30–09:30', icon:'🌿', si:'si-class2', label:'CLASS 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৫: শৈবাল ও ছত্রাক — লক্ষণ, উদাহরণ', detail:'Spirogyra, Ulothrix structure। ছত্রাকের বৈশিষ্ট্য, Penicillium। Chart বানিয়ে পড়ো।'},
    {time:'10:00–01:00', icon:'🔢', si:'si-final', label:'FINAL PUSH', sub:'উচ্চতর গণিত ১ম — Ch 3 + Arabic', topic:'Chapter 3: সরলরেখার সমীকরণ practice', detail:'৩০ মিনিট Arabic। বাকি সময় Chapter 3-এর অংক করো: intercept form, two-point form।'},
  ]
},
'2026-04-04': {
  note: '📝 আজকে পরীক্ষা: বাংলা ২য় পত্র-২',
  type: 'exam',
  motto: '✅ পরীক্ষার পর Math-এ focus করো — ৬ই test।',
  exam: '2026-04-04',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'বাংলা ২য় পত্র — শেষ revision', topic:'ভাব-সম্প্রসারণ, সারাংশ formats', detail:'দিনলিপি, প্রতিবেদন, আবেদনপত্রের format quick দেখো। নতুন কিছু না।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'বাংলা ২য় পত্র-২', topic:'নির্মিতি — ৬০ নম্বর', detail:'সময় মেপে লিখো। প্রতিটা question-এর জন্য পয়েন্ট আগে লিখে নাও।'},
    {time:'03:00–05:30', icon:'🔢', si:'si-class2', label:'PRACTICE 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ৩: সরলরেখা — problems', detail:'৬ই পরীক্ষা, মাত্র ২ দিন বাকি। Ch 3-এর সব ধরনের অংক করো: locus, distance formula, area of triangle।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ১০: যোগজীকরণ — problems', detail:'Definite integration, area under curve। Board question style-এ অংক করো।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math Ch 3 + 10 Mock + Arabic', topic:'Ch 3,10 combined practice set', detail:'৩০ মিনিট Arabic। বাকি সময় Ch 3 ও 10 থেকে অংক করো এবং note বানাও।'},
  ]
},
'2026-04-05': {
  note: '⚡ কাল Math পরীক্ষা! (Ch 3, 10) — আজকে full revision।',
  type: 'prep',
  motto: '🔢 Math-এ confidence আসে repeated practice থেকে — আজকে সব অংক করো।',
  sessions:[
    {time:'05:30–08:30', icon:'🔢', si:'si-class1', label:'CLASS 1', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ৩: সরলরেখা — সম্পূর্ণ revision', detail:'সব formula list করো: slope, distance, angle between lines, perpendicular distance। তারপর examples solve করো।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Chapter 3 — বোর্ড প্রশ্ন', detail:'আগের বছরের board question থেকে Chapter 3 solve করো। দেখো কোন ধরনের অংক বেশি আসে।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'Ch 3 + Ch 10 — সম্পূর্ণ সেট', detail:'৫-৬টা বড় অংক করো Ch 3 থেকে, ৩-৪টা Ch 10 থেকে। সময় মেপে করো।'},
    {time:'03:00–05:30', icon:'🔢', si:'si-class2', label:'PRACTICE 2', sub:'অধ্যায় ১০: যোগজীকরণ', topic:'Definite + Indefinite — সব formula revision', detail:'সব integration formulas এবং rules একটা page-এ লিখো। তারপর board-style problems।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ২য় পত্র', topic:'অধ্যায় ২: জৈব রসায়ন — শুরু', detail:'৯ই পরীক্ষা। আজকে start করো: Alkane, Alkene, Alkyne পার্থক্য, isomerism। Chapter 2 অনেক বড়।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math Final Prep + Arabic', topic:'কালকের exam-এর জন্য শেষ চেক', detail:'৩০ মিনিট Arabic। সব formula আরেকবার দেখো। শেষ ঘণ্টা শুধু formula পড়ো।'},
  ]
},
'2026-04-06': {
  note: '📝 আজকে পরীক্ষা: উচ্চতর গণিত ১ম পত্র-২ (Ch 3, 10)',
  type: 'exam',
  exam: '2026-04-06',
  motto: '✅ Math-এর পর Biology শুরু — ৮ই পরীক্ষা।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Math — শেষ formula check', topic:'Ch 3, 10 formulas quick দেখো', detail:'Slope formula, integration rules। Difficult অংকগুলো আর না, শুধু steps মনে করো।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'উচ্চতর গণিত ১ম পত্র-২', topic:'Chapter 3 + 10', detail:'সহজ অংক আগে। সময় বাঁচালে কঠিনগুলো check করো।'},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৪: কোষ বিভাজন', detail:'৮ই পরীক্ষা। Ch 4 — Mitosis/Meiosis diagram, phases মুখস্থ। Table বানাও।'},
    {time:'06:30–09:30', icon:'🌿', si:'si-class2', label:'CLASS 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৫, ৬, ৭ — overview', detail:'Ch 5 (কোষ রসায়ন), Ch 6 (শৈবাল/ছত্রাক), Ch 7 (ব্রায়োফাইট)। প্রতিটা থেকে important points note করো।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Biology MCQ + Arabic', topic:'Ch 4-7 MCQ practice', detail:'৩০ মিনিট Arabic। Biology MCQ করো — board question pattern চেনো।'},
  ]
},
'2026-04-07': {
  note: '⚡ কাল Biology পরীক্ষা (Ch 4,5,6,7) — আজকে full revision।',
  type: 'prep',
  motto: '🌿 Biology = diagram + definition। আজকে সব diagram আঁকো।',
  sessions:[
    {time:'05:30–08:30', icon:'🌿', si:'si-class1', label:'CLASS 1', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৪,৫ — সম্পূর্ণ', detail:'Ch 4: Mitosis vs Meiosis সম্পূর্ণ তুলনামূলক। Ch 5: কোষের অর্গানেল (Mitochondria, Chloroplast)। Diagram আঁকো।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Biology Ch 4,5 — সৃজনশীল', detail:'২-৩টা সৃজনশীল প্রশ্ন করো। উত্তর pattern দেখো।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'জীববিজ্ঞান — সম্পূর্ণ সেট', detail:'Ch 4,5,6,7 থেকে ১ সেট দাও। যেগুলো কঠিন লেগেছে সেগুলো mark করো।'},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৬, ৭ — revision', detail:'Ch 6: অণুজীব (Bacteria, Virus) — গঠন, রোগ। Ch 7: ব্রায়োফাইটা — বৈশিষ্ট্য। Important questions।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ২য় পত্র', topic:'অধ্যায় ২: জৈব রসায়ন — organic reactions', detail:'৯ই পরীক্ষা। Substitution, addition, elimination reactions। Mechanism বোঝো।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Biology Final + Arabic', topic:'কালকের exam final check', detail:'৩০ মিনিট Arabic। Biology diagrams আরেকবার দেখো। সব definitions পড়ো।'},
  ]
},
'2026-04-08': {
  note: '📝 আজকে পরীক্ষা: জীববিজ্ঞান ১ম পত্র-২ (Ch 4-7)',
  type: 'exam',
  exam: '2026-04-08',
  motto: '✅ Biology শেষ! কাল Chemistry — আজকেই intensive শুরু করো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Biology — শেষ revision', topic:'Ch 4-7 key points দেখো', detail:'Diagrams একবার দেখো। Important definitions মনে করো।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'জীববিজ্ঞান ১ম পত্র-২', topic:'Ch 4, 5, 6, 7', detail:'Diagram সহ উত্তর লিখলে নম্বর বেশি।'},
    {time:'03:00–05:30', icon:'🧪', si:'si-practice', label:'PRACTICE 2', sub:'রসায়ন ২য় পত্র', topic:'অধ্যায় ২: জৈব রসায়ন — intensive', detail:'কাল পরীক্ষা! Ch 2 ভালোভাবে দেখো। Functional groups, IUPAC naming, reactions।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ২য় পত্র', topic:'Ch 2: Alcohol, Aldehyde, Carboxylic Acid', detail:'প্রতিটা compound-এর preparation, properties, reactions। Table করে পড়ো।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Chemistry Ch 2 + Arabic', topic:'কালকের exam final prep', detail:'৩০ মিনিট Arabic। Chemistry Ch 2 সব reactions আরেকবার দেখো।'},
  ]
},
'2026-04-09': {
  note: '📝 আজকে পরীক্ষা: রসায়ন ২য় পত্র-২ (Ch 2)',
  type: 'exam',
  exam: '2026-04-09',
  motto: '✅ Chemistry শেষ! কাল English 2nd Paper — Grammar heavy।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Chemistry — শেষ revision', topic:'Ch 2 key reactions', detail:'সব organic reactions এবং formulas quick দেখো।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'রসায়ন ২য় পত্র-২', topic:'Chapter 2 — জৈব রসায়ন', detail:'Mechanism সহ লিখলে ভালো নম্বর পাবে।'},
    {time:'03:00–05:30', icon:'📚', si:'si-practice', label:'PRACTICE 2', sub:'ইংরেজি ২য় পত্র', topic:'Grammar: Changing sentences, Narration', detail:'কাল পরীক্ষা! Grammar rules মনে করো। Narration: direct to indirect rules।'},
    {time:'06:30–09:30', icon:'📚', si:'si-class2', label:'CLASS 2', sub:'ইংরেজি ২য় পত্র', topic:'Synonyms/Antonyms + Paragraph + Report', detail:'Common synonyms/antonyms। Paragraph format। Report format (headline, byline, intro, body)।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'English Grammar + Arabic', topic:'Pronoun reference, Modifiers, Punctuation', detail:'৩০ মিনিট Arabic। Grammar rules সব দেখো।'},
  ]
},
'2026-04-10': {
  note: '📝 আজকে পরীক্ষা: ইংরেজি ২য় পত্র-২',
  type: 'exam',
  exam: '2026-04-10',
  motto: '✅ English শেষ! এখন Physics ২য় পত্র — Ch 4,5,8।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'English 2nd Paper — শেষ revision', topic:'Grammar rules quick দেখো', detail:'Narration rules, sentence transformation। Writing formats।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'ইংরেজি ২য় পত্র-২', topic:'Grammar + Writing — ৪৮ নম্বর', detail:'Grammar অংশ আগে। সময় বাঁচলে writing review।'},
    {time:'03:00–05:30', icon:'🔭', si:'si-practice', label:'PRACTICE 2', sub:'পদার্থবিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৪: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া', detail:'১২ই পরীক্ষা। Biot-Savart Law, Ampere\'s Law, Solenoid। Formula আঁকো।'},
    {time:'06:30–09:30', icon:'🔭', si:'si-class2', label:'CLASS 2', sub:'পদার্থবিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৫: তাড়িতচৌম্বক আবেশ', detail:'Faraday\'s Law, Lenz\'s Law, Mutual inductance, Transformer। Derivations বোঝো।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Physics Ch 4,5 + Arabic', topic:'Problems practice', detail:'৩০ মিনিট Arabic। Physics numerical problems।'},
  ]
},
'2026-04-11': {
  note: '⚡ কাল Physics পরীক্ষা (Ch 4,5,8) — full revision।',
  type: 'prep',
  motto: '🔭 Physics = formula + derivation + problem। তিনটাই লাগবে।',
  sessions:[
    {time:'05:30–08:30', icon:'🔭', si:'si-class1', label:'CLASS 1', sub:'পদার্থবিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৪,৫ সম্পূর্ণ revision', detail:'Ch 4: Ampere, Biot-Savart। Ch 5: Faraday, Lenz। সব derivation + formula list।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Physics board questions', detail:'Ch 4,5 board questions করো।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'পদার্থবিজ্ঞান Ch 4,5,8 — সেট', detail:'পুরো সেট দাও।'},
    {time:'03:00–05:30', icon:'🔭', si:'si-practice', label:'PRACTICE 2', sub:'অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞান', detail:'Photoelectric effect, Compton, de Broglie। Equations: E=hf, λ=h/mv।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৩: জটিল সংখ্যা', detail:'১৩ই পরীক্ষা। Complex numbers: forms, De Moivre\'s theorem, roots।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Physics Final + Arabic', topic:'সব formulas শেষ review', detail:'৩০ মিনিট Arabic। Physics formulas।'},
  ]
},
'2026-04-12': {
  note: '📝 আজকে পরীক্ষা: পদার্থবিজ্ঞান ২য় পত্র-২ (Ch 4,5,8)',
  type: 'exam',
  exam: '2026-04-12',
  motto: '✅ Physics শেষ! কাল Math 2nd Paper — মাত্র ১ দিন বাকি।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Physics — শেষ revision', topic:'Ch 4,5,8 formulas', detail:'দ্রুত সব formula দেখো।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'পদার্থবিজ্ঞান ২য় পত্র-২', topic:'Ch 4, 5, 8', detail:'Derivation সহ লিখলে বেশি নম্বর।'},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৩: জটিল সংখ্যা — সব problems', detail:'কাল পরীক্ষা! De Moivre, roots of unity, complex equations।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৪: বহুপদী, অধ্যায় ৫: দ্বিপদী', detail:'Ch 4: Polynomial equations, remainder theorem। Ch 5: Binomial theorem expansion।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math 2nd Paper + Arabic', topic:'Ch 3,4,5 combined problems', detail:'৩০ মিনিট Arabic। কালকের exam-এর জন্য সব শেষ চেক।'},
  ]
},
'2026-04-13': {
  note: '📝 আজকে পরীক্ষা: উচ্চতর গণিত ২য় পত্র-২ (Ch 3,4,5)',
  type: 'exam',
  exam: '2026-04-13',
  motto: '✅ ১৫ই Biology 2nd Paper — Ch 4,5,6,7,12 আজকেই শুরু।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Math 2nd — শেষ revision', topic:'Ch 3,4,5 formulas', detail:'De Moivre, polynomial, binomial।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'উচ্চতর গণিত ২য় পত্র-২', topic:'Ch 3, 4, 5', detail:''},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'জীববিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৪: রক্ত ও সঞ্চালন', detail:'Blood composition, blood groups, heart anatomy। Diagram আঁকো।'},
    {time:'06:30–09:30', icon:'🌿', si:'si-class2', label:'CLASS 2', sub:'জীববিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৫: শ্বাসকার্য + ৬: বর্জ্য', detail:'Respiratory system, kidney structure, urine formation। Important diagrams।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bio 2nd + Arabic', topic:'Ch 7,12 overview', detail:'৩০ মিনিট Arabic। Ch 7 (চলন) ও Ch 12 (জীনতত্ত্ব) overview।'},
  ]
},
'2026-04-14': {
  note: '⚡ কাল Biology 2nd Paper পরীক্ষা — full revision দিন।',
  type: 'prep',
  motto: '🌿 Biology 2nd = human body। Diagram + function মনে রাখো।',
  sessions:[
    {time:'05:30–08:30', icon:'🌿', si:'si-class1', label:'CLASS 1', sub:'জীববিজ্ঞান ২য় পত্র', topic:'Ch 4,5 সম্পূর্ণ revision', detail:'Blood: WBC/RBC/Platelet। Heart: chambers, valves, circulation। Lung: exchange, tidal volume।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Biology 2nd board questions', detail:'Ch 4,5 থেকে বোর্ড প্রশ্ন করো।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'জীববিজ্ঞান ২য় পত্র — সেট', detail:'Ch 4,5,6,7,12 থেকে সেট দাও।'},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'অধ্যায় ১২: জীনতত্ত্ব ও বিবর্তন', detail:'Mendel\'s Laws, monohybrid/dihybrid cross। Punnett square। Darwin।'},
    {time:'06:30–09:30', icon:'📚', si:'si-class2', label:'CLASS 2', sub:'বাংলা ১ম পত্র', topic:'উপন্যাস (লালসালু)', detail:'১৬ই পরীক্ষা। লালসালু: মজিদ চরিত্র, থিম, গুরুত্বপূর্ণ উদ্ধৃতি।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bio Final + Arabic', topic:'কালকের exam prep', detail:'৩০ মিনিট Arabic। সব diagrams শেষবার দেখো।'},
  ]
},
'2026-04-15': {
  note: '📝 আজকে পরীক্ষা: জীববিজ্ঞান ২য় পত্র-২',
  type: 'exam',
  exam: '2026-04-15',
  motto: '✅ কাল Bangla 1st — উপন্যাস+নাটক আজকেই পড়ো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Biology 2nd — শেষ revision', detail:'Diagrams quick দেখো।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'জীববিজ্ঞান ২য় পত্র-২', topic:'Ch 4,5,6,7,12', detail:''},
    {time:'03:00–05:30', icon:'📚', si:'si-practice', label:'PRACTICE 2', sub:'বাংলা ১ম পত্র', topic:'উপন্যাস: লালসালু', detail:'কাল পরীক্ষা! Plot summary, চরিত্র বিশ্লেষণ (মজিদ, রহিমা), থিম, গুরুত্বপূর্ণ lines।'},
    {time:'06:30–09:30', icon:'📚', si:'si-class2', label:'CLASS 2', sub:'বাংলা ১ম পত্র', topic:'নাটক: সিরাজউদ্দৌলা', detail:'নাটকের ঘটনা, চরিত্র, dialogue।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bangla Final + Arabic', topic:'উপন্যাস+নাটক final check', detail:'৩০ মিনিট Arabic। গুরুত্বপূর্ণ উদ্ধৃতিগুলো মনে করো।'},
  ]
},
'2026-04-16': {
  note: '📝 আজকে পরীক্ষা: বাংলা ১ম পত্র-৩ (উপন্যাস+নাটক)',
  type: 'exam',
  exam: '2026-04-16',
  motto: '✅ কাল Physics 1st Paper — Ch 8,9,10 মাত্র ১ দিন বাকি।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'বাংলা — শেষ revision', detail:'গুরুত্বপূর্ণ চরিত্র ও উদ্ধৃতি।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'বাংলা ১ম পত্র-৩', topic:'উপন্যাস + নাটক', detail:''},
    {time:'03:00–05:30', icon:'🔭', si:'si-practice', label:'PRACTICE 2', sub:'পদার্থবিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৮: পর্যায়বৃত্ত গতি', detail:'কাল পরীক্ষা! SHM: velocity, acceleration, energy। T=2π√(l/g) pendulum।'},
    {time:'06:30–09:30', icon:'🔭', si:'si-class2', label:'CLASS 2', sub:'পদার্থবিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৯: তরঙ্গ + ১০: গ্যাস', detail:'Ch 9: wave equation, interference, resonance। Ch 10: kinetic theory, gas laws।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Physics Final + Arabic', topic:'Ch 8,9,10 formulas শেষ চেক', detail:'৩০ মিনিট Arabic। সব formulas।'},
  ]
},
'2026-04-17': {
  note: '📝 আজকে পরীক্ষা: পদার্থবিজ্ঞান ১ম পত্র-৩ (Ch 8,9,10)',
  type: 'exam',
  exam: '2026-04-17',
  motto: '✅ ১৯ই Math 1st Paper — Ch 2,6,7 আজকেই শুরু।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Physics 1st — শেষ revision', detail:'SHM, wave, gas formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'পদার্থবিজ্ঞান ১ম পত্র-৩', topic:'Ch 8, 9, 10', detail:''},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ২: ভেক্টর', detail:'Vector addition, dot/cross product, angle between vectors, unit vector।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ৬: ত্রিকোণমিতিক অনুপাত', detail:'Basic trig ratios, identities, values of 0°,30°,45°,60°,90°। Problems।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math + Arabic', topic:'Ch 7 overview শুরু', detail:'৩০ মিনিট Arabic। Ch 7 (সংযুক্ত কোণ) শুরু।'},
  ]
},
'2026-04-18': {
  note: '⚡ কাল Math 1st Paper (Ch 2,6,7) — আজকে full revision।',
  type: 'prep',
  motto: '🔢 Trigonometry-তে identity আর compound angle ভালো করো।',
  sessions:[
    {time:'05:30–08:30', icon:'🔢', si:'si-class1', label:'CLASS 1', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ২, ৬ সম্পূর্ণ revision', detail:'Vector: magnitude, direction cosines। Trig: identities, inverse।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Board questions Ch 2, 6', detail:'Previous board questions।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'Math 1st Paper Ch 2,6,7 সেট', detail:''},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'অধ্যায় ৭: সংযুক্ত কোণ', detail:'Sum/difference formulas, double angle, half angle। Board-style অংক।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ১ম পত্র', topic:'অধ্যায় ৪: রাসায়নিক পরিবর্তন', detail:'২০ই পরীক্ষা। Equilibrium, Le Chatelier, Kc, Kp, pH, acid-base।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math Final + Arabic', topic:'Ch 7 final + formulas', detail:'৩০ মিনিট Arabic। সব trig formulas।'},
  ]
},
'2026-04-19': {
  note: '📝 আজকে পরীক্ষা: উচ্চতর গণিত ১ম পত্র-৩ (Ch 2,6,7)',
  type: 'exam',
  exam: '2026-04-19',
  motto: '✅ কাল Chemistry Ch 4 — মাত্র ১ দিন। Focus করো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Math — শেষ revision', detail:'Trig formulas, vector formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'উচ্চতর গণিত ১ম পত্র-৩', topic:'Ch 2, 6, 7', detail:''},
    {time:'03:00–05:30', icon:'🧪', si:'si-practice', label:'PRACTICE 2', sub:'রসায়ন ১ম পত্র', topic:'অধ্যায় ৪: রাসায়নিক পরিবর্তন', detail:'কাল পরীক্ষা! Equilibrium constant, pH calculation, titration।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ১ম পত্র', topic:'Ch 4: Thermochemistry, Rate of reaction', detail:'Activation energy, catalyst effect, Hess\'s law। Calculations।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Chemistry Final + Arabic', topic:'কালকের exam সব formulas', detail:'৩০ মিনিট Arabic। সব equations।'},
  ]
},
'2026-04-20': {
  note: '📝 আজকে পরীক্ষা: রসায়ন ১ম পত্র-৩ (Ch 4)',
  type: 'exam',
  exam: '2026-04-20',
  motto: '✅ কাল Biology 1st — Ch 8,9,10,11 মাত্র ১ দিন বাকি!',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Chemistry — শেষ revision', detail:'pH, equilibrium, rate formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'রসায়ন ১ম পত্র-৩', topic:'Chapter 4', detail:''},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ৮,৯: টিস্যু + উদ্ভিদ শারীরতত্ত্ব', detail:'কাল পরীক্ষা! Ch 8: meristem, permanent tissue। Ch 9: photosynthesis, transpiration।'},
    {time:'06:30–09:30', icon:'🌿', si:'si-class2', label:'CLASS 2', sub:'জীববিজ্ঞান ১ম পত্র', topic:'অধ্যায় ১০,১১: উদ্ভিদ প্রজনন + জীবপ্রযুক্তি', detail:'Ch 10: pollination, fertilization। Ch 11: rDNA, PCR, GMO।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bio Final + Arabic', topic:'Ch 8-11 সব diagrams', detail:'৩০ মিনিট Arabic। সব figures।'},
  ]
},
'2026-04-21': {
  note: '📝 আজকে পরীক্ষা: জীববিজ্ঞান ১ম পত্র-৩ (Ch 8-11)',
  type: 'exam',
  exam: '2026-04-21',
  motto: '✅ ২৩ই Physics 2nd — Ch 6,7,9,10 শুরু করো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Biology — শেষ revision', detail:'Diagrams quick দেখো।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'জীববিজ্ঞান ১ম পত্র-৩', topic:'Ch 8, 9, 10, 11', detail:''},
    {time:'03:00–05:30', icon:'🔭', si:'si-practice', label:'PRACTICE 2', sub:'পদার্থবিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান', detail:'Reflection, Refraction, Prism, Lens equation (1/v-1/u=1/f)।'},
    {time:'06:30–09:30', icon:'🔭', si:'si-class2', label:'CLASS 2', sub:'পদার্থবিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৭: ভৌত আলোকবিজ্ঞান', detail:'Interference (Young\'s experiment), Diffraction, Polarization।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Physics Ch 9,10 + Arabic', topic:'Ch 9,10 overview', detail:'৩০ মিনিট Arabic। Ch 9 (Atom model) ও Ch 10 (Semiconductor) শুরু।'},
  ]
},
'2026-04-22': {
  note: '⚡ কাল Physics 2nd (Ch 6,7,9,10) — আজকে full revision।',
  type: 'prep',
  motto: '🔭 Optics মানে diagram + formula। Semiconductor বুঝে পড়ো।',
  sessions:[
    {time:'05:30–08:30', icon:'🔭', si:'si-class1', label:'CLASS 1', sub:'পদার্থবিজ্ঞান ২য় পত্র', topic:'Ch 6, 7 সম্পূর্ণ revision', detail:'Geometric optics: mirror/lens equations। Physical optics: Young\'s formula λ=yd/D।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Physics board questions', detail:'Ch 6,7 board questions।'},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'Physics 2nd Ch 6,7,9,10 সেট', detail:'Full mock।'},
    {time:'03:00–05:30', icon:'🔭', si:'si-practice', label:'PRACTICE 2', sub:'অধ্যায় ৯,১০ revision', detail:'Ch 9: Bohr model, energy levels। Ch 10: p-n junction, diode, transistor।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ২য় পত্র', topic:'অধ্যায় ৩: পরিমাণগত রসায়ন', detail:'২৪ই পরীক্ষা। Mole concept, stoichiometry, molarity।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Physics Final + Arabic', topic:'সব formulas', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-23': {
  note: '📝 আজকে পরীক্ষা: পদার্থবিজ্ঞান ২য় পত্র-৩ (Ch 6,7,9,10)',
  type: 'exam',
  exam: '2026-04-23',
  motto: '✅ কাল Chemistry 2nd — Ch 3,4 মাত্র ১ দিন।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Physics — শেষ revision', detail:'Optics, semiconductor formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'পদার্থবিজ্ঞান ২য় পত্র-৩', topic:'Ch 6, 7, 9, 10', detail:''},
    {time:'03:00–05:30', icon:'🧪', si:'si-practice', label:'PRACTICE 2', sub:'রসায়ন ২য় পত্র', topic:'অধ্যায় ৩: পরিমাণগত রসায়ন', detail:'কাল পরীক্ষা! Mole, molarity, limiting reagent calculations।'},
    {time:'06:30–09:30', icon:'🧪', si:'si-class2', label:'CLASS 2', sub:'রসায়ন ২য় পত্র', topic:'অধ্যায় ৪: তড়িৎ রসায়ন', detail:'Electrolysis, Faraday\'s law, Galvanic cell, electrode potential।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Chemistry Final + Arabic', topic:'Ch 3,4 শেষ review', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-24': {
  note: '📝 আজকে পরীক্ষা: রসায়ন ২য় পত্র-৩ (Ch 3,4)',
  type: 'exam',
  exam: '2026-04-24',
  motto: '✅ ২৬ই Math 2nd — Ch 7,8 শুরু করো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Chemistry — শেষ revision', detail:'Mole, electrolysis calculations।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'রসায়ন ২য় পত্র-৩', topic:'Ch 3, 4', detail:''},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৭: বিপরীত ত্রিকোণমিতিক', detail:'Inverse trig: sin⁻¹, cos⁻¹, tan⁻¹। Properties, equations।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৮: স্থিতিবিদ্যা', detail:'Forces in equilibrium, moments, couples, parallel forces।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math + Arabic', topic:'Ch 7,8 problems', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-25': {
  note: '⚡ কাল Math 2nd Paper (Ch 7,8) — আজকে full revision।',
  type: 'prep',
  motto: '🔢 Statics = forces balance। Inverse trig = limits মনে রেখো।',
  sessions:[
    {time:'05:30–08:30', icon:'🔢', si:'si-class1', label:'CLASS 1', sub:'উচ্চতর গণিত ২য় পত্র', topic:'Ch 7,8 সম্পূর্ণ revision', detail:'Inverse trig properties। Statics: resultant, Lami\'s theorem।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Board questions Ch 7,8', detail:''},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'Math 2nd Ch 7,8 সেট', detail:''},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'জীববিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৮,৯: সমন্বয় + জীবনধারা', detail:'২৭ই পরীক্ষা। Nervous system: neuron, reflex arc। Hormones।'},
    {time:'06:30–09:30', icon:'🌿', si:'si-class2', label:'CLASS 2', sub:'জীববিজ্ঞান ২য় পত্র', topic:'অধ্যায় ১০,১১: প্রতিরক্ষা + জীনতত্ত্ব', detail:'Immunity: antigen, antibody। Genetics: inheritance patterns।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math Final + Arabic', topic:'Ch 7,8 সব formulas', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-26': {
  note: '📝 আজকে পরীক্ষা: উচ্চতর গণিত ২য় পত্র-৩ (Ch 7,8)',
  type: 'exam',
  exam: '2026-04-26',
  motto: '✅ কাল Biology 2nd — Ch 8-11 মাত্র ১ দিন বাকি।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Math — শেষ revision', detail:'Inverse trig, statics formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'উচ্চতর গণিত ২য় পত্র-৩', topic:'Ch 7, 8', detail:''},
    {time:'03:00–05:30', icon:'🌿', si:'si-practice', label:'PRACTICE 2', sub:'জীববিজ্ঞান ২য় পত্র', topic:'অধ্যায় ৮,৯: সমন্বয় + জীবনধারা', detail:'কাল পরীক্ষা! Nervous system, endocrine system। Diagrams।'},
    {time:'06:30–09:30', icon:'🌿', si:'si-class2', label:'CLASS 2', sub:'জীববিজ্ঞান ২য় পত্র', topic:'অধ্যায় ১০,১১ revision', detail:'Immune system, genetics। Important diagrams।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bio Final + Arabic', topic:'কালকের সব diagrams', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-27': {
  note: '📝 আজকে পরীক্ষা: জীববিজ্ঞান ২য় পত্র-৩ (Ch 8-11)',
  type: 'exam',
  exam: '2026-04-27',
  motto: '✅ ২৯ই Math 1st — Ch 4,9 শুরু করো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Biology — শেষ revision', detail:'Nervous, immune, genetics diagrams।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'জীববিজ্ঞান ২য় পত্র-৩', topic:'Ch 8, 9, 10, 11', detail:''},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ৪: বৃত্ত', detail:'Circle equation (h,k,r form), tangent, chord, orthogonal circles।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ১ম পত্র', topic:'অধ্যায় ৯: অন্তরীকরণ', detail:'Differentiation rules: chain rule, product rule, quotient rule। Application।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math + Arabic', topic:'Ch 4,9 problems', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-28': {
  note: '⚡ কাল Math 1st (Ch 4,9) — আজকে full revision।',
  type: 'prep',
  motto: '🔢 Circle আর Differentiation — দুটোই নিয়মিত বোর্ডে আসে।',
  sessions:[
    {time:'05:30–08:30', icon:'🔢', si:'si-class1', label:'CLASS 1', sub:'উচ্চতর গণিত ১ম পত্র', topic:'Ch 4, 9 সম্পূর্ণ revision', detail:'Circle: standard forms। Differentiation: all rules, maxima/minima।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'Board questions Ch 4,9', detail:''},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'Math 1st Ch 4,9 সেট', detail:''},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৯: সমতলে গতি + ১০: বিস্তার', detail:'৩০ই পরীক্ষা। Projectile motion, motion on inclined plane। Statistics।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'Ch 9,10 intensive', detail:'Projectile: range, max height, time। Probability basic।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math Final + Arabic', topic:'সব formulas শেষ দেখা', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-29': {
  note: '📝 আজকে পরীক্ষা: উচ্চতর গণিত ১ম পত্র-৪ (Ch 4,9)',
  type: 'exam',
  exam: '2026-04-29',
  motto: '✅ কাল Math 2nd — Ch 9,10 আজকেই intensive করো।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Math 1st — শেষ revision', detail:'Circle, differentiation formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'উচ্চতর গণিত ১ম পত্র-৪', topic:'Ch 4, 9', detail:''},
    {time:'03:00–05:30', icon:'🔢', si:'si-practice', label:'PRACTICE 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ৯: সমতলে গতি', detail:'কাল পরীক্ষা! Projectile motion সব types। Inclined plane। Problems।'},
    {time:'06:30–09:30', icon:'🔢', si:'si-class2', label:'CLASS 2', sub:'উচ্চতর গণিত ২য় পত্র', topic:'অধ্যায় ১০: বিস্তার পরিমাপ ও সম্ভাবনা', detail:'Standard deviation, variance। P(A), P(A∪B), conditional probability।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Math 2nd Final + Arabic', topic:'Ch 9,10 সব', detail:'৩০ মিনিট Arabic।'},
  ]
},
'2026-04-30': {
  note: '📝 আজকে পরীক্ষা: উচ্চতর গণিত ২য় পত্র-৪ (Ch 9,10)',
  type: 'exam',
  exam: '2026-04-30',
  motto: '🎯 Chapter exams শেষ! এখন Final Model Test prep শুরু।',
  sessions:[
    {time:'05:30–07:30', icon:'📖', si:'si-exam-day', label:'PRE-EXAM', sub:'Math 2nd — শেষ revision', detail:'Projectile, probability formulas।'},
    {time:'[পরীক্ষার সময়]', icon:'✍️', si:'si-exam-day', label:'EXAM', sub:'উচ্চতর গণিত ২য় পত্র-৪', topic:'Ch 9, 10', detail:''},
    {time:'03:00–05:30', icon:'📚', si:'si-practice', label:'MODEL TEST PREP', sub:'বাংলা ১ম পত্র', topic:'গদ্য + পদ্য সম্পূর্ণ revision', detail:'২রা মে Model Test। Prose: লেখক পরিচিতি, গল্প summary। Poetry: theme, এলিউশন।'},
    {time:'06:30–09:30', icon:'📚', si:'si-class2', label:'CLASS 2', sub:'বাংলা ১ম পত্র', topic:'উপন্যাস + নাটক full review', detail:'লালসালু, সিরাজউদ্দৌলা — সব important points।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bangla Mock + Arabic', topic:'বাংলা মডেল টেস্ট দাও', detail:'৩০ মিনিট Arabic। বাংলা full mock।'},
  ]
},
'2026-05-01': {
  note: '⚡ কাল বাংলা ১ম পত্র Final Model Test — শেষ revision দিন।',
  type: 'prep',
  motto: '📚 বাংলা = বোঝা + মনে রাখা। আজকে শেষবার সব দেখো।',
  sessions:[
    {time:'05:30–08:30', icon:'📚', si:'si-class1', label:'CLASS 1', sub:'বাংলা ১ম পত্র', topic:'সম্পূর্ণ syllabus revision', detail:'সব গদ্য-পদ্য, উপন্যাস, নাটক। Important questions।'},
    {time:'09:00–10:00', icon:'✍️', si:'si-practice', label:'PRACTICE 1', sub:'বাংলা MCQ practice', detail:''},
    {time:'10:00–12:30', icon:'🎯', si:'si-revision', label:'MOCK TEST', sub:'বাংলা ১ম পত্র — পূর্ণ সেট', detail:'Board pattern-এ full mock।'},
    {time:'03:00–05:30', icon:'📚', si:'si-practice', label:'PRACTICE 2', sub:'বাংলা weak areas', detail:'যেগুলো কঠিন মনে হয় সেগুলো।'},
    {time:'06:30–09:30', icon:'📚', si:'si-class2', label:'CLASS 2', sub:'ইংরেজি ১ম পত্র', topic:'Model Test prep (৩রা মে)', detail:'Reading comprehension, unseen passages।'},
    {time:'10:00–01:00', icon:'🌙', si:'si-final', label:'FINAL PUSH', sub:'Bangla Final + Arabic', topic:'কালকের exam সব ready', detail:'৩০ মিনিট Arabic। নিশ্চিন্তে ঘুমাও।'},
  ]
},
};
