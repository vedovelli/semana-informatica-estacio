/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import faker from 'faker';

export default {
  course: Factory.extend({
    title() {
      return faker.fake('{{lorem.words}}');
    },
    description() {
      return faker.fake('{{lorem.paragraph}}');
    },
    grade() {
      return [
        'COMPORTAMENTO ORGANIZACIONAL',
        'ECONOMIA EMPRESARIAL',
        'MATEMÁTICA EMPRESARIAL',
        'PRINCÍPIOS DE GESTÃO',
        'CONTABILIDADE GERAL',
        'INOVAÇÃO E EMPREENDEDORISMO',
        'LIDERANÇA E COACHING',
      ];
    },
  }),
};
