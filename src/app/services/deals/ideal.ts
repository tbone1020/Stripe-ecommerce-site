import { Observable } from 'rxjs';

export abstract class IDeal {
  abstract getJSON(): Promise<any>;
}
