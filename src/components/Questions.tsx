import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QuestionsUz() {
  return (
    <div className="flex flex-col justify-center pt-8">
      <p className="flex justify-center">Kop beriladigan savollar</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Infeksiyani yuqtirimaslik uchun nima qilish zarur?
          </AccordionTrigger>
          <AccordionContent className="p-4">
            Infeksiyani yuqtirmaslik uchun siz va oilangiz to&apos;rtta ehtiyot
            choralarini ko&apos;rishingiz mumkin:
            <ul>
              <br />
              <li>
                Tarkibida spirt bo&apos;lgan qo&apos;l tozalash vositalari yoki
                sovun bilan qo&apos;llarni tez-tez yuvib turish.
              </li>
              <li>
                Yo&apos;talish yoki aks urish paytida og&apos;iz va burningizni
                egilgan tirsak yoki qog&apos;oz dastro&apos;mol bilan berkiting,
                so&apos;ng dstro&apos;molni yopiq axlat idisihga tashlang.
              </li>
              <li>
                Shamollash yoki isitma alomatlari bo&apos;lgan har qanday kishi
                yaqindan muloqotda bo&apos;lishdan qoching.
              </li>
              <li>
                Agar sizda yoki bolangizda isitma, yo&apos;tal yoki nafas
                qisilishi bo&apos;lsa, tibbiy yordam uchun imkon qadar ertaroq
                murojaat qiling.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Oila a&apos;zolarida virus belgilari paydo bo&apos;lganda nima
            qilish kerak?
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Sizda yoki farzandingizda isitma, yo&apos;tal yoki nafas olish
                qiyinlashuvi alomatlari paydo bo&apos;lsa, imkon qadar tezroq
                tibbiy yordam uchun murojaat qilishingiz kerak. Agar
                koronavirusning yangi holatlari qayd etilgan mintaqaga borgan
                bo&apos;lsangiz yoki ushbu mintaqalarning biridan kelgan va
                respirator belgilari mavjud bo&apos;lgan odam bilan yaqin
                aloqada bo&apos;lgan bo&apos;lsangiz, darhol bu haqda o&apos;z
                shifokoringizga xabar bering.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Qanday qilib qo&apos;llarni to&apos;g&apos;ri yuvish kerak?
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>1-qadam. Qo&apos;lingizni oqayotgan suv bilan namlang.</li>
              <li>
                2-qadam. Nam qo&apos;llarga yetarli miqdorda sovun suring.
              </li>
              <li>
                3-qadam. Qo&apos;llaringizni bir-biringizga ishqalab,
                yuzalarini, ichki qismini, barmoqlar orasini va tirnoq ostini
                kamida 20 soniya davomida ishqalang.
              </li>
              <li>
                4-qadam. Qo&apos;llaringizni oqayotgan suv ostida yaxshilab
                yuving.
              </li>
              <li>
                5-qadam. Qo&apos;llaringizni toza mato yoki bir marta
                ishlatiladigan sochiq bilan quriting.
              </li>
              <li>
                Qo&apos;lingizni tez-tez, ayniqsa ovqatlanishdan oldin,
                burningizni qoqqaningizda, yo&apos;talganda yoki aks urgandan
                keyin va xojatxonadan keyin yuvib turing.
              </li>
              <li>
                Sovun va suv bo&apos;lmagan holda, tarkibida kamida 60% alkogol
                mavjud qo&apos;l antiseptigidan foydalaning. Qo&apos;llaringiz
                ifloslangandaularni albatta sovun va suv bilan yuving.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function QuestionsRu() {
  return (
    <div className="flex flex-col justify-center pt-8">
      <p className="flex justify-center">Часто задаваемые вопросы</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Причины нервных заболеваний?</AccordionTrigger>
          <AccordionContent className="p-4">
            Причин возникновения этих заболеваний множество. Они появляются под
            влиянием внутренних и внешних факторов.
            <ul>
              <br />
              <li>
                Если рассматривать внутренние причины, то страдающие различными
                соматическими и неврологическими заболеваниями, острыми
                нарушениями кровообращения головного мозга, черепно-мозговыми
                травмами, вызванными хроническими нарушениями нервно-мышечной
                проводимости, длительным течением заболевания, приемом различных
                лекарственных препаратов в результате длительного употребления
                больных может наблюдаться астения нервной системы.
              </li>
              <li>
                Теперь, если перейти к внешним факторам, интенсивности времени,
                неправильному образу жизни, неправильной организации дня, т. е.
                отсутствию нормализации труда и отдыха, недостатку сна,
                различным нагрузкам, даваемым организму без принятия учитывать
                физические возможности.Это может быть вызвано тягой к еде,
                несвоевременным приемом пищи, а также неправильным питанием.
              </li>
              <li>
                Кроме того, к астении нервной системы может привести и
                неправильная организация рабочих мест: недостаточное освещение,
                шум, неправильная циркуляция воздуха в здании, длительное
                сидение в одном и том же положении и работа во влажных
                помещениях.
              </li>
              <li>
                Причиной возникновения этого состояния у детей подросткового
                возраста может быть влияние семейного окружения. При потерях в
                семье или постоянном жестком контроле ситуации, когда у ребенка
                подавляется чувство свободы и самооценка, также приводят к
                напряжению нервной системы.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Профилактика нервных заболеваний</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Известно, что лучше предотвратить заболевание, чем лечить его.
                Поэтому важнейшим методом лечения является профилактика стресса
                нервной системы, астиневротического синдрома и депрессии.
              </li>
              <li>
                Для этого прежде всего необходимо наладить правильный образ
                жизни. Правильное распределение труда и отдыха, занятия спортом,
                своевременное питание повышают устойчивость к этому заболеванию.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Что такое НЕВРОЗ?</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Невроз, психоневроз, невротическое расстройство, неврозная
                болезнь (от древнегреческого Neuron «нерв», от новолатинского
                невроз) — комплекс длительно продолжающихся функциональных
                психогенных расстройств. Клиническая картина таких расстройств
                характеризуется астеническими, настойчивыми мыслями или
                признаками истерии, а также временным снижением умственной и
                физической работоспособности.
              </li>
              <li>
                Во всех случаях психогенными факторами являются конфликты
                (внутренние или внешние), воздействие ситуаций, вызывающих
                психологическую травму, стресс или длительное напряжение
                эмоционально-психической сферы психики. Понятие «невроз» ввел в
                медицину в 1776 году шотландский врач Уильям Каллен. Значение
                термина неоднократно пересматривалось, но до сих пор не
                существует общепринятого определения. Следует также отметить,
                что в медицине и биологии «неврозами» называют еще различные
                функциональные нарушения высшей нервной системы.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function QuestionsEng() {
  return (
    <div className="flex flex-col justify-center pt-8">
      <p className="flex justify-center">FAQ</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Causes of nervous diseases?</AccordionTrigger>
          <AccordionContent className="p-4">
            There are many reasons for the occurrence of these diseases. They
            appear under the influence of internal and external factors.
            <ul>
              <br />
              <li>
                If we consider internal causes, then those suffering from
                various somatic and neurological diseases, acute cerebral
                circulatory disorders, traumatic brain injuries caused by
                chronic disorders of neuromuscular conduction, long-term course
                of the disease, taking various medications as a result of
                prolonged use of patients may experience asthenia of the nervous
                system.
              </li>
              <li>
                Now, if we move on to external factors, time intensity, improper
                lifestyle, improper organization of the day, i.e. lack of
                normalization of work and rest, lack of sleep, various stresses
                given to the body without taking into account physical
                capabilities. This can be caused by cravings for food , untimely
                eating, as well as poor nutrition
              </li>
              <li>
                In addition, improper organization of workplaces can also lead
                to asthenia of the nervous system: insufficient lighting, noise,
                improper air circulation in the building, prolonged sitting in
                the same position and work in damp rooms.
              </li>
              <li>
                The cause of this condition in adolescent children may be the
                influence of the family environment. With losses in the family
                or constant tight control, situations where the child’s sense of
                freedom and self-esteem are suppressed also lead to tension in
                the nervous system.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Prevention of nervous diseases</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                It is known that it is better to prevent a disease than to treat
                it. Therefore, the most important treatment method is the
                prevention of stress in the nervous system, astyneurotic
                syndrome and depression.
              </li>
              <li>
                To do this, first of all, you need to establish the right
                lifestyle. Proper distribution of work and rest, exercise, and
                timely nutrition increase resistance to this disease.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is NEUROSIS?</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Neurosis, psychoneurosis, neurotic disorder, neurotic disease
                (from the ancient Greek Neuron “nerve”, from the New Latin
                neurosis) is a complex of long-term functional psychogenic
                disorders. The clinical picture of such disorders is
                characterized by asthenic, persistent thoughts or signs of
                hysteria, as well as a temporary decrease in mental and physical
                performance.
              </li>
              <li>
                In all cases, psychogenic factors are conflicts (internal or
                external), exposure to situations that cause psychological
                trauma, stress or prolonged tension in the emotional and mental
                sphere of the psyche. The concept of “neurosis” was introduced
                into medicine in 1776 by the Scottish physician William Cullen.
                The meaning of the term has been revised several times, but
                there is still no generally accepted definition. It should also
                be noted that in medicine and biology, “neuroses” are also
                called various functional disorders of the higher nervous
                system.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
