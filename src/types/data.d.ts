export interface Project {
    id: number; 
    name: string;
    slug: string;
    category: string; 
    description: string; 
    technologies: string[]; 
    liveDemo: string; 
    sourceCode: string; 
    featuredImage:string; 
    featured: boolean;
}

export interface Blog {
    id: number;
    title: string;
    slug: string;
    author: string;
    featuredImage: string;
    blogUrl: string;
    tags: string[];
    createdOn: string;
    updatedOn: string;
    published: boolean; 
    featured: boolean;
}