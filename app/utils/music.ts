import { getAudio, peekAudio, playNote } from './audio'

const BEAT = 60 / 92
const LOOKAHEAD = 0.6

const progression = [
  { bass: 41, chord: [53, 57, 60, 64] },
  { bass: 40, chord: [52, 55, 59, 62] },
  { bass: 38, chord: [50, 53, 57, 60] },
  { bass: 36, chord: [48, 52, 55, 59] },
]

const bells = [72, 74, 76, 79, 81, 84]

// MIDI note number to frequency (A4 = note 69 = 440 Hz).
const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12)

let timer: ReturnType<typeof setInterval> | null = null
let bus: GainNode | null = null
let nextTime = 0
let step = 0

function playStep(ctx: AudioContext, out: AudioNode, t: number) {
  const bar = progression[Math.floor(step / 8) % progression.length]!
  const eighth = step % 8
  if (eighth === 0 || eighth === 4) {
    playNote(ctx, out, { freq: hz(bar.bass), at: 0, dur: BEAT * 1.6, vol: 0.09 }, t)
  }
  if (eighth === 2 || eighth === 6) {
    for (const midi of bar.chord) {
      playNote(ctx, out, { freq: hz(midi), at: 0, dur: BEAT * 0.9, vol: 0.016, type: 'triangle' }, t)
    }
  }
  if (Math.random() < 0.22) {
    const midi = bells[Math.floor(Math.random() * bells.length)]!
    playNote(ctx, out, { freq: hz(midi), at: 0, dur: 1.2, vol: 0.025 }, t)
  }
}

function schedule() {
  const ctx = peekAudio()
  if (!ctx || !bus) return
  // Schedule notes on the precise audio clock, ahead of time, so setInterval's own imprecision can't cause drift.
  while (nextTime < ctx.currentTime + LOOKAHEAD) {
    playStep(ctx, bus, nextTime)
    nextTime += BEAT / 2
    step = (step + 1) % 64
  }
}

export function startMusic() {
  if (timer) return
  const ctx = getAudio()
  bus = ctx.createGain()
  bus.gain.setValueAtTime(0.0001, ctx.currentTime)
  bus.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 1.5)
  bus.connect(ctx.destination)
  nextTime = ctx.currentTime + 0.1
  step = 0
  schedule()
  timer = setInterval(schedule, 150)
}

export function stopMusic() {
  const ctx = peekAudio()
  if (!timer || !bus || !ctx) return
  clearInterval(timer)
  timer = null
  const fading = bus
  fading.gain.cancelScheduledValues(ctx.currentTime)
  fading.gain.setValueAtTime(fading.gain.value, ctx.currentTime)
  fading.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4)
  setTimeout(() => fading.disconnect(), 1500)
  bus = null
}
