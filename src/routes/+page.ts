import type { Load } from '@sveltejs/kit';
import projects from '../data/projects.json';
import blogs from '../data/blogs.json';

export const load: Load = () => {
    return {
        projects: projects, 
        blogs: blogs
    };
};