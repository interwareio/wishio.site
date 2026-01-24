import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Database, BarChart3, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';

// Privacy Policy translations
const privacyTranslations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated",
    backToHome: "Back to Home",
    intro: "At Wishio, we take your privacy seriously. This policy explains how we handle your information.",
    
    section1Title: "Information We Don't Collect",
    section1Icon: Shield,
    section1Content: "If you do not use the Wishio web app, we do not store any personal information about you. The mobile app is designed to work locally on your device, keeping your data private and secure.",
    
    section2Title: "Information When Using Web App",
    section2Icon: Database,
    section2Content: "If you choose to use the Wishio web app, contacts you share are stored on our servers to enable the web functionality. However, this information is not used, sold, or accessed by us for any purpose other than providing you with the service you requested.",
    
    section3Title: "Anonymous Analytics",
    section3Icon: BarChart3,
    section3Content: "We collect anonymous usage analytics to improve our service. This includes:",
    section3List: [
      "Most used sections of the app",
      "Country of use",
      "Device model",
      "Language preference"
    ],
    section3Footer: "This data is always collected anonymously and is used solely to provide better service, prioritize new features, and improve the user experience.",
    
    section4Title: "Data Security",
    section4Icon: Lock,
    section4Content: "We implement appropriate security measures to protect any data we do store. Your information is encrypted and stored securely.",
    
    contactTitle: "Contact Us",
    contactContent: "If you have any questions about this Privacy Policy, please contact us at:",
    
    commitment: "Our Commitment",
    commitmentContent: "Wishio is built with privacy as a core principle. We believe you should have full control over your personal data, and we're committed to maintaining your trust.",
  },
  
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización",
    backToHome: "Volver al Inicio",
    intro: "En Wishio, nos tomamos muy en serio tu privacidad. Esta política explica cómo manejamos tu información.",
    
    section1Title: "Información que No Recopilamos",
    section1Icon: Shield,
    section1Content: "Si no utilizas la aplicación web de Wishio, no almacenamos ninguna información personal sobre ti. La aplicación móvil está diseñada para funcionar localmente en tu dispositivo, manteniendo tus datos privados y seguros.",
    
    section2Title: "Información al Usar la App Web",
    section2Icon: Database,
    section2Content: "Si decides usar la aplicación web de Wishio, los contactos que compartas se almacenan en nuestros servidores para habilitar la funcionalidad web. Sin embargo, esta información no es utilizada, vendida ni accedida por nosotros para ningún propósito que no sea proporcionarte el servicio que solicitaste.",
    
    section3Title: "Analítica Anónima",
    section3Icon: BarChart3,
    section3Content: "Recopilamos análisis de uso anónimos para mejorar nuestro servicio. Esto incluye:",
    section3List: [
      "Secciones más utilizadas de la app",
      "País de uso",
      "Modelo de dispositivo",
      "Preferencia de idioma"
    ],
    section3Footer: "Estos datos siempre se recopilan de forma anónima y se utilizan únicamente para brindar un mejor servicio, priorizar nuevas funcionalidades y mejorar la experiencia del usuario.",
    
    section4Title: "Seguridad de Datos",
    section4Icon: Lock,
    section4Content: "Implementamos medidas de seguridad apropiadas para proteger cualquier dato que almacenemos. Tu información está encriptada y almacenada de forma segura.",
    
    contactTitle: "Contáctanos",
    contactContent: "Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos en:",
    
    commitment: "Nuestro Compromiso",
    commitmentContent: "Wishio está construido con la privacidad como principio fundamental. Creemos que debes tener control total sobre tus datos personales, y estamos comprometidos a mantener tu confianza.",
  },
  
  pt: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização",
    backToHome: "Voltar ao Início",
    intro: "Na Wishio, levamos sua privacidade a sério. Esta política explica como tratamos suas informações.",
    
    section1Title: "Informações que Não Coletamos",
    section1Icon: Shield,
    section1Content: "Se você não usar o aplicativo web da Wishio, não armazenamos nenhuma informação pessoal sobre você. O aplicativo móvel é projetado para funcionar localmente no seu dispositivo, mantendo seus dados privados e seguros.",
    
    section2Title: "Informações ao Usar o App Web",
    section2Icon: Database,
    section2Content: "Se você optar por usar o aplicativo web da Wishio, os contatos que você compartilhar são armazenados em nossos servidores para habilitar a funcionalidade web. No entanto, essas informações não são usadas, vendidas ou acessadas por nós para qualquer finalidade além de fornecer o serviço que você solicitou.",
    
    section3Title: "Análise Anônima",
    section3Icon: BarChart3,
    section3Content: "Coletamos análises de uso anônimas para melhorar nosso serviço. Isso inclui:",
    section3List: [
      "Seções mais usadas do app",
      "País de uso",
      "Modelo do dispositivo",
      "Preferência de idioma"
    ],
    section3Footer: "Esses dados são sempre coletados de forma anônima e são usados exclusivamente para fornecer um melhor serviço, priorizar novos recursos e melhorar a experiência do usuário.",
    
    section4Title: "Segurança de Dados",
    section4Icon: Lock,
    section4Content: "Implementamos medidas de segurança apropriadas para proteger quaisquer dados que armazenemos. Suas informações são criptografadas e armazenadas com segurança.",
    
    contactTitle: "Entre em Contato",
    contactContent: "Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:",
    
    commitment: "Nosso Compromisso",
    commitmentContent: "A Wishio foi construída com a privacidade como princípio fundamental. Acreditamos que você deve ter controle total sobre seus dados pessoais, e estamos comprometidos em manter sua confiança.",
  },
  
  fr: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour",
    backToHome: "Retour à l'Accueil",
    intro: "Chez Wishio, nous prenons votre vie privée au sérieux. Cette politique explique comment nous traitons vos informations.",
    
    section1Title: "Informations que Nous Ne Collectons Pas",
    section1Icon: Shield,
    section1Content: "Si vous n'utilisez pas l'application web Wishio, nous ne stockons aucune information personnelle vous concernant. L'application mobile est conçue pour fonctionner localement sur votre appareil, gardant vos données privées et sécurisées.",
    
    section2Title: "Informations lors de l'Utilisation de l'App Web",
    section2Icon: Database,
    section2Content: "Si vous choisissez d'utiliser l'application web Wishio, les contacts que vous partagez sont stockés sur nos serveurs pour activer la fonctionnalité web. Cependant, ces informations ne sont pas utilisées, vendues ou consultées par nous à d'autres fins que de vous fournir le service que vous avez demandé.",
    
    section3Title: "Analyses Anonymes",
    section3Icon: BarChart3,
    section3Content: "Nous collectons des analyses d'utilisation anonymes pour améliorer notre service. Cela comprend :",
    section3List: [
      "Sections les plus utilisées de l'application",
      "Pays d'utilisation",
      "Modèle d'appareil",
      "Préférence de langue"
    ],
    section3Footer: "Ces données sont toujours collectées de manière anonyme et sont utilisées uniquement pour fournir un meilleur service, prioriser les nouvelles fonctionnalités et améliorer l'expérience utilisateur.",
    
    section4Title: "Sécurité des Données",
    section4Icon: Lock,
    section4Content: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger toutes les données que nous stockons. Vos informations sont cryptées et stockées en toute sécurité.",
    
    contactTitle: "Nous Contacter",
    contactContent: "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à :",
    
    commitment: "Notre Engagement",
    commitmentContent: "Wishio est construit avec la confidentialité comme principe fondamental. Nous croyons que vous devez avoir un contrôle total sur vos données personnelles, et nous nous engageons à maintenir votre confiance.",
  },
  
  de: {
    title: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert",
    backToHome: "Zurück zur Startseite",
    intro: "Bei Wishio nehmen wir Ihre Privatsphäre ernst. Diese Richtlinie erklärt, wie wir mit Ihren Informationen umgehen.",
    
    section1Title: "Informationen, die Wir Nicht Sammeln",
    section1Icon: Shield,
    section1Content: "Wenn Sie die Wishio Web-App nicht verwenden, speichern wir keine persönlichen Informationen über Sie. Die mobile App ist so konzipiert, dass sie lokal auf Ihrem Gerät funktioniert und Ihre Daten privat und sicher hält.",
    
    section2Title: "Informationen bei Nutzung der Web-App",
    section2Icon: Database,
    section2Content: "Wenn Sie sich entscheiden, die Wishio Web-App zu nutzen, werden die von Ihnen geteilten Kontakte auf unseren Servern gespeichert, um die Web-Funktionalität zu ermöglichen. Diese Informationen werden jedoch von uns nicht genutzt, verkauft oder abgerufen, außer um Ihnen den von Ihnen angeforderten Service bereitzustellen.",
    
    section3Title: "Anonyme Analysen",
    section3Icon: BarChart3,
    section3Content: "Wir sammeln anonyme Nutzungsanalysen, um unseren Service zu verbessern. Dies umfasst:",
    section3List: [
      "Meistgenutzte Bereiche der App",
      "Nutzungsland",
      "Gerätemodell",
      "Sprachpräferenz"
    ],
    section3Footer: "Diese Daten werden immer anonym gesammelt und dienen ausschließlich dazu, einen besseren Service zu bieten, neue Funktionen zu priorisieren und die Benutzererfahrung zu verbessern.",
    
    section4Title: "Datensicherheit",
    section4Icon: Lock,
    section4Content: "Wir implementieren geeignete Sicherheitsmaßnahmen, um alle von uns gespeicherten Daten zu schützen. Ihre Informationen sind verschlüsselt und sicher gespeichert.",
    
    contactTitle: "Kontaktieren Sie Uns",
    contactContent: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter:",
    
    commitment: "Unser Engagement",
    commitmentContent: "Wishio wurde mit Datenschutz als Grundprinzip entwickelt. Wir glauben, dass Sie die volle Kontrolle über Ihre persönlichen Daten haben sollten, und wir sind bestrebt, Ihr Vertrauen zu bewahren.",
  },
  
  it: {
    title: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento",
    backToHome: "Torna alla Home",
    intro: "In Wishio, prendiamo sul serio la tua privacy. Questa politica spiega come gestiamo le tue informazioni.",
    
    section1Title: "Informazioni che Non Raccogliamo",
    section1Icon: Shield,
    section1Content: "Se non utilizzi l'app web Wishio, non memorizziamo alcuna informazione personale su di te. L'app mobile è progettata per funzionare localmente sul tuo dispositivo, mantenendo i tuoi dati privati e sicuri.",
    
    section2Title: "Informazioni nell'Uso dell'App Web",
    section2Icon: Database,
    section2Content: "Se scegli di utilizzare l'app web Wishio, i contatti che condividi vengono memorizzati sui nostri server per abilitare la funzionalità web. Tuttavia, queste informazioni non vengono utilizzate, vendute o consultate da noi per scopi diversi dalla fornitura del servizio richiesto.",
    
    section3Title: "Analisi Anonime",
    section3Icon: BarChart3,
    section3Content: "Raccogliamo analisi di utilizzo anonime per migliorare il nostro servizio. Questo include:",
    section3List: [
      "Sezioni più utilizzate dell'app",
      "Paese di utilizzo",
      "Modello del dispositivo",
      "Preferenza linguistica"
    ],
    section3Footer: "Questi dati vengono sempre raccolti in modo anonimo e vengono utilizzati esclusivamente per fornire un servizio migliore, dare priorità alle nuove funzionalità e migliorare l'esperienza utente.",
    
    section4Title: "Sicurezza dei Dati",
    section4Icon: Lock,
    section4Content: "Implementiamo misure di sicurezza appropriate per proteggere i dati che memorizziamo. Le tue informazioni sono crittografate e memorizzate in modo sicuro.",
    
    contactTitle: "Contattaci",
    contactContent: "Se hai domande su questa Informativa sulla Privacy, contattaci a:",
    
    commitment: "Il Nostro Impegno",
    commitmentContent: "Wishio è stato costruito con la privacy come principio fondamentale. Crediamo che tu debba avere il pieno controllo sui tuoi dati personali, e ci impegniamo a mantenere la tua fiducia.",
  },
  
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新",
    backToHome: "返回首页",
    intro: "在 Wishio，我们非常重视您的隐私。本政策说明我们如何处理您的信息。",
    
    section1Title: "我们不收集的信息",
    section1Icon: Shield,
    section1Content: "如果您不使用 Wishio 网页应用，我们不会存储任何关于您的个人信息。移动应用程序设计为在您的设备上本地运行，保持您的数据私密和安全。",
    
    section2Title: "使用网页应用时的信息",
    section2Icon: Database,
    section2Content: "如果您选择使用 Wishio 网页应用，您分享的联系人将存储在我们的服务器上以启用网页功能。但是，这些信息不会被我们使用、出售或访问，除非是为了向您提供所请求的服务。",
    
    section3Title: "匿名分析",
    section3Icon: BarChart3,
    section3Content: "我们收集匿名使用分析以改进我们的服务。这包括：",
    section3List: [
      "应用程序最常用的部分",
      "使用国家",
      "设备型号",
      "语言偏好"
    ],
    section3Footer: "这些数据始终以匿名方式收集，仅用于提供更好的服务、优先考虑新功能并改善用户体验。",
    
    section4Title: "数据安全",
    section4Icon: Lock,
    section4Content: "我们实施适当的安全措施来保护我们存储的任何数据。您的信息经过加密并安全存储。",
    
    contactTitle: "联系我们",
    contactContent: "如果您对本隐私政策有任何疑问，请通过以下方式联系我们：",
    
    commitment: "我们的承诺",
    commitmentContent: "Wishio 以隐私为核心原则构建。我们相信您应该完全控制您的个人数据，我们致力于保持您的信任。",
  },
  
  ja: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日",
    backToHome: "ホームに戻る",
    intro: "Wishioでは、お客様のプライバシーを真剣に考えています。このポリシーでは、お客様の情報の取り扱いについて説明します。",
    
    section1Title: "収集しない情報",
    section1Icon: Shield,
    section1Content: "Wishio Webアプリを使用しない場合、お客様の個人情報は一切保存しません。モバイルアプリは、お客様のデバイス上でローカルに動作するように設計されており、データをプライベートかつ安全に保ちます。",
    
    section2Title: "Webアプリ使用時の情報",
    section2Icon: Database,
    section2Content: "Wishio Webアプリの使用を選択した場合、共有された連絡先はWeb機能を有効にするために当社のサーバーに保存されます。ただし、この情報は、お客様が要求したサービスを提供する以外の目的で、当社が使用、販売、またはアクセスすることはありません。",
    
    section3Title: "匿名分析",
    section3Icon: BarChart3,
    section3Content: "サービス向上のため、匿名の使用分析を収集しています。これには以下が含まれます：",
    section3List: [
      "アプリの最も使用されているセクション",
      "使用国",
      "デバイスモデル",
      "言語設定"
    ],
    section3Footer: "このデータは常に匿名で収集され、より良いサービスの提供、新機能の優先順位付け、ユーザーエクスペリエンスの向上のためにのみ使用されます。",
    
    section4Title: "データセキュリティ",
    section4Icon: Lock,
    section4Content: "保存するデータを保護するために適切なセキュリティ対策を実施しています。お客様の情報は暗号化され、安全に保存されます。",
    
    contactTitle: "お問い合わせ",
    contactContent: "このプライバシーポリシーについてご質問がある場合は、以下までお問い合わせください：",
    
    commitment: "私たちのコミットメント",
    commitmentContent: "Wishioはプライバシーを核心原則として構築されています。お客様は個人データを完全に管理すべきであると考えており、お客様の信頼を維持することに全力を尽くしています。",
  },
  
  ko: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트",
    backToHome: "홈으로 돌아가기",
    intro: "Wishio에서는 귀하의 개인정보를 소중히 여깁니다. 이 정책은 귀하의 정보를 어떻게 처리하는지 설명합니다.",
    
    section1Title: "수집하지 않는 정보",
    section1Icon: Shield,
    section1Content: "Wishio 웹 앱을 사용하지 않으면 귀하에 대한 개인 정보를 저장하지 않습니다. 모바일 앱은 귀하의 기기에서 로컬로 작동하도록 설계되어 데이터를 비공개로 안전하게 유지합니다.",
    
    section2Title: "웹 앱 사용 시 정보",
    section2Icon: Database,
    section2Content: "Wishio 웹 앱을 사용하기로 선택한 경우, 공유한 연락처는 웹 기능을 활성화하기 위해 당사 서버에 저장됩니다. 그러나 이 정보는 요청한 서비스를 제공하는 것 외에는 당사가 사용, 판매 또는 접근하지 않습니다.",
    
    section3Title: "익명 분석",
    section3Icon: BarChart3,
    section3Content: "서비스 개선을 위해 익명의 사용 분석을 수집합니다. 여기에는 다음이 포함됩니다:",
    section3List: [
      "앱에서 가장 많이 사용되는 섹션",
      "사용 국가",
      "기기 모델",
      "언어 기본 설정"
    ],
    section3Footer: "이 데이터는 항상 익명으로 수집되며, 더 나은 서비스 제공, 새로운 기능 우선순위 지정 및 사용자 경험 개선을 위해서만 사용됩니다.",
    
    section4Title: "데이터 보안",
    section4Icon: Lock,
    section4Content: "저장하는 모든 데이터를 보호하기 위해 적절한 보안 조치를 구현합니다. 귀하의 정보는 암호화되어 안전하게 저장됩니다.",
    
    contactTitle: "문의하기",
    contactContent: "이 개인정보 처리방침에 대해 질문이 있으시면 다음으로 연락해 주세요:",
    
    commitment: "우리의 약속",
    commitmentContent: "Wishio는 개인정보 보호를 핵심 원칙으로 구축되었습니다. 귀하는 개인 데이터를 완전히 통제해야 한다고 믿으며, 귀하의 신뢰를 유지하기 위해 최선을 다하고 있습니다.",
  },
  
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث",
    backToHome: "العودة إلى الرئيسية",
    intro: "في Wishio، نأخذ خصوصيتك على محمل الجد. توضح هذه السياسة كيفية تعاملنا مع معلوماتك.",
    
    section1Title: "المعلومات التي لا نجمعها",
    section1Icon: Shield,
    section1Content: "إذا لم تستخدم تطبيق Wishio على الويب، فإننا لا نخزن أي معلومات شخصية عنك. تم تصميم التطبيق المحمول للعمل محلياً على جهازك، مع الحفاظ على خصوصية بياناتك وأمانها.",
    
    section2Title: "المعلومات عند استخدام تطبيق الويب",
    section2Icon: Database,
    section2Content: "إذا اخترت استخدام تطبيق Wishio على الويب، يتم تخزين جهات الاتصال التي تشاركها على خوادمنا لتمكين وظائف الويب. ومع ذلك، لا يتم استخدام هذه المعلومات أو بيعها أو الوصول إليها من قبلنا لأي غرض آخر غير تقديم الخدمة التي طلبتها.",
    
    section3Title: "التحليلات المجهولة",
    section3Icon: BarChart3,
    section3Content: "نجمع تحليلات استخدام مجهولة لتحسين خدمتنا. وهذا يشمل:",
    section3List: [
      "الأقسام الأكثر استخداماً في التطبيق",
      "بلد الاستخدام",
      "طراز الجهاز",
      "تفضيل اللغة"
    ],
    section3Footer: "يتم جمع هذه البيانات دائماً بشكل مجهول وتُستخدم فقط لتقديم خدمة أفضل، وتحديد أولويات الميزات الجديدة، وتحسين تجربة المستخدم.",
    
    section4Title: "أمان البيانات",
    section4Icon: Lock,
    section4Content: "نطبق تدابير أمنية مناسبة لحماية أي بيانات نخزنها. معلوماتك مشفرة ومخزنة بشكل آمن.",
    
    contactTitle: "اتصل بنا",
    contactContent: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:",
    
    commitment: "التزامنا",
    commitmentContent: "تم بناء Wishio مع الخصوصية كمبدأ أساسي. نؤمن بأنه يجب أن يكون لديك السيطرة الكاملة على بياناتك الشخصية، ونحن ملتزمون بالحفاظ على ثقتك.",
  },
  
  hi: {
    title: "गोपनीयता नीति",
    lastUpdated: "अंतिम अपडेट",
    backToHome: "होम पर वापस जाएं",
    intro: "Wishio में, हम आपकी गोपनीयता को गंभीरता से लेते हैं। यह नीति बताती है कि हम आपकी जानकारी को कैसे संभालते हैं।",
    
    section1Title: "जानकारी जो हम एकत्र नहीं करते",
    section1Icon: Shield,
    section1Content: "यदि आप Wishio वेब ऐप का उपयोग नहीं करते हैं, तो हम आपके बारे में कोई व्यक्तिगत जानकारी संग्रहीत नहीं करते हैं। मोबाइल ऐप आपके डिवाइस पर स्थानीय रूप से काम करने के लिए डिज़ाइन किया गया है, जो आपके डेटा को निजी और सुरक्षित रखता है।",
    
    section2Title: "वेब ऐप का उपयोग करते समय जानकारी",
    section2Icon: Database,
    section2Content: "यदि आप Wishio वेब ऐप का उपयोग करना चुनते हैं, तो आपके द्वारा साझा किए गए संपर्क वेब कार्यक्षमता को सक्षम करने के लिए हमारे सर्वर पर संग्रहीत किए जाते हैं। हालांकि, इस जानकारी का उपयोग, बिक्री या हमारे द्वारा किसी अन्य उद्देश्य के लिए एक्सेस नहीं किया जाता है सिवाय आपको अनुरोधित सेवा प्रदान करने के।",
    
    section3Title: "अनाम विश्लेषण",
    section3Icon: BarChart3,
    section3Content: "हम अपनी सेवा को बेहतर बनाने के लिए अनाम उपयोग विश्लेषण एकत्र करते हैं। इसमें शामिल हैं:",
    section3List: [
      "ऐप के सबसे अधिक उपयोग किए जाने वाले अनुभाग",
      "उपयोग का देश",
      "डिवाइस मॉडल",
      "भाषा वरीयता"
    ],
    section3Footer: "यह डेटा हमेशा गुमनाम रूप से एकत्र किया जाता है और केवल बेहतर सेवा प्रदान करने, नई सुविधाओं को प्राथमिकता देने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए उपयोग किया जाता है।",
    
    section4Title: "डेटा सुरक्षा",
    section4Icon: Lock,
    section4Content: "हम अपने द्वारा संग्रहीत किसी भी डेटा की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं। आपकी जानकारी एन्क्रिप्टेड और सुरक्षित रूप से संग्रहीत है।",
    
    contactTitle: "हमसे संपर्क करें",
    contactContent: "यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:",
    
    commitment: "हमारी प्रतिबद्धता",
    commitmentContent: "Wishio गोपनीयता को मुख्य सिद्धांत के रूप में बनाया गया है। हम मानते हैं कि आपको अपने व्यक्तिगत डेटा पर पूर्ण नियंत्रण होना चाहिए, और हम आपके विश्वास को बनाए रखने के लिए प्रतिबद्ध हैं।",
  },
  
  ru: {
    title: "Политика Конфиденциальности",
    lastUpdated: "Последнее обновление",
    backToHome: "Вернуться на Главную",
    intro: "В Wishio мы серьёзно относимся к вашей конфиденциальности. Эта политика объясняет, как мы обрабатываем вашу информацию.",
    
    section1Title: "Информация, Которую Мы Не Собираем",
    section1Icon: Shield,
    section1Content: "Если вы не используете веб-приложение Wishio, мы не храним никакой личной информации о вас. Мобильное приложение разработано для локальной работы на вашем устройстве, сохраняя ваши данные приватными и безопасными.",
    
    section2Title: "Информация при Использовании Веб-Приложения",
    section2Icon: Database,
    section2Content: "Если вы решите использовать веб-приложение Wishio, контакты, которыми вы делитесь, хранятся на наших серверах для обеспечения веб-функциональности. Однако эта информация не используется, не продаётся и не просматривается нами в каких-либо целях, кроме предоставления вам запрошенной услуги.",
    
    section3Title: "Анонимная Аналитика",
    section3Icon: BarChart3,
    section3Content: "Мы собираем анонимную аналитику использования для улучшения нашего сервиса. Это включает:",
    section3List: [
      "Наиболее используемые разделы приложения",
      "Страна использования",
      "Модель устройства",
      "Языковые предпочтения"
    ],
    section3Footer: "Эти данные всегда собираются анонимно и используются исключительно для предоставления лучшего сервиса, приоритизации новых функций и улучшения пользовательского опыта.",
    
    section4Title: "Безопасность Данных",
    section4Icon: Lock,
    section4Content: "Мы применяем соответствующие меры безопасности для защиты любых данных, которые мы храним. Ваша информация зашифрована и надёжно хранится.",
    
    contactTitle: "Свяжитесь с Нами",
    contactContent: "Если у вас есть вопросы об этой Политике Конфиденциальности, пожалуйста, свяжитесь с нами:",
    
    commitment: "Наше Обязательство",
    commitmentContent: "Wishio построен с конфиденциальностью как основным принципом. Мы верим, что вы должны иметь полный контроль над своими личными данными, и мы стремимся поддерживать ваше доверие.",
  },
  
  tr: {
    title: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme",
    backToHome: "Ana Sayfaya Dön",
    intro: "Wishio'da gizliliğinizi ciddiye alıyoruz. Bu politika, bilgilerinizi nasıl işlediğimizi açıklar.",
    
    section1Title: "Toplamadığımız Bilgiler",
    section1Icon: Shield,
    section1Content: "Wishio web uygulamasını kullanmıyorsanız, hakkınızda hiçbir kişisel bilgi saklamıyoruz. Mobil uygulama, verilerinizi gizli ve güvenli tutarak cihazınızda yerel olarak çalışacak şekilde tasarlanmıştır.",
    
    section2Title: "Web Uygulamasını Kullanırken Bilgiler",
    section2Icon: Database,
    section2Content: "Wishio web uygulamasını kullanmayı seçerseniz, paylaştığınız kişiler web işlevselliğini etkinleştirmek için sunucularımızda saklanır. Ancak bu bilgiler, size talep ettiğiniz hizmeti sağlamanın dışında herhangi bir amaçla tarafımızca kullanılmaz, satılmaz veya erişilmez.",
    
    section3Title: "Anonim Analitikler",
    section3Icon: BarChart3,
    section3Content: "Hizmetimizi iyileştirmek için anonim kullanım analitiği topluyoruz. Bu şunları içerir:",
    section3List: [
      "Uygulamanın en çok kullanılan bölümleri",
      "Kullanım ülkesi",
      "Cihaz modeli",
      "Dil tercihi"
    ],
    section3Footer: "Bu veriler her zaman anonim olarak toplanır ve yalnızca daha iyi hizmet sunmak, yeni özelliklere öncelik vermek ve kullanıcı deneyimini iyileştirmek için kullanılır.",
    
    section4Title: "Veri Güvenliği",
    section4Icon: Lock,
    section4Content: "Sakladığımız tüm verileri korumak için uygun güvenlik önlemleri uyguluyoruz. Bilgileriniz şifrelenir ve güvenli bir şekilde saklanır.",
    
    contactTitle: "Bize Ulaşın",
    contactContent: "Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:",
    
    commitment: "Taahhüdümüz",
    commitmentContent: "Wishio, temel ilke olarak gizlilikle inşa edilmiştir. Kişisel verileriniz üzerinde tam kontrole sahip olmanız gerektiğine inanıyoruz ve güveninizi korumaya kararlıyız.",
  },
  
  nl: {
    title: "Privacybeleid",
    lastUpdated: "Laatst bijgewerkt",
    backToHome: "Terug naar Home",
    intro: "Bij Wishio nemen we uw privacy serieus. Dit beleid legt uit hoe we met uw informatie omgaan.",
    
    section1Title: "Informatie die We Niet Verzamelen",
    section1Icon: Shield,
    section1Content: "Als u de Wishio web-app niet gebruikt, slaan we geen persoonlijke informatie over u op. De mobiele app is ontworpen om lokaal op uw apparaat te werken, waardoor uw gegevens privé en veilig blijven.",
    
    section2Title: "Informatie bij Gebruik van de Web-App",
    section2Icon: Database,
    section2Content: "Als u ervoor kiest om de Wishio web-app te gebruiken, worden de contacten die u deelt opgeslagen op onze servers om de webfunctionaliteit mogelijk te maken. Deze informatie wordt echter niet door ons gebruikt, verkocht of geopend voor enig ander doel dan het leveren van de door u gevraagde dienst.",
    
    section3Title: "Anonieme Analyses",
    section3Icon: BarChart3,
    section3Content: "We verzamelen anonieme gebruiksanalyses om onze service te verbeteren. Dit omvat:",
    section3List: [
      "Meest gebruikte secties van de app",
      "Land van gebruik",
      "Apparaatmodel",
      "Taalvoorkeur"
    ],
    section3Footer: "Deze gegevens worden altijd anoniem verzameld en worden uitsluitend gebruikt om een betere service te bieden, nieuwe functies te prioriteren en de gebruikerservaring te verbeteren.",
    
    section4Title: "Gegevensbeveiliging",
    section4Icon: Lock,
    section4Content: "We implementeren passende beveiligingsmaatregelen om alle gegevens die we opslaan te beschermen. Uw informatie is versleuteld en veilig opgeslagen.",
    
    contactTitle: "Neem Contact Op",
    contactContent: "Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via:",
    
    commitment: "Onze Toewijding",
    commitmentContent: "Wishio is gebouwd met privacy als kernprincipe. We geloven dat u volledige controle over uw persoonlijke gegevens moet hebben, en we zijn toegewijd aan het behouden van uw vertrouwen.",
  },
  
  pl: {
    title: "Polityka Prywatności",
    lastUpdated: "Ostatnia aktualizacja",
    backToHome: "Powrót do Strony Głównej",
    intro: "W Wishio poważnie traktujemy Twoją prywatność. Ta polityka wyjaśnia, jak postępujemy z Twoimi informacjami.",
    
    section1Title: "Informacje, Których Nie Zbieramy",
    section1Icon: Shield,
    section1Content: "Jeśli nie korzystasz z aplikacji webowej Wishio, nie przechowujemy żadnych informacji osobistych o Tobie. Aplikacja mobilna została zaprojektowana do pracy lokalnie na Twoim urządzeniu, zachowując prywatność i bezpieczeństwo Twoich danych.",
    
    section2Title: "Informacje przy Korzystaniu z Aplikacji Webowej",
    section2Icon: Database,
    section2Content: "Jeśli zdecydujesz się korzystać z aplikacji webowej Wishio, udostępnione przez Ciebie kontakty są przechowywane na naszych serwerach w celu umożliwienia funkcjonalności web. Jednak te informacje nie są przez nas używane, sprzedawane ani udostępniane w żadnym innym celu niż świadczenie zamówionej przez Ciebie usługi.",
    
    section3Title: "Anonimowa Analityka",
    section3Icon: BarChart3,
    section3Content: "Zbieramy anonimowe analizy użytkowania w celu ulepszenia naszej usługi. Obejmuje to:",
    section3List: [
      "Najczęściej używane sekcje aplikacji",
      "Kraj użytkowania",
      "Model urządzenia",
      "Preferencje językowe"
    ],
    section3Footer: "Te dane są zawsze zbierane anonimowo i są wykorzystywane wyłącznie do świadczenia lepszej usługi, priorytetyzacji nowych funkcji i poprawy doświadczenia użytkownika.",
    
    section4Title: "Bezpieczeństwo Danych",
    section4Icon: Lock,
    section4Content: "Wdrażamy odpowiednie środki bezpieczeństwa w celu ochrony wszelkich przechowywanych przez nas danych. Twoje informacje są zaszyfrowane i bezpiecznie przechowywane.",
    
    contactTitle: "Skontaktuj się z Nami",
    contactContent: "Jeśli masz pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami pod adresem:",
    
    commitment: "Nasze Zobowiązanie",
    commitmentContent: "Wishio zostało zbudowane z prywatnością jako podstawową zasadą. Wierzymy, że powinieneś mieć pełną kontrolę nad swoimi danymi osobowymi, i jesteśmy zobowiązani do utrzymania Twojego zaufania.",
  },
  
  id: {
    title: "Kebijakan Privasi",
    lastUpdated: "Terakhir diperbarui",
    backToHome: "Kembali ke Beranda",
    intro: "Di Wishio, kami menganggap serius privasi Anda. Kebijakan ini menjelaskan bagaimana kami menangani informasi Anda.",
    
    section1Title: "Informasi yang Tidak Kami Kumpulkan",
    section1Icon: Shield,
    section1Content: "Jika Anda tidak menggunakan aplikasi web Wishio, kami tidak menyimpan informasi pribadi apa pun tentang Anda. Aplikasi seluler dirancang untuk bekerja secara lokal di perangkat Anda, menjaga data Anda tetap pribadi dan aman.",
    
    section2Title: "Informasi Saat Menggunakan Aplikasi Web",
    section2Icon: Database,
    section2Content: "Jika Anda memilih untuk menggunakan aplikasi web Wishio, kontak yang Anda bagikan disimpan di server kami untuk mengaktifkan fungsionalitas web. Namun, informasi ini tidak digunakan, dijual, atau diakses oleh kami untuk tujuan apa pun selain menyediakan layanan yang Anda minta.",
    
    section3Title: "Analitik Anonim",
    section3Icon: BarChart3,
    section3Content: "Kami mengumpulkan analitik penggunaan anonim untuk meningkatkan layanan kami. Ini termasuk:",
    section3List: [
      "Bagian aplikasi yang paling banyak digunakan",
      "Negara penggunaan",
      "Model perangkat",
      "Preferensi bahasa"
    ],
    section3Footer: "Data ini selalu dikumpulkan secara anonim dan hanya digunakan untuk memberikan layanan yang lebih baik, memprioritaskan fitur baru, dan meningkatkan pengalaman pengguna.",
    
    section4Title: "Keamanan Data",
    section4Icon: Lock,
    section4Content: "Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi data apa pun yang kami simpan. Informasi Anda dienkripsi dan disimpan dengan aman.",
    
    contactTitle: "Hubungi Kami",
    contactContent: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:",
    
    commitment: "Komitmen Kami",
    commitmentContent: "Wishio dibangun dengan privasi sebagai prinsip inti. Kami percaya Anda harus memiliki kendali penuh atas data pribadi Anda, dan kami berkomitmen untuk menjaga kepercayaan Anda.",
  },
};

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = privacyTranslations[language] || privacyTranslations.en;
  const currentDate = new Date().toLocaleDateString(language, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const sections = [
    { key: 'section1', icon: t.section1Icon },
    { key: 'section2', icon: t.section2Icon },
    { key: 'section3', icon: t.section3Icon },
    { key: 'section4', icon: t.section4Icon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToHome}</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-slate-800">{siteConfig.appName}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              {t.title}
            </h1>
            <p className="text-slate-500">
              {t.lastUpdated}: {currentDate}
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const IconComponent = t[`${section.key}Icon`];
              return (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-rose-500" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-slate-800 mb-3">
                        {t[`${section.key}Title`]}
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        {t[`${section.key}Content`]}
                      </p>
                      
                      {/* List for section 3 */}
                      {section.key === 'section3' && t.section3List && (
                        <>
                          <ul className="mt-4 space-y-2">
                            {t.section3List.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p className="text-slate-600 leading-relaxed mt-4">
                            {t.section3Footer}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mt-6"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t.contactTitle}
            </h2>
            <p className="text-slate-600 mb-2">
              {t.contactContent}
            </p>
            <a 
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-rose-500 hover:text-rose-600 font-medium transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 mt-8 text-center"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {t.commitment}
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.commitmentContent}
            </p>
          </motion.div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {siteConfig.companyName}. 
              <a 
                href={siteConfig.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 ml-1"
              >
                interware.dev
              </a>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
