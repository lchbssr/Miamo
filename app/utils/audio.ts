let context: AudioContext | null = null

export function getAudio(): AudioContext {
  context ??= new AudioContext()
  if (context.state === 'suspended') void context.resume()
  return context
}

export function peekAudio(): AudioContext | null {
  return context
}

export function isAudioRunning(): boolean {
  return context?.state === 'running'
}

export interface Note {
  freq: number
  at: number
  dur: number
  vol?: number
  type?: OscillatorType
  slide?: number
}

export function playNote(ctx: AudioContext, destination: AudioNode, note: Note, start: number) {
  const t = start + note.at
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = note.type ?? 'sine'
  osc.frequency.setValueAtTime(note.freq, t)
  if (note.slide) osc.frequency.exponentialRampToValueAtTime(note.slide, t + note.dur)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(note.vol ?? 0.05, t + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + note.dur)
  osc.connect(gain).connect(destination)
  osc.start(t)
  osc.stop(t + note.dur + 0.02)
}

export type Sfx = 'hover' | 'select' | 'back' | 'add' | 'remove' | 'drop' | 'order'

const sfx: Record<Sfx, Note[]> = {
  hover: [{ freq: 1568, at: 0, dur: 0.05, vol: 0.02 }],
  select: [
    { freq: 784, at: 0, dur: 0.09, vol: 0.06, type: 'triangle' },
    { freq: 1175, at: 0.07, dur: 0.16, vol: 0.06, type: 'triangle' },
  ],
  back: [
    { freq: 1175, at: 0, dur: 0.08, vol: 0.05, type: 'triangle' },
    { freq: 784, at: 0.07, dur: 0.14, vol: 0.05, type: 'triangle' },
  ],
  add: [
    { freq: 1047, at: 0, dur: 0.1, vol: 0.05, type: 'triangle' },
    { freq: 1319, at: 0.06, dur: 0.1, vol: 0.05, type: 'triangle' },
    { freq: 1568, at: 0.12, dur: 0.24, vol: 0.05, type: 'triangle' },
  ],
  remove: [{ freq: 660, at: 0, dur: 0.14, vol: 0.05, type: 'triangle', slide: 400 }],
  drop: [{ freq: 240, at: 0, dur: 0.18, vol: 0.14, slide: 90 }],
  order: [
    { freq: 1047, at: 0, dur: 0.12, vol: 0.05, type: 'triangle' },
    { freq: 1319, at: 0.1, dur: 0.12, vol: 0.05, type: 'triangle' },
    { freq: 1568, at: 0.2, dur: 0.12, vol: 0.05, type: 'triangle' },
    { freq: 2093, at: 0.3, dur: 0.45, vol: 0.05, type: 'triangle' },
  ],
}

export function playSfx(name: Sfx) {
  // Hovering is not a user activation: creating the context then would only log a warning.
  if (name === 'hover' && !isAudioRunning()) return
  const ctx = getAudio()
  for (const note of sfx[name]) playNote(ctx, ctx.destination, note, ctx.currentTime + 0.005)
}
