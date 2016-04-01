/** 
 * Scedules events from store "events". Read only!!!!.
**/
import React from 'react';
import { connect } from 'react-redux';
import { clone, sortBy } from 'lodash';

/**
 * @class Scheduler
 * A sequencer using audio context for timing.
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class SchedulerUtils {
  /**
   * @constructor Scheduler
   * @param {Object} cube cube object to schedule
   */
  constructor() {
    this.context;

    this.sequence;

    this.transport;

    /**
     * Interval to try and refire schedule.
     * @type {Number} in ms
     */
    this.lookahead = 40;

    /**
     * Time to look ahead in sequence to schedule.
     * @type {Number} in sec (audio context is in seconds)
     */
    this.scheduleAheadTime = 0.1;

    /**
     * Index of scheduled events.
     * @type {Number}
     */
    // TODO: feel like this doesn't need to be public
    this.index = 0;
    this.measure = 0;

    /**
     * Time at which to fire scheduled items.
     * @type {Number} in sec
     */
    // TODO: feel like this doesn't need to be public
    this.eventTime = 0;

    /**
     * Whether to keep interval for next scheduled event
     * @type {Boolean}
     */
    // TODO: this is sort of redundant, already in transport
    this.play = true;
  }

  // Converts Immutable object to array sorted by time.
  setSequence(sequence) {
    this.sequence = _.sortBy(_.clone(sequence.toArray()), 'time');
    console.log('set!!!!', this.sequence);
  }

  setTransport(transport) {
    this.transport = _.clone(transport.toObject());
    console.log('set transport!!!!', this.transport);
  }

  /**
   * Kicks off timer for animation events.
   */
  // TODO: I feel this needs to be in a utils folder, kinda
  // has to do with scheduling.. not 100% sure tbh.
  // maybe it's utils.createContext, returns a context
  // then we set this.context to that.
  startContext() {
    if (this.context === undefined) {
      var contextClass = window.AudioContext ||
          window.webkitAudioContext ||
          window.mozAudioContext || window.oAudioContext ||
          window.msAudioContext;

      if (contextClass) {
        this.context = new contextClass();
      }
    }
  }

  // TODO: so much to do here, but based on transport play and fire destination
  /**
   * Scheduler for sequence of events in sequence.js.
   */

  // TODO: BUG: if I put an event really far right of the grid, current measure time skips
  // to the next measure.
  schedule() {
    let nextEvent,
        eventTime,
        measure = 0;

    if (this.sequence && this.transport) {
      // TODO: might want to calculate this every tick, may need to
      // put back in constructor and set only at end of if,
      // and play/pause to get back on track.
      nextEvent = this.sequence[this.index];
      eventTime = nextEvent.time * this.transport.time;
      
      if ((eventTime + this.measure) < (this.context.currentTime +
        this.scheduleAheadTime)) {
        // console.log('measure?', this.measure);
        // console.log('nextEvent?', (eventTime + this.measure), (this.context.currentTime +
        // this.scheduleAheadTime), nextEvent);  

        this.index = ((this.index + 1) % this.sequence.length);

        // TODO: fire callback (rename to destination), with data. 
        if (this.index === 0 ) {
          console.log('\n\n---------NEW MEASURE---------\n\n');

          // No clue what to call this. Based on context time, so it's play/pause proof :D.
          var currentMeasureTime = (((Math.floor((this.context.currentTime + this.scheduleAheadTime) / this.transport.time)) * this.transport.time) + this.transport.time);

          console.log('added mutliple of 5?', currentMeasureTime);
          // TODO: measure is sort of a shitty name since it's measure * transport time
          this.measure = currentMeasureTime;
        }
      }
    }

    // Never not polling.
    window.setTimeout(() => {
      if (this.transport && this.transport.play === true) {
        this.schedule();
      }
    }, this.lookahead);
  }

  /**
   * Scheduler for sequence of events in sequence.js.
   *
   * @param {String} theClass space delimited classes I want to add
   */
  setClass(theClass) {
    document.querySelector('.' + theClass.split(' ')[0]).
        setAttribute('class', theClass);
  }

  mapStateToProps(store) {
    return {
      sequence: store.events,
      transport: store.transport
    };
  }
}

const schedulerUtils = new SchedulerUtils();
// Start scheduling once, not every time sequence/transport changes
schedulerUtils.startContext();
schedulerUtils.schedule();

const Scheduler = ({ sequence, transport }) => (
  <section className={'scheduler'}>
    /* this will refire EVERY TIME SEQUENCE CHANGES :0, so sick */
    Scheduler!!!
    { schedulerUtils.setSequence(sequence) }
    { schedulerUtils.setTransport(transport) }
  </section>
);

export default connect(schedulerUtils.mapStateToProps)(Scheduler);