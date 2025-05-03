import type { Load } from '@sveltejs/kit';
import projects from '../data/projects.json';

export const load: Load = () => {
    return {
        projects
    };
};