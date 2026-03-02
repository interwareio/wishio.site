import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, Shield, MessageSquareWarning, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { useLanguage } from "../../i18n/LanguageContext";
import WishioLogo from "./WishioLogo";

const termsTranslations = {
  en: {
    title: "Terms and Conditions",
    lastUpdated: "Last updated",
    backToHome: "Back to Home",
    intro:
      "By installing or using Wishio, you agree to these Terms and Conditions. If you do not agree, please stop using the app.",
    section1Title: "Limited Liability",
    section1Content:
      "Wishio is provided under a limited-liability framework. To the fullest extent permitted by applicable law, Interware SAS is not liable for indirect, incidental, special, punitive, or consequential damages arising out of, or related to, the use of or inability to use the app. In any event, Interware SAS total aggregate liability to the user is limited to the amount actually paid by that user for the app subscription during the previous 12 months.",
    section2Title: "If You Do Not Accept These Terms",
    section2Content:
      "If you do not accept these terms, you must stop using the app, uninstall it, and request any available subscription refund through the relevant store (App Store or Google Play), subject to that store's refund policies.",
    section3Title: "Data and Privacy",
    section3Content:
      "Contact data and other personal information remain on the user's device. For the app's standard operation, Interware SAS does not store customer personal data with third parties.",
    section4Title: "Generated Greetings and Messages",
    section4Content:
      "Greeting cards and messages generated through the app are the sole responsibility of the user. Users must not generate or send illegal, threatening, defamatory, discriminatory, or otherwise unlawful content in any applicable jurisdiction.",
    section5Title: "Governing Law and Jurisdiction",
    section5Content:
      "For all legal purposes, these terms are governed by the laws of the Oriental Republic of Uruguay. Any dispute, claim, or controversy arising out of or related to these terms or the use of the app shall be submitted exclusively to the competent courts of Montevideo, Uruguay, and the parties expressly waive any other jurisdiction that might otherwise apply.",
    contactTitle: "Contact",
    contactContent: "If you have any questions about these Terms and Conditions, contact us at:",
    closing:
      "Continued use of the app constitutes acceptance of the current version of these terms.",
  },
  es: {
    title: "Términos y Condiciones",
    lastUpdated: "Última actualización",
    backToHome: "Volver al Inicio",
    intro:
      "Al instalar o utilizar Wishio, aceptas estos Términos y Condiciones. Si no estás de acuerdo, debes abstenerte de usar la app.",
    section1Title: "Responsabilidad Limitada",
    section1Content:
      "Wishio se ofrece bajo un esquema de responsabilidad limitada. En la máxima medida permitida por la normativa aplicable, Interware SAS no será responsable por daños indirectos, incidentales, especiales, punitivos o consecuenciales derivados del uso o de la imposibilidad de uso de la app. En cualquier caso, la responsabilidad total acumulada de Interware SAS frente al usuario no podrá exceder el importe efectivamente pagado por dicho usuario durante los últimos 12 meses en concepto de suscripción.",
    section2Title: "Si No Aceptas Estos Términos",
    section2Content:
      "Si no aceptas estos términos, debes dejar de usar la aplicación, desinstalarla y solicitar al store correspondiente (App Store o Google Play, según corresponda) el eventual reembolso de la suscripción pagada, conforme a las políticas de dicho store.",
    section3Title: "Datos y Privacidad",
    section3Content:
      "Los datos de contactos y demás información personal del usuario se mantienen en el dispositivo del usuario. Para la operación estándar de la app, Interware SAS no almacena información personal del cliente en terceros.",
    section4Title: "Uso de Tarjetas y Mensajes Generados",
    section4Content:
      "Las tarjetas de saludos y mensajes generados desde la app son de exclusiva responsabilidad del usuario. El usuario se obliga a abstenerse de generar o enviar contenidos ilegales, amenazantes, difamatorios, discriminatorios o que infrinjan derechos de terceros, conforme a la legislación aplicable en cada jurisdicción.",
    section5Title: "Ley Aplicable y Jurisdicción",
    section5Content:
      "A todos los efectos legales, estos términos se regirán e interpretarán conforme a las leyes de la República Oriental del Uruguay. Toda controversia, reclamo o litigio que derive de estos términos o del uso de la app será sometido en forma exclusiva a la jurisdicción de los tribunales competentes de Montevideo, Uruguay, con renuncia expresa a cualquier otro fuero o jurisdicción que pudiera corresponder.",
    contactTitle: "Contacto",
    contactContent: "Si tienes preguntas sobre estos Términos y Condiciones, puedes escribirnos a:",
    closing:
      "El uso continuado de la aplicación implica la aceptación de la versión vigente de estos términos.",
  },
  pt: {
    title: "Termos e Condições",
    lastUpdated: "Última atualização",
    backToHome: "Voltar ao Início",
    intro:
      "Ao instalar ou usar o Wishio, você concorda com estes Termos e Condições. Se não concordar, deve interromper o uso do app.",
    section1Title: "Responsabilidade Limitada",
    section1Content:
      "O Wishio é fornecido sob um regime de responsabilidade limitada. Na máxima medida permitida pela lei aplicável, a Interware SAS não será responsável por danos indiretos, incidentais, especiais, punitivos ou consequenciais decorrentes do uso ou da impossibilidade de uso do app. Em qualquer hipótese, a responsabilidade total acumulada da Interware SAS perante o usuário fica limitada ao valor efetivamente pago por esse usuário nos últimos 12 meses pela assinatura.",
    section2Title: "Se Você Não Aceitar Estes Termos",
    section2Content:
      "Se você não aceitar estes termos, deve parar de usar o aplicativo, desinstalá-lo e solicitar à loja correspondente (App Store ou Google Play) eventual reembolso da assinatura paga, conforme as políticas da respectiva loja.",
    section3Title: "Dados e Privacidade",
    section3Content:
      "Os dados de contatos e outras informações pessoais permanecem no dispositivo do usuário. Para a operação padrão do app, a Interware SAS não armazena dados pessoais de clientes em terceiros.",
    section4Title: "Uso de Cartões e Mensagens Geradas",
    section4Content:
      "Os cartões e mensagens gerados pelo app são de exclusiva responsabilidade do usuário. O usuário deve se abster de gerar ou enviar conteúdo ilegal, ameaçador, difamatório, discriminatório ou que viole direitos de terceiros, conforme a legislação aplicável em cada jurisdição.",
    section5Title: "Lei Aplicável e Foro",
    section5Content:
      "Para todos os fins legais, estes termos serão regidos e interpretados de acordo com as leis da República Oriental do Uruguai. Qualquer disputa, reclamação ou litígio decorrente destes termos ou do uso do app será submetido exclusivamente aos tribunais competentes de Montevidéu, Uruguai, com renúncia expressa a qualquer outro foro que possa corresponder.",
    contactTitle: "Contato",
    contactContent: "Se você tiver dúvidas sobre estes Termos e Condições, escreva para:",
    closing:
      "O uso contínuo do aplicativo implica aceitação da versão vigente destes termos.",
  },
  fr: {
    title: "Conditions Générales",
    lastUpdated: "Dernière mise à jour",
    backToHome: "Retour à l'Accueil",
    intro:
      "En installant ou en utilisant Wishio, vous acceptez les présentes Conditions Générales. Si vous n'êtes pas d'accord, vous devez cesser d'utiliser l'application.",
    section1Title: "Responsabilité Limitée",
    section1Content:
      "Wishio est fourni dans le cadre d'un régime de responsabilité limitée. Dans la mesure maximale autorisée par la loi applicable, Interware SAS ne sera pas responsable des dommages indirects, accessoires, spéciaux, punitifs ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser l'application. En tout état de cause, la responsabilité totale cumulée d'Interware SAS envers l'utilisateur est limitée au montant effectivement payé par cet utilisateur au cours des 12 derniers mois au titre de l'abonnement.",
    section2Title: "Si Vous N'Acceptez Pas Ces Conditions",
    section2Content:
      "Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser l'application, la désinstaller et demander, le cas échéant, le remboursement de l'abonnement auprès du store concerné (App Store ou Google Play), conformément aux politiques de ce store.",
    section3Title: "Données et Confidentialité",
    section3Content:
      "Les données de contacts et les autres informations personnelles restent sur l'appareil de l'utilisateur. Pour le fonctionnement standard de l'application, Interware SAS ne stocke pas les données personnelles des clients auprès de tiers.",
    section4Title: "Utilisation des Cartes et Messages Générés",
    section4Content:
      "Les cartes de vœux et messages générés via l'application relèvent de la seule responsabilité de l'utilisateur. L'utilisateur doit s'abstenir de générer ou d'envoyer des contenus illégaux, menaçants, diffamatoires, discriminatoires ou portant atteinte aux droits de tiers, conformément à la législation applicable dans chaque juridiction.",
    section5Title: "Droit Applicable et Juridiction",
    section5Content:
      "À toutes fins légales, les présentes conditions sont régies et interprétées conformément aux lois de la République orientale de l'Uruguay. Tout différend, réclamation ou litige découlant des présentes conditions ou de l'utilisation de l'application sera soumis exclusivement aux tribunaux compétents de Montevideo, Uruguay, les parties renonçant expressément à toute autre juridiction pouvant leur être applicable.",
    contactTitle: "Contact",
    contactContent: "Si vous avez des questions concernant ces Conditions Générales, contactez-nous à :",
    closing:
      "L'utilisation continue de l'application vaut acceptation de la version en vigueur des présentes conditions.",
  },
  de: {
    title: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert",
    backToHome: "Zurück zur Startseite",
    intro:
      "Durch die Installation oder Nutzung von Wishio akzeptieren Sie diese Nutzungsbedingungen. Wenn Sie nicht einverstanden sind, dürfen Sie die App nicht weiter nutzen.",
    section1Title: "Beschränkte Haftung",
    section1Content:
      "Wishio wird unter einem Modell beschränkter Haftung bereitgestellt. Soweit gesetzlich zulässig, haftet Interware SAS nicht für indirekte, zufällige, besondere, Straf- oder Folgeschäden, die aus der Nutzung oder Nichtnutzbarkeit der App entstehen. In jedem Fall ist die gesamte kumulierte Haftung von Interware SAS gegenüber dem Nutzer auf den Betrag begrenzt, den dieser Nutzer in den letzten 12 Monaten für das Abonnement tatsächlich bezahlt hat.",
    section2Title: "Wenn Sie Diese Bedingungen Nicht Akzeptieren",
    section2Content:
      "Wenn Sie diese Bedingungen nicht akzeptieren, müssen Sie die Nutzung der App einstellen, sie deinstallieren und eine gegebenenfalls verfügbare Rückerstattung über den jeweiligen Store (App Store oder Google Play) gemäß dessen Richtlinien beantragen.",
    section3Title: "Daten und Datenschutz",
    section3Content:
      "Kontaktdaten und sonstige personenbezogene Informationen verbleiben auf dem Gerät des Nutzers. Für den regulären Betrieb der App speichert Interware SAS keine personenbezogenen Kundendaten bei Dritten.",
    section4Title: "Nutzung Generierter Grüße und Nachrichten",
    section4Content:
      "Über die App erstellte Grußkarten und Nachrichten liegen in der alleinigen Verantwortung des Nutzers. Der Nutzer hat es zu unterlassen, rechtswidrige, bedrohliche, verleumderische, diskriminierende oder Rechte Dritter verletzende Inhalte zu erzeugen oder zu versenden, entsprechend dem jeweils anwendbaren Recht.",
    section5Title: "Anwendbares Recht und Gerichtsstand",
    section5Content:
      "Für alle rechtlichen Zwecke unterliegen diese Bedingungen dem Recht der Orientalischen Republik Uruguay und werden entsprechend ausgelegt. Sämtliche Streitigkeiten, Ansprüche oder Verfahren aus oder im Zusammenhang mit diesen Bedingungen oder der Nutzung der App unterliegen ausschließlich der Zuständigkeit der zuständigen Gerichte in Montevideo, Uruguay; auf jeden anderen Gerichtsstand wird ausdrücklich verzichtet.",
    contactTitle: "Kontakt",
    contactContent: "Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns unter:",
    closing:
      "Die fortgesetzte Nutzung der App gilt als Zustimmung zur jeweils gültigen Fassung dieser Bedingungen.",
  },
  it: {
    title: "Termini e Condizioni",
    lastUpdated: "Ultimo aggiornamento",
    backToHome: "Torna alla Home",
    intro:
      "Installando o utilizzando Wishio, accetti i presenti Termini e Condizioni. Se non sei d'accordo, devi interrompere l'uso dell'app.",
    section1Title: "Responsabilità Limitata",
    section1Content:
      "Wishio è fornita secondo un regime di responsabilità limitata. Nella misura massima consentita dalla legge applicabile, Interware SAS non è responsabile per danni indiretti, incidentali, speciali, punitivi o consequenziali derivanti dall'uso o dall'impossibilità di usare l'app. In ogni caso, la responsabilità complessiva di Interware SAS nei confronti dell'utente è limitata all'importo effettivamente pagato dallo stesso utente negli ultimi 12 mesi per l'abbonamento.",
    section2Title: "Se Non Accetti Questi Termini",
    section2Content:
      "Se non accetti questi termini, devi interrompere l'uso dell'applicazione, disinstallarla e richiedere allo store competente (App Store o Google Play) l'eventuale rimborso dell'abbonamento pagato, secondo le politiche dello store.",
    section3Title: "Dati e Privacy",
    section3Content:
      "I dati dei contatti e le altre informazioni personali rimangono sul dispositivo dell'utente. Per il funzionamento standard dell'app, Interware SAS non memorizza dati personali dei clienti presso terzi.",
    section4Title: "Uso di Biglietti e Messaggi Generati",
    section4Content:
      "I biglietti di auguri e i messaggi generati tramite l'app sono di esclusiva responsabilità dell'utente. L'utente deve astenersi dal generare o inviare contenuti illegali, minacciosi, diffamatori, discriminatori o lesivi dei diritti di terzi, in conformità con la normativa applicabile in ogni giurisdizione.",
    section5Title: "Legge Applicabile e Foro Competente",
    section5Content:
      "A tutti gli effetti legali, i presenti termini sono disciplinati e interpretati secondo le leggi della Repubblica Orientale dell'Uruguay. Qualsiasi controversia, reclamo o lite derivante dai presenti termini o dall'uso dell'app sarà devoluta in via esclusiva ai tribunali competenti di Montevideo, Uruguay, con espressa rinuncia a qualsiasi altro foro eventualmente competente.",
    contactTitle: "Contatto",
    contactContent: "Se hai domande su questi Termini e Condizioni, contattaci a:",
    closing:
      "L'uso continuato dell'applicazione implica l'accettazione della versione vigente dei presenti termini.",
  },
  zh: {
    title: "条款与条件",
    lastUpdated: "最后更新",
    backToHome: "返回首页",
    intro:
      "安装或使用 Wishio 即表示你同意本条款与条件。若你不同意，应停止使用本应用。",
    section1Title: "有限责任",
    section1Content:
      "Wishio 在有限责任框架下提供。在适用法律允许的最大范围内，Interware SAS 不对因使用或无法使用本应用而产生的任何间接、附带、特殊、惩罚性或后果性损害承担责任。在任何情况下，Interware SAS 对用户承担的累计总责任不超过该用户在前 12 个月内就订阅实际支付的金额。",
    section2Title: "若你不接受本条款",
    section2Content:
      "若你不接受本条款，你必须停止使用本应用、卸载本应用，并根据相应商店（App Store 或 Google Play）的退款政策申请可能适用的订阅退款。",
    section3Title: "数据与隐私",
    section3Content:
      "联系人数据及其他个人信息保留在用户设备中。对于应用的标准运行，Interware SAS 不会将客户个人信息存储在第三方。",
    section4Title: "生成贺卡与消息的使用",
    section4Content:
      "通过本应用生成的贺卡和消息由用户自行承担全部责任。用户不得生成或发送在适用司法辖区内属于非法、威胁、诽谤、歧视或侵犯第三方权利的内容。",
    section5Title: "适用法律与管辖",
    section5Content:
      "在所有法律意义上，本条款应受乌拉圭东岸共和国法律管辖并据其解释。因本条款或本应用使用而产生或与之相关的任何争议、请求或诉讼，应专属提交乌拉圭蒙得维的亚有管辖权的法院审理，各方明确放弃任何其他可能适用的管辖权。",
    contactTitle: "联系方式",
    contactContent: "如对本条款与条件有疑问，请联系：",
    closing:
      "继续使用本应用即视为你接受本条款的现行版本。",
  },
  ja: {
    title: "利用規約",
    lastUpdated: "最終更新日",
    backToHome: "ホームに戻る",
    intro:
      "Wishio をインストールまたは利用することにより、本利用規約に同意したものとみなされます。同意しない場合は、アプリの利用を中止してください。",
    section1Title: "責任の制限",
    section1Content:
      "Wishio は責任制限の枠組みで提供されます。適用法で許容される最大限の範囲において、Interware SAS は、アプリの利用または利用不能に起因する間接損害、付随的損害、特別損害、懲罰的損害、結果的損害について責任を負いません。いかなる場合でも、Interware SAS のユーザーに対する累積責任総額は、当該ユーザーが過去 12 か月間にサブスクリプションとして実際に支払った金額を上限とします。",
    section2Title: "本規約に同意しない場合",
    section2Content:
      "本規約に同意しない場合は、アプリの利用を停止し、アプリをアンインストールし、各ストア（App Store または Google Play）のポリシーに従って、該当するサブスクリプション返金を申請してください。",
    section3Title: "データとプライバシー",
    section3Content:
      "連絡先データおよびその他の個人情報はユーザー端末内に保持されます。アプリの通常運用において、Interware SAS は顧客の個人情報を第三者に保存しません。",
    section4Title: "生成メッセージ・カードの利用",
    section4Content:
      "アプリで生成されたグリーティングカードおよびメッセージは、ユーザーの単独責任となります。ユーザーは、適用される各法域において違法、脅迫的、中傷的、差別的、または第三者の権利を侵害する内容を生成・送信してはなりません。",
    section5Title: "準拠法および管轄",
    section5Content:
      "法的なあらゆる目的において、本規約はウルグアイ東方共和国の法令に準拠し、これに従って解釈されます。本規約またはアプリ利用に起因または関連する一切の紛争、請求、訴訟は、ウルグアイ・モンテビデオの管轄裁判所の専属管轄に付され、当事者は他の管轄を明示的に放棄します。",
    contactTitle: "お問い合わせ",
    contactContent: "本利用規約に関するご質問は、以下までご連絡ください：",
    closing:
      "アプリの継続利用は、本規約の最新版への同意を意味します。",
  },
  ko: {
    title: "이용약관",
    lastUpdated: "최종 업데이트",
    backToHome: "홈으로 돌아가기",
    intro:
      "Wishio를 설치하거나 사용하면 본 이용약관에 동의한 것으로 간주됩니다. 동의하지 않는 경우 앱 사용을 중단해야 합니다.",
    section1Title: "책임의 제한",
    section1Content:
      "Wishio는 제한된 책임 체계에 따라 제공됩니다. 관련 법령이 허용하는 최대 범위 내에서, Interware SAS는 앱의 사용 또는 사용 불가로 인해 발생하는 간접, 부수, 특별, 징벌적 또는 결과적 손해에 대해 책임을 지지 않습니다. 어떠한 경우에도 Interware SAS의 사용자에 대한 총 누적 책임은 해당 사용자가 최근 12개월 동안 구독에 대해 실제로 지불한 금액을 초과하지 않습니다.",
    section2Title: "약관에 동의하지 않는 경우",
    section2Content:
      "약관에 동의하지 않는 경우 앱 사용을 중단하고 앱을 삭제한 후, 해당 스토어(App Store 또는 Google Play)의 환불 정책에 따라 구독 환불을 요청해야 합니다.",
    section3Title: "데이터 및 개인정보",
    section3Content:
      "연락처 데이터 및 기타 개인정보는 사용자 기기에 보관됩니다. 앱의 일반적인 운영을 위해 Interware SAS가 고객 개인정보를 제3자에 저장하지는 않습니다.",
    section4Title: "생성된 카드 및 메시지 사용",
    section4Content:
      "앱에서 생성된 축하 카드 및 메시지에 대한 책임은 전적으로 사용자에게 있습니다. 사용자는 적용 가능한 각 관할권에서 불법, 위협, 명예훼손, 차별적이거나 제3자 권리를 침해하는 내용을 생성하거나 전송해서는 안 됩니다.",
    section5Title: "준거법 및 관할",
    section5Content:
      "모든 법적 목적상 본 약관은 우루과이 동방공화국 법률에 따라 규율되고 해석됩니다. 본 약관 또는 앱 사용과 관련하여 발생하는 모든 분쟁, 청구 또는 소송은 우루과이 몬테비데오의 관할 법원에 전속적으로 제기되며, 당사자는 적용될 수 있는 다른 관할을 명시적으로 포기합니다.",
    contactTitle: "문의",
    contactContent: "본 이용약관에 관한 문의는 아래로 연락해 주세요:",
    closing:
      "앱을 계속 사용하는 경우 본 약관의 최신 버전에 동의한 것으로 간주됩니다.",
  },
  ar: {
    title: "الشروط والأحكام",
    lastUpdated: "آخر تحديث",
    backToHome: "العودة إلى الرئيسية",
    intro:
      "بتثبيت Wishio أو استخدامه، فإنك توافق على هذه الشروط والأحكام. إذا لم توافق، يجب عليك التوقف عن استخدام التطبيق.",
    section1Title: "تحديد المسؤولية",
    section1Content:
      "يتم تقديم Wishio وفق إطار مسؤولية محدودة. إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل Interware SAS المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو عقابية أو تبعية ناشئة عن استخدام التطبيق أو عدم القدرة على استخدامه. وفي جميع الأحوال، تقتصر المسؤولية الإجمالية التراكمية لـ Interware SAS تجاه المستخدم على المبلغ الذي دفعه المستخدم فعليًا مقابل الاشتراك خلال آخر 12 شهرًا.",
    section2Title: "إذا لم تقبل هذه الشروط",
    section2Content:
      "إذا لم تقبل هذه الشروط، يجب عليك التوقف عن استخدام التطبيق وإلغاء تثبيته وطلب أي استرداد متاح للاشتراك عبر المتجر المعني (App Store أو Google Play) وفقًا لسياسات ذلك المتجر.",
    section3Title: "البيانات والخصوصية",
    section3Content:
      "تبقى بيانات جهات الاتصال وغيرها من المعلومات الشخصية على جهاز المستخدم. ولأغراض التشغيل القياسي للتطبيق، لا تقوم Interware SAS بتخزين البيانات الشخصية للعميل لدى أطراف ثالثة.",
    section4Title: "استخدام بطاقات ورسائل التهنئة",
    section4Content:
      "تتحمل أنت وحدك المسؤولية عن بطاقات التهنئة والرسائل التي يتم إنشاؤها عبر التطبيق. ويجب الامتناع عن إنشاء أو إرسال محتوى غير قانوني أو مهدد أو تشهيري أو تمييزي أو منتهك لحقوق الغير وفقًا للقوانين السارية في كل ولاية قضائية.",
    section5Title: "القانون الواجب التطبيق والاختصاص",
    section5Content:
      "لجميع الأغراض القانونية، تخضع هذه الشروط وتفسر وفق قوانين جمهورية الأوروغواي الشرقية. وتخضع أي منازعة أو مطالبة أو نزاع ينشأ عن هذه الشروط أو استخدام التطبيق للاختصاص الحصري للمحاكم المختصة في مونتيفيديو، الأوروغواي، مع التنازل الصريح عن أي اختصاص آخر قد ينعقد بخلاف ذلك.",
    contactTitle: "التواصل",
    contactContent: "إذا كانت لديك أسئلة حول هذه الشروط والأحكام، يمكنك مراسلتنا على:",
    closing:
      "الاستمرار في استخدام التطبيق يعني قبول النسخة السارية من هذه الشروط.",
  },
  hi: {
    title: "नियम और शर्तें",
    lastUpdated: "अंतिम अपडेट",
    backToHome: "होम पर वापस जाएँ",
    intro:
      "Wishio को इंस्टॉल या उपयोग करके आप इन नियमों और शर्तों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो ऐप का उपयोग बंद करें।",
    section1Title: "सीमित दायित्व",
    section1Content:
      "Wishio सीमित दायित्व ढांचे के अंतर्गत प्रदान किया जाता है। लागू कानून द्वारा अनुमत अधिकतम सीमा तक, Interware SAS ऐप के उपयोग या उपयोग न कर पाने से उत्पन्न किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, दंडात्मक या परिणामी नुकसान के लिए उत्तरदायी नहीं होगी। किसी भी स्थिति में, Interware SAS की कुल संचयी देयता पिछले 12 महीनों में उपयोगकर्ता द्वारा सदस्यता के लिए वास्तव में भुगतान की गई राशि से अधिक नहीं होगी।",
    section2Title: "यदि आप इन शर्तों को स्वीकार नहीं करते",
    section2Content:
      "यदि आप इन शर्तों को स्वीकार नहीं करते, तो आपको ऐप का उपयोग बंद करना होगा, इसे अनइंस्टॉल करना होगा, और संबंधित स्टोर (App Store या Google Play) की नीतियों के अनुसार सदस्यता रिफंड का अनुरोध करना होगा।",
    section3Title: "डेटा और गोपनीयता",
    section3Content:
      "संपर्क डेटा और अन्य व्यक्तिगत जानकारी उपयोगकर्ता के डिवाइस पर ही रहती है। ऐप के मानक संचालन के लिए Interware SAS ग्राहक की व्यक्तिगत जानकारी किसी तृतीय पक्ष में संग्रहीत नहीं करती।",
    section4Title: "जनरेट किए गए संदेशों का उपयोग",
    section4Content:
      "ऐप से जनरेट किए गए ग्रीटिंग कार्ड और संदेशों की पूरी जिम्मेदारी उपयोगकर्ता की होगी। उपयोगकर्ता को लागू न्यायक्षेत्रों में अवैध, धमकीपूर्ण, मानहानिकारक, भेदभावपूर्ण या तृतीय पक्ष अधिकारों का उल्लंघन करने वाली सामग्री बनाने या भेजने से बचना होगा।",
    section5Title: "प्रासंगिक कानून और क्षेत्राधिकार",
    section5Content:
      "सभी कानूनी उद्देश्यों के लिए, ये शर्तें उरुग्वे गणराज्य (Republica Oriental del Uruguay) के कानूनों द्वारा शासित और व्याख्यायित होंगी। इन शर्तों या ऐप के उपयोग से उत्पन्न या संबंधित किसी भी विवाद, दावा या वाद का विशेष अधिकारक्षेत्र मोंटेवीडियो, उरुग्वे के सक्षम न्यायालयों को होगा, और पक्षकार किसी अन्य संभावित अधिकारक्षेत्र का स्पष्ट रूप से त्याग करते हैं।",
    contactTitle: "संपर्क",
    contactContent: "यदि आपके इन नियमों और शर्तों से संबंधित प्रश्न हों, तो हमें लिखें:",
    closing:
      "ऐप का निरंतर उपयोग इन शर्तों के वर्तमान संस्करण की स्वीकृति माना जाएगा।",
  },
  ru: {
    title: "Условия использования",
    lastUpdated: "Последнее обновление",
    backToHome: "Назад на главную",
    intro:
      "Устанавливая или используя Wishio, вы соглашаетесь с настоящими условиями. Если вы не согласны, вы должны прекратить использование приложения.",
    section1Title: "Ограничение ответственности",
    section1Content:
      "Wishio предоставляется на условиях ограниченной ответственности. В максимальной степени, допускаемой применимым правом, Interware SAS не несет ответственности за косвенные, случайные, специальные, штрафные или последующие убытки, возникающие из использования или невозможности использования приложения. В любом случае совокупная ответственность Interware SAS перед пользователем ограничивается суммой, фактически уплаченной этим пользователем за подписку за последние 12 месяцев.",
    section2Title: "Если Вы Не Принимаете Эти Условия",
    section2Content:
      "Если вы не принимаете эти условия, вы должны прекратить использование приложения, удалить его и запросить возможный возврат стоимости подписки через соответствующий магазин (App Store или Google Play) согласно его правилам.",
    section3Title: "Данные и Конфиденциальность",
    section3Content:
      "Контактные данные и иная персональная информация остаются на устройстве пользователя. Для стандартной работы приложения Interware SAS не хранит персональные данные клиента у третьих лиц.",
    section4Title: "Использование Сгенерированных Сообщений",
    section4Content:
      "Открытки и сообщения, созданные через приложение, являются исключительной ответственностью пользователя. Пользователь обязан воздерживаться от создания или отправки незаконного, угрожающего, клеветнического, дискриминационного контента или контента, нарушающего права третьих лиц, в соответствии с применимым законодательством соответствующей юрисдикции.",
    section5Title: "Применимое Право и Подсудность",
    section5Content:
      "Во всех правовых отношениях настоящие условия регулируются и толкуются в соответствии с законодательством Восточной Республики Уругвай. Любой спор, требование или разногласие, возникающие из настоящих условий или использования приложения, подлежат исключительной юрисдикции компетентных судов Монтевидео, Уругвай, при явном отказе сторон от любой иной юрисдикции, которая могла бы применяться.",
    contactTitle: "Контакты",
    contactContent: "Если у вас есть вопросы по настоящим условиям, напишите нам:",
    closing:
      "Продолжение использования приложения означает принятие действующей редакции этих условий.",
  },
  tr: {
    title: "Şartlar ve Koşullar",
    lastUpdated: "Son güncelleme",
    backToHome: "Ana Sayfaya Dön",
    intro:
      "Wishio'yu yükleyerek veya kullanarak bu Şartlar ve Koşulları kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayı bırakmalısınız.",
    section1Title: "Sınırlı Sorumluluk",
    section1Content:
      "Wishio sınırlı sorumluluk esasına göre sunulur. Uygulanabilir hukukun izin verdiği azami ölçüde, Interware SAS uygulamanın kullanımından veya kullanılamamasından kaynaklanan dolaylı, arızi, özel, cezai veya sonuçsal zararlardan sorumlu değildir. Her durumda, Interware SAS'in kullanıcıya karşı toplam sorumluluğu, ilgili kullanıcının son 12 ay içinde abonelik için fiilen ödediği tutarla sınırlıdır.",
    section2Title: "Bu Koşulları Kabul Etmiyorsanız",
    section2Content:
      "Bu koşulları kabul etmiyorsanız uygulamayı kullanmayı bırakmalı, uygulamayı kaldırmalı ve ilgili mağazanın (App Store veya Google Play) iade politikalarına tabi olarak abonelik iadesini talep etmelisiniz.",
    section3Title: "Veriler ve Gizlilik",
    section3Content:
      "Kişi verileri ve diğer kişisel bilgiler kullanıcının cihazında kalır. Uygulamanın standart çalışması için Interware SAS müşteri kişisel verilerini üçüncü taraflarda saklamaz.",
    section4Title: "Üretilen Mesaj ve Kartların Kullanımı",
    section4Content:
      "Uygulama üzerinden üretilen tebrik kartları ve mesajlar tamamen kullanıcının sorumluluğundadır. Kullanıcı, geçerli yargı alanlarında hukuka aykırı, tehdit edici, karalayıcı, ayrımcı veya üçüncü kişi haklarını ihlal eden içerik üretmekten ya da göndermekten kaçınmalıdır.",
    section5Title: "Uygulanacak Hukuk ve Yetki",
    section5Content:
      "Tüm hukuki amaçlar bakımından bu şartlar, Uruguay Doğu Cumhuriyeti hukukuna tabi olacak ve bu hukuka göre yorumlanacaktır. Bu şartlardan veya uygulamanın kullanımından doğan ya da bunlarla bağlantılı her türlü uyuşmazlık, talep veya dava münhasıran Montevideo, Uruguay'daki yetkili mahkemelerin yargı yetkisine tabi olup taraflar aksi halde uygulanabilecek diğer yargı yerlerinden açıkça feragat eder.",
    contactTitle: "İletişim",
    contactContent: "Bu Şartlar ve Koşullar hakkında sorularınız varsa bize yazabilirsiniz:",
    closing:
      "Uygulamanın kullanılmaya devam edilmesi, şartların güncel sürümünün kabul edildiği anlamına gelir.",
  },
  nl: {
    title: "Algemene Voorwaarden",
    lastUpdated: "Laatst bijgewerkt",
    backToHome: "Terug naar Home",
    intro:
      "Door Wishio te installeren of te gebruiken, ga je akkoord met deze Algemene Voorwaarden. Als je niet akkoord gaat, moet je het gebruik van de app stopzetten.",
    section1Title: "Beperkte Aansprakelijkheid",
    section1Content:
      "Wishio wordt aangeboden onder een regime van beperkte aansprakelijkheid. Voor zover maximaal toegestaan door toepasselijk recht, is Interware SAS niet aansprakelijk voor indirecte, incidentele, bijzondere, punitieve of gevolgschade die voortvloeit uit het gebruik van of het niet kunnen gebruiken van de app. In alle gevallen is de totale gecumuleerde aansprakelijkheid van Interware SAS jegens de gebruiker beperkt tot het bedrag dat die gebruiker in de afgelopen 12 maanden daadwerkelijk voor het abonnement heeft betaald.",
    section2Title: "Als Je Deze Voorwaarden Niet Accepteert",
    section2Content:
      "Als je deze voorwaarden niet accepteert, moet je stoppen met het gebruik van de app, de app verwijderen en een eventuele terugbetaling van het abonnement aanvragen via de betreffende store (App Store of Google Play), volgens het beleid van die store.",
    section3Title: "Gegevens en Privacy",
    section3Content:
      "Contactgegevens en andere persoonlijke informatie blijven op het apparaat van de gebruiker. Voor de standaardwerking van de app slaat Interware SAS geen persoonlijke klantgegevens op bij derden.",
    section4Title: "Gebruik van Gegenereerde Berichten",
    section4Content:
      "Wenskaarten en berichten die via de app worden gegenereerd, vallen uitsluitend onder de verantwoordelijkheid van de gebruiker. De gebruiker dient zich te onthouden van het genereren of verzenden van onwettige, bedreigende, lasterlijke, discriminerende of anderszins onrechtmatige inhoud volgens de toepasselijke wetgeving in elke jurisdictie.",
    section5Title: "Toepasselijk Recht en Bevoegde Rechter",
    section5Content:
      "Voor alle juridische doeleinden worden deze voorwaarden beheerst door en uitgelegd volgens het recht van de Republiek ten Oosten van Uruguay. Elk geschil, elke vordering of procedure die voortvloeit uit of verband houdt met deze voorwaarden of het gebruik van de app, wordt exclusief voorgelegd aan de bevoegde rechtbanken van Montevideo, Uruguay, waarbij partijen uitdrukkelijk afstand doen van elke andere mogelijk toepasselijke jurisdictie.",
    contactTitle: "Contact",
    contactContent: "Als je vragen hebt over deze Algemene Voorwaarden, neem contact op via:",
    closing:
      "Voortgezet gebruik van de app geldt als aanvaarding van de geldende versie van deze voorwaarden.",
  },
  pl: {
    title: "Warunki Korzystania",
    lastUpdated: "Ostatnia aktualizacja",
    backToHome: "Powrót do strony głównej",
    intro:
      "Instalując lub używając Wishio, akceptujesz niniejsze Warunki Korzystania. Jeśli się nie zgadzasz, musisz zaprzestać korzystania z aplikacji.",
    section1Title: "Ograniczenie Odpowiedzialności",
    section1Content:
      "Wishio jest udostępniane w modelu ograniczonej odpowiedzialności. W maksymalnym zakresie dozwolonym przez obowiązujące prawo Interware SAS nie ponosi odpowiedzialności za szkody pośrednie, uboczne, szczególne, represyjne ani następcze wynikające z korzystania lub braku możliwości korzystania z aplikacji. W każdym przypadku łączna odpowiedzialność Interware SAS wobec użytkownika jest ograniczona do kwoty faktycznie zapłaconej przez użytkownika za subskrypcję w ciągu ostatnich 12 miesięcy.",
    section2Title: "Jeśli Nie Akceptujesz Tych Warunków",
    section2Content:
      "Jeśli nie akceptujesz tych warunków, musisz zaprzestać korzystania z aplikacji, odinstalować ją i wystąpić o ewentualny zwrot subskrypcji w odpowiednim sklepie (App Store lub Google Play), zgodnie z polityką tego sklepu.",
    section3Title: "Dane i Prywatność",
    section3Content:
      "Dane kontaktowe i inne dane osobowe pozostają na urządzeniu użytkownika. W standardowym działaniu aplikacji Interware SAS nie przechowuje danych osobowych klienta u podmiotów trzecich.",
    section4Title: "Użycie Generowanych Wiadomości i Kartek",
    section4Content:
      "Kartki okolicznościowe i wiadomości generowane przez aplikację są wyłączną odpowiedzialnością użytkownika. Użytkownik zobowiązuje się powstrzymać od tworzenia lub wysyłania treści nielegalnych, groźnych, zniesławiających, dyskryminujących albo naruszających prawa osób trzecich, zgodnie z prawem właściwym dla danej jurysdykcji.",
    section5Title: "Prawo Właściwe i Jurysdykcja",
    section5Content:
      "Dla wszelkich celów prawnych niniejsze warunki podlegają prawu Wschodniej Republiki Urugwaju i zgodnie z nim będą interpretowane. Wszelkie spory, roszczenia lub postępowania wynikające z niniejszych warunków lub korzystania z aplikacji podlegają wyłącznej jurysdykcji właściwych sądów w Montevideo, Urugwaj, a strony wyraźnie zrzekają się wszelkiej innej jurysdykcji, która mogłaby mieć zastosowanie.",
    contactTitle: "Kontakt",
    contactContent: "Jeśli masz pytania dotyczące tych Warunków Korzystania, napisz do nas:",
    closing:
      "Dalsze korzystanie z aplikacji oznacza akceptację aktualnej wersji tych warunków.",
  },
  id: {
    title: "Syarat dan Ketentuan",
    lastUpdated: "Terakhir diperbarui",
    backToHome: "Kembali ke Beranda",
    intro:
      "Dengan memasang atau menggunakan Wishio, Anda menyetujui Syarat dan Ketentuan ini. Jika Anda tidak setuju, Anda harus berhenti menggunakan aplikasi.",
    section1Title: "Tanggung Jawab Terbatas",
    section1Content:
      "Wishio disediakan berdasarkan skema tanggung jawab terbatas. Sepanjang diizinkan secara maksimal oleh hukum yang berlaku, Interware SAS tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, punitif, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan aplikasi. Dalam keadaan apa pun, total tanggung jawab kumulatif Interware SAS kepada pengguna dibatasi sebesar jumlah yang benar-benar dibayarkan pengguna untuk langganan selama 12 bulan terakhir.",
    section2Title: "Jika Anda Tidak Menyetujui Ketentuan Ini",
    section2Content:
      "Jika Anda tidak menyetujui ketentuan ini, Anda harus berhenti menggunakan aplikasi, mencopot pemasangan aplikasi, dan mengajukan kemungkinan pengembalian dana langganan melalui store terkait (App Store atau Google Play), sesuai kebijakan store tersebut.",
    section3Title: "Data dan Privasi",
    section3Content:
      "Data kontak dan informasi pribadi lainnya tetap berada di perangkat pengguna. Untuk operasional standar aplikasi, Interware SAS tidak menyimpan data pribadi pelanggan pada pihak ketiga.",
    section4Title: "Penggunaan Kartu dan Pesan yang Dihasilkan",
    section4Content:
      "Kartu ucapan dan pesan yang dihasilkan melalui aplikasi sepenuhnya menjadi tanggung jawab pengguna. Pengguna wajib tidak membuat atau mengirim konten yang melanggar hukum, mengancam, memfitnah, diskriminatif, atau melanggar hak pihak ketiga, sesuai hukum yang berlaku di setiap yurisdiksi.",
    section5Title: "Hukum yang Berlaku dan Yurisdiksi",
    section5Content:
      "Untuk semua tujuan hukum, ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Oriental Uruguay. Setiap sengketa, klaim, atau perkara yang timbul dari atau terkait dengan ketentuan ini atau penggunaan aplikasi tunduk secara eksklusif pada yurisdiksi pengadilan yang berwenang di Montevideo, Uruguay, dan para pihak secara tegas melepaskan yurisdiksi lain yang mungkin berlaku.",
    contactTitle: "Kontak",
    contactContent: "Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami di:",
    closing:
      "Penggunaan aplikasi secara berkelanjutan berarti Anda menerima versi ketentuan yang berlaku saat ini.",
  },
};

const TermsAndConditions = () => {
  const { language } = useLanguage();
  const t = termsTranslations[language] || termsTranslations.en;
  const currentDate = new Date().toLocaleDateString(language, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    { key: "section1", icon: Scale },
    { key: "section2", icon: TriangleAlert },
    { key: "section3", icon: Shield },
    { key: "section4", icon: MessageSquareWarning },
    { key: "section5", icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backToHome}</span>
            </Link>
            <div className="flex items-center gap-2">
              <WishioLogo className="w-8 h-8 rounded-lg" iconClassName="w-4 h-4" />
              <span className="font-bold text-slate-800">{siteConfig.appName}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">{t.title}</h1>
            <p className="text-slate-500">
              {t.lastUpdated}: {currentDate}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
            <p className="text-slate-600 text-lg leading-relaxed">{t.intro}</p>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
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
                      <h2 className="text-xl font-semibold text-slate-800 mb-3">{t[`${section.key}Title`]}</h2>
                      <p className="text-slate-600 leading-relaxed">{t[`${section.key}Content`]}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mt-6"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-3">{t.contactTitle}</h2>
            <p className="text-slate-600 mb-2">{t.contactContent}</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-rose-500 hover:text-rose-600 font-medium transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 mt-8 text-center"
          >
            <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">{t.closing}</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
