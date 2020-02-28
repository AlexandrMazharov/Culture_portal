import React from 'react';
import { withTranslation } from 'react-i18next';

import Title1 from '@core/titles/components/title1/Title1';
import Paragraph from '@core/paragraph/Paragraph';

import './style.css';

const ProjectDescription = ({ t }) => (
  <div className="project-description">
    <Title1 text={t('controls:title')} />
    <Paragraph
      text="Фотограф — профессия людей с необычным взглядом на мир"
    />
    <Paragraph
      text="За всю историю своего развития, фотоискусство преодолело огромный путь от чёрно-белых зернёных снимков до сверхкачественных фотографий в цифровом формате. Сегодня профессиональное фотооборудование доступно каждому желающему. Тем не менее, даже самая лучшая техника не сделает из её владельца профи: в этой сфере, как ни в какой другой, важны профессиональные навыки."
    />
    <Paragraph
      text="Фотограф — профессия, имеющая множество специализаций. Причём работа в разных стилях и жанрах подразумевает отличие деятельности и степени востребованности. В нашем веке фотографам приходится выживать в условиях сильной конкуренции, поэтому важно найти особую страсть в этой сфере. Только так получится развиться достичь мастерства. "
    />
    <Paragraph
      text="Мы мы бы хотели, чтобы наш портал приносил пользу и что бы вы ,используя его, открывали новых фотографов для себя. Мы  старались показать вам ваших земляков и ьем самым создать еще один повод для гордости."
    />
  </div>
);

export default withTranslation()(ProjectDescription);