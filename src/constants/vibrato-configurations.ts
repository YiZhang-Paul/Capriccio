import { VibratoConfiguration } from '@/models/playback/configurations/vibrato-configuration';
import { VibratoType } from '@/enums/vibrato-type.enum';

export const vibratoConfigurations = {
    [VibratoType.Wide]: new VibratoConfiguration(6, 0.025),
    [VibratoType.Soft]: new VibratoConfiguration(7.5, 0.02),
    [VibratoType.Narrow]: new VibratoConfiguration(8.5, 0.0015)
};
