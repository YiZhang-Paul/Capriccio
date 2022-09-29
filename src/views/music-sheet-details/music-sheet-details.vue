<template>
    <div class="container">
        <button @click="play()">Play</button>
        <button @click="stop()">Stop</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { MusicSheetService } from '@/services/music-sheet/music-sheet.service';
import { PlaybackService } from '@/services/playback/playback.service';
import { sheet } from '@/sheets/meditation-from-thais';

const musicSheetService = new MusicSheetService();
const playbackService = new PlaybackService();

export default defineComponent({
    methods: {
        play(): void {
            musicSheetService.overrideAccidentals(sheet);
            playbackService.play(sheet);
        },
        stop(): void {
            playbackService.stop();
        }
    }
});
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    button {
        margin: 3px;
    }
}
</style>
