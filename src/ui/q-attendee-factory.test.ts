import { QAttendeeFactory } from "./q-attendee-factory";
import { Humans } from "./humans";
import { Ticker } from "./ticker";
import { Roles } from "./human";

class TestTicker implements Ticker {
  public setInterval(cb: () => unknown, ms: number): unknown {
    return setInterval(() => {
      cb();
    }, 0);
  }
  public setTimeout(cb: () => unknown, ms: number): unknown {
    cb();
    return 4;
  }
  public clearTimeout(x: unknown): void { /**/ }
  public clearInterval(x: unknown): void {
    clearInterval(x as any);
  }
}
function createTestQFactory(): QAttendeeFactory {
  return new QAttendeeFactory({
    humans: new Humans({roles: [Roles.Attendee]}),
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
