import { QAttendeeFactory } from "./q-attendee-factory";
import { Humans } from "./humans";
import { Ticker } from "./ticker";
import { Roles } from "./human";

class TestTicker implements Ticker {
  public setInterval(cb: () => unknown, ms: number): unknown {
    const o = {
      done: false,
      toClear: setTimeout(() => {
        while (!o.done) {
          cb();
        }
      }, 0)
    };
    return o;
  }
  public setTimeout(cb: () => unknown, ms: number): unknown {
    cb();
    return 4;
  }
  public clearTimeout(x: unknown): void { /**/ }
  public clearInterval(x: { done: boolean, toClear: unknown}): void {
    x.done = true;
    clearInterval(x.toClear as any);
  }
}

function createTestQFactory(): QAttendeeFactory {
  return new QAttendeeFactory({
    humans: new Humans({roles: [Roles.Attendee]}),
    maxHumansPerPuls: 10,
    ticker: new TestTicker(),
    frequencyMSec: 60000,
    amountHumans: 1000,
    peakMSec: 300,
    totalMSec: 3600000,
  });
}

test(
  'create', () => {
    expect(createTestQFactory().humans.length).toBe(0);
  }
);

test(
  'startFrequencyInterval', async() => {
    const qAttendeeFactory = createTestQFactory();

    return new Promise (rs => {
      qAttendeeFactory.onDones.push(() => {
        expect(qAttendeeFactory.frequencyInterval).toBeFalsy();
        expect(qAttendeeFactory.currentMSecs).toBeGreaterThanOrEqual(qAttendeeFactory.totalMSec);
        rs();
      });
      qAttendeeFactory.start();
    });
  }
);

test(
  'createAttendees', async() => {
    const qAttendeeFactory = createTestQFactory();

    return new Promise (rs => {
      qAttendeeFactory.onDones.push(() => {
        expect(qAttendeeFactory.humans.length).toBe(qAttendeeFactory.totalMSec / qAttendeeFactory.frequencyMSec);
        rs();
      });
      qAttendeeFactory.start();
    });
  }
);
