import type { OmniOscillatorType } from 'tone/build/esm/source/oscillator/OscillatorInterface';

import { StringConfiguration } from '@/models/playback/configurations/string-configuration';
import { StringName } from '@/enums/string-name.enum';

export const stringConfigurations = {
    [StringName.G]: new StringConfiguration<OmniOscillatorType>('amtriangle32', 4),
    [StringName.D]: new StringConfiguration<OmniOscillatorType>('amtriangle20', 2),
    [StringName.A]: new StringConfiguration<OmniOscillatorType>('amtriangle10', 2),
    [StringName.E]: new StringConfiguration<OmniOscillatorType>('amtriangle', 3)
};
