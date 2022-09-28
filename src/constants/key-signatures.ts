import { KeySignature } from '@/models/music-sheet/generic/key-signature';
import { KeySignatureName } from '@/enums/key-signature-name.enum';
import { Accidental } from '@/enums/accidental.enum';
import { NoteName } from '@/enums/note-name.enum';

export const keySignatures = [
    new KeySignature(KeySignatureName.DMajor, Accidental.Sharp, new Set([NoteName.C, NoteName.F]))
];
