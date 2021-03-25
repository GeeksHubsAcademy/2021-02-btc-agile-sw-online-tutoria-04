import { AnimalImpl } from '../animal/AnimalImpl';
import { Snake } from './Snake';

export class SnakeImpl extends AnimalImpl implements Snake {
    move() : string {
        return "Slithering..." + super.move(30);
    }
}