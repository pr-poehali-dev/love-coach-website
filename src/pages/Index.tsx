import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-cyan-100 px-4 sm:px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            LoveCoach.Pro
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#home" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm lg:text-base">Главная</a>
            <a href="#services" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm lg:text-base">Услуги</a>
            <a href="#about" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm lg:text-base">О проекте</a>
            <a href="#contact" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm lg:text-base">Контакты</a>
          </div>
          <Button variant="outline" size="sm" className="md:hidden border-cyan-200">
            <Icon name="Menu" size={18} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-indigo-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-800">
                Коучинг для пар и 
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}индивидуальных отношений
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Пойми друг друга. Услышь. Почувствуй.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                  Помогаем людям научиться строить эмоционально зрелые и устойчивые отношения через развитие soft-навыков, эмпатии и практики осознанности.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Записаться на консультацию
                    <Icon name="ArrowRight" size={20} />
                  </Button>
                  <Button variant="outline" size="lg" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl">
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl">
                <div className="aspect-square sm:aspect-video bg-gradient-to-br from-cyan-200/50 to-blue-200/50 rounded-2xl overflow-hidden">
                  <img 
                    src="/img/d69a021d-43c9-42b6-8c13-1a08006355c2.jpg" 
                    alt="Эмоциональная связь в отношениях" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">О проекте</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Наша миссия — помочь людям научиться строить эмоционально зрелые и устойчивые отношения
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "Users",
                title: "Эмпатия",
                desc: "Развиваем способность понимать и чувствовать своего партнёра",
                gradient: "from-cyan-400 to-cyan-600"
              },
              {
                icon: "MessageCircle",
                title: "Коммуникация", 
                desc: "Учим открыто и честно выражать свои потребности",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                icon: "Heart",
                title: "Близость",
                desc: "Помогаем восстановить и углубить эмоциональную связь",
                gradient: "from-indigo-400 to-indigo-600"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="text-center p-6 sm:p-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-slate-800 mb-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-slate-600 text-center leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">С какими запросами мы работаем</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">Помогаем справиться с основными вызовами в отношениях</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "AlertTriangle", title: "Частые конфликты", desc: "Учим конструктивно решать разногласия", color: "rose" },
              { icon: "Snowflake", title: "Эмоциональный холод", desc: "Восстанавливаем тёплые отношения", color: "cyan" },
              { icon: "HeartHandshake", title: "Желание вернуть близость", desc: "Помогаем заново найти друг друга", color: "pink" },
              { icon: "CloudRain", title: "Неразрешённые обиды", desc: "Прорабатываем болезненные моменты", color: "blue" },
              { icon: "Shield", title: "Страх расставания", desc: "Укрепляем основы отношений", color: "emerald" },
              { icon: "Compass", title: "Потеря направления", desc: "Находим общие цели и ценности", color: "indigo" }
            ].map((item, index) => (
              <Card key={index} className="group p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={item.icon} size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg text-slate-800 leading-tight">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">Наши услуги</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">Профессиональное сопровождение для каждой ситуации</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "User",
                title: "Индивидуальный коучинг",
                desc: "Персональная работа один на один для решения личных вопросов в отношениях",
                duration: "60 минут",
                price: "3 000 ₽",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                icon: "Users",
                title: "Коучинг для пар",
                desc: "Совместная работа с парой для улучшения взаимопонимания",
                duration: "90 минут", 
                price: "5 000 ₽",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: "Zap",
                title: "Экспресс-сессия",
                desc: "Краткая консультация для решения конкретного вопроса",
                duration: "30 минут",
                price: "1 500 ₽",
                gradient: "from-indigo-500 to-purple-600"
              },
              {
                icon: "Calendar",
                title: "Месячное сопровождение",
                desc: "Поддержка в чате и регулярные сессии в течение месяца",
                duration: "Чат + 4 сессии",
                price: "15 000 ₽",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={service.icon} size={28} className="text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-slate-800 leading-tight">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-slate-600 text-center leading-relaxed mt-4">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-sm text-slate-600">Длительность</span>
                      <span className="font-semibold text-slate-800 text-sm">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-slate-600">Стоимость</span>
                      <span className={`font-bold text-xl sm:text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>{service.price}</span>
                    </div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white rounded-2xl py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">Часто задаваемые вопросы</h2>
            <p className="text-lg sm:text-xl text-slate-600">Ответы на самые популярные вопросы о нашей работе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Это психотерапия?",
                answer: "Нет, это коучинг без медицинской диагностики. Мы работаем с здоровыми людьми, помогая развивать навыки общения и эмоциональную зрелость в отношениях."
              },
              {
                question: "Как проходят сессии?",
                answer: "Сессии проходят онлайн в удобное для вас время. Мы используем практические техники, упражнения на развитие эмпатии и навыки осознанного общения."
              },
              {
                question: "Сколько времени нужно на результат?",
                answer: "Первые изменения многие клиенты замечают уже после 2-3 сессий. Для устойчивых результатов рекомендуем работу в течение 1-3 месяцев."
              },
              {
                question: "Можно ли заниматься без партнёра?",
                answer: "Да, индивидуальная работа очень эффективна. Изменения в вашем подходе к отношениям положительно влияют на динамику в паре."
              },
              {
                question: "Есть ли гарантии результата?",
                answer: "Мы гарантируем профессиональный подход и качественную работу. Результат зависит от вашей готовности работать над отношениями и применять полученные навыки."
              }
            ].map((item, index) => (
              <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className="bg-white/80 backdrop-blur-sm border border-cyan-100 rounded-2xl px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-slate-800 py-4 sm:py-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 sm:pb-6 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">Свяжитесь с нами</h2>
            <p className="text-lg sm:text-xl text-slate-600">Готовы помочь вам построить крепкие отношения</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: "Mail", title: "Email", contact: "coach@lovecoach.pro", gradient: "from-cyan-400 to-cyan-600" },
                { icon: "MessageCircle", title: "Telegram", contact: "@lovecoach_pro", gradient: "from-blue-400 to-blue-600" },
                { icon: "Phone", title: "WhatsApp", contact: "+7 (999) 123-45-67", gradient: "from-indigo-400 to-indigo-600" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">{item.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base">{item.contact}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="p-6 sm:p-8">
                <CardTitle className="text-xl sm:text-2xl text-slate-800">Напишите нам</CardTitle>
                <CardDescription className="text-slate-600">Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-6 sm:p-8 pt-0">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="rounded-xl border-cyan-200 focus:border-cyan-400 focus:ring-cyan-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="rounded-xl border-cyan-200 focus:border-cyan-400 focus:ring-cyan-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашей ситуации..." rows={4} className="rounded-xl border-cyan-200 focus:border-cyan-400 focus:ring-cyan-400" />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-2xl py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">LoveCoach.Pro</h3>
              <p className="text-slate-300 leading-relaxed">
                Профессиональный коучинг для создания здоровых и крепких отношений
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Индивидуальный коучинг</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Коучинг для пар</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Экспресс-сессии</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Месячное сопровождение</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Информация</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Оферта</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-cyan-400 transition-colors">coach@lovecoach.pro</li>
                <li className="hover:text-cyan-400 transition-colors">@lovecoach_pro</li>
                <li className="hover:text-cyan-400 transition-colors">+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-600 mb-6 sm:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-300 space-y-4 md:space-y-0">
            <p className="text-center md:text-left">© 2024 LoveCoach.Pro. Все права защищены.</p>
            <p className="text-xs sm:text-sm text-center md:text-right max-w-md">
              ИНН: 123456789012 | Услуги не являются медицинскими, психологическими или психиатрическими
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;