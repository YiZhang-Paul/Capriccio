import { Synth, Vibrato, type SynthOptions } from 'tone';

import { stringConfigurations } from '@/constants/string-configurations';
import { vibratoConfigurations } from '@/constants/vibrato-configurations';
import { EffectAggregate } from '@/models/playback/effect-aggregate';
import type { ToneOption } from '@/models/playback/options/tone-option';
import type { VibratoType } from '@/enums/vibrato-type.enum';

let synths: Synth[] = [];
const effects = new EffectAggregate();

export class ToneService {

    public initialize(total: number): Synth[] {
        const option = { oscillator: { spread: 30 } } as SynthOptions;
        synths.forEach(_ => _.dispose());
        synths = new Array(total).fill(null).map(_ => new Synth(option).toDestination());

        return synths;
    }

    public configure(synth: Synth, toneOption: ToneOption): void {
        const { string, vibrato } = toneOption;
        const { type, volume } = stringConfigurations[string];
        synth.oscillator.type = type;
        synth.oscillator.volume.value = volume;

        if (vibrato) {
            this.enableVibrato(synth, vibrato);
        }
        else {
            this.disableVibrato();
        }
    }

    private enableVibrato(synth: Synth, type: VibratoType): void {
        this.disableVibrato();
        const { frequency, depth } = vibratoConfigurations[type];
        effects.vibrato = new Vibrato(frequency, depth).toDestination();
        synth.fan(effects.vibrato);
    }

    private disableVibrato(): void {
        effects.vibrato?.dispose();
        effects.vibrato = null;
    }
}
