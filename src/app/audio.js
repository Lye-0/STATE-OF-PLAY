"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TactileAudio = void 0;
class TactileAudio {
    context = null;
    enabled = false;
    noiseBuffer = null;
    constructor() { this.context = null; this.enabled = false; this.noiseBuffer = null; }
    async setEnabled(enabled) {
        if (!enabled) {
            this.enabled = false;
            return false;
        }
        const AudioContext = window.AudioContext;
        if (!AudioContext)
            return false;
        try {
            this.context || (this.context = new AudioContext());
            if (this.context.state === 'suspended')
                await this.context.resume();
            if (this.context.state !== 'running')
                return false;
            this.enabled = true;
            return true;
        }
        catch (_) {
            this.enabled = false;
            return false;
        }
    }
    tone(freq, end, duration, gain, type = 'sine', delay = 0) {
        const ctx = this.context;
        if (!ctx)
            return;
        const t = ctx.currentTime + delay;
        const oscillator = ctx.createOscillator();
        const envelope = ctx.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(Math.max(20, freq), t);
        oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, end), t + duration);
        envelope.gain.setValueAtTimet;
        envelope.gain.linearRampToValueAtTime(gain, t + 0.004);
        envelope.gain.exponentialRampToValueAtTime(0.0001, t + duration);
        oscillator.connect(envelope);
        envelope.connect(ctx.destination);
        oscillator.start(t);
        oscillator.stop(t + duration + 0.01);
        oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
    }
    noise(duration, gain, frequency = 3000, delay = 0) {
        const ctx = this.context;
        if (!ctx)
            return;
        if (!this.noiseBuffer) {
            this.noiseBuffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 0.3), ctx.sampleRate);
            const data = this.noiseBuffer.getChannelData(0);
            for (let i = 0; i < data.length; i++)
                data[i] = Math.random() * 2 - 1;
        }
        const t = ctx.currentTime + delay;
        const source = ctx.createBufferSource();
        source.buffer = this.noiseBuffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = frequency;
        filter.Q.value = 0.6;
        const envelope = ctx.createGain();
        envelope.gain.setValueAtTime(gain, t);
        envelope.gain.exponentialRampToValueAtTime(0.0001, t + duration);
        source.connect(filter);
        filter.connect(envelope);
        envelope.connect(ctx.destination);
        source.start(t);
        source.stop(t + duration);
        source.onended = () => { source.disconnect(); filter.disconnect(); envelope.disconnect(); };
    }
    play(config, on) {
        if (!this.enabled || !this.context || this.context.state !== 'running')
            return;
        const pitch = config.tone * (on ? 1 : 0.78);
        switch (config.id) {
            case 'liquid':
                this.tone(pitch * 1.5, pitch * .45, .15, .045);
                this.tone(pitch * 2, pitch, .08, .025, 'sine', .055);
                break;
            case 'bloom':
                this.tone(pitch, pitch * 1.015, .27, .018);
                this.tone(pitch * 1.5, pitch * 1.51, .22, .009, 'sine', .06);
                break;
            case 'prism':
                this.tone(pitch, pitch, .32, .021);
                this.tone(pitch * 1.498, pitch * 1.5, .24, .012, 'sine', .025);
                break;
            case 'eclipse':
                this.tone(pitch, pitch * 1.1, .25, .03);
                this.tone(pitch / 2, pitch / 2, .2, .02);
                break;
            case 'volt':
                this.noise(.09, .035, 4200);
                this.tone(pitch, pitch * .5, .16, .04, 'triangle');
                break;
            case 'fold':
                this.noise(.11, .08, 1300);
                this.tone(180, 65, .07, .045);
                break;
            case 'orbit':
                this.tone(pitch, pitch * .65, .23, .03);
                this.tone(95, 60, .08, .03);
                break;
            default:
                this.noise(.03, .1, 2000);
                this.tone(pitch, pitch * .4, .06, .065, 'triangle');
                this.noise(.018, .03, 4500, .033);
        }
    }
}
exports.TactileAudio = TactileAudio;
