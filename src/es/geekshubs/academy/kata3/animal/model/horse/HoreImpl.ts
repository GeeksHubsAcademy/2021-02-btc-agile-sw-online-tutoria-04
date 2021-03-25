import { AnimalImpl } from '../animal/AnimalImpl';
import { Horse } from './Horse';

export class HorseImpl extends AnimalImpl implements Horse {
    move() : string {
        return "Galloping..." + super.move(45);
    }
}