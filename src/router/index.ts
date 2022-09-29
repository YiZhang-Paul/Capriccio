import { createRouter, createWebHistory } from 'vue-router';

import MusicSheetDetails from '@/views/music-sheet-details/music-sheet-details.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: MusicSheetDetails }
    ]
});

export default router;
