const faker = require('faker');
import { format } from 'date-fns';
import { Pet } from './types';

function dateFormatter(dateString: string) {
  return format(new Date(dateString), 'dd/MM/yyyy');
}

export function petFactory(limit: number = 3): Pet[] {
  return Array.from({ length: limit }).map(_ => ({
    adopted: faker.datatype.boolean(),
    background: faker.lorem.sentences(),
    birthday: dateFormatter(faker.date.past()),
    goodForKids: faker.datatype.boolean(),
    joinedOn: dateFormatter(faker.date.past()),
    livesWithOtherAnimals: faker.datatype.boolean(),
    name: faker.name.firstName(),
    picture: faker.image.animals(),
  }));
}
