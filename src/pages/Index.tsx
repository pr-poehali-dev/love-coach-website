import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1E293B]">LoveCoach.Pro</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-[#2563EB] transition-colors">Главная</a>
            <a href="#services" className="text-gray-600 hover:text-[#2563EB] transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-[#2563EB] transition-colors">О проекте</a>
            <a href="#contact" className="text-gray-600 hover:text-[#2563EB] transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-[#2563EB] to-[#1E293B] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Коучинг для пар и индивидуальных отношений
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Пойми друг друга. Услышь. Почувствуй.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-blue-200">
                  Помогаем людям научиться строить эмоционально зрелые и устойчивые отношения через развитие soft-навыков, эмпатии и практики осознанности.
                </p>
                <Button size="lg" className="bg-white text-[#2563EB] hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                  Записаться на консультацию
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl overflow-hidden">
                <img 
                  src="/img/d69a021d-43c9-42b6-8c13-1a08006355c2.jpg" 
                  alt="Эмоциональная связь в отношениях" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6">О проекте</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наша миссия — помочь людям научиться строить эмоционально зрелые и устойчивые отношения
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E293B]">Эмпатия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Развиваем способность понимать и чувствовать своего партнёра</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E293B]">Коммуникация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Учим открыто и честно выражать свои потребности</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E293B]">Близость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Помогаем восстановить и углубить эмоциональную связь</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6">С какими запросами мы работаем</h2>
            <p className="text-xl text-gray-600">Помогаем справиться с основными вызовами в отношениях</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "AlertTriangle", title: "Частые конфликты", desc: "Учим конструктивно решать разногласия" },
              { icon: "Snowflake", title: "Эмоциональный холод", desc: "Восстанавливаем тёплые отношения" },
              { icon: "HeartHandshake", title: "Желание вернуть близость", desc: "Помогаем заново найти друг друга" },
              { icon: "CloudRain", title: "Неразрешённые обиды", desc: "Прорабатываем болезненные моменты" },
              { icon: "Shield", title: "Страх расставания", desc: "Укрепляем основы отношений" },
              { icon: "Compass", title: "Потеря направления", desc: "Находим общие цели и ценности" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#2563EB]">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#1E293B]">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6">Наши услуги</h2>
            <p className="text-xl text-gray-600">Профессиональное сопровождение для каждой ситуации</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1E293B]">Индивидуальный коучинг</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Персональная работа один на один для решения личных вопросов в отношениях
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Длительность сессии</span>
                  <span className="font-semibold text-[#1E293B]">60 минут</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Стоимость</span>
                  <span className="font-bold text-2xl text-[#2563EB]">3 000 ₽</span>
                </div>
                <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1E293B]">Коучинг для пар</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Совместная работа с парой для улучшения взаимопонимания
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Длительность сессии</span>
                  <span className="font-semibold text-[#1E293B]">90 минут</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Стоимость</span>
                  <span className="font-bold text-2xl text-[#2563EB]">5 000 ₽</span>
                </div>
                <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1E293B]">Экспресс-сессия</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Краткая консультация для решения конкретного вопроса
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Длительность сессии</span>
                  <span className="font-semibold text-[#1E293B]">30 минут</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Стоимость</span>
                  <span className="font-bold text-2xl text-[#2563EB]">1 500 ₽</span>
                </div>
                <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1E293B]">Месячное сопровождение</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Поддержка в чате и регулярные сессии в течение месяца
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Формат</span>
                  <span className="font-semibold text-[#1E293B]">Чат + 4 сессии</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Стоимость</span>
                  <span className="font-bold text-2xl text-[#2563EB]">15 000 ₽</span>
                </div>
                <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на самые популярные вопросы о нашей работе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1E293B]">
                Это психотерапия?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Нет, это коучинг без медицинской диагностики. Мы работаем с здоровыми людьми, помогая развивать навыки общения и эмоциональную зрелость в отношениях.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1E293B]">
                Как проходят сессии?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Сессии проходят онлайн в удобное для вас время. Мы используем практические техники, упражнения на развитие эмпатии и навыки осознанного общения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1E293B]">
                Сколько времени нужно на результат?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Первые изменения многие клиенты замечают уже после 2-3 сессий. Для устойчивых результатов рекомендуем работу в течение 1-3 месяцев.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1E293B]">
                Можно ли заниматься без партнёра?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Да, индивидуальная работа очень эффективна. Изменения в вашем подходе к отношениям положительно влияют на динамику в паре.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1E293B]">
                Есть ли гарантии результата?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Мы гарантируем профессиональный подход и качественную работу. Результат зависит от вашей готовности работать над отношениями и применять полученные навыки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы помочь вам построить крепкие отношения</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E293B] mb-2">Email</h3>
                  <p className="text-gray-600">coach@lovecoach.pro</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E293B] mb-2">Telegram</h3>
                  <p className="text-gray-600">@lovecoach_pro</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E293B] mb-2">WhatsApp</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E293B]">Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашей ситуации..." rows={4} />
                </div>
                <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LoveCoach.Pro</h3>
              <p className="text-gray-300">
                Профессиональный коучинг для создания здоровых и крепких отношений
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Индивидуальный коучинг</li>
                <li>Коучинг для пар</li>
                <li>Экспресс-сессии</li>
                <li>Месячное сопровождение</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Оферта</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>coach@lovecoach.pro</li>
                <li>@lovecoach_pro</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-600 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
            <p>© 2024 LoveCoach.Pro. Все права защищены.</p>
            <p className="text-sm mt-4 md:mt-0">
              ИНН: 123456789012 | Услуги не являются медицинскими, психологическими или психиатрическими
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;